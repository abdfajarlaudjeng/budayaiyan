import React, { useState, useEffect, useRef, useMemo } from 'react';
import { HeritageSite } from '../types';
import { 
  Landmark, 
  MapPin, 
  Compass, 
  Search, 
  Share2, 
  X, 
  Check, 
  Copy, 
  Navigation, 
  Box, 
  ChevronRight, 
  Menu,
  CheckCircle2,
  Layers,
  Building2,
  Ship,
  Eye,
  History,
  ArrowLeftRight,
  Calendar,
  Camera,
  SlidersHorizontal
} from 'lucide-react';
import { 
  APIProvider, 
  Map as GoogleMap, 
  AdvancedMarker, 
  useMap 
} from '@vis.gl/react-google-maps';
import { useAllVisitCounts, formatVisitCount } from '../utils/visitTracker';

// Google Maps API Key provided via environment variable (or custom key)
const rawApiKey = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined) || 'AIzaSyA_dx42xU3dn3MYtJH9JKrMkWXkzIkcgYw';
const googleMapsApiKey = rawApiKey.startsWith('DEMO:') ? rawApiKey.substring(5) : rawApiKey;

// Clean Google Maps Styles:
// Hides all non-heritage points of interest (commercial stores, restaurants, cafes, businesses, schools,
// non-heritage government agencies, clinics, banks) and transit markers so ONLY the 16 heritage sites stand out.
const cleanMapStyles: google.maps.MapTypeStyle[] = [
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }]
  }
];

// Helper controller component to synchronize camera with selected heritage site
const GoogleMapController: React.FC<{ 
  centerPos: { lat: number; lng: number } | null;
  zoomLevel: number;
  mapTypeId: string;
  cleanView: boolean;
}> = ({ centerPos, zoomLevel, mapTypeId, cleanView }) => {
  const map = useMap('donggala-map');

  useEffect(() => {
    if (map) {
      map.setOptions({
        styles: cleanView ? cleanMapStyles : null,
        clickableIcons: !cleanView,
      });
    }
  }, [map, mapTypeId, cleanView]);

  useEffect(() => {
    if (map && centerPos) {
      map.panTo(centerPos);
      map.setZoom(zoomLevel);
    }
  }, [map, centerPos, zoomLevel]);

  return null;
};

export type HeritageCategoryKey = 'all' | 'situs' | 'kawasan' | 'bangunan_struktur';
export type LanguageKey = 'id' | 'en';

// 3 Kategori Cagar Budaya Indonesia di Donggala dengan Warna Sangat Kontras
// 1. Situs Cagar Budaya: Emas / Kuning Hangat (#d97706)
// 2. Kawasan Cagar Budaya: Hijau Tua / Zamrud (#047857)
// 3. Bangunan & Struktur Cagar Budaya: Biru Maritim Tua (#0f4c81)
export const HERITAGE_CATEGORIES: Record<
  'situs' | 'kawasan' | 'bangunan_struktur',
  {
    id: HeritageCategoryKey;
    labelId: string;
    labelEn: string;
    color: string;
    colorDark: string;
    bgSoft: string;
    border: string;
    iconEmoji: string;
    badgeName: string;
    descId: string;
  }
> = {
  situs: {
    id: 'situs',
    labelId: 'Situs Cagar Budaya',
    labelEn: 'Heritage Sites',
    color: '#d97706',
    colorDark: '#92400e',
    bgSoft: '#fef3c7',
    border: '#b45309',
    iconEmoji: '🏺',
    badgeName: 'Situs',
    descId: 'Lokasi makam bersejarah & peninggalan purbakala tak bergerak (contoh: Kuburan Belanda Kapten Van Den Berg & Situs Religi Abad 18).'
  },
  kawasan: {
    id: 'kawasan',
    labelId: 'Kawasan Cagar Budaya',
    labelEn: 'Heritage Districts',
    color: '#047857',
    colorDark: '#064e3b',
    bgSoft: '#dcfce7',
    border: '#047857',
    iconEmoji: '🗺️',
    badgeName: 'Kawasan',
    descId: 'Satuan ruang geografis sejarah & lanskap pesisir (contoh: Kawasan Pelabuhan Tua & Kawasan Kota Donggala).'
  },
  bangunan_struktur: {
    id: 'bangunan_struktur',
    labelId: 'Bangunan & Struktur Cagar Budaya',
    labelEn: 'Buildings & Structures',
    color: '#0f4c81',
    colorDark: '#0c2b48',
    bgSoft: '#e0f2fe',
    border: '#0f4c81',
    iconEmoji: '🏛️',
    badgeName: 'Bangunan & Struktur',
    descId: 'Susunan binaan fisik arsitektur kolonial & rumah tradisional (contoh: Menara Suar 1902, Kantor PKKD, Sou Raja, Rumah Raja Banawa).'
  }
};

export const getSiteHeritageCategory = (site: HeritageSite): 'situs' | 'kawasan' | 'bangunan_struktur' => {
  // 1. Situs Cagar Budaya (Makam Bersejarah, Situs Religi Tertua, Purbakala)
  if (
    site.id === 'kuburan-belanda-gunung-bale' ||
    site.id === 'masjid-raya-donggala' ||
    site.id.includes('kuburan') ||
    site.id.includes('makam') ||
    site.title.toLowerCase().includes('kuburan') ||
    site.title.toLowerCase().includes('makam') ||
    site.category?.toLowerCase().includes('makam') ||
    site.category?.toLowerCase().includes('arkeologi') ||
    site.category?.toLowerCase().includes('situs')
  ) {
    return 'situs';
  }

  // 2. Kawasan Cagar Budaya (Lanskap Pesisir, Perairan Pelabuhan Sejarah, Ruang Kota Tua)
  if (
    site.id === 'kawasan-kota-donggala' ||
    site.id === 'pelabuhan-tua-donggala' ||
    site.id.includes('kawasan-kota') ||
    site.id.includes('pelabuhan-tua') ||
    site.title.toLowerCase().includes('kawasan kota') ||
    site.title.toLowerCase().includes('pelabuhan tua')
  ) {
    // Exclude individual buildings that might be located in the port area
    if (
      site.id === 'gudang-pkkd-donggala' ||
      site.id === 'kantor-pelni-kpm' ||
      site.id === 'gedung-bea-dan-cukai' ||
      site.id === 'bioskop-muara'
    ) {
      return 'bangunan_struktur';
    }
    return 'kawasan';
  }

  // 3. Bangunan & Struktur Cagar Budaya (Menara Suar, Kantor Kolonial, Gudang, Toko, Sekolah, Bioskop, Rumah Adat)
  return 'bangunan_struktur';
};

// SVG Icon Generator for the 3 Cultural Heritage Categories
export const getHeritageCategorySvg = (
  catKey: 'situs' | 'kawasan' | 'bangunan_struktur',
  iconSize: number = 18,
  strokeColor: string = '#ffffff'
): string => {
  if (catKey === 'situs') {
    // Situs Cagar Budaya: Archaeological Relic / Ancient Stela & Vessel (Emas / Kuning Hangat)
    return `
      <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 3h8" />
        <path d="M9 3v2a3 3 0 0 0 6 0V3" />
        <path d="M6 7h12c1 0 2 1 2 2 0 4.5-2.5 7.5-7.5 8.5V20h3v2H8.5v-2h3v-2.5C6.5 16.5 4 13.5 4 9c0-1 1-2 2-2z" />
        <path d="M4 11c-1 0-2 1-2 2s1 2 2 2" />
        <path d="M20 11c1 0 2 1 2 2s-1 2-2 2" />
      </svg>
    `;
  }
  if (catKey === 'kawasan') {
    // Kawasan Cagar Budaya: Heritage Precinct / Maritime Harbor District Map (Hijau Tua)
    return `
      <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
        <line x1="9" y1="3" x2="9" y2="18" />
        <line x1="15" y1="6" x2="15" y2="21" />
        <circle cx="12" cy="12" r="2.2" fill="${strokeColor}" />
      </svg>
    `;
  }
  // bangunan_struktur: Bangunan & Struktur Cagar Budaya (Biru Maritim Tua)
  return `
    <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="22" x2="21" y2="22" />
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="10" y1="18" x2="10" y2="11" />
      <line x1="14" y1="18" x2="14" y2="11" />
      <line x1="18" y1="18" x2="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
      <line x1="2" y1="7" x2="22" y2="7" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  `;
};

interface InteractiveMapProps {
  sites: HeritageSite[];
  selectedSite?: HeritageSite | null;
  visitedSiteIds?: string[];
  onSelectSite: (site: HeritageSite) => void;
  onOpen360Tour: (site: HeritageSite) => void;
  onOpenTimeSlider?: (site: HeritageSite) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  sites,
  selectedSite,
  visitedSiteIds = [],
  onSelectSite,
  onOpen360Tour,
  onOpenTimeSlider
}) => {
  const visitCounts = useAllVisitCounts();
  const [language, setLanguage] = useState<LanguageKey>('id');
  const [mapTypeId, setMapTypeId] = useState<string>('roadmap');
  const [cleanView, setCleanView] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<HeritageCategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  
  // Explicitly clicked site state: Defaults to NULL so NO popup shows when not clicked!
  const [clickedSite, setClickedSite] = useState<HeritageSite | null>(null);

  // Timeline (Linimasa Komparasi Foto Masa Lampau & Masa Kini)
  const [isTimelineOpen, setIsTimelineOpen] = useState<boolean>(false);
  const [timelineSite, setTimelineSite] = useState<HeritageSite | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const [comparisonMode, setComparisonMode] = useState<'slider' | 'side-by-side'>('slider');
  const [sliderContainerWidth, setSliderContainerWidth] = useState<number>(800);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingSliderRef = useRef<boolean>(false);

  useEffect(() => {
    if (!isTimelineOpen) return;
    const updateWidth = () => {
      if (sliderContainerRef.current) {
        setSliderContainerWidth(sliderContainerRef.current.clientWidth);
      }
    };
    const timer = setTimeout(updateWidth, 50);
    window.addEventListener('resize', updateWidth);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateWidth);
    };
  }, [isTimelineOpen, comparisonMode]);

  const handleSliderPointerDown = () => {
    isDraggingSliderRef.current = true;
  };

  const handleSliderPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingSliderRef.current || !sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleSliderPointerUp = () => {
    isDraggingSliderRef.current = false;
  };

  // Modals
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Camera Pan/Zoom state (centered on Donggala Town & Port)
  const [cameraCenter, setCameraCenter] = useState<{ lat: number; lng: number } | null>({
    lat: -0.6690,
    lng: 119.7415
  });
  const [zoomLevel, setZoomLevel] = useState<number>(15);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter sites by category and search query
  const filteredSites = sites.filter(site => {
    const siteCat = getSiteHeritageCategory(site);
    const matchesCategory = activeCategory === 'all' || siteCat === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      site.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.kelurahan.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.locationDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (site.localName && site.localName.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Dynamic counts for the 3 official Indonesian heritage categories
  const countSitus = useMemo(() => sites.filter(s => getSiteHeritageCategory(s) === 'situs').length, [sites]);
  const countKawasan = useMemo(() => sites.filter(s => getSiteHeritageCategory(s) === 'kawasan').length, [sites]);
  const countBangunan = useMemo(() => sites.filter(s => getSiteHeritageCategory(s) === 'bangunan_struktur').length, [sites]);

  const handleMarkerClick = (site: HeritageSite) => {
    setClickedSite(site);
    onSelectSite(site);
    setCameraCenter({ lat: site.coordinates.lat, lng: site.coordinates.lng });
    setZoomLevel(17);
    setIsSearchOpen(false);
  };

  const handleResetCenter = () => {
    setClickedSite(null);
    setCameraCenter({ lat: -0.6690, lng: 119.7415 });
    setZoomLevel(15);
    setActiveCategory('all');
    setSearchQuery('');
  };

  const handleCopyShareLink = () => {
    const targetSite = clickedSite || sites[0];
    const shareUrl = `${window.location.origin}/?tab=map&site=${targetSite.id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    });
  };

  const activeSiteForInfo = clickedSite || sites[0];
  const activeSiteIndex = clickedSite ? sites.findIndex(s => s.id === clickedSite.id) + 1 : 1;
  const activeSiteCatKey = clickedSite ? getSiteHeritageCategory(clickedSite) : 'bangunan_struktur';
  const activeSiteCatCfg = HERITAGE_CATEGORIES[activeSiteCatKey];

  return (
    <div className="w-full relative select-none">
      
      {/* =========================================================================
          MAIN STAGE CONTAINER: Google Satellite Map with Cultural Border Accent
          ========================================================================= */}
      <div className="relative w-full h-[620px] sm:h-[720px] lg:h-[780px] rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-[6px] border-[#c87d20] bg-stone-900">
        
        {/* =======================================================================
            ORNAMENTAL BORDER ACCENT (Donggala Tenun Motif)
            ======================================================================= */}
        {/* Top Ornate Band */}
        <div className="absolute top-0 left-0 right-0 h-4 z-20 pointer-events-none overflow-hidden bg-[#e08e28] flex items-center justify-center border-b border-[#96540c]/40 shadow-xs">
          <svg className="w-full h-full" preserveAspectRatio="repeat-x" viewBox="0 0 200 16">
            <defs>
              <pattern id="ethnicPatternTop" width="28" height="16" patternUnits="userSpaceOnUse">
                <rect width="28" height="16" fill="#e08e28" />
                <polygon points="14,1 27,8 14,15 1,8" fill="#9e3d1b" stroke="#fce4a6" strokeWidth="0.8" />
                <polygon points="14,3 22,8 14,13 6,8" fill="#1b4332" />
                <circle cx="14" cy="8" r="1.8" fill="#ffd166" />
              </pattern>
            </defs>
            <rect width="100%" height="16" fill="url(#ethnicPatternTop)" />
          </svg>
        </div>

        {/* Bottom Ornate Band */}
        <div className="absolute bottom-0 left-0 right-0 h-4 z-20 pointer-events-none overflow-hidden bg-[#e08e28] flex items-center justify-center border-t border-[#96540c]/40 shadow-xs">
          <svg className="w-full h-full" preserveAspectRatio="repeat-x" viewBox="0 0 200 16">
            <rect width="100%" height="16" fill="url(#ethnicPatternTop)" />
          </svg>
        </div>

        {/* Left Ornate Band */}
        <div className="absolute top-4 bottom-4 left-0 w-3.5 z-20 pointer-events-none overflow-hidden bg-[#e08e28] border-r border-[#96540c]/40">
          <svg className="w-full h-full" preserveAspectRatio="repeat-y" viewBox="0 0 14 200">
            <defs>
              <pattern id="ethnicPatternSide" width="14" height="28" patternUnits="userSpaceOnUse">
                <rect width="14" height="28" fill="#e08e28" />
                <polygon points="1,14 7,1 13,14 7,27" fill="#9e3d1b" stroke="#fce4a6" strokeWidth="0.8" />
                <circle cx="7" cy="14" r="1.5" fill="#ffd166" />
              </pattern>
            </defs>
            <rect width="14" height="100%" fill="url(#ethnicPatternSide)" />
          </svg>
        </div>

        {/* Right Ornate Band */}
        <div className="absolute top-4 bottom-4 right-0 w-3.5 z-20 pointer-events-none overflow-hidden bg-[#e08e28] border-l border-[#96540c]/40">
          <svg className="w-full h-full" preserveAspectRatio="repeat-y" viewBox="0 0 14 200">
            <rect width="14" height="100%" fill="url(#ethnicPatternSide)" />
          </svg>
        </div>

        {/* Four Traditional Golden Corner Badges */}
        <div className="absolute top-0 left-0 w-9 h-9 z-30 pointer-events-none bg-[#9e3d1b] border-r-2 border-b-2 border-[#ffd166] flex items-center justify-center shadow-lg">
          <span className="text-[#ffd166] text-xs font-bold">✦</span>
        </div>
        <div className="absolute top-0 right-0 w-9 h-9 z-30 pointer-events-none bg-[#9e3d1b] border-l-2 border-b-2 border-[#ffd166] flex items-center justify-center shadow-lg">
          <span className="text-[#ffd166] text-xs font-bold">✦</span>
        </div>
        <div className="absolute bottom-0 left-0 w-9 h-9 z-30 pointer-events-none bg-[#9e3d1b] border-r-2 border-t-2 border-[#ffd166] flex items-center justify-center shadow-lg">
          <span className="text-[#ffd166] text-xs font-bold">✦</span>
        </div>
        <div className="absolute bottom-0 right-0 w-9 h-9 z-30 pointer-events-none bg-[#9e3d1b] border-l-2 border-t-2 border-[#ffd166] flex items-center justify-center shadow-lg">
          <span className="text-[#ffd166] text-xs font-bold">✦</span>
        </div>

        {/* =======================================================================
            TOP-LEFT: FLOATING SEARCH BUTTON 🔍 & SHARE BUTTON 🔗
            ======================================================================= */}
        <div className="absolute top-6 left-6 z-30 flex flex-col items-start gap-2.5">
          {/* Top-Left Action Row: Search Button & Expandable Search Bar */}
          <div className="flex items-center gap-2.5">
            {/* Search Button */}
            <button
              id="btn-map-search-toggle"
              onClick={() => setIsSearchOpen(prev => !prev)}
              title="Cari Objek Cagar Budaya"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#fdfbf7]/95 hover:bg-white text-stone-800 border border-stone-300 shadow-xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
            >
              <Search className="w-5 h-5 text-stone-700" />
            </button>

            {/* Expandable Search Input Bar */}
            {isSearchOpen && (
              <div className="relative animate-in fade-in slide-in-from-left-4 duration-200">
                <div className="flex items-center bg-[#fdfbf7] rounded-full border border-stone-300 shadow-2xl pl-4 pr-2 py-1.5 w-64 sm:w-80">
                  <input
                    ref={searchInputRef}
                    type="text"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari situs, kelurahan, tahun..."
                    className="w-full bg-transparent text-xs text-stone-800 placeholder-stone-400 focus:outline-none font-medium"
                  />
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchOpen(false);
                    }}
                    className="p-1 rounded-full hover:bg-stone-200 text-stone-500 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Floating Quick Search Results */}
                {searchQuery.trim() !== '' && (
                  <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 max-h-60 overflow-y-auto bg-white rounded-2xl border border-stone-200 shadow-2xl divide-y divide-stone-100 z-50">
                    {filteredSites.length > 0 ? (
                      filteredSites.map((s) => {
                        const catKey = getSiteHeritageCategory(s);
                        const catCfg = HERITAGE_CATEGORIES[catKey];
                        return (
                          <div
                            key={s.id}
                            onClick={() => handleMarkerClick(s)}
                            className="p-2.5 hover:bg-amber-50/70 transition-colors cursor-pointer flex items-center gap-2.5"
                          >
                            <div 
                              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 shadow-xs border border-white text-white p-1"
                              style={{ backgroundColor: catCfg.color }}
                              dangerouslySetInnerHTML={{ __html: getHeritageCategorySvg(catKey, 14) }}
                            />
                            <div className="flex-1 min-w-0">
                              <h5 className="text-xs font-bold text-stone-900 truncate font-serif-heading">
                                {s.title}
                              </h5>
                              <p className="text-[10px] text-stone-500 truncate">
                                {catCfg.iconEmoji} {s.kelurahan} • Th. {s.establishedYear}
                              </p>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="p-4 text-center text-xs text-stone-500">
                        Tidak ada objek cagar budaya ditemukan.
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Tombol Bagikan Peta Interaktif Satelit (Tepat di bawah tombol pencarian) */}
          <button
            id="btn-map-share"
            onClick={() => setIsShareModalOpen(true)}
            title="Bagikan Peta Interaktif Satelit"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#fdfbf7]/95 hover:bg-white text-stone-800 border border-stone-300 shadow-xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            <Share2 className="w-5 h-5 text-stone-700" />
          </button>
        </div>

        {/* =======================================================================
            TOP-RIGHT: RESET VIEW BUTTON (✕)
            ======================================================================= */}
        <div className="absolute top-6 right-6 z-30">
          <button
            id="btn-map-reset-close"
            onClick={handleResetCenter}
            title="Pusatkan Kembali & Tutup Pilihan"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#fdfbf7]/95 hover:bg-white text-stone-800 border border-stone-300 shadow-xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            <X className="w-5 h-5 text-stone-700" />
          </button>
        </div>

        {/* =======================================================================
            MAP CANVAS: GOOGLE MAPS PLATFORM JAVASCRIPT API (VECTOR & SATELLITE)
            ======================================================================= */}
        <div className="w-full h-full relative z-0">
          <APIProvider apiKey={googleMapsApiKey} region="ID" language="id">
            <GoogleMap
              id="donggala-map"
              mapId="DEMO_MAP_ID"
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              defaultCenter={{ lat: -0.6690, lng: 119.7415 }}
              defaultZoom={15}
              gestureHandling="greedy"
              disableDefaultUI={true}
              clickableIcons={!cleanView}
              styles={cleanView ? cleanMapStyles : undefined}
              mapTypeId={mapTypeId}
              className="w-full h-full"
              style={{ width: '100%', height: '100%' }}
            >
              {/* Synchronized Camera Controller */}
              <GoogleMapController 
                centerPos={cameraCenter}
                zoomLevel={zoomLevel}
                mapTypeId={mapTypeId}
                cleanView={cleanView}
              />

              {/* 16 Heritage Cultural Site Markers with Circular Icon Badges (No Numbers, No Color Text) */}
              {filteredSites.map((siteItem) => {
                const isSelected = clickedSite?.id === siteItem.id;
                const catKey = getSiteHeritageCategory(siteItem);
                const catCfg = HERITAGE_CATEGORIES[catKey];
                const circleSize = isSelected ? 44 : 36;
                const iconSize = isSelected ? 20 : 17;

                return (
                  <AdvancedMarker
                    key={siteItem.id}
                    position={{ lat: siteItem.coordinates.lat, lng: siteItem.coordinates.lng }}
                    onClick={() => handleMarkerClick(siteItem)}
                    title={`${siteItem.title} (${catCfg.labelId})`}
                  >
                    <div className="flex flex-col items-center cursor-pointer select-none group relative">
                      {/* Radiating beacon pulse ring when selected */}
                      {isSelected && (
                        <div 
                          className="absolute -top-1 rounded-full pointer-events-none animate-ping opacity-75"
                          style={{ 
                            width: `${circleSize + 12}px`, 
                            height: `${circleSize + 12}px`, 
                            border: `2.5px solid ${catCfg.color}`,
                            backgroundColor: `${catCfg.color}25`
                          }} 
                        />
                      )}

                      {/* Tooltip on Hover / Selected with Site Name (No Color Annotations or Numbers) */}
                      <div className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold shadow-2xl border pointer-events-none transition-all duration-200 z-50 flex items-center gap-2 ${
                        isSelected
                          ? 'opacity-100 translate-y-0 bg-[#1c1917] text-white border-amber-400 shadow-amber-950/40'
                          : 'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 bg-[#1c1917]/95 text-stone-100 border-stone-600'
                      }`}>
                        <span className="font-serif-heading tracking-wide text-[12px]">{siteItem.title}</span>
                      </div>

                      {/* Circular Shape Containing Heritage Category Icon */}
                      <div 
                        className="relative rounded-full flex items-center justify-center text-white transition-all duration-200 transform group-hover:scale-110 group-active:scale-95"
                        style={{
                          width: `${circleSize}px`,
                          height: `${circleSize}px`,
                          backgroundColor: catCfg.color,
                          border: isSelected ? '2.5px solid #ffffff' : '2px solid #ffffff',
                          boxShadow: isSelected 
                            ? `0 0 0 2.5px ${catCfg.color}, 0 8px 16px rgba(0,0,0,0.45)`
                            : '0 3px 8px rgba(0,0,0,0.35)',
                        }}
                      >
                        <div 
                          className="flex items-center justify-center pointer-events-none text-white"
                          dangerouslySetInnerHTML={{ __html: getHeritageCategorySvg(catKey, iconSize, '#ffffff') }} 
                        />
                      </div>

                      {/* Ground Contact Shadow Anchor */}
                      <div className="w-3 h-1 bg-black/40 rounded-full blur-[0.6px] mt-0.5 pointer-events-none" />
                    </div>
                  </AdvancedMarker>
                );
              })}
            </GoogleMap>
          </APIProvider>
        </div>

        {/* =======================================================================
            BOTTOM-LEFT: MAP VIEW TOGGLE & LANGUAGE TOGGLE
            ======================================================================= */}
        <div className="absolute bottom-6 left-6 z-30 flex flex-wrap items-center gap-2 max-w-[calc(100vw-3rem)]">
          {/* Map View Switcher: Vector Roadmap vs Hybrid/Satellite Imagery */}
          <div className="bg-[#fdfbf7]/95 backdrop-blur-md px-2 py-1.5 rounded-full border border-stone-300 shadow-xl flex items-center gap-1">
            <button
              id="map-type-toggle"
              onClick={() => setMapTypeId(prev => prev === 'roadmap' ? 'hybrid' : 'roadmap')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                mapTypeId === 'hybrid'
                  ? 'bg-[#0f4c81] text-white shadow-xs'
                  : 'bg-[#1c1917] text-white shadow-xs'
              }`}
              title="Beralih ke Citra Satelit / Peta Vektor"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{mapTypeId === 'roadmap' ? 'Peta Jalan' : 'Satelit'}</span>
            </button>
          </div>

          {/* Language Toggle: ID | EN */}
          <div className="bg-[#fdfbf7]/95 backdrop-blur-md px-2 py-1.5 rounded-full border border-stone-300 shadow-xl flex items-center gap-1">
            <button
              id="lang-toggle-id"
              onClick={() => setLanguage('id')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                language === 'id'
                  ? 'bg-[#1c1917] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              ID
            </button>
            <button
              id="lang-toggle-en"
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#1c1917] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* =======================================================================
            BOTTOM-CENTER: 3 OFFICIAL INDONESIAN HERITAGE CATEGORIES FILTER PILL
            [ Semua (16) ] [ 🏺 Situs Cagar Budaya ] [ 🗺️ Kawasan Cagar Budaya ] [ 🏛️ Bangunan & Struktur ]
            ======================================================================= */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 max-w-[94%] sm:max-w-none">
          <div className="bg-[#fdfbf7]/95 backdrop-blur-md p-1.5 sm:p-2 rounded-full border border-stone-300 shadow-2xl flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            
            {/* Filter: Semua (16) */}
            <button
              id="filter-pill-all"
              onClick={() => setActiveCategory('all')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#1c1917] text-white shadow-md'
                  : 'text-stone-700 hover:bg-stone-200/70'
              }`}
            >
              <span>{language === 'en' ? 'All' : 'Semua'}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 text-white font-mono">
                {sites.length}
              </span>
            </button>

            {/* Filter 1: Situs Cagar Budaya (Ikon SVG Situs) */}
            <button
              id="filter-pill-situs"
              onClick={() => setActiveCategory('situs')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'situs'
                  ? 'bg-[#d97706] text-white shadow-md ring-2 ring-amber-300'
                  : 'text-stone-700 hover:bg-stone-200/70'
              }`}
            >
              <span 
                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  activeCategory === 'situs' ? 'bg-white/25 ring-1 ring-white/50' : 'bg-[#d97706] text-white shadow-xs'
                }`}
                dangerouslySetInnerHTML={{ __html: getHeritageCategorySvg('situs', 13, '#ffffff') }} 
              />
              <span>
                {language === 'en' ? HERITAGE_CATEGORIES.situs.labelEn : HERITAGE_CATEGORIES.situs.labelId}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/20 text-white font-mono">
                {countSitus}
              </span>
            </button>

            {/* Filter 2: Kawasan Cagar Budaya (Ikon SVG Kawasan) */}
            <button
              id="filter-pill-kawasan"
              onClick={() => setActiveCategory('kawasan')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'kawasan'
                  ? 'bg-[#047857] text-white shadow-md ring-2 ring-emerald-300'
                  : 'text-stone-700 hover:bg-stone-200/70'
              }`}
            >
              <span 
                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  activeCategory === 'kawasan' ? 'bg-white/25 ring-1 ring-white/50' : 'bg-[#047857] text-white shadow-xs'
                }`}
                dangerouslySetInnerHTML={{ __html: getHeritageCategorySvg('kawasan', 13, '#ffffff') }} 
              />
              <span>
                {language === 'en' ? HERITAGE_CATEGORIES.kawasan.labelEn : HERITAGE_CATEGORIES.kawasan.labelId}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/20 text-white font-mono">
                {countKawasan}
              </span>
            </button>

            {/* Filter 3: Bangunan & Struktur Cagar Budaya (Ikon SVG Bangunan & Struktur) */}
            <button
              id="filter-pill-bangunan-struktur"
              onClick={() => setActiveCategory('bangunan_struktur')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'bangunan_struktur'
                  ? 'bg-[#0f4c81] text-white shadow-md ring-2 ring-sky-300'
                  : 'text-stone-700 hover:bg-stone-200/70'
              }`}
            >
              <span 
                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  activeCategory === 'bangunan_struktur' ? 'bg-white/25 ring-1 ring-white/50' : 'bg-[#0f4c81] text-white shadow-xs'
                }`}
                dangerouslySetInnerHTML={{ __html: getHeritageCategorySvg('bangunan_struktur', 13, '#ffffff') }} 
              />
              <span>
                {language === 'en' ? HERITAGE_CATEGORIES.bangunan_struktur.labelEn : HERITAGE_CATEGORIES.bangunan_struktur.labelId}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/20 text-white font-mono">
                {countBangunan}
              </span>
            </button>

          </div>
        </div>

        {/* =======================================================================
            POP-UP / INSPECTOR CARD: ONLY DISPLAYED WHEN A LOCATION PIN IS CLICKED
            Shows: Nama Objek + Pilihan Tur 360 + Linimasa + Rute
            ======================================================================= */}
        {clickedSite && (
          <div className="absolute top-20 right-6 max-w-sm w-[90%] sm:w-80 bg-[#fdfbf7]/98 backdrop-blur-xl rounded-3xl shadow-2xl p-4 z-30 border border-stone-300 animate-in fade-in slide-in-from-top-4">
            
            {/* Header with Close Button */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span 
                  className="text-[10px] px-2 py-0.5 rounded-full font-bold text-white shadow-xs"
                  style={{ backgroundColor: activeSiteCatCfg.color }}
                >
                  {activeSiteCatCfg.iconEmoji} {activeSiteCatCfg.labelId}
                </span>
                <span className="text-[10px] text-stone-500 font-semibold">
                  Th. {clickedSite.establishedYear}
                </span>
                {visitedSiteIds.includes(clickedSite.id) ? (
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-emerald-600/95 text-white flex items-center gap-1 shadow-xs">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Sudah Dijelajahi</span>
                  </span>
                ) : (
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-stone-200 text-stone-600">
                    Belum Dijelajahi
                  </span>
                )}
                <span className="text-[10px] text-stone-500 flex items-center gap-1 font-medium bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200">
                  <Eye className="w-3 h-3 text-stone-400" />
                  <span>{formatVisitCount(visitCounts[clickedSite.id] || 0)} kunjungan</span>
                </span>
              </div>

              <button
                onClick={() => setClickedSite(null)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-200/60 transition-colors cursor-pointer"
                title="Tutup Kartu Objek"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail + Site Title */}
            <div className="flex items-start gap-3 mt-2.5">
              <div className="relative flex-shrink-0">
                <img
                  src={clickedSite.thumbnail || clickedSite.image}
                  alt={clickedSite.title}
                  className="w-16 h-16 rounded-2xl object-cover border border-stone-200 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div 
                  className="absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-md border border-white p-1"
                  style={{ backgroundColor: activeSiteCatCfg.color }}
                  dangerouslySetInnerHTML={{ __html: getHeritageCategorySvg(activeSiteCatKey, 14) }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-stone-900 font-serif-heading leading-snug">
                  {clickedSite.title}
                </h4>
                <p className="text-[11px] text-stone-500 truncate mt-0.5">
                  {clickedSite.kelurahan}
                </p>
                {clickedSite.localName && (
                  <p className="text-[10px] text-stone-400 italic truncate">
                    "{clickedSite.localName}"
                  </p>
                )}
              </div>
            </div>

            <p className="mt-2.5 text-[11px] text-stone-600 line-clamp-2 leading-relaxed font-light">
              {clickedSite.briefDescription}
            </p>

            {/* 3 Primary Actions: Tur 360°, Linimasa Foto, Rute */}
            <div className="mt-3.5 grid grid-cols-3 gap-1.5">
              {/* 1. Tur 360 */}
              <button
                id="btn-popup-open-360"
                onClick={() => onOpen360Tour(clickedSite)}
                className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-[#c85a32] hover:bg-[#b8502a] text-white font-bold text-[11px] shadow-sm transition-all transform hover:scale-[1.02] cursor-pointer"
                title="Buka Penjelajahan Panorama 360°"
              >
                <Box className="w-3.5 h-3.5 flex-shrink-0 text-amber-200" />
                <span>Tur 360°</span>
              </button>

              {/* 2. Linimasa Foto */}
              <button
                id="btn-popup-open-timeline"
                onClick={() => {
                  setTimelineSite(clickedSite);
                  setSliderPosition(50);
                  setIsTimelineOpen(true);
                }}
                className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white font-bold text-[11px] shadow-sm transition-all transform hover:scale-[1.02] cursor-pointer"
                title="Lihat Perbandingan Foto Masa Lampau & Masa Kini"
              >
                <History className="w-3.5 h-3.5 flex-shrink-0 text-amber-100" />
                <span>Linimasa</span>
              </button>

              {/* 3. Rute */}
              <a
                id="btn-popup-open-route"
                href={`https://www.google.com/maps/dir/?api=1&destination=${clickedSite.coordinates.lat},${clickedSite.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-[#1b4332] hover:bg-[#13382c] text-[#ffd166] font-bold text-[11px] border border-[#ffd166]/40 shadow-sm transition-all transform hover:scale-[1.02] cursor-pointer"
                title="Petunjuk Arah Navigasi Rute Google Maps"
              >
                <Navigation className="w-3.5 h-3.5 flex-shrink-0 text-[#ffd166]" />
                <span>Rute</span>
              </a>
            </div>

          </div>
        )}

      </div>

      {/* =========================================================================
          MODAL 1: SHARE POPUP
          ========================================================================= */}
      {isShareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-[#fdfbf7] rounded-3xl border border-stone-300 shadow-2xl max-w-md w-full p-6 space-y-4 relative">
            <button
              onClick={() => setIsShareModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#c85a32]/10 border border-[#c85a32]/25 flex items-center justify-center text-[#c85a32]">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900 font-serif-heading">
                  Bagikan Peta Interaktif Satelit
                </h3>
                <p className="text-xs text-stone-500 font-light">
                  {activeSiteForInfo.title} • Kota Tua Donggala
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Bagikan tautan jelajah cagar budaya Kota Tua Donggala kepada rekan atau wisatawan:
            </p>

            <div className="flex items-center gap-2 p-2 rounded-2xl bg-white border border-stone-300">
              <input
                type="text"
                readOnly
                value={`${window.location.origin}/?tab=map&site=${activeSiteForInfo.id}`}
                className="w-full text-xs text-stone-700 bg-transparent focus:outline-none font-mono"
              />
              <button
                onClick={handleCopyShareLink}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isCopied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#c85a32] text-white hover:bg-[#b8502a]'
                }`}
              >
                {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{isCopied ? 'Tersalin' : 'Salin'}</span>
              </button>
            </div>

            {isCopied && (
              <div className="text-xs text-emerald-700 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Tautan peta berhasil disalin ke papan klip!</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 3: FITUR LINIMASA (KOMPARASI FOTO MASA LAMPAU VS MASA KINI)
          Menampilkan perbedaan gambar foto masa lampau dan masa kini
          ========================================================================= */}
      {isTimelineOpen && timelineSite && (
        <div 
          onPointerUp={handleSliderPointerUp}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-4xl bg-[#18181b] text-white rounded-3xl border border-stone-700 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-5 sm:px-6 py-4 bg-[#141416] border-b border-stone-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-2xl bg-[#c85a32]/20 border border-[#c85a32]/40 text-[#c85a32] flex-shrink-0">
                  <History className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-lg font-bold text-white font-serif-heading truncate">
                      Linimasa: {timelineSite.title}
                    </h3>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40">
                      Tahun {timelineSite.pastPhoto.year || timelineSite.establishedYear} ⇄ Masa Kini
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 font-light truncate">
                    {timelineSite.kelurahan} • {timelineSite.period}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                {/* View Mode Toggle */}
                <div className="hidden sm:flex items-center bg-stone-800/80 p-1 rounded-xl border border-stone-700 text-xs">
                  <button
                    onClick={() => setComparisonMode('slider')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                      comparisonMode === 'slider'
                        ? 'bg-[#c85a32] text-white'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    Geser Slider
                  </button>
                  <button
                    onClick={() => setComparisonMode('side-by-side')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                      comparisonMode === 'side-by-side'
                        ? 'bg-[#c85a32] text-white'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    Berdampingan
                  </button>
                </div>

                <button
                  onClick={() => setIsTimelineOpen(false)}
                  className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
                  title="Tutup Linimasa"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
              
              {/* Site selector inside modal if visitor wants to inspect other sites */}
              <div className="flex items-center justify-between gap-2 flex-wrap bg-stone-900/90 p-2.5 rounded-2xl border border-stone-800 text-xs">
                <span className="text-stone-400 font-medium flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pilih Objek Cagar Budaya untuk Komparasi Linimasa:</span>
                </span>
                <select
                  value={timelineSite.id}
                  onChange={(e) => {
                    const found = sites.find(s => s.id === e.target.value);
                    if (found) setTimelineSite(found);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-stone-800 text-white text-xs font-semibold border border-stone-700 focus:outline-none focus:border-[#c85a32]"
                >
                  {sites.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.kelurahan.replace('Kelurahan ', '')})
                    </option>
                  ))}
                </select>
              </div>

              {/* Mode 1: Interactive Split Comparison Slider */}
              {comparisonMode === 'slider' ? (
                <div className="space-y-2">
                  <div 
                    ref={sliderContainerRef}
                    onPointerDown={handleSliderPointerDown}
                    onPointerMove={handleSliderPointerMove}
                    className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-stone-700 shadow-2xl bg-black"
                  >
                    {/* Background Layer: Foto Masa Kini */}
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src={timelineSite.currentPhoto.url}
                        alt={`Foto Masa Kini - ${timelineSite.title}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-stone-200 text-xs font-semibold flex items-center gap-1.5 border border-emerald-500/30">
                        <Camera className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Masa Kini: {timelineSite.currentPhoto.conditionStatus}</span>
                      </div>
                    </div>

                    {/* Foreground Layer: Foto Masa Lampau (Clipped by slider position) */}
                    <div 
                      className="absolute inset-0 h-full overflow-hidden border-r-2 border-[#d4af37] shadow-2xl"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <div 
                        className="relative w-full h-full min-w-[300px]" 
                        style={{ width: sliderContainerWidth > 0 ? `${sliderContainerWidth}px` : (sliderContainerRef.current ? `${sliderContainerRef.current.clientWidth}px` : '100%') }}
                      >
                        <img
                          src={timelineSite.pastPhoto.url}
                          alt={`Foto Masa Lampau - ${timelineSite.title}`}
                          className="w-full h-full object-cover filter grayscale contrast-125 sepia-[0.25]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-amber-300 text-xs font-semibold flex items-center gap-1.5 border border-amber-500/40">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          <span>Masa Lampau ({timelineSite.pastPhoto.year || timelineSite.establishedYear})</span>
                        </div>
                      </div>
                    </div>

                    {/* Draggable Divider Handle */}
                    <div 
                      className="absolute top-0 bottom-0 w-1 bg-[#d4af37] pointer-events-none"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#d4af37] border-2 border-[#18181b] shadow-2xl flex items-center justify-center text-stone-900 font-bold">
                        <ArrowLeftRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Helpful drag instruction */}
                  <div className="text-center text-xs text-stone-400 flex items-center justify-center gap-1.5 pt-1">
                    <ArrowLeftRight className="w-3.5 h-3.5 text-amber-400" />
                    <span>Geser garis pembatas ke kiri dan kanan untuk melihat perbedaan foto masa lampau dan masa kini.</span>
                  </div>
                </div>
              ) : (
                /* Mode 2: Side-by-Side Comparison */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Past Photo Card */}
                  <div className="space-y-2">
                    <div className="relative h-[260px] sm:h-[320px] rounded-2xl overflow-hidden border border-amber-500/30 bg-black">
                      <img
                        src={timelineSite.pastPhoto.url}
                        alt={`Foto Masa Lampau - ${timelineSite.title}`}
                        className="w-full h-full object-cover filter grayscale contrast-125 sepia-[0.25]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-xl text-amber-300 text-xs font-bold border border-amber-500/40">
                        Masa Lampau ({timelineSite.pastPhoto.year || timelineSite.establishedYear})
                      </div>
                    </div>
                  </div>

                  {/* Current Photo Card */}
                  <div className="space-y-2">
                    <div className="relative h-[260px] sm:h-[320px] rounded-2xl overflow-hidden border border-emerald-500/30 bg-black">
                      <img
                        src={timelineSite.currentPhoto.url}
                        alt={`Foto Masa Kini - ${timelineSite.title}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-xl text-emerald-300 text-xs font-bold border border-emerald-500/40">
                        Masa Kini (Terkini)
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Informative Comparison Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                
                {/* Past Photo Description */}
                <div className="p-4 rounded-2xl bg-stone-900 border border-amber-500/20 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs font-serif-heading">
                    <Calendar className="w-4 h-4" />
                    <span>Catatan Sejarah Masa Lampau ({timelineSite.pastPhoto.year || timelineSite.establishedYear})</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed font-light">
                    {timelineSite.pastPhoto.caption}
                  </p>
                  <div className="text-[10px] text-stone-400 pt-2 border-t border-stone-800">
                    <span className="font-semibold text-stone-300">Sumber Arsip:</span> {timelineSite.pastPhoto.source}
                  </div>
                </div>

                {/* Present Photo Description */}
                <div className="p-4 rounded-2xl bg-stone-900 border border-emerald-500/20 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs font-serif-heading">
                    <Camera className="w-4 h-4" />
                    <span>Dokumentasi Kondisi Masa Kini</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed font-light">
                    {timelineSite.currentPhoto.caption}
                  </p>
                  <div className="text-[10px] text-stone-400 pt-2 border-t border-stone-800 flex items-center justify-between">
                    <span><span className="font-semibold text-stone-300">Status Kelestarian:</span> {timelineSite.currentPhoto.conditionStatus}</span>
                    <span className="text-emerald-400 font-mono">Terdata 2026</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
