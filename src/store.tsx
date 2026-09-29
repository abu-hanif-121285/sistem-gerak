import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type BadgeId = "rangka" | "sendi" | "otot" | "gerak" | "detektif" | "penjaga" | "master";

export interface FeedItem { id: string; text: string; xp: number; time: string; }
export interface ClassStudent { nama: string; progress: number; xp: number; level: number; skorLatihan: number; skorKuis: number; badges: string; materi: number; }

interface StudentState {
  name: string;
  kelas: string;
  avatar: "boy" | "girl";
  xp: number;
  streak: number;
  lastVisit: string;
  badges: BadgeId[];
  completed: string[];
  latihanBest: Record<string, number>;
  latihanAttempts: number;
  kuisBest: number;
  kuisAttempts: number;
  feed: FeedItem[];
  refleksi: string;
  missionsDoneToday: number;
}

const DEFAULT_STATE: StudentState = {
  name: "Raka",
  kelas: "Kelas VI",
  avatar: "boy",
  xp: 1250,
  streak: 3,
  lastVisit: new Date().toDateString(),
  badges: [],
  completed: ["gerak", "rangka", "sendi", "otot"],
  latihanBest: { L1: 80, L2: 0, L3: 0 },
  latihanAttempts: 3,
  kuisBest: 85,
  kuisAttempts: 1,
  feed: [
    { id: "f1", text: "Menyelesaikan materi Rangka Manusia", xp: 100, time: "Hari ini" },
    { id: "f2", text: "Mendapat badge Penjelajah Rangka", xp: 200, time: "Hari ini" },
    { id: "f3", text: "Menyelesaikan Latihan Level 1", xp: 50, time: "Kemarin" },
  ],
  refleksi: "",
  missionsDoneToday: 1,
};

export const BADGES: { id: BadgeId; name: string; icon: string; color: string; desc: string }[] = [
  { id: "rangka", name: "Penjelajah Rangka", icon: "🦴", color: "from-amber-300 to-orange-400", desc: "Selesaikan misi Rangka Manusia" },
  { id: "sendi", name: "Master Sendi", icon: "🔗", color: "from-cyan-300 to-blue-500", desc: "Selesaikan misi Sendi + simulasi" },
  { id: "otot", name: "Ahli Otot", icon: "💪", color: "from-red-300 to-rose-500", desc: "Selesaikan misi Otot" },
  { id: "gerak", name: "Jago Gerak", icon: "🏃", color: "from-emerald-300 to-green-500", desc: "Selesaikan analisis 6 gerakan" },
  { id: "detektif", name: "Detektif Kesehatan", icon: "🩺", color: "from-violet-300 to-purple-500", desc: "Selesaikan misi Penyakit & Gangguan" },
  { id: "penjaga", name: "Penjaga Tubuh", icon: "❤️", color: "from-pink-300 to-rose-400", desc: "Selesaikan misi Menjaga Tubuh" },
  { id: "master", name: "Master Sistem Gerak", icon: "🏆", color: "from-yellow-300 to-amber-500", desc: "Lulus Kuis Master ≥ 80" },
];

export const MISSIONS = [
  { id: "gerak", no: "01", title: "Kenali Sistem Gerak", icon: "🧠", color: "bg-cyan-100", route: "sistem-gerak" },
  { id: "rangka", no: "02", title: "Jelajahi Rangka", icon: "🦴", color: "bg-violet-100", route: "rangka" },
  { id: "sendi", no: "03", title: "Temukan Rahasia Sendi", icon: "🔗", color: "bg-teal-100", route: "sendi" },
  { id: "otot", no: "04", title: "Kenali Kekuatan Otot", icon: "💪", color: "bg-orange-100", route: "otot" },
  { id: "mekanik", no: "05", title: "Bongkar Rahasia Tubuh Bergerak", icon: "🏃", color: "bg-sky-100", route: "bergerak" },
  { id: "lab", no: "06", title: "Laboratorium Sistem Gerak", icon: "🔬", color: "bg-purple-100", route: "lab" },
  { id: "penyakit", no: "07", title: "Penyakit & Gangguan", icon: "🩺", color: "bg-emerald-100", route: "penyakit" },
  { id: "sehat", no: "08", title: "Misi Menjaga Tubuh", icon: "❤️", color: "bg-amber-100", route: "sehat" },
  { id: "kuis", no: "09", title: "Kuis Master", icon: "🏆", color: "bg-rose-100", route: "kuis" },
];

const StoreCtx = createContext<{
  s: StudentState;
  level: number;
  progressPct: number;
  addXP: (n: number, text?: string) => void;
  completeMateri: (id: string, xp?: number) => void;
  unlockBadge: (id: BadgeId) => void;
  setProfile: (name: string, avatar: "boy" | "girl") => void;
  recordLatihan: (lvl: string, score: number) => void;
  recordKuis: (score: number) => void;
  setRefleksi: (v: string) => void;
  resetAll: () => void;
  classStudents: ClassStudent[];
  isGuru: boolean;
  setGuru: (v: boolean) => void;
} | null>(null);

const KEY = "sbe_student_v1";
const CLASS_KEY = "sbe_class_v1";
const GURU_KEY = "sbe_guru_v1";

function load(): StudentState {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const p = JSON.parse(raw);
      // streak check
      const today = new Date().toDateString();
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      let streak = p.streak ?? 1;
      if (p.lastVisit !== today && p.lastVisit !== yesterday) streak = 1;
      else if (p.lastVisit !== today) streak = streak + 1;
      return { ...DEFAULT_STATE, ...p, lastVisit: today, streak };
    }
  } catch {}
  return { ...DEFAULT_STATE, lastVisit: new Date().toDateString() };
}

function loadClass(): ClassStudent[] {
  try {
    const raw = localStorage.getItem(CLASS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return [
    { nama: "Raka", progress: 65, xp: 1250, level: 3, skorLatihan: 85, skorKuis: 85, badges: "3", materi: 4 },
    { nama: "Aisyah", progress: 72, xp: 1420, level: 3, skorLatihan: 90, skorKuis: 80, badges: "4", materi: 5 },
    { nama: "Fadil", progress: 50, xp: 860, level: 2, skorLatihan: 70, skorKuis: 70, badges: "2", materi: 3 },
    { nama: "Siti", progress: 45, xp: 720, level: 2, skorLatihan: 65, skorKuis: 60, badges: "1", materi: 2 },
  ];
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [s, setS] = useState<StudentState>(load);
  const [classStudents, setClass] = useState<ClassStudent[]>(loadClass);
  const [isGuru, setIsGuru] = useState(() => localStorage.getItem(GURU_KEY) === "1");

  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(s)); }, [s]);
  useEffect(() => { localStorage.setItem(CLASS_KEY, JSON.stringify(classStudents)); }, [classStudents]);
  useEffect(() => { localStorage.setItem(GURU_KEY, isGuru ? "1" : "0"); }, [isGuru]);

  const level = Math.floor(s.xp / 500) + 1;
  const progressPct = Math.round((s.completed.length / 9) * 100);

  // sync current student into class list
  useEffect(() => {
    setClass(prev => {
      const bestLat = Math.max(0, ...Object.values(s.latihanBest));
      const copy = [...prev];
      const idx = copy.findIndex(c => c.nama.toLowerCase() === s.name.toLowerCase());
      const entry: ClassStudent = {
        nama: s.name, progress: progressPct, xp: s.xp, level,
        skorLatihan: bestLat, skorKuis: s.kuisBest,
        badges: String(s.badges.length), materi: s.completed.length,
      };
      if (idx >= 0) copy[idx] = entry; else copy.unshift(entry);
      return copy;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s.xp, s.completed.length, s.kuisBest, s.name]);

  const addXP = (n: number, text?: string) => {
    setS(prev => ({
      ...prev,
      xp: prev.xp + n,
      feed: text ? [{ id: Math.random().toString(36), text, xp: n, time: "Baru saja" }, ...prev.feed].slice(0, 8) : prev.feed,
    }));
  };

  const completeMateri = (id: string, xp = 100) => {
    setS(prev => {
      if (prev.completed.includes(id)) return prev;
      const label = MISSIONS.find(m => m.id === id)?.title ?? id;
      return {
        ...prev, completed: [...prev.completed, id], xp: prev.xp + xp,
        feed: [{ id: Math.random().toString(36), text: `Menyelesaikan materi ${label}`, xp, time: "Baru saja" }, ...prev.feed].slice(0, 8),
      };
    });
    // auto badges
    if (id === "rangka") unlockBadge("rangka");
    if (id === "sendi") unlockBadge("sendi");
    if (id === "otot") unlockBadge("otot");
    if (id === "mekanik") unlockBadge("gerak");
    if (id === "penyakit") unlockBadge("detektif");
    if (id === "sehat") unlockBadge("penjaga");
  };

  const unlockBadge = (id: BadgeId) => {
    setS(prev => {
      if (prev.badges.includes(id)) return prev;
      const b = BADGES.find(x => x.id === id);
      return {
        ...prev, badges: [...prev.badges, id], xp: prev.xp + 200,
        feed: [{ id: Math.random().toString(36), text: `Mendapat badge ${b?.name}`, xp: 200, time: "Baru saja" }, ...prev.feed].slice(0, 8),
      };
    });
  };

  const setProfile = (name: string, avatar: "boy" | "girl") => setS(p => ({ ...p, name: name || p.name, avatar }));
  const recordLatihan = (lvl: string, score: number) => {
    setS(prev => {
      const best = Math.max(prev.latihanBest[lvl] ?? 0, score);
      const gained = score >= 70 ? 50 : 20;
      return {
        ...prev, latihanBest: { ...prev.latihanBest, [lvl]: best }, latihanAttempts: prev.latihanAttempts + 1,
        xp: prev.xp + gained,
        feed: [{ id: Math.random().toString(36), text: `Menyelesaikan Latihan ${lvl} (skor ${score})`, xp: gained, time: "Baru saja" }, ...prev.feed].slice(0, 8),
      };
    });
  };
  const recordKuis = (score: number) => {
    setS(prev => {
      const gained = score >= 80 ? 150 : score >= 60 ? 80 : 30;
      return {
        ...prev, kuisBest: Math.max(prev.kuisBest, score), kuisAttempts: prev.kuisAttempts + 1,
        xp: prev.xp + gained,
        completed: score >= 60 && !prev.completed.includes("kuis") ? [...prev.completed, "kuis"] : prev.completed,
        badges: score >= 80 && !prev.badges.includes("master") ? [...prev.badges, "master" as BadgeId] : prev.badges,
        feed: [{ id: Math.random().toString(36), text: `Menyelesaikan Kuis Master (skor ${score})`, xp: gained, time: "Baru saja" }, ...prev.feed].slice(0, 8),
      };
    });
  };
  const setRefleksi = (v: string) => setS(p => ({ ...p, refleksi: v }));
  const resetAll = () => {
    localStorage.removeItem(KEY); localStorage.removeItem(CLASS_KEY);
    setS({ ...DEFAULT_STATE, lastVisit: new Date().toDateString() });
    setClass(loadClass());
  };
  const setGuru = (v: boolean) => setIsGuru(v);

  const val = useMemo(() => ({ s, level, progressPct, addXP, completeMateri, unlockBadge, setProfile, recordLatihan, recordKuis, setRefleksi, resetAll, classStudents, isGuru, setGuru }), [s, level, progressPct, classStudents, isGuru]);
  return <StoreCtx.Provider value={val}>{children}</StoreCtx.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreCtx);
  if (!ctx) throw new Error("store missing");
  return ctx;
}
