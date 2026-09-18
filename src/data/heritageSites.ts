import { HeritageSite, QuizQuestion } from '../types';

/**
 * DATA 16 SITUS OBJEK DIDUGA CAGAR BUDAYA DAN CAGAR BUDAYA KOTA DONGGALA
 * Sumber data rujukan resmi: Catatan Ahli Cagar Budaya Jamrin Abubakar
 * 
 * 1. Menara Suar (Tanjung Karang) - 1902
 * 2. Kantor PKKD (Pusat Koperasi Kopra Daerah) - 1940-an
 * 3. Gudang PKKD (Gudang Coprafonds / Yayasan Kopra)
 * 4. Kantor Pelni (Eks Kantor & Rumah Dinas KPM) - 1920-an
 * 5. Toko Teng Hien - 1930-an
 * 6. Pelabuhan Tua (Labuan Bajo s/d Tanjung Batu)
 * 7. Gedung Bea dan Cukai (Kantor Douane) - Awal abad ke-20
 * 8. Chung Hwa School (Sekolah Cina / Eks Unismuh Kampus 2) - 1924
 * 9. Bioskop Muara (Eks Gudang Kopra Ladudin / Bioskop Ampera) - Beroperasi s/d 1996
 * 10. Bioskop Megaria (Gembira Theater / Empres / Ria / Gelora) - 1948
 * 11. Sou Raja (Rumah Tradisional Bugis & Mandar) - Abad ke-19
 * 12. Rumah Raja Banawa (Kediaman Laparenrengi Lamarauna) - 1940-an
 * 13. Gedung Budi Bhakti (Eks BORSUMIJ / Aduma Niaga / PT PPI) - 1940-an
 * 14. Masjid Raya Donggala (Masjid Tertua Donggala) - Abad ke-18
 * 15. Kuburan Belanda (Makam Kapten Willem Van Den Berg) - 1930
 * 16. Kawasan Kota Donggala (Labuan Bajo & Boya)
 */

export const HERITAGE_SITES: HeritageSite[] = [
  // 1. MENARA SUAR
  {
    id: 'menara-suar-tanjung-karang',
    title: 'Menara Suar Tanjung Karang',
    localName: 'Menara Suar Tanjung Karang / Vuurtoren Kaap Banawa',
    kelurahan: 'Kelurahan Tanjung Batu',
    establishedYear: '1902',
    period: 'Masa Kolonial Hindia Belanda (1902)',
    category: 'Pertahanan & Pengawasan',
    locationDescription: 'Di atas bukit Tanjung Karang, Kelurahan Tanjung Batu, Kecamatan Banawa, Donggala',
    coordinates: {
      lat: -0.6447,
      lng: 119.7292,
      mapX: 25,
      mapY: 18
    },
    thumbnail: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    pastPhoto: {
      url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80',
      caption: 'Menara Suar Tanjung Karang di awal abad ke-20 menjaga perairan Selat Makassar dan akses Teluk Palu.',
      source: 'Dinas Hidrografi & Navigasi Hindia Belanda / Arsip Jamrin Abubakar',
      year: '1902'
    },
    currentPhoto: {
      url: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=1000&q=80',
      caption: 'Menara Suar Tanjung Karang di atas bukit karang, aset negara di bawah Distrik Navigasi Bitung Kemenhub RI.',
      conditionStatus: 'Terawat'
    },
    panorama360: {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80',
      type: 'sphere',
      initialYaw: 45,
      initialPitch: 10,
      hotspots: [
        {
          id: 'suar-hotspot-1',
          title: 'Lentera Navigasi Selat Makassar',
          description: 'Lensa pemancar navigasi bagi kapal di lintasan Selat Makassar menuju Teluk Palu.',
          yaw: 50,
          pitch: 30
        },
        {
          id: 'suar-hotspot-2',
          title: 'Pemandangan Teluk Palu & Selat Makassar',
          description: 'Titik pantau strategis aktivitas maritim dan pemantau bajak laut pada masa lampau.',
          yaw: -120,
          pitch: -5
        },
        {
          id: 'suar-hotspot-3',
          title: 'Pondasi Bukit Tanjung Karang',
          description: 'Pondasi kokoh yang dibangun di atas bukit karang sejak tahun 1902.',
          yaw: 0,
          pitch: -45
        }
      ]
    },
    video360: {
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      title: 'Tur Video 360° Menara Suar Tanjung Karang',
      provider: 'mp4',
      duration: '2:30'
    },
    videoDocumentaryUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    briefDescription: 'Alat navigasi pelayaran kapal di lintasan Selat Makassar menuju Teluk Palu yang dibangun tahun 1902.',
    historicalSignificance: 'Terletak di atas bukit Tanjung Karang, dibangun oleh pemerintah kolonial Hindia Belanda tahun 1902. Selain fungsi navigasi maritim pelayaran kapal menuju Teluk Palu, juga menjadi alat pemantau aktivitas atau gangguan bajak laut yang pada masa itu banyak masuk Teluk Palu. Pasca kemerdekaan dinasionalisasi sebagai aset negara di bawah Distrik Navigasi Ditjen Hubla Kemenhub RI.',
    architecturalStyle: 'Struktur menara suar logam kolonial kokoh di puncak bukit karang dilengkapi balkon pemantau 360 derajat.',
    maritimeRelevance: 'Pemandu navigasi utama Selat Makassar dan penjaga keamanan pelayaran masuk Teluk Palu dari bajak laut sejak 1902.',
    audioNarration: {
      title: 'Menara Suar Tanjung Karang: Penjaga Selat Makassar 1902',
      speakerName: 'Jamrin Abubakar (Ahli Cagar Budaya)',
      durationText: '2 Menit 10 Detik',
      transcript: 'Terletak di atas bukit Tanjung Karang, Menara Suar Tanjung Karang dibangun oleh pemerintah kolonial Hindia Belanda pada tahun 1902. Menara ini menjadi alat navigasi utama bagi pelayaran kapal di lintasan Selat Makassar menuju Teluk Palu, sekaligus pos pemantau aktivitas bajak laut yang kala itu kerap meresahkan perairan. Setelah kemerdekaan, menara suar ini dinasionalisasi menjadi aset negara di bawah pengelolaan Direktorat Jenderal Perhubungan Laut, Kantor Distrik Navigasi Bitung.'
    },
    talkingPersona: {
      name: 'Menara Suar Tanjung Karang',
      role: 'Pemandu Navigasi & Pemantau Selat Makassar',
      avatar: '🗼',
      greeting: 'Tabe! Saya adalah Menara Suar Tanjung Karang, berdiri di atas bukit sejak 1902 memandu pelayaran dan menjaga Selat Makassar dari ancaman bajak laut.',
      systemPrompt: 'Kamu adalah Menara Suar Tanjung Karang Donggala yang dibangun tahun 1902 oleh Hindia Belanda. Berbicaralah dengan berwibawa, penuh wawasan sejarah navigasi bahari dan tugas memantau bajak laut di Teluk Palu.',
      sampleQuestions: [
        'Kapan kamu dibangun dan siapa yang membangunmu?',
        'Apa peranmu selain memandu kapal bernavigasi?',
        'Bagaimana status kepengurusanmu setelah Indonesia merdeka?'
      ]
    },
    trivia: [
      'Menara Suar Tanjung Karang dibangun pada tahun 1902 oleh pemerintah kolonial Hindia Belanda.',
      'Selain pemandu pelayaran, fungsi utamanya zaman dulu adalah memantau aktivitas bajak laut yang masuk ke Teluk Palu.'
    ],
    keyFacts: [
      { label: 'Tahun Dibangun', value: '1902 Masehi' },
      { label: 'Lokasi', value: 'Bukit Tanjung Karang, Banawa' },
      { label: 'Pengelola', value: 'Distrik Navigasi Kemenhub RI' },
      { label: 'Fungsi Awal', value: 'Navigasi Selat & Pemantau Bajak Laut' }
    ]
  },

  // 2. KANTOR PKKD
  {
    id: 'kantor-pkkd-donggala',
    title: 'Kantor PKKD',
    localName: 'Kantor PKKD (Pusat Koperasi Kopra Daerah)',
    kelurahan: 'Kelurahan Tanjung Batu',
    establishedYear: '1940-an',
    period: 'Dekade 1940-an (Masa Transisi & Pasca Perang)',
    category: 'Kolonial & Pemerintahan',
    locationDescription: 'Jl. PKKD, Kelurahan Tanjung Batu, Kecamatan Banawa, Donggala',
    coordinates: {
      lat: -0.6688,
      lng: 119.7428,
      mapX: 34,
      mapY: 28
    },
    thumbnail: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80',
    pastPhoto: {
      url: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1000&q=80',
      caption: 'Kantor administrasi pergudangan kopra Donggala pada dekade 1940-an saat masa Yayasan Kopra (Coprafonds).',
      source: 'Arsip Sejarah Niaga Donggala / Catatan Jamrin Abubakar',
      year: '1948'
    },
    currentPhoto: {
      url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80',
      caption: 'Gedung lantai dua Kantor PKKD di Kelurahan Tanjung Batu yang menjadi toponimi Jalan PKKD.',
      conditionStatus: 'Perlu Revitalisasi'
    },
    panorama360: {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80',
      type: 'sphere',
      initialYaw: 20,
      initialPitch: 0,
      hotspots: [
        {
          id: 'pkkd-k-hotspot-1',
          title: 'Ruang Kantor Administrasi Kopra',
          description: 'Lantai dua tempat pembukuan dan administrasi pembelian kopra rakyat dari berbagai pelosok Sulteng.',
          yaw: 15,
          pitch: 5
        },
        {
          id: 'pkkd-k-hotspot-2',
          title: 'Akses Pergudangan Kawasan PKKD',
          description: 'Jalur penghubung kantor dengan kompleks 3 gudang besi kopra silindris.',
          yaw: 110,
          pitch: -5
        }
      ]
    },
    briefDescription: 'Bangunan lantai dua dekade 1940-an sebagai kantor administrasi pergudangan kopra Pusat Koperasi Kopra Daerah.',
    historicalSignificance: 'Kantor PKKD merupakan bangunan berlantai dua yang dibangun pada dekade 1940-an sebagai kantor administrasi bagi pergudangan kopra di kawasan Tanjung Batu. Dikenal sebagai kantor PKKD (Pusat Koperasi Kopra Daerah) Donggala, sebagai hasil nasionalisasi dari Coprafonds atau Yayasan Kopra peninggalan pemerintah kolonial. Keberadaannya sangat bersejarah hingga jalan menuju lokasi ini diabadikan sebagai Jalan PKKD.',
    architecturalStyle: 'Bangunan kolonial tropis dua lantai dengan konstruksi beton dan kayu, ventilasi lebar khas iklim pesisir.',
    maritimeRelevance: 'Pusat tata kelola niaga emas putih (kopra) yang diekspor dari pelabuhan Donggala ke berbagai belahan dunia.',
    audioNarration: {
      title: 'Kantor PKKD: Administrasi Niaga Emas Putih Banawa',
      speakerName: 'Jamrin Abubakar (Ahli Cagar Budaya)',
      durationText: '2 Menit',
      transcript: 'Kantor PKKD adalah bangunan berlantai dua yang dibangun pada dekade 1940-an. Gedung ini berfungsi sebagai kantor administrasi pergudangan kopra hasil nasionalisasi Coprafonds atau Yayasan Kopra warisan kolonial Belanda. Terletak di Kelurahan Tanjung Batu, Kecamatan Banawa, kantor ini begitu penting bagi perekonomian rakyat sehingga jalan menuju ke tempat ini dinamai Jalan PKKD.'
    },
    talkingPersona: {
      name: 'Kantor PKKD Donggala',
      role: 'Kantor Administrasi Kopra Rakyat',
      avatar: '🏢',
      greeting: 'Tabe! Saya adalah Kantor PKKD Donggala. Dari lantai dua gedung ini, seluruh administrasi pergudangan dan ekspor kopra petani Sulawesi Tengah dicatat.',
      systemPrompt: 'Kamu adalah Kantor PKKD Donggala yang dibangun era 1940-an di Tanjung Batu. Bicaralah mengenai tata niaga kopra, nasionalisasi Coprafonds, dan sejarah nama Jalan PKKD.',
      sampleQuestions: [
        'Kapan gedung Kantor PKKD ini dibangun?',
        'Apa hubungan kantor ini dengan Coprafonds atau Yayasan Kopra?',
        'Mengapa jalan di Tanjung Batu dinamai Jalan PKKD?'
      ]
    },
    trivia: [
      'PKKD merupakan singkatan dari Pusat Koperasi Kopra Daerah, hasil nasionalisasi dari Coprafonds.',
      'Keberadaan kantor dan gudang ini membuat jalan di Kelurahan Tanjung Batu dinamai resmi sebagai Jalan PKKD.'
    ],
    keyFacts: [
      { label: 'Dekade Pembangunan', value: '1940-an' },
      { label: 'Jumlah Lantai', value: '2 Lantai' },
      { label: 'Lokasi', value: 'Jl. PKKD, Tanjung Batu, Banawa' },
      { label: 'Asal Usul', value: 'Nasionalisasi Yayasan Kopra (Coprafonds)' }
    ]
  },

  // 3. GUDANG PKKD
  {
    id: 'gudang-pkkd-donggala',
    title: 'Gudang PKKD',
    localName: 'Gudang PKKD / Gudang Coprafonds / Yayasan Kopra',
    kelurahan: 'Kelurahan Tanjung Batu',
    establishedYear: '1940-an',
    period: 'Masa Kolonial Belanda & Nasionalisasi PKKD',
    category: 'Maritim & Pelabuhan',
    locationDescription: 'Kawasan Tanjung Batu, Kecamatan Banawa, Donggala',
    coordinates: {
      lat: -0.6695,
      lng: 119.7432,
      mapX: 35,
      mapY: 30
    },
    thumbnail: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=1600&q=80',
    pastPhoto: {
      url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
      caption: 'Tiga deretan gudang besi silindris Coprafonds Donggala sepanjang 90 meter penuh timbunan kopra petani.',
      source: 'Koleksi Arsip Coprafonds / Catatan Sejarah Jamrin Abubakar',
      year: '1952'
    },
    currentPhoto: {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
      caption: 'Struktur sisa bangunan gudang besi lengkung PKKD pasca dampak gempa bumi dan tsunami 28 September 2018.',
      conditionStatus: 'Sisa Struktur/Puing'
    },
    panorama360: {
      url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80',
      type: 'sphere',
      initialYaw: 60,
      initialPitch: 0,
      hotspots: [
        {
          id: 'gudang-pkkd-hotspot-1',
          title: 'Konstruksi Besi Lengkung Silindris',
          description: 'Struktur lengkung setengah lingkaran khas hanggar industri berbahan plat besi kokoh.',
          yaw: 55,
          pitch: 15
        },
        {
          id: 'gudang-pkkd-hotspot-2',
          title: 'Bentang Panjang 90 Meter',
          description: 'Daya tampung raksasa ribuan ton kopra yang dibeli dari petani di seluruh wilayah Sulawesi Tengah.',
          yaw: -80,
          pitch: 0
        }
      ]
    },
    briefDescription: 'Tiga bangunan gudang besi silindris sepanjang 90 meter penampung kopra hasil pembelian petani Sulawesi Tengah.',
    historicalSignificance: 'Pusat Koperasi Kopra Daerah (PKKD) Donggala, dikenal sebagai Gudang Coprafonds atau Yayasan Kopra warisan pemerintah kolonial Hindia Belanda. Terdiri dari tiga bangunan gudang berbahan besi dengan bentuk silindris atau setengah lingkaran sepanjang 90 meter. Digunakan untuk menampung kopra hasil pembelian petani dari berbagai pelosok Sulawesi Tengah sebelum diekspor. Pada bencana gempa bumi dan tsunami 28 September 2018, ketiga bangunan gudang ini mengalami kerusakan berat.',
    architecturalStyle: 'Arsitektur industri hanggar melengkung silindris setengah lingkaran berbahan plat baja dan besi bentang 90 meter.',
    maritimeRelevance: 'Gudang transit komoditas ekspor maritim terbesar di Selat Makassar penampung kopra petani se-Sulawesi Tengah.',
    audioNarration: {
      title: 'Gudang PKKD: Megastruktur Besi 90 Meter',
      speakerName: 'Jamrin Abubakar (Ahli Cagar Budaya)',
      durationText: '2 Menit 15 Detik',
      transcript: 'Gudang PKKD Donggala atau Gudang Coprafonds adalah warisan bernilai tinggi dari masa kolonial. Terdiri dari tiga bangunan gudang berbahan besi unik berbentuk silindris setengah lingkaran. Dengan panjang mencapai 90 meter, gudang raksasa ini menjadi penampung utama kopra petani dari seluruh Sulawesi Tengah. Sayangnya, pada gempa bumi dan tsunami 28 September 2018, ketiga bangunan ini mengalami kerusakan yang sangat berat.'
    },
    talkingPersona: {
      name: 'Gudang PKKD Donggala',
      role: 'Monumen Gudang Besi Silindris Kopra',
      avatar: '🏭',
      greeting: 'Tabe! Saya adalah Gudang PKKD. Bentuk saya silindris setengah lingkaran dari plat besi sepanjang 90 meter, saksi lautan kopra rakyat Sulawesi Tengah.',
      systemPrompt: 'Kamu adalah personifikasi Gudang PKKD Donggala (Gudang Coprafonds). Ceritakan tentang bentuk arsitektur besi setengah lingkaran, kapasitas tampung 90 meter, serta dampak gempa tsunami 2018.',
      sampleQuestions: [
        'Bagaimana bentuk fisik dan material gudang ini?',
        'Berapa panjang bangunan gudang PKKD ini?',
        'Apa komoditas utama yang disimpan di sini?',
        'Bagaimana kondisi gudang setelah gempa dan tsunami 2018?'
      ]
    },
    trivia: [
      'Gudang PKKD memiliki panjang total 90 meter dan terbuat dari konstruksi besi setengah lingkaran (silindris).',
      'Kopra yang ditampung di sini berasal dari petani di berbagai pelosok wilayah Sulawesi Tengah.'
    ],
    keyFacts: [
      { label: 'Struktur Bangunan', value: '3 Gudang Besi Silindris' },
      { label: 'Panjang Bangunan', value: '90 Meter' },
      { label: 'Bahan Utama', value: 'Besi Silindris Setengah Lingkaran' },
      { label: 'Dampak Bencana', value: 'Rusak berat gempa & tsunami 2018' }
    ]
  },

  // 4. KANTOR PELNI
  {
    id: 'kantor-pelni-kpm',
    title: 'Kantor PELNI',
    localName: 'Kantor PELNI / Bekas Kantor dan Rumah Dinas KPM (Koninklijk Paketvaart Maatschappij)',
    kelurahan: 'Kelurahan Tanjung Batu',
    establishedYear: '1920-an',
    period: 'Masa Kolonial Hindia Belanda (1920-an)',
    category: 'Maritim & Pelabuhan',
    locationDescription: 'Jalan Lamarauna, Kelurahan Tanjung Batu, Kecamatan Banawa, Donggala',
    coordinates: {
      lat: -0.6705,
      lng: 119.7424,
      mapX: 42,
      mapY: 38
    },
    thumbnail: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80',
    pastPhoto: {
      url: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1000&q=80',
      caption: 'Kantor dan Rumah Dinas KPM di Jl. Lamarauna saat melayani armada pelayaran uap Hindia Belanda tahun 1925.',
      source: 'Arsip Tropenmuseum & Koleksi Sejarah Donggala',
      year: '1925'
    },
    currentPhoto: {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
      caption: 'Bekas Kantor PELNI berarsitektur kolonial dengan dinding beton, kayu ulin, dan atap sirap. Ditetapkan Cagar Budaya tahun 2024.',
      conditionStatus: 'Perlu Revitalisasi'
    },
    panorama360: {
      url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80',
      type: 'sphere',
      initialYaw: 15,
      initialPitch: 0,
      hotspots: [
        {
          id: 'pelni-hotspot-1',
          title: 'Ruang Kantor Administrasi Pelayaran KPM & Pelni',
          description: 'Pusat pelayanan tiket dan logistik penumpang serta muatan kapal pelayaran antar-pulau.',
          yaw: 25,
          pitch: 5
        },
        {
          id: 'pelni-hotspot-2',
          title: 'Penyangga Interior Kayu Ulin & Atap Sirap',
          description: 'Konstruksi beton berpadu kayu ulin kokoh dengan atap sirap khas arsitektur kolonial Hindia Belanda.',
          yaw: -80,
          pitch: 18
        }
      ]
    },
    video360: {
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      title: 'Tur Video 360° Eks Kantor Pelni Donggala',
      provider: 'mp4',
      duration: '2:15'
    },
    briefDescription: 'Eks Kantor Pelayaran Hindia Belanda KPM yang berganti nama menjadi Kantor PELNI, ditetapkan Cagar Budaya tahun 2024.',
    historicalSignificance: 'Merupakan Kantor Pelayaran Pemerintah Kolonial Belanda yang berganti nama menjadi Kantor PELNI setelah Indonesia Merdeka. Terletak di Jalan Lamarauna, Kelurahan Tanjung Batu. Difungsikan terakhir tahun 1980-an. Awalnya dikenal sebagai Kantor dan Rumah Dinas KPM (Koninklijk Paketvaart Maatschappij) yang dibangun dekade 1920-an. Mencirikan arsitektur kolonial dengan bahan beton dan kayu ulin pada interior beratap sirap. Mengalami rusak parah setelah dikosongkan pasca kantor Pelni pindah ke Palu. Memiliki nilai sejarah penting dan resmi ditetapkan sebagai Cagar Budaya Kabupaten Donggala tahun 2024.',
    architecturalStyle: 'Arsitektur kolonial Belanda dengan dinding beton tebal, penyangga interior kayu ulin pilihan, dan atap sirap.',
    maritimeRelevance: 'Jantung operasional pelayaran kapal penumpang dan barang KPM lalu PT Pelni yang menghubungkan Donggala dengan Nusantara.',
    audioNarration: {
      title: 'Kantor PELNI: Jejak KPM di Jalan Lamarauna',
      speakerName: 'Jamrin Abubakar (Ahli Cagar Budaya)',
      durationText: '2 Menit 30 Detik',
      transcript: 'Berdiri di Jalan Lamarauna, Kelurahan Tanjung Batu, bekas kantor PELNI ini awalnya adalah Kantor dan Rumah Dinas KPM yang dibangun sekitar dekade 1920-an. Bangunan ini memadukan konstruksi beton kokoh dengan kayu ulin pada bagian penyangga interior serta atap sirap. Terakhir difungsikan pada era 1980-an sebelum operasional Pelni beralih ke Kota Palu. Karena nilai sejarah maritimnya yang luar biasa, Pemerintah Kabupaten Donggala menetapkannya sebagai Cagar Budaya resmi pada tahun 2024.'
    },
    talkingPersona: {
      name: 'Eks Kantor PELNI Donggala',
      role: 'Cagar Budaya Pelayaran Maritim Banawa',
      avatar: '🚢',
      greeting: 'Tabe! Saya adalah bekas Kantor PELNI di Jalan Lamarauna, dahulu Kantor KPM sejak 1920-an. Pada tahun 2024 saya resmi ditetapkan sebagai Cagar Budaya Donggala.',
      systemPrompt: 'Kamu adalah Kantor PELNI (eks KPM Donggala). Ceritakan arsitektur beton dan kayu ulin, atap sirap, masa kejayaan operasional hingga 1980-an, dan penetapan Cagar Budaya tahun 2024.',
      sampleQuestions: [
        'Kapan gedung ini dibangun dan apa nama awalnya?',
        'Di mana letak gedung ini berada?',
        'Kapan difungsikan terakhir dan kapan ditetapkan cagar budaya?'
      ]
    },
    trivia: [
      'Gedung ini resmi ditetapkan sebagai Cagar Budaya oleh Pemerintah Kabupaten Donggala pada tahun 2024.',
      'Interior bangunan menggunakan bahan kayu ulin dengan atap sirap dan dinding beton kolonial tebal.'
    ],
    keyFacts: [
      { label: 'Tahun Pendirian', value: 'Dekade 1920-an' },
      { label: 'Nama Awal', value: 'Kantor & Rumah Dinas KPM' },
      { label: 'Status Hukum', value: 'Ditetapkan Cagar Budaya 2024' },
      { label: 'Lokasi', value: 'Jl. Lamarauna, Tanjung Batu' }
    ]
  },

  // 5. TOKO TENG HIEN
  {
    id: 'toko-teng-hien',
    title: 'Toko Teng Hien',
    localName: 'Toko Teng Hien / Kongsi Dagang Tionghoa',
    kelurahan: 'Kelurahan Boya',
    establishedYear: '1930-an',
    period: 'Masa Hindia Belanda (1930-an)',
    category: 'Kolonial & Pemerintahan',
    locationDescription: 'Kawasan Kota Tua Donggala, Kelurahan Boya, Kecamatan Banawa',
    coordinates: {
      lat: -0.6718,
      lng: 119.7408,
      mapX: 44,
      mapY: 41
    },
    thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80',
    pastPhoto: {
      url: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1000&q=80',
      caption: 'Catatan koran Harian Hindia Belanda De Gooi - en Eemlander Rabu 1 September 1937 memberitakan kebakaran Toko Teng Hien.',
      source: 'De Gooi - en Eemlander (1937) / Catatan Jamrin Abubakar',
      year: '1937'
    },
    currentPhoto: {
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
      caption: 'Bangunan Toko Teng Hien lantai dua berbahan beton dan kayu di bagian belakang, kini aset Pemkab Donggala.',
      conditionStatus: 'Terawat'
    },
    panorama360: {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80',
      type: 'sphere',
      initialYaw: 90,
      initialPitch: 0,
      hotspots: [
        {
          id: 'tenghien-hotspot-1',
          title: 'Ruang Toko Kelontong Depan',
          description: 'Lantai dan dinding beton tempat transaksi hasil bumi dan penjualan barang kelontong lengkap.',
          yaw: 90,
          pitch: 5
        },
        {
          id: 'tenghien-hotspot-2',
          title: 'Bagian Belakang Kayu Dua Lantai',
          description: 'Tempat tinggal pengelola dan kongsi dagang Tionghoa berbahan kayu.',
          yaw: -90,
          pitch: 10
        },
        {
          id: 'tenghien-hotspot-3',
          title: 'Ruang Galeri Seni & Komunitas',
          description: 'Pemanfaatan pasca kebakaran 2013 untuk sekretariat komunitas seni, galeri foto dan lukisan.',
          yaw: 180,
          pitch: -5
        }
      ]
    },
    briefDescription: 'Toko kelontong besar era Hindia Belanda (1930-an) yang diberitakan di koran De Gooi 1937, kini galeri seni Donggala.',
    historicalSignificance: 'Toko kelontong cukup besar dan lengkap yang dibangun pada masa Hindia Belanda sekitar tahun 1930-an. Pada tahun 1937 mengalami kebakaran sebagaimana tercatat dalam surat kabar Harian Hindia Belanda De Gooi - en Eemlander Nomor 206, Rabu 1 September 1937, lalu dibangun kembali di lokasi yang sama. Bangunan berbahan beton pada lantai dan dinding depan serta kayu di bagian belakang untuk tempat tinggal dua lantai. Dikelola kongsi dagang warga Tionghoa jual-beli hasil bumi dan barang kelontong. Berstatus aset Pemkab Donggala hasil nasionalisasi. Pada 13 Mei 2013 kembali terbakar sebagian, dan kini difungsikan sebagai sekretariat komunitas seni serta galeri foto dan lukisan.',
    architecturalStyle: 'Pencampuran konstruksi ruko beton di bagian muka toko dengan bangunan kayu bertingkat dua di bagian hunian belakang.',
    maritimeRelevance: 'Pusat kongsi dagang distributor hasil bumi perkebunan dan barang impor maritim di pusat kota Donggala.',
    audioNarration: {
      title: 'Toko Teng Hien: Dari Kongsi Dagang Menuju Ruang Budaya',
      speakerName: 'Jamrin Abubakar (Ahli Cagar Budaya)',
      durationText: '2 Menit 40 Detik',
      transcript: 'Toko Teng Hien dibangun sekitar dekade 1930-an sebagai toko kelontong besar yang menjual hasil bumi dan aneka kebutuhan harian. Catatan koran Belanda De Gooi - en Eemlander edisi 1 September 1937 mencatat musibah kebakaran yang melanda toko ini sebelum dibangun kembali dengan konstruksi beton dan hunian kayu bertingkat di belakangnya. Kini, bangunan bersejarah milik Pemkab Donggala ini bertransformasi menjadi ruang kreatif komunitas seni dan galeri lukisan.'
    },
    talkingPersona: {
      name: 'Toko Teng Hien',
      role: 'Saksi Sejarah Niaga & Ruang Seni Donggala',
      avatar: '🏪',
      greeting: 'Ni hao & Tabe! Saya adalah Toko Teng Hien. Sejak 1930-an saya menjadi denyut perniagaan hasil bumi, dan kini hidup kembali sebagai galeri seni Donggala.',
      systemPrompt: 'Kamu adalah Toko Teng Hien Donggala. Ceritakan tentang masa kongsi dagang Tionghoa 1930-an, kebakaran tahun 1937 yang diberitakan koran Belanda De Gooi, serta alih fungsi menjadi galeri seni.',
      sampleQuestions: [
        'Kapan toko ini dibangun dan apa yang dijual?',
        'Apa yang diberitakan koran De Gooi - en Eemlander pada tahun 1937?',
        'Bagaimana pemanfaatan gedung Toko Teng Hien saat ini?'
      ]
    },
    trivia: [
      'Kebakaran Toko Teng Hien tahun 1937 tercatat dalam koran Belanda De Gooi - en Eemlander Nomor 206.',
      'Kini Toko Teng Hien menjadi sekretariat komunitas seni dan galeri foto serta lukisan sejarah Donggala.'
    ],
    keyFacts: [
      { label: 'Tahun Dibangun', value: 'Sekitar 1930-an' },
      { label: 'Peristiwa Arsip', value: 'Tercatat Koran De Gooi 1937' },
      { label: 'Status Kepemilikan', value: 'Aset Pemkab Donggala' },
      { label: 'Pemanfaatan Kini', value: 'Galeri Foto & Komunitas Seni' }
    ]
  },

  // 6. PELABUHAN TUA
  {
    id: 'pelabuhan-tua-donggala',
    title: 'Pelabuhan Tua',
    localName: 'Kawasan Pelabuhan Tua Donggala (Labuan Bajo - Tanjung Batu)',
    kelurahan: 'Kelurahan Labuan Bajo',
    establishedYear: 'Masa Kerajaan Banawa',
    period: 'Era Kerajaan Banawa s/d Hindia Belanda',
    category: 'Kawasan & Lanskap Sejarah',
    locationDescription: 'Perairan dari Kelurahan Labuan Bajo hingga Kelurahan Tanjung Batu, Banawa',
    coordinates: {
      lat: -0.6668,
      lng: 119.7442,
      mapX: 43,
      mapY: 37
    },
    thumbnail: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    pastPhoto: {
      url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
      caption: 'Kapal berlabuh di perairan Selat Makassar dan perahu penyeberangan memuat penumpang serta barang sebelum adanya dermaga beton.',
      source: 'Arsip Kolonial Belanda & Catatan Jamrin Abubakar',
      year: '1910'
    },
    currentPhoto: {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      caption: 'Kawasan perairan Pelabuhan Tua Donggala terbentang indah dari Labuan Bajo hingga Tanjung Batu.',
      conditionStatus: 'Terawat'
    },
    panorama360: {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80',
      type: 'sphere',
      initialYaw: 180,
      initialPitch: 0,
      hotspots: [
        {
          id: 'pelabuhantua-hotspot-1',
          title: 'Area Labuh Kapal Selat Makassar',
          description: 'Titik labuh kapal berukuran besar yang dulunya berlabuh jauh dari daratan dan diantar perahu penyeberangan.',
          yaw: 170,
          pitch: -5
        },
        {
          id: 'pelabuhantua-hotspot-2',
          title: 'Dermaga Beton Pasca Kemerdekaan',
          description: 'Dermaga sandaran beton yang dibangun awal kemerdekaan untuk sandaran kapal tonase tertentu.',
          yaw: -30,
          pitch: -15
        },
        {
          id: 'pelabuhantua-hotspot-3',
          title: 'Garis Pesisir Labuan Bajo - Tanjung Batu',
          description: 'Bentangan perairan niaga pelabuhan tempat terintegrasinya Kantor Douane, Syahbandar, dan pergudangan.',
          yaw: 60,
          pitch: 0
        }
      ]
    },
    briefDescription: 'Kawasan perairan niaga bersejarah dari Labuan Bajo hingga Tanjung Batu yang dikenal sejak Kerajaan Banawa.',
    historicalSignificance: 'Kawasan pelabuhan tua meliputi area perairan tempat kapal berlabuh dari perairan Kelurahan Labuan Bajo hingga wilayah perairan Kelurahan Tanjung Batu. Dikenal sejak masa Kerajaan Banawa kemudian diambil alih pemerintah kolonial Belanda sebagai pusat perdagangan. Dilengkapi fasilitas Kantor Douane, Kantor Syahbandar, dan pergudangan untuk menampung barang masuk dan keluar. Pada masa awal pelabuhan ini belum memiliki dermaga sehingga kapal besar berlabuh jauh dari daratan dan muatan diantar perahu penyeberangan. Pasca kemerdekaan barulah dibangun dermaga beton untuk sandaran kapal tonase tertentu.',
    architecturalStyle: 'Bentang perairan teluk alami berpadu dermaga beton pasca kemerdekaan dan fasilitas pelabuhan bersejarah.',
    maritimeRelevance: 'Pusat perdagangan maritim utama Kerajaan Banawa dan gerbang ekspor-impor rempah, kopra, dan sutra di Selat Makassar.',
    audioNarration: {
      title: 'Pelabuhan Tua: Kejayaan Bahari Sejak Masa Banawa',
      speakerName: 'Jamrin Abubakar (Ahli Cagar Budaya)',
      durationText: '2 Menit 30 Detik',
      transcript: 'Kawasan Pelabuhan Tua membentang dari perairan Labuan Bajo hingga Tanjung Batu. Dikenal sejak masa Kerajaan Banawa sebelum dikelola pemerintah Hindia Belanda sebagai pusat perdagangan utama di pesisir barat Sulawesi. Dahulu sebelum ada dermaga beton, kapal-kapal besar berlabuh di tengah laut dan muatannya diangkut menggunakan perahu-perahu kecil ke pesisir. Pelabuhan ini dilengkapi fasilitas Kantor Douane, Syahbandar, dan deretan gudang komoditas.'
    },
    talkingPersona: {
      name: 'Pelabuhan Tua Donggala',
      role: 'Kawasan Maritim Kerajaan & Niaga Dunia',
      avatar: '⚓',
      greeting: 'Tabe! Saya adalah Pelabuhan Tua Donggala. Sejak era Kerajaan Banawa hingga Hindia Belanda, perairan Labuan Bajo hingga Tanjung Batu ini menjadi saksi ribuan perahu dan kapal dunia singgah.',
      systemPrompt: 'Kamu adalah Kawasan Pelabuhan Tua Donggala. Ceritakan tentang bentangan perairan Labuan Bajo hingga Tanjung Batu, tradisi perahu penyeberangan sebelum dermaga beton, serta fasilitas Douane dan Syahbandar.',
      sampleQuestions: [
        'Bagaimana kapal besar membongkar muatan sebelum ada dermaga beton?',
        'Meliputi wilayah mana saja kawasan Pelabuhan Tua ini?',
        'Fasilitas apa saja yang melengkapi pelabuhan ini pada masa Hindia Belanda?'
      ]
    },
    trivia: [
      'Sebelum adanya dermaga beton pasca kemerdekaan, seluruh muatan kapal uap besar diangkut perahu penyeberangan tradisional dari tengah laut.',
      'Kawasan pelabuhan tua membentang sepanjang perairan Labuan Bajo hingga semenanjung Tanjung Batu.'
    ],
    keyFacts: [
      { label: 'Cakupan Kawasan', value: 'Labuan Bajo s/d Tanjung Batu' },
      { label: 'Awal Mula', value: 'Era Kerajaan Banawa' },
      { label: 'Fasilitas Kolonial', value: 'Kantor Douane, Syahbandar, Gudang' },
      { label: 'Dermaga Beton', value: 'Dibangun awal kemerdekaan' }
    ]
  },

  // 7. GEDUNG BEA DAN CUKAI
  {
    id: 'gedung-bea-dan-cukai',
    title: 'Gedung Bea dan Cukai',
    localName: 'Gedung Bea dan Cukai / Kantor Douane',
    kelurahan: 'Kelurahan Boya',
    establishedYear: 'Awal abad ke-20',
    period: 'Awal Abad ke-20 (Renovasi Total 1967)',
    category: 'Kolonial & Pemerintahan',
    locationDescription: 'Kawasan Pelabuhan, Kelurahan Boya, Kecamatan Banawa, Donggala',
    coordinates: {
      lat: -0.6672,
      lng: 119.7435,
      mapX: 41,
      mapY: 36
    },
    thumbnail: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    pastPhoto: {
      url: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1000&q=80',
      caption: 'Bangunan awal berlantai satu rumah panggung kayu beratap sirap sebelum direnovasi total menjadi tiga lantai tahun 1967.',
      source: 'Arsip Kemenkeu Bea Cukai / Catatan Jamrin Abubakar',
      year: '1967'
    },
    currentPhoto: {
      url: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1000&q=80',
      caption: 'Gedung Bea dan Cukai lantai tiga pasca renovasi masa Bupati Abdul Azis Lamadjido, beroperasi hingga tahun 1984.',
      conditionStatus: 'Perlu Revitalisasi'
    },
    panorama360: {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
      type: 'sphere',
      initialYaw: 110,
      initialPitch: 0,
      hotspots: [
        {
          id: 'beacukai-hotspot-1',
          title: 'Prasasti Peresmian 1967',
          description: 'Prasasti peresmian oleh Bupati Donggala Abdul Azis Lamadjido menandai renovasi bangunan berlantai tiga.',
          yaw: 105,
          pitch: -5
        },
        {
          id: 'beacukai-hotspot-2',
          title: 'Kantor Inspeksi Bea Cukai',
          description: 'Ruang administrasi kepabeanan di bawah Kementerian Keuangan RI yang beroperasi sampai 1984 sebelum pindah ke Pantoloan.',
          yaw: -45,
          pitch: 10
        }
      ]
    },
    briefDescription: 'Dikenal sebagai Kantor Douane sejak awal abad ke-20, direnovasi menjadi 3 lantai tahun 1967 oleh Bupati Abdul Azis Lamadjido.',
    historicalSignificance: 'Dikenal dengan sebutan Kantor Douane, dibangun pada masa pemerintah kolonial Belanda awal abad ke-20. Dahulu berstatus Kantor Inspeksi Bea Cukai di bawah Kementerian Keuangan RI. Awalnya berlantai satu berupa rumah panggung berbahan kayu dengan atap sirap. Faktor usia mendorong renovasi total menjadi model gedung modern berlantai tiga pada tahun 1967 di masa Bupati Donggala Abdul Azis Lamadjido dengan prasasti peresmian. Kantor Bea Cukai Donggala ini terakhir beroperasi tahun 1984 ketika seluruh aktivitas administrasi pelabuhan dipusatkan di Pantoloan sebagai bagian dari pengalihan sejak 1978.',
    architecturalStyle: 'Transformasi dari rumah panggung kayu beratap sirap menjadi gedung administrasi modern berlantai tiga.',
    maritimeRelevance: 'Pintu gerbang hukum pabean dan pemeriksaan muatan ekspor-impor kapal mancanegara di pelabuhan Donggala.',
    audioNarration: {
      title: 'Gedung Bea dan Cukai: Pos Douane Pelabuhan Donggala',
      speakerName: 'Jamrin Abubakar (Ahli Cagar Budaya)',
      durationText: '2 Menit 20 Detik',
      transcript: 'Dikenal luas sebagai Kantor Douane, Gedung Bea dan Cukai Donggala telah ada sejak awal abad ke-20. Pada awalnya gedung ini berlantai satu berupa rumah panggung kayu dengan atap sirap. Pada tahun 1967 di masa Bupati Donggala Abdul Azis Lamadjido, gedung direnovasi total menjadi bangunan berlantai tiga. Kantor ini beroperasi memeriksa cukai pelayaran hingga tahun 1984 saat aktivitas administrasi dialihkan ke Pantoloan.'
    },
    talkingPersona: {
      name: 'Gedung Bea dan Cukai (Kantor Douane)',
      role: 'Kantor Inspeksi Pabean & Cukai Donggala',
      avatar: '🏛️',
      greeting: 'Tabe! Saya adalah Kantor Douane atau Gedung Bea Cukai. Dari rumah panggung kayu sirap hingga menjadi gedung tiga lantai tahun 1967, saya mengawal arus niaga laut Donggala.',
      systemPrompt: 'Kamu adalah Gedung Bea Cukai Donggala (Kantor Douane). Ceritakan asal mula awal abad ke-20, renovasi tahun 1967 era Bupati Lamadjido, dan pengalihan ke Pantoloan tahun 1984.',
      sampleQuestions: [
        'Kapan gedung ini pertama kali dibangun dan apa sebutan kolonialnya?',
        'Bagaimana bentuk bangunan awal sebelum direnovasi tahun 1967?',
        'Mengapa kantor ini ditutup pada tahun 1984?'
      ]
    },
    trivia: [
      'Bangunan awal Kantor Douane berbentuk rumah panggung berbahan kayu dengan atap sirap sebelum diubah jadi lantai 3 pada 1967.',
      'Aktivitas operasional kepabeanan berakhir tahun 1984 seiring pemindahan pusat pelabuhan ke Pantoloan.'
    ],
    keyFacts: [
      { label: 'Masa Awal', value: 'Awal Abad ke-20 (Kantor Douane)' },
      { label: 'Renovasi Besar', value: 'Tahun 1967 (Bupati Abdul Azis Lamadjido)' },
      { label: 'Jumlah Lantai', value: '3 Lantai' },
      { label: 'Tahun Akhir Operasi', value: '1984 (Dialihkan ke Pantoloan)' }
    ]
  },

  // 8. CHUNG HWA SCHOOL
  {
    id: 'chung-hwa-school',
    title: 'Chung Hwa School',
    localName: 'Chung Hwa School / Sekolah Cina / Kampus 2 Unismuh Palu',
    kelurahan: 'Kelurahan Boya',
    establishedYear: '1924',
    period: 'Masa Hindia Belanda (1924)',
    category: 'Religi & Multikultural',
    locationDescription: 'Jalan Pelabuhan, Kelurahan Boya, Kecamatan Banawa, Donggala',
    coordinates: {
      lat: -0.6712,
      lng: 119.7402,
      mapX: 43,
      mapY: 39
    },
    thumbnail: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80',
    pastPhoto: {
      url: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1000&q=80',
      caption: 'Aktivitas belajar murid Chung Hwa School pada era 1930-an di Jalan Pelabuhan Kelurahan Boya.',
      source: 'Arsip Komunitas Tionghoa Donggala / Catatan Jamrin Abubakar',
      year: '1930'
    },
    currentPhoto: {
      url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80',
      caption: 'Gedung antik perpaduan arsitektur Tionghoa dan kolonial, ditetapkan sebagai Cagar Budaya tahun 2023.',
      conditionStatus: 'Terawat'
    },
    panorama360: {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80',
      type: 'sphere',
      initialYaw: 45,
      initialPitch: 0,
      hotspots: [
        {
          id: 'chunghwa-hotspot-1',
          title: 'Arsitektur Gabungan Tionghoa-Kolonial',
          description: 'Bentuk bangunan antik yang memadukan ornamen atap dan jendela ventilasi khas Tionghoa dengan konstruksi kolonial.',
          yaw: 40,
          pitch: 12
        },
        {
          id: 'chunghwa-hotspot-2',
          title: 'Ruang Kelas & Linimasa Alih Fungsi',
          description: 'Saksi pergantian fungsi dari Sekolah Cina, Kampus Cokroaminoto, SMA Negeri Donggala, asrama guru hingga Kampus 2 Unismuh Palu.',
          yaw: -70,
          pitch: 0
        }
      ]
    },
    briefDescription: 'Cagar Budaya pertama di Jalan Pelabuhan Boya (1924), memadukan arsitektur Tionghoa dan kolonial.',
    historicalSignificance: 'Chung Hwa School atau lebih dikenal Sekolah Cina dibangun oleh orang-orang Tionghoa di Kota Donggala pada tahun 1924, karena sejak lama di kota ini bermukim banyak warga Tionghoa. Beralamat di Jalan Pelabuhan, Kelurahan Boya. Bangunannya merupakan gabungan arsitektur Tionghoa dan kolonial yang antik. Sekolah Tionghoa berakhir beroperasi tahun 1966, kemudian pernah menjadi Kampus Cokroaminoto Surakarta Cabang Donggala, lalu SMA Negeri Donggala hingga 1977, asrama guru sampai 1999, dan kini menjadi Kampus 2 Universitas Muhammadiyah Palu. Resmi ditetapkan sebagai Cagar Budaya Kabupaten Donggala sejak tahun 2023.',
    architecturalStyle: 'Perpaduan harmonis antara arsitektur tradisional Tionghoa dengan arsitektur tropis kolonial Belanda.',
    maritimeRelevance: 'Bukti kuat pemukiman dan kontribusi diaspora maritim Tionghoa dalam perniagaan dan pendidikan di Kota Pelabuhan Donggala.',
    audioNarration: {
      title: 'Chung Hwa School: Cagar Budaya Pendidikan 1924',
      speakerName: 'Jamrin Abubakar (Ahli Cagar Budaya)',
      durationText: '2 Menit 35 Detik',
      transcript: 'Chung Hwa School di Jalan Pelabuhan didirikan pada tahun 1924 oleh komunitas Tionghoa Donggala. Desain fisiknya merupakan paduan langka gaya Tionghoa dan arsitektur kolonial. Setelah berhenti beroperasi tahun 1966, gedung ini memiliki jejak panjang dunia pendidikan: menjadi Kampus Cokroaminoto, SMA Negeri Donggala, asrama guru, hingga kini menjadi Kampus 2 Unismuh Palu. Pada tahun 2023, bangunan ini resmi ditetapkan sebagai Cagar Budaya Kabupaten Donggala.'
    },
    talkingPersona: {
      name: 'Chung Hwa School (Sekolah Cina)',
      role: 'Cagar Budaya Pendidikan Multikultural',
      avatar: '🏫',
      greeting: 'Tabe! Saya adalah Chung Hwa School, dibangun tahun 1924. Saya saksi perpaduan budaya Tionghoa-Kolonial dan ditetapkan sebagai Cagar Budaya pada tahun 2023.',
      systemPrompt: 'Kamu adalah Chung Hwa School Donggala yang dibangun tahun 1924 di Boya. Ceritakan perpaduan arsitektur Tionghoa-kolonial, ragam alih fungsi pendidikan hingga Kampus 2 Unismuh, dan status Cagar Budaya 2023.',
      sampleQuestions: [
        'Kapan Chung Hwa School dibangun dan siapa pendirinya?',
        'Apa keunikan arsitektur bangunan ini?',
        'Apa saja alih fungsi gedung ini dari tahun 1966 sampai sekarang?'
      ]
    },
    trivia: [
      'Chung Hwa School ditetapkan sebagai salah satu Cagar Budaya resmi Donggala sejak tahun 2023.',
      'Gedung ini pernah menjadi Kampus Cokroaminoto, SMAN Donggala, asrama guru, dan kini Kampus 2 Unismuh Palu.'
    ],
    keyFacts: [
      { label: 'Tahun Pendirian', value: '1924 Masehi' },
      { label: 'Gaya Arsitektur', value: 'Paduan Tionghoa & Kolonial' },
      { label: 'Status Hukum', value: 'Cagar Budaya Kab. Donggala (2023)' },
      { label: 'Lokasi', value: 'Jl. Pelabuhan, Kelurahan Boya' }
    ]
  },

  // 9. BIOSKOP MUARA
  {
    id: 'bioskop-muara',
    title: 'Bioskop Muara',
    localName: 'Bioskop Muara / Bioskop Ampera / Eks Gudang Kopra Ladudin Bungkato',
    kelurahan: 'Kelurahan Boya',
    establishedYear: 'Era Pasca Kemerdekaan',
    period: 'Masa Transisi (Beroperasi s/d 1996)',
    category: 'Kawasan & Lanskap Sejarah',
    locationDescription: 'Tepi muara Sungai Donggala, Kelurahan Boya, Kecamatan Banawa, Donggala',
    coordinates: {
      lat: -0.6738,
      lng: 119.7418,
      mapX: 45,
      mapY: 43
    },
    thumbnail: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80',
    pastPhoto: {
      url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80',
      caption: 'Gedung Bioskop Muara di tepi muara Sungai Donggala saat ramai dikunjungi penonton dekade 1980-an.',
      source: 'Arsip Tokoh Perbioskopan Donggala / Catatan Jamrin Abubakar',
      year: '1985'
    },
    currentPhoto: {
      url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80',
      caption: 'Kondisi struktur bangunan di tepi muara pasca gempa bumi dan tsunami 28 September 2018.',
      conditionStatus: 'Sisa Struktur/Puing'
    },
    panorama360: {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80',
      type: 'sphere',
      initialYaw: 140,
      initialPitch: 0,
      hotspots: [
        {
          id: 'muara-hotspot-1',
          title: 'Tepi Muara Sungai Donggala',
          description: 'Lokasi strategis tepi sungai tempat perahu nelayan melintas dan penonton bioskop berkumpul.',
          yaw: 135,
          pitch: -5
        },
        {
          id: 'muara-hotspot-2',
          title: 'Ruang Pemutaran Film & Panggung',
          description: 'Ruang aula besar eks gudang kopra Ladudin Bungkato yang dialihfungsikan menjadi bioskop Ampera lalu Bioskop Muara.',
          yaw: -40,
          pitch: 10
        }
      ]
    },
    briefDescription: 'Bioskop legendaris tepi muara Sungai Donggala, eks gudang kopra Ladudin Bungkato beroperasi hingga 1996.',
    historicalSignificance: 'Bioskop ini terletak di tepi muara Sungai Donggala, Kelurahan Boya, Kecamatan Banawa. Sebelum dijadikan bioskop, gedung ini merupakan gudang kopra milik Ladudin Bungkato, seorang pengusaha dan mandor di Donggala. Kemudian dialihfungsikan menjadi bioskop bernama Bioskop Ampera yang dikelola Adnan Panintjo (pengusaha Palu) bekerja sama dengan Tuan Muchsen (keturunan India asal Makassar). Beralih kepemilikan kepada Ong Mintjau, pengusaha bioskop terkemuka. Sejak tahun 1980 namanya diganti menjadi Bioskop Muara dan beroperasi hingga 1996. Bangunan ini mengalami kerusakan berat saat gempa bumi dan tsunami 28 September 2018.',
    architecturalStyle: 'Bangunan gudang bentang lebar berdinding beton dan beratap seng tinggi yang disesuaikan menjadi gedung bioskop.',
    maritimeRelevance: 'Pusat hiburan masyarakat pesisir dan pelaut yang bersandar di muara sungai dan pelabuhan Donggala.',
    audioNarration: {
      title: 'Bioskop Muara: Riuh Sinema di Tepi Sungai Donggala',
      speakerName: 'Jamrin Abubakar (Ahli Cagar Budaya)',
      durationText: '2 Menit 30 Detik',
      transcript: 'Bioskop Muara bertengger persis di tepi muara Sungai Donggala, Kelurahan Boya. Bermula dari gudang kopra milik pengusaha Ladudin Bungkato, gedung ini diubah menjadi Bioskop Ampera hasil kolaborasi Adnan Panintjo dan Tuan Muchsen, keturunan India asal Makassar. Di era Ong Mintjau tahun 1980, bioskop berganti nama menjadi Bioskop Muara dan menjadi magnet hiburan masyarakat hingga tutup tahun 1996.'
    },
    talkingPersona: {
      name: 'Bioskop Muara Donggala',
      role: 'Pusat Sinema Tepi Muara Sungai',
      avatar: '🎬',
      greeting: 'Tabe! Saya adalah Bioskop Muara. Berdiri di tepi muara sungai sejak era gudang kopra Ladudin hingga memutar layar perak Bioskop Ampera dan Muara sampai 1996.',
      systemPrompt: 'Kamu adalah Bioskop Muara Donggala. Ceritakan tentang Ladudin Bungkato, Adnan Panintjo, Tuan Muchsen dari Makassar, Ong Mintjau, hingga masa tutup 1996 dan gempa 2018.',
      sampleQuestions: [
        'Sebelum jadi bioskop, gedung ini digunakan untuk apa?',
        'Siapa saja tokoh pengelola bioskop ini?',
        'Kapan bioskop ini berhenti beroperasi?'
      ]
    },
    trivia: [
      'Bioskop Muara awalnya bernama Bioskop Ampera yang dikelola bersama pengusaha keturunan India asal Makassar bernama Tuan Muchsen.',
      'Gedung ini beroperasi memutar film layar perak hingga tahun 1996.'
    ],
    keyFacts: [
      { label: 'Lokasi', value: 'Tepi Muara Sungai Donggala, Boya' },
      { label: 'Pemilik Awal', value: 'Ladudin Bungkato (Gudang Kopra)' },
      { label: 'Nama Sebelumnya', value: 'Bioskop Ampera' },
      { label: 'Masa Operasi Akhir', value: 'Tahun 1996' }
    ]
  },

  // 10. BIOSKOP MEGARIA
  {
    id: 'bioskop-megaria',
    title: 'Bioskop Megaria',
    localName: 'Bioskop Megaria / Gembira Theater / Empres / Ria / Fujiama / Gelora',
    kelurahan: 'Kelurahan Labuan Bajo',
    establishedYear: '1948',
    period: 'Pasca Perang (1948) s/d Era 1990-an',
    category: 'Kolonial & Pemerintahan',
    locationDescription: 'Jl. Bioskop, perbatasan Kelurahan Labuan Bajo dan Kelurahan Boya, Banawa',
    coordinates: {
      lat: -0.6698,
      lng: 119.7410,
      mapX: 44,
      mapY: 40
    },
    thumbnail: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80',
    pastPhoto: {
      url: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1000&q=80',
      caption: 'Gedung Megaria masa jaya saat bernama Gembira Theater dan Empres Theater di Jalan Bioskop Donggala.',
      source: 'Koleksi Arsip Komunitas Donggala / Catatan Jamrin Abubakar',
      year: '1955'
    },
    currentPhoto: {
      url: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1000&q=80',
      caption: 'Gedung bekas Megaria yang sempat dijadikan gedung olahraga bulu tangkis Klub Pasifik sebelum gempa 2018.',
      conditionStatus: 'Sisa Struktur/Puing'
    },
    panorama360: {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80',
      type: 'sphere',
      initialYaw: 70,
      initialPitch: 0,
      hotspots: [
        {
          id: 'megaria-hotspot-1',
          title: 'Ruang Aula Gembira Theater 1948',
          description: 'Bangunan atas nama Hj. Fatima Hasan, dibangun tahun 1948 atas inisiatif dan kongsi tokoh masyarakat Donggala.',
          yaw: 65,
          pitch: 5
        },
        {
          id: 'megaria-hotspot-2',
          title: 'Gedung Olahraga Bulu Tangkis Pasifik',
          description: 'Alih fungsi pasca bioskop ditutup tahun 1994 menjadi arena olahraga bulu tangkis masyarakat.',
          yaw: -85,
          pitch: -5
        }
      ]
    },
    briefDescription: 'Gedung bioskop legendaris di Jalan Bioskop, dibangun 1948 semula bernama Gembira Theater lalu Megaria.',
    historicalSignificance: 'Bioskop Megaria merupakan sebutan terakhir dari sejumlah nama yang pernah melekat. Dibangun di atas tanah milik Hj. Fatima Hasan, istri dari Haji Hasan, tokoh terkemuka Donggala. Terletak di perbatasan Kelurahan Labuan Bajo dengan Kelurahan Boya, tepatnya di Jalan Bioskop. Nama aslinya Gembira Theater dibangun tahun 1948 atas inisiatif dan kongsi sejumlah tokoh masyarakat dan pengusaha Donggala. Mulai digunakan bioskop tahun 1950 dengan nama Empres Theater, lalu berganti nama Bioskop Ria, Bioskop Fujiama, Bioskop Gelora, hingga Megaria yang terakhir beroperasi tahun 1994 dikelola Ong Koang Ho. Setelah ditutup dialihfungsikan menjadi gedung bulu tangkis Klub Pasifik. Mengalami kerusakan berat saat gempa tsunami 2018.',
    architecturalStyle: 'Bangunan pertunjukan publik era pasca kemerdekaan berkapasitas ratusan kursi dengan dinding bata dan ventilasi atas.',
    maritimeRelevance: 'Pusat rekreasi malam hari masyarakat pelabuhan Donggala dari berbagai etnis dan saudagar antarpulau.',
    audioNarration: {
      title: 'Bioskop Megaria: Riwayat Enam Nama di Jalan Bioskop',
      speakerName: 'Jamrin Abubakar (Ahli Cagar Budaya)',
      durationText: '2 Menit 40 Detik',
      transcript: 'Gedung Bioskop Megaria di Jalan Bioskop memiliki riwayat penamaan yang sangat kaya. Dibangun tahun 1948 atas tanah Hj. Fatima Hasan dengan nama awal Gembira Theater. Sejak 1950 berganti menjadi Empres Theater, Bioskop Ria, Fujiama, Gelora, dan akhirnya Bioskop Megaria yang dikelola Ong Koang Ho hingga tutup tahun 1994. Gedung ini sempat menjadi arena bulu tangkis Klub Pasifik sebelum terdampak gempa 28 September 2018.'
    },
    talkingPersona: {
      name: 'Bioskop Megaria Donggala',
      role: 'Saksi Seni Pertunjukan Kota Donggala',
      avatar: '🎟️',
      greeting: 'Tabe! Saya adalah Bioskop Megaria. Dibangun 1948 sebagai Gembira Theater, nama saya pernah berganti hingga enam kali menghibur generasi warga Banawa.',
      systemPrompt: 'Kamu adalah Bioskop Megaria Donggala. Jelaskan asal-usul tanah Hj. Fatima Hasan, kongsi 1948, rentetan nama (Gembira, Empres, Ria, Fujiama, Gelora, Megaria), dan alih fungsi lapangan bulutangkis Pasifik.',
      sampleQuestions: [
        'Apa saja nama-nama bioskop yang pernah disandang gedung ini?',
        'Kapan gedung ini pertama kali didirikan dan di atas tanah siapa?',
        'Kapan Megaria terakhir beroperasi memutar film?'
      ]
    },
    trivia: [
      'Gedung ini berganti nama hingga 6 kali: Gembira Theater, Empres, Ria, Fujiama, Gelora, dan Megaria.',
      'Keberadaan bioskop ini mengabadikan nama jalan di perbatasan Labuan Bajo dan Boya menjadi Jalan Bioskop.'
    ],
    keyFacts: [
      { label: 'Tahun Dibangun', value: '1948 (Gembira Theater)' },
      { label: 'Lokasi', value: 'Jl. Bioskop, Labuan Bajo - Boya' },
      { label: 'Pengelola Terakhir', value: 'Ong Koang Ho (s/d 1994)' },
      { label: 'Alih Fungsi', value: 'Klub Bulu Tangkis Pasifik' }
    ]
  },

  // 11. SOU RAJA
  {
    id: 'sou-raja-donggala',
    title: 'Sou Raja',
    localName: 'Sou Raja / Rumah Tradisional Pua Sehang',
    kelurahan: 'Kelurahan Labuan Bajo',
    establishedYear: 'Abad ke-19',
    period: 'Peninggalan Abad ke-19',
    category: 'Arsitektur & Rumah Adat',
    locationDescription: 'Simpang Jl. Bioskop - Jalan Giliraja, Kelurahan Labuan Bajo, Banawa',
    coordinates: {
      lat: -0.6675,
      lng: 119.7412,
      mapX: 44,
      mapY: 42
    },
    thumbnail: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80',
    pastPhoto: {
      url: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1000&q=80',
      caption: 'Rumah tradisional Sou Raja peninggalan abad ke-19 dengan ukiran indah pada beranda dan dinding depan.',
      source: 'Koleksi Keluarga Aldjufrie & Catatan Sejarah Jamrin Abubakar',
      year: '1935'
    },
    currentPhoto: {
      url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80',
      caption: 'Kondisi Sou Raja di simpang Jalan Giliraja yang ditetapkan sebagai Cagar Budaya tahun 2024 sebagai upaya penyelamatan.',
      conditionStatus: 'Perlu Revitalisasi'
    },
    panorama360: {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
      type: 'sphere',
      initialYaw: 0,
      initialPitch: 0,
      hotspots: [
        {
          id: 'souraja-hotspot-1',
          title: 'Perpaduan Gaya Bugis & Mandar',
          description: 'Konstruksi kayu panggung abad ke-19 dari bahan kayu pada dinding, lantai, dan tiang kayu ulin.',
          yaw: 0,
          pitch: 10
        },
        {
          id: 'souraja-hotspot-2',
          title: 'Ragam Hias Ukiran Beranda Depan',
          description: 'Ciri khas ornamen ukiran tradisional pada dinding depan dan beranda rumah peninggalan saudagar Umar Haruna.',
          yaw: 90,
          pitch: 5
        }
      ]
    },
    briefDescription: 'Rumah peninggalan abad ke-19 perpaduan Bugis-Mandar milik saudagar Umar Haruna, Cagar Budaya 2024.',
    historicalSignificance: 'Merupakan rumah tradisional perpaduan gaya arsitektur Bugis dan Mandar. Peninggalan saudagar Umar Haruna - Pua Sehang yang kemudian ditinggali pasangan Sifah Haruna – Idrus Aldjufri hingga anak cucunya. Terakhir kali dihuni tahun 2016 oleh Husen Aldjufrie. Terletak di simpang Jl. Bioskop - Jalan Giliraja Kelurahan Labuan Bajo, Banawa. Peninggalan abad ke-19 berbahan kayu pada dinding, lantai, dan tiang kayu ulin dengan ciri ragam hias ukiran di dinding depan/beranda. Mengalami rusak berat akibat gempa tsunami 2018. Pemerintah Kabupaten Donggala menetapkannya sebagai Cagar Budaya tahun 2024 sebagai upaya penyelamatan warisan penanda Kota Tua Donggala.',
    architecturalStyle: 'Arsitektur vernakular tradisional panggung perpaduan etnis Bugis dan Mandar dengan tiang kayu ulin dan ukiran beranda.',
    maritimeRelevance: 'Kediaman saudagar maritim terkemuka abad ke-19 yang menjalin hubungan dagang lintas Selat Makassar.',
    audioNarration: {
      title: 'Sou Raja: Warisan Pua Sehang dan Ukiran Abad ke-19',
      speakerName: 'Jamrin Abubakar (Ahli Cagar Budaya)',
      durationText: '2 Menit 45 Detik',
      transcript: 'Di persimpangan Jalan Bioskop dan Jalan Giliraja Labuan Bajo, berdiri Sou Raja, rumah tradisional abad ke-19 peninggalan saudagar Umar Haruna atau Pua Sehang. Rumah panggung berbahan kayu ulin ini memadukan estetika arsitektur Bugis dan Mandar dengan ukiran khas pada serambinya. Dihuni keluarga hingga tahun 2016, dan kendati mengalami kerusakan gempa 2018, Pemkab Donggala resmi menetapkannya sebagai Cagar Budaya pada tahun 2024 sebagai komitmen pelestarian kota tua.'
    },
    talkingPersona: {
      name: 'Sou Raja (Rumah Pua Sehang)',
      role: 'Rumah Adat Bugis-Mandar Abad ke-19',
      avatar: '🏡',
      greeting: 'Tabe! Saya adalah Sou Raja peninggalan saudagar Umar Haruna (Pua Sehang). Berdiri sejak abad ke-19 dengan tiang ulin perkasa dan ukiran Bugis-Mandar, saya ditetapkan Cagar Budaya tahun 2024.',
      systemPrompt: 'Kamu adalah Sou Raja di simpang Jalan Giliraja Labuan Bajo. Jelaskan sejarah Pua Sehang, keluarga Sifah Haruna - Idrus Aldjufri, tiang ulin, ukiran beranda, dan penetapan Cagar Budaya 2024.',
      sampleQuestions: [
        'Siapa saudagar pemilik awal rumah Sou Raja ini?',
        'Apa perpaduan gaya arsitektur yang dimiliki rumah ini?',
        'Kapan rumah ini terakhir kali dihuni dan kapan ditetapkan cagar budaya?'
      ]
    },
    trivia: [
      'Sou Raja dibangun sejak abad ke-19 menggunakan tiang pancang kayu ulin yang sangat kuat menahan cuaca laut.',
      'Ditetapkan sebagai Cagar Budaya Kabupaten Donggala tahun 2024 sebagai langkah penyelamatan penanda kota tua.'
    ],
    keyFacts: [
      { label: 'Asal Era', value: 'Abad ke-19 Masehi' },
      { label: 'Pemilik Awal', value: 'Saudagar Umar Haruna (Pua Sehang)' },
      { label: 'Gaya Arsitektur', value: 'Perpaduan Bugis dan Mandar' },
      { label: 'Status Hukum', value: 'Cagar Budaya Kab. Donggala (2024)' }
    ]
  },

  // 12. RUMAH RAJA BANAWA
  {
    id: 'rumah-raja-banawa',
    title: 'Rumah Raja Banawa',
    localName: 'Rumah Raja Banawa / Kediaman Laparenrengi Lamarauna',
    kelurahan: 'Kelurahan Boya',
    establishedYear: '1940-an',
    period: 'Dekade 1940-an (Masa Raja Banawa)',
    category: 'Arsitektur & Rumah Adat',
    locationDescription: 'Jalan Pelabuhan bersebelahan eks Kantor KPN / Pembantu Bupati, Boya, Banawa',
    coordinates: {
      lat: -0.6725,
      lng: 119.7398,
      mapX: 42,
      mapY: 39
    },
    thumbnail: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80',
    pastPhoto: {
      url: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1000&q=80',
      caption: 'Rumah kediaman Laparenrengi Lamarauna, Raja Banawa yang berkuasa 1947-1960 di Jalan Pelabuhan.',
      source: 'Koleksi Kerajaan Banawa / Catatan Sejarah Jamrin Abubakar',
      year: '1950'
    },
    currentPhoto: {
      url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80',
      caption: 'Rumah Raja Banawa berarsitektur kolonial dengan dinding beton dan atap yang diganti seng pasca gempa 2018.',
      conditionStatus: 'Terawat'
    },
    panorama360: {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
      type: 'sphere',
      initialYaw: 90,
      initialPitch: 0,
      hotspots: [
        {
          id: 'rajabanawa-hotspot-1',
          title: 'Kediaman Raja Laparenrengi Lamarauna',
          description: 'Tempat tinggal Raja Banawa yang berkuasa tahun 1947-1960 dengan arsitektur kolonial berdinding beton.',
          yaw: 85,
          pitch: 8
        },
        {
          id: 'rajabanawa-hotspot-2',
          title: 'Lokasi Bersebelahan Kantor Pembantu Bupati',
          description: 'Posisinya di Jalan Pelabuhan bersebelahan Kantor KPN (Kepala Pemerintahan Negeri) Donggala.',
          yaw: -80,
          pitch: 0
        }
      ]
    },
    briefDescription: 'Kediaman Raja Banawa Laparenrengi Lamarauna (berkuasa 1947-1960) di Jalan Pelabuhan dibangun dekade 1940-an.',
    historicalSignificance: 'Rumah ini berarsitektur kolonial yang dibangun sekitar tahun 1940-an, merupakan tempat kediaman Laparenrengi Lamarauna, Raja Banawa yang berkuasa sejak tahun 1947-1960. Dinding dan lantai berupa beton, dilengkapi pintu dan jendela kayu, serta atap semula berbahan sirap kayu ulin. Terletak di Jalan Pelabuhan bersebelahan dengan Kantor KPN (Kepala Pemerintahan Negeri) Donggala yang kelak dikenal Kantor Pembantu Bupati Donggala. Awal dekade 1970-an rumah ini dibeli Umar Alaydrus, saudagar keturunan Arab. Sejak 1975 ditempati Raden Widya S. Indra Mangoenkintoko, karyawan perusahaan Umar Alaydrus. Pasca gempa 2018 atapnya mengalami perbaikan dengan atap seng.',
    architecturalStyle: 'Arsitektur kolonial tropis modern 1940-an dengan dinding beton masif, kusen kayu jati/ulin, dan atap sirap ulin.',
    maritimeRelevance: 'Pusat kepemimpinan monarki Banawa yang mengawal integrasi daerah maritim Donggala ke dalam Negara Kesatuan RI.',
    audioNarration: {
      title: 'Rumah Raja Banawa: Kediaman Laparenrengi Lamarauna',
      speakerName: 'Jamrin Abubakar (Ahli Cagar Budaya)',
      durationText: '2 Menit 30 Detik',
      transcript: 'Berada di Jalan Pelabuhan Donggala bersebelahan dengan bekas Kantor KPN, Rumah Raja Banawa dibangun dekade 1940-an sebagai tempat kediaman Laparenrengi Lamarauna, Raja Banawa yang memimpin pada kurun 1947 hingga 1960. Bangunan kolonial berdinding beton ini awalnya beratapkan sirap kayu ulin. Dalam perjalanannya, rumah ini sempat dibeli saudagar Umar Alaydrus dan menjadi saksi bisu transisi kepemimpinan di tanah Banawa.'
    },
    talkingPersona: {
      name: 'Rumah Raja Banawa',
      role: 'Kediaman Raja Laparenrengi Lamarauna',
      avatar: '👑',
      greeting: 'Tabe! Saya adalah Rumah Raja Banawa, tempat bersemayam Raja Laparenrengi Lamarauna yang memimpin Banawa dari 1947 hingga 1960.',
      systemPrompt: 'Kamu adalah Rumah Raja Banawa di Jalan Pelabuhan Boya. Ceritakan tentang Raja Laparenrengi Lamarauna, arsitektur kolonial beton dan sirap ulin, posisi samping Kantor KPN, dan pemilik berikutnya.',
      sampleQuestions: [
        'Siapa raja yang menempati rumah ini dan kapan beliau berkuasa?',
        'Bagaimana arsitektur dan material asli bangunan rumah ini?',
        'Di mana posisi persis rumah Raja Banawa ini?'
      ]
    },
    trivia: [
      'Laparenrengi Lamarauna adalah Raja Banawa yang memimpin pada periode krusial kemerdekaan 1947 hingga 1960.',
      'Letak rumah ini bersebelahan langsung dengan Kantor KPN (Kepala Pemerintahan Negeri) Donggala.'
    ],
    keyFacts: [
      { label: 'Masa Pembangunan', value: 'Dekade 1940-an' },
      { label: 'Tokoh Kunci', value: 'Laparenrengi Lamarauna (Raja Banawa 1947-1960)' },
      { label: 'Lokasi', value: 'Jl. Pelabuhan, Kelurahan Boya' },
      { label: 'Material', value: 'Beton, Kayu Ulin, Atap Sirap' }
    ]
  },

  // 13. GEDUNG BUDI BHAKTI
  {
    id: 'gedung-budi-bhakti',
    title: 'Gedung Budi Bhakti',
    localName: 'Gedung Budi Bhakti / Eks BORSUMIJ / Aduma Niaga / PT PPI',
    kelurahan: 'Kelurahan Boya',
    establishedYear: '1940-an',
    period: 'Masa Kolonial Belanda (1940-an)',
    category: 'Kolonial & Pemerintahan',
    locationDescription: 'Kawasan Pelabuhan / Perdagangan, Kelurahan Boya, Banawa',
    coordinates: {
      lat: -0.6685,
      lng: 119.7419,
      mapX: 42,
      mapY: 37
    },
    thumbnail: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    pastPhoto: {
      url: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1000&q=80',
      caption: 'Gedung Borsumij Donggala sebelum mengalami kerusakan akibat pengeboman pasukan Permesta tahun 1958.',
      source: 'Arsip Borsumij & Sejarah Permesta / Catatan Jamrin Abubakar',
      year: '1955'
    },
    currentPhoto: {
      url: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1000&q=80',
      caption: 'Gedung Budi Bhakti lantai dua bergaya kolonial yang pernah direnovasi tahun 1960 pasca pengeboman Permesta.',
      conditionStatus: 'Perlu Revitalisasi'
    },
    panorama360: {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80',
      type: 'sphere',
      initialYaw: 160,
      initialPitch: 0,
      hotspots: [
        {
          id: 'budibhakti-hotspot-1',
          title: 'Arsitektur Kolonial Dua Lantai',
          description: 'Bangunan bergaya kolonial berlantai dua yang dilengkapi pergudangan penampung aneka barang sandang dan pangan.',
          yaw: 155,
          pitch: 10
        },
        {
          id: 'budibhakti-hotspot-2',
          title: 'Jejak Sejarah Peristiwa Permesta 1958',
          description: 'Gedung ini mengalami kerusakan berat akibat pengeboman pasukan Permesta tahun 1958 lalu direnovasi tahun 1960.',
          yaw: -35,
          pitch: 0
        }
      ]
    },
    briefDescription: 'Eks BORSUMIJ lalu Budi Bhakti / Aduma Niaga / PT PPI, sempat dibom Permesta 1958 dan direnovasi 1960.',
    historicalSignificance: 'Merupakan bangunan perusahaan perdagangan di bawah naungan BUMN era Hindia Belanda tahun 1940-an. Sebutan Budi Bhakti adalah nama kedua dari hasil nasionalisasi perusahaan Belanda semula bernama BORSUMIJ (Borneo Sumatra Maatschappij) menjadi Aduma Niaga. Gedung ini mengalami kerusakan berat tahun 1958 akibat pengeboman oleh pasukan Permesta, lalu direnovasi pada tahun 1960. Namanya sempat berganti-ganti dan kini dikenal sebagai PT PPI (Perusahaan Perdagangan Indonesia). Bentuk awal bergaya arsitektur kolonial dua lantai dilengkapi fasilitas pergudangan sandang-pangan sebelum didistribusikan ke pelosok Sulawesi Tengah. Mengalami kerusakan berat saat gempa tsunami 2018.',
    architecturalStyle: 'Arsitektur dagang kolonial Belanda dua lantai dengan struktur pergudangan logistik berkapasitas besar.',
    maritimeRelevance: 'Pusat distribusi logistik sandang dan pangan antarpulau terbesar di Sulawesi Tengah era BORSUMIJ hingga PT PPI.',
    audioNarration: {
      title: 'Gedung Budi Bhakti: Jejak BORSUMIJ dan Pengeboman Permesta',
      speakerName: 'Jamrin Abubakar (Ahli Cagar Budaya)',
      durationText: '2 Menit 35 Detik',
      transcript: 'Gedung Budi Bhakti berakar dari masa kolonial 1940-an sebagai kantor BORSUMIJ (Borneo Sumatra Maatschappij) sebelum dinasionalisasi menjadi Aduma Niaga dan Budi Bhakti. Pada tahun 1958 saat pergolakan Permesta, gedung ini hancur akibat pengeboman pesawat dan baru dipugar kembali pada 1960. Menjadi pusat penyalur sembako dan logistik se-Sulawesi Tengah hingga era PT PPI, sebelum akhirnya kembali diuji oleh gempa tsunami 2018.'
    },
    talkingPersona: {
      name: 'Gedung Budi Bhakti (Eks BORSUMIJ)',
      role: 'Monumen Niaga Logistik Antarpulau',
      avatar: '🏛️',
      greeting: 'Tabe! Saya adalah Gedung Budi Bhakti. Dari masa kolonial BORSUMIJ, pengeboman Permesta 1958, renovasi 1960, hingga PT PPI, saya mengabdi menyalurkan sandang pangan rakyat.',
      systemPrompt: 'Kamu adalah Gedung Budi Bhakti Donggala. Ceritakan tentang BORSUMIJ, nasionalisasi menjadi Aduma Niaga & Budi Bhakti, peristiwa bom Permesta 1958, dan renovasi 1960.',
      sampleQuestions: [
        'Apa nama asli perusahaan Belanda yang mendirikan gedung ini?',
        'Peristiwa perang apa yang merusak gedung ini pada tahun 1958?',
        'Apa fungsi utama gedung ini sebelum gempa dan tsunami 2018?'
      ]
    },
    trivia: [
      'Gedung ini pernah hancur akibat pengeboman pesawat tempur pasukan Permesta pada tahun 1958 dan direnovasi tahun 1960.',
      'Nama Budi Bhakti merupakan nama kedua hasil nasionalisasi dari maskapai dagang Belanda BORSUMIJ.'
    ],
    keyFacts: [
      { label: 'Pembangunan Awal', value: 'Tahun 1940-an (BORSUMIJ)' },
      { label: 'Nasionalisasi', value: 'Aduma Niaga lalu Budi Bhakti (PT PPI)' },
      { label: 'Peristiwa Sejarah', value: 'Pengeboman Permesta 1958 & Renovasi 1960' },
      { label: 'Fungsi Awal', value: 'Distribusi Sandang Pangan Sulteng' }
    ]
  },

  // 14. MASJID RAYA DONGGALA
  {
    id: 'masjid-raya-donggala',
    title: 'Masjid Raya Donggala',
    localName: 'Masjid Raya Donggala / Masjid Tertua Donggala',
    kelurahan: 'Kelurahan Labuan Bajo',
    establishedYear: 'Abad ke-18',
    period: 'Abad ke-18 Masehi',
    category: 'Religi & Multikultural',
    locationDescription: 'Tengah kota dekat pelabuhan Donggala, Kelurahan Labuan Bajo, Banawa',
    coordinates: {
      lat: -0.6668,
      lng: 119.7420,
      mapX: 43,
      mapY: 38
    },
    thumbnail: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80',
    pastPhoto: {
      url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
      caption: 'Catatan nakhoda William Vaughan abad ke-18 mencatat keberadaan ulama Tuan Hadjee dari Bacan di dekat masjid dekat gerbang kota pelabuhan Donggala.',
      source: 'Catatan William Vaughan (Abad 18) / Arsip Jamrin Abubakar',
      year: '1780'
    },
    currentPhoto: {
      url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
      caption: 'Masjid Raya Donggala di tengah kota, pusat syiar Islam tertua yang telah dipugar kokoh.',
      conditionStatus: 'Terawat'
    },
    panorama360: {
      url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=2000&q=80',
      type: 'sphere',
      initialYaw: 180,
      initialPitch: 0,
      hotspots: [
        {
          id: 'masjidraya-hotspot-1',
          title: 'Pusat Ibadah Maritim Abad ke-18',
          description: 'Masjid tertua di Kota Donggala yang jejaknya tercatat sejak abad ke-18 dekat gerbang pelabuhan.',
          yaw: 180,
          pitch: 5
        },
        {
          id: 'masjidraya-hotspot-2',
          title: 'Ruang Mihrab & Jejak Kayu Ulin',
          description: 'Bangunan awal berdinding kayu dengan atap sirap kayu ulin sebelum renovasi besar akhir 1960-an.',
          yaw: 0,
          pitch: 0
        }
      ]
    },
    briefDescription: 'Masjid tertua di Kota Donggala berjejak abad ke-18, tercatat dalam laporan William Vaughan tentang Tuan Hadjee.',
    historicalSignificance: 'Diidentifikasi sebagai masjid tertua di Kota Donggala dengan jejak yang diperkirakan sudah ada pada abad ke-18. Berdasarkan catatan penjelajah William Vaughan tentang kehadiran ulama Tuan Hadjee dari Bacan yang tinggal di Donggala, disebutkan rumah sang ulama terletak dekat dari masjid di dekat gerbang kota pelabuhan. Menurut penuturan masyarakat turun-temurun, Masjid Raya di tengah kota ini merupakan masjid paling tua di Donggala. Bangunan awal berbahan dinding kayu dengan atap sirap berbahan kayu ulin, kemudian mengalami renovasi besar-besaran akhir dekade 1960-an hingga awal 1970.',
    architecturalStyle: 'Evolusi arsitektur masjid pesisir dari dinding kayu dan atap sirap ulin menuju masjid raya berkubah megah.',
    maritimeRelevance: 'Pusat spiritual para pelaut Nusantara, ulama Bacan, Hadhrami, Bugis, dan penguasa Banawa di pintu gerbang pelabuhan.',
    audioNarration: {
      title: 'Masjid Raya Donggala: Saksi Tertua Abad ke-18',
      speakerName: 'Jamrin Abubakar (Ahli Cagar Budaya)',
      durationText: '2 Menit 30 Detik',
      transcript: 'Masjid Raya Donggala diidentifikasi sebagai masjid tertua di kota ini yang telah berdiri sejak abad ke-18. Catatan pelaut Inggris William Vaughan mencatat ulama terpandang Tuan Hadjee asal Bacan tinggal dekat masjid dekat gerbang pelabuhan. Dinding awalnya terbuat dari kayu dengan atap sirap kayu ulin pilihan. Masjid ini telah mengalami beberapa kali pemugaran, termasuk renovasi besar pada akhir dekade 1960-an hingga awal 1970.'
    },
    talkingPersona: {
      name: 'Masjid Raya Donggala',
      role: 'Pusat Spiritual Tertua Abad ke-18',
      avatar: '🕌',
      greeting: 'Assalamu alaikum wr. wb. Saya adalah Masjid Raya Donggala, masjid tertua di kota ini yang jejak sejarahnya telah tercatat sejak abad ke-18.',
      systemPrompt: 'Kamu adalah Masjid Raya Donggala. Ceritakan catatan William Vaughan tentang Tuan Hadjee dari Bacan, atap sirap kayu ulin awal, dan renovasi besar 1960-an/1970.',
      sampleQuestions: [
        'Bagaimana catatan William Vaughan membuktikan keberadaan masjid ini di abad ke-18?',
        'Siapa sosok Tuan Hadjee dari Bacan?',
        'Bagaimana bahan konstruksi bangunan awal masjid ini?'
      ]
    },
    trivia: [
      'Keberadaan masjid ini pada abad ke-18 tercatat dalam catatan William Vaughan tentang Tuan Hadjee dari Bacan.',
      'Konstruksi awal menggunakan dinding kayu dengan atap sirap dari kayu ulin.'
    ],
    keyFacts: [
      { label: 'Perkiraan Jejak', value: 'Abad ke-18 Masehi' },
      { label: 'Bukti Sejarah', value: 'Catatan William Vaughan (Tuan Hadjee Bacan)' },
      { label: 'Bahan Awal', value: 'Dinding Kayu & Atap Sirap Kayu Ulin' },
      { label: 'Renovasi Besar', value: 'Akhir 1960-an hingga awal 1970' }
    ]
  },

  // 15. KUBURAN BELANDA
  {
    id: 'kuburan-belanda-gunung-bale',
    title: 'Kuburan Belanda',
    localName: 'Kuburan Belanda / Makam Kapten Willem Van Den Berg',
    kelurahan: 'Kelurahan Gunung Bale',
    establishedYear: '1930',
    period: 'Masa Kolonial Hindia Belanda (1930)',
    category: 'Situs & Makam Sejarah',
    locationDescription: 'Kompleks Kuburan Kristen di Jalan Jati, Kelurahan Gunung Bale, Banawa',
    coordinates: {
      lat: -0.6765,
      lng: 119.7468,
      mapX: 50,
      mapY: 52
    },
    thumbnail: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=1600&q=80',
    pastPhoto: {
      url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
      caption: 'Nisan pemakaman Kapten kapal uap Belanda Willem Van Den Berg yang wafat pada 30 November 1930.',
      source: 'Arsip Hindia Belanda / Dokumentasi Jamrin Abubakar',
      year: '1930'
    },
    currentPhoto: {
      url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
      caption: 'Situs Kuburan Belanda di Jalan Jati Gunung Bale yang telah ditetapkan Cagar Budaya 2023 dan dipasangi pagar pelindung.',
      conditionStatus: 'Terawat'
    },
    panorama360: {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80',
      type: 'sphere',
      initialYaw: 45,
      initialPitch: 0,
      hotspots: [
        {
          id: 'kuburan-hotspot-1',
          title: 'Makam Kapten Willem Van Den Berg',
          description: 'Kapten kapal Belanda yang wafat di atas kapal pada 30 November 1930 saat berlayar dari Manado menuju Donggala.',
          yaw: 40,
          pitch: -10
        },
        {
          id: 'kuburan-hotspot-2',
          title: 'Kompleks Pemakaman Kristen Jalan Jati',
          description: 'Situs makam bersejarah di Gunung Bale yang ditetapkan sebagai Cagar Budaya tahun 2023 dengan pagar keliling.',
          yaw: -130,
          pitch: 5
        }
      ]
    },
    briefDescription: 'Makam Kapten Kapal Belanda Willem Van Den Berg (wafat 1930) di Jl. Jati, Cagar Budaya resmi sejak 2023.',
    historicalSignificance: 'Terletak di Kompleks Kuburan Kristen di Jalan Jati, Kelurahan Gunung Bale, Kecamatan Banawa. Dinilai memiliki nilai sejarah penting sehingga pemerintah Donggala menetapkannya sebagai Cagar Budaya sejak tahun 2023 lalu dan telah dipelihara serta dilestarikan dengan pemasangan pagar keliling. Di kuburan ini dimakamkan WILLEM VAN DEN BERG, asal Belanda, seorang kapten kapal yang sering berlabuh di Donggala mengantar penumpang dan muatan barang dari Jakarta ke Donggala hingga Manado pada awal abad ke-20. Ia meninggal dunia di atas kapal saat berlayar dari Manado pada 30 November 1930 dan dikuburkan di Donggala saat kapal merapat. Menjadi penanda kuat pemukiman orang-orang Belanda di Donggala tempo dulu.',
    architecturalStyle: 'Makam bergaya Eropa kolonial dengan tugu nisan prasasti marmer/semen berpagar keliling pelindung.',
    maritimeRelevance: 'Peristirahatan nakhoda kapal niaga uap rute Jakarta - Donggala - Manado yang mengabadikan peran maritim Donggala.',
    audioNarration: {
      title: 'Kuburan Belanda: Kisah Kapten Willem Van Den Berg',
      speakerName: 'Jamrin Abubakar (Ahli Cagar Budaya)',
      durationText: '2 Menit 25 Detik',
      transcript: 'Di Jalan Jati, Kelurahan Gunung Bale, terdapat situs Kuburan Belanda yang telah ditetapkan sebagai Cagar Budaya sejak tahun 2023. Salah satu tokoh yang dimakamkan di sini adalah Willem Van Den Berg, seorang kapten kapal Belanda yang rutin mengarungi rute Jakarta, Donggala, hingga Manado. Sang kapten menghembuskan napas terakhir di atas kapalnya pada 30 November 1930 dan dimakamkan ketika kapal tiba di Donggala. Keberadaan kompleks ini menegaskan Donggala sebagai pusat hunian dan navigasi bangsa Eropa.'
    },
    talkingPersona: {
      name: 'Situs Kuburan Belanda (Kapten Willem Van Den Berg)',
      role: 'Cagar Budaya Makam Navigasi Kolonial',
      avatar: '⚓',
      greeting: 'Tabe! Saya adalah Situs Kuburan Belanda di Jalan Jati Gunung Bale. Tempat peristirahatan Kapten Willem Van Den Berg yang wafat di atas kapal pada 30 November 1930.',
      systemPrompt: 'Kamu adalah Situs Kuburan Belanda Donggala. Ceritakan tentang Kapten Willem Van Den Berg, jalur kapal Jakarta-Donggala-Manado, wafat 30 November 1930, dan penetapan Cagar Budaya tahun 2023.',
      sampleQuestions: [
        'Siapa tokoh Belanda utama yang dimakamkan di sini?',
        'Bagaimana kronologi Kapten Willem Van Den Berg wafat dan dimakamkan di Donggala?',
        'Kapan situs ini ditetapkan sebagai Cagar Budaya Donggala?'
      ]
    },
    trivia: [
      'Kapten Willem Van Den Berg wafat saat bertugas di atas kapal dalam pelayaran dari Manado pada 30 November 1930.',
      'Situs ini resmi ditetapkan sebagai Cagar Budaya oleh Pemkab Donggala pada tahun 2023.'
    ],
    keyFacts: [
      { label: 'Tokoh Utama', value: 'Willem Van Den Berg (Kapten Kapal)' },
      { label: 'Tanggal Wafat', value: '30 November 1930' },
      { label: 'Rute Pelayaran', value: 'Jakarta - Donggala - Manado' },
      { label: 'Status Cagar Budaya', value: 'Ditetapkan Tahun 2023' }
    ]
  },

  // 16. KAWASAN KOTA DONGGALA
  {
    id: 'kawasan-kota-donggala',
    title: 'Kawasan Kota Donggala',
    localName: 'Kawasan Kota Tua Donggala (Labuan Bajo & Boya)',
    kelurahan: 'Kelurahan Boya',
    establishedYear: 'Abad ke-18 - 19',
    period: 'Era Kerajaan Banawa, Kolonial, hingga Kontemporer',
    category: 'Kawasan & Lanskap Sejarah',
    locationDescription: 'Seluruh permukiman Kelurahan Labuan Bajo & Kelurahan Boya (700m dari garis pantai)',
    coordinates: {
      lat: -0.6690,
      lng: 119.7415,
      mapX: 43,
      mapY: 40
    },
    thumbnail: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    pastPhoto: {
      url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
      caption: 'Pola tata kota jaringan jalan kotak-kotak grid Kota Tua Donggala terhubung permukiman pesisir abad ke-19.',
      source: 'Peta Topografi Militer Hindia Belanda / Catatan Jamrin Abubakar',
      year: '1915'
    },
    currentPhoto: {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      caption: 'Kawasan pemukiman bersejarah Labuan Bajo dan Boya dengan deretan bangunan tua berjarak 700 meter dari pantai.',
      conditionStatus: 'Terawat'
    },
    panorama360: {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80',
      type: 'sphere',
      initialYaw: 0,
      initialPitch: 0,
      hotspots: [
        {
          id: 'kawasankota-hotspot-1',
          title: 'Pola Jaringan Jalan Kotak-Kotak (Grid System)',
          description: 'Ciri khas tata kota kolonial dengan pola jalan kotak-kotak yang saling terhubung antarpemukiman.',
          yaw: 0,
          pitch: 5
        },
        {
          id: 'kawasankota-hotspot-2',
          title: 'Zona Pesisir 700 Meter dari Garis Pantai',
          description: 'Konsentrasi permukiman warisan sejarah yang membentang dari garis pantai Labuan Bajo hingga pedalaman Boya.',
          yaw: 90,
          pitch: 0
        },
        {
          id: 'kawasankota-hotspot-3',
          title: 'Konsentrasi Bangunan Bersejarah',
          description: 'Keberadaan puluhan bangunan tua rumah tinggal, gudang, pertokoan kongsi, dan kantor niaga masa lampau.',
          yaw: -90,
          pitch: 10
        }
      ]
    },
    briefDescription: 'Kawasan permukiman Labuan Bajo & Boya berjarak 700 meter dari pantai dengan pola jalan kotak-kotak dan bangunan tua.',
    historicalSignificance: 'Kawasan ini meliputi seluruh permukiman di Kelurahan Labuan Bajo dan Kelurahan Boya, terutama dari garis pantai hingga ke daratan dengan jarak sekitar 700 meter dari pantai. Dicirikan secara khas dengan pola jaringan jalan kotak-kotak (grid pattern) yang saling terhubung erat dengan permukiman satu dengan lainnya, serta keberadaan bangunan-bangunan tua bersejarah peninggalan era Kerajaan Banawa dan masa kolonial Hindia Belanda. Kawasan ini merupakan inti sejarah dan lanskap budaya Kota Donggala.',
    architecturalStyle: 'Lanskap tata kota terencana berorientasi pesisir dengan sistem jalan kotak-kotak (grid pattern) dan deretan rumah panggung serta ruko kolonial.',
    maritimeRelevance: 'Pusat kehidupan sosial, ekonomi, budaya, dan administrasi maritim seluruh pesisir barat Sulawesi Tengah.',
    audioNarration: {
      title: 'Kawasan Kota Donggala: Pola Grid dan Memori Kota Tua',
      speakerName: 'Jamrin Abubakar (Ahli Cagar Budaya)',
      durationText: '2 Menit 30 Detik',
      transcript: 'Kawasan Kota Donggala mencakup permukiman di Kelurahan Labuan Bajo dan Kelurahan Boya, terbentang sekitar 700 meter dari garis pantai. Lanskap perkotaan ini sangat khas karena dirancang dengan pola jalan kotak-kotak teratur yang menghubungkan permukiman dengan pelabuhan. Di dalamnya tersimpan keanekaragaman arsitektur tua yang menjadi bukti sejarah Donggala sebagai kota maritim kosmopolitan.'
    },
    talkingPersona: {
      name: 'Kawasan Kota Donggala',
      role: 'Lanskap Sejarah Kota Tua Banawa',
      avatar: '🗺️',
      greeting: 'Tabe! Saya adalah Kawasan Kota Donggala. Menyusuri 700 meter dari pantai Labuan Bajo dan Boya dengan pola jalan kotak-kotak, Anda melintasi berabad-abad jejak sejarah.',
      systemPrompt: 'Kamu adalah Kawasan Kota Donggala (Kelurahan Labuan Bajo dan Boya). Jelaskan batas 700 meter dari garis pantai, pola jalan kotak-kotak, keberadaan bangunan-bangunan tua, dan identitas kota pelabuhan tua.',
      sampleQuestions: [
        'Meliputi wilayah kelurahan mana sajakah Kawasan Kota Donggala?',
        'Apa ciri khas utama tata ruang dan pola jalan di kawasan ini?',
        'Berapa jarak bentangan kawasan ini dari garis pantai?'
      ]
    },
    trivia: [
      'Pola tata kota Kawasan Kota Donggala memiliki sistem jaringan jalan kotak-kotak (grid) yang menghubungkan pantai ke permukiman.',
      'Kawasan ini membentang sekitar 700 meter dari garis pantai Labuan Bajo hingga Kelurahan Boya.'
    ],
    keyFacts: [
      { label: 'Cakupan Wilayah', value: 'Kelurahan Labuan Bajo & Kelurahan Boya' },
      { label: 'Jarak dari Pantai', value: 'Sekitar 700 Meter dari Garis Pantai' },
      { label: 'Karakteristik Tata Ruang', value: 'Pola Jalan Kotak-Kotak (Grid System)' },
      { label: 'Unsur Utama', value: 'Permukiman & Bangunan Tua Bersejarah' }
    ]
  }
];

export const HISTORICAL_TIMELINE = [
  {
    year: 'Abad ke-18',
    title: 'Keberadaan Masjid Tertua Donggala & Catatan William Vaughan',
    description: 'Catatan nakhoda Inggris William Vaughan mencatat kehadiran ulama Tuan Hadjee dari Bacan di dekat masjid tertua di gerbang kota pelabuhan Donggala.',
    category: 'Religi & Maritim'
  },
  {
    year: 'Abad ke-19',
    title: 'Pembangunan Sou Raja Rumah Tradisional Pua Sehang',
    description: 'Rumah tradisional perpaduan gaya Bugis dan Mandar peninggalan saudagar Umar Haruna (Pua Sehang) dibangun dengan tiang kayu ulin di Labuan Bajo.',
    category: 'Arsitektur & Budaya'
  },
  {
    year: '1902',
    title: 'Pembangunan Menara Suar Tanjung Karang',
    description: 'Pemerintah kolonial Hindia Belanda membangun Menara Suar di atas bukit Tanjung Karang untuk navigasi Selat Makassar dan pemantau bajak laut.',
    category: 'Navigasi Maritim'
  },
  {
    year: 'Awal Abad ke-20',
    title: 'Pembangunan Kantor Douane (Bea dan Cukai)',
    description: 'Pembangunan kantor pabean pelabuhan Donggala yang awalnya berbentuk rumah panggung kayu beratap sirap ulin sebelum dipugar modern 1967.',
    category: 'Pemerintahan & Pelabuhan'
  },
  {
    year: '1920-an',
    title: 'Pembangunan Kantor dan Rumah Dinas KPM (Kantor PELNI)',
    description: 'Gedung maskapai pelayaran Hindia Belanda KPM di Jalan Lamarauna dibangun dengan konstruksi beton dan interior kayu ulin beratap sirap.',
    category: 'Pelayaran & Maritim'
  },
  {
    year: '1924',
    title: 'Pendirian Chung Hwa School di Jalan Pelabuhan',
    description: 'Komunitas Tionghoa Donggala mendirikan Chung Hwa School dengan perpaduan arsitektur Tionghoa dan kolonial di Kelurahan Boya.',
    category: 'Pendidikan & Multikultural'
  },
  {
    year: '1930',
    title: 'Makam Kapten Willem Van Den Berg di Gunung Bale',
    description: 'Kapten kapal Belanda Willem Van Den Berg wafat di atas kapal saat berlayar dari Manado dan dimakamkan di Kompleks Kuburan Kristen Jalan Jati.',
    category: 'Situs & Tokoh Sejarah'
  },
  {
    year: '1930-an - 1937',
    title: 'Masa Keemasan & Berita Kebakaran Toko Teng Hien',
    description: 'Toko kelontong dan kongsi dagang Teng Hien beroperasi ramai, mengalami kebakaran 1937 diberitakan koran Belanda De Gooi lalu dibangun kembali.',
    category: 'Perniagaan Kota Tua'
  },
  {
    year: '1940-an',
    title: 'Pembangunan Kantor & Gudang PKKD serta BORSUMIJ',
    description: 'Pembangunan kawasan pergudangan kopra PKKD besi silindris 90 meter, kantor administrasi dua lantai, gedung Borsumij, dan Rumah Kediaman Raja Banawa.',
    category: 'Ekonomi Kopra & Kerajaan'
  },
  {
    year: '1948 - 1950',
    title: 'Pendirian Gembira Theater (Bioskop Megaria)',
    description: 'Inisiatif kongsi tokoh masyarakat mendirikan Gembira Theater di Jalan Bioskop, yang kemudian berkembang menjadi Bioskop Megaria.',
    category: 'Sosial & Hiburan'
  },
  {
    year: '1958 - 1960',
    title: 'Pengeboman Permesta & Renovasi Gedung Budi Bhakti',
    description: 'Gedung Borsumij rusak akibat serangan bom Permesta tahun 1958 lalu direnovasi tahun 1960 menjadi kantor Aduma Niaga dan Budi Bhakti.',
    category: 'Pergolakan Sejarah'
  },
  {
    year: '1967',
    title: 'Renovasi Gedung Bea Cukai oleh Bupati Abdul Azis Lamadjido',
    description: 'Renovasi total Gedung Inspeksi Bea Cukai Donggala menjadi gedung modern lantai tiga diresmikan dengan prasasti Bupati Donggala.',
    category: 'Pemerintahan'
  },
  {
    year: '2023 - 2024',
    title: 'Penetapan Resmi Objek Cagar Budaya Kabupaten Donggala',
    description: 'Pemerintah Kabupaten Donggala menetapkan Chung Hwa School, Kuburan Belanda (2023), Kantor PELNI, dan Sou Raja (2024) sebagai Cagar Budaya resmi.',
    category: 'Regulasi Cagar Budaya'
  },
  {
    year: '2026',
    title: 'Inisiatif Digitalisasi 16 Situs Cagar Budaya Donggala (FPK 2026)',
    description: 'Peluncuran platform digital interaktif "Djelajah Donggala" mendokumentasikan 16 objek cagar budaya dan ODCB berdasarkan catatan Jamrin Abubakar.',
    category: 'Pelestarian Digital'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Tahun berapakah Menara Suar Tanjung Karang didirikan oleh pemerintah Hindia Belanda?',
    options: ['Tahun 1902', 'Tahun 1945', 'Tahun 1920', 'Tahun 1850'],
    correctIndex: 0,
    explanation: 'Menara Suar Tanjung Karang dibangun pada tahun 1902 sebagai alat navigasi lintasan Selat Makassar dan pemantau bajak laut di Teluk Palu.',
    siteIdReference: 'menara-suar-tanjung-karang'
  },
  {
    id: 'q2',
    question: 'Berapa panjang bangunan Gudang PKKD yang terbuat dari besi silindris setengah lingkaran?',
    options: ['30 meter', '90 meter', '150 meter', '200 meter'],
    correctIndex: 1,
    explanation: 'Gudang PKKD memiliki panjang 90 meter berbentuk silindris setengah lingkaran untuk menampung kopra petani se-Sulawesi Tengah.',
    siteIdReference: 'gudang-pkkd-donggala'
  },
  {
    id: 'q3',
    question: 'Toko kelontong manakah di Donggala yang kebakaran tahun 1937 dan diberitakan di koran Belanda De Gooi - en Eemlander?',
    options: ['Toko Nam Seng', 'Toko Teng Hien', 'Toko Makmur', 'Toko Adil'],
    correctIndex: 1,
    explanation: 'Toko Teng Hien mengalami kebakaran tahun 1937 sebagaimana diberitakan surat kabar De Gooi - en Eemlander Rabu 1 September 1937, lalu dibangun kembali.',
    siteIdReference: 'toko-teng-hien'
  },
  {
    id: 'q4',
    question: 'Siapakah kapten kapal Belanda yang wafat pada 30 November 1930 dan dimakamkan di Kuburan Belanda Jalan Jati?',
    options: ['Kapten Van Diemen', 'Kapten Willem Van Den Berg', 'Kapten Jan Pieterszoon', 'Kapten De Houtman'],
    correctIndex: 1,
    explanation: 'Kapten Willem Van Den Berg adalah nakhoda kapal Belanda yang sering berlayar rute Jakarta-Donggala-Manado, wafat di atas kapal pada 30 November 1930.',
    siteIdReference: 'kuburan-belanda-gunung-bale'
  },
  {
    id: 'q5',
    question: 'Siapakah Raja Banawa yang bertempat tinggal di Rumah Raja Banawa di Jalan Pelabuhan (berkuasa 1947-1960)?',
    options: ['Laparenrengi Lamarauna', 'Yodjokodi', 'Pua Sehang', 'Abdul Azis Lamadjido'],
    correctIndex: 0,
    explanation: 'Rumah Raja Banawa di Jalan Pelabuhan dibangun dekade 1940-an sebagai tempat kediaman Laparenrengi Lamarauna, Raja Banawa yang berkuasa tahun 1947-1960.',
    siteIdReference: 'rumah-raja-banawa'
  }
];

export const AMBIENT_SOUNDSCAPES = [
  {
    id: 'selat-makassar-waves',
    title: 'Deru Ombak Selat Makassar',
    subtitle: 'Suasana pesisir pantai Tanjung Karang & angin laut',
    icon: '🌊',
    audioFreq: 220,
    type: 'waves'
  },
  {
    id: 'pelabuhan-donggala-bustle',
    title: 'Lonceng & Peluit Kapal Pelabuhan',
    subtitle: 'Gema derap niaga dan kapal uap bersandar di Labuan Bajo & Boya',
    icon: '⚓',
    audioFreq: 440,
    type: 'harbor'
  },
  {
    id: 'kaili-traditional-harmonies',
    title: 'Petikan Kecapi & Harmoni Donggala',
    subtitle: 'Alunan musik tradisional pesisir di Sou Raja Banawa',
    icon: '🎵',
    audioFreq: 330,
    type: 'melody'
  }
];

export const projectDetails = {
  title: 'Djelajah Donggala: Menghidupkan Donggala dalam Satu Pintu Digital',
  subtitle: 'Platform Digital Interaktif dan Imersif 16 Situs Sejarah & Cagar Budaya Kota Donggala',
  applicantName: 'Ian Dwi Putera',
  expertAdvisor: 'Jamrin Abubakar, S.Sos',
  expertAdvisorDesc: 'Penulis Buku Sejarah Donggala, Budayawan dan Tim Ahli Cagar Budaya Kabupaten Donggala',
  leadership: [
    { role: 'Ketua Tim Pengusul', name: 'Ian Dwi Putera' },
    { role: 'Sekretaris', name: 'Andi Hendrawan' },
    { role: 'Bendahara', name: 'Annisa' }
  ],
  techAndDesign: [
    { role: 'Perancang Desain Antarmuka (UI/UX Designer) & Integrasi Konten', name: 'Ian Dwi Putera' },
    { role: 'Pengembang Web (Web Programmer)', name: 'Abdul Fajar Laudjeng' },
    { role: 'Penulis Skrip', name: 'Andi Hendrawan' }
  ],
  creativeAndMedia: [
    { role: 'Editor konten 360°', name: 'Zulkarnain' },
    { role: 'Perancang Audio & Musik Latar', name: 'Renal' },
    { role: 'Tim Narator', name: '(Nama dikosongkan)' }
  ],
  operationsAndField: [
    { role: 'Divisi Dokumentasi & Transportasi', name: 'Afid A' },
    { role: 'Divisi Perlengkapan', name: 'Razya Saputra' },
    { role: 'Divisi Konsumsi & Akomodasi', name: 'Arya Ananta & Bahrul Ulum' }
  ],
  teamMembers: [
    'Ian Dwi Putera (Ketua Tim Pengusul & UI/UX Designer)',
    'Andi Hendrawan (Sekretaris & Penulis Skrip)',
    'Annisa (Bendahara)',
    'Abdul Fajar Laudjeng (Pengembang Web / Web Programmer)',
    'Zulkarnain (Editor Konten 360°)',
    'Renal (Perancang Audio & Musik Latar)',
    'Tim Narator (Dikosongkan)',
    'Afid A (Divisi Dokumentasi & Transportasi)',
    'Razya Saputra (Divisi Perlengkapan)',
    'Arya Ananta & Bahrul Ulum (Divisi Konsumsi & Akomodasi)'
  ],
  fundingProgram: 'Bantuan Pemerintah Fasilitasi Pemajuan Kebudayaan (FPK) 2026',
  fundingCategory: 'Dokumentasi Karya / Pengetahuan Tradisional / Objek Pemajuan Kebudayaan Digital',
  recommendingInstitution: 'Balai Pelestarian Kebudayaan (BPK) Wilayah XVIII (Sulawesi Tengah & Gorontalo)',
  recommendationDetails: 'Rekomendasi Resmi Pemanfaatan & Digitalisasi Cagar Budaya Kota Tua Donggala',
  targetLocation: 'Kawasan Kota Donggala (Kelurahan Tanjung Batu, Kelurahan Boya, Kelurahan Labuan Bajo, Kelurahan Gunung Bale), Kec. Banawa, Kab. Donggala, Sulawesi Tengah',
  background: 'Kawasan Kota Tua Donggala merupakan episentrum sejarah maritim di Selat Makassar yang menyimpan 16 situs Objek Diduga Cagar Budaya (ODCB) dan Cagar Budaya resmi berdasarkan rujukan ahli Jamrin Abubakar. Platform digital ini menghadirkan "Satu Pintu Digital" berstandar modern dengan visual 360°, audio storytelling, komparasi linimasa foto kolonial ke masa kini, dan dialog interaktif Talking Tour untuk melestarikan memori peradaban maritim Kota Donggala.',
  targetSitesList: [
    '1. Menara Suar (1902) - Tanjung Karang, Tanjung Batu',
    '2. Kantor PKKD (1940-an) - Kelurahan Tanjung Batu',
    '3. Gudang PKKD (Gudang Coprafonds Besi Silindris 90m) - Tanjung Batu',
    '4. Kantor PELNI (Eks Kantor & Rumah Dinas KPM 1920-an) - Tanjung Batu',
    '5. Toko Teng Hien (1930-an, Arsip Koran De Gooi 1937) - Boya',
    '6. Pelabuhan Tua (Era Kerajaan Banawa) - Labuan Bajo & Tanjung Batu',
    '7. Gedung Bea dan Cukai (Kantor Douane awal abad 20 / Renovasi 1967) - Boya',
    '8. Chung Hwa School (Sekolah Cina 1924 / Cagar Budaya 2023) - Boya',
    '9. Bioskop Muara (Eks Gudang Kopra Ladudin / Ampera) - Muara Boya',
    '10. Bioskop Megaria (Gembira Theater 1948 / Jl. Bioskop) - Labuan Bajo/Boya',
    '11. Sou Raja (Peninggalan Abad ke-19 Pua Sehang / Cagar Budaya 2024) - Labuan Bajo',
    '12. Rumah Raja Banawa (Kediaman Laparenrengi Lamarauna 1940-an) - Boya',
    '13. Gedung Budi Bhakti (Eks Borsumij / Bom Permesta 1958) - Boya',
    '14. Masjid Raya Donggala (Masjid Tertua Abad ke-18) - Labuan Bajo',
    '15. Kuburan Belanda (Makam Kapten Willem Van Den Berg 1930 / Cagar Budaya 2023) - Gunung Bale',
    '16. Kawasan Kota Donggala (Pola Grid 700m Pantai) - Labuan Bajo & Boya'
  ]
};

export const heritageSites = HERITAGE_SITES;
export const timelineEvents = HISTORICAL_TIMELINE.map((t, idx) => ({
  id: `evt-${idx + 1}`,
  year: t.year,
  era: t.category,
  title: t.title,
  description: t.description,
  image: HERITAGE_SITES[idx % HERITAGE_SITES.length]?.thumbnail
}));
export const quizQuestions = QUIZ_QUESTIONS;
