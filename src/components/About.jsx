import { useState, useEffect, useRef } from "react";
import React from "react";

/* ── Skill data ── */
const SKILLS = [
  { label: "Java & Spring Boot", pct: 92, color: "#f97316", icon: "☕" },
  { label: "Microservices & APIs", pct: 86, color: "#3b82f6", icon: "⚡" },
  { label: "Database Design", pct: 82, color: "#a855f7", icon: "🗄️" },
  { label: "DSA", pct: 80, color: "#06b6d4", icon: "🧩" },
];

const LEARNING = [
  { label: "Machine Learning", icon: "🧠", color: "#f472b6" },
  { label: "AI / LLMs", icon: "✨", color: "#a78bfa" },
  { label: "Cloud (AWS)", icon: "☁️", color: "#38bdf8" },
];

/* ── InView hook ── */
function useInView(ref, threshold = 0.12) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return vis;
}

/* ── Radial skill card ── */
function SkillCard({ label, pct, color, icon, delay, visible }) {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const dash = visible ? circ * (1 - pct / 100) : circ;

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", gap: 7,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.92)",
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
    }}>
      <div style={{ position: "relative", width: 66, height: 66 }}>
        <div style={{
          position: "absolute", inset: 8, borderRadius: "50%",
          background: `${color}15`, filter: "blur(5px)",
          opacity: visible ? 1 : 0,
          transition: `opacity 0.6s ease ${delay + 300}ms`,
        }} />
        <svg width="66" height="66" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="33" cy="33" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3.5" />
          <circle
            cx="33" cy="33" r={r} fill="none"
            stroke={color} strokeWidth="3.5" strokeLinecap="round"
            strokeDasharray={circ} strokeDashoffset={dash}
            style={{
              transition: `stroke-dashoffset 1.1s cubic-bezier(0.4,0,0.2,1) ${delay + 150}ms`,
              filter: `drop-shadow(0 0 3px ${color}88)`,
            }}
          />
        </svg>
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ fontSize: 14, lineHeight: 1 }}>{icon}</span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, fontWeight: 600, color, marginTop: 1, lineHeight: 1.2,
          }}>{pct}%</span>
        </div>
      </div>
      <span style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 11, fontWeight: 500, color: "#94a3b8",
        textAlign: "center", lineHeight: 1.25, maxWidth: 72,
      }}>{label}</span>
    </div>
  );
}

/* ── Compact code panel ── */
function CodePanel() {
  const [cursor, setCursor] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(t);
  }, []);

  const L = (indent, content) => (
    <div style={{ paddingLeft: indent * 14, lineHeight: "1.7" }}>{content}</div>
  );
  const kw   = t => <span style={{ color: "#c084fc" }}>{t}</span>;
  const str  = t => <span style={{ color: "#fbbf24" }}>"{t}"</span>;
  const sym  = t => <span style={{ color: "#475569" }}>{t}</span>;
  const prop = t => <span style={{ color: "#7dd3fc" }}>{t}</span>;
  const val  = (t, c = "#34d399") => <span style={{ color: c }}>{t}</span>;

  return (
    <div style={{
      background: "rgba(8,10,18,0.97)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 14, overflow: "hidden",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "clamp(10.5px, 1.9vw, 12.5px)",
      lineHeight: 1.7,
      boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 6,
        padding: "10px 16px",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        background: "rgba(255,255,255,0.02)",
      }}>
        {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.85 }} />
        ))}
        <span style={{ marginLeft: 8, fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "#475569" }}>Developer.java</span>
      </div>

      <div style={{ padding: "14px 18px", color: "#94a3b8", overflowX: "auto" }}>
        {L(0, <span style={{ color: "#475569" }}>// Aditya Prasad Sahoo</span>)}
        {L(0, <>{kw("public class ")} <span style={{ color: "#60a5fa" }}>Developer</span> <sym>{"{"}</sym></>)}
        {L(1, <>{kw("String ")} {prop("role")} <sym>= </sym>{str("Aspiring Software Engineer")}<sym>;</sym></>)}
        {L(1, <>{kw("String ")} {prop("location")} <sym>= </sym>{str("India 🇮🇳")}<sym>;</sym></>)}
        {L(1, <>{kw("boolean ")} {prop("openToWork")} <sym>= </sym>{val("true")}<sym>;</sym></>)}
        {L(0, "")}
        {L(1, <>{kw("String[] ")} {prop("learning")} <sym>= {"{"} </sym>{str("ML/AI")}<sym>, </sym>{str("Cloud (AWS)")}<sym> {"}"};</sym></>)}
        {L(1, <>{kw("String[] ")} {prop("loves")} <sym>= {"{"} </sym>{str("System design")}<sym>, </sym>{str("Spring Boot")}<sym> {"}"};</sym></>)}
        {L(0, "")}
        {L(1, <>{kw("void ")} <span style={{ color: "#60a5fa" }}>main</span><sym>() {"{"}</sym></>)}
        {L(2, <><span style={{ color: "#64748b" }}>println</span><sym>(</sym>{str("Let's build something real.")}<sym>);</sym></>)}
        <div style={{ paddingLeft: 28, lineHeight: "1.7" }}>
          <span style={{ color: "#475569" }}>{"}"}</span>
          <span style={{
            display: "inline-block", width: 2, height: "1em",
            background: "#60a5fa", marginLeft: 3, verticalAlign: "middle",
            opacity: cursor ? 1 : 0, transition: "opacity 0.1s",
          }} />
        </div>
        {L(0, <sym>{"}"}</sym>)}
      </div>
    </div>
  );
}

/* ── Main ── */
export default function About() {
  const sectionRef = useRef(null);
  const vis = useInView(sectionRef);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.4; }
        }
        @keyframes chip-in {
          from { opacity: 0; transform: translateY(8px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: start;
        }

        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .about-left {
            animation: fadeUp 0.65s cubic-bezier(0.23,1,0.32,1) forwards !important;
          }
          .about-right {
            animation: fadeUp 0.65s cubic-bezier(0.23,1,0.32,1) 0.12s forwards !important;
          }
        }

        @media (max-width: 520px) {
          #about {
            padding: 52px 14px !important;
          }
          .about-headline {
            font-size: 21px !important;
            margin-bottom: 12px !important;
          }
          .bio-para {
            font-size: 13px !important;
            line-height: 1.65 !important;
          }
          .skill-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .proficiency-wrap {
            padding: 14px !important;
          }
        }
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        style={{
          padding: "110px 28px",
          width: "100%",
          background: "#080a10",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div style={{ position: "absolute", top: "20%", left: "10%", width: 380, height: 380, borderRadius: "50%", background: "rgba(59,130,246,0.06)", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 280, height: 280, borderRadius: "50%", background: "rgba(168,85,247,0.05)", filter: "blur(70px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="about-grid">

            {/* LEFT: Code + learning chips */}
            <div
              className="about-left"
              style={{
                animation: vis ? "fadeSlideLeft 0.7s cubic-bezier(0.23,1,0.32,1) forwards" : "none",
                opacity: vis ? undefined : 0,
              }}
            >
              <CodePanel />
              <div style={{ marginTop: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 9 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399", flexShrink: 0, animation: "pulse-dot 2s ease-in-out infinite" }} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#34d399", letterSpacing: "0.12em", textTransform: "uppercase" }}>Currently Exploring</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {LEARNING.map((item, i) => (
                    <div key={item.label} style={{
                      display: "inline-flex", alignItems: "center", gap: 5,
                      padding: "5px 11px", borderRadius: 100,
                      background: `${item.color}12`, border: `1px solid ${item.color}28`,
                      animation: vis ? `chip-in 0.4s ease ${0.45 + i * 0.1}s both` : "none",
                      opacity: 0,
                    }}>
                      <span style={{ fontSize: 12 }}>{item.icon}</span>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500, color: item.color }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Bio + skills */}
            <div
              className="about-right"
              style={{
                display: "flex", flexDirection: "column", gap: 0,
                animation: vis ? "fadeSlideRight 0.7s cubic-bezier(0.23,1,0.32,1) 0.15s forwards" : "none",
                opacity: vis ? undefined : 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12, marginTop:12 }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 15, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3b82f6", fontWeight: 500 }}>About Me</span>
                <div style={{ height: 1, width: 36, background: "linear-gradient(to right, #3b82f6, transparent)" }} />
              </div>

              <h2
                className="about-headline"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(20px, 3vw, 40px)",
                  color: "#f1f5f9",
                  lineHeight: 1.15,
                  margin: "0 0 16px",
                  letterSpacing: "-0.03em",
                }}
              >
                Building systems{" "}
                <span style={{ background: "linear-gradient(135deg, #3b82f6, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>end-to-end</span>
                {" "}— API to UI.
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 22 }}>
                {[
                  <>I'm an <span style={{ color: "#e2e8f0", fontWeight: 600 }}>aspiring software engineer</span> who enjoys building things end-to-end — secure, scalable backends paired with clean, modern UIs.</>,
                  <>My core focus is <span style={{ color: "#e2e8f0", fontWeight: 600 }}>Java backend development</span> with Spring Boot — microservices, REST APIs, and full-stack apps. My GitHub reflects my drive to ship real projects.</>,
                  <>Lately diving into <span style={{ color: "#f472b6", fontWeight: 600 }}>ML & AI</span> and expanding into <span style={{ color: "#38bdf8", fontWeight: 600 }}>cloud (AWS)</span> — because great software needs to scale end-to-end.</>,
                ].map((para, i) => (
                  <p key={i} className="bio-para" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748b", lineHeight: 1.75, fontSize: 14, margin: 0 }}>{para}</p>
                ))}
              </div>

              <div className="proficiency-wrap" style={{ padding: "18px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ display: "block", fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#475569", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>Proficiency</span>
                <div className="skill-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, justifyItems: "center" }}>
                  {SKILLS.map(({ label, pct, color, icon }, i) => (
                    <SkillCard key={label} label={label} pct={pct} color={color} icon={icon} delay={i * 100} visible={vis} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}