import React, { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

/* ─── Brand Icons ─── */
function IconLeetCode({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
        fill="currentColor" />
    </svg>
  );
}

function IconCodeforces({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"
        fill="currentColor" />
    </svg>
  );
}

function IconGFG({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4z" fill="currentColor" opacity="0.15" />
      <path d="M8 20c0-3 1.5-5.5 4-7M32 20c0-3-1.5-5.5-4-7M8 20c0 3 1.5 5.5 4 7M32 20c0 3-1.5 5.5-4 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M12 20h7M21 20h7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

/* ─── Config ─── */
const PROFILES = [
  {
    id: "leetcode",
    label: "LeetCode",
    tagline: "Data Structures & Algorithms",
    href: "https://leetcode.com/u/Sahoo712/",
    icon: IconLeetCode,
    accent: "#FFA116",
    glow: "rgba(255,161,22,0.35)",
    desc: "Where I sharpen problem-solving skills — from arrays to dynamic programming, one challenge at a time.",
    num: "01",
  },
  {
    id: "codeforces",
    label: "Codeforces",
    tagline: "Competitive Programming",
    href: "https://codeforces.com/profile/shubhamsahoo230",
    icon: IconCodeforces,
    accent: "#4E9BFF",
    glow: "rgba(78,155,255,0.35)",
    desc: "My arena for algorithmic contests — pushing logical thinking under time pressure against the best.",
    num: "02",
  },
  {
    id: "gfg",
    label: "GeeksforGeeks",
    tagline: "CS Fundamentals",
    href: "https://www.geeksforgeeks.org/profile/b23013rb",
    icon: IconGFG,
    accent: "#2DBE6C",
    glow: "rgba(45,190,108,0.35)",
    desc: "My go-to for solidifying core computer science concepts, from OS and DBMS to interview-ready patterns.",
    num: "03",
  },
];

/* ─── useInView hook ─── */
function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

/* ─── isMobile hook ─── */
function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.innerWidth <= 640);
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return mobile;
}

/* ─── Card ─── */
function ProfileCard({ p, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef(null);
  const isMobile = useIsMobile();

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const rotX = (!isMobile && hovered) ? (mouse.y - 0.5) * -12 : 0;
  const rotY = (!isMobile && hovered) ? (mouse.x - 0.5) * 12 : 0;
  const liftY = (!isMobile && hovered) ? -8 : 0;

  const delay = `${index * 0.15}s`;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMouse({ x: 0.5, y: 0.5 }); }}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        transformStyle: "preserve-3d",
        transform: inView
          ? `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(${liftY}px)`
          : "perspective(900px) translateY(32px)",
        opacity: inView ? 1 : 0,
        transition: hovered
          ? "transform 0.12s ease"
          : `transform 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${delay}, opacity 0.6s ease ${delay}`,
        cursor: "pointer",
        width: "100%",
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: "absolute",
        inset: -16,
        borderRadius: 32,
        background: p.glow,
        filter: "blur(28px)",
        opacity: hovered ? 0.75 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <a
        href={p.href}
        target="_blank"
        rel="noreferrer"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "22px 20px 18px",
          borderRadius: 20,
          background: hovered
            ? "linear-gradient(135deg, rgba(18,20,28,0.98), rgba(12,14,22,0.98))"
            : "rgba(12,14,22,0.92)",
          border: `1.5px solid ${hovered ? p.accent : "rgba(255,255,255,0.07)"}`,
          backdropFilter: "blur(20px)",
          textDecoration: "none",
          overflow: "hidden",
          transition: "border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
          boxShadow: hovered ? `0 16px 48px ${p.glow}` : "0 2px 16px rgba(0,0,0,0.3)",
          minHeight: "auto",
        }}
      >
        {/* Corner number */}
        <span style={{
          position: "absolute",
          top: 16,
          right: 18,
          fontFamily: "'Outfit', sans-serif",
          fontSize: 44,
          fontWeight: 800,
          color: hovered ? p.accent : "rgba(255,255,255,0.04)",
          lineHeight: 1,
          transition: "color 0.3s ease",
          userSelect: "none",
        }}>{p.num}</span>

        {/* Shimmer */}
        {hovered && (
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(105deg, transparent 40%, ${p.accent}14 50%, transparent 60%)`,
            animation: "shimmer 1.5s infinite",
            pointerEvents: "none",
          }} />
        )}

        {/* Icon */}
        <div style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: `${p.accent}18`,
          border: `1.5px solid ${p.accent}44`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: p.accent,
          marginBottom: 14,
          flexShrink: 0,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          transform: hovered ? "scale(1.1) rotate(-4deg)" : "scale(1)",
          boxShadow: hovered ? `0 0 18px ${p.glow}` : "none",
        }}>
          <p.icon size={22} />
        </div>

        {/* Label + tagline */}
        <div style={{ marginBottom: 8 }}>
          <h3 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(17px, 4vw, 21px)",
            color: "#f1f5f9",
            margin: 0,
            letterSpacing: "-0.02em",
          }}>{p.label}</h3>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(9px, 2.2vw, 11px)",
            color: p.accent,
            margin: "3px 0 0",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>{p.tagline}</p>
        </div>

        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(12px, 3vw, 13.5px)",
          color: "#64748b",
          margin: "0 0 16px",
          lineHeight: 1.6,
          flex: 1,
        }}>{p.desc}</p>

        {/* Visit Profile */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingTop: 12,
          borderTop: `1px solid ${hovered ? p.accent + "33" : "rgba(255,255,255,0.06)"}`,
          transition: "border-color 0.3s ease",
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 13px",
            borderRadius: 100,
            background: hovered ? `${p.accent}18` : "transparent",
            border: `1px solid ${hovered ? p.accent + "55" : "rgba(255,255,255,0.08)"}`,
            transition: "all 0.3s ease",
          }}>
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(11px, 2.8vw, 12px)",
              color: hovered ? p.accent : "#64748b",
              transition: "color 0.3s ease",
            }}>Visit Profile</span>
            <ExternalLink size={11} color={hovered ? p.accent : "#64748b"} />
          </div>
        </div>
      </a>
    </div>
  );
}

/* ─── Main Section ─── */
export default function CodingProfiles() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes float-dot {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50%       { transform: translateY(-6px) scale(1.3); opacity: 0.9; }
        }
        @keyframes drift {
          0%   { transform: translate(0,0); }
          50%  { transform: translate(20px,-15px); }
          100% { transform: translate(0,0); }
        }
        @keyframes title-in {
          from { opacity:0; transform: translateY(20px); }
          to   { opacity:1; transform: translateY(0); }
        }
        @keyframes tag-in {
          from { opacity:0; transform: scale(0.85); }
          to   { opacity:1; transform: scale(1); }
        }

        /* ── Profiles grid ── */
        .profiles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* Tablet */
        @media (max-width: 860px) {
          .profiles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }

        /* Mobile */
        @media (max-width: 540px) {
          #profiles {
            padding: 52px 14px !important;
          }
          .profiles-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .profiles-header {
            margin-bottom: 32px !important;
          }
        }
      `}</style>

      <section
        id="profiles"
        ref={sectionRef}
        style={{
          position: "relative",
          padding: "96px 24px",
          background: "#080a10",
          overflow: "hidden",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        {/* Ambient blobs */}
        {[
          { color: "rgba(78,155,255,0.12)",  size: 400, top: "-80px",  left: "-80px",  dur: "18s" },
          { color: "rgba(255,161,22,0.10)",  size: 300, top: "30%",    right: "-60px", dur: "22s" },
          { color: "rgba(45,190,108,0.09)",  size: 280, bottom: "-60px", left: "20%",  dur: "20s" },
        ].map((o, i) => (
          <div key={i} style={{
            position: "absolute",
            width: o.size, height: o.size,
            borderRadius: "50%",
            background: o.color,
            filter: "blur(70px)",
            top: o.top, left: o.left, right: o.right, bottom: o.bottom,
            animation: `drift ${o.dur} ease-in-out infinite`,
            pointerEvents: "none",
          }} />
        ))}

        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", width: "100%" }}>

          {/* Header */}
          <div
            className="profiles-header"
            style={{
              textAlign: "center",
              marginBottom: 52,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(78,155,255,0.1)", border: "1px solid rgba(78,155,255,0.25)",
              borderRadius: 100, padding: "5px 14px", marginBottom: 16,
            }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4E9BFF", animation: "float-dot 2s ease-in-out infinite", flexShrink: 0 }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 20, color: "#4E9BFF", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                Coding Profiles
              </span>
            </div>

           

            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(13px, 3vw, 15px)",
              color: "#475569",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.6,
            }}>
              DSA & competitive programming platforms where problems become solutions.
            </p>
          </div>

          {/* Cards grid */}
          <div className="profiles-grid">
            {PROFILES.map((p, i) => (
              <ProfileCard key={p.id} p={p} index={i} inView={inView} />
            ))}
          </div>

          {/* Decorative dots */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 8, marginTop: 44,
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease 0.7s",
          }}>
            {PROFILES.map(p => (
              <div key={p.id} style={{ width: 6, height: 6, borderRadius: "50%", background: p.accent, opacity: 0.55 }} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}