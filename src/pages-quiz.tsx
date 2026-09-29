import { useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, Clock, Flag, Gamepad2, Medal, RotateCcw, Trophy } from "lucide-react";
import { PageHeader, Card, Feedback, ProgressBar, QuizOption } from "./components";
import { LATIHAN_L1, LATIHAN_L2, LATIHAN_L3, KUIS_MASTER, TULANG_LIST, MATCH_PAIRS, SIAPA_BEKERJA, PENYAKIT, HABITS, JENIS_SENDI, type Q } from "./data";
import { useStore } from "./store";
import { Art, SpinePoster, type ArtKey, type SpineVariant } from "./art";

function questionArt(category: string): ArtKey {
  if (category.includes("Tulang") || category === "Rangka") return "bone";
  if (category.includes("Sendi")) return "joint";
  if (category === "Otot") return "muscle";
  if (category === "Gangguan") return "spine";
  if (category === "Gerakan" || category === "Analisis") return "movement";
  if (category === "Kesehatan" || category === "Kasus") return "health";
  return "system";
}

/* ---------- Generic runner ---------- */
function QuizRunner({ questions, accent, onFinish, showCat = true }: { questions: Q[]; accent: string; onFinish: (score: number, correct: number, wrong: Q[]) => void; showCat?: boolean }) {
  const [i, setI] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [wrong, setWrong] = useState<Q[]>([]);
  const q = questions[i];
  const show = sel !== null;
  const letters = ["A", "B", "C", "D"];
  const answerText = q.options[q.answer] ?? "";
  const spineVariant: SpineVariant | null =
    answerText === "Skoliosis" ? "skoliosis" : answerText === "Kifosis" ? "kifosis" : answerText === "Lordosis" ? "lordosis" : null;
  const next = () => {
    if (i + 1 >= questions.length) {
      const correct = answers.filter(Boolean).length;
      onFinish(Math.round((correct / questions.length) * 100), correct, wrong);
    } else { setI(i + 1); setSel(null); }
  };
  const choose = (n: number) => {
    if (sel !== null) return;
    setSel(n);
    const ok = n === q.answer;
    setAnswers(a => [...a, ok]);
    if (!ok) setWrong(w => [...w, q]);
  };
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className={`font-display font-bold text-sm px-3 py-1.5 rounded-full bg-gradient-to-r ${accent} text-white`}>Soal {i + 1}/{questions.length}</span>
        {showCat && <span className="font-bold text-xs bg-slate-100 px-3 py-1.5 rounded-full">📚 {q.cat}</span>}
        <span className="ml-auto font-bold text-xs text-slate-500">✅ {answers.filter(Boolean).length} benar</span>
      </div>
      <ProgressBar value={((i + (show ? 1 : 0)) / questions.length) * 100} color={accent} />
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-4 border-2 border-blue-100 mt-3">
        <div className="flex gap-3 items-center">
          {spineVariant ? (
            <div className="w-16 h-24 md:w-20 md:h-28 rounded-2xl bg-white border border-blue-200 p-1 shadow-sm shrink-0">
              <SpinePoster variant={spineVariant} className="w-full h-full" />
            </div>
          ) : (
            <Art name={questionArt(q.cat)} className="w-20 h-20 md:w-24 md:h-24 rounded-2xl shrink-0 shadow-sm" title={`Ilustrasi soal ${q.cat}`} />
          )}
          <p className="font-bold text-base md:text-lg leading-snug">{q.q}</p>
        </div>
      </div>
      <div className="space-y-2 mt-3">
        {q.options.map((o, n) => (
          <QuizOption key={o} label={o} prefix={letters[n]} selected={sel === n} correct={n === q.answer} showResult={show} onClick={() => choose(n)} />
        ))}
      </div>
      <Feedback ok={show ? sel === q.answer : null} explain={q.explain} />
      {show && (
        <button onClick={next} className={`mt-3 w-full bg-gradient-to-r ${accent} text-white font-display font-bold py-3 rounded-2xl hover:scale-[1.01] transition-transform`}>
          {i + 1 >= questions.length ? "🏁 Lihat Hasil" : "Soal Berikutnya →"}
        </button>
      )}
    </div>
  );
}

/* ---------- LATIHAN ---------- */
export function LatihanPage() {
  const [level, setLevel] = useState<"L1" | "L2" | "L3">("L1");
  const [key, setKey] = useState(0);
  const [result, setResult] = useState<{ score: number; correct: number; wrong: Q[] } | null>(null);
  const { recordLatihan, s } = useStore();
  const qs = level === "L1" ? LATIHAN_L1 : level === "L2" ? LATIHAN_L2 : LATIHAN_L3;
  const colors: Record<string, string> = { L1: "from-emerald-400 to-green-500", L2: "from-blue-500 to-cyan-500", L3: "from-violet-500 to-purple-500" };
  const finish = (score: number, correct: number, wrong: Q[]) => { setResult({ score, correct, wrong }); recordLatihan(level, score); };
  return (
    <div>
      <PageHeader icon="📝" title="Latihan" sub="30 soal dalam 3 level! Selesaikan semua untuk jadi bintang kelas." color="from-blue-600 to-indigo-500" />
      <div className="grid grid-cols-3 gap-2 mb-4">
        {(["L1", "L2", "L3"] as const).map(l => (
          <button key={l} onClick={() => { setLevel(l); setResult(null); setKey(k => k + 1); }} className={`rounded-2xl p-3 border-2 text-center transition-all ${level === l ? `bg-gradient-to-r ${colors[l]} text-white border-transparent card-shadow-lg` : "bg-white border-slate-200 card-shadow"}`}>
            <div className="font-display font-bold">Level {l[1]}</div>
            <div className="text-xs font-bold opacity-80">10 soal • {l === "L1" ? "Mudah" : l === "L2" ? "Sedang" : "Sulit"}</div>
            <div className="text-xs font-black mt-1">🏅 Terbaik: {s.latihanBest[l] ?? 0}</div>
          </button>
        ))}
      </div>
      <Card className="mb-4">
        {result ? (
          <div className="text-center animate-pop-in">
            <Art name={result.score >= 80 ? "trophy" : "system"} className="w-24 h-24 mx-auto mb-2 rounded-2xl shadow-md" />
            <h3 className="font-display font-bold text-2xl">{result.score >= 80 ? "Luar Biasa!" : result.score >= 60 ? "Bagus Sekali!" : "Terus Berlatih, Kamu Pasti Bisa!"}</h3>
            <div className="font-display font-black text-6xl text-blue-700 my-2">{result.score}</div>
            <p className="font-bold text-slate-600">✅ {result.correct} benar • ❌ {10 - result.correct} belum tepat</p>
            {result.wrong.length > 0 && (
              <div className="text-left bg-amber-50 border-2 border-amber-200 rounded-2xl p-3 mt-3">
                <div className="font-display font-bold text-sm">📚 Pelajari kembali: {[...new Set(result.wrong.map(w => w.cat))].join(", ")}</div>
              </div>
            )}
            <div className="flex gap-2 justify-center mt-3">
              <button onClick={() => { setResult(null); setKey(k => k + 1); }} className="bg-blue-600 text-white font-display font-bold px-5 py-2.5 rounded-2xl flex items-center gap-2"><RotateCcw size={16} /> Ulangi</button>
              {level !== "L3" && <button onClick={() => { setLevel(level === "L1" ? "L2" : "L3"); setResult(null); setKey(k => k + 1); }} className="bg-emerald-500 text-white font-display font-bold px-5 py-2.5 rounded-2xl">Level Berikutnya →</button>}
            </div>
          </div>
        ) : (
          <QuizRunner key={key + level} questions={qs} accent={colors[level]} onFinish={finish} />
        )}
      </Card>
    </div>
  );
}

/* ---------- MINI GAMES ---------- */
function G1TebakTulang() {
  const [round, setRound] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [skor, setSkor] = useState(0);
  const { addXP } = useStore();
  const q = useMemo(() => {
    const t = TULANG_LIST[Math.floor(Math.random() * TULANG_LIST.length)];
    const opts = [...TULANG_LIST].filter(x => x.id !== t.id).sort(() => Math.random() - 0.5).slice(0, 3).map(x => x.nama);
    const all = [...opts, t.nama].sort(() => Math.random() - 0.5);
    return { t, all, ans: all.indexOf(t.nama) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round]);
  return (
    <GameShell title="🎮 Tebak Tulang" skor={skor} round={round}>
      <div className="text-center bg-amber-50 rounded-2xl p-4 border-2 border-amber-200">
        <div className="relative w-[132px] h-[170px] sm:w-[160px] sm:h-[208px] mx-auto rounded-2xl overflow-hidden shadow-md border border-amber-300 bg-sky-50">
          <Art name="skeleton" className="w-full h-full" title="Rangka realistis dengan penanda tulang" />
          <span className="absolute w-8 h-8 -ml-4 -mt-4 rounded-full bg-orange-500 border-[3px] border-white shadow-lg text-white font-display font-black text-lg flex items-center justify-center animate-pulse" style={{ left: `${q.t.x}%`, top: `${q.t.y}%` }}>?</span>
        </div>
        <p className="font-bold text-sm mt-1">📍 {q.t.lokasi}</p>
        <p className="font-semibold text-xs text-slate-500">{q.t.fungsi}</p>
        <p className="font-display font-bold mt-2">Tulang apakah ini?</p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {q.all.map((o, i) => (
          <button key={o} onClick={() => { if (sel === null) { setSel(i); if (i === q.ans) { setSkor(s => s + 20); addXP(10, "Tebak tulang benar"); } } }} className={`font-bold text-sm p-2.5 rounded-xl border-2 ${sel === null ? "bg-slate-50 border-slate-200 hover:border-amber-400" : i === q.ans ? "bg-green-100 border-green-400" : sel === i ? "bg-red-50 border-red-300" : "bg-slate-50"}`}>{o}</button>
        ))}
      </div>
      <Feedback ok={sel === null ? null : sel === q.ans} explain={`${q.t.nama} — ${q.t.fungsi}`} />
      {sel !== null && <button onClick={() => { setRound(r => r + 1); setSel(null); }} className="mt-2 w-full bg-amber-500 text-white font-display font-bold py-2.5 rounded-2xl">Lanjut →</button>}
    </GameShell>
  );
}

function GameShell({ title, skor, round, children }: { title: string; skor: number; round?: number; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-display font-bold">{title}</h4>
        <div className="flex gap-2"><span className="bg-blue-600 text-white font-display font-bold text-sm px-3 py-1 rounded-full">Skor: {skor}</span>{round !== undefined && <span className="bg-slate-200 font-bold text-sm px-3 py-1 rounded-full">Ronde {round + 1}</span>}</div>
      </div>
      {children}
    </div>
  );
}

function G2Pasangan() {
  const [picked, setPicked] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [skor, setSkor] = useState(0);
  const [shake, setShake] = useState("");
  const { addXP } = useStore();
  const [shuffled] = useState(() => [...MATCH_PAIRS].sort(() => Math.random() - 0.5));
  const clickTulang = (t: string) => { if (!matched.includes(t)) setPicked(t); };
  const clickFungsi = (tulangOfFungsi: string, fungsi: string) => {
    if (!picked || matched.includes(tulangOfFungsi)) return;
    if (picked === tulangOfFungsi) {
      setMatched(m => [...m, picked]); setSkor(s => s + 20); addXP(10, "Memasangkan tulang benar"); setPicked(null);
    } else { setShake(fungsi); setTimeout(() => setShake(""), 400); }
  };
  return (
    <GameShell title="🎮 Pasangkan Tulang & Fungsinya" skor={skor}>
      <p className="text-sm font-semibold text-slate-500 mb-2">Klik nama tulang, lalu klik fungsinya yang tepat! ({matched.length}/{MATCH_PAIRS.length})</p>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="space-y-2">
          {MATCH_PAIRS.map(p => (
            <button key={p.tulang} onClick={() => clickTulang(p.tulang)} disabled={matched.includes(p.tulang)} className={`w-full font-bold text-sm p-3 rounded-xl border-2 ${matched.includes(p.tulang) ? "bg-green-100 border-green-400 text-green-700" : picked === p.tulang ? "bg-blue-500 text-white border-blue-600" : "bg-blue-50 border-blue-200 hover:border-blue-400"}`}>
              🦴 {p.tulang} {matched.includes(p.tulang) && "✓"}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {shuffled.map(p => (
            <button key={p.fungsi} onClick={() => clickFungsi(p.tulang, p.fungsi)} disabled={matched.includes(p.tulang)} className={`w-full font-bold text-sm p-3 rounded-xl border-2 ${matched.includes(p.tulang) ? "bg-green-100 border-green-400 text-green-700" : shake === p.fungsi ? "bg-red-100 border-red-400 animate-ping" : "bg-amber-50 border-amber-200 hover:border-amber-400"}`}>
              ⚙️ {p.fungsi} {matched.includes(p.tulang) && "✓"}
            </button>
          ))}
        </div>
      </div>
      {matched.length === MATCH_PAIRS.length && <div className="animate-pop-in mt-2 text-center font-display font-bold text-green-700 bg-green-100 rounded-2xl p-3">🎉 Sempurna! Semua pasangan cocok!</div>}
    </GameShell>
  );
}

function G3TebakSendi() {
  const [round, setRound] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [skor, setSkor] = useState(0);
  const { addXP } = useStore();
  const cases = [
    { q: "Siku menekuk saat kamu makan 🍽️", ans: 0 },
    { q: "Bahu berputar saat melempar bola ⚾", ans: 1 },
    { q: "Kepala menoleh ke kanan-kiri 👀", ans: 2 },
    { q: "Pergelangan tangan bergoyang lentur 👋", ans: 3 },
    { q: "Lutut menekuk saat menendang bola ⚽", ans: 0 },
    { q: "Kaki berputar dari panggul saat menari 🎵", ans: 1 },
  ];
  const c = cases[round % cases.length];
  return (
    <GameShell title="🎮 Tebak Jenis Sendi" skor={skor} round={round}>
      <div className="text-center bg-cyan-50 rounded-2xl p-4 border-2 border-cyan-200 font-display font-bold text-lg"><Art name="joint" className="w-24 h-24 rounded-2xl mx-auto mb-2 shadow-sm" />{c.q}</div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {JENIS_SENDI.map((s, i) => (
          <button key={s.id} onClick={() => { if (sel === null) { setSel(i); if (i === c.ans) { setSkor(x => x + 20); addXP(10, "Tebak sendi benar"); } } }} className={`font-bold text-sm p-3 rounded-xl border-2 ${sel === null ? "bg-slate-50 border-slate-200 hover:border-cyan-400" : i === c.ans ? "bg-green-100 border-green-400" : sel === i ? "bg-red-50 border-red-300" : "bg-slate-50"}`}>{s.emoji} {s.nama}</button>
        ))}
      </div>
      <Feedback ok={sel === null ? null : sel === c.ans} explain={JENIS_SENDI[c.ans].nama + ": " + JENIS_SENDI[c.ans].gerak} />
      {sel !== null && <button onClick={() => { setRound(r => r + 1); setSel(null); }} className="mt-2 w-full bg-cyan-500 text-white font-display font-bold py-2.5 rounded-2xl">Lanjut →</button>}
    </GameShell>
  );
}

function G4Siapa() {
  const [i, setI] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [skor, setSkor] = useState(0);
  const { addXP } = useStore();
  const q = SIAPA_BEKERJA[i % SIAPA_BEKERJA.length];
  return (
    <GameShell title="🎮 Siapa yang Bekerja?" skor={skor} round={i}>
      <div className="text-center bg-rose-50 rounded-2xl p-4 border-2 border-rose-200">
        <Art name="muscle" className="w-24 h-24 rounded-2xl mx-auto shadow-sm" />
        <p className="font-bold mt-1">{q.q}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {q.options.map((o, n) => (
          <button key={o} onClick={() => { if (sel === null) { setSel(n); if (n === q.answer) { setSkor(s => s + 20); addXP(10, "Tebakan otot benar"); } } }} className={`font-bold text-sm p-2.5 rounded-xl border-2 ${sel === null ? "bg-slate-50 border-slate-200 hover:border-rose-400" : n === q.answer ? "bg-green-100 border-green-400" : sel === n ? "bg-red-50 border-red-300" : "bg-slate-50"}`}>{o}</button>
        ))}
      </div>
      <Feedback ok={sel === null ? null : sel === q.answer} explain={q.explain} />
      {sel !== null && <button onClick={() => { setI(v => v + 1); setSel(null); }} className="mt-2 w-full bg-rose-500 text-white font-display font-bold py-2.5 rounded-2xl">Lanjut →</button>}
    </GameShell>
  );
}

function G5Gangguan() {
  const [i, setI] = useState(0);
  const [sel, setSel] = useState<string | null>(null);
  const [skor, setSkor] = useState(0);
  const { addXP } = useStore();
  const p = PENYAKIT[i % PENYAKIT.length];
  const all = useMemo(() => {
    const wrong = [...PENYAKIT].filter(x => x.id !== p.id).sort(() => Math.random() - 0.5).slice(0, 3).map(x => x.nama);
    return [...wrong, p.nama].sort(() => Math.random() - 0.5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);
  const ok = sel === p.nama;
  return (
    <GameShell title="🎮 Kenali Gangguan" skor={skor} round={i}>
      <div className="text-center bg-teal-50 rounded-2xl p-4 border-2 border-teal-200">
        {["skoliosis", "kifosis", "lordosis"].includes(p.id) ? (
          <div className="w-32 h-44 mx-auto rounded-2xl bg-white border-2 border-teal-100 p-1.5 shadow-sm">
            <SpinePoster variant={p.id as SpineVariant} className="w-full h-full" />
          </div>
        ) : (
          <Art name={p.id === "cedera-otot" ? "muscle" : ["keseleo", "artritis"].includes(p.id) ? "joint" : "bone"} className="w-24 h-24 rounded-2xl mx-auto shadow-sm" title={`Ilustrasi ${p.nama}`} />
        )}
        <p className="font-semibold text-sm mt-1">{p.penjelasan}</p>
        <p className="font-display font-bold mt-1">Gangguan apakah ini?</p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {all.map(o => {
          const isAns = o === p.nama;
          return <button key={o} onClick={() => { if (sel === null) { setSel(o); if (isAns) { setSkor(s => s + 20); addXP(10, "Tebak gangguan benar"); } } }} className={`font-bold text-sm p-2.5 rounded-xl border-2 ${sel === null ? "bg-slate-50 border-slate-200 hover:border-teal-400" : isAns ? "bg-green-100 border-green-400" : sel === o ? "bg-red-50 border-red-300" : "bg-slate-50 border-slate-200"}`}>{o}</button>;
        })}
      </div>
      {sel !== null && <><Feedback ok={ok} explain={p.nama + " — " + p.jaga} /><button onClick={() => { setI(v => v + 1); setSel(null); }} className="mt-2 w-full bg-teal-500 text-white font-display font-bold py-2.5 rounded-2xl">Lanjut →</button></>}
    </GameShell>
  );
}

function G6Sehat() {
  const [i, setI] = useState(0);
  const [sel, setSel] = useState<boolean | null>(null);
  const [skor, setSkor] = useState(0);
  const { addXP } = useStore();
  const order = useMemo(() => [...HABITS].sort(() => Math.random() - 0.5), []);
  const h = order[i % order.length];
  return (
    <GameShell title="🎮 Sehat atau Tidak?" skor={skor} round={i}>
      <div className="text-center bg-green-50 rounded-2xl p-5 border-2 border-green-200">
        <Art name="health" className="w-36 h-24 rounded-2xl mx-auto shadow-sm" />
        <div className="font-display font-bold text-xl mt-1">{h.t}</div>
        <p className="text-sm font-bold text-slate-500">Apakah kebiasaan ini sehat?</p>
      </div>
      <div className="flex gap-2 mt-2">
        <button onClick={() => { if (sel === null) { setSel(true); if (h.sehat) { setSkor(s => s + 20); addXP(10, "Pilih sehat benar"); } } }} className={`flex-1 font-display font-bold py-3 rounded-2xl border-2 ${sel === true ? (h.sehat ? "bg-green-500 text-white" : "bg-red-400 text-white") : "bg-green-50 border-green-300"}`}>✅ Sehat</button>
        <button onClick={() => { if (sel === null) { setSel(false); if (!h.sehat) { setSkor(s => s + 20); addXP(10, "Pilih sehat benar"); } } }} className={`flex-1 font-display font-bold py-3 rounded-2xl border-2 ${sel === false ? (!h.sehat ? "bg-green-500 text-white" : "bg-red-400 text-white") : "bg-red-50 border-red-200"}`}>❌ Tidak</button>
      </div>
      <Feedback ok={sel === null ? null : sel === h.sehat} explain={h.sehat ? "Benar, ini kebiasaan sehat! Pertahankan!" : "Benar, ini kurang sehat dan sebaiknya dihindari!"} />
      {sel !== null && <button onClick={() => { setI(v => v + 1); setSel(null); }} className="mt-2 w-full bg-green-500 text-white font-display font-bold py-2.5 rounded-2xl">Lanjut →</button>}
    </GameShell>
  );
}

const GAMES: { id: string; nama: string; art: ArtKey }[] = [
  { id: "g1", nama: "Tebak Tulang", art: "bone" },
  { id: "g2", nama: "Pasangan", art: "skeleton" },
  { id: "g3", nama: "Tebak Sendi", art: "joint" },
  { id: "g4", nama: "Siapa Bekerja?", art: "muscle" },
  { id: "g5", nama: "Kenali Gangguan", art: "spine" },
  { id: "g6", nama: "Sehat / Tidak", art: "health" },
];

export function TantanganPage() {
  const [g, setG] = useState("g1");
  return (
    <div>
      <PageHeader icon="🎮" title="Tantangan" sub="6 mini game seru! Mainkan semuanya dan kumpulkan XP sebanyak-banyaknya!" color="from-violet-600 to-fuchsia-500" />
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
        {GAMES.map(x => (
          <button key={x.id} onClick={() => setG(x.id)} className={`group rounded-2xl p-2 border-2 text-center transition-all ${g === x.id ? "bg-violet-600 text-white border-violet-700 card-shadow-lg scale-105" : "bg-white border-slate-200 card-shadow hover:border-violet-300"}`}>
            <Art name={x.art} className="art-hover w-full h-16 sm:h-20 rounded-xl" title={`Ilustrasi permainan ${x.nama}`} />
            <div className="font-display font-bold text-xs mt-1">{x.nama}</div>
          </button>
        ))}
      </div>
      <Card className="mb-4 min-h-[320px]">
        {g === "g1" && <G1TebakTulang />}
        {g === "g2" && <G2Pasangan />}
        {g === "g3" && <G3TebakSendi />}
        {g === "g4" && <G4Siapa />}
        {g === "g5" && <G5Gangguan />}
        {g === "g6" && <G6Sehat />}
      </Card>
      <Card className="flex items-center gap-3 bg-gradient-to-r from-violet-50 to-fuchsia-50 border-2 border-violet-200">
        <Gamepad2 className="text-violet-600 shrink-0" size={28} />
        <p className="font-bold text-sm">Setiap jawaban benar = <span className="text-violet-700">+10 XP</span>! Ayo kejar Level berikutnya! 🚀</p>
      </Card>
    </div>
  );
}

/* ---------- KUIS MASTER ---------- */
export function KuisPage() {
  const [start, setStart] = useState(false);
  const [result, setResult] = useState<{ score: number; correct: number; wrong: Q[] } | null>(null);
  const [seconds, setSeconds] = useState(0);
  const t0 = useRef(0);
  const { recordKuis, s } = useStore();
  useEffect(() => {
    if (!start || result) return;
    const iv = window.setInterval(() => setSeconds(Math.floor((Date.now() - t0.current) / 1000)), 1000);
    return () => window.clearInterval(iv);
  }, [start, result]);
  const finish = (score: number, correct: number, wrong: Q[]) => { setResult({ score, correct, wrong }); recordKuis(score); };
  const weakCats = result ? [...new Set(result.wrong.map(w => w.cat))] : [];
  const reco: Record<string, string> = {
    "Sistem Gerak": "🧠 Kenalan dengan Sistem Gerak", "Tulang": "🦴 Rangka Manusia", "Jenis Tulang": "🦴 Rangka Manusia",
    "Sendi": "🔗 Sendi", "Otot": "💪 Otot", "Gerakan": "🏃 Bagaimana Tubuh Bergerak?", "Mekanisme": "🏃 Bagaimana Tubuh Bergerak?",
    "Gangguan": "🩺 Penyakit & Gangguan", "Kesehatan": "❤️ Menjaga Kesehatan", "HOTS": "🔬 Laboratorium",
  };
  if (!start) {
    return (
      <div>
        <PageHeader icon="🏆" title="Kuis Master" sub="MISSION 09 — Ujian akhir para Penjelajah! 20 soal menentukan gelarmu." color="from-amber-500 to-orange-600" />
        <Card className="text-center max-w-2xl mx-auto">
          <Art name="trophy" className="w-32 h-32 rounded-3xl mx-auto shadow-xl animate-floaty" />
          <h3 className="font-display font-bold text-2xl mt-2">Siap Jadi Master Sistem Gerak?</h3>
          <p className="font-semibold text-slate-600 text-sm mt-1">20 soal • campuran PG, gambar, tabel, kasus & HOTS • Nilai ≥ 80 = Badge Master 🏆</p>
          <div className="grid grid-cols-3 gap-2 my-4">
            <div className="bg-blue-50 rounded-2xl p-3 border"><Flag size={20} className="mx-auto text-blue-600" /><div className="font-display font-bold text-sm">20 Soal</div></div>
            <div className="bg-amber-50 rounded-2xl p-3 border"><Clock size={20} className="mx-auto text-amber-600" /><div className="font-display font-bold text-sm">Santai</div></div>
            <div className="bg-green-50 rounded-2xl p-3 border"><Medal size={20} className="mx-auto text-green-600" /><div className="font-display font-bold text-sm">Terbaik: {s.kuisBest}</div></div>
          </div>
          <button onClick={() => { t0.current = Date.now(); setSeconds(0); setStart(true); }} className="btn-shine bg-gradient-to-r from-amber-500 to-orange-500 text-white font-display font-bold px-8 py-4 rounded-2xl text-lg hover:scale-105 transition-transform">🚀 Mulai Kuis Master</button>
        </Card>
      </div>
    );
  }
  if (result) {
    const pct = result.score;
    return (
      <div>
        <PageHeader icon="🏆" title="Hasil Kuis Master" sub="Lihat pencapaian hebatmu dan rekomendasi belajar!" color="from-amber-500 to-orange-600" />
        <Card className="text-center max-w-2xl mx-auto">
          <Art name={pct >= 80 ? "trophy" : "system"} className="w-28 h-28 rounded-3xl mx-auto mb-2 shadow-lg" />
          <h3 className="font-display font-bold text-2xl">{pct >= 80 ? "SELAMAT, MASTER SISTEM GERAK! 🏆" : pct >= 60 ? "Hebat! Sedikit Lagi Master!" : "Bagus Berani Mencoba! Yuk Belajar Lagi!"}</h3>
          <div className="font-display font-black text-7xl my-2 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">{result.score}</div>
          <div className="grid grid-cols-4 gap-2 my-3">
            <div className="bg-green-50 rounded-2xl p-2.5 border-2 border-green-200"><div className="font-display font-black text-xl text-green-700">{result.correct}</div><div className="text-[11px] font-black">✅ Benar</div></div>
            <div className="bg-red-50 rounded-2xl p-2.5 border-2 border-red-200"><div className="font-display font-black text-xl text-red-600">{20 - result.correct}</div><div className="text-[11px] font-black">❌ Salah</div></div>
            <div className="bg-blue-50 rounded-2xl p-2.5 border-2 border-blue-200"><div className="font-display font-black text-xl text-blue-700">{pct}%</div><div className="text-[11px] font-black">📊 Skor</div></div>
            <div className="bg-violet-50 rounded-2xl p-2.5 border-2 border-violet-200"><div className="font-display font-black text-xl text-violet-700">{Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}</div><div className="text-[11px] font-black">⏱️ Waktu</div></div>
          </div>
          {weakCats.length > 0 ? (
            <div className="text-left bg-amber-50 border-2 border-amber-200 rounded-2xl p-3">
              <div className="font-display font-bold text-sm">📚 Materi yang perlu dipelajari kembali:</div>
              <ul className="mt-1 space-y-1">
                {weakCats.map(c => <li key={c} className="font-bold text-sm flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-600" /> {c} → <span className="text-blue-700">{reco[c] ?? "Pelajari kembali"}</span></li>)}
              </ul>
            </div>
          ) : (
            <div className="font-display font-bold text-green-700 bg-green-100 rounded-2xl p-3">🌟 SEMPURNA! Semua materi kamu kuasai!</div>
          )}
          <p className="text-xs font-bold text-slate-400 mt-3">Created by WAH Official • Science Body Explorer • © 2026</p>
          <div className="flex gap-2 justify-center mt-2">
            <button onClick={() => { setResult(null); setStart(false); }} className="bg-blue-600 text-white font-display font-bold px-5 py-2.5 rounded-2xl flex items-center gap-2"><RotateCcw size={16} /> Ulangi Kuis</button>
            <button onClick={() => window.print()} className="bg-white border-2 border-slate-200 font-display font-bold px-5 py-2.5 rounded-2xl">🖨️ Cetak Hasil</button>
          </div>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <PageHeader icon="🏆" title="Kuis Master" sub={`Soal berjalan... ⏱️ ${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")} — Semangat!`} color="from-amber-500 to-orange-600" />
      <Card><QuizRunner questions={KUIS_MASTER} accent="from-amber-500 to-orange-500" onFinish={finish} /></Card>
      <p className="text-center mt-3 flex items-center justify-center gap-2 font-display font-bold text-amber-700"><Trophy size={18} /> Nilai ≥ 80 membuka Badge Master Sistem Gerak!</p>
    </div>
  );
}
