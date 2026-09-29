export interface Tulang { id: string; nama: string; lokasi: string; fungsi: string; emoji: string; x: number; y: number; jenis: string; }
export const TULANG_LIST: Tulang[] = [
  { id: "tengkorak", nama: "Tengkorak", lokasi: "Kepala — melindungi otak", fungsi: "Melindungi otak dan membentuk wajah. Tulang pipih yang kuat.", emoji: "💀", x: 50, y: 11, jenis: "Tulang pipih" },
  { id: "belakang", nama: "Tulang Belakang", lokasi: "Punggung — dari leher sampai pinggang", fungsi: "Menopang tubuh agar bisa berdiri tegak dan melindungi saraf.", emoji: "🦴", x: 50, y: 42, jenis: "Tulang tak beraturan" },
  { id: "rusuk", nama: "Tulang Rusuk", lokasi: "Dada — melengkung seperti sangkar", fungsi: "Melindungi jantung dan paru-paru saat bernapas.", emoji: "🩻", x: 41, y: 30, jenis: "Tulang pipih" },
  { id: "dada", nama: "Tulang Dada", lokasi: "Tengah dada", fungsi: "Tempat menempelnya tulang rusuk, melindungi jantung.", emoji: "🦴", x: 50, y: 29, jenis: "Tulang pipih" },
  { id: "selangka", nama: "Tulang Selangka", lokasi: "Bahu depan, di bawah leher", fungsi: "Menghubungkan lengan ke tubuh dan menjaga bahu tetap kuat.", emoji: "🦴", x: 58, y: 21.5, jenis: "Tulang panjang" },
  { id: "belikat", nama: "Tulang Belikat", lokasi: "Punggung atas, belakang bahu", fungsi: "Tempat menempel otot bahu agar lengan bisa bergerak.", emoji: "🦴", x: 63, y: 24, jenis: "Tulang pipih" },
  { id: "lengan-atas", nama: "Tulang Lengan Atas", lokasi: "Lengan atas, antara bahu dan siku", fungsi: "Membantu mengangkat dan memutar lengan.", emoji: "💪", x: 67, y: 32, jenis: "Tulang panjang" },
  { id: "pengumpil", nama: "Tulang Pengumpil", lokasi: "Lengan bawah kanan, sisi ibu jari", fungsi: "Membantu memutar pergelangan tangan.", emoji: "🦴", x: 69.5, y: 41.5, jenis: "Tulang panjang" },
  { id: "hasta", nama: "Tulang Hasta", lokasi: "Lengan bawah kiri, sisi kelingking", fungsi: "Membantu menekuk dan meluruskan siku.", emoji: "🦴", x: 31.5, y: 41.5, jenis: "Tulang panjang" },
  { id: "panggul", nama: "Tulang Panggul", lokasi: "Pinggul", fungsi: "Menopang tubuh saat duduk dan melindungi organ bawah.", emoji: "🦴", x: 50, y: 52.5, jenis: "Tulang pipih" },
  { id: "paha", nama: "Tulang Paha", lokasi: "Paha — tulang terpanjang & terkuat", fungsi: "Menopang berat tubuh saat berjalan dan berlari.", emoji: "🦵", x: 55.5, y: 64, jenis: "Tulang panjang" },
  { id: "lutut", nama: "Tempurung Lutut", lokasi: "Depan lutut", fungsi: "Melindungi sendi lutut saat menekuk kaki.", emoji: "🦵", x: 55.5, y: 72.5, jenis: "Tulang pendek" },
  { id: "kering", nama: "Tulang Kering", lokasi: "Betis depan kanan", fungsi: "Menopang tubuh dan membantu berjalan.", emoji: "🦵", x: 55.5, y: 83, jenis: "Tulang panjang" },
  { id: "betis", nama: "Tulang Betis", lokasi: "Betis kiri, lebih kecil", fungsi: "Membantu keseimbangan dan gerakan kaki.", emoji: "🦵", x: 44.5, y: 83, jenis: "Tulang panjang" },
];

export const JENIS_TULANG = [
  { id: "panjang", nama: "Tulang Panjang / Pipa", contoh: "Tulang paha, tulang lengan atas", ciri: "Berbentuk panjang seperti pipa, berongga di tengah", emoji: "🦴", warna: "bg-blue-500" },
  { id: "pendek", nama: "Tulang Pendek", contoh: "Tulang pergelangan tangan & kaki", ciri: "Berbentuk kecil dan kotak, kuat menahan beban", emoji: "🧱", warna: "bg-amber-500" },
  { id: "pipih", nama: "Tulang Pipih", contoh: "Tengkorak, tulang rusuk, belikat", ciri: "Berbentuk pipih dan lebar, melindungi organ dalam", emoji: "🛡️", warna: "bg-emerald-500" },
  { id: "tak-beraturan", nama: "Tulang Tak Beraturan", contoh: "Tulang belakang", ciri: "Bentuknya tidak beraturan, lentur tapi kuat", emoji: "🧩", warna: "bg-violet-500" },
];

export const JENIS_SENDI = [
  { id: "engsel", nama: "Sendi Engsel", contoh: "Siku dan lutut", gerak: "Menekuk & meluruskan — seperti pintu (satu arah)", emoji: "🚪", warna: "from-blue-400 to-blue-600", cara: "Coba tekuk lututmu seperti menendang bola ke belakang!" },
  { id: "peluru", nama: "Sendi Peluru", contoh: "Bahu dan panggul", gerak: "Berputar ke semua arah — seperti joystick", emoji: "🕹️", warna: "from-orange-400 to-rose-500", cara: "Putar lenganmu membentuk lingkaran besar!" },
  { id: "putar", nama: "Sendi Putar", contoh: "Leher (tulang atlas & aksis)", gerak: "Memutar — seperti geleng kepala 'tidak'", emoji: "🔄", warna: "from-emerald-400 to-teal-600", cara: "Gelengkan kepalamu ke kiri dan kanan perlahan!" },
  { id: "geser", nama: "Sendi Geser", contoh: "Pergelangan tangan & kaki", gerak: "Bergeser sedikit — lentur untuk gerak halus", emoji: "🧤", warna: "from-violet-400 to-purple-600", cara: "Goyangkan pergelangan tanganmu memutar!" },
];

export const JENIS_OTOT = [
  { id: "rangka", nama: "Otot Rangka", lokasi: "Menempel pada tulang (lengan, kaki)", sifat: "Bekerja sesuai perintah kita (sadar). Contoh: otot bisep saat mengangkat tas.", emoji: "💪", warna: "bg-rose-100 border-rose-300" },
  { id: "polos", nama: "Otot Polos", lokasi: "Organ dalam (lambung, usus)", sifat: "Bekerja sendiri tanpa perintah (tak sadar). Membantu mencerna makanan.", emoji: "🌀", warna: "bg-amber-100 border-amber-300" },
  { id: "jantung", nama: "Otot Jantung", lokasi: "Hanya di jantung", sifat: "Bekerja terus tanpa lelah untuk memompa darah ke seluruh tubuh.", emoji: "❤️", warna: "bg-red-100 border-red-300" },
];

export const GERAKAN = [
  { id: "lari", nama: "Berlari", emoji: "🏃", tulang: "Tulang paha, kering, betis, panggul", sendi: "Sendi peluru (panggul), engsel (lutut)", otot: "Otot paha & betis berkontraksi bergantian", proses: "Kaki menekuk di lutut lalu melurus kuat untuk mendorong tubuh ke depan. Lengan mengayun menjaga keseimbangan." },
  { id: "lompat", nama: "Melompat", emoji: "🦘", tulang: "Tulang kaki, tulang belakang", sendi: "Sendi lutut (engsel) & pergelangan (geser)", otot: "Otot betis & paha berkontraksi kuat", proses: "Lutut menekuk menyimpan tenaga, lalu otot kaki mendorong tubuh ke atas. Tangan membantu keseimbangan." },
  { id: "tendang", nama: "Menendang", emoji: "⚽", tulang: "Tulang paha, kering, panggul", sendi: "Sendi panggul (peluru) & lutut (engsel)", otot: "Otot paha depan berkontraksi menendang", proses: "Paha diayun dari panggul, lutut melurus cepat, kaki menyentuh bola. Otot paha bekerja paling kuat!" },
  { id: "tulis", nama: "Menulis", emoji: "✍️", tulang: "Tulang jari, pengumpil, hasta", sendi: "Sendi geser (pergelangan) & jari", otot: "Otot kecil jari & lengan bawah", proses: "Otot jari mengatur pensil dengan halus. Sendi pergelangan bergeser sedikit agar tulisan rapi." },
  { id: "angkat", nama: "Mengangkat Benda", emoji: "🏋️", tulang: "Tulang lengan atas, belakang, kaki", sendi: "Sendi siku (engsel) & bahu (peluru)", otot: "Bisep berkontraksi, otot punggung & kaki membantu", proses: "Bisep menarik lengan bawah ke atas. Lutut ditekuk agar punggung aman. Ingat: angkat dengan kaki, bukan punggung!" },
  { id: "jalan", nama: "Berjalan", emoji: "🚶", tulang: "Tulang kaki & tulang belakang", sendi: "Lutut, panggul, pergelangan kaki", otot: "Otot kaki kiri-kanan bergantian", proses: "Kaki melangkah bergantian: satu menapak, satu mengayun. Tulang belakang menjaga tubuh tetap tegak." },
];

export interface Penyakit { id: string; nama: string; emoji: string; penjelasan: string; bagian: string; faktor: string; jaga: string; warna: string; quiz: { q: string; options: string[]; answer: number; explain: string }; }
export const PENYAKIT: Penyakit[] = [
  { id: "osteoporosis", nama: "Osteoporosis", emoji: "🦴", warna: "bg-amber-100", penjelasan: "Tulang menjadi keropos dan lebih mudah patah. Ibarat spons yang berlubang — tulang sehat itu padat dan kuat!", bagian: "Seluruh tulang, terutama punggung, pinggul, dan pergelangan", faktor: "Kurang kalsium, kurang vitamin D, jarang bergerak, kurang olahraga", jaga: "Minum susu, makan ikan & sayur hijau, berjemur pagi, rajin olahraga", quiz: { q: "Mengapa tulang yang terkena osteoporosis mudah patah?", options: ["Karena tulang menjadi keropos dan tidak padat", "Karena otot terlalu kuat", "Karena sendi terlalu lentur", "Karena tubuh terlalu tinggi"], answer: 0, explain: "Osteoporosis membuat tulang keropos seperti spons sehingga mudah patah. Kalsium & olahraga menjaganya padat!" } },
  { id: "rakitis", nama: "Rakitis", emoji: "☀️", warna: "bg-yellow-100", penjelasan: "Gangguan pertumbuhan tulang pada anak karena kekurangan vitamin D dan mineral. Kaki bisa berbentuk O atau X.", bagian: "Tulang kaki dan tulang yang sedang tumbuh", faktor: "Kurang vitamin D (sinar matahari pagi), kurang kalsium", jaga: "Berjemur pagi 10-15 menit, makan bergizi, minum susu", quiz: { q: "Rakitis berkaitan dengan kekurangan apa?", options: ["Vitamin D dan mineral untuk tulang", "Air putih", "Gula", "Garam"], answer: 0, explain: "Vitamin D dari sinar matahari membantu tulang menyerap kalsium agar tumbuh kuat." } },
  { id: "skoliosis", nama: "Skoliosis", emoji: "〰️", warna: "bg-teal-100", penjelasan: "Tulang belakang melengkung ke samping seperti huruf S atau C, seharusnya lurus dari belakang.", bagian: "Tulang belakang", faktor: "Postur duduk yang kurang baik, membawa tas terlalu berat sebelah", jaga: "Duduk tegak, tas seimbang di dua bahu, olahraga peregangan", quiz: { q: "Perhatikan bentuk tulang belakang melengkung ke samping seperti huruf S. Gangguan apa ini?", options: ["Skoliosis", "Fraktur", "Osteoporosis", "Keseleo"], answer: 0, explain: "Skoliosis = tulang belakang melengkung ke samping. Duduk tegak membantu mencegahnya." } },
  { id: "kifosis", nama: "Kifosis", emoji: "🐫", warna: "bg-orange-100", penjelasan: "Punggung atas terlalu membungkuk ke belakang seperti punuk. Dada terlihat masuk ke dalam.", bagian: "Tulang belakang bagian atas (punggung)", faktor: "Kebiasaan membungkuk saat duduk/belajar, postur kurang tegak", jaga: "Duduk tegak, dada dibuka, rajin peregangan punggung", quiz: { q: "Kifosis adalah gangguan pada...", options: ["Punggung atas yang terlalu membungkuk", "Lutut yang bengkak", "Jari yang kaku", "Leher yang tegang"], answer: 0, explain: "Kifosis membuat punggung atas membungkuk. Biasakan duduk tegak saat belajar!" } },
  { id: "lordosis", nama: "Lordosis", emoji: "↩️", warna: "bg-pink-100", penjelasan: "Pinggang melengkung terlalu ke depan. Perut terlihat menonjol dan punggung bawah cekung.", bagian: "Tulang belakang bagian pinggang", faktor: "Postur berdiri kurang baik, otot perut lemah", jaga: "Berdiri tegak, kuatkan otot perut dengan olahraga", quiz: { q: "Lordosis terjadi pada bagian...", options: ["Pinggang yang melengkung terlalu ke depan", "Siku yang terkilir", "Bahu yang nyeri", "Kaki yang keseleo"], answer: 0, explain: "Lordosis = lengkung pinggang berlebihan ke depan. Olahraga & postur baik menjaganya." } },
  { id: "fraktur", nama: "Fraktur / Patah Tulang", emoji: "🩹", warna: "bg-red-100", penjelasan: "Tulang retak atau patah karena jatuh, benturan keras, atau kecelakaan. Biasanya dibalut gips agar tersambung lagi.", bagian: "Tulang mana saja, sering lengan & kaki", faktor: "Jatuh, benturan keras, tidak memakai pelindung saat olahraga", jaga: "Berhati-hati saat bermain, pakai helm & pelindung, tidak berlari di tempat licin", quiz: { q: "Apa tindakan tepat saat teman terjatuh dan diduga patah tulang?", options: ["Minta bantuan guru/orang dewasa, jangan digerakkan sembarangan", "Menarik tangannya agar lurus", "Memijatnya dengan keras", "Membiarkannya saja"], answer: 0, explain: "Jangan menggerakkan bagian yang patah sembarangan. Segera minta bantuan guru & tenaga kesehatan!" } },
  { id: "keseleo", nama: "Keseleo / Terkilir", emoji: "🦶", warna: "bg-blue-100", penjelasan: "Ligamen (pengikat sendi) tertarik atau robek karena gerakan tiba-tiba. Sendi jadi bengkak dan nyeri.", bagian: "Pergelangan kaki, lutut, pergelangan tangan", faktor: "Olahraga tanpa pemanasan, terpeleset, gerakan mendadak", jaga: "Pemanasan sebelum olahraga, pakai sepatu yang pas, hati-hati berlari", quiz: { q: "Keseleo adalah cedera pada...", options: ["Ligamen di sekitar sendi", "Otot jantung", "Tulang tengkorak", "Gigi"], answer: 0, explain: "Keseleo = ligamen tertarik. Istirahatkan, kompres, dan beri tahu orang tua/guru." } },
  { id: "artritis", nama: "Artritis", emoji: "🤲", warna: "bg-violet-100", penjelasan: "Sendi mengalami peradangan sehingga terasa nyeri, kaku, atau bengkak. Gerakan jadi sulit.", bagian: "Sendi (lutut, jari, bahu)", faktor: "Kurang bergerak, pola hidup kurang sehat", jaga: "Tetap aktif bergerak, olahraga ringan, makan bergizi", quiz: { q: "Artritis berkaitan dengan...", options: ["Peradangan pada sendi yang nyeri/kaku", "Tulang yang memanjang", "Otot yang membesar", "Kulit yang gatal"], answer: 0, explain: "Artritis menyerang sendi. Bergerak aktif & hidup sehat menjaga sendi lentur." } },
  { id: "cedera-otot", nama: "Cedera Otot", emoji: "💪", warna: "bg-rose-100", penjelasan: "Otot tegang, tertarik, atau kram karena aktivitas berlebihan atau tanpa pemanasan.", bagian: "Otot lengan, kaki, punggung", faktor: "Olahraga berlebihan, tidak pemanasan & pendinginan", jaga: "Pemanasan dulu, istirahat cukup, jangan memaksakan diri", quiz: { q: "Agar otot tidak cedera saat olahraga, kita harus...", options: ["Pemanasan dulu & tidak berlebihan", "Langsung lari kencang", "Tidak minum air", "Olahraga sampai pingsan"], answer: 0, explain: "Pemanasan menyiapkan otot. Dengarkan tubuhmu — istirahat jika lelah!" } },
];

export const KESEHATAN = [
  { t: "Berolahraga rutin", d: "Minimal 30 menit setiap hari — lari, bersepeda, berenang", e: "🏃" },
  { t: "Aktif bergerak", d: "Kurangi duduk diam terlalu lama, ayo main di luar!", e: "🤸" },
  { t: "Makanan bergizi", d: "Nasi, lauk, sayur, buah — isi piringku seimbang", e: "🍱" },
  { t: "Cukup kalsium", d: "Susu, ikan teri, tahu, bayam membuat tulang kuat", e: "🥛" },
  { t: "Vitamin D cukup", d: "Berjemur matahari pagi 10–15 menit", e: "☀️" },
  { t: "Protein cukup", d: "Telur, ayam, ikan, tempe untuk otot kuat", e: "🍳" },
  { t: "Jaga postur", d: "Duduk & berdiri tegak, tas seimbang", e: "🧍" },
  { t: "Hati-hati beraktivitas", d: "Tidak berlari di lantai licin, lihat sekitar", e: "⚠️" },
  { t: "Pakai pelindung", d: "Helm, pelindung lutut & siku saat bersepeda", e: "🪖" },
  { t: "Istirahat cukup", d: "Tidur 9–11 jam agar tulang & otot pulih", e: "😴" },
  { t: "Tidak berlebihan", d: "Olahraga sesuai kemampuan, istirahat jika lelah", e: "🧘" },
];

export const GLOSARIUM: { istilah: string; arti: string; emoji: string }[] = [
  { istilah: "Sistem gerak", arti: "Kerja sama tulang, sendi, dan otot sehingga tubuh bisa bergerak.", emoji: "🏃" },
  { istilah: "Tulang", arti: "Jaringan keras yang menyusun rangka; pemberi bentuk dan pelindung organ tubuh.", emoji: "🦴" },
  { istilah: "Rangka", arti: "Susunan tulang-tulang yang membentuk tubuh manusia (206 tulang pada orang dewasa).", emoji: "🩻" },
  { istilah: "Sendi", arti: "Tempat bertemunya dua tulang yang memungkinkan gerakan.", emoji: "🔗" },
  { istilah: "Otot", arti: "Jaringan tubuh yang dapat berkontraksi (memendek) untuk menarik tulang.", emoji: "💪" },
  { istilah: "Kontraksi", arti: "Keadaan otot memendek dan menegang saat bekerja menarik tulang.", emoji: "💥" },
  { istilah: "Relaksasi", arti: "Keadaan otot kembali memanjang dan lemas setelah berkontraksi.", emoji: "😌" },
  { istilah: "Ligamen", arti: "Jaringan kuat yang mengikat tulang dengan tulang di sekitar sendi.", emoji: "🪢" },
  { istilah: "Fraktur", arti: "Tulang yang retak atau patah akibat cedera atau benturan.", emoji: "🩹" },
  { istilah: "Osteoporosis", arti: "Kondisi tulang keropos sehingga mudah patah.", emoji: "🧽" },
  { istilah: "Rakitis", arti: "Gangguan pertumbuhan tulang anak karena kurang vitamin D dan mineral.", emoji: "☀️" },
  { istilah: "Skoliosis", arti: "Tulang belakang melengkung ke samping secara tidak normal.", emoji: "〰️" },
  { istilah: "Kifosis", arti: "Punggung atas terlalu membungkuk ke belakang.", emoji: "🐫" },
  { istilah: "Lordosis", arti: "Pinggang melengkung terlalu ke depan.", emoji: "↩️" },
  { istilah: "Artritis", arti: "Peradangan sendi yang menyebabkan nyeri atau kaku.", emoji: "🤲" },
  { istilah: "Postur", arti: "Posisi tubuh saat duduk, berdiri, atau bergerak.", emoji: "🧍" },
  { istilah: "Kalsium", arti: "Mineral penting untuk tulang dan gigi yang kuat (dari susu, ikan, sayur).", emoji: "🥛" },
  { istilah: "Bisep", arti: "Otot lengan depan yang berkontraksi saat menekuk siku.", emoji: "💪" },
  { istilah: "Trisep", arti: "Otot lengan belakang yang berkontraksi saat meluruskan siku.", emoji: "🦾" },
  { istilah: "Tendon", arti: "Jaringan yang menghubungkan otot ke tulang.", emoji: "🔗" },
];

export interface Q { id: string; cat: string; type: "pg" | "tf"; q: string; emoji?: string; options: string[]; answer: number; explain: string; }

/* Menempatkan kunci jawaban di posisi acak (A/B/C/D) agar siswa tidak menebak pola.
   Dilakukan sekali saat aplikasi dimuat; teks jawaban tetap sama, hanya urutannya berubah. */
export function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface ChoiceItem { options: string[]; answer: number }

export function randomizeChoices<T extends ChoiceItem>(item: T): T {
  const correct = item.options[item.answer];
  const opts = shuffleArray(item.options);
  item.options = opts;
  item.answer = correct === undefined ? 0 : Math.max(0, opts.indexOf(correct));
  return item;
}

function randomizeAll(lists: ChoiceItem[][]) {
  lists.forEach(list => list.forEach(randomizeChoices));
}

export const LATIHAN_L1: Q[] = [
  { id: "l1-1", cat: "Sistem Gerak", type: "pg", q: "Sistem gerak manusia tersusun atas kerja sama...", emoji: "🧠", options: ["Tulang, sendi, dan otot", "Jantung, paru-paru, dan ginjal", "Mata, telinga, dan hidung", "Kulit, rambut, dan kuku"], answer: 0, explain: "Hebat! Tulang, sendi, dan otot bekerja sama agar kita bisa bergerak." },
  { id: "l1-2", cat: "Tulang", type: "pg", q: "Fungsi tulang bagi tubuh adalah...", emoji: "🦴", options: ["Memberi bentuk tubuh & melindungi organ", "Memompa darah", "Mencerna makanan", "Melihat benda"], answer: 0, explain: "Tulang memberi bentuk tubuh dan melindungi organ seperti otak dan jantung." },
  { id: "l1-3", cat: "Sendi", type: "pg", q: "Sendi adalah...", emoji: "🔗", options: ["Tempat bertemunya tulang yang memungkinkan gerakan", "Otot yang besar", "Tulang yang panjang", "Organ pencernaan"], answer: 0, explain: "Sendi menghubungkan tulang agar bisa bergerak, misalnya siku dan lutut." },
  { id: "l1-4", cat: "Otot", type: "pg", q: "Otot rangka berfungsi untuk...", emoji: "💪", options: ["Membantu gerakan tubuh", "Mengalirkan darah", "Mencerna makanan", "Menghasilkan hormon"], answer: 0, explain: "Otot rangka berkontraksi dan menarik tulang sehingga tubuh dapat bergerak." },
  { id: "l1-5", cat: "Rangka", type: "pg", q: "Tulang yang melindungi otak adalah...", emoji: "💀", options: ["Tengkorak", "Tulang paha", "Tulang kering", "Tulang rusuk"], answer: 0, explain: "Tengkorak melindungi otak seperti helm alami tubuh kita." },
  { id: "l1-6", cat: "Rangka", type: "pg", q: "Tulang terpanjang dan terkuat di tubuh adalah...", emoji: "🦵", options: ["Tulang paha", "Tulang jari", "Tulang rusuk", "Tulang selangka"], answer: 0, explain: "Tulang paha menopang berat tubuh saat berjalan dan berlari." },
  { id: "l1-7", cat: "Sendi", type: "pg", q: "Contoh sendi engsel adalah...", emoji: "🚪", options: ["Siku dan lutut", "Bahu dan panggul", "Leher", "Pergelangan tangan"], answer: 0, explain: "Siku dan lutut hanya menekuk satu arah seperti pintu — itu sendi engsel." },
  { id: "l1-8", cat: "Otot", type: "tf", q: "Otot bisep berada di lengan depan dan bekerja saat menekuk siku. (Benar / Salah)", emoji: "💪", options: ["Benar", "Salah"], answer: 0, explain: "Benar! Bisep berkontraksi saat kamu menekuk lengan, misalnya mengangkat tas." },
  { id: "l1-9", cat: "Kesehatan", type: "pg", q: "Agar tulang kuat, kita perlu...", emoji: "🥛", options: ["Minum susu & berolahraga", "Begadang setiap malam", "Duduk membungkuk", "Jarang bergerak"], answer: 0, explain: "Susu kaya kalsium dan olahraga membuat tulang padat dan kuat." },
  { id: "l1-10", cat: "Gerakan", type: "pg", q: "Urutan terjadinya gerakan yang benar adalah...", emoji: "🏃", options: ["Otot berkontraksi → menarik tulang → tulang bergerak pada sendi", "Tulang bergerak sendiri tanpa otot", "Sendi bergerak tanpa tulang", "Otot diam lalu tulang bergerak"], answer: 0, explain: "Otot berkontraksi menarik tulang, tulang bergerak pada sendi — terjadilah gerakan!" },
];

export const LATIHAN_L2: Q[] = [
  { id: "l2-1", cat: "Jenis Tulang", type: "pg", q: "Tulang paha dan tulang lengan atas termasuk...", emoji: "🦴", options: ["Tulang panjang/pipa", "Tulang pendek", "Tulang pipih", "Tulang tak beraturan"], answer: 0, explain: "Tulang panjang berbentuk seperti pipa — contohnya tulang paha." },
  { id: "l2-2", cat: "Jenis Tulang", type: "pg", q: "Tulang tengkorak dan tulang rusuk termasuk...", emoji: "🛡️", options: ["Tulang pipih", "Tulang panjang", "Tulang pendek", "Tulang pipa"], answer: 0, explain: "Tulang pipih berbentuk lebar dan melindungi organ dalam." },
  { id: "l2-3", cat: "Jenis Sendi", type: "pg", q: "Sendi bahu termasuk sendi...", emoji: "🕹️", options: ["Peluru — bergerak ke semua arah", "Engsel — satu arah", "Geser — bergeser sedikit", "Mati — tidak bergerak"], answer: 0, explain: "Bahu bisa berputar ke semua arah seperti joystick — sendi peluru!" },
  { id: "l2-4", cat: "Jenis Sendi", type: "pg", q: "Saat menggelengkan kepala 'tidak', sendi yang bekerja adalah...", emoji: "🔄", options: ["Sendi putar di leher", "Sendi engsel di siku", "Sendi peluru di bahu", "Sendi geser di kaki"], answer: 0, explain: "Leher memiliki sendi putar sehingga kepala bisa menoleh dan menggeleng." },
  { id: "l2-5", cat: "Otot", type: "pg", q: "Saat meluruskan lengan, otot yang berkontraksi adalah...", emoji: "🦾", options: ["Trisep", "Bisep", "Otot jantung", "Otot polos"], answer: 0, explain: "Trisep di belakang lengan berkontraksi saat meluruskan siku. Bisep dan trisep bekerja bergantian!" },
  { id: "l2-6", cat: "Otot", type: "pg", q: "Otot jantung berbeda dari otot rangka karena...", emoji: "❤️", options: ["Bekerja terus tanpa perintah & tidak lelah", "Menempel pada tulang", "Bisa kita kendalikan", "Hanya ada di lengan"], answer: 0, explain: "Otot jantung memompa darah terus-menerus tanpa kita perintah." },
  { id: "l2-7", cat: "Gerakan", type: "pg", q: "Saat menendang bola, sendi yang paling berperan adalah...", emoji: "⚽", options: ["Panggul & lutut", "Siku & bahu", "Leher & jari", "Pergelangan tangan"], answer: 0, explain: "Paha diayun dari panggul, lutut melurus — tendangan terjadi!" },
  { id: "l2-8", cat: "Gangguan", type: "pg", q: "Tulang belakang melengkung ke samping seperti huruf S disebut...", emoji: "〰️", options: ["Skoliosis", "Kifosis", "Lordosis", "Fraktur"], answer: 0, explain: "Skoliosis = lengkung ke samping. Duduk tegak membantu mencegahnya." },
  { id: "l2-9", cat: "Gangguan", type: "tf", q: "Osteoporosis membuat tulang keropos dan mudah patah. (Benar / Salah)", emoji: "🧽", options: ["Benar", "Salah"], answer: 0, explain: "Benar! Tulang keropos seperti spons. Cegah dengan kalsium & olahraga." },
  { id: "l2-10", cat: "Kesehatan", type: "pg", q: "Vitamin D yang baik untuk tulang didapat dari...", emoji: "☀️", options: ["Sinar matahari pagi", "Permen", "Minuman bersoda", "Begadang"], answer: 0, explain: "Berjemur pagi 10–15 menit membantu tulang menyerap kalsium." },
];

export const LATIHAN_L3: Q[] = [
  { id: "l3-1", cat: "Analisis", type: "pg", q: "Raka mengangkat ember air. Kerja sama yang terjadi adalah...", emoji: "🏋️", options: ["Bisep berkontraksi → menarik tulang lengan → siku menekuk", "Tulang bergerak sendiri", "Trisep rileks lalu tulang patah", "Sendi bekerja tanpa otot"], answer: 0, explain: "Bisep berkontraksi menarik tulang lengan bawah, siku menekuk mengangkat ember." },
  { id: "l3-2", cat: "Jenis Tulang", type: "pg", q: "Tulang belakang termasuk tulang tak beraturan karena...", emoji: "🧩", options: ["Bentuknya khas tidak beraturan & tersusun beruas", "Bentuknya panjang seperti pipa", "Bentuknya pipih lebar", "Bentuknya kecil kotak"], answer: 0, explain: "Tulang belakang tersusun dari ruas-ruas berbentuk khas — tak beraturan." },
  { id: "l3-3", cat: "Sendi", type: "pg", q: "Perhatikan tabel: Siku–satu arah | Bahu–semua arah | Pergelangan–bergeser. Pasangan yang benar...", emoji: "📊", options: ["Engsel–Peluru–Geser", "Peluru–Engsel–Putar", "Geser–Geser–Engsel", "Putar–Geser–Peluru"], answer: 0, explain: "Siku=engsel, bahu=peluru, pergelangan=geser. Hafalkan dengan gerakan tubuhmu!" },
  { id: "l3-4", cat: "Kasus", type: "pg", q: "Siti sering duduk membungkuk saat belajar. Risiko gangguannya...", emoji: "🧍", options: ["Kifosis / skoliosis — postur tulang belakang berubah", "Fraktur lengan", "Keseleo kaki", "Cedera otot jantung"], answer: 0, explain: "Duduk membungkuk terus-menerus memengaruhi kelengkungan tulang belakang." },
  { id: "l3-5", cat: "Kasus", type: "pg", q: "Beni jatuh dari sepeda dan lengannya bengkak. Tindakan tepat...", emoji: "🚲", options: ["Beri tahu guru/orang tua & minta bantuan tenaga kesehatan", "Dipijat keras-keras", "Dibiarkan main lagi", "Ditarik agar lurus"], answer: 0, explain: "Cedera serius harus ditangani orang dewasa & tenaga kesehatan. Jangan digerakkan sembarangan!" },
  { id: "l3-6", cat: "Otot", type: "pg", q: "Mengapa bisep dan trisep disebut otot antagonis (berlawanan)?", emoji: "💪", options: ["Karena bekerja bergantian: satu kontraksi, satu relaksasi", "Karena letaknya sama", "Karena tidak pernah bekerja", "Karena hanya ada satu"], answer: 0, explain: "Saat menekuk: bisep kontraksi, trisep relaksasi. Saat meluruskan: sebaliknya!" },
  { id: "l3-7", cat: "Gangguan", type: "pg", q: "Anak kurang vitamin D berisiko mengalami...", emoji: "☀️", options: ["Rakitis — gangguan pertumbuhan tulang", "Artritis — radang sendi", "Keseleo", "Fraktur"], answer: 0, explain: "Rakitis menghambat pertumbuhan tulang anak. Ayo berjemur pagi!" },
  { id: "l3-8", cat: "HOTS", type: "pg", q: "Jika manusia tidak punya sendi, yang terjadi adalah...", emoji: "🧠", options: ["Tubuh kaku & tidak bisa bergerak bebas", "Tubuh makin lentur", "Otot makin kuat", "Tidak ada pengaruh"], answer: 0, explain: "Tanpa sendi, tulang tidak bisa bergerak — tubuh seperti patung batu!" },
  { id: "l3-9", cat: "HOTS", type: "tf", q: "Membawa tas berat sebelah setiap hari baik untuk tulang belakang. (Benar / Salah)", emoji: "🎒", options: ["Salah", "Benar"], answer: 0, explain: "Salah! Tas berat sebelah membuat tulang belakang miring. Pakai dua tali & atur beratnya." },
  { id: "l3-10", cat: "Kesehatan", type: "pg", q: "Kebiasaan terbaik untuk otot dan tulang adalah...", emoji: "❤️", options: ["Olahraga rutin + makan bergizi + tidur cukup", "Main HP 8 jam sehari", "Jajan gorengan terus", "Tidak pernah olahraga"], answer: 0, explain: "Kombinasi bergerak, makan bergizi, dan istirahat = tubuh hebat!" },
];

export const KUIS_MASTER: Q[] = [
  { id: "k-1", cat: "Sistem Gerak", type: "pg", q: "Tiga komponen utama sistem gerak adalah...", emoji: "🧠", options: ["Tulang, sendi, otot", "Darah, jantung, paru", "Kulit, kuku, rambut", "Gigi, lidah, bibir"], answer: 0, explain: "Tulang sebagai rangka, sendi penghubung, otot penggerak." },
  { id: "k-2", cat: "Tulang", type: "pg", q: "Fungsi tulang rusuk adalah...", emoji: "🩻", options: ["Melindungi jantung & paru-paru", "Membantu melihat", "Mencerna makanan", "Mendengar bunyi"], answer: 0, explain: "Tulang rusuk membentuk sangkar pelindung jantung dan paru." },
  { id: "k-3", cat: "Jenis Tulang", type: "pg", q: "🦴 Gambar tulang panjang (paha). Jenisnya...", emoji: "🦴", options: ["Tulang panjang/pipa", "Tulang pipih", "Tulang pendek", "Tulang tak beraturan"], answer: 0, explain: "Tulang paha panjang & berongga — tulang pipa." },
  { id: "k-4", cat: "Jenis Tulang", type: "pg", q: "Tulang pergelangan tangan termasuk...", emoji: "🧱", options: ["Tulang pendek", "Tulang panjang", "Tulang pipih", "Tulang pipa"], answer: 0, explain: "Kecil dan kotak — tulang pendek." },
  { id: "k-5", cat: "Sendi", type: "pg", q: "Sendi yang memungkinkan gerakan satu arah seperti pintu...", emoji: "🚪", options: ["Sendi engsel", "Sendi peluru", "Sendi putar", "Sendi geser"], answer: 0, explain: "Siku & lutut = engsel." },
  { id: "k-6", cat: "Sendi", type: "pg", q: "📷 Lutut menekuk saat menendang. Jenis sendinya...", emoji: "🦵", options: ["Engsel", "Peluru", "Putar", "Geser"], answer: 0, explain: "Lutut menekuk satu arah = engsel." },
  { id: "k-7", cat: "Sendi", type: "pg", q: "Sendi putar terdapat pada...", emoji: "🔄", options: ["Leher", "Lutut", "Siku", "Jari kaki"], answer: 0, explain: "Leher bisa menoleh berkat sendi putar." },
  { id: "k-8", cat: "Otot", type: "pg", q: "Otot yang menempel pada tulang dan digerakkan secara sadar...", emoji: "💪", options: ["Otot rangka", "Otot polos", "Otot jantung", "Otot halus"], answer: 0, explain: "Otot rangka = otot sadar penempel tulang." },
  { id: "k-9", cat: "Otot", type: "pg", q: "Saat menekuk siku, yang terjadi...", emoji: "💥", options: ["Bisep berkontraksi, trisep relaksasi", "Trisep berkontraksi, bisep relaksasi", "Keduanya diam", "Tulang memendek"], answer: 0, explain: "Bisep menarik lengan bawah ke atas saat menekuk." },
  { id: "k-10", cat: "Gerakan", type: "pg", q: "📊 Tabel: Berlari → lutut & panggul. Sendi yang berperan...", emoji: "🏃", options: ["Engsel & peluru", "Putar & geser", "Engsel & putar", "Geser & peluru"], answer: 0, explain: "Lutut=engsel, panggul=peluru." },
  { id: "k-11", cat: "Gerakan", type: "pg", q: "Menulis melibatkan kerja sama...", emoji: "✍️", options: ["Tulang jari, sendi geser, otot jari", "Tulang paha & lutut", "Otot jantung saja", "Tulang rusuk & dada"], answer: 0, explain: "Gerak halus menulis memakai tulang & otot jari + sendi pergelangan." },
  { id: "k-12", cat: "Mekanisme", type: "pg", q: "Urutan mekanisme gerak yang tepat...", emoji: "⚙️", options: ["Otot kontraksi → tarik tulang → tulang bergerak di sendi", "Sendi kontraksi → tarik otot", "Tulang kontraksi → tarik otot", "Otot diam → tulang bergerak"], answer: 0, explain: "Otot adalah motornya, tulang rangkanya, sendi engselnya!" },
  { id: "k-13", cat: "Gangguan", type: "pg", q: "Punggung atas terlalu membungkuk disebut...", emoji: "🐫", options: ["Kifosis", "Lordosis", "Skoliosis", "Fraktur"], answer: 0, explain: "Kifosis = bungkuk punggung atas." },
  { id: "k-14", cat: "Gangguan", type: "pg", q: "Pinggang melengkung terlalu ke depan disebut...", emoji: "↩️", options: ["Lordosis", "Kifosis", "Skoliosis", "Artritis"], answer: 0, explain: "Lordosis = lengkung pinggang berlebih." },
  { id: "k-15", cat: "Gangguan", type: "pg", q: "Keseleo adalah cedera pada...", emoji: "🩹", options: ["Ligamen sendi", "Otot jantung", "Tengkorak", "Gigi"], answer: 0, explain: "Ligamen tertarik karena gerakan mendadak." },
  { id: "k-16", cat: "Gangguan", type: "pg", q: "📖 Raka jatuh, tulang retak. Gangguan ini disebut...", emoji: "🦴", options: ["Fraktur", "Skoliosis", "Rakitis", "Artritis"], answer: 0, explain: "Fraktur = retak/patah tulang." },
  { id: "k-17", cat: "Kesehatan", type: "pg", q: "Makanan kaya kalsium untuk tulang...", emoji: "🥛", options: ["Susu, ikan teri, bayam", "Permen, soda, keripik", "Mi instan tiap hari", "Gorengan berlebihan"], answer: 0, explain: "Kalsium dari susu, ikan, sayur hijau." },
  { id: "k-18", cat: "Kesehatan", type: "pg", q: "Postur duduk yang baik saat belajar...", emoji: "🧍", options: ["Punggung tegak, kaki menapak", "Membungkuk ke meja", "Miring ke satu sisi", "Tiduran di kursi"], answer: 0, explain: "Tegak + rileks + kaki menapak = tulang belakang senang!" },
  { id: "k-19", cat: "HOTS", type: "pg", q: "🧠 Mengapa pemanasan penting sebelum olahraga?", emoji: "🔥", options: ["Menyiapkan otot & sendi agar tidak cedera", "Agar cepat lelah", "Agar otot kaku", "Tidak ada gunanya"], answer: 0, explain: "Pemanasan melancarkan darah ke otot sehingga lentur & siap." },
  { id: "k-20", cat: "HOTS", type: "tf", q: "Tubuh adalah amanah Allah sehingga harus dijaga dengan baik. (Benar / Salah)", emoji: "🌱", options: ["Benar", "Salah"], answer: 0, explain: "Benar! Menjaga tubuh = bentuk syukur: makan baik, bergerak, istirahat." },
];

export const POSTUR_CASES = [
  { id: "p1", judul: "Duduk tegak saat belajar", emoji: "🪑", desc: "Punggung lurus, mata sejajar buku, kaki menapak lantai.", baik: true, feedback: "Hebat! Duduk tegak menjaga tulang belakang tetap sehat." },
  { id: "p2", judul: "Duduk membungkuk main HP", emoji: "📱", desc: "Leher menunduk lama, punggung melengkung seperti udang.", baik: false, feedback: "Perlu diperbaiki! Menunduk lama membuat leher & punggung sakit." },
  { id: "p3", judul: "Berdiri tegak", emoji: "🧍", desc: "Bahu rileks, dada terbuka, berat seimbang di dua kaki.", baik: true, feedback: "Bagus! Berdiri tegak membuat tubuh seimbang dan percaya diri." },
  { id: "p4", judul: "Tas digendong sebelah bahu", emoji: "🎒", desc: "Tas berat hanya di satu bahu setiap hari.", baik: false, feedback: "Perlu diperbaiki! Gunakan dua tali agar tulang belakang tidak miring." },
  { id: "p5", judul: "Mengangkat benda dengan lutut ditekuk", emoji: "📦", desc: "Jongkok, punggung lurus, angkat dengan kekuatan kaki.", baik: true, feedback: "Tepat! Mengangkat dengan kaki melindungi punggung dari cedera." },
  { id: "p6", judul: "Tiduran miring baca buku lama", emoji: "🛋️", desc: "Leher tertekuk dan badan miring berjam-jam.", baik: false, feedback: "Perlu diperbaiki! Posisi miring lama membuat leher tegang." },
];

export const HABITS = [
  { id: "h1", t: "Minum susu", e: "🥛", sehat: true },
  { id: "h2", t: "Main bola", e: "⚽", sehat: true },
  { id: "h3", t: "Begadang main game", e: "🎮", sehat: false },
  { id: "h4", t: "Makan sayur & buah", e: "🥦", sehat: true },
  { id: "h5", t: "Duduk membungkuk", e: "🪑", sehat: false },
  { id: "h6", t: "Berjemur pagi", e: "☀️", sehat: true },
  { id: "h7", t: "Jajan soda tiap hari", e: "🥤", sehat: false },
  { id: "h8", t: "Pemanasan olahraga", e: "🤸", sehat: true },
  { id: "h9", t: "Tas berat sebelah", e: "🎒", sehat: false },
  { id: "h10", t: "Tidur cukup", e: "😴", sehat: true },
  { id: "h11", t: "Makan ikan & telur", e: "🍳", sehat: true },
  { id: "h12", t: "Tidak pernah olahraga", e: "🛋️", sehat: false },
];

export const MATCH_PAIRS = [
  { tulang: "Tengkorak", fungsi: "Melindungi otak" },
  { tulang: "Rusuk", fungsi: "Melindungi jantung & paru" },
  { tulang: "Paha", fungsi: "Menopang tubuh berjalan" },
  { tulang: "Belakang", fungsi: "Menegakkan tubuh" },
  { tulang: "Lengan atas", fungsi: "Mengangkat lengan" },
  { tulang: "Panggul", fungsi: "Menopang saat duduk" },
];

export const SIAPA_BEKERJA = [
  { q: "Kamu menekuk siku untuk minum. Siapa yang berkontraksi?", emoji: "🥤", options: ["Bisep", "Trisep", "Otot betis", "Otot jantung"], answer: 0, explain: "Bisep menarik lengan bawah ke atas saat menekuk." },
  { q: "Kamu mendorong pintu hingga lengan lurus. Siapa yang bekerja?", emoji: "🚪", options: ["Trisep", "Bisep", "Otot leher", "Otot perut"], answer: 0, explain: "Trisep berkontraksi meluruskan siku." },
  { q: "Kamu berjinjit mengambil buku. Otot apa yang kuat bekerja?", emoji: "📚", options: ["Otot betis", "Otot jari", "Bisep", "Otot wajah"], answer: 0, explain: "Otot betis mengangkat tumit saat berjinjit." },
  { q: "Jantung berdetak memompa darah. Otot apa ini?", emoji: "❤️", options: ["Otot jantung", "Otot rangka", "Bisep", "Trisep"], answer: 0, explain: "Otot jantung bekerja otomatis tanpa lelah." },
  { q: "Kamu menoleh ke teman di samping. Sendi apa yang dipakai?", emoji: "👀", options: ["Sendi putar leher", "Sendi engsel lutut", "Sendi peluru bahu", "Sendi geser kaki"], answer: 0, explain: "Sendi putar leher memungkinkan menoleh." },
  { q: "Kamu memutar lengan saat pemanasan. Sendi apa ini?", emoji: "🌀", options: ["Sendi peluru bahu", "Sendi engsel siku", "Sendi putar leher", "Sendi lutut"], answer: 0, explain: "Bahu berputar ke semua arah = sendi peluru." },
];

export const STUDI_KASUS = [
  { id: "k1", judul: "Kasus 1 — Raka membungkuk", emoji: "🧍", cerita: "Raka sering duduk membungkuk ketika belajar. Punggungnya mulai terasa pegal.", tanya: "Apa yang perlu diperbaiki Raka?", options: ["Duduk tegak, punggung lurus, istirahat & peregangan", "Makin membungkuk agar nyaman", "Belajar sambil tiduran terus", "Tidak perlu berubah"], answer: 0, explain: "Duduk tegak + peregangan menjaga tulang belakang. Jika sakit berlanjut, beri tahu orang tua/guru." },
  { id: "k2", judul: "Kasus 2 — Siti ingin tulang kuat", emoji: "🥛", cerita: "Siti ingin menjaga kesehatan tulangnya agar kuat dan tidak mudah patah.", tanya: "Kebiasaan apa yang dapat dilakukan Siti?", options: ["Minum susu, makan bergizi, olahraga, berjemur pagi", "Begadang & jajan soda", "Diam di kamar seharian", "Tidak pernah olahraga"], answer: 0, explain: "Kalsium + vitamin D + olahraga = tulang kuat!" },
  { id: "k3", judul: "Kasus 3 — Beni terjatuh", emoji: "🩹", cerita: "Beni terjatuh ketika bermain dan kakinya sakit sekali sampai sulit berjalan.", tanya: "Apa tindakan yang tepat?", options: ["Beri tahu guru/orang tua & minta bantuan tenaga kesehatan", "Dipaksa lari lagi", "Dipijat keras", "Dibiarkan saja"], answer: 0, explain: "Cedera serius butuh bantuan dewasa & tenaga kesehatan. Ingat: beri tahu orang tua/guru!" },
];

export const TUJUAN = [
  "Menjelaskan pengertian sistem gerak",
  "Menjelaskan fungsi tulang",
  "Menjelaskan fungsi sendi",
  "Menjelaskan fungsi otot",
  "Mengenali bagian utama rangka manusia",
  "Mengidentifikasi jenis tulang",
  "Mengidentifikasi jenis sendi",
  "Menjelaskan kerja sama tulang, sendi, dan otot",
  "Menganalisis gerakan sederhana",
  "Mengenali penyakit/gangguan sistem gerak",
  "Menjelaskan cara menjaga kesehatan sistem gerak",
];

export const QUOTES = [
  "Tubuh kita adalah amanah. Mari kita jaga dengan baik.",
  "Tulang kuat, otot hebat — ayo bergerak setiap hari!",
  "Sedikit belajar setiap hari membuatmu Master Sains!",
  "Penjelajah hebat tidak pernah menyerah!",
  "Jaga posturmu, sayangi tulangmu!",
];

/* Pengacakan kunci jawaban — dijalankan satu kali setelah seluruh data soal terbentuk. */
randomizeAll([
  LATIHAN_L1,
  LATIHAN_L2,
  LATIHAN_L3,
  KUIS_MASTER,
  SIAPA_BEKERJA,
  STUDI_KASUS,
  PENYAKIT.map(p => p.quiz),
]);
