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
    href: "https://leetcode.com/",
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
    href: "https://codeforces.com/",
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
    href: "https://www.geeksforgeeks.org/",
    icon: IconGFG,
    accent: "#2DBE6C",
    glow: "rgba(45,190,108,0.35)",
    desc: "My go-to for solidifying core computer science concepts, from OS and DBMS to interview-ready patterns.",
    num: "03",
  },
];

/* ─── Animated counter hook ─── */
function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

/* ─── Card ─── */
function ProfileCard({ p, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const rotX = hovered ? (mouse.y - 0.5) * -14 : 0;
  const rotY = hovered ? (mouse.x - 0.5) * 14 : 0;

  const delay = `${index * 0.15}s`;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMouse({ x: 0.5, y: 0.5 }); }}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        transformStyle: "preserve-3d",
        transform: inView
          ? `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(${hovered ? -10 : 0}px)`
          : "perspective(900px) translateY(40px)",
        opacity: inView ? 1 : 0,
        transition: hovered
          ? "transform 0.1s ease, opacity 0.6s ease"
          : `transform 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${delay}, opacity 0.6s ease ${delay}`,
        cursor: "pointer",
      }}
    >
      {/* Glow blob behind card */}
      <div style={{
        position: "absolute",
        inset: -20,
        borderRadius: 36,
        background: p.glow,
        filter: "blur(32px)",
        opacity: hovered ? 0.9 : 0,
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
          padding: "28px 26px 24px",
          borderRadius: 24,
          background: hovered
            ? `linear-gradient(135deg, rgba(18,20,28,0.98) 0%, rgba(12,14,22,0.98) 100%)`
            : "rgba(12,14,22,0.92)",
          border: `1.5px solid ${hovered ? p.accent : "rgba(255,255,255,0.07)"}`,
          backdropFilter: "blur(20px)",
          textDecoration: "none",
          overflow: "hidden",
          transition: "border-color 0.3s ease, background 0.3s ease",
          minHeight: 240,
        }}
      >
        {/* Corner number */}
        <span style={{
          position: "absolute",
          top: 20,
          right: 22,
          fontFamily: "'Outfit', sans-serif",
          fontSize: 52,
          fontWeight: 800,
          color: hovered ? p.accent : "rgba(255,255,255,0.04)",
          lineHeight: 1,
          transition: "color 0.3s ease",
          userSelect: "none",
          letterSpacing: "0.02em",
        }}>{p.num}</span>

        {/* Scanline shimmer on hover */}
        {hovered && (
          <div style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(105deg, transparent 40%, ${p.accent}18 50%, transparent 60%)`,
            animation: "shimmer 1.5s infinite",
            pointerEvents: "none",
          }} />
        )}

        {/* Icon */}
        <div style={{
          width: 54,
          height: 54,
          borderRadius: 16,
          background: `${p.accent}18`,
          border: `1.5px solid ${p.accent}44`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: p.accent,
          marginBottom: 18,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          transform: hovered ? "scale(1.12) rotate(-4deg)" : "scale(1)",
          boxShadow: hovered ? `0 0 20px ${p.glow}` : "none",
        }}>
          <p.icon size={26} />
        </div>

        {/* Label + tagline */}
        <div style={{ marginBottom: 10 }}>
          <h3 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 22,
            color: "#f1f5f9",
            margin: 0,
            letterSpacing: "-0.02em",
          }}>{p.label}</h3>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: p.accent,
            margin: "4px 0 0",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>{p.tagline}</p>
        </div>

        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 13.5,
          color: "#64748b",
          margin: "0 0 18px",
          lineHeight: 1.65,
        }}>{p.desc}</p>

        {/* Bottom row — Visit Profile only */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: "auto",
          paddingTop: 14,
          borderTop: `1px solid ${hovered ? p.accent + "33" : "rgba(255,255,255,0.06)"}`,
          transition: "border-color 0.3s ease",
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            padding: "7px 14px",
            borderRadius: 100,
            background: hovered ? `${p.accent}18` : "transparent",
            border: `1px solid ${hovered ? p.accent + "55" : "rgba(255,255,255,0.08)"}`,
            transition: "all 0.3s ease",
          }}>
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              color: hovered ? p.accent : "#64748b",
              letterSpacing: "0.05em",
              transition: "color 0.3s ease",
            }}>Visit Profile</span>
            <ExternalLink size={12} color={hovered ? p.accent : "#64748b"} style={{ transition: "color 0.3s ease" }} />
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
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes float-dot {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-18px) scale(1.3); opacity: 0.9; }
        }
        @keyframes drift {
          0% { transform: translate(0,0) rotate(0deg); }
          33% { transform: translate(30px, -20px) rotate(120deg); }
          66% { transform: translate(-15px, 20px) rotate(240deg); }
          100% { transform: translate(0,0) rotate(360deg); }
        }
        @keyframes title-in {
          from { opacity:0; transform: translateY(24px) skewY(2deg); }
          to   { opacity:1; transform: translateY(0) skewY(0deg); }
        }
        @keyframes tag-in {
          from { opacity:0; transform: scaleX(0.6); }
          to   { opacity:1; transform: scaleX(1); }
        }
      `}</style>

      <section
        id="profiles"
        ref={sectionRef}
        style={{
          position: "relative",
          padding: "120px 28px",
          width: "100%",
          overflow: "hidden",
          background: "#080a10",
        }}
      >
        {/* Ambient orbs */}
        {[
          { color: "#FFA11622", size: 600, top: "10%", left: "5%", dur: "18s" },
          { color: "#4E9BFF1A", size: 500, top: "40%", right: "8%", dur: "24s" },
          { color: "#2DBE6C18", size: 400, bottom: "5%", left: "30%", dur: "20s" },
        ].map((o, i) => (
          <div key={i} style={{
            position: "absolute",
            width: o.size,
            height: o.size,
            borderRadius: "50%",
            background: o.color,
            filter: "blur(80px)",
            top: o.top,
            left: o.left,
            right: o.right,
            bottom: o.bottom,
            animation: `drift ${o.dur} ease-in-out infinite`,
            pointerEvents: "none",
          }} />
        ))}

        {/* Grid dots */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(78,155,255,0.1)",
              border: "1px solid rgba(78,155,255,0.25)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 20,
              animation: inView ? "tag-in 0.5s ease forwards" : "none",
              opacity: 0,
            }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#4E9BFF", animation: "float-dot 2s ease-in-out infinite" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 27, color: "#4E9BFF", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Coding Profiles
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              color: "#f1f5f9",
              margin: "0 0 16px",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              animation: inView ? "title-in 0.7s cubic-bezier(0.23,1,0.32,1) 0.1s forwards" : "none",
              opacity: 0,
            }}>
              
            </h2>

            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 15,
              color: "#475569",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.6,
              animation: inView ? "title-in 0.7s cubic-bezier(0.23,1,0.32,1) 0.25s forwards" : "none",
              opacity: 0,
            }}>
              DSA & competitive programming platforms where problems become solutions.
            </p>
          </div>

          {/* Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
            maxWidth: 1100,
            margin: "0 auto",
          }}>
            {PROFILES.map((p, i) => (
              <ProfileCard key={p.id} p={p} index={i} inView={inView} />
            ))}
          </div>

          {/* Bottom line */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginTop: 56,
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease 0.7s",
          }}>
            {PROFILES.map(p => (
              <div key={p.id} style={{ width: 6, height: 6, borderRadius: "50%", background: p.accent, opacity: 0.6 }} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}