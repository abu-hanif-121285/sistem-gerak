import React, { useState } from "react";
import { ArrowRight, Bone, CheckCircle2, Dumbbell, Link2, MousePointerClick, PersonStanding, Target } from "lucide-react";
import { PageHeader, Card, CompleteButton, ProgressBar } from "./components";
import { TULANG_LIST, JENIS_TULANG, JENIS_SENDI, JENIS_OTOT, GERAKAN, TUJUAN } from "./data";
import { useStore } from "./store";
import { Art, ElbowSimulation, MuscleArmSimulation, type ArtKey } from "./art";

/* ---------- TUJUAN ---------- */
export function TujuanPage({ go }: { go: (r: string) => void }) {
  const [checked, setChecked] = useState<string[]>([]);
  const toggle = (t: string) => setChecked(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t]);
  return (
    <div>
      <PageHeader icon="🎯" title="Tujuan Pembelajaran" sub="Peta petualanganmu! Centang setiap tujuan yang sudah kamu kuasai." color="from-violet-600 to-purple-500" />
      <Card className="mb-4 border-2 border-violet-200 bg-gradient-to-br from-violet-50 to-white">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-2xl bg-violet-500 text-white flex items-center justify-center shrink-0"><Target size={24} /></div>
          <div>
            <h3 className="font-display font-bold text-lg text-violet-900">🎯 Tujuan Pembelajaran Aplikasi</h3>
            <p className="text-sm font-semibold text-slate-600">IPAS • Kelas VI SD • Fase C • Kurikulum Merdeka • Topik: Sistem Gerak Manusia. Setelah berpetualang, kamu diharapkan mampu:</p>
          </div>
        </div>
      </Card>
      <div className="grid md:grid-cols-2 gap-3 mb-4">
        {TUJUAN.map((t, i) => {
          const on = checked.includes(t);
          return (
            <button key={t} onClick={() => toggle(t)} className={`text-left rounded-2xl p-4 border-2 transition-all flex items-start gap-3 ${on ? "bg-green-50 border-green-400" : "bg-white border-slate-200 hover:border-violet-300 card-shadow"}`}>
              <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-white shrink-0 ${on ? "bg-green-500" : "bg-gradient-to-br from-violet-500 to-purple-500"}`}>{on ? "✓" : i + 1}</span>
              <span className={`font-bold text-sm md:text-[15px] ${on ? "text-green-800 line-through decoration-green-400" : ""}`}>{t}</span>
            </button>
          );
        })}
      </div>
      <Card className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1 w-full">
          <div className="font-display font-bold text-sm mb-1">Pemahamanmu: {checked.length}/{TUJUAN.length}</div>
          <ProgressBar value={(checked.length / TUJUAN.length) * 100} color="from-violet-400 to-purple-500" />
        </div>
        <button onClick={() => go("sistem-gerak")} className="btn-shine bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-display font-bold px-6 py-3 rounded-2xl flex items-center gap-2 hover:scale-105 transition-transform w-full md:w-auto justify-center">Mulai Misi 01 <ArrowRight size={18} /></button>
      </Card>
    </div>
  );
}

/* ---------- SISTEM GERAK ---------- */
export function SistemGerakPage() {
  const [active, setActive] = useState(0);
  const comps: { icon: string; nama: string; art: ArtKey; fungsi: string; contoh: string }[] = [
    { icon: "🦴", nama: "Tulang", art: "bone", fungsi: "Rangka & pelindung tubuh. Tulang memberi bentuk agar kita bisa berdiri tegak dan melindungi organ seperti otak & jantung.", contoh: "Contoh: Tengkorak melindungi otak, tulang rusuk melindungi jantung." },
    { icon: "🔗", nama: "Sendi", art: "joint", fungsi: "Penghubung antar tulang yang membuat gerakan mungkin. Tanpa sendi, tubuh kaku seperti robot mainan yang macet!", contoh: "Contoh: Siku menekuk saat makan, bahu berputar saat melempar bola." },
    { icon: "💪", nama: "Otot", art: "muscle", fungsi: "Mesin penggerak! Otot berkontraksi (memendek) lalu menarik tulang sehingga terjadi gerakan.", contoh: "Contoh: Bisep menarik lengan saat mengangkat tas sekolah." },
  ];
  return (
    <div>
      <PageHeader icon="🧠" title="Kenalan dengan Sistem Gerak" sub="MISSION 01 — Apa itu sistem gerak? Kenali 3 pahlawan tubuhmu!" color="from-blue-600 to-cyan-500" />
      <Card className="mb-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
        <h3 className="font-display font-bold text-xl mb-2">🤔 Apa itu Sistem Gerak?</h3>
        <p className="font-semibold text-slate-700 leading-relaxed">Sistem gerak adalah <span className="bg-yellow-200 px-1.5 py-0.5 rounded-lg">bagian-bagian tubuh yang bekerja sama</span> sehingga manusia dapat melakukan berbagai gerakan — berjalan, berlari, menulis, bahkan tersenyum! 😊</p>
        <div className="grid grid-cols-3 gap-2 md:gap-3 mt-4">
          {comps.map((c, i) => (
            <button key={c.nama} onClick={() => setActive(i)} className={`group rounded-2xl p-2 md:p-3 border-2 transition-all ${active === i ? "border-blue-500 bg-white card-shadow-lg scale-[1.02]" : "border-transparent bg-white/70 hover:bg-white"}`}>
              <Art name={c.art} className="art-hover w-full h-20 md:h-32 rounded-xl" title={`Ilustrasi tiga dimensi ${c.nama.toLowerCase()}`} />
              <div className="font-display font-bold text-sm md:text-lg mt-2">{c.nama}</div>
              <div className="text-[11px] md:text-xs font-bold text-blue-600 flex items-center justify-center gap-1"><MousePointerClick size={12} /> Klik aku!</div>
            </button>
          ))}
        </div>
        <div className="animate-pop-in mt-4 bg-white rounded-2xl p-4 border-2 border-blue-200" key={active}>
          <div className="font-display font-bold text-lg">{comps[active].icon} Fungsi {comps[active].nama}</div>
          <p className="font-semibold text-slate-700 text-sm md:text-base">{comps[active].fungsi}</p>
          <p className="text-sm font-bold text-blue-700 bg-blue-50 rounded-xl p-2 mt-2">💡 {comps[active].contoh}</p>
        </div>
      </Card>
      <Card className="mb-4">
        <h3 className="font-display font-bold text-xl mb-3 text-center">⚙️ Konsep Utama: Bagaimana Gerakan Terjadi?</h3>
        <div className="flex flex-col items-center gap-1 max-w-md mx-auto">
          {[
            { t: "OTOT BERKONTRAKSI", e: "💪", c: "from-rose-500 to-red-500" },
            { t: "MENARIK TULANG", e: "🦴", c: "from-amber-500 to-orange-500" },
            { t: "TULANG BERGERAK PADA SENDI", e: "🔗", c: "from-cyan-500 to-blue-500" },
            { t: "TERJADI GERAKAN! 🎉", e: "🏃", c: "from-emerald-500 to-green-500" },
          ].map((s, i) => (
            <React.Fragment key={s.t}>
              <div className={`w-full text-center text-white font-display font-bold py-3 px-4 rounded-2xl bg-gradient-to-r ${s.c} card-shadow animate-pop-in`} style={{ animationDelay: `${i * 0.15}s` }}>{s.e} {s.t}</div>
              {i < 3 && <div className="text-2xl font-black text-blue-600 animate-bounce">↓</div>}
            </React.Fragment>
          ))}
        </div>
        <p className="text-center font-bold text-slate-500 text-sm mt-3">Ingat alurnya seperti lagu: <span className="text-blue-700">Otot narik — Tulang gerak — Sendi bantu!</span> 🎵</p>
      </Card>
      <div className="flex justify-center"><CompleteButton missionId="gerak" /></div>
    </div>
  );
}

/* ---------- RANGKA ---------- */
function SkeletonRealistis({ selected, onSelect, found }: { selected: string; onSelect: (id: string) => void; found: string[] }) {
  const [zoom, setZoom] = useState(false);
  const [imgOk, setImgOk] = useState(true);
  const sel = TULANG_LIST.find(t => t.id === selected);
  const dots = (big: boolean) => (
    <>
      {TULANG_LIST.map((t, i) => {
        const isSel = selected === t.id;
        const isFound = found.includes(t.id);
        return (
          <button key={t.id} onClick={(e) => { e.stopPropagation(); onSelect(t.id); }}
            className={`absolute rounded-full font-black flex items-center justify-center border-2 transition-all z-10
              ${big ? "w-9 h-9 -ml-4.5 -mt-4.5 text-sm" : "w-7 h-7 -ml-3.5 -mt-3.5 text-[11px]"}
              ${isSel ? "bg-orange-500 text-white border-orange-700 scale-125 shadow-lg shadow-orange-300"
                : isFound ? "bg-green-500 text-white border-green-700 hover:scale-110"
                : "bg-white/95 text-blue-700 border-blue-500 hover:scale-110 animate-pulse"}`}
            style={{ left: `${t.x}%`, top: `${t.y}%`, marginLeft: big ? -18 : -14, marginTop: big ? -18 : -14 }} title={`${i + 1}. ${t.nama}`}>
            {isFound && !isSel ? "✓" : i + 1}
          </button>
        );
      })}
      {sel && (
        <div className="absolute z-20 pointer-events-none animate-pop-in"
          style={{ left: `${sel.x > 55 ? sel.x - 2 : sel.x + 2}%`, top: `${sel.y}%`, transform: `translate(${sel.x > 55 ? "-100%" : "0"}, -50%)` }}>
          <div className="bg-slate-900/90 text-white font-display font-bold text-xs px-3 py-1.5 rounded-xl whitespace-nowrap border border-white/30 shadow-xl">
            {sel.emoji} {sel.nama}
          </div>
        </div>
      )}
    </>
  );
  return (
    <>
      <div className="relative mx-auto w-full max-w-[340px] rounded-3xl border-2 border-amber-300 overflow-hidden card-shadow-lg bg-gradient-to-b from-sky-100 to-blue-200">
        <div className="absolute top-2 left-2 z-30 bg-slate-900/80 text-white text-[10px] font-black px-2.5 py-1 rounded-full">🖼️ RANGKA ASLI • Tampak Depan</div>
        <button onClick={() => setZoom(true)} className="absolute top-2 right-2 z-30 bg-white/90 hover:bg-white text-blue-700 text-[11px] font-black px-2.5 py-1 rounded-full border border-blue-200 shadow">🔍 Perbesar</button>
        {imgOk ? (
          <img src="images/rangka-realistis.png" alt="Susunan rangka manusia tampak depan" className="w-full h-auto block select-none" draggable={false} onError={() => setImgOk(false)} />
        ) : (
          <div className="w-full aspect-[3/4] flex flex-col items-center justify-center text-6xl gap-2">🦴<span className="text-sm font-bold text-slate-500">Memuat gambar rangka...</span></div>
        )}
        {dots(false)}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 bg-white/90 text-slate-600 text-[10px] font-black px-3 py-1 rounded-full border whitespace-nowrap">👆 Klik nomor 1–14 untuk menjelajah</div>
      </div>
      {zoom && (
        <div className="fixed inset-0 z-[90] bg-slate-900/85 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setZoom(false)}>
          <div className="relative max-w-[520px] w-full animate-pop-in" onClick={e => e.stopPropagation()}>
            <div className="relative rounded-3xl overflow-hidden border-4 border-white/40 shadow-2xl">
              {imgOk && <img src="images/rangka-realistis.png" alt="Rangka manusia diperbesar" className="w-full h-auto block" draggable={false} />}
              {dots(true)}
            </div>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex-1 bg-white/95 rounded-2xl px-4 py-2.5 font-bold text-sm text-slate-700">{sel?.emoji} <b>{sel?.nama}</b> — <span className="font-semibold text-slate-500">{sel?.lokasi}</span></div>
              <button onClick={() => setZoom(false)} className="bg-white font-display font-bold px-5 py-2.5 rounded-2xl hover:bg-slate-100">✕ Tutup</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function RangkaPage() {
  const [sel, setSel] = useState("lengan-atas");
  const [found, setFound] = useState<string[]>(["lengan-atas"]);
  const [jenisTab, setJenisTab] = useState(0);
  const { addXP } = useStore();
  const t = TULANG_LIST.find(x => x.id === sel)!;
  const idx = TULANG_LIST.findIndex(x => x.id === sel);
  const pick = (id: string) => {
    setSel(id);
    if (!found.includes(id)) {
      setFound(p => [...p, id]);
      addXP(10, `Menemukan tulang: ${TULANG_LIST.find(x => x.id === id)?.nama}`);
    }
  };
  return (
    <div>
      <PageHeader icon="🦴" title="Rangka Manusia" sub="MISSION 02 — Jelajahi gambar rangka realistis! Klik 14 titik bernomor, atau perbesar gambarnya." color="from-amber-500 to-orange-500" />
      <div className="grid lg:grid-cols-[300px_1fr_280px] gap-4 mb-4">
        <Card className="order-2 lg:order-1">
          <h4 className="font-display font-bold mb-2 text-sm">📋 Daftar Tulang ({found.length}/14 ditemukan)</h4>
          <ProgressBar value={(found.length / 14) * 100} color="from-amber-400 to-orange-500" height="h-2.5" />
          <div className="mt-2 max-h-[420px] overflow-y-auto space-y-1.5 pr-1">
            {TULANG_LIST.map((x, i) => (
              <button key={x.id} onClick={() => pick(x.id)} className={`w-full text-left text-xs font-bold p-2 rounded-xl border-2 flex items-center gap-2 ${sel === x.id ? "bg-orange-100 border-orange-400" : found.includes(x.id) ? "bg-green-50 border-green-200" : "bg-slate-50 border-slate-200"}`}>
                <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-[10px] shrink-0">{i + 1}</span>
                <span className="flex-1">{x.nama}</span>
                {found.includes(x.id) && <span>✓</span>}
              </button>
            ))}
          </div>
        </Card>
        <div className="order-1 lg:order-2"><SkeletonRealistis selected={sel} onSelect={pick} found={found} />
          <div className="flex items-center justify-between mt-2">
            <button onClick={() => pick(TULANG_LIST[Math.max(0, idx - 1)].id)} className="bg-white border-2 border-blue-200 font-bold text-sm px-4 py-2 rounded-xl hover:bg-blue-50">← Kembali</button>
            <span className="font-display font-bold text-sm">{idx + 1}/14</span>
            <button onClick={() => pick(TULANG_LIST[Math.min(13, idx + 1)].id)} className="bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded-xl hover:bg-blue-700">Selanjutnya →</button>
          </div>
        </div>
        <Card className="order-3 bg-gradient-to-b from-orange-50 to-white border-2 border-orange-200">
          <div className="text-5xl text-center mb-2 animate-wiggle">{t.emoji}</div>
          <h4 className="font-display font-bold text-lg text-center">{t.nama}</h4>
          <div className="space-y-2 mt-3 text-sm">
            <div className="bg-white rounded-xl p-2.5 border"><span className="font-black text-blue-700">📍 Lokasi: </span><span className="font-semibold">{t.lokasi}</span></div>
            <div className="bg-white rounded-xl p-2.5 border"><span className="font-black text-emerald-700">⚙️ Fungsi: </span><span className="font-semibold">{t.fungsi}</span></div>
            <div className="bg-white rounded-xl p-2.5 border"><span className="font-black text-orange-700">🦴 Jenis: </span><span className="font-semibold">{t.jenis}</span></div>
          </div>
        </Card>
      </div>
      <Card className="mb-4">
        <h3 className="font-display font-bold text-xl mb-3">🧩 Jenis-Jenis Tulang</h3>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {JENIS_TULANG.map((j, i) => (
            <button key={j.id} onClick={() => setJenisTab(i)} className={`shrink-0 px-4 py-2.5 rounded-2xl font-display font-bold text-sm border-2 ${jenisTab === i ? "bg-blue-600 text-white border-blue-600" : "bg-slate-100 border-slate-200"}`}>{j.emoji} {j.nama}</button>
          ))}
        </div>
        <div className="animate-pop-in bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-4 border-2 border-blue-100 mt-2" key={jenisTab}>
          <div className="font-display font-bold text-lg">{JENIS_TULANG[jenisTab].emoji} {JENIS_TULANG[jenisTab].nama}</div>
          <p className="font-semibold text-sm text-slate-600 mt-1"><b>Ciri:</b> {JENIS_TULANG[jenisTab].ciri}</p>
          <p className="font-bold text-sm text-blue-700 bg-blue-100 rounded-xl p-2 mt-2">📌 Contoh: {JENIS_TULANG[jenisTab].contoh}</p>
        </div>
      </Card>
      <div className="flex justify-center"><CompleteButton missionId="rangka" /></div>
    </div>
  );
}

/* ---------- SENDI ---------- */
export function SendiPage({ go }: { go: (r: string) => void }) {
  const [sel, setSel] = useState(0);
  const [angle, setAngle] = useState(120);
  const j = JENIS_SENDI[sel];
  return (
    <div>
      <PageHeader icon="🔗" title="Sendi" sub="MISSION 03 — Tempat bertemunya tulang yang membuat gerakan mungkin!" color="from-teal-500 to-cyan-600" />
      <Card className="mb-4 bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Art name="joint" className="w-full sm:w-40 h-32 sm:h-36 rounded-2xl shrink-0 shadow-md" title="Model sendi siku tiga dimensi" />
          <p className="font-semibold text-slate-700"><b className="text-teal-700">Sendi</b> adalah tempat bertemunya dua tulang. Coba bayangkan pintu tanpa engsel — tidak bisa dibuka! Begitu juga tubuh tanpa sendi. Yuk kenali 4 jenis sendi:</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mt-3">
          {JENIS_SENDI.map((s, i) => (
            <button key={s.id} onClick={() => setSel(i)} className={`rounded-2xl p-3 border-2 text-left transition-all ${sel === i ? "border-teal-500 bg-white card-shadow-lg scale-[1.03]" : "border-transparent bg-white/70 hover:bg-white"}`}>
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.warna} flex items-center justify-center text-2xl mb-1.5`}>{s.emoji}</div>
              <div className="font-display font-bold text-sm">{s.nama}</div>
              <div className="text-[11px] font-bold text-slate-500">{s.contoh}</div>
            </button>
          ))}
        </div>
        <div className="animate-pop-in mt-3 bg-white rounded-2xl p-4 border-2 border-teal-200" key={sel}>
          <div className="font-display font-bold text-lg">{j.emoji} {j.nama}</div>
          <p className="font-semibold text-sm mt-1">🎯 <b>Gerakan:</b> {j.gerak}</p>
          <p className="font-semibold text-sm">📍 <b>Contoh:</b> {j.contoh}</p>
          <p className="text-sm font-bold text-teal-700 bg-teal-50 rounded-xl p-2 mt-2">🙋 Coba sekarang: {j.cara}</p>
        </div>
      </Card>
      <Card className="mb-4">
        <h3 className="font-display font-bold text-xl mb-1">🔬 Simulasi Sendi Siku (Engsel)</h3>
        <p className="text-sm font-semibold text-slate-500 mb-3">Geser slider dan lihat tulang lengan menekuk!</p>
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl p-4 border-2 border-blue-100 flex items-center justify-center">
            <ElbowSimulation angle={angle} className="w-full max-w-[330px]" />
          </div>
          <div className="text-center">
            <div className="font-display font-bold text-sm text-slate-500">Sudut siku</div>
            <div className="font-display font-black text-6xl text-blue-700">{angle}°</div>
            <input type="range" min={20} max={170} value={angle} onChange={e => setAngle(+e.target.value)} className="w-full mt-2 h-3 cursor-pointer" />
            <div className="flex justify-between text-xs font-black text-slate-400"><span>0° menekuk</span><span>180° lurus</span></div>
            <p className="text-sm font-bold text-teal-700 bg-teal-50 rounded-xl p-2 mt-2">Sendi engsel memungkinkan gerakan menekuk dan meluruskan. {angle < 70 ? "Wah, menekuk penuh! 💪" : angle > 140 ? "Hampir lurus sempurna! 📏" : "Posisi santai. 😊"}</p>
          </div>
        </div>
        <button onClick={() => go("lab")} className="mt-3 w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-display font-bold py-3 rounded-2xl hover:scale-[1.02] transition-transform">🔬 Buka Simulasi Lengkap di Laboratorium →</button>
      </Card>
      <div className="flex justify-center"><CompleteButton missionId="sendi" /></div>
    </div>
  );
}

/* ---------- OTOT ---------- */
export function OtotPage() {
  const [angle, setAngle] = useState(120);
  const flex = angle > 60;
  return (
    <div>
      <PageHeader icon="💪" title="Otot" sub="MISSION 04 — Mesin penggerak tubuh! Kenali bisep & trisep yang kompak." color="from-rose-500 to-orange-500" />
      <Card className="mb-4 bg-gradient-to-br from-rose-50 to-orange-50 border-2 border-rose-200">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Art name="muscle" className="w-full sm:w-40 h-32 sm:h-36 rounded-2xl shrink-0 shadow-md" title="Model otot rangka tiga dimensi" />
          <p className="font-semibold text-slate-700"><b className="text-rose-700">Otot</b> adalah jaringan tubuh yang dapat <span className="bg-yellow-200 px-1 rounded">berkontraksi (memendek)</span> dan membantu menghasilkan gerakan. Ada 3 jenis otot:</p>
        </div>
        <div className="grid md:grid-cols-3 gap-3 mt-3">
          {JENIS_OTOT.map(o => (
            <div key={o.id} className={`rounded-2xl p-4 border-2 ${o.warna}`}>
              <div className="text-4xl mb-1">{o.emoji}</div>
              <div className="font-display font-bold">{o.nama}</div>
              <div className="text-xs font-black text-slate-500">📍 {o.lokasi}</div>
              <p className="text-sm font-semibold mt-1">{o.sifat}</p>
            </div>
          ))}
        </div>
        <p className="text-sm font-bold text-center mt-3 text-rose-700">⭐ Fokus anak SD: Otot rangka — karena inilah yang menggerakkan tulang!</p>
      </Card>
      <Card className="mb-4">
        <h3 className="font-display font-bold text-xl mb-1 text-center">💪 Simulasi Bisep & Trisep</h3>
        <p className="text-sm font-semibold text-slate-500 text-center mb-3">Dua otot yang bekerja bergantian seperti tim hebat! Geser slider-nya, lengan tetap menyambung natural.</p>
        <div className="flex gap-2 justify-center mb-4">
          <button onClick={() => setAngle(120)} className={`px-5 py-3 rounded-2xl font-display font-bold border-2 transition-all ${flex ? "bg-rose-500 text-white border-rose-600 card-shadow" : "bg-slate-100 border-slate-200"}`}>💪 Menekuk Lengan</button>
          <button onClick={() => setAngle(8)} className={`px-5 py-3 rounded-2xl font-display font-bold border-2 transition-all ${!flex ? "bg-blue-500 text-white border-blue-600 card-shadow" : "bg-slate-100 border-slate-200"}`}>🦾 Meluruskan Lengan</button>
        </div>
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border-2 border-slate-200 p-4">
            <MuscleArmSimulation angle={angle} className="w-full max-w-[340px] mx-auto" />
            <div className="text-center font-display font-bold text-sm mt-2">Sudut siku: <span className="text-rose-600 text-lg">{angle}°</span></div>
            <input type="range" min={0} max={130} value={angle} onChange={e => setAngle(+e.target.value)} className="w-full mt-1 cursor-pointer" />
            <div className="flex justify-between text-[11px] font-black text-slate-400"><span>0° lurus</span><span>130° tekuk</span></div>
          </div>
          <div className="space-y-2">
            <div className={`rounded-2xl p-3 border-2 ${flex ? "bg-rose-100 border-rose-400" : "bg-slate-50 border-slate-200 opacity-60"}`}>
              <div className="font-display font-bold">🔴 Bisep {flex ? "— BERKONTRAKSI 💥" : "— rileks"}</div>
              <p className="text-sm font-semibold">{flex ? "Bisep memendek & menegang, menarik tulang lengan bawah ke atas!" : "Bisep sedang istirahat."}</p>
            </div>
            <div className={`rounded-2xl p-3 border-2 ${!flex ? "bg-blue-100 border-blue-400" : "bg-slate-50 border-slate-200 opacity-60"}`}>
              <div className="font-display font-bold">🔵 Trisep {!flex ? "— BERKONTRAKSI 💥" : "— rileks"}</div>
              <p className="text-sm font-semibold">{!flex ? "Trisep memendek & menarik lengan menjadi lurus!" : "Trisep sedang istirahat."}</p>
            </div>
            <p className="text-sm font-bold text-amber-700 bg-amber-50 rounded-xl p-2 border border-amber-200">🤝 Mereka disebut <b>otot antagonis</b>: saat satu bekerja, yang lain istirahat. Kompak sekali!</p>
          </div>
        </div>
      </Card>
      <div className="flex justify-center"><CompleteButton missionId="otot" /></div>
    </div>
  );
}

/* ---------- BERGERAK ---------- */
export function BergerakPage({ go }: { go: (r: string) => void }) {
  const [sel, setSel] = useState(0);
  const [opened, setOpened] = useState<string[]>(["lari"]);
  const { addXP } = useStore();
  const g = GERAKAN[sel];
  const pick = (i: number) => {
    setSel(i);
    if (!opened.includes(GERAKAN[i].id)) { setOpened(p => [...p, GERAKAN[i].id]); addXP(15, `Menganalisis gerakan: ${GERAKAN[i].nama}`); }
  };
  return (
    <div>
      <PageHeader icon="🏃" title="Bagaimana Tubuh Bergerak?" sub="MISSION 05 — Pilih aktivitas dan bongkar rahasia kerja samanya!" color="from-emerald-500 to-teal-500" />
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
        {GERAKAN.map((x, i) => (
          <button key={x.id} onClick={() => pick(i)} className={`rounded-2xl p-3 border-2 transition-all ${sel === i ? "bg-emerald-500 text-white border-emerald-600 card-shadow-lg scale-105" : "bg-white border-slate-200 hover:border-emerald-300 card-shadow"}`}>
            <div className="text-3xl md:text-4xl">{x.emoji}</div>
            <div className="font-display font-bold text-xs md:text-sm mt-1">{x.nama}</div>
            {opened.includes(x.id) && sel !== i && <div className="text-[10px] font-black text-green-600">✓ dianalisis</div>}
          </button>
        ))}
      </div>
      <Card className="mb-4 border-2 border-emerald-200" >
        <div className="animate-pop-in" key={sel}>
          <div className="relative overflow-hidden rounded-2xl h-36 sm:h-44 mb-3">
            <Art name="movement" className="w-full h-full" title="Anak-anak bergerak aktif di taman" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06416d]/45 to-transparent pointer-events-none" />
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-4xl">{g.emoji}</div>
            <div>
              <h3 className="font-display font-bold text-2xl">Analisis: {g.nama}</h3>
              <p className="text-sm font-bold text-slate-500">{opened.length}/6 gerakan dianalisis</p>
            </div>
          </div>
          <ProgressBar value={(opened.length / 6) * 100} color="from-emerald-400 to-teal-500" />
          <div className="grid md:grid-cols-3 gap-2.5 mt-3">
            <div className="bg-amber-50 rounded-2xl p-3 border-2 border-amber-200"><div className="font-display font-bold text-sm">🦴 Tulang yang berperan</div><p className="text-sm font-semibold">{g.tulang}</p></div>
            <div className="bg-cyan-50 rounded-2xl p-3 border-2 border-cyan-200"><div className="font-display font-bold text-sm">🔗 Sendi yang berperan</div><p className="text-sm font-semibold">{g.sendi}</p></div>
            <div className="bg-rose-50 rounded-2xl p-3 border-2 border-rose-200"><div className="font-display font-bold text-sm">💪 Otot yang berperan</div><p className="text-sm font-semibold">{g.otot}</p></div>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-3 border-2 border-emerald-200 mt-2.5"><div className="font-display font-bold text-sm">⚙️ Gerakan yang terjadi</div><p className="text-sm font-semibold">{g.proses}</p></div>
        </div>
      </Card>
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
        <CompleteButton missionId="mekanik" />
        <button onClick={() => go("lab")} className="bg-white border-2 border-emerald-300 text-emerald-700 font-display font-bold px-6 py-3 rounded-2xl hover:bg-emerald-50 flex items-center gap-2"><PersonStanding size={18} /> Lanjut ke Laboratorium</button>
      </div>
    </div>
  );
}

export function IconRow() {
  return (
    <div className="hidden"><Bone /><Link2 /><Dumbbell /><CheckCircle2 /></div>
  );
}
