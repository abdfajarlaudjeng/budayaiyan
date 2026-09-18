export interface VirtualTourMeta {
  siteId: string;
  idTitle: string;
  idGuide: string;
  idTranscript: string;
  kailiTitle?: string;
  kailiGuide?: string;
  kailiTranscript?: string;
}

export type VirtualGuideNarration = VirtualTourMeta;

export const VIRTUAL_GUIDE_DATA: Record<string, VirtualGuideNarration> = {
  'menara-suar-tanjung-karang': {
    siteId: 'menara-suar-tanjung-karang',
    idTitle: 'Menara Suar Tanjung Karang (1902)',
    idGuide: 'Juru Navigasi Selat Makassar & Pos Pantau',
    idTranscript: 'Menara Suar Tanjung Karang dibangun tahun 1902 di atas bukit karang untuk memandu kapal di Selat Makassar menuju Teluk Palu sekaligus memantau bajak laut pada masa Hindia Belanda.',
    kailiTitle: 'Menara Suar Tanjung Karang (1902)',
    kailiGuide: 'Panggaga Navigasi Talaga',
    kailiTranscript: 'Tabe! Menara suar he\'i nitanggu taun 1902 ri bulu karang mamongko sakayana ri Selat Makassar nte mantagi to parompak ri Talaga Palu.'
  },
  'kantor-pkkd-donggala': {
    siteId: 'kantor-pkkd-donggala',
    idTitle: 'Kantor PKKD (1940-an)',
    idGuide: 'Pemandu Sejarah Tata Niaga Kopra Donggala',
    idTranscript: 'Bangunan lantai dua di Tanjung Batu ini merupakan kantor administrasi pergudangan kopra Pusat Koperasi Kopra Daerah hasil nasionalisasi Coprafonds atau Yayasan Kopra.',
    kailiTitle: 'Kantor PKKD Tanjung Batu (1940-an)',
    kailiGuide: 'Panggaga Niaga Kaluku Donggala',
    kailiTranscript: 'Tabe! Banua dua tingkat he\'i ri Tanjung Batu bekas kantor administrasi pergudangan kopra PKKD panggagana manampung kaluku to nitanggu taun 1940-an.'
  },
  'gudang-pkkd-donggala': {
    siteId: 'gudang-pkkd-donggala',
    idTitle: 'Gudang PKKD (Gudang Coprafonds Besi 90m)',
    idGuide: 'Kurator Warisan Industri Maritim Donggala',
    idTranscript: 'Tiga bangunan gudang besi silindris setengah lingkaran sepanjang 90 meter ini menjadi penampung kopra petani dari segenap pelosok Sulawesi Tengah sebelum diekspor ke mancanegara.',
    kailiTitle: 'Gudang Bosi PKKD 90 Meter',
    kailiGuide: 'Kurator Gudang Kaluku Donggala',
    kailiTranscript: 'Tabe! Talu banua gudang bosi silindris 90 meter he\'i nandoo manampung kopra kaluku nggari purapura to Kaili sakoni ninao ka tana mbali.'
  },
  'kantor-pelni-kpm': {
    siteId: 'kantor-pelni-kpm',
    idTitle: 'Kantor PELNI (Eks Kantor & Rumah Dinas KPM 1920-an)',
    idGuide: 'Juru Arsip Pelayaran Nusantara Donggala',
    idTranscript: 'Dibangun dekade 1920-an di Jalan Lamarauna dengan konstruksi beton kolonial dan interior kayu ulin beratap sirap, menjadi Kantor KPM dan PELNI, ditetapkan Cagar Budaya 2024.',
    kailiTitle: 'Banua KPM nte Kantor Pelni (1920-an)',
    kailiGuide: 'Panggaga Sejarah Kapal Donggala',
    kailiTranscript: 'Tabe! Banua beton nte ayu ulin beratap sirap he\'i ri Jalan Lamarauna bekas kantor KPM nte Pelni to resmi nijadi Cagar Budaya Donggala taun 2024.'
  },
  'toko-teng-hien': {
    siteId: 'toko-teng-hien',
    idTitle: 'Toko Teng Hien (1930-an)',
    idGuide: 'Pemandu Jalur Niaga Kota Tua Donggala',
    idTranscript: 'Toko kelontong kongsi dagang Tionghoa 1930-an yang diberitakan di surat kabar Hindia Belanda De Gooi tahun 1937 pasca kebakaran, kini menjadi galeri seni dan komunitas kreatif.',
    kailiTitle: 'Toko Teng Hien (1930-an)',
    kailiGuide: 'Panggaga Kota Tua Donggala',
    kailiTranscript: 'Tabe! Toko Teng Hien he\'i nitanggu taun 1930-an, nosurat ri koran Welanda taun 1937 sababu noapik, tesa he\'i nandoo nijadi galeri seni Donggala.'
  },
  'pelabuhan-tua-donggala': {
    siteId: 'pelabuhan-tua-donggala',
    idTitle: 'Kawasan Pelabuhan Tua Donggala',
    idGuide: 'Pemandu Sejarah Bahari Selat Makassar',
    idTranscript: 'Bentangan perairan niaga dari Labuan Bajo hingga Tanjung Batu sejak era Kerajaan Banawa. Dulunya kapal besar berlabuh di laut dan muatan diantar perahu penyeberangan.',
    kailiTitle: 'Talaga Pelabuhan Ntotua Donggala',
    kailiGuide: 'Pemandu Bahari Banawa',
    kailiTranscript: 'Tabe! Panggagana sakaya ntotua he\'i nggari Labuan Bajo sampe Tanjung Batu zaman Kerajaan Banawa sakoni kapal nambongkar ante perahu penyeberangan.'
  },
  'gedung-bea-dan-cukai': {
    siteId: 'gedung-bea-dan-cukai',
    idTitle: 'Gedung Bea dan Cukai (Kantor Douane)',
    idGuide: 'Pemandu Sejarah Kepabeanan Pelabuhan Donggala',
    idTranscript: 'Awalnya kantor Douane panggung kayu atap sirap di awal abad ke-20, lalu direnovasi total berlantai tiga pada tahun 1967 oleh Bupati Donggala Abdul Azis Lamadjido.',
    kailiTitle: 'Banua Bea Cukai (Kantor Douane)',
    kailiGuide: 'Panggaga Pabean Donggala',
    kailiTranscript: 'Tabe! Kantor Douane he\'i ri awal abad 20 banua panggung kayu sirap, taun 1967 nipabaru jadi tolu tingkat ri zaman Bupati Abdul Azis Lamadjido.'
  },
  'chung-hwa-school': {
    siteId: 'chung-hwa-school',
    idTitle: 'Chung Hwa School (1924)',
    idGuide: 'Pemandu Cagar Budaya Pendidikan Donggala',
    idTranscript: 'Didirikan warga Tionghoa tahun 1924 dengan paduan arsitektur Tionghoa-kolonial. Pernah jadi SMAN Donggala dan Kampus 2 Unismuh, ditetapkan Cagar Budaya tahun 2023.',
    kailiTitle: 'Sikola Cina Chung Hwa (1924)',
    kailiGuide: 'Panggaga Sikola Ntotua Donggala',
    kailiTranscript: 'Tabe! Chung Hwa School nitanggu taun 1924 ante gaya Tionghoa nte Welanda, tesa he\'i resmi nijadi Cagar Budaya Donggala nggari taun 2023.'
  },
  'bioskop-muara': {
    siteId: 'bioskop-muara',
    idTitle: 'Bioskop Muara (Eks Gudang Kopra Ladudin)',
    idGuide: 'Pemandu Sinema Sejarah Donggala',
    idTranscript: 'Gudang kopra pengusaha Ladudin Bungkato di tepi muara Sungai Donggala yang dialihfungsikan menjadi Bioskop Ampera lalu Bioskop Muara yang memutar film hingga 1996.',
    kailiTitle: 'Bioskop Muara ri Vanga Donggala',
    kailiGuide: 'Panggaga Sinema Donggala',
    kailiTranscript: 'Tabe! Gudang kaluku Ladudin Bungkato ri vanga kamba he\'i nijadi Bioskop Ampera nte Bioskop Muara to nomutar pilem sampe taun 1996.'
  },
  'bioskop-megaria': {
    siteId: 'bioskop-megaria',
    idTitle: 'Bioskop Megaria (Gembira Theater 1948)',
    idGuide: 'Pemandu Hiburan Publik Donggala',
    idTranscript: 'Dibangun tahun 1948 di Jalan Bioskop atas tanah Hj. Fatima Hasan dengan nama awal Gembira Theater, berganti nama hingga enam kali sebelum tutup tahun 1994.',
    kailiTitle: 'Bioskop Megaria ri Jalan Bioskop (1948)',
    kailiGuide: 'Panggaga Gembira Theater',
    kailiTranscript: 'Tabe! Gedung he\'i nitanggu taun 1948 ri tana Hj. Fatima Hasan, nosambang sambali aran sampe Megaria sakoni notutup taun 1994.'
  },
  'sou-raja-donggala': {
    siteId: 'sou-raja-donggala',
    idTitle: 'Sou Raja (Rumah Tradisional Pua Sehang)',
    idGuide: 'Pemandu Rumah Tradisional Bugis-Mandar',
    idTranscript: 'Rumah peninggalan saudagar Umar Haruna (Pua Sehang) abad ke-19 berbahan tiang kayu ulin dengan ukiran beranda indah, resmi ditetapkan Cagar Budaya tahun 2024.',
    kailiTitle: 'Sou Raja Banua Pua Sehang (Abad 19)',
    kailiGuide: 'Panggaga Sou Raja Labuan Bajo',
    kailiTranscript: 'Tabe! Banua panggung ulin abad 19 he\'i anu Saudagar Umar Haruna Pua Sehang ante ukiran mabelo, resmi nijadi Cagar Budaya taun 2024.'
  },
  'rumah-raja-banawa': {
    siteId: 'rumah-raja-banawa',
    idTitle: 'Rumah Raja Banawa (1940-an)',
    idGuide: 'Pemandu Kerajaan Banawa Donggala',
    idTranscript: 'Kediaman Raja Banawa Laparenrengi Lamarauna yang berkuasa 1947-1960 di Jalan Pelabuhan bersebelahan bekas Kantor KPN Donggala dengan arsitektur kolonial beton.',
    kailiTitle: 'Banua Magau Banawa Laparenrengi Lamarauna',
    kailiGuide: 'Panggaga Kerajaan Banawa',
    kailiTranscript: 'Tabe! Banua he\'i panggagana Magau Banawa Laparenrengi Lamarauna to nomarentah taun 1947 sampe 1960 ri Jalan Pelabuhan.'
  },
  'gedung-budi-bhakti': {
    siteId: 'gedung-budi-bhakti',
    idTitle: 'Gedung Budi Bhakti (Eks BORSUMIJ / PT PPI)',
    idGuide: 'Pemandu Sejarah Distribusi Niaga Donggala',
    idTranscript: 'Gedung maskapai dagang Belanda BORSUMIJ era 1940-an yang rusak akibat pengeboman pesawat Permesta tahun 1958 lalu direnovasi tahun 1960 menjadi Budi Bhakti.',
    kailiTitle: 'Gedung Budi Bhakti Eks BORSUMIJ',
    kailiGuide: 'Panggaga Niaga Donggala',
    kailiTranscript: 'Tabe! Banua Borsumij he\'i nggari taun 1940-an, noparung akibat nibom pesawat Permesta taun 1958 sakoni nipabaru taun 1960.'
  },
  'masjid-raya-donggala': {
    siteId: 'masjid-raya-donggala',
    idTitle: 'Masjid Raya Donggala (Abad ke-18)',
    idGuide: 'Pemandu Sejarah Syiar Islam Donggala',
    idTranscript: 'Masjid tertua di Kota Donggala berjejak sejak abad ke-18 yang tercatat dalam laporan pelaut William Vaughan mengenai ulama Tuan Hadjee asal Bacan dekat gerbang pelabuhan.',
    kailiTitle: 'Masigi Oge Masigi Ntotua Donggala',
    kailiGuide: 'Panggaga Masigi Ntotua',
    kailiTranscript: 'Tabe! Masigi paling ntotua ri Kota Donggala he\'i nandoo nggari abad 18, nosurat ri catatan William Vaughan tentang Tuan Hadjee nggari Bacan.'
  },
  'kuburan-belanda-gunung-bale': {
    siteId: 'kuburan-belanda-gunung-bale',
    idTitle: 'Kuburan Belanda (Makam Kapten Willem Van Den Berg 1930)',
    idGuide: 'Pemandu Cagar Budaya Makam Kolonial Donggala',
    idTranscript: 'Makam Kapten kapal Belanda Willem Van Den Berg yang wafat di atas kapal pada 30 November 1930 rute Manado-Donggala, ditetapkan Cagar Budaya resmi tahun 2023.',
    kailiTitle: 'Koburu Welanda Jalan Jati Gunung Bale',
    kailiGuide: 'Panggaga Koburu Welanda',
    kailiTranscript: 'Tabe! Koburu he\'i panggagana peristirahatan Kapten Kapal Welanda Willem Van Den Berg to natepu ri kapal 30 November 1930, Cagar Budaya taun 2023.'
  },
  'kawasan-kota-donggala': {
    siteId: 'kawasan-kota-donggala',
    idTitle: 'Kawasan Kota Donggala (Labuan Bajo & Boya)',
    idGuide: 'Pemandu Lanskap Sejarah Kota Tua Banawa',
    idTranscript: 'Kawasan pemukiman bersejarah Labuan Bajo dan Boya berjarak sekitar 700 meter dari garis pantai dengan karakteristik tata ruang berpola jalan kotak-kotak (grid system).',
    kailiTitle: 'Kawasan Kota Ntotua Donggala',
    kailiGuide: 'Pemandu Kota Ntotua Banawa',
    kailiTranscript: 'Tabe! Kawasan pemukiman Labuan Bajo nte Boya 700 meter nggari talaga ante jalan kotak-kotak grid to nosambung ante banua-banua ntotua bersejarah.'
  }
};

export const VIRTUAL_TOUR_EXTRA_DATA = VIRTUAL_GUIDE_DATA;
