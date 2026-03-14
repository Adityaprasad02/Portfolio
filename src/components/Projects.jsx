import { useState, useEffect, useRef, useCallback } from "react";
import React from "react";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

import landBB from "../assets/Bill-Bridge/land-bb.png";
import p1 from "../assets/Bill-Bridge/p1.png";
import p2 from "../assets/Bill-Bridge/p2.png";
import payment from "../assets/Bill-Bridge/payment.png";
import landing from "../assets/Exam-lens/landing.png";
import elens1 from "../assets/Exam-lens/elens1.png";
import elens2 from "../assets/Exam-lens/elens2.png";
import elens3 from "../assets/Exam-lens/elens3.png";
import land from "../assets/Medicure/land.png";
import med1 from "../assets/Medicure/med1.png";
import med2 from "../assets/Medicure/med2.png";
import med3 from "../assets/Medicure/med3.png";
import chat1 from "../assets/Chat-App/chat-ui1.png";
import chat2 from "../assets/Chat-App/chat-ui2.png";

/* ─── Data ─── */
const PROJECTS = [
  {
    id: 0, num: "01",
    title: "Bill-Bridge",
    tag: "Financial App",
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.3)",
    cover: landBB,
    short: "Centralized billing with Paytm gateway & Google OAuth security.",
    description: "A secured centralized billing system featuring Paytm payment gateway integration via WebSockets. Supports refund application, payment detail tracking, and refund status monitoring — all behind Google OAuth authentication.",
    tech: ["Spring Boot", "React", "Docker", "Supabase", "PostgreSQL", "Google OAuth"],
    live: "https://bill-bridge-frontend.vercel.app/",
    github: "https://github.com/Adityaprasad02/Bill-Bridge",
    screenshots: [landBB, p1, p2, payment],
  },
  {
    id: 1, num: "02",
    title: "Exam-Lens",
    tag: "AI-Powered",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.3)",
    cover: landing,
    short: "AI analysis of previous year question papers with smart insights.",
    description: "An AI-enabled platform for analyzing previous year question papers. Delivers topic-wise marks distribution, importance weightage percentages, and downloadable PDF reports — powered by asynchronous AI API integration.",
    tech: ["Spring Boot", "Async API", "AI / LLMs", "React", "PDF Export"],
    live: "https://exam-lens.vercel.app/",
    github: "https://github.com/Adityaprasad02/Exam-lens-Backend",
    screenshots: [landing, elens1, elens2, elens3],
  },
  {
    id: 2, num: "03",
    title: "Medicure",
    tag: "Healthcare",
    accent: "#3b82f6", // blue-600
    glow: "rgba(59,130,246,0.3)",
    cover: land,
    short: "Healthcare management — patients, records & appointments.",
    description: "A comprehensive healthcare management system for handling patient records, test department workflows, and doctor appointment scheduling. Built for reliability and scalability with Spring Batch for background record processing.",
    tech: ["Spring Boot", "Spring Batch", "Redis", "PostgreSQL", "Docker"],
    live: "https://medicuregeneralhospital.netlify.app/",
    github: "https://github.com/Adityaprasad02/Medicure_Project",
    screenshots: [land, med1, med2, med3],
  },
  {
    id: 3, num: "04",
    title: "Real-Time Chat",
    tag: "WebSockets",
    accent: "#6366f1", // indigo-500
    glow: "rgba(99,102,241,0.3)",
    cover: chat1,
    short: "Live messaging with WebSocket-powered real-time communication.",
    description: "A real-time chat application built on WebSockets for instant bidirectional messaging. Supports multiple chat rooms, live user presence indicators, and message persistence backed by a Spring Boot server.",
    tech: ["Spring Boot", "WebSockets", "STOMP", "React"],
    live: null,
    github: "https://github.com/Adityaprasad02/Websockets-Chat-App",
    screenshots: [chat1, chat2],
  },
];

/* ─── InView hook ─── */
function useInView(ref) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return vis;
}

/* ─── Timeline node dot ─── */
function TimelineNode({ accent, num }) {
  return (
    <div style={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      width: 56,
    }}>
      {/* Outer ring */}
      <div style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: `${accent}18`,
        border: `2px solid ${accent}55`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0 0 20px ${accent}44`,
        position: "relative",
        zIndex: 2,
        flexShrink: 0,
      }}>
        {/* Inner dot */}
        <div style={{
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: accent,
          boxShadow: `0 0 10px ${accent}`,
        }} />
      </div>
      {/* Number label */}
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10,
        color: accent,
        marginTop: 6,
        letterSpacing: "0.1em",
        opacity: 0.8,
      }}>{num}</span>
    </div>
  );
}

/* ─── Project Card — alternating ─── */
function ProjectCard({ p, index, onOpen }) {
  const ref = useRef(null);
  const vis = useInView(ref);
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0; // even = image left, odd = image right

  const slideFrom = isEven ? "-40px" : "40px";

  return (
    <div
      ref={ref}
      className="timeline-row"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 56px 1fr",
        alignItems: "center",
        gap: 0,
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${index * 0.13}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${index * 0.13}s`,
      }}
    >
      {/* ── Left slot ── */}
      <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: 28 }}>
        {isEven ? (
          // Image on the left for even
          <ImagePanel p={p} hovered={hovered} setHovered={setHovered} side="left" />
        ) : (
          // Info on the left for odd
          <InfoPanel p={p} hovered={hovered} setHovered={setHovered} onOpen={onOpen} side="left" />
        )}
      </div>

      {/* ── Timeline node (center) ── */}
      <TimelineNode accent={p.accent} num={p.num} />

      {/* ── Right slot ── */}
      <div style={{ display: "flex", justifyContent: "flex-start", paddingLeft: 28 }}>
        {isEven ? (
          // Info on the right for even
          <InfoPanel p={p} hovered={hovered} setHovered={setHovered} onOpen={onOpen} side="right" />
        ) : (
          // Image on the right for odd
          <ImagePanel p={p} hovered={hovered} setHovered={setHovered} side="right" />
        )}
      </div>
    </div>
  );
}

/* ─── Image panel ─── */
function ImagePanel({ p, hovered, setHovered, side }) {
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        maxWidth: 480,
        borderRadius: 18,
        overflow: "hidden",
        position: "relative",
        aspectRatio: "16/9",
        background: "#050709",
        border: `2.5px solid ${p.accent}`,
        boxShadow: `0 0 24px 4px ${p.accent}66, 0 0 60px 0px ${p.accent}33, 0 4px 30px rgba(0,0,0,0.5)`,
        transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
        transform: hovered
          ? (side === "left" ? "translateX(-5px)" : "translateX(5px)")
          : "translateX(0)",
        filter: hovered ? `drop-shadow(0 0 16px ${p.accent}99)` : "none",
      }}
    >
      <img
        src={p.cover}
        alt={p.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          filter: hovered ? "brightness(1.0)" : "brightness(0.72)",
          transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1), filter 0.4s ease",
        }}
      />
      {/* Fade edge toward center timeline */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: side === "left"
          ? "linear-gradient(to right, transparent 60%, rgba(8,10,16,0.7) 100%)"
          : "linear-gradient(to left, transparent 60%, rgba(8,10,16,0.7) 100%)",
        pointerEvents: "none",
      }} />
    </div>
  );
}

/* ─── Info panel ─── */
function InfoPanel({ p, hovered, setHovered, onOpen, side }) {
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        maxWidth: 420,
        padding: "28px 26px",
        borderRadius: 18,
        background: "rgba(10,11,20,0.9)",
        border: `1.5px solid ${hovered ? p.accent + "44" : "rgba(255,255,255,0.06)"}`,
        backdropFilter: "blur(12px)",
        boxShadow: hovered ? `0 16px 48px ${p.glow}` : "0 4px 24px rgba(0,0,0,0.3)",
        transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
        transform: hovered
          ? (side === "left" ? "translateX(-4px)" : "translateX(4px)")
          : "translateX(0)",
        textAlign: side === "right" ? "left" : "right",
        position: "relative",
      }}
    >
      {/* Tag — top right corner of info card */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          right: 16,
          display: "flex",
          justifyContent: side === "left" ? "flex-start" : "flex-end",
          maxWidth: "calc(100% - 32px)",
          zIndex: 2,
        }}
      >
        <span style={{
          padding: "4px 11px",
          borderRadius: 100,
          background: `${p.accent}18`,
          border: `1px solid ${p.accent}44`,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9,
          color: p.accent,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontWeight: 500,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          backgroundClip: "padding-box",
        }}>{p.tag}</span>
      </div>

      <h3 style={{
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 800,
        fontSize: "clamp(20px, 2vw, 24px)",
        color: "#f1f5f9",
        margin: "0 0 8px",
        letterSpacing: "-0.03em",
        lineHeight: 1.1,
        paddingRight: side === "left" ? 0 : 60,
      }}>{p.title}</h3>

      <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 13.5,
        color: "#64748b",
        lineHeight: 1.65,
        margin: "0 0 18px",
      }}>{p.short}</p>

      {/* Tech pills */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        marginBottom: 20,
        justifyContent: side === "left" ? "flex-end" : "flex-start",
      }}>
        {p.tech.slice(0, 4).map(t => (
          <span key={t} style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            padding: "3px 9px",
            borderRadius: 6,
            background: `${p.accent}12`,
            border: `1px solid ${p.accent}28`,
            color: p.accent,
            letterSpacing: "0.04em",
          }}>{t}</span>
        ))}
      </div>

      {/* Actions */}
      <div style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        justifyContent: side === "left" ? "flex-end" : "flex-start",
      }}>
        <button
          onClick={() => onOpen(p)}
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "8px 16px", borderRadius: 9,
            background: p.accent, border: "none", color: "#fff",
            fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 12,
            cursor: "pointer", letterSpacing: "0.01em",
            transition: "opacity 0.2s, transform 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "scale(1.04)"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
        >
          Details <ArrowUpRight size={13} />
        </button>

        {p.live && (
          <a href={p.live} target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "8px 16px", borderRadius: 9,
            background: "transparent", border: `1.5px solid ${p.accent}44`,
            color: p.accent, fontFamily: "'Outfit', sans-serif",
            fontWeight: 600, fontSize: 12, textDecoration: "none",
            transition: "background 0.2s, transform 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = `${p.accent}18`; e.currentTarget.style.transform = "scale(1.04)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            <ExternalLink size={12} /> Live
          </a>
        )}

        <a href={p.github} target="_blank" rel="noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "8px 16px", borderRadius: 9,
          background: "transparent", border: "1.5px solid rgba(255,255,255,0.1)",
          color: "#94a3b8", fontFamily: "'Outfit', sans-serif",
          fontWeight: 600, fontSize: 12, textDecoration: "none",
          transition: "border-color 0.2s, color 0.2s, transform 0.2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "#e2e8f0"; e.currentTarget.style.transform = "scale(1.04)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.transform = "scale(1)"; }}
        >
          <Github size={12} /> GitHub
        </a>
      </div>
    </div>
  );
}

/* ─── Side Drawer ─── */
function Drawer({ project, onClose }) {
  const [ci, setCi] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const open = !!project;

  // Reset on project change
  useEffect(() => {
    if (project) { setCi(0); setImgLoaded(false); }
  }, [project?.id]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const shots = project?.screenshots || [];
  const prev = () => setCi(c => (c - 1 + shots.length) % shots.length);
  const next = () => setCi(c => (c + 1) % shots.length);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(6px)",
          zIndex: 1000,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
      />

      {/* Drawer panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(560px, 100vw)",
          background: "rgba(8,10,16,0.98)",
          borderLeft: `1.5px solid ${project?.accent ?? "#3b82f6"}33`,
          boxShadow: open ? `-24px 0 80px rgba(0,0,0,0.6)` : "none",
          zIndex: 1001,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        {project && (
          <>
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: 18,
                right: 20,
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#f1f5f9"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#94a3b8"; }}
            >
              <X size={16} />
            </button>

            {/* ── Image carousel ── */}
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              background: "#050709",
              flexShrink: 0,
              overflow: "hidden",
            }}>
              <img
                key={ci}
                src={shots[ci]}
                alt={`${project.title} screenshot ${ci + 1}`}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgLoaded(true)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  opacity: imgLoaded ? 1 : 0,
                  transition: "opacity 0.3s ease",
                  background: "#050709",
                }}
              />
              {/* Dim overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 30%, transparent 70%, rgba(8,10,16,0.6) 100%)",
                pointerEvents: "none",
              }} />

              {/* Nav arrows */}
              {shots.length > 1 && (
                <>
                  <button onClick={prev} style={{
                    position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
                    width: 38, height: 38, borderRadius: "50%",
                    background: "rgba(8,10,16,0.7)", border: "1px solid rgba(255,255,255,0.12)",
                    color: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", backdropFilter: "blur(6px)",
                    transition: "background 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(8,10,16,0.7)"}
                  ><ChevronLeft size={18} /></button>

                  <button onClick={next} style={{
                    position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                    width: 38, height: 38, borderRadius: "50%",
                    background: "rgba(8,10,16,0.7)", border: "1px solid rgba(255,255,255,0.12)",
                    color: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", backdropFilter: "blur(6px)",
                    transition: "background 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(8,10,16,0.7)"}
                  ><ChevronRight size={18} /></button>

                  {/* Dots */}
                  <div style={{
                    position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)",
                    display: "flex", gap: 6,
                  }}>
                    {shots.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setCi(i); setImgLoaded(false); }}
                        style={{
                          width: i === ci ? 20 : 7, height: 7, borderRadius: 99,
                          background: i === ci ? project.accent : "rgba(255,255,255,0.25)",
                          border: "none", cursor: "pointer",
                          transition: "all 0.25s ease",
                          padding: 0,
                          boxShadow: i === ci ? `0 0 8px ${project.accent}88` : "none",
                        }}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Thumbnail strip */}
              {shots.length > 1 && (
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  display: "flex",
                  gap: 6,
                  padding: "0 12px 12px",
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  justifyContent: "center",
                }}>
                  {shots.map((s, i) => (
                    <div
                      key={i}
                      onClick={() => { setCi(i); setImgLoaded(false); }}
                      style={{
                        width: 54,
                        height: 36,
                        borderRadius: 6,
                        overflow: "hidden",
                        border: `2px solid ${i === ci ? project.accent : "rgba(255,255,255,0.1)"}`,
                        cursor: "pointer",
                        flexShrink: 0,
                        transition: "border-color 0.2s, transform 0.2s",
                        transform: i === ci ? "scale(1.08)" : "scale(1)",
                        boxShadow: i === ci ? `0 0 12px ${project.accent}55` : "none",
                      }}
                    >
                      <img src={s} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ── Content ── */}
            <div style={{ padding: "28px 28px 36px", display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
              {/* Header */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>

              {/* Creative message: Working on more projects */}
              <div style={{
                marginTop: 32,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}>
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: 22,
                  color: "#3b82f6",
                  letterSpacing: "0.04em",
                  animation: "pulse 1.5s infinite",
                }}>Working on more projects...</span>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 15,
                  color: "#64748b",
                }}>Stay tuned for exciting new creations and innovations!</span>
              </div>

              {/* Pulse animation */}
              <style>{`
                @keyframes pulse {
                  0% { opacity: 1; }
                  50% { opacity: 0.6; }
                  100% { opacity: 1; }
                }
              `}</style>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: project.accent,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}>{project.tag}</span>
                  <div style={{ height: 1, flex: 1, background: `linear-gradient(to right, ${project.accent}44, transparent)` }} />
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: 36,
                    color: `${project.accent}18`,
                    lineHeight: 1,
                  }}>{project.num}</span>
                </div>
                <h2 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: 30,
                  color: "#f1f5f9",
                  margin: 0,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                }}>{project.title}</h2>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14.5,
                color: "#94a3b8",
                lineHeight: 1.75,
                margin: 0,
              }}>{project.description}</p>

              {/* Tech stack */}
              <div>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: "#475569",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  margin: "0 0 10px",
                }}>Tech Stack</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {project.tech.map(t => (
                    <span key={t} style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      padding: "5px 12px",
                      borderRadius: 8,
                      background: `${project.accent}12`,
                      border: `1px solid ${project.accent}35`,
                      color: project.accent,
                      letterSpacing: "0.04em",
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />

              {/* CTA buttons */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {project.live && (
                  <a
                    href={project.live} target="_blank" rel="noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "11px 22px", borderRadius: 12,
                      background: project.accent,
                      color: "#fff",
                      fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14,
                      textDecoration: "none", letterSpacing: "0.01em",
                      transition: "opacity 0.2s, transform 0.2s",
                      boxShadow: `0 4px 20px ${project.glow}`,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
                <a
                  href={project.github} target="_blank" rel="noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "11px 22px", borderRadius: 12,
                    background: "rgba(255,255,255,0.06)",
                    border: "1.5px solid rgba(255,255,255,0.12)",
                    color: "#e2e8f0",
                    fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14,
                    textDecoration: "none", letterSpacing: "0.01em",
                    transition: "background 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <Github size={15} /> View on GitHub
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

/* ─── Main Section ─── */
export default function Projects() {
  const [active, setActive] = useState(null);
  const sectionRef = useRef(null);
  const sectionVis = useInView(sectionRef);

  const handleClose = useCallback(() => setActive(null), []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        /* Mobile: collapse timeline to single column */
        @media (max-width: 768px) {
          .timeline-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .timeline-row > div:nth-child(2) {
            display: none !important;
          }
          .timeline-row > div:nth-child(1),
          .timeline-row > div:nth-child(3) {
            justify-content: center !important;
            padding: 0 !important;
          }
        }
      `}</style>

      <section
        id="projects"
        ref={sectionRef}
        style={{
          padding: "110px 24px",
          width: "100%",
          background: "#080a10",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background texture */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          pointerEvents: "none",
        }} />

        {/* Ambient orbs */}
        <div style={{ position: "absolute", top: "15%", left: "-5%", width: 500, height: 500, borderRadius: "50%", background: "rgba(59,130,246,0.05)", filter: "blur(90px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "0%", width: 400, height: 400, borderRadius: "50%", background: "rgba(167,139,250,0.05)", filter: "blur(80px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Header */}
          <div style={{
            textAlign: "center",
            marginBottom: 64,
            opacity: sectionVis ? 1 : 0,
            transform: sectionVis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(59,130,246,0.08)",
              border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: 100,
              padding: "5px 15px",
              marginBottom: 18,
            }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#3b82f6" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 15, color: "#3b82f6", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Recent Project Highlights
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px,5.5vw,64px)",
              color: "#f1f5f9",
              margin: "0 0 14px",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}>
              Things I've{" "}
              <span style={{
                WebkitTextStroke: "2px #3b82f6",
                WebkitTextFillColor: "transparent",
              }}>
                shipped.
              </span>
            </h2>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 15,
              color: "#475569",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.65,
            }}>
              Click <strong style={{ color: "#94a3b8" }}>Details</strong> on any project to explore screenshots, stack, and links — in a panel that slides in from the side.
            </p>
          </div>

          {/* Timeline cards */}
          <div style={{ position: "relative" }}>
            {/* Vertical timeline line */}
            <div style={{
              position: "absolute",
              top: 24,
              bottom: 24,
              left: "50%",
              transform: "translateX(-50%)",
              width: 2,
              background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.3) 10%, rgba(167,139,250,0.3) 40%, rgba(52,211,153,0.3) 70%, rgba(244,114,182,0.3) 90%, transparent)",
              pointerEvents: "none",
              zIndex: 0,
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
              {PROJECTS.map((p, i) => (
                <ProjectCard
                  key={p.id}
                  p={p}
                  index={i}
                  onOpen={setActive}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Side drawer */}
      <Drawer project={active} onClose={handleClose} />
    </>
  );
}