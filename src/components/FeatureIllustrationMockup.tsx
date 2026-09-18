import React from 'react';

interface FeatureIllustrationMockupProps {
  className?: string;
  onExploreTour?: () => void;
}

/**
 * FeatureIllustrationMockup:
 * Accurate reproduction of the user's uploaded mockups:
 * 1. ILUSTRASI FITUR 1: White smartphone displaying interactive 360° tour of historic building (TPS / Pos Pelabuhan Donggala)
 *    - Top toggle badge: [FOTO 360°] (Orange active) | VIDEO 360°
 *    - Bottom control pill: [IND | ENG], (?) help, [Document], [Headphones Audio], [Share]
 * 
 * 2. ILUSTRASI FITUR 2: Dual white smartphones displaying:
 *    - Top landscape smartphone: Maritime port panorama of Donggala boats at harbor
 *    - Bottom smartphone: Interactive Historical Time-Slider comparison:
 *      * Left side: "Masa Lampau" (Chung Hoa School historic archive in B&W)
 *      * Right side: "Masa Kini" (Modern heritage structure in lush green surroundings)
 *      * Interactive yellow center slider handle [<->]
 */
export const FeatureIllustrationMockup: React.FC<FeatureIllustrationMockupProps> = ({
  className = '',
  onExploreTour,
}) => {
  return (
    <div className={`relative w-full max-w-md mx-auto flex items-center justify-center select-none ${className}`}>
      
      {/* Ambient background glow matching heritage tones */}
      <div className="absolute w-64 sm:w-72 h-64 sm:h-72 bg-gradient-to-tr from-[#D47A22]/20 via-[#C85A32]/15 to-[#0F4C81]/15 rounded-full blur-3xl -z-10" />

      {/* Main Mockup Composition Area */}
      <div className="relative w-full h-[350px] sm:h-[390px] flex items-center justify-center">

        {/* =========================================================================
            MOCKUP 2 (BACKGROUND / HORIZONTAL COMBO):
            - Top phone: Landscape Maritime Port of Donggala (Perahu & Dermaga)
            - Bottom phone: Time Slider (Masa Lampau - Chung Hoa School vs Masa Kini)
            ========================================================================= */}
        <div 
          className="absolute right-0 sm:right-1 bottom-2 sm:bottom-3 z-10 w-[220px] sm:w-[260px] transform rotate-3 sm:rotate-2 hover:rotate-0 transition-transform duration-500"
          style={{ filter: 'drop-shadow(0 15px 20px rgba(28, 25, 23, 0.2))' }}
        >
          {/* Outer Phone Mockup Frame (White with rounded corners & camera/home dots) */}
          <div className="relative bg-[#E8EBED] rounded-[2rem] p-2 sm:p-2.5 border-2 border-stone-300/80 shadow-xl">
            
            {/* Top Phone Sensor Bar / Notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
              <div className="w-8 h-1 bg-stone-300 rounded-full" />
              <div className="w-1.5 h-1.5 bg-stone-400 rounded-full" />
            </div>

            {/* Landscape Screen (Chung Hoa School Time Slider Frame) */}
            <div className="relative h-[140px] sm:h-[165px] rounded-[1.4rem] overflow-hidden bg-stone-700 border border-stone-400 flex flex-col justify-between">
              
              {/* Split Time Slider View with plain gray backgrounds */}
              <div className="relative w-full h-full flex">
                
                {/* Left Half: Masa Lampau - Plain Gray */}
                <div className="relative w-1/2 h-full bg-stone-600 border-r border-stone-500/50 flex flex-col justify-between p-2">
                  <div />
                  {/* Masa Lampau Badge */}
                  <div className="self-start px-2 py-0.5 rounded bg-stone-800/80 backdrop-blur-xs border border-stone-600 text-[9px] font-medium text-stone-200 shadow-xs">
                    Masa Lampau
                  </div>
                </div>

                {/* Center Yellow Divider Line & Slider Thumb */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-yellow-400 z-20 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-yellow-400 shadow-md flex items-center justify-center text-stone-900 border-2 border-white cursor-pointer hover:scale-110 transition-transform">
                    {/* Double arrow icon */}
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="8 15 5 12 8 9" />
                      <polyline points="16 9 19 12 16 15" />
                    </svg>
                  </div>
                </div>

                {/* Right Half: Masa Kini - Plain Gray */}
                <div className="relative w-1/2 h-full bg-stone-500 flex flex-col justify-between p-2">
                  <div />
                  {/* Masa Kini Badge */}
                  <div className="self-end px-2 py-0.5 rounded bg-stone-800/80 backdrop-blur-xs border border-stone-600 text-[9px] font-medium text-stone-200 shadow-xs">
                    Masa Kini
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Phone Home Button / Indicator */}
            <div className="w-full flex items-center justify-center pt-1.5">
              <div className="w-5 h-5 rounded-full bg-stone-300/80 border border-stone-400/40" />
            </div>

          </div>
        </div>

        {/* =========================================================================
            MOCKUP 1 (FOREGROUND / VERTICAL PHONE):
            - Phone Frame: White Smartphone with high detail
            - Screen: TPS Historic Building (Foto 360° Tour)
            - Top Toggle: [FOTO 360° (Orange)] [VIDEO 360°]
            - Bottom Control Bar: [IND | ENG] (?) [Doc] [Headphones] [Share]
            ========================================================================= */}
        <div 
          className="absolute left-1 sm:left-2 top-1 sm:top-2 z-20 w-[185px] sm:w-[210px] transform -rotate-3 hover:rotate-0 transition-transform duration-500"
          style={{ filter: 'drop-shadow(0 18px 25px rgba(28, 25, 23, 0.28))' }}
        >
          {/* Outer Phone Mockup Frame (White sleek phone) */}
          <div className="relative bg-[#F3F4F6] rounded-[2.2rem] p-2 sm:p-2.5 border-2 border-stone-300 shadow-xl">
            
            {/* Top Ear Speaker Bar */}
            <div className="w-full flex items-center justify-center pb-1.5">
              <div className="w-10 h-1 bg-stone-300 rounded-full" />
            </div>

            {/* Phone Screen Canvas - Plain Gray Screen */}
            <div className="relative h-[280px] sm:h-[315px] rounded-[1.6rem] overflow-hidden bg-stone-600 border border-stone-400 shadow-inner flex flex-col justify-between p-2">
              
              {/* Plain Gray Screen Fill */}
              <div className="absolute inset-0 w-full h-full bg-stone-600" />

              {/* =====================================================
                  TOP TOGGLE PILL: [FOTO 360°] | [VIDEO 360°]
                  Matches exact green-bordered pill from the user's illustration
                  ===================================================== */}
              <div className="relative z-10 pt-0.5 flex justify-center">
                <div className="inline-flex items-center p-0.5 rounded-full bg-[#183628]/95 border-2 border-[#1E4D38] shadow-md backdrop-blur-xs">
                  {/* Foto 360° (Orange Pill Button) */}
                  <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white text-[9px] font-bold shadow-xs tracking-wide">
                    FOTO 360°
                  </span>
                  {/* Video 360° (Clean White Text) */}
                  <span className="px-2.5 py-0.5 text-white/95 text-[9px] font-semibold tracking-wide">
                    VIDEO 360°
                  </span>
                </div>
              </div>

              {/* Center Area: Clean Plain Screen (No objects/hotspots) */}
              <div className="relative z-10 flex-1" />

              {/* =====================================================
                  BOTTOM CONTROLS BAR:
                  [IND | ENG]  (?)  [Doc]  [Headphones]  [Share]
                  Matches exact green pill controls in user's illustration
                  ===================================================== */}
              <div className="relative z-10 pb-0.5 flex justify-center">
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#183628]/95 border border-[#23583E] shadow-lg backdrop-blur-xs">
                  
                  {/* Language Selector Pill */}
                  <div className="flex items-center bg-black/50 rounded-full p-0.5 border border-white/15">
                    <span className="px-1.5 py-0.5 rounded-full bg-[#EA580C] text-white text-[8px] font-bold">
                      IND
                    </span>
                    <span className="px-1 py-0.5 text-white/90 text-[8px] font-semibold">
                      ENG
                    </span>
                  </div>

                  {/* Help (?) Button */}
                  <button className="w-5 h-5 rounded-full border border-yellow-400/80 flex items-center justify-center text-yellow-300 text-[9px] font-bold hover:bg-white/10">
                    ?
                  </button>

                  {/* Document / Article Button */}
                  <button className="w-5 h-5 rounded-full border border-yellow-400/80 flex items-center justify-center text-yellow-300 hover:bg-white/10">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <line x1="10" y1="9" x2="8" y2="9" />
                    </svg>
                  </button>

                  {/* Audio Headphones Button */}
                  <button className="w-5 h-5 rounded-full border border-yellow-400/80 flex items-center justify-center text-yellow-300 hover:bg-white/10">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                    </svg>
                  </button>

                  {/* Share Icon Button */}
                  <button className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#EA580C] to-yellow-500 text-white flex items-center justify-center shadow-xs hover:scale-105">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                  </button>

                </div>
              </div>

            </div>

            {/* Bottom Home Circle */}
            <div className="w-full flex items-center justify-center pt-1.5">
              <div className="w-5 h-5 rounded-full bg-stone-300/80 border border-stone-400/40" />
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
