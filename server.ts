import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Modality } from '@google/genai';
import { createServer as createViteServer } from 'vite';
import { prepareIndonesianSpeechText } from './src/utils/indonesianSpeechHelper';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Helper to convert linear16 PCM (24kHz, 1 channel, 16-bit) to standard WAV
function pcmToWav(pcmData: Buffer, sampleRate = 24000, numChannels = 1, bitsPerSample = 16): Buffer {
  const byteRate = (sampleRate * numChannels * bitsPerSample) / 8;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const subChunk2Size = pcmData.length;
  const chunkSize = 36 + subChunk2Size;

  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(chunkSize, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20); // Linear PCM
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write('data', 36);
  header.writeUInt32LE(subChunk2Size, 40);

  return Buffer.concat([header, pcmData]);
}

// In-memory audio cache for faster playback and lower latency
const ttsAudioCache = new Map<string, string>();

// Initialize Google GenAI with telemetry header
const getAIClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn('[Gemini AI] GEMINI_API_KEY is not set. Mock responses will be used as fallback.');
  }
  return new GoogleGenAI({
    apiKey: apiKey || 'dummy-key',
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// In-memory visit counter per site
const siteExplorationVisits: Record<string, number> = {};

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'Menghidupkan Donggala dalam Satu Pintu Digital',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// API: Get All Site Visit Counts
app.get('/api/visits', (req, res) => {
  res.json({ visits: siteExplorationVisits });
});

// API: Increment Site Visit Count (exploration of a site)
app.post('/api/visits/:siteId', (req, res) => {
  const { siteId } = req.params;
  siteExplorationVisits[siteId] = (siteExplorationVisits[siteId] || 0) + 1;
  res.json({ siteId, count: siteExplorationVisits[siteId] });
});

// API: AI Talking Tour Guide Persona (Google Arts & Culture Talking Tours inspired)
app.post('/api/gemini/talk', async (req, res) => {
  try {
    const { siteId, siteTitle, personaName, personaRole, systemPrompt, userMessage, conversationHistory } = req.body;

    if (!userMessage) {
      return res.status(400).json({ error: 'userMessage is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Fallback helpful response if API key is not configured yet
      return res.json({
        reply: `[Mode Panduan Budaya Donggala] Tabe! Sebagai ${personaName || siteTitle || 'Situs Sejarah Kota Tua Donggala'}, saya sangat bersyukur Anda berkunjung. Pada masa keemasan abad ke-19 dan awal abad ke-20, kawasan pesisir Banawa ini merupakan urat nadi perdagangan maritim internasional yang menghubungkan Jawa, Singapura, dan Eropa. Setiap batu karang dan balok kayu di sini menyimpan kenangan para pelaut tangguh, saudagar, dan kearifan adat Kaili. Ada hal lain yang ingin Anda ketahui?`
      });
    }

    const ai = getAIClient();

    const formattedHistory = Array.isArray(conversationHistory)
      ? conversationHistory.map((item: any) => `${item.sender === 'user' ? 'Pengunjung' : personaName}: ${item.text}`).join('\n')
      : '';

    const instruction = `
You are the interactive talking persona for the historic site/building "${siteTitle}" in Kota Tua Donggala (Kecamatan Banawa, Kabupaten Donggala, Sulawesi Tengah, Indonesia).
Persona Identity: ${personaName} (${personaRole}).
Specific Persona Guide: ${systemPrompt || 'Speak warmly as this heritage monument in first-person ("saya").'}

Context:
- This is part of the digital heritage project "Menghidupkan Donggala dalam Satu Pintu Digital" (FPK 2026 / Kemendikdasmen / BPK Wilayah XVIII).
- Historical background: Donggala was one of the busiest maritime ports on the Makassar Strait from the 15th to early 20th century, home to the Kingdom of Banawa (Magau Banawa), KPM steamship shipping lines, copra ("white gold") trade, traditional Donggala silk weaving (Tenun Donggala), and multicultural harmonious communities (Kaili indigenous, Bugis, Arab, Malay, Chinese, and European).
- Style: Speak warmly, vividly, engagingly, and concisely (2-4 paragraphs). Use respectful Indonesian, with occasional polite local greetings like "Tabe!", "Kareba maroso", or "Pangnganro salam".
- Answer the user's question directly with rich historical color, architectural nuances, and storytelling charm like Google Arts & Culture Talking Tours.
`;

    const promptText = `${instruction}\n\nRiwayat Percakapan Sebelumnya:\n${formattedHistory}\n\nPertanyaan Pengunjung Terbaru: "${userMessage}"\n\nJawablah sebagai ${personaName} dalam persona orang pertama:`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: promptText,
    });

    const replyText = response.text || 'Tabe! Terima kasih atas pertanyaannya. Mari kita jaga bersama kelestarian warisan budaya Kota Tua Donggala.';
    res.json({ reply: replyText });
  } catch (error: any) {
    console.error('Error in /api/gemini/talk:', error);
    res.status(500).json({
      error: 'Gagal memproses percakapan tur berbicara.',
      details: error?.message || String(error)
    });
  }
});

// API: Historical Story Generator / Deep Dive
app.post('/api/gemini/story', async (req, res) => {
  try {
    const { siteTitle, topic } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.json({
        story: `Kisah ${siteTitle}: Berdiri di pesisir Selat Makassar, situs ini adalah monumen abadi perdagangan rempah, hasil bumi kopra, dan saksi persahabatan antarbangsa di tanah Banawa.`
      });
    }

    const ai = getAIClient();
    const prompt = `Ceritakan kisah sejarah naratif yang mendalam, imersif, dan puitis tentang "${topic || 'Kejayaan Maritim'}" di "${siteTitle || 'Kota Tua Donggala'}". Buat dalam 3 paragraf narasi audio storytelling dengan gaya puitis, faktual, dan menggugah rasa cinta warisan cagar budaya. Gunakan bahasa Indonesia yang elegan.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    res.json({ story: response.text });
  } catch (error: any) {
    console.error('Error in /api/gemini/story:', error);
    res.status(500).json({ error: error?.message || 'Failed to generate story' });
  }
});

// API: High-Fidelity Text-to-Speech (TTS) using Gemini 3.1 Flash TTS with 'Leda' voice
// Profil: Suara Wanita Muda, Lembut (Leda) dengan Tone Suara Bersemangat & Penuh Energi
app.post('/api/gemini/tts', async (req, res) => {
  try {
    const { text, lang = 'id', voiceName } = req.body;

    if (!text || typeof text !== 'string' || !text.trim()) {
      return res.status(400).json({ error: 'Parameter text diperlukan.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(503).json({
        error: 'GEMINI_API_KEY belum dikonfigurasi.',
        fallbackToWebSpeech: true
      });
    }

    // Suara Default: Leda (Wanita Muda, Lembut, Bersemangat & Penuh Energi)
    const selectedVoice = voiceName || 'Leda';

    // Sesuaikan pengejaan, singkatan, angka, dan dialek bahasa Indonesia
    const preparedText = lang === 'id' ? prepareIndonesianSpeechText(text) : text.trim();

    // In-memory cache check untuk respon instan
    const cacheKey = `${lang}_${selectedVoice}_${preparedText}`;
    if (ttsAudioCache.has(cacheKey)) {
      const cachedUrl = ttsAudioCache.get(cacheKey)!;
      return res.json({
        audioUrl: cachedUrl,
        mimeType: 'audio/wav',
        voice: selectedVoice,
        tone: 'Wanita Muda, Lembut, Bersemangat & Penuh Energi',
        preparedText,
        cached: true
      });
    }

    const ai = getAIClient();

    // Instruksi pengarah intonasi agar model melafalkan dengan karakter wanita muda lembut & bertone bersemangat
    const promptText = lang === 'id'
      ? `Bicaralah dengan suara wanita muda Indonesia bernama Leda: bersuara lembut, ramah, artikulasi jernih, serta bertone bersemangat dan penuh energi (cheerful, energetic, warm storytelling). Lafalkan kalimat berikut secara alami dengan dialek dan intonasi bahasa Indonesia yang fasih dan artikulatif: ${preparedText}`
      : `Speak cheerfully and with energetic, youthful warmth: ${preparedText}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-tts-preview',
      contents: [{ parts: [{ text: promptText }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: selectedVoice }
          }
        }
      }
    });

    const part = response.candidates?.[0]?.content?.parts?.[0];
    const rawData = part?.inlineData?.data;
    const rawMime = part?.inlineData?.mimeType || 'audio/l16; rate=24000; channels=1';

    if (!rawData) {
      return res.status(502).json({
        error: 'Tidak ada audio yang dihasilkan dari model TTS.',
        fallbackToWebSpeech: true
      });
    }

    let finalAudioUrl: string;
    let finalMimeType = 'audio/wav';

    if (rawMime.includes('l16') || rawMime.includes('pcm')) {
      // Konversi buffer linear16 PCM 24kHz ke format WAV terstandar
      const pcmBuffer = Buffer.from(rawData, 'base64');
      const wavBuffer = pcmToWav(pcmBuffer, 24000, 1, 16);
      finalAudioUrl = `data:audio/wav;base64,${wavBuffer.toString('base64')}`;
    } else {
      finalAudioUrl = `data:${rawMime};base64,${rawData}`;
      finalMimeType = rawMime;
    }

    // Batasi cache maksimal 200 item
    if (ttsAudioCache.size > 200) {
      const firstKey = ttsAudioCache.keys().next().value;
      if (firstKey) ttsAudioCache.delete(firstKey);
    }
    ttsAudioCache.set(cacheKey, finalAudioUrl);

    res.json({
      audioUrl: finalAudioUrl,
      mimeType: finalMimeType,
      voice: selectedVoice,
      tone: 'Wanita Muda, Lembut, Bersemangat & Penuh Energi',
      preparedText
    });
  } catch (error: any) {
    console.error('Error in /api/gemini/tts:', error);
    res.status(500).json({
      error: 'Gagal menghasilkan audio TTS Gemini.',
      details: error?.message || String(error),
      fallbackToWebSpeech: true
    });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Menghidupkan Donggala Server running on http://localhost:${PORT}`);
  });
}

startServer();
