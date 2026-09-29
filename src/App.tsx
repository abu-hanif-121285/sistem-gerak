import { useCallback, useEffect, useState } from "react";
import { Atom, Bell, BookOpen, Brain, Dumbbell, FileText, FlaskConical, Gamepad2, GraduationCap, Heart, Home, Info, Link2, Menu, PersonStanding, BarChart3, Stethoscope, Target, Trophy, X, Bone, Rocket } from "lucide-react";
import { StoreProvider, useStore } from "./store";
import { Avatar, LevelPill, Mascot, XPPill } from "./components";
import { TujuanPage, SistemGerakPage, RangkaPage, SendiPage, OtotPage, BergerakPage } from "./pages-materi";
import { LabPage, PenyakitPage, SehatPage } from "./pages-lab";
import { LatihanPage, TantanganPage, KuisPage } from "./pages-quiz";
import { BerandaPage, ProgresPage, GlosariumPage, GuruPage, TentangPage } from "./pages-other";

const MENUS = [
  { id: "beranda", label: "Beranda", icon: Home, emoji: "🏠" },
  { id: "tujuan", label: "Tujuan Pembelajaran", icon: Target, emoji: "🎯" },
  { id: "sistem-gerak", label: "Kenalan dengan Sistem Gerak", icon: Brain, emoji: "🧠" },
  { id: "rangka", label: "Rangka Manusia", icon: Bone, emoji: "🦴" },
  { id: "sendi", label: "Sendi", icon: Link2, emoji: "🔗" },
  { id: "otot", label: "Otot", icon: Dumbbell, emoji: "💪" },
  { id: "bergerak", label: "Bagaimana Tubuh Bergerak?", icon: PersonStanding, emoji: "🏃" },
  { id: "lab", label: "Laboratorium / Simulasi", icon: FlaskConical, emoji: "🔬" },
  { id: "penyakit", label: "Penyakit & Gangguan", icon: Stethoscope, emoji: "🩺" },
  { id: "sehat", label: "Menjaga Kesehatan", icon: Heart, emoji: "❤️" },
  { id: "latihan", label: "Latihan", icon: FileText, emoji: "📝" },
  { id: "tantangan", label: "Tantangan", icon: Gamepad2, emoji: "🎮" },
  { id: "kuis", label: "Kuis Master", icon: Trophy, emoji: "🏆" },
  { id: "progres", label: "Progres Belajar", icon: BarChart3, emoji: "📊" },
  { id: "glosarium", label: "Glosarium", icon: BookOpen, emoji: "📖" },
  { id: "guru", label: "Mode Guru", icon: GraduationCap, emoji: "👨‍🏫" },
  { id: "tentang", label: "Tentang Aplikasi", icon: Info, emoji: "ℹ️" },
];

function Splash({ onDone }: { onDone: () => void }) {
  useEffect(() => { const t = setTimeout(onDone, 6000); return () => clearTimeout(t); }, [onDone]);
  return (
    <div className="splash-screen fixed inset-0 z-[100] overflow-hidden" aria-label="Halaman pembuka Science Body Explorer">
      <picture className="splash-scene" aria-hidden="true">
        <source media="(max-width: 700px)" srcSet="images/splash-adventure-mobile.jpg" />
        <img src="images/splash-adventure-desktop.jpg" alt="" fetchPriority="high" />
      </picture>
      <div className="splash-tint" />
      <div className="splash-layout">
        <div className="splash-copy">
          <div className="splash-symbol" aria-hidden="true"><Atom size={27} strokeWidth={2.7} /><span /></div>
          <h1 className="splash-brand font-display">
            <span className="splash-brand-white">SCIENCE</span>
            <span className="splash-brand-gold">BODY EXPLORER</span>
          </h1>
          <div className="splash-subcopy">
            <p className="splash-subtitle font-display">Sistem Gerak Manusia</p>
            <p className="splash-tagline">Jelajah Hebat Sistem Gerak Tubuh Kita</p>
          </div>
        </div>
        <div className="splash-action-area">
          <button onClick={onDone} className="splash-button btn-shine font-display" type="button">
            <Rocket size={26} strokeWidth={2.5} /> MULAI PETUALANGAN
          </button>
          <p className="splash-credit">Created by WAH Official</p>
        </div>
      </div>
    </div>
  );
}

function Shell() {
  const [route, setRoute] = useState("beranda");
  const [drawer, setDrawer] = useState(false);
  const [splash, setSplash] = useState(true);
  const [noticeOpen, setNoticeOpen] = useState(false);
  const { s, level } = useStore();
  const dismissSplash = useCallback(() => setSplash(false), []);
  const go = (r: string) => { setRoute(r); setDrawer(false); setNoticeOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const menu = MENUS.find(m => m.id === route);

  return (
    <div className="min-h-screen flex">
      {splash && <Splash onDone={dismissSplash} />}

      {/* Sidebar desktop */}
      <aside className="hidden lg:flex flex-col w-[270px] shrink-0 sticky top-0 h-screen p-3" style={{ background: "linear-gradient(180deg,#0a2472,#1642c7)" }}>
        <div className="bg-gradient-to-br from-[#174ac2] to-[#072a7c] rounded-2xl p-3 mb-2 border border-white/25 shadow-[inset_0_2px_12px_rgba(255,255,255,.18),0_6px_14px_rgba(1,18,65,.25)]">
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-200 via-blue-400 to-blue-700 text-white border border-white/70 shadow-[0_4px_0_#041c60,inset_0_3px_6px_rgba(255,255,255,.55)] flex items-center justify-center shrink-0"><Atom size={27} strokeWidth={2.5} /></div>
            <div><div className="font-display font-black text-white text-sm leading-tight brand-wordmark">SCIENCE<br /><span className="text-[#ffdf49]">BODY EXPLORER</span></div><div className="text-[10px] font-bold text-cyan-200">Sistem Gerak Manusia</div></div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto space-y-1 pr-1">
          {MENUS.map(m => (
            <button key={m.id} onClick={() => go(m.id)} className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold text-[13px] transition-all ${route === m.id ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-lg" : "text-blue-100 hover:bg-white/10"}`}>
              <m.icon size={17} className="shrink-0" /><span className="flex-1 text-left">{m.label}</span><span>{m.emoji}</span>
            </button>
          ))}
        </nav>
        <div className="mt-2 bg-white/10 rounded-2xl p-3 border border-white/20 text-center">
          <div className="font-display font-bold text-white text-xs">Created by WAH Official</div>
          <div className="text-[10px] font-bold text-blue-200">© 2026 • IPAS Kelas VI</div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-lg border-b border-blue-100 px-3 md:px-6 py-2.5">
          <div className="flex items-center gap-2.5">
            <button onClick={() => setDrawer(true)} className="lg:hidden w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0"><Menu size={20} /></button>
            <div className="lg:hidden w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-200 to-blue-600 border border-white text-white flex items-center justify-center shrink-0 shadow-[0_3px_0_#0c347e]"><Atom size={21} /></div>
            <div className="min-w-0">
              <h2 className="font-display font-bold text-base md:text-xl leading-tight truncate text-blue-950">Science Body Explorer</h2>
              <p className="text-[11px] md:text-xs font-bold text-slate-500 truncate">Sistem Gerak Manusia • {menu?.emoji} {menu?.label}</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5 md:gap-2">
              <div className="hidden md:block"><XPPill xp={s.xp} /></div>
              <LevelPill level={level} />
              <button onClick={() => setNoticeOpen(v => !v)} aria-label="Lihat prestasi terbaru" aria-expanded={noticeOpen} className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-blue-100 flex items-center justify-center relative"><Bell size={17} /><span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" /></button>
              <button onClick={() => go("beranda")} className="flex items-center gap-1.5 bg-blue-50 border border-blue-100 rounded-xl pl-1 pr-2 py-1">
                <Avatar kind={s.avatar} size={30} />
                <span className="text-left hidden sm:block"><span className="block font-display font-bold text-xs leading-none">Halo, {s.name}</span><span className="block text-[10px] font-bold text-slate-400">{s.kelas}</span></span>
              </button>
            </div>
          </div>
          {noticeOpen && (
            <div className="absolute right-3 md:right-6 top-[calc(100%+8px)] w-[min(340px,calc(100vw-24px))] rounded-2xl bg-white shadow-2xl border border-blue-100 p-3 animate-pop-in">
              <div className="font-display font-bold text-blue-950 mb-2">Prestasi terbaru</div>
              <div className="space-y-2 max-h-56 overflow-auto">
                {s.feed.slice(0, 5).map(f => <div key={f.id} className="flex items-start gap-2 text-xs font-bold bg-blue-50 rounded-xl p-2"><span className="text-lg">🏅</span><span className="flex-1">{f.text}</span><span className="text-green-700">+{f.xp} XP</span></div>)}
              </div>
              <button onClick={() => go("progres")} className="w-full mt-2 bg-blue-600 text-white font-display font-bold text-sm rounded-xl py-2">Lihat progres belajar</button>
            </div>
          )}
        </header>

        {/* Content */}
        <main className="flex-1 p-3 md:p-6 pb-24 lg:pb-10 max-w-6xl w-full mx-auto">
          {route === "beranda" && <BerandaPage go={go} />}
          {route === "tujuan" && <TujuanPage go={go} />}
          {route === "sistem-gerak" && <SistemGerakPage />}
          {route === "rangka" && <RangkaPage />}
          {route === "sendi" && <SendiPage go={go} />}
          {route === "otot" && <OtotPage />}
          {route === "bergerak" && <BergerakPage go={go} />}
          {route === "lab" && <LabPage />}
          {route === "penyakit" && <PenyakitPage />}
          {route === "sehat" && <SehatPage />}
          {route === "latihan" && <LatihanPage />}
          {route === "tantangan" && <TantanganPage />}
          {route === "kuis" && <KuisPage />}
          {route === "progres" && <ProgresPage />}
          {route === "glosarium" && <GlosariumPage />}
          {route === "guru" && <GuruPage />}
          {route === "tentang" && <TentangPage />}
        </main>

        {/* Footer */}
        <footer className="px-3 md:px-6 pb-20 lg:pb-4">
          <div className="rounded-2xl px-5 py-3 flex flex-col sm:flex-row sm:items-center gap-1 justify-between text-white font-bold text-xs" style={{ background: "linear-gradient(90deg,#0a2472,#2f7bff)" }}>
            <span>SCIENCE BODY EXPLORER &nbsp;|&nbsp; Sistem Gerak Manusia &nbsp;|&nbsp; Created by WAH Official</span>
            <span>© 2026 WAH Official</span>
          </div>
        </footer>

        {/* Bottom nav mobile */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-blue-100 px-2 py-1.5 grid grid-cols-5 gap-1">
          {[
            { id: "beranda", e: "🏠", l: "Beranda" },
            { id: "rangka", e: "🦴", l: "Rangka" },
            { id: "lab", e: "🔬", l: "Lab" },
            { id: "kuis", e: "🏆", l: "Kuis" },
            { id: "progres", e: "📊", l: "Progres" },
          ].map(b => (
            <button key={b.id} onClick={() => go(b.id)} className={`rounded-xl py-1.5 flex flex-col items-center gap-0.5 ${route === b.id ? "bg-blue-600 text-white" : "text-slate-500"}`}>
              <span className="text-lg leading-none">{b.e}</span><span className="font-display font-bold text-[10px]">{b.l}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Drawer mobile */}
      {drawer && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setDrawer(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-[300px] p-3 overflow-y-auto animate-pop-in" style={{ background: "linear-gradient(180deg,#0a2472,#1642c7)" }}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-200 to-blue-600 text-white border border-white/70 flex items-center justify-center"><Atom size={24} /></div>
                <div className="font-display font-black text-white text-sm brand-wordmark">SCIENCE<br /><span className="text-[#ffdf49]">BODY EXPLORER</span></div>
              </div>
              <button onClick={() => setDrawer(false)} className="w-9 h-9 rounded-xl bg-white/15 text-white flex items-center justify-center"><X size={18} /></button>
            </div>
            <div className="bg-white/10 rounded-2xl p-2.5 mb-2 flex items-center gap-2 border border-white/20">
              <Avatar kind={s.avatar} size={40} />
              <div><div className="font-display font-bold text-white text-sm">{s.name}</div><div className="text-[11px] font-bold text-cyan-200">{s.xp.toLocaleString()} XP • Level {level}</div></div>
              <div className="ml-auto"><Mascot size={44} /></div>
            </div>
            <div className="space-y-1 pb-4">
              {MENUS.map(m => (
                <button key={m.id} onClick={() => go(m.id)} className={`w-full flex items-center gap-2.5 px-3 py-3 rounded-xl font-bold text-sm ${route === m.id ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-white" : "text-blue-100 hover:bg-white/10"}`}>
                  <m.icon size={18} /><span className="flex-1 text-left">{m.label}</span><span>{m.emoji}</span>
                </button>
              ))}
            </div>
            <div className="text-center font-bold text-blue-200 text-xs pb-4">Created by WAH Official<br />© 2026</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <Shell />
    </StoreProvider>
  );
}
