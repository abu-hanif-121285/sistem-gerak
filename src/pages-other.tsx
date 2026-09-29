import { useMemo, useState } from "react";
import { Award, BarChart3, BookOpen, Download, Flame, Info, Lock, LogOut, Play, RotateCcw, Search, Star, Target, Trash2, TrendingUp, Users } from "lucide-react";
import { PageHeader, Card, ProgressBar, Avatar } from "./components";
import { Art, MISSION_ART } from "./art";
import { GLOSARIUM, QUOTES } from "./data";
import { BADGES, MISSIONS, useStore } from "./store";

/* ---------- BERANDA ---------- */
export function BerandaPage({ go }: { go: (r: string) => void }) {
  const { s, level, progressPct } = useStore();
  const quote = useMemo(() => QUOTES[new Date().getDate() % QUOTES.length], []);
  const nextMission = MISSIONS.find(m => !s.completed.includes(m.id)) ?? MISSIONS[0];
  const [showProfile, setShowProfile] = useState(false);
  const [name, setName] = useState(s.name);
  const [av, setAv] = useState<"boy" | "girl">(s.avatar);
  const { setProfile } = useStore();
  return (
    <div>
      <div className="relative rounded-3xl overflow-hidden card-shadow-lg mb-4 min-h-[340px] md:min-h-[310px] text-white isolate">
        <Art name="movement" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062765]/95 via-[#0b4093]/80 to-[#075a9c]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#052968]/55 via-transparent to-transparent" />
        <div className="relative p-5 md:p-7 flex flex-col justify-between min-h-[340px] md:min-h-[310px] max-w-[750px]">
          <div>
            <button onClick={() => setShowProfile(true)} className="flex items-center gap-2.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 rounded-full py-1 pl-1 pr-4 transition-all w-fit">
              <Avatar kind={s.avatar} size={38} />
              <span className="text-left font-bold text-xs md:text-sm">Halo, {s.name}! <span className="text-white/80">Ubah profil</span></span>
            </button>
            <h1 className="font-display font-bold text-[2.25rem] md:text-[3.2rem] leading-[.95] mt-4 home-title-3d">SCIENCE<br /><span className="text-[#ffdc46]">BODY EXPLORER</span></h1>
            <p className="font-display font-bold text-sm md:text-lg mt-3">Sistem Gerak Manusia</p>
            <p className="font-bold text-xs md:text-sm text-white/95 max-w-md">Jelajah hebat tubuh kita lewat misi, eksperimen, dan tantangan seru!</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            <button onClick={() => go("tujuan")} className="btn-shine bg-white text-blue-800 font-display font-bold px-5 py-3 rounded-2xl flex items-center gap-2 hover:-translate-y-1 transition-transform text-xs md:text-sm shadow-[0_5px_0_#b7d9f8]"><Play size={17} /> MULAI BELAJAR</button>
            <button onClick={() => go(nextMission.route)} className="btn-shine bg-gradient-to-b from-orange-400 to-orange-600 text-white font-display font-bold px-5 py-3 rounded-2xl flex items-center gap-2 hover:-translate-y-1 transition-transform text-xs md:text-sm border border-orange-200 shadow-[0_5px_0_#9d3e0f]">LANJUTKAN MISI <span aria-hidden="true">→</span></button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-4">
          <div className="bg-white rounded-2xl p-3.5 text-slate-800 card-shadow border border-blue-100"><div className="flex items-center gap-1.5 text-xs font-black text-emerald-600"><TrendingUp size={15} /> Progress Belajar</div><div className="font-display font-black text-2xl text-blue-900 mt-1">{s.completed.length}/9 materi</div><ProgressBar value={progressPct} color="from-emerald-400 to-green-500" height="h-2" /><div className="text-[11px] font-black text-slate-400 mt-1">{progressPct}% selesai</div></div>
          <div className="bg-white rounded-2xl p-3.5 text-slate-800 card-shadow border border-blue-100"><div className="flex items-center gap-1.5 text-xs font-black text-amber-600"><Star size={15} /> Total XP</div><div className="font-display font-black text-2xl text-blue-900 mt-1">{s.xp.toLocaleString()}</div><div className="text-[11px] font-black text-slate-400">Level {level}</div></div>
          <div className="bg-white rounded-2xl p-3.5 text-slate-800 card-shadow border border-blue-100"><div className="flex items-center gap-1.5 text-xs font-black text-orange-600"><Award size={15} /> Skor Kuis</div><div className="font-display font-black text-2xl text-blue-900 mt-1">{s.kuisBest}</div><div className="text-[11px] font-black text-slate-400">dari 100</div></div>
          <div className="bg-white rounded-2xl p-3.5 text-slate-800 card-shadow border border-blue-100"><div className="flex items-center gap-1.5 text-xs font-black text-rose-600"><Flame size={15} /> Streak</div><div className="font-display font-black text-2xl text-blue-900 mt-1">{s.streak} hari</div><div className="text-[11px] font-black text-slate-400">berturut-turut</div></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-lg">🏅 Badge Saya ({s.badges.length}/7)</h3>
              <button onClick={() => go("progres")} className="text-xs font-black text-blue-600 hover:underline">Lihat Semua →</button>
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {BADGES.map(b => {
                const has = s.badges.includes(b.id);
                return (
                  <div key={b.id} className={`shrink-0 w-[92px] text-center rounded-2xl p-2 border-2 ${has ? "bg-gradient-to-b from-amber-50 to-orange-50 border-amber-300" : "bg-slate-50 border-slate-200 opacity-50 grayscale"}`}>
                    <div className={`badge-medal w-12 h-12 mx-auto rounded-full bg-gradient-to-br ${b.color} flex items-center justify-center text-2xl border-2 border-white`}>{has ? b.icon : "🔒"}</div>
                    <div className="font-display font-bold text-[10px] leading-tight mt-1">{b.name}</div>
                  </div>
                );
              })}
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-green-500 text-white flex items-center justify-center shrink-0"><Target size={24} /></div>
              <div className="flex-1">
                <h3 className="font-display font-bold">🎯 Misi Hari Ini</h3>
                <p className="text-sm font-semibold text-slate-600">Temukan 3 aktivitas di rumah yang menggunakan sistem gerak. Contoh: menyapu, mengepel, mengangkat galon!</p>
              </div>
              <button onClick={() => go("tantangan")} className="shrink-0 bg-green-500 text-white font-display font-bold text-sm px-4 py-2.5 rounded-2xl hover:bg-green-600">Lihat Tantangan</button>
            </div>
          </Card>
          <div>
            <h3 className="font-display font-bold text-lg mb-1 flex items-center gap-2">🗺️ Misi Pembelajaran</h3>
            <p className="text-sm font-semibold text-slate-500 mb-3">Selesaikan misi untuk membuka materi berikutnya!</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
              {MISSIONS.map(m => {
                const done = s.completed.includes(m.id);
                return (
                  <button key={m.id} onClick={() => go(m.route)} className={`group rounded-[23px] p-2 border-2 text-left transition-all hover:-translate-y-1 hover:shadow-xl ${m.color} ${done ? "border-green-400" : "border-white"} card-shadow relative overflow-hidden`}>
                    <div className="relative h-[108px] sm:h-[130px] rounded-[16px] overflow-hidden bg-white/70">
                      <Art name={MISSION_ART[m.id]} className="art-hover w-full h-full" title={`Ilustrasi ${m.title}`} />
                      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0b2f75]/35 to-transparent pointer-events-none" />
                      <span className="absolute top-2 left-2 w-8 h-8 rounded-xl bg-white font-display font-black text-sm flex items-center justify-center text-blue-800 shadow-[0_3px_0_#bcd8fb]">{m.no}</span>
                    </div>
                    <div className="font-display font-bold text-[13px] md:text-sm leading-tight min-h-[38px] mt-2 px-1 text-blue-950">{m.title}</div>
                    <div className={`mt-1 text-center font-display font-bold text-xs py-2 rounded-xl ${done ? "bg-green-500 text-white shadow-[0_3px_0_#15803d]" : "bg-blue-600 text-white shadow-[0_3px_0_#12378e]"}`}>{done ? "✓ Selesai" : "Mulai misi →"}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-3xl overflow-hidden card-shadow bg-white border-2 border-white">
            <div className="h-40 relative overflow-hidden"><Art name="health" className="w-full h-full" title="Anak-anak menjaga tubuh dengan bergerak" /><div className="absolute inset-0 bg-gradient-to-t from-[#075e76]/35 to-transparent" /></div>
            <div className="p-4">
              <div className="flex items-center gap-2 font-display font-bold text-emerald-800"><Target size={18} /> Misi Harian</div>
              <p className="font-bold text-sm mt-1">Ayo lanjutkan petualanganmu! Jangan lupa belajar dengan gembira, ya!</p>
              <button onClick={() => go(nextMission.route)} className="mt-2 w-full bg-blue-700 text-white font-display font-bold py-2.5 rounded-2xl text-sm hover:bg-blue-800">🚀 LANJUTKAN BELAJAR: {nextMission.title}</button>
            </div>
          </div>
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100">
            <h4 className="font-display font-bold text-sm flex items-center gap-2">💬 Quote Hari Ini</h4>
            <p className="font-bold italic text-slate-700 mt-1">“{quote}”</p>
          </Card>
          <Card>
            <h4 className="font-display font-bold text-sm mb-2">📜 Prestasi Terbaru</h4>
            <div className="space-y-2">
              {s.feed.slice(0, 5).map(f => (
                <div key={f.id} className="flex items-center gap-2 bg-slate-50 rounded-xl p-2 border">
                  <span className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-sm shrink-0">🏅</span>
                  <span className="flex-1 text-xs font-bold">{f.text}<span className="block text-[10px] text-slate-400">{f.time}</span></span>
                  <span className="text-xs font-black text-green-600">+{f.xp} XP</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {showProfile && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowProfile(false)}>
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full animate-pop-in" onClick={e => e.stopPropagation()}>
            <h3 className="font-display font-bold text-xl mb-3">✏️ Ubah Profil</h3>
            <label className="font-bold text-sm">Nama panggilan:</label>
            <input value={name} onChange={e => setName(e.target.value)} maxLength={20} className="w-full border-2 border-slate-200 rounded-2xl p-3 font-bold mt-1 focus:border-blue-400 outline-none" />
            <label className="font-bold text-sm mt-3 block">Pilih avatar:</label>
            <div className="flex gap-3 mt-1">
              <button onClick={() => setAv("boy")} className={`flex-1 rounded-2xl p-3 border-2 flex flex-col items-center gap-1 ${av === "boy" ? "border-blue-500 bg-blue-50" : "border-slate-200"}`}><Avatar kind="boy" size={56} /><span className="font-bold text-xs">👦 Laki-laki</span></button>
              <button onClick={() => setAv("girl")} className={`flex-1 rounded-2xl p-3 border-2 flex flex-col items-center gap-1 ${av === "girl" ? "border-violet-500 bg-violet-50" : "border-slate-200"}`}><Avatar kind="girl" size={56} /><span className="font-bold text-xs">Perempuan</span></button>
            </div>
            <button onClick={() => { setProfile(name, av); setShowProfile(false); }} className="mt-4 w-full bg-blue-600 text-white font-display font-bold py-3 rounded-2xl">💾 Simpan</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- PROGRES ---------- */
export function ProgresPage() {
  const { s, level, progressPct } = useStore();
  const bestLat = Math.max(0, ...Object.values(s.latihanBest));
  return (
    <div>
      <PageHeader icon="📊" title="Progres Belajar" sub="Lihat seberapa jauh petualanganmu! Semua tersimpan otomatis." color="from-indigo-600 to-violet-500" />
      <div className="grid md:grid-cols-4 gap-2.5 mb-4">
        <Card className="text-center"><div className="font-display font-black text-4xl text-indigo-600">{progressPct}%</div><div className="font-bold text-xs">{s.completed.length}/9 materi selesai</div><ProgressBar value={progressPct} color="from-indigo-400 to-violet-500" height="h-2" /></Card>
        <Card className="text-center"><div className="font-display font-black text-4xl text-amber-500">{s.xp.toLocaleString()}</div><div className="font-bold text-xs">Total XP • Level {level}</div></Card>
        <Card className="text-center"><div className="font-display font-black text-4xl text-emerald-500">{bestLat}</div><div className="font-bold text-xs">Latihan terbaik • {s.latihanAttempts}x mencoba</div></Card>
        <Card className="text-center"><div className="font-display font-black text-4xl text-orange-500">{s.kuisBest}</div><div className="font-bold text-xs">Kuis Master • {s.kuisAttempts}x mencoba</div></Card>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-display font-bold mb-2">🗺️ Detail Misi</h3>
          <div className="space-y-2">
            {MISSIONS.map(m => {
              const done = s.completed.includes(m.id);
              return (
                <div key={m.id} className={`flex items-center gap-3 rounded-2xl p-2.5 border-2 ${done ? "bg-green-50 border-green-200" : "bg-slate-50 border-slate-200"}`}>
                  <Art name={MISSION_ART[m.id]} className="w-10 h-10 rounded-xl shrink-0" />
                  <span className="flex-1 font-bold text-sm">{m.no} — {m.title}</span>
                  <span className={`font-display font-bold text-xs px-3 py-1.5 rounded-full ${done ? "bg-green-500 text-white" : "bg-slate-300 text-slate-600"}`}>{done ? "✅ SELESAI" : "⏳ Belum"}</span>
                </div>
              );
            })}
          </div>
        </Card>
        <div className="space-y-4">
          <Card>
            <h3 className="font-display font-bold mb-2">🏅 Koleksi Badge ({s.badges.length}/7)</h3>
            <div className="grid grid-cols-2 gap-2">
              {BADGES.map(b => {
                const has = s.badges.includes(b.id);
                return <div key={b.id} className={`rounded-2xl p-3 border-2 flex items-center gap-2 ${has ? "bg-amber-50 border-amber-300" : "bg-slate-50 border-slate-200 opacity-60"}`}><span className="text-3xl">{has ? b.icon : "🔒"}</span><span><span className="block font-display font-bold text-xs">{b.name}</span><span className="block text-[10px] font-bold text-slate-500">{b.desc}</span></span></div>;
              })}
            </div>
          </Card>
          <Card>
            <h3 className="font-display font-bold mb-2">📜 Riwayat Prestasi</h3>
            <div className="space-y-1.5 max-h-[220px] overflow-y-auto">
              {s.feed.map(f => <div key={f.id} className="flex justify-between text-xs font-bold bg-slate-50 rounded-xl p-2 border"><span>{f.text}</span><span className="text-green-600">+{f.xp}</span></div>)}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ---------- GLOSARIUM ---------- */
export function GlosariumPage() {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(GLOSARIUM[1]);
  const filtered = GLOSARIUM.filter(g => g.istilah.toLowerCase().includes(q.toLowerCase()));
  return (
    <div>
      <PageHeader icon="📖" title="Glosarium" sub="Kamus sains cilik! Cari kata sulit dan pahami artinya." color="from-cyan-600 to-blue-500" />
      <div className="grid lg:grid-cols-[1fr_300px] gap-4">
        <Card>
          <div className="relative mb-3">
            <Search className="absolute left-3 top-3 text-slate-400" size={18} />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="🔍 Cari istilah... contoh: sendi" className="w-full border-2 border-slate-200 rounded-2xl pl-10 pr-4 py-2.5 font-bold focus:border-cyan-400 outline-none" />
          </div>
          <div className="flex flex-wrap gap-2">
            {filtered.map(g => (
              <button key={g.istilah} onClick={() => setSel(g)} className={`px-4 py-2 rounded-2xl font-bold text-sm border-2 ${sel.istilah === g.istilah ? "bg-cyan-600 text-white border-cyan-600" : "bg-slate-100 border-slate-200 hover:border-cyan-300"}`}>{g.emoji} {g.istilah}</button>
            ))}
            {filtered.length === 0 && <p className="font-bold text-slate-400">Tidak ditemukan. Coba kata lain! 🔍</p>}
          </div>
        </Card>
        <Card className="bg-gradient-to-b from-cyan-50 to-white border-2 border-cyan-200 h-fit lg:sticky lg:top-4">
          <Art name={sel.istilah.toLowerCase().includes("sendi") || sel.istilah === "Ligamen" ? "joint" : sel.istilah.toLowerCase().includes("otot") || ["Bisep", "Trisep", "Kontraksi", "Tendon"].includes(sel.istilah) ? "muscle" : sel.istilah.toLowerCase().includes("postur") || sel.istilah === "Sistem gerak" ? "movement" : "bone"} className="w-28 h-28 mx-auto rounded-2xl shadow-md" title={`Ilustrasi ${sel.istilah}`} />
          <h3 className="font-display font-bold text-xl text-center mt-1">{sel.istilah}</h3>
          <p className="font-semibold text-sm text-slate-600 text-center mt-2 bg-white rounded-2xl p-3 border">{sel.arti}</p>
          <div className="mt-2 text-center text-xs font-bold text-slate-400 flex items-center justify-center gap-1"><BookOpen size={12} /> {GLOSARIUM.length} istilah tersedia</div>
        </Card>
      </div>
    </div>
  );
}

/* ---------- GURU ---------- */
export function GuruPage() {
  const { isGuru, setGuru, classStudents, resetAll } = useStore();
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [show, setShow] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const avgKuis = classStudents.length ? Math.round(classStudents.reduce((a, c) => a + c.skorKuis, 0) / classStudents.length) : 0;
  const avgProg = classStudents.length ? Math.round(classStudents.reduce((a, c) => a + c.progress, 0) / classStudents.length) : 0;
  const login = () => {
    if (pass === "Inovatif") { setGuru(true); setErr(""); setPass(""); }
    else setErr("Password belum tepat. Silakan coba kembali.");
  };
  const exportCSV = () => {
    const header = "Nama,Progress,XP,Level,Skor Latihan,Skor Kuis,Badge,Materi Selesai";
    const rows = classStudents.map(c => `${c.nama},${c.progress}%,${c.xp},${c.level},${c.skorLatihan},${c.skorKuis},${c.badges},${c.materi}`);
    const csv = [header, ...rows].join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "hasil-belajar-sbe.csv"; a.click();
    URL.revokeObjectURL(url);
  };
  if (!isGuru) {
    return (
      <div>
        <PageHeader icon="👨‍🏫" title="Mode Guru" sub="Area khusus Bapak/Ibu Guru. Masukkan password untuk membuka dashboard." color="from-slate-700 to-slate-900" />
        <Card className="max-w-md mx-auto text-center">
          <Art name="lab" className="w-full h-36 rounded-2xl mb-3" title="Ilustrasi laboratorium sains anak" />
          <h3 className="font-display font-bold text-2xl">Mode Guru</h3>
          <p className="text-sm font-semibold text-slate-500">Masukkan password untuk mengakses dashboard guru.</p>
          <div className="relative mt-4">
            <Lock className="absolute left-3 top-3.5 text-slate-400" size={18} />
            <input type={show ? "text" : "password"} value={pass} onChange={e => setPass(e.target.value)} onKeyDown={e => e.key === "Enter" && login()} placeholder="Masukkan password" className="w-full border-2 border-slate-200 rounded-2xl pl-10 pr-12 py-3 font-bold focus:border-blue-400 outline-none" />
            <button onClick={() => setShow(s => !s)} className="absolute right-3 top-3 text-slate-400 font-bold text-sm">{show ? "🙈" : "👁️"}</button>
          </div>
          {err && <p className="animate-pop-in mt-2 font-bold text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl p-2">⚠️ {err}</p>}
          <button onClick={login} className="btn-shine mt-3 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-display font-bold py-3 rounded-2xl">Masuk Dashboard</button>
          <p className="text-[11px] font-semibold text-slate-400 mt-2">🔒 Password hanya sebagai pengunci akses aplikasi (client-side), bukan keamanan server.</p>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <PageHeader icon="👨‍🏫" title="Dashboard Guru" sub="Pantau progress belajar siswa kelas VI — IPAS Sistem Gerak Manusia." color="from-slate-700 to-blue-800" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-4">
        <Card className="text-center"><Users className="mx-auto text-blue-600" size={22} /><div className="font-display font-black text-3xl">{classStudents.length}</div><div className="font-bold text-xs">Jumlah Siswa</div></Card>
        <Card className="text-center"><BarChart3 className="mx-auto text-emerald-600" size={22} /><div className="font-display font-black text-3xl">{avgKuis}</div><div className="font-bold text-xs">Rata-rata Skor Kuis</div></Card>
        <Card className="text-center"><TrendingUp className="mx-auto text-violet-600" size={22} /><div className="font-display font-black text-3xl">{avgProg}%</div><div className="font-bold text-xs">Progress Rata-rata</div></Card>
        <Card className="text-center"><Award className="mx-auto text-amber-500" size={22} /><div className="font-display font-black text-3xl">{classStudents.reduce((a, c) => a + +c.badges, 0)}</div><div className="font-bold text-xs">Total Badge</div></Card>
      </div>
      <Card className="mb-4">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <h3 className="font-display font-bold">📋 Daftar Hasil Siswa</h3>
          <div className="ml-auto flex gap-2">
            <button onClick={exportCSV} className="bg-emerald-500 text-white font-display font-bold text-sm px-4 py-2 rounded-xl flex items-center gap-1.5 hover:bg-emerald-600"><Download size={16} /> Export CSV</button>
            <button onClick={() => setConfirmReset(true)} className="bg-white border-2 border-red-200 text-red-600 font-display font-bold text-sm px-4 py-2 rounded-xl flex items-center gap-1.5 hover:bg-red-50"><Trash2 size={16} /> Reset</button>
            <button onClick={() => setGuru(false)} className="bg-slate-100 font-display font-bold text-sm px-4 py-2 rounded-xl flex items-center gap-1.5"><LogOut size={16} /> Keluar</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[640px]">
            <thead><tr className="bg-blue-600 text-white font-display">{["Nama", "Progress", "XP", "Level", "Latihan", "Kuis", "Badge", "Materi"].map(h => <th key={h} className="p-2.5 text-left first:rounded-l-xl last:rounded-r-xl">{h}</th>)}</tr></thead>
            <tbody>
              {classStudents.map((c, i) => (
                <tr key={c.nama + i} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                  <td className="p-2.5 font-bold">{c.nama}</td>
                  <td className="p-2.5"><div className="flex items-center gap-1"><div className="w-16 bg-slate-200 rounded-full h-2"><div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${c.progress}%` }} /></div><span className="font-black text-xs">{c.progress}%</span></div></td>
                  <td className="p-2.5 font-bold">{c.xp.toLocaleString()}</td>
                  <td className="p-2.5"><span className="bg-blue-100 text-blue-700 font-black px-2 py-0.5 rounded-full text-xs">Lv {c.level}</span></td>
                  <td className="p-2.5 font-bold">{c.skorLatihan}</td>
                  <td className="p-2.5 font-bold">{c.skorKuis}</td>
                  <td className="p-2.5 font-bold">🏅 {c.badges}</td>
                  <td className="p-2.5 font-bold">{c.materi}/9</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      {confirmReset && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full animate-pop-in text-center">
            <div className="text-5xl">⚠️</div>
            <h3 className="font-display font-bold text-xl mt-2">Reset Semua Data?</h3>
            <p className="text-sm font-semibold text-slate-500">Progress, XP, badge, dan skor siswa akan dihapus dan kembali ke awal. Lanjutkan?</p>
            <div className="flex gap-2 mt-4">
              <button onClick={() => setConfirmReset(false)} className="flex-1 bg-slate-100 font-display font-bold py-2.5 rounded-2xl">Batal</button>
              <button onClick={() => { resetAll(); setConfirmReset(false); }} className="flex-1 bg-red-500 text-white font-display font-bold py-2.5 rounded-2xl flex items-center justify-center gap-1"><RotateCcw size={16} /> Ya, Reset</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- TENTANG ---------- */
export function TentangPage() {
  return (
    <div>
      <PageHeader icon="ℹ️" title="Tentang Aplikasi" sub="Kenali Science Body Explorer lebih dekat!" color="from-sky-600 to-blue-600" />
      <Card className="text-center max-w-2xl mx-auto mb-4">
        <Art name="movement" className="w-full h-44 md:h-52 rounded-2xl shadow-md" title="Petualangan sains anak-anak dalam dunia tiga dimensi" />
        <h2 className="font-display font-black text-3xl mt-4 text-blue-800" style={{ textShadow: "0 2px 0 #badcff,0 5px 8px rgba(15,65,140,.22)" }}>SCIENCE BODY EXPLORER</h2>
        <p className="font-display font-bold text-lg text-slate-700">Sistem Gerak Manusia</p>
        <p className="font-semibold text-sm text-slate-500">“Jelajah Hebat Sistem Gerak Tubuh Kita”</p>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border-2 border-blue-100 mt-4 text-left">
          <p className="font-semibold text-sm">Media pembelajaran interaktif <b>IPAS Kelas VI SD (Fase C, Kurikulum Merdeka)</b> — gabungan media pembelajaran + laboratorium sains digital + game edukasi.</p>
          <div className="grid grid-cols-2 gap-2 mt-3 text-xs font-bold">
            <div className="bg-white rounded-xl p-2 border">🧠 9 Misi Belajar</div>
            <div className="bg-white rounded-xl p-2 border">🔬 5 Eksperimen Lab</div>
            <div className="bg-white rounded-xl p-2 border">🎮 6 Mini Game</div>
            <div className="bg-white rounded-xl p-2 border">📝 30 Latihan + 20 Kuis</div>
            <div className="bg-white rounded-xl p-2 border">🏅 7 Badge & Level</div>
            <div className="bg-white rounded-xl p-2 border">👨‍🏫 Dashboard Guru</div>
          </div>
        </div>
        <div className="mt-4 bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-2xl p-4">
          <div className="font-display font-bold">Created by WAH Official</div>
          <div className="text-xs font-bold text-white/80">© 2026 WAH Official • Science Body Explorer</div>
        </div>
        <div className="mt-3 text-xs font-semibold text-slate-400 flex items-center justify-center gap-1"><Info size={12} /> Materi edukatif & ramah anak — bukan alat diagnosis medis.</div>
      </Card>
    </div>
  );
}
