import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * LOGO BPK XVIII - A
 * Kementerian Kebudayaan - Balai Pelestarian Kebudayaan Wilayah XVIII Sulawesi Barat dan Sulawesi Tengah
 * Rekonstruksi presisi 1:1 berbasis aset resmi:
 * - Lambang ornamen budaya keemasan (kiri)
 * - Teks resmi Kementerian Kebudayaan 4 baris (kanan)
 */
export const LogoBPKXVIII: React.FC<LogoProps> = ({ className = 'h-12' }) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 760 210"
        className="h-full w-auto max-h-16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo Balai Pelestarian Kebudayaan Wilayah XVIII"
      >
        <defs>
          <linearGradient id="goldEmblem" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFC386" />
            <stop offset="50%" stopColor="#C99E55" />
            <stop offset="100%" stopColor="#B3873E" />
          </linearGradient>
        </defs>

        {/* Lambang Ornamen Emas Kementerian Kebudayaan */}
        <g transform="translate(6, 4)">
          {/* Mahkota / Pucuk Rebung atas */}
          <path
            d="M96 14 L146 64 L146 95 L132 109 L96 73 L60 109 L46 95 L46 64 Z"
            fill="url(#goldEmblem)"
          />
          {/* Sayap Pelindung Luar Kiri */}
          <path
            d="M6 56 L18 56 L18 106 L36 124 L36 140 L12 116 L6 116 Z"
            fill="#C99E55"
          />
          {/* Sayap Pelindung Luar Kanan */}
          <path
            d="M186 56 L174 56 L174 106 L156 124 L156 140 L180 116 L186 116 Z"
            fill="#C99E55"
          />
          {/* Anyaman Tenun Diagonal 1: Kiri-Atas ke Kanan-Bawah */}
          <path
            d="M60 48 L132 120 L118 134 L46 62 Z"
            fill="#BD9046"
          />
          {/* Anyaman Tenun Diagonal 2: Kanan-Atas ke Kiri-Bawah */}
          <path
            d="M132 48 L60 120 L74 134 L146 62 Z"
            fill="#D5AB63"
          />
          {/* Inti Persilangan Tenun Emas */}
          <path
            d="M96 82 L112 98 L96 114 L80 98 Z"
            fill="#F0D59E"
          />
          <path
            d="M96 36 L116 56 L96 76 L76 56 Z"
            fill="#F0D59E"
          />
          {/* Alas Dasar Tenun / Chevron */}
          <path
            d="M40 144 L96 178 L152 144 L138 130 L96 156 L54 130 Z"
            fill="#BD9046"
          />
          {/* Tetes Mustika / Tumpal Bawah */}
          <path
            d="M96 166 C90 178 80 188 96 200 C112 188 102 178 96 166 Z"
            fill="#C99E55"
          />
        </g>

        {/* Tipografi Resmi Kementerian Kebudayaan */}
        <g transform="translate(225, 0)">
          {/* Baris 1: KEMENTERIAN KEBUDAYAAN */}
          <text
            x="0"
            y="42"
            fill="#FFFFFF"
            fontSize="31"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="500"
            letterSpacing="0.08em"
          >
            KEMENTERIAN KEBUDAYAAN
          </text>

          {/* Baris 2: BALAI PELESTARIAN KEBUDAYAAN */}
          <text
            x="0"
            y="90"
            fill="#FFFFFF"
            fontSize="37"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="800"
            letterSpacing="0.015em"
          >
            BALAI PELESTARIAN KEBUDAYAAN
          </text>

          {/* Baris 3: WILAYAH XVIII */}
          <text
            x="0"
            y="140"
            fill="#FFFFFF"
            fontSize="47"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="900"
            letterSpacing="0.035em"
          >
            WILAYAH XVIII
          </text>

          {/* Baris 4: SULAWESI BARAT DAN SULAWESI TENGAH */}
          <text
            x="0"
            y="182"
            fill="#E5E5E5"
            fontSize="30"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="500"
            letterSpacing="0.06em"
          >
            SULAWESI BARAT DAN SULAWESI TENGAH
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * LOGO FPK (Fasilitasi Pemajuan Kebudayaan)
 * Huruf 3D turquoise "FP" dengan outline hitam tebal,
 * dan huruf 'K' siluet penari dinamis budaya (oranye keemasan, biru, dan putih).
 */
export const LogoFPK: React.FC<LogoProps> = ({ className = 'h-12' }) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 350 200"
        className="h-full w-auto max-h-16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo Fasilitasi Pemajuan Kebudayaan (FPK)"
      >
        <defs>
          {/* Gradasi 3D Cyan / Turquoise Huruf FP */}
          <linearGradient id="fpkCyanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#67E8F9" />
            <stop offset="45%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>

          {/* Gradasi Oranye Keemasan Selendang Penari K */}
          <linearGradient id="fpkOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="50%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Huruf 'F' dengan Outline Hitam Tebal */}
        <path
          d="M 32 45 L 88 45 C 93 45 96 48 96 53 L 96 68 C 96 73 93 76 88 76 L 62 76 L 62 90 L 82 90 C 86 90 89 93 89 97 L 89 111 C 89 115 86 118 82 118 L 62 118 L 62 150 C 62 155 58 158 53 158 L 41 158 C 36 158 32 155 32 150 Z"
          stroke="#000000"
          strokeWidth="16"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="#000000"
        />
        <path
          d="M 32 45 L 88 45 C 93 45 96 48 96 53 L 96 68 C 96 73 93 76 88 76 L 62 76 L 62 90 L 82 90 C 86 90 89 93 89 97 L 89 111 C 89 115 86 118 82 118 L 62 118 L 62 150 C 62 155 58 158 53 158 L 41 158 C 36 158 32 150 Z"
          fill="url(#fpkCyanGrad)"
        />

        {/* Huruf 'P' dengan Outline Hitam Tebal */}
        <path
          d="M 106 45 L 148 45 C 168 45 184 58 184 82 C 184 105 168 118 148 118 L 134 118 L 134 150 C 134 155 130 158 125 158 L 115 158 C 110 158 106 155 106 150 Z"
          stroke="#000000"
          strokeWidth="16"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="#000000"
        />
        <path
          d="M 106 45 L 148 45 C 168 45 184 58 184 82 C 184 105 168 118 148 118 L 134 118 L 134 150 C 134 155 130 158 125 158 L 115 158 C 110 158 106 155 106 150 Z"
          fill="url(#fpkCyanGrad)"
        />
        {/* Lubang Huruf 'P' */}
        <rect
          x="132"
          y="66"
          width="24"
          height="32"
          rx="10"
          fill="#000000"
        />

        {/* Siluet Huruf 'K' / Penari Tradisional Pemajuan Kebudayaan */}
        <g stroke="#000000" strokeWidth="14" strokeLinejoin="round" strokeLinecap="round">
          {/* Selendang / Tangan Atas */}
          <path
            d="M 235 50 C 265 35 295 40 315 50 C 300 62 280 65 260 70 C 280 80 290 92 280 105 C 265 95 250 85 238 90"
            fill="#000000"
          />
          {/* Aksen Pinggang Biru */}
          <path
            d="M 215 95 C 205 110 200 120 208 132 C 220 125 225 115 225 102 Z"
            fill="#000000"
          />
          {/* Gerakan Kaki / Kostum Bawah */}
          <path
            d="M 225 125 C 215 145 220 165 235 178 C 248 175 252 160 250 145 C 260 155 272 168 285 162 C 275 140 260 130 250 120 Z"
            fill="#000000"
          />
        </g>

        {/* Isi Warna Huruf 'K' */}
        {/* Selendang Oranye Emas Atas */}
        <path
          d="M 235 50 C 265 35 295 40 315 50 C 300 62 280 65 260 70 C 280 80 290 92 280 105 C 265 95 250 85 238 90 Z"
          fill="url(#fpkOrangeGrad)"
        />
        {/* Kain Biru */}
        <path
          d="M 215 95 C 205 110 200 120 208 132 C 220 125 225 115 225 102 Z"
          fill="#0284C7"
        />
        {/* Busana Bawah Putih */}
        <path
          d="M 225 125 C 215 145 220 165 235 178 C 248 175 252 160 250 145 C 260 155 272 168 285 162 C 275 140 260 130 250 120 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
};
