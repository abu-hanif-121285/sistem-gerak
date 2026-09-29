import type { CSSProperties } from "react";

export type ArtKey =
  | "system"
  | "bone"
  | "joint"
  | "muscle"
  | "skeleton"
  | "movement"
  | "lab"
  | "health"
  | "spine"
  | "trophy";

const spritePositions: Partial<Record<ArtKey, string>> = {
  system: "0% 0%",
  bone: "100% 0%",
  joint: "0% 100%",
  muscle: "100% 100%",
};

const photoPaths: Partial<Record<ArtKey, string>> = {
  skeleton: "images/rangka-realistis.png",
  movement: "images/movement-adventure.jpg",
  lab: "images/lab-adventure.jpg",
  health: "images/healthy-adventure.jpg",
  spine: "images/spine-explorer.png",
};

const descriptions: Record<ArtKey, string> = {
  system: "Model otak tiga dimensi",
  bone: "Model tulang tiga dimensi",
  joint: "Model sendi siku tiga dimensi",
  muscle: "Model otot tiga dimensi",
  skeleton: "Susunan rangka manusia realistis",
  movement: "Anak-anak bergerak aktif di taman",
  lab: "Anak perempuan berhijab panjang menjelajah laboratorium sains",
  health: "Anak-anak menjaga kesehatan tubuh dengan bergerak",
  spine: "Model tulang belakang tiga dimensi",
  trophy: "Piala emas penjelajah sains",
};

export const MISSION_ART: Record<string, ArtKey> = {
  gerak: "system",
  rangka: "skeleton",
  sendi: "joint",
  otot: "muscle",
  mekanik: "movement",
  lab: "lab",
  penyakit: "spine",
  sehat: "health",
  kuis: "trophy",
};

function TrophyArt() {
  return (
    <svg className="h-full w-full" viewBox="0 0 240 240" role="img" aria-label={descriptions.trophy}>
      <defs>
        <radialGradient id="trophy-bg"><stop stopColor="#79d8ff" /><stop offset="1" stopColor="#125cce" /></radialGradient>
        <linearGradient id="trophy-gold" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff2a6" /><stop offset=".28" stopColor="#ffc83d" /><stop offset=".64" stopColor="#f39a13" /><stop offset="1" stopColor="#a65708" /></linearGradient>
        <linearGradient id="trophy-base" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1944a1" /><stop offset="1" stopColor="#09255f" /></linearGradient>
        <filter id="trophy-shadow"><feDropShadow dx="0" dy="10" stdDeviation="7" floodColor="#071b53" floodOpacity=".45" /></filter>
      </defs>
      <rect width="240" height="240" fill="url(#trophy-bg)" />
      <circle cx="120" cy="116" r="91" fill="#c8f6ff" opacity=".13" />
      <circle cx="120" cy="116" r="72" fill="#fff8d3" opacity=".15" />
      <path d="M47 53l3 8 8 3-8 3-3 8-3-8-8-3 8-3zM193 48l3 7 7 3-7 3-3 7-3-7-7-3 7-3zM194 144l2 7 7 2-7 2-2 7-2-7-7-2 7-2zM60 159l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#ffed9a" />
      <g filter="url(#trophy-shadow)">
        <path d="M75 65H56c-1 32 12 47 38 48M165 65h19c1 32-12 47-38 48" fill="none" stroke="url(#trophy-gold)" strokeWidth="12" strokeLinecap="round" />
        <path d="M69 54h102l-12 57c-5 23-18 37-39 37s-34-14-39-37z" fill="url(#trophy-gold)" stroke="#fff3ae" strokeWidth="3" />
        <path d="M82 62h14l-7 40c-2 11 0 20 5 27-12-7-18-19-20-31z" fill="#fffbe1" opacity=".55" />
        <path d="M110 144h20v30h-20z" fill="url(#trophy-gold)" />
        <rect x="85" y="172" width="70" height="12" rx="4" fill="url(#trophy-gold)" />
        <path d="M75 183h90l8 22H67z" fill="url(#trophy-base)" stroke="#4bb4fa" strokeWidth="3" />
        <path d="M109 94c-8-7-3-17 6-15 2 0 4 1 5 3 1-2 3-3 5-3 9-2 14 8 6 15-3 3-8 4-11 4s-8-1-11-4z" fill="#fff9d8" />
        <path d="M120 101v16m-7-8h14" stroke="#fff9d8" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function Art({ name, className = "", title }: { name: ArtKey; className?: string; title?: string }) {
  if (name === "trophy") {
    return <div className={`overflow-hidden ${className}`}><TrophyArt /></div>;
  }

  const spritePosition = spritePositions[name];
  if (spritePosition) {
    const style: CSSProperties = {
      backgroundImage: 'url("images/science-topics.png")',
      backgroundSize: "200% 200%",
      backgroundPosition: spritePosition,
      backgroundRepeat: "no-repeat",
    };
    return <div role="img" aria-label={title ?? descriptions[name]} className={`overflow-hidden ${className}`} style={style} />;
  }

  return (
    <img
      src={photoPaths[name]}
      alt={title ?? descriptions[name]}
      loading="lazy"
      className={`object-cover ${name === "skeleton" ? "object-contain bg-[#e4f2ff]" : ""} ${className}`}
    />
  );
}

// Layered gradients keep the working diagrams dimensional without turning them into static pictures.
export function ElbowSimulation({ angle, className = "" }: { angle: number; className?: string }) {
  return (
    <svg viewBox="0 0 260 195" className={className} role="img" aria-label={`Model tiga dimensi sendi siku pada sudut ${angle} derajat`}>
      <defs>
        <linearGradient id="elbow-bone" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#fffef6" /><stop offset=".34" stopColor="#ffedbb" /><stop offset=".75" stopColor="#edc77b" /><stop offset="1" stopColor="#cf9854" /></linearGradient>
        <radialGradient id="elbow-joint"><stop stopColor="#aff4fa" /><stop offset=".65" stopColor="#40b9d7" /><stop offset="1" stopColor="#0b678f" /></radialGradient>
        <filter id="elbow-depth"><feDropShadow dx="2" dy="6" stdDeviation="3" floodColor="#15537c" floodOpacity=".32" /></filter>
      </defs>
      <circle cx="122" cy="107" r="82" fill="#bdeaf8" opacity=".5" />
      <circle cx="122" cy="107" r="57" fill="none" stroke="#7cc9e5" strokeWidth="1.5" strokeDasharray="5 7" opacity=".8" />
      <g filter="url(#elbow-depth)">
        <circle cx="37" cy="119" r="16" fill="url(#elbow-bone)" stroke="#c99c67" strokeWidth="2" />
        <rect x="36" y="107" width="89" height="24" rx="12" fill="url(#elbow-bone)" stroke="#c99c67" strokeWidth="2" />
        <path d="M47 112h60" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".72" />
        <g transform={`rotate(${angle - 180} 120 119)`}>
          <rect x="115" y="109" width="94" height="21" rx="10" fill="url(#elbow-bone)" stroke="#c99c67" strokeWidth="2" />
          <path d="M140 113h54" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity=".75" />
          <circle cx="208" cy="119" r="12" fill="url(#elbow-bone)" stroke="#c99c67" strokeWidth="2" />
        </g>
        <circle cx="120" cy="119" r="18" fill="url(#elbow-joint)" stroke="#efffff" strokeWidth="4" />
        <circle cx="116" cy="115" r="5" fill="#d8ffff" opacity=".92" />
      </g>
      <text x="28" y="158" fill="#144d7a" fontFamily="Nunito,sans-serif" fontSize="12" fontWeight="900">Lengan atas</text>
      <text x="163" y="170" fill="#144d7a" fontFamily="Nunito,sans-serif" fontSize="12" fontWeight="900">Lengan bawah</text>
    </svg>
  );
}

export function ShoulderSimulation({ angle, className = "" }: { angle: number; className?: string }) {
  return (
    <svg viewBox="0 0 220 180" className={className} role="img" aria-label={`Model sendi bahu bergerak pada sudut ${angle} derajat`}>
      <defs>
        <linearGradient id="shoulder-shirt" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#91d5ff" /><stop offset=".48" stopColor="#2374d4" /><stop offset="1" stopColor="#073884" /></linearGradient>
        <linearGradient id="shoulder-arm" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#ffe7c6" /><stop offset=".5" stopColor="#f7bc82" /><stop offset="1" stopColor="#cd865a" /></linearGradient>
        <filter id="shoulder-depth"><feDropShadow dx="2" dy="5" stdDeviation="3" floodColor="#34628d" floodOpacity=".35" /></filter>
      </defs>
      <circle cx="110" cy="91" r="74" fill="#d8f3fd" />
      <g filter="url(#shoulder-depth)">
        <circle cx="110" cy="37" r="20" fill="url(#shoulder-arm)" />
        <path d="M90 34c0-17 10-27 22-27 11 0 21 8 21 23-9-8-14-8-23-5-7 1-13 7-20 9z" fill="#3c2b24" />
        <path d="M82 71q0-15 20-17h16q20 2 20 17v88H82z" fill="url(#shoulder-shirt)" stroke="#15509e" strokeWidth="2" />
        <path d="M92 65h8v88h-8z" fill="#fff" opacity=".32" />
        <g transform={`rotate(${angle} 136 70)`}>
          <rect x="126" y="64" width="23" height="76" rx="11.5" fill="url(#shoulder-arm)" stroke="#c87e56" strokeWidth="1.5" />
          <path d="M132 77v46" stroke="#fff1df" opacity=".7" strokeWidth="3" strokeLinecap="round" />
          <circle cx="137" cy="141" r="12" fill="url(#shoulder-arm)" stroke="#c87e56" strokeWidth="1.5" />
        </g>
        <circle cx="137" cy="71" r="15" fill="#2ab4dc" stroke="#d3fbff" strokeWidth="4" />
        <circle cx="132" cy="65" r="4" fill="#fff" opacity=".8" />
      </g>
    </svg>
  );
}

/* ================= TULANG BELAKANG 3D SAJA (tanpa tokoh) ================= */
export type SpineVariant = "normal" | "skoliosis" | "kifosis" | "lordosis";

type Pt = { x: number; y: number };

const cubicPath = (segs: Pt[][]) =>
  `M${segs[0][0].x} ${segs[0][0].y}` +
  segs.map(s => ` C${s[1].x} ${s[1].y} ${s[2].x} ${s[2].y} ${s[3].x} ${s[3].y}`).join("");

function sampleCurve(segs: Pt[][], per = 60): Pt[] {
  const pts: Pt[] = [];
  segs.forEach((s, si) => {
    const last = si === segs.length - 1;
    const steps = last ? per : per - 1;
    for (let i = 0; i <= steps; i++) {
      const t = i / per, mt = 1 - t;
      pts.push({
        x: mt ** 3 * s[0].x + 3 * mt * mt * t * s[1].x + 3 * mt * t * t * s[2].x + t ** 3 * s[3].x,
        y: mt ** 3 * s[0].y + 3 * mt * mt * t * s[1].y + 3 * mt * t * t * s[2].y + t ** 3 * s[3].y,
      });
    }
  });
  return pts;
}

function centersAlong(segs: Pt[][], n: number): { p: Pt; tilt: number }[] {
  const dense = sampleCurve(segs, 80);
  const out: { p: Pt; tilt: number }[] = [];
  for (let k = 0; k < n; k++) {
    const idx = Math.round((k / (n - 1)) * (dense.length - 1));
    const prev = dense[Math.max(0, idx - 3)];
    const next = dense[Math.min(dense.length - 1, idx + 3)];
    const dx = next.x - prev.x;
    const dy = next.y - prev.y;
    out.push({ p: dense[idx], tilt: (Math.atan2(dx, dy) * 180) / Math.PI });
  }
  return out;
}

/* Garis tengah tiap varian — sengaja dibuat tegas agar perbedaannya mudah dilihat anak */
const FRONT_NORMAL: Pt[][] = [
  [{ x: 120, y: 92 }, { x: 120, y: 130 }, { x: 120, y: 180 }, { x: 120, y: 236 }],
];
const FRONT_SKOLIO: Pt[][] = [
  [{ x: 120, y: 90 }, { x: 150, y: 114 }, { x: 154, y: 140 }, { x: 130, y: 162 }],
  [{ x: 130, y: 162 }, { x: 106, y: 184 }, { x: 88, y: 198 }, { x: 94, y: 216 }],
  [{ x: 94, y: 216 }, { x: 100, y: 228 }, { x: 110, y: 232 }, { x: 118, y: 238 }],
];
const SIDE_NORMAL: Pt[][] = [
  [{ x: 130, y: 90 }, { x: 126, y: 122 }, { x: 126, y: 152 }, { x: 132, y: 180 }],
  [{ x: 132, y: 180 }, { x: 137, y: 202 }, { x: 133, y: 220 }, { x: 130, y: 238 }],
];
const SIDE_KYPHO: Pt[][] = [
  [{ x: 140, y: 88 }, { x: 112, y: 106 }, { x: 96, y: 136 }, { x: 103, y: 168 }],
  [{ x: 103, y: 168 }, { x: 110, y: 196 }, { x: 122, y: 218 }, { x: 130, y: 238 }],
];
const SIDE_LORDO: Pt[][] = [
  [{ x: 130, y: 88 }, { x: 126, y: 120 }, { x: 128, y: 152 }, { x: 141, y: 180 }],
  [{ x: 141, y: 180 }, { x: 154, y: 202 }, { x: 150, y: 220 }, { x: 132, y: 240 }],
];

const VIEW_LABEL: Record<SpineVariant, string> = {
  normal: "Model tulang belakang sehat: ruas tulang tersusun lurus dan seimbang",
  skoliosis: "Model tulang belakang dengan skoliosis: melengkung ke samping seperti huruf S",
  kifosis: "Model tulang belakang dengan kifosis: punggung atas menonjol ke belakang",
  lordosis: "Model tulang belakang dengan lordosis: pinggang melengkung terlalu ke depan",
};

const VIEW_BADGE: Record<SpineVariant, string> = {
  normal: "TAMPAK DEPAN • SEHAT",
  skoliosis: "TAMPAK DEPAN • SKOLIOSIS",
  kifosis: "TAMPAK SAMPING • KIFOSIS",
  lordosis: "TAMPAK SAMPING • LORDOSIS",
};

const BOTTOM_NOTE: Record<SpineVariant, string> = {
  normal: "Lurus & seimbang",
  skoliosis: "Melengkung seperti huruf S",
  kifosis: "Menonjol ke belakang",
  lordosis: "Melengkung ke depan",
};

function BoneDefs() {
  return (
    <defs>
      <linearGradient id="sp3d-bone" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#fffdf4" /><stop offset=".32" stopColor="#ffefc0" /><stop offset=".68" stopColor="#eab968" /><stop offset="1" stopColor="#a9743a" />
      </linearGradient>
      <linearGradient id="sp3d-bone-dk" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#f3cf8d" /><stop offset="1" stopColor="#9a6530" />
      </linearGradient>
      <linearGradient id="sp3d-disc" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#d9f7ff" /><stop offset=".55" stopColor="#63cdee" /><stop offset="1" stopColor="#1c7ca6" />
      </linearGradient>
      <filter id="sp3d-soft" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0b2f6e" floodOpacity=".3" />
      </filter>
    </defs>
  );
}

function Vertebra3D({ x, y, w, h, tilt, side, hot }: { x: number; y: number; w: number; h: number; tilt: number; side: boolean; hot: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${tilt})`}>
      {side ? (
        <path d={`M${-w / 2 + 3} -3 L${-w / 2 - 15} -8 L${-w / 2 - 15} 8 L${-w / 2 + 3} 5 Z`} fill="url(#sp3d-bone-dk)" stroke="#8a5a2b" strokeWidth="1.6" strokeLinejoin="round" />
      ) : (
        <>
          <rect x={-w / 2 - 15} y={-4.2} width={15} height={8.4} rx={4.2} fill="url(#sp3d-bone-dk)" stroke="#8a5a2b" strokeWidth="1.6" />
          <rect x={w / 2} y={-4.2} width={15} height={8.4} rx={4.2} fill="url(#sp3d-bone-dk)" stroke="#8a5a2b" strokeWidth="1.6" />
          <rect x={-w / 2 - 12} y={-2.4} width={9} height={3.4} rx={1.7} fill="#fff" opacity=".5" />
          <rect x={w / 2 + 3} y={-2.4} width={9} height={3.4} rx={1.7} fill="#fff" opacity=".5" />
        </>
      )}
      <rect x={-w / 2 + 3} y={-h / 2 + 3.5} width={w} height={h} rx={5} fill="#7c4f22" opacity=".35" />
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={5.5} fill="url(#sp3d-bone)" stroke={hot ? "#e11d48" : "#8a5a2b"} strokeWidth={hot ? 2.4 : 1.8} />
      <rect x={-w / 2 + 4.5} y={-h / 2 + 2.6} width={w - 9} height={5} rx={2.5} fill="#fff" opacity=".68" />
      <rect x={-w / 2 + 4.5} y={h / 2 - 4.2} width={w - 9} height={2.4} rx={1.2} fill="#8a5a2b" opacity=".32" />
    </g>
  );
}

export function SpinePoster({ variant, className = "" }: { variant: SpineVariant; className?: string }) {
  const front = variant === "normal" || variant === "skoliosis";
  const segs = variant === "normal" ? FRONT_NORMAL : variant === "skoliosis" ? FRONT_SKOLIO : variant === "kifosis" ? SIDE_KYPHO : SIDE_LORDO;
  const refSegs = front ? FRONT_NORMAL : SIDE_NORMAL;
  const N = 13;
  const items = centersAlong(segs, N);
  const refPath = cubicPath(refSegs);
  const mainPath = cubicPath(segs);
  const hot = variant !== "normal";

  const discs = items.slice(0, -1).map((it, i) => {
    const nx = items[i + 1];
    const mx = (it.p.x + nx.p.x) / 2;
    const my = (it.p.y + nx.p.y) / 2;
    const w = 22 + ((i + 0.5) / (N - 1)) * 15;
    return { mx, my, tilt: (it.tilt + nx.tilt) / 2, w: w * 0.68 };
  });

  const last = items[items.length - 1];
  const sacTopY = last.p.y + 14;

  return (
    <svg viewBox="0 0 240 360" className={className} role="img" aria-label={VIEW_LABEL[variant]}>
      <BoneDefs />
      <rect x="6" y="6" width="228" height="348" rx="26" fill="#e9f4ff" />
      <ellipse cx="120" cy="190" rx="98" ry="132" fill="#ffffff" opacity=".62" />

      <g>
        <rect x="26" y="16" width="188" height="26" rx="13" fill={hot ? "#9f1239" : "#0b6e3f"} />
        <text x="120" y="33" textAnchor="middle" fill="#fff" fontFamily="Nunito,sans-serif" fontSize="10.5" fontWeight="900" letterSpacing="1">{VIEW_BADGE[variant]}</text>
      </g>

      {/* Cahaya penegas bentuk yang berubah */}
      {hot && <path d={mainPath} fill="none" stroke="#e11d48" strokeWidth="26" strokeLinecap="round" opacity=".14" />}

      {/* Acuan bentuk normal */}
      {hot && <path d={refPath} fill="none" stroke="#94a3b8" strokeWidth="3.5" strokeDasharray="6 8" strokeLinecap="round" />}

      {/* Bantalan antar ruas */}
      <g filter="url(#sp3d-soft)">
        {discs.map((d, i) => (
          <g key={i} transform={`translate(${d.mx} ${d.my}) rotate(${d.tilt})`}>
            <rect x={-d.w / 2} y={-3.4} width={d.w} height={6.8} rx={3.4} fill="url(#sp3d-disc)" stroke="#0f5a7d" strokeWidth="1.4" />
            <rect x={-d.w / 2 + 3} y={-2} width={d.w - 6} height={2.2} rx={1.1} fill="#fff" opacity=".6" />
          </g>
        ))}
      </g>

      {/* Tulang kelangkang sebagai penutup bawah */}
      <g filter="url(#sp3d-soft)">
        <path d={`M${last.p.x - 21} ${sacTopY} L${last.p.x + 21} ${sacTopY} L${last.p.x + 12} ${sacTopY + 34} L${last.p.x - 12} ${sacTopY + 34} Z`} fill="url(#sp3d-bone)" stroke={hot ? "#e11d48" : "#8a5a2b"} strokeWidth="1.8" strokeLinejoin="round" />
        <path d={`M${last.p.x - 15} ${sacTopY + 11} L${last.p.x + 15} ${sacTopY + 11}`} stroke="#8a5a2b" strokeWidth="1.4" opacity=".6" strokeLinecap="round" />
        <path d={`M${last.p.x - 12} ${sacTopY + 20} L${last.p.x + 12} ${sacTopY + 20}`} stroke="#8a5a2b" strokeWidth="1.4" opacity=".6" strokeLinecap="round" />
        <path d={`M${last.p.x - 14} ${sacTopY + 5} L${last.p.x + 4} ${sacTopY + 5}`} stroke="#fff" strokeWidth="2.4" strokeLinecap="round" opacity=".6" />
      </g>

      {/* Ruas-ruas tulang */}
      <g filter="url(#sp3d-soft)">
        {items.map((it, i) => {
          const w = 23 + (i / (N - 1)) * 17;
          const h = 12.5 + (i / (N - 1)) * 5;
          const isHotRegion =
            variant === "skoliosis" ? i >= 3 && i <= 9 : variant === "kifosis" ? i >= 3 && i <= 8 : variant === "lordosis" ? i >= 7 && i <= 11 : false;
          return <Vertebra3D key={i} x={it.p.x} y={it.p.y} w={w} h={h} tilt={it.tilt} side={!front} hot={isHotRegion} />;
        })}
      </g>

      {/* Panah penunjuk yang besar dan jelas */}
      <g strokeLinejoin="round">
        {variant === "skoliosis" && (
          <g>
            <line x1="196" y1="128" x2="162" y2="132" stroke="#f59e0b" strokeWidth="7" strokeLinecap="round" />
            <polygon points="162,118 162,146 142,132" fill="#f59e0b" stroke="#b45309" strokeWidth="1.6" />
            <line x1="44" y1="202" x2="80" y2="200" stroke="#f59e0b" strokeWidth="7" strokeLinecap="round" />
            <polygon points="80,186 80,214 100,200" fill="#f59e0b" stroke="#b45309" strokeWidth="1.6" />
          </g>
        )}
        {variant === "kifosis" && (
          <g>
            <line x1="52" y1="142" x2="88" y2="144" stroke="#f59e0b" strokeWidth="7" strokeLinecap="round" />
            <polygon points="88,130 88,158 108,144" fill="#f59e0b" stroke="#b45309" strokeWidth="1.6" />
          </g>
        )}
        {variant === "lordosis" && (
          <g>
            <line x1="196" y1="204" x2="162" y2="202" stroke="#f59e0b" strokeWidth="7" strokeLinecap="round" />
            <polygon points="162,188 162,216 142,202" fill="#f59e0b" stroke="#b45309" strokeWidth="1.6" />
          </g>
        )}
      </g>

      {/* Keterangan bawah */}
      <g>
        <rect x="40" y="318" width="160" height="26" rx="13" fill={hot ? "#ffe4e6" : "#dcfce7"} stroke={hot ? "#e11d48" : "#16a34a"} strokeWidth="2" />
        <text x="120" y="335" textAnchor="middle" fontFamily="Nunito,sans-serif" fontSize="11.5" fontWeight="900" fill={hot ? "#9f1239" : "#166534"}>{BOTTOM_NOTE[variant]}</text>
      </g>
    </svg>
  );
}

export function MuscleArmSimulation({ flexed = true, angle, className = "" }: { flexed?: boolean; angle?: number; className?: string }) {
  // Sudut tekukan siku: 0 = lengan lurus, 130 = menekuk penuh.
  // Dibuat menyambung: lengan atas + lengan bawah memakai kapsul membulat
  // dengan lingkaran siku penutup, jadi tidak ada kesan "terpotong".
  const a = Math.max(0, Math.min(130, angle ?? (flexed ? 125 : 8)));
  const t = a / 130;
  const EX = 158;
  const EY = 132;
  const bicepsActive = t > 0.45;
  const tricepsActive = t < 0.4;
  return (
    <svg viewBox="0 0 320 250" className={className} role="img" aria-label={bicepsActive ? "Bisep berkontraksi saat siku menekuk" : "Trisep berkontraksi saat siku melurus"}>
      <defs>
        <linearGradient id="armBoneNat" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fffdf4" /><stop offset=".55" stopColor="#f0cd8a" /><stop offset="1" stopColor="#b57e3e" /></linearGradient>
        <linearGradient id="armSleeveNat" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8fd8ff" /><stop offset=".5" stopColor="#2b7fe0" /><stop offset="1" stopColor="#0e3c96" /></linearGradient>
        <radialGradient id="bicepsHotNat" cx=".4" cy=".35" r=".9"><stop stopColor="#ffc4a3" /><stop offset=".45" stopColor="#fb5a5e" /><stop offset="1" stopColor="#a91f37" /></radialGradient>
        <radialGradient id="tricepsHotNat" cx=".4" cy=".35" r=".9"><stop stopColor="#c9f3ff" /><stop offset=".5" stopColor="#4f9be4" /><stop offset="1" stopColor="#1554a3" /></radialGradient>
        <filter id="armSoftNat" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#7a3b4f" floodOpacity=".28" /></filter>
      </defs>

      <ellipse cx="160" cy="132" rx="138" ry="102" fill="#eaf4ff" />
      <ellipse cx="160" cy="132" rx="112" ry="82" fill="#ffffff" opacity=".55" />

      <g filter="url(#armSoftNat)">
        {/* Lengan baju di bahu */}
        <rect x="16" y="96" width="54" height="72" rx="18" fill="url(#armSleeveNat)" stroke="#0f3a8a" strokeWidth="2.5" />
        <rect x="26" y="104" width="10" height="56" rx="5" fill="#fff" opacity=".35" />
        <rect x="58" y="102" width="10" height="60" rx="5" fill="#0a2447" opacity=".55" />

        {/* Lengan atas (tidak bergerak) */}
        <line x1="60" y1={EY} x2={EX + 4} y2={EY} stroke="#f2a76f" strokeWidth="58" strokeLinecap="round" />
        <line x1="62" y1={EY - 15} x2={EX} y2={EY - 15} stroke="#ffd9b3" strokeWidth="13" strokeLinecap="round" opacity=".75" />
        <line x1="62" y1={EY + 16} x2={EX} y2={EY + 16} stroke="#c97a4a" strokeWidth="10" strokeLinecap="round" opacity=".35" />
        {/* Tulang lengan atas */}
        <line x1="60" y1={EY} x2={EX + 6} y2={EY} stroke="url(#armBoneNat)" strokeWidth="15" strokeLinecap="round" />
        <line x1="66" y1={EY - 3} x2={EX} y2={EY - 3} stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".6" />

        {/* Otot trisep (bawah lengan atas) — menonjol saat lurus */}
        <g style={{ transform: `scale(1, ${(1.18 - t * 0.72).toFixed(3)})`, transformOrigin: "110px 158px", transition: "transform .45s cubic-bezier(.34,1.3,.64,1)" }}>
          <ellipse cx="110" cy="158" rx="43" ry="13" fill={tricepsActive ? "url(#tricepsHotNat)" : "#aecfeb"} stroke="#3770b5" strokeWidth="2" />
          <ellipse cx="110" cy="155" rx="30" ry="4.5" fill="#fff" opacity={tricepsActive ? 0.65 : 0.4} />
        </g>

        {/* Lengan bawah (berputar pada siku) */}
        <g style={{ transform: `rotate(${(-a).toFixed(1)}deg)`, transformOrigin: `${EX}px ${EY}px`, transition: "transform .35s ease-out" }}>
          <line x1={EX - 6} y1={EY} x2="252" y2={EY} stroke="#f2a76f" strokeWidth="48" strokeLinecap="round" />
          <line x1={EX} y1={EY - 12} x2="250" y2={EY - 12} stroke="#ffd9b3" strokeWidth="10" strokeLinecap="round" opacity=".7" />
          <line x1={EX - 6} y1={EY} x2="252" y2={EY} stroke="url(#armBoneNat)" strokeWidth="13" strokeLinecap="round" />
          {/* Urat tendon bisep yang menempel ke lengan bawah */}
          <line x1={EX + 2} y1={EY - 13} x2="196" y2={EY - 13} stroke="#fff4e2" strokeWidth="5" strokeLinecap="round" opacity=".85" />
          {/* Kepalan tangan */}
          <circle cx="264" cy={EY} r="19" fill="#f2a76f" stroke="#c97a4a" strokeWidth="2" />
          <circle cx="258" cy={EY - 6} r="6" fill="#ffd9b3" opacity=".9" />
          <path d="M256 140 Q264 146 272 140" stroke="#c97a4a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M255 134 Q264 139 273 133" stroke="#c97a4a" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".7" />
        </g>

        {/* Penutup siku — lingkaran kulit yang menyembunyikan sambungan */}
        <circle cx={EX} cy={EY} r="29" fill="#f2a76f" stroke="#c97a4a" strokeWidth="2" />
        <circle cx={EX - 6} cy={EY - 8} r="9" fill="#ffd9b3" opacity=".8" />
        {/* Lipatan siku dalam, muncul saat menekuk */}
        <path d={`M${EX - 14} ${EY + 12} Q${EX + 2} ${EY + 22} ${EX + 16} ${EY + 10}`} stroke="#b25f36" strokeWidth="3" fill="none" strokeLinecap="round" opacity={(t * 0.9).toFixed(2)} />
        <circle cx={EX} cy={EY} r="9" fill="url(#armBoneNat)" stroke="#8a5a2b" strokeWidth="1.6" opacity=".9" />

        {/* Otot bisep (atas lengan atas) — menggelembung saat menekuk */}
        <g style={{ transform: `scale(${(1 - t * 0.13).toFixed(3)}, ${(1 + t * 1.05).toFixed(3)})`, transformOrigin: "110px 106px", transition: "transform .45s cubic-bezier(.34,1.3,.64,1)" }}>
          <ellipse cx="110" cy="106" rx="44" ry="12.5" fill={bicepsActive ? "url(#bicepsHotNat)" : "#f2a9a2"} stroke="#ac324c" strokeWidth="2" />
          <ellipse cx="110" cy="103" rx="30" ry="4.5" fill="#fff" opacity={bicepsActive ? 0.7 : 0.45} />
        </g>
        {/* Kilau kontraksi */}
        <g opacity={bicepsActive ? 1 : 0} style={{ transition: "opacity .3s" }}>
          <polygon points="110,74 114,84 124,84 116,90 119,100 110,94 101,100 104,90 96,84 106,84" fill="#ffd166" stroke="#b45309" strokeWidth="1.4" strokeLinejoin="round" />
        </g>
        <g opacity={tricepsActive ? 1 : 0} style={{ transition: "opacity .3s" }}>
          <polygon points="110,182 113,189 120,189 115,193 117,200 110,196 103,200 105,193 100,189 107,189" fill="#bae6fd" stroke="#1d4ed8" strokeWidth="1.2" strokeLinejoin="round" />
        </g>
      </g>

      {/* Label */}
      <g fontFamily="Nunito,sans-serif" fontWeight="900" fontSize="12">
        <rect x="66" y="34" width="66" height="22" rx="11" fill={bicepsActive ? "#e11d48" : "#fff"} stroke="#e11d48" strokeWidth="2" />
        <text x="99" y="49" textAnchor="middle" fill={bicepsActive ? "#fff" : "#e11d48"}>BISEP</text>
        <line x1="99" y1="56" x2="108" y2="86" stroke="#e11d48" strokeWidth="2" strokeDasharray="4 3" />
        <rect x="66" y="196" width="66" height="22" rx="11" fill={tricepsActive ? "#2563eb" : "#fff"} stroke="#2563eb" strokeWidth="2" />
        <text x="99" y="211" textAnchor="middle" fill={tricepsActive ? "#fff" : "#2563eb"}>TRISEP</text>
        <line x1="99" y1="196" x2="108" y2="172" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 3" />
      </g>
    </svg>
  );
}
