import { useMemo, useState } from "react";
import { AlertTriangle, FlaskConical, Heart, ShoppingBasket, Stethoscope } from "lucide-react";
import { PageHeader, Card, CompleteButton, Feedback, ProgressBar } from "./components";
import { TULANG_LIST, GERAKAN, PENYAKIT, KESEHATAN, POSTUR_CASES, HABITS, STUDI_KASUS, shuffleArray } from "./data";
import { useStore } from "./store";
import { Art, ElbowSimulation, MuscleArmSimulation, ShoulderSimulation, SpinePoster, type ArtKey, type SpineVariant } from "./art";

const SPINE_TABS: { id: SpineVariant; nama: string; emoji: string }[] = [
  { id: "normal", nama: "Tulang Belakang Sehat", emoji: "✅" },
  { id: "skoliosis", nama: "Skoliosis", emoji: "〰️" },
  { id: "kifosis", nama: "Kifosis", emoji: "🐫" },
  { id: "lordosis", nama: "Lordosis", emoji: "↩️" },
];

const SPINE_NOTES: Record<SpineVariant, { lihat: string; tips: string }> = {
  normal: {
    lihat: "Ruas-ruas tulang tersusun lurus dari atas ke bawah dengan bantalan biru di antaranya. Ini bentuk tulang belakang yang sehat dan seimbang.",
    tips: "Pertahankan dengan duduk tegak, berdiri rileks, dan rajin bergerak.",
  },
  skoliosis: {
    lihat: "Ruas tulang tidak lurus lagi, melainkan berkelok ke kanan lalu ke kiri seperti huruf S. Garis putus-putus abu-abu menunjukkan bentuk lurus yang normal. Panah oranye menunjuk bagian yang berbelok.",
    tips: "Biasakan duduk tegak, jangan membawa tas berat sebelah, dan lakukan peregangan.",
  },
  kifosis: {
    lihat: "Ruas tulang punggung atas melengkung terlalu jauh ke belakang hingga menonjol seperti punuk. Panah oranye menunjuk bagian yang menonjol.",
    tips: "Duduk tegak dengan dada terbuka, atur tinggi meja dan kursi, serta olahraga punggung.",
  },
  lordosis: {
    lihat: "Ruas tulang pinggang melengkung terlalu jauh ke depan hingga cekungannya terlalu dalam. Panah oranye menunjuk bagian pinggang yang maju.",
    tips: "Berdiri tegak, kuatkan otot perut, dan jaga berat badan tetap ideal.",
  },
};

/* ================= LAB ================= */
const LAB_TABS = [
  { id: "sendi", nama: "1. Gerakkan Sendi", emoji: "🔗" },
  { id: "bisep", nama: "2. Bisep & Trisep", emoji: "💪" },
  { id: "tulang", nama: "3. Identifikasi Tulang", emoji: "🦴" },
  { id: "gerak", nama: "4. Analisis Gerakan", emoji: "🏃" },
  { id: "postur", nama: "5. Sehat / Berisiko?", emoji: "🧍" },
];

function ExpSendi({ onScore }: { onScore: (n: number) => void }) {
  const [angle, setAngle] = useState(90);
  const [arm, setArm] = useState(0); // shoulder rotation -60..120
  const [ans, setAns] = useState<number | null>(null);
  const OPTS = useMemo(() => shuffleArray(["Sendi engsel", "Sendi peluru", "Sendi putar", "Sendi geser"]), []);
  const KEY = OPTS.indexOf("Sendi engsel");
  const ok = ans === KEY;
  return (
    <div>
      <p className="font-semibold text-sm bg-blue-50 border border-blue-200 rounded-xl p-3">📋 <b>Instruksi:</b> (1) Geser slider siku & bahu. (2) Perhatikan perubahan sudut. (3) Jawab pertanyaan!</p>
      <div className="grid md:grid-cols-2 gap-3 mt-3">
        <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl p-4 border-2 border-blue-200 text-center">
          <div className="font-display font-bold text-sm mb-1">🔬 Sendi Siku — {angle}°</div>
          <ElbowSimulation angle={angle} className="w-full max-w-[250px] mx-auto" />
          <input type="range" min={20} max={170} value={angle} onChange={e => setAngle(+e.target.value)} className="w-full" />
          <p className="text-xs font-bold text-slate-500">{angle < 70 ? "Menekuk penuh — otot bisep bekerja keras!" : angle > 140 ? "Melurus — trisep yang bekerja!" : "Sendi engsel bergerak satu arah."}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-4 border-2 border-orange-200 text-center">
          <div className="font-display font-bold text-sm mb-1">🔬 Sendi Bahu — {arm}°</div>
          <ShoulderSimulation angle={arm} className="w-full max-w-[225px] mx-auto" />
          <input type="range" min={-120} max={120} value={arm} onChange={e => setArm(+e.target.value)} className="w-full" />
          <div className="flex gap-1.5 justify-center mt-1">
            <button onClick={() => setArm(-100)} className="text-[11px] font-black bg-white border rounded-lg px-2 py-1">⬆️ Angkat</button>
            <button onClick={() => setArm(0)} className="text-[11px] font-black bg-white border rounded-lg px-2 py-1">⬇️ Turun</button>
            <button onClick={() => setArm(90)} className="text-[11px] font-black bg-white border rounded-lg px-2 py-1">↔️ Samping</button>
          </div>
          <p className="text-xs font-bold text-slate-500 mt-1">Sendi peluru bisa ke semua arah seperti joystick! 🕹️</p>
        </div>
      </div>
      <div className="mt-3 bg-white rounded-2xl border-2 border-slate-200 p-3">
        <div className="font-bold text-sm">❓ Siku bisa menekuk & melurus. Jenis sendinya...</div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {OPTS.map((o, i) => (
            <button key={o} onClick={() => { setAns(i); if (i === KEY) onScore(20); }} className={`font-bold text-sm p-2.5 rounded-xl border-2 ${ans === i ? (i === KEY ? "bg-green-100 border-green-400" : "bg-red-50 border-red-300") : "bg-slate-50 border-slate-200 hover:border-blue-300"}`}>{o}</button>
          ))}
        </div>
        <Feedback ok={ans === null ? null : ok} explain="Siku bergerak satu arah seperti pintu — sendi engsel. Bahu yang berputar bebas = sendi peluru!" />
      </div>
    </div>
  );
}

function ExpBisep({ onScore }: { onScore: (n: number) => void }) {
  const [angle, setAngle] = useState(120);
  const [ans, setAns] = useState<number | null>(null);
  const OPTS = useMemo(() => shuffleArray(["Bisep", "Trisep", "Otot betis", "Otot jantung"]), []);
  const KEY = OPTS.indexOf("Bisep");
  const flex = angle > 60;
  return (
    <div>
      <p className="font-semibold text-sm bg-rose-50 border border-rose-200 rounded-xl p-3">📋 <b>Instruksi:</b> (1) Geser slider siku perlahan dari lurus ke tekuk. (2) Perhatikan lengan yang tetap menyambung + otot yang menggelembung. (3) Jawab pertanyaan!</p>
      <div className="flex gap-2 justify-center my-3">
        <button onClick={() => setAngle(120)} className={`px-5 py-2.5 rounded-2xl font-display font-bold border-2 ${flex ? "bg-rose-500 text-white border-rose-600" : "bg-slate-100 border-slate-200"}`}>💪 Menekuk</button>
        <button onClick={() => setAngle(8)} className={`px-5 py-2.5 rounded-2xl font-display font-bold border-2 ${!flex ? "bg-blue-500 text-white border-blue-600" : "bg-slate-100 border-slate-200"}`}>🦾 Meluruskan</button>
      </div>
      <div className="bg-gradient-to-br from-rose-50 to-blue-50 rounded-2xl border-2 border-rose-100 p-3 mb-3">
        <MuscleArmSimulation angle={angle} className="w-full max-w-[320px] mx-auto" />
        <div className="text-center font-display font-bold text-sm mt-1">Sudut tekukan siku: <span className="text-rose-600 text-lg">{angle}°</span></div>
        <input type="range" min={0} max={130} value={angle} onChange={e => setAngle(+e.target.value)} className="w-full mt-1 cursor-pointer" />
        <div className="flex justify-between text-[11px] font-black text-slate-400"><span>0° lurus</span><span>130° tekuk penuh</span></div>
        <p className="text-xs font-bold text-slate-500 mt-1 text-center">{angle < 30 ? "Lengan lurus — trisep menegang, bisep rileks." : angle > 95 ? "Menekuk penuh — bisep menggelembung, lengan tetap menyambung di siku!" : "Lengan bergerak — perhatikan siku yang mulus tanpa terpotong."}</p>
      </div>
      <div className="flex justify-center gap-4 items-center bg-slate-50 rounded-2xl p-4 border-2">
        <div className={`text-center p-3 rounded-2xl border-2 ${flex ? "bg-rose-500 text-white border-rose-700 scale-105" : "bg-white border-slate-200"}`}>
          <div className="text-4xl">{flex ? "💪💥" : "💪"}</div><div className="font-display font-bold text-sm">BISEP</div>
          <div className="text-xs font-bold">{flex ? "Kontraksi!" : "Rileks"}</div>
        </div>
        <div className="text-3xl">🤝</div>
        <div className={`text-center p-3 rounded-2xl border-2 ${!flex ? "bg-blue-500 text-white border-blue-700 scale-105" : "bg-white border-slate-200"}`}>
          <div className="text-4xl">{!flex ? "🦾💥" : "🦾"}</div><div className="font-display font-bold text-sm">TRISEP</div>
          <div className="text-xs font-bold">{!flex ? "Kontraksi!" : "Rileks"}</div>
        </div>
      </div>
      <div className="mt-3 bg-white rounded-2xl border-2 border-slate-200 p-3">
        <div className="font-bold text-sm">❓ Saat menekuk lengan membawa belanjaan, otot yang berkontraksi...</div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {OPTS.map((o, i) => (
            <button key={o} onClick={() => { setAns(i); if (i === KEY) onScore(20); }} className={`font-bold text-sm p-2.5 rounded-xl border-2 ${ans === i ? (i === KEY ? "bg-green-100 border-green-400" : "bg-red-50 border-red-300") : "bg-slate-50 border-slate-200 hover:border-blue-300"}`}>{o}</button>
          ))}
        </div>
        <Feedback ok={ans === null ? null : ans === KEY} explain="Menekuk = bisep kontraksi. Meluruskan = trisep kontraksi. Mereka bergantian!" />
      </div>
    </div>
  );
}

function ExpTulang({ onScore }: { onScore: (n: number) => void }) {
  const [round, setRound] = useState(0);
  const [ans, setAns] = useState<number | null>(null);
  const qs = useMemo(() => {
    const picks = [...TULANG_LIST].sort(() => Math.random() - 0.5).slice(0, 5);
    return picks.map(t => {
      const wrong = [...TULANG_LIST].filter(x => x.id !== t.id).sort(() => Math.random() - 0.5).slice(0, 3).map(x => x.nama);
      const opts = [...wrong, t.nama].sort(() => Math.random() - 0.5);
      return { t, opts, answer: opts.indexOf(t.nama) };
    });
  }, []);
  const q = qs[round % qs.length];
  const next = () => { setRound(r => r + 1); setAns(null); };
  return (
    <div>
      <p className="font-semibold text-sm bg-amber-50 border border-amber-200 rounded-xl p-3">📋 <b>Instruksi:</b> Baca ciri tulangnya, tebak namanya! Putaran {round + 1}.</p>
      <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-4 border-2 border-amber-200 mt-3 text-center">
        <div className="text-5xl">{q.t.emoji}</div>
        <div className="font-bold text-sm mt-2">📍 {q.t.lokasi}</div>
        <div className="font-semibold text-sm text-slate-600">⚙️ {q.t.fungsi}</div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {q.opts.map((o, i) => (
          <button key={o} onClick={() => { if (ans === null) { setAns(i); if (i === q.answer) onScore(20); } }} className={`font-bold text-sm p-2.5 rounded-xl border-2 ${ans === null ? "bg-slate-50 border-slate-200 hover:border-amber-400" : i === q.answer ? "bg-green-100 border-green-400" : ans === i ? "bg-red-50 border-red-300" : "bg-slate-50 border-slate-200"}`}>{o}</button>
        ))}
      </div>
      <Feedback ok={ans === null ? null : ans === q.answer} explain={q.t.nama + " — " + q.t.fungsi} />
      {ans !== null && <button onClick={next} className="mt-2 w-full bg-amber-500 text-white font-display font-bold py-2.5 rounded-2xl">Soal Berikutnya →</button>}
    </div>
  );
}

function ExpGerak({ onScore }: { onScore: (n: number) => void }) {
  const [sel, setSel] = useState(0);
  const [ans, setAns] = useState<number | null>(null);
  const g = GERAKAN[sel];
  const answerText: Record<string, string> = { lari: "Kaki (lutut & panggul)", lompat: "Kaki (lutut & panggul)", tendang: "Kaki (lutut & panggul)", tulis: "Jari & pergelangan tangan", angkat: "Lengan (siku & bahu)", jalan: "Kaki (lutut & panggul)" };
  const opts = useMemo(() => shuffleArray(["Kaki (lutut & panggul)", "Lengan (siku & bahu)", "Leher (sendi putar)", "Jari & pergelangan tangan"]), []);
  const KEY = opts.indexOf(answerText[g.id]);
  return (
    <div>
      <p className="font-semibold text-sm bg-emerald-50 border border-emerald-200 rounded-xl p-3">📋 <b>Instruksi:</b> Pilih aktivitas, baca analisisnya, lalu jawab bagian yang paling berperan!</p>
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-2">
        {GERAKAN.map((x, i) => (
          <button key={x.id} onClick={() => { setSel(i); setAns(null); }} className={`shrink-0 px-3 py-2 rounded-xl font-bold text-sm border-2 ${sel === i ? "bg-emerald-500 text-white border-emerald-600" : "bg-white border-slate-200"}`}>{x.emoji} {x.nama}</button>
        ))}
      </div>
      <div className="bg-emerald-50 rounded-2xl p-3 border-2 border-emerald-200 text-sm font-semibold">
        <b>{g.emoji} {g.nama}:</b> {g.proses}<br />
        <span className="text-xs">🦴 {g.tulang} • 🔗 {g.sendi}</span>
      </div>
      <div className="font-bold text-sm mt-2">❓ Bagian tubuh yang PALING berperan saat {g.nama.toLowerCase()}...</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
        {opts.map((o, i) => (
          <button key={o} onClick={() => { setAns(i); if (i === KEY) onScore(20); }} className={`font-bold text-sm p-2.5 rounded-xl border-2 text-left ${ans === i ? (i === KEY ? "bg-green-100 border-green-400" : "bg-red-50 border-red-300") : "bg-slate-50 border-slate-200 hover:border-emerald-400"}`}>{o}</button>
        ))}
      </div>
      <Feedback ok={ans === null ? null : ans === KEY} explain={g.otot + ". " + g.proses} />
    </div>
  );
}

function ExpPostur({ onScore }: { onScore: (n: number) => void }) {
  const [i, setI] = useState(0);
  const [ans, setAns] = useState<boolean | null>(null);
  const c = POSTUR_CASES[i];
  const next = () => { setI(v => (v + 1) % POSTUR_CASES.length); setAns(null); };
  return (
    <div>
      <p className="font-semibold text-sm bg-violet-50 border border-violet-200 rounded-xl p-3">📋 <b>Instruksi:</b> Amati kebiasaan ini — sehat atau berisiko? ({i + 1}/{POSTUR_CASES.length})</p>
      <div className="bg-white rounded-2xl border-2 border-slate-200 p-4 mt-3 text-center">
        <div className="text-6xl">{c.emoji}</div>
        <div className="font-display font-bold text-lg mt-1">{c.judul}</div>
        <p className="font-semibold text-sm text-slate-600">{c.desc}</p>
        <div className="flex gap-2 justify-center mt-3">
          <button onClick={() => { if (ans === null) { setAns(true); if (c.baik) onScore(20); } }} className={`px-5 py-2.5 rounded-2xl font-display font-bold border-2 ${ans === true ? (c.baik ? "bg-green-500 text-white border-green-600" : "bg-red-400 text-white border-red-500") : "bg-green-50 border-green-300 hover:bg-green-100"}`}>✅ Sehat</button>
          <button onClick={() => { if (ans === null) { setAns(false); if (!c.baik) onScore(20); } }} className={`px-5 py-2.5 rounded-2xl font-display font-bold border-2 ${ans === false ? (!c.baik ? "bg-green-500 text-white border-green-600" : "bg-red-400 text-white border-red-500") : "bg-amber-50 border-amber-300 hover:bg-amber-100"}`}>⚠️ Berisiko</button>
        </div>
        <Feedback ok={ans === null ? null : ans === c.baik} explain={c.feedback} />
        {ans !== null && <button onClick={next} className="mt-2 bg-violet-500 text-white font-display font-bold px-6 py-2 rounded-2xl">Kasus Berikutnya →</button>}
      </div>
    </div>
  );
}

export function LabPage() {
  const [tab, setTab] = useState("sendi");
  const [score, setScore] = useState(0);
  const [done, setDone] = useState<string[]>([]);
  const { addXP } = useStore();
  const onScore = (n: number) => {
    setScore(s => s + n);
    addXP(n, "Eksperimen lab berhasil");
    if (!done.includes(tab)) setDone(d => [...d, tab]);
  };
  return (
    <div>
      <PageHeader icon="🔬" title="Laboratorium Sistem Gerak" sub="MISSION 06 — 5 eksperimen seru! Kumpulkan skor dengan menjawab benar." color="from-indigo-600 to-blue-500" />
      <div className="h-40 md:h-52 rounded-3xl overflow-hidden mb-4 card-shadow-lg"><Art name="lab" className="w-full h-full" title="Laboratorium sains dengan siswi berhijab panjang dan bergamis" /></div>
      <Card className="mb-3 flex flex-col md:flex-row items-center gap-3">
        <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-display font-bold px-4 py-2 rounded-2xl"><FlaskConical size={18} /> Skor Lab: {score}</div>
        <div className="flex-1 w-full"><ProgressBar value={(done.length / 5) * 100} color="from-indigo-400 to-blue-500" /><div className="text-xs font-bold text-slate-500 mt-1">{done.length}/5 eksperimen selesai {done.length === 5 && "🎉 Luar biasa, Ilmuwan Cilik!"}</div></div>
      </Card>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-3">
        {LAB_TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`shrink-0 px-4 py-2.5 rounded-2xl font-display font-bold text-sm border-2 flex items-center gap-1.5 ${tab === t.id ? "bg-indigo-600 text-white border-indigo-600" : "bg-white border-slate-200 card-shadow"} ${done.includes(t.id) ? "ring-2 ring-green-400" : ""}`}>
            {t.emoji} {t.nama} {done.includes(t.id) && "✓"}
          </button>
        ))}
      </div>
      <Card className="mb-4 min-h-[300px]">
        {tab === "sendi" && <ExpSendi onScore={onScore} />}
        {tab === "bisep" && <ExpBisep onScore={onScore} />}
        {tab === "tulang" && <ExpTulang onScore={onScore} />}
        {tab === "gerak" && <ExpGerak onScore={onScore} />}
        {tab === "postur" && <ExpPostur onScore={onScore} />}
      </Card>
      <div className="flex justify-center"><CompleteButton missionId="lab" xp={150} /></div>
    </div>
  );
}

/* ================= PENYAKIT ================= */
export function PenyakitPage() {
  const [sel, setSel] = useState(0);
  const [ans, setAns] = useState<number | null>(null);
  const [boneTab, setBoneTab] = useState<"sehat" | "rapuh">("sehat");
  const [spineTab, setSpineTab] = useState<SpineVariant>("normal");
  const p = PENYAKIT[sel];
  const diseaseArt: ArtKey = ["skoliosis", "kifosis", "lordosis"].includes(p.id)
    ? "spine"
    : ["keseleo", "artritis"].includes(p.id)
      ? "joint"
      : p.id === "cedera-otot" ? "muscle" : "bone";
  const { addXP } = useStore();
  const pick = (i: number) => { setSel(i); setAns(null); };
  return (
    <div>
      <PageHeader icon="🩺" title="Penyakit & Gangguan Sistem Gerak" sub="MISSION 07 — Kenali agar bisa mencegah! Disampaikan dengan bahasa ramah anak." color="from-teal-600 to-emerald-500" />
      <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-3 mb-4 text-sm font-semibold flex gap-2 items-start">
        <AlertTriangle className="shrink-0 text-blue-600" size={20} />
        <span><b>Catatan penting:</b> Halaman ini hanya untuk belajar, bukan untuk mendiagnosis penyakit. Jika mengalami cedera atau keluhan serius, <b>beri tahu orang tua/guru dan mintalah bantuan tenaga kesehatan</b>. 🏥</span>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-9 gap-2 mb-4">
        {PENYAKIT.map((x, i) => (
          <button key={x.id} onClick={() => pick(i)} className={`rounded-2xl p-2.5 border-2 transition-all ${sel === i ? "bg-teal-600 text-white border-teal-700 scale-105 card-shadow" : "bg-white border-slate-200 hover:border-teal-300 card-shadow"}`}>
            <div className="text-2xl md:text-3xl">{x.emoji}</div>
            <div className="font-display font-bold text-[10px] md:text-xs leading-tight mt-1">{x.nama}</div>
          </button>
        ))}
      </div>
      <Card className="mb-4 border-2 border-teal-200">
        <div className="animate-pop-in" key={sel}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-3">
            {["skoliosis", "kifosis", "lordosis"].includes(p.id) ? (
              <div className="w-full sm:w-44 rounded-2xl shrink-0 shadow-md border-2 border-teal-100 bg-gradient-to-b from-teal-50 to-white p-2">
                <SpinePoster variant={p.id as SpineVariant} className="w-full h-44 sm:h-52" />
              </div>
            ) : (
              <Art name={diseaseArt} className="w-full sm:w-36 h-36 sm:h-36 rounded-2xl shrink-0 shadow-md border border-teal-100" title={`Ilustrasi bagian sistem gerak yang berkaitan dengan ${p.nama}`} />
            )}
            <div>
              <h3 className="font-display font-bold text-2xl flex items-center gap-2"><Stethoscope size={22} className="text-teal-600" /> {p.nama}</h3>
              <p className="text-sm font-bold text-slate-500">Gangguan #{sel + 1} dari 9</p>
              <div className="bg-slate-50 rounded-2xl p-3 border text-sm font-semibold mt-2">📚 <b>Penjelasan:</b> {p.penjelasan}</div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="bg-red-50 rounded-2xl p-3 border-2 border-red-200 text-sm"><div className="font-display font-bold">🦴 Bagian terdampak</div><p className="font-semibold">{p.bagian}</p></div>
            <div className="bg-amber-50 rounded-2xl p-3 border-2 border-amber-200 text-sm"><div className="font-display font-bold">⚠️ Faktor yang berkaitan</div><p className="font-semibold">{p.faktor}</p></div>
            <div className="bg-green-50 rounded-2xl p-3 border-2 border-green-200 text-sm"><div className="font-display font-bold">❤️ Cara menjaga</div><p className="font-semibold">{p.jaga}</p></div>
          </div>
          <div className="mt-3 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-3 border-2 border-teal-200">
            <div className="font-display font-bold text-sm">🔎 Mini-kuis: {p.quiz.q}</div>
            <div className="grid md:grid-cols-2 gap-2 mt-2">
              {p.quiz.options.map((o, i) => (
                <button key={o} onClick={() => { if (ans === null) { setAns(i); if (i === p.quiz.answer) addXP(20, `Mini-kuis ${p.nama} benar`); } }} className={`text-left font-bold text-sm p-2.5 rounded-xl border-2 ${ans === null ? "bg-white border-slate-200 hover:border-teal-400" : i === p.quiz.answer ? "bg-green-100 border-green-400" : ans === i ? "bg-red-50 border-red-300" : "bg-white border-slate-200"}`}>
                  {["A", "B", "C", "D"][i]}. {o}
                </button>
              ))}
            </div>
            <Feedback ok={ans === null ? null : ans === p.quiz.answer} explain={p.quiz.explain} />
          </div>
          <div className="flex justify-between mt-3">
            <button onClick={() => pick(Math.max(0, sel - 1))} className="bg-white border-2 border-teal-200 font-bold text-sm px-4 py-2 rounded-xl">← Kembali</button>
            <button onClick={() => pick(Math.min(PENYAKIT.length - 1, sel + 1))} className="bg-teal-600 text-white font-bold text-sm px-4 py-2 rounded-xl">Selanjutnya →</button>
          </div>
        </div>
      </Card>
      <Card className="mb-4 border-2 border-teal-200">
        <h3 className="font-display font-bold text-xl text-center">🦴 Perbandingan Tulang Belakang 3D</h3>
        <p className="text-sm font-semibold text-center text-slate-500 mb-3">Hanya gambar tulangnya saja. Garis <b className="text-slate-500">putus-putus abu-abu</b> = bentuk normal. Ruas bertanda <b className="text-rose-600">merah</b> + panah oranye = bagian yang berubah.</p>
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {SPINE_TABS.map(t => (
            <button key={t.id} onClick={() => setSpineTab(t.id)} className={`px-4 py-2.5 rounded-2xl font-display font-bold text-sm border-2 transition-all ${spineTab === t.id ? "bg-teal-600 text-white border-teal-700 shadow-lg" : "bg-white border-slate-200 hover:border-teal-300"}`}>{t.emoji} {t.nama}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-[240px_1fr] gap-4 items-center animate-pop-in" key={spineTab}>
          <div className="rounded-3xl border-2 border-teal-100 bg-gradient-to-b from-teal-50 to-white p-3 mx-auto w-[220px] md:w-full">
            <SpinePoster variant={spineTab} className="w-full h-[300px]" />
          </div>
          <div className="space-y-2">
            <div className={`rounded-2xl p-3 border-2 ${spineTab === "normal" ? "bg-green-50 border-green-300" : "bg-rose-50 border-rose-200"}`}>
              <div className="font-display font-bold">{SPINE_TABS.find(t => t.id === spineTab)?.emoji} Apa yang terlihat?</div>
              <p className="text-sm font-semibold text-slate-700 mt-1">{SPINE_NOTES[spineTab].lihat}</p>
            </div>
            <div className="rounded-2xl p-3 border-2 bg-blue-50 border-blue-200">
              <div className="font-display font-bold">❤️ Cara menjaga / pencegahan</div>
              <p className="text-sm font-semibold text-slate-700 mt-1">{SPINE_NOTES[spineTab].tips}</p>
            </div>
            <p className="text-xs font-bold text-slate-500">🎨 Gambar ini adalah ilustrasi sederhana untuk belajar, bukan foto atau hasil pemeriksaan medis. Bila ada keluhan pada tulang belakang, beri tahu orang tua atau guru.</p>
          </div>
        </div>
      </Card>
      <Card className="mb-4">
        <h3 className="font-display font-bold text-xl mb-2 text-center">🦴 Tulang Sehat vs Tulang Rapuh</h3>
        <p className="text-sm font-semibold text-center text-slate-500 mb-3">Klik masing-masing tulang untuk melihat perbedaannya!</p>
        <div className="grid md:grid-cols-2 gap-3">
          <button onClick={() => setBoneTab("sehat")} className={`rounded-2xl p-4 border-2 text-center ${boneTab === "sehat" ? "border-green-500 bg-green-50" : "border-slate-200 bg-slate-50"}`}>
            <Art name="bone" className="w-full h-32 max-w-[220px] mx-auto rounded-xl shadow-sm" title="Model tulang sehat yang padat" />
            <div className="font-display font-bold text-green-700 mt-1">🦴 Tulang Sehat — Padat & Kuat</div>
            {boneTab === "sehat" && <p className="text-sm font-semibold mt-1 animate-pop-in">Tulang sehat padat seperti kayu kuat! Didapat dari susu, ikan, sayur, olahraga, dan berjemur pagi. 💪</p>}
          </button>
          <button onClick={() => setBoneTab("rapuh")} className={`rounded-2xl p-4 border-2 text-center ${boneTab === "rapuh" ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50"}`}>
            <div className="relative w-full h-32 max-w-[220px] mx-auto rounded-xl overflow-hidden shadow-sm">
              <Art name="bone" className="w-full h-full grayscale-[.25] opacity-75" title="Model tulang rapuh sebagai perbandingan" />
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle,rgba(126,69,44,.72) 0 3px,transparent 4px)", backgroundSize: "27px 23px", maskImage: "radial-gradient(ellipse 35% 37% at 52% 50%, black, transparent)" }} />
            </div>
            <div className="font-display font-bold text-red-600 mt-1">🦴 Tulang Rapuh — Keropos</div>
            {boneTab === "rapuh" && <p className="text-sm font-semibold mt-1 animate-pop-in">Tulang rapuh berlubang seperti spons dan mudah patah. Cegah dengan kalsium & gerak aktif! 🧽</p>}
          </button>
        </div>
      </Card>
      <div className="flex justify-center"><CompleteButton missionId="penyakit" xp={150} /></div>
    </div>
  );
}

/* ================= SEHAT ================= */
function BasketGame() {
  const [basket, setBasket] = useState<string[]>([]);
  const [msg, setMsg] = useState<string | null>(null);
  const { addXP } = useStore();
  const remaining = HABITS.filter(h => !basket.includes(h.id));
  const correct = basket.filter(id => HABITS.find(h => h.id === id)?.sehat).length;
  const wrong = basket.filter(id => !HABITS.find(h => h.id === id)?.sehat).length;
  const add = (id: string) => {
    const h = HABITS.find(x => x.id === id)!;
    setBasket(b => [...b, id]);
    if (h.sehat) { setMsg(`✅ ${h.t} — pilihan sehat! +10 XP`); addXP(10, "Memilih kebiasaan sehat"); }
    else setMsg(`⚠️ ${h.t} — kurang sehat, sebaiknya dihindari!`);
  };
  const reset = () => { setBasket([]); setMsg(null); };
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border-2 border-green-200">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
        <h4 className="font-display font-bold flex items-center gap-2"><ShoppingBasket size={20} /> 🧺 Pilih Kebiasaan Sehat</h4>
        <div className="flex gap-2 text-xs font-black">
          <span className="bg-green-500 text-white px-3 py-1.5 rounded-full">✅ {correct}</span>
          <span className="bg-red-400 text-white px-3 py-1.5 rounded-full">⚠️ {wrong}</span>
          <button onClick={reset} className="bg-white border px-3 py-1.5 rounded-full">🔄 Ulangi</button>
        </div>
      </div>
      <p className="text-sm font-semibold text-slate-600 mb-2">Klik kebiasaan <b>sehat</b> untuk memasukkannya ke keranjang! Hati-hati, ada jebakan! 🎯</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {remaining.map(h => (
          <button key={h.id} onClick={() => add(h.id)} className="bg-white border-2 border-slate-200 hover:border-green-400 rounded-2xl px-3 py-2 font-bold text-sm transition-all hover:scale-105">{h.e} {h.t}</button>
        ))}
        {remaining.length === 0 && <p className="font-display font-bold text-green-700">🎉 Keranjang penuh! Kamu sudah memilih semua. Skor: {correct} sehat, {wrong} kurang sehat.</p>}
      </div>
      <div className="bg-amber-100 border-2 border-amber-300 border-dashed rounded-2xl p-3 min-h-[70px]">
        <div className="font-display font-bold text-sm text-amber-800 mb-1">🧺 Keranjang Sehatmu ({basket.length}):</div>
        <div className="flex flex-wrap gap-1.5">
          {basket.map(id => { const h = HABITS.find(x => x.id === id)!; return <span key={id} className={`text-xs font-bold px-2.5 py-1.5 rounded-full ${h.sehat ? "bg-green-500 text-white" : "bg-red-400 text-white"}`}>{h.e} {h.t}</span>; })}
          {basket.length === 0 && <span className="text-sm font-semibold text-amber-600">Keranjang masih kosong... ayo isi dengan kebiasaan sehat! 🥦</span>}
        </div>
      </div>
      {msg && <div className="animate-pop-in mt-2 font-bold text-sm bg-white rounded-xl p-2 border" key={msg}>{msg}</div>}
    </div>
  );
}

function PosturMission() {
  const [i, setI] = useState(0);
  const [ans, setAns] = useState<boolean | null>(null);
  const [skor, setSkor] = useState(0);
  const c = POSTUR_CASES[i];
  const { addXP } = useStore();
  return (
    <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-4 border-2 border-violet-200">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-display font-bold">🧍 Misi Postur Tubuh</h4>
        <span className="font-display font-bold text-sm bg-violet-500 text-white px-3 py-1 rounded-full">Skor: {skor}</span>
      </div>
      <div className="text-center bg-white rounded-2xl p-4 border-2">
        <div className="text-6xl animate-floaty">{c.emoji}</div>
        <div className="font-display font-bold">{c.judul} ({i + 1}/{POSTUR_CASES.length})</div>
        <p className="text-sm font-semibold text-slate-600">{c.desc}</p>
        <div className="flex gap-2 justify-center mt-2">
          <button onClick={() => { if (ans === null) { setAns(true); if (c.baik) { setSkor(s => s + 20); addXP(10, "Postur benar"); } } }} className="px-5 py-2.5 rounded-2xl font-display font-bold text-sm bg-green-100 border-2 border-green-300 hover:bg-green-200">✅ Kebiasaan baik</button>
          <button onClick={() => { if (ans === null) { setAns(false); if (!c.baik) { setSkor(s => s + 20); addXP(10, "Postur benar"); } } }} className="px-5 py-2.5 rounded-2xl font-display font-bold text-sm bg-amber-100 border-2 border-amber-300 hover:bg-amber-200">⚠️ Perlu diperbaiki</button>
        </div>
        <Feedback ok={ans === null ? null : ans === c.baik} explain={c.feedback} />
        {ans !== null && <button onClick={() => { setI((i + 1) % POSTUR_CASES.length); setAns(null); }} className="mt-2 bg-violet-500 text-white font-bold text-sm px-5 py-2 rounded-xl">Lanjut →</button>}
      </div>
    </div>
  );
}

function StudiKasus() {
  const [sel, setSel] = useState(0);
  const [ans, setAns] = useState<number | null>(null);
  const k = STUDI_KASUS[sel];
  const { addXP } = useStore();
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border-2 border-blue-200">
      <h4 className="font-display font-bold mb-2">📖 Studi Kasus Kehidupan Sehari-hari</h4>
      <div className="flex gap-2 mb-2">
        {STUDI_KASUS.map((x, i) => (
          <button key={x.id} onClick={() => { setSel(i); setAns(null); }} className={`flex-1 px-2 py-2 rounded-xl font-bold text-xs border-2 ${sel === i ? "bg-blue-600 text-white border-blue-600" : "bg-white border-slate-200"}`}>{x.emoji} Kasus {i + 1}</button>
        ))}
      </div>
      <div className="bg-white rounded-2xl p-3 border-2" key={sel}>
        <div className="font-display font-bold">{k.judul}</div>
        <p className="text-sm font-semibold text-slate-600 mt-1">{k.cerita}</p>
        <p className="font-bold text-sm mt-2">❓ {k.tanya}</p>
        <div className="space-y-1.5 mt-2">
          {k.options.map((o, i) => (
            <button key={o} onClick={() => { if (ans === null) { setAns(i); if (i === k.answer) addXP(20, "Studi kasus benar"); } }} className={`w-full text-left text-sm font-bold p-2.5 rounded-xl border-2 ${ans === null ? "bg-slate-50 border-slate-200 hover:border-blue-300" : i === k.answer ? "bg-green-100 border-green-400" : ans === i ? "bg-red-50 border-red-300" : "bg-slate-50 border-slate-200"}`}>{o}</button>
          ))}
        </div>
        <Feedback ok={ans === null ? null : ans === k.answer} explain={k.explain} />
      </div>
      <p className="mt-2 text-xs font-bold text-blue-800 bg-blue-100 rounded-xl p-2">🏥 Jika mengalami cedera atau keluhan yang serius, beri tahu orang tua/guru dan mintalah bantuan tenaga kesehatan.</p>
    </div>
  );
}

export function SehatPage() {
  const { s, setRefleksi, addXP } = useStore();
  const [saved, setSaved] = useState(false);
  const [draft, setDraft] = useState(s.refleksi);
  return (
    <div>
      <PageHeader icon="❤️" title="Menjaga Kesehatan Sistem Gerak" sub="MISSION 08 — 11 kebiasaan hebat + game keranjang + misi postur!" color="from-rose-500 to-pink-500" />
      <div className="h-40 md:h-56 rounded-3xl overflow-hidden mb-4 card-shadow-lg"><Art name="health" className="w-full h-full" title="Anak perempuan bergamis dan berhijab panjang berolahraga bersama teman" /></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-4">
        {KESEHATAN.map((k, i) => (
          <div key={k.t} className="bg-white rounded-2xl p-3 border-2 border-slate-100 card-shadow flex gap-3 items-start hover:border-rose-200 transition-all">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center text-2xl shrink-0">{k.e}</div>
            <div><div className="font-display font-bold text-sm">{i + 1}. {k.t}</div><p className="text-xs font-semibold text-slate-500">{k.d}</p></div>
          </div>
        ))}
      </div>
      <Card className="mb-4"><BasketGame /></Card>
      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        <Card><PosturMission /></Card>
        <Card><StudiKasus /></Card>
      </div>
      <Card className="mb-4 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200">
        <h3 className="font-display font-bold text-xl flex items-center gap-2"><Heart className="text-emerald-600" /> 🌱 Tubuhku Adalah Amanah</h3>
        <p className="font-semibold text-slate-700 mt-2 bg-white rounded-2xl p-3 border italic">“Tubuh yang Allah berikan kepada kita adalah amanah. Kita perlu menjaganya dengan makanan yang baik, aktivitas yang sehat, kebersihan, istirahat, dan kebiasaan yang baik.” 🤲</p>
        <p className="font-bold text-sm mt-2">🪞 Refleksi: “Bagaimana cara kamu menjaga tubuh sebagai bentuk rasa syukur kepada Allah?”</p>
        <textarea value={draft} onChange={e => setDraft(e.target.value)} rows={3} placeholder="Tulis jawabanmu di sini, misalnya: Aku akan olahraga, makan sayur, dan tidur cukup..." className="w-full mt-2 rounded-2xl border-2 border-emerald-200 p-3 font-semibold text-sm focus:border-emerald-400 outline-none" />
        <button onClick={() => { setRefleksi(draft); setSaved(true); addXP(30, "Menulis refleksi syukur"); }} className="mt-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-display font-bold px-6 py-2.5 rounded-2xl">💾 Simpan Refleksiku (+30 XP)</button>
        {saved && <div className="animate-pop-in mt-2 font-bold text-sm text-emerald-700 bg-emerald-100 rounded-xl p-2">🎉 MasyaAllah, jawabanmu tersimpan! Terus jaga amanah tubuhmu ya. ❤️</div>}
      </Card>
      <div className="flex justify-center"><CompleteButton missionId="sehat" xp={150} /></div>
    </div>
  );
}
