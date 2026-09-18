import React, { useState } from 'react';
import { 
  Sparkles, 
  Box, 
  Compass, 
  Volume2, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Navigation,
  RotateCw,
  Eye,
  Layers,
  MessageSquareQuote,
  Maximize2,
  Smartphone,
  Anchor,
  Building2,
  BookOpen,
  Map as MapIcon,
  Target,
  Camera,
  History
} from 'lucide-react';
import { FeatureIllustrationMockup } from './FeatureIllustrationMockup';
import { heritageSites } from '../data/heritageSites';
import { HeritageSite } from '../types';

interface HeroSectionProps {
  onStart360Tour: (site?: HeritageSite) => void;
  onOpenMap: () => void;
  onOpenTantanganPenjelajah: () => void;
  onOpenTimeSlider?: (site: HeritageSite) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStart360Tour,
  onOpenMap,
  onOpenTantanganPenjelajah,
  onOpenTimeSlider
}) => {
  const [activeSiteIdx, setActiveSiteIdx] = useState(0);
  const activeSite = heritageSites[activeSiteIdx] || heritageSites[0];

  return (
    <section className="relative overflow-hidden bg-[#F5F3EF] border-b border-stone-200/80">
      
      {/* Decorative Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C85A32]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0F4C81]/6 rounded-full blur-3xl pointer-events-none" />
      
      {/* Tenun Donggala Top Border Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#C85A32] via-[#D4AF37] to-[#0F4C81]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: Typography, Description & Primary CTA
              ========================================================================= */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#1C1917] font-serif-heading tracking-tight leading-[1.15]">
                DJELAJAH{' '}
                <span className="text-[#C85A32] relative inline-block">
                  DONGGALA
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#D4AF37]/50 rounded-full" />
                </span>
              </h1>
              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed max-w-xl">
                Eksplorasi situs bersejarah Kota Tua Donggala melalui peta interaktif, panorama visual 360 derajat, audio transkripsi sejarah, linimasa serta media pembelajaran budaya lokal
              </p>
            </div>

            {/* Primary Call to Action: Mulai Jelajah */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="btn-hero-start-explore"
                onClick={onOpenMap}
                className="px-8 py-4 rounded-2xl bg-[#C85A32] hover:bg-[#B8502A] text-white font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl shadow-[#C85A32]/25 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <Compass className="w-5 h-5 text-amber-200 transition-transform group-hover:rotate-45" />
                <span>Mulai Jelajah</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
              </button>
            </div>

            {/* Feature Information & Petunjuk Penggunaan Cards */}
            <div className="pt-5 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* 1. Peta Interaktif */}
              <div className="p-3 rounded-2xl bg-white/80 border border-stone-200/90 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#0F4C81] font-bold text-xs font-serif-heading mb-1">
                    <MapIcon className="w-4 h-4 flex-shrink-0 text-[#0F4C81]" />
                    <span>Peta Interaktif</span>
                  </div>
                  <p className="text-[11px] text-stone-600 font-light leading-relaxed">
                    Navigasi 15 titik cagar budaya di peta satelit dengan filter 3 kategori dan petunjuk rute.
                  </p>
                </div>
                <div className="text-[10px] text-[#0F4C81] font-medium pt-1 border-t border-stone-100 flex items-center gap-1">
                  <span className="font-bold">Panduan:</span> Klik titik peta untuk rute
                </div>
              </div>

              {/* 2. Tur 360° & Audio */}
              <div className="p-3 rounded-2xl bg-white/80 border border-stone-200/90 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#C85A32] font-bold text-xs font-serif-heading mb-1">
                    <Compass className="w-4 h-4 flex-shrink-0 text-[#C85A32]" />
                    <span>Tur 360° & Audio</span>
                  </div>
                  <p className="text-[11px] text-stone-600 font-light leading-relaxed">
                    Visual panorama 360° imersif, hotspot detail arsitektur, dan dwibahasa IND - ENG.
                  </p>
                </div>
                <div className="text-[10px] text-[#C85A32] font-medium pt-1 border-t border-stone-100 flex items-center gap-1">
                  <span className="font-bold">Panduan:</span> Akses langsung dari titik peta
                </div>
              </div>

              {/* 3. Linimasa Sejarah */}
              <div className="p-3 rounded-2xl bg-white/80 border border-stone-200/90 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-xs font-serif-heading mb-1">
                    <History className="w-4 h-4 flex-shrink-0 text-amber-700" />
                    <span>Linimasa</span>
                  </div>
                  <p className="text-[11px] text-stone-600 font-light leading-relaxed">
                    Perbandingan visual masa lampau dan masa kini dengan slider interaktif serta kronik sejarah kota.
                  </p>
                </div>
                <div className="text-[10px] text-amber-700 font-medium pt-1 border-t border-stone-100 flex items-center gap-1">
                  <span className="font-bold">Panduan:</span> Geser slider untuk telusuri era
                </div>
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: MOBILE DEVICE MOCKUPS
              Ilustrasi Fitur 1 (Tur 360° TPS Pelabuhan) & Ilustrasi Fitur 2 (Linimasa Chung Hoa School)
              ========================================================================= */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <FeatureIllustrationMockup 
              onExploreTour={() => onStart360Tour(activeSite)}
            />
          </div>

        </div>

      </div>

    </section>
  );
};
