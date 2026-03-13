import { useState, useEffect, useRef } from "react";
import React from "react";
import NeonBtn from "@/components/ui/NeonBtn.jsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Github, Linkedin, Mail, Download, ExternalLink, ChevronDown,
  ArrowRight, Code2, Terminal, Cpu, Database, Cloud, GitBranch,
  Server, Layers, Workflow, CheckCircle2, Menu, X,
  ChevronLeft, ChevronRight, Zap, Coffee,
} from "lucide-react";
function Projects() {
    const SectionLabel = ({ children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
    <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#00FFB2" }}>{children}</span>
    <div style={{ height: 1, width: 50, background: "linear-gradient(to right, #00FFB2, transparent)" }} />
  </div>
);

const GlowText = ({ children, colors = ["#00FFB2", "#a855f7", "#F59E0B"] }) => (
  <span style={{
    background: `linear-gradient(135deg, ${colors.join(", ")})`,
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    backgroundSize: "200% 200%", animation: "gradShift 4s ease-in-out infinite",
  }}>{children}</span>
);

const PROJECTS = [
  {
    id: 0, number: "01", title: "E-Commerce Microservices",
    short: "Scalable e-commerce platform powered by event-driven Spring Boot microservices.",
    tag: "Backend", accent: "#00FFB2",
    tech: ["Spring Boot", "Kafka", "Docker", "Redis", "PostgreSQL"],
    description: "A production-grade microservices architecture with user service, product catalog, order management and payment processing. Event-driven via Apache Kafka. Redis caching reduced latency by 60%.",
    demo: "#", github: "#", screenshots: ["Screenshot 1", "Screenshot 2", "Screenshot 3"],
  },
  {
    id: 1, number: "02", title: "JWT Auth Service",
    short: "Robust authentication & authorization with JWT, refresh tokens and OAuth2.",
    tag: "Security", accent: "#a855f7",
    tech: ["Spring Security", "JWT", "MySQL", "OAuth2"],
    description: "Complete authentication solution featuring JWT token management, silent refresh, MFA hooks, and fine-grained RBAC. 92% test coverage with JUnit/Mockito.",
    demo: "#", github: "#", screenshots: ["Auth Flow", "Token Diagram"],
  },
  {
    id: 2, number: "03", title: "Real-Time Analytics API",
    short: "High-throughput pipeline processing 1M+ events/hour via Redis Streams.",
    tag: "Analytics", accent: "#F59E0B",
    tech: ["Spring Batch", "Redis", "PostgreSQL", "Docker"],
    description: "Ingestion pipeline buffered via Redis Streams, bulk-processed with Spring Batch, and exposed via REST API with pagination and flexible query DSL.",
    demo: "#", github: "#", screenshots: ["Dashboard", "Pipeline Diagram"],
  },
];
  const [dialog, setDialog] = useState(null);
  const [ci, setCi] = useState(0);

  return (
    <section id="projects" style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <SectionLabel>Portfolio</SectionLabel>
          <h2 style={{ fontFamily: "serif", fontWeight: 900, fontSize: "clamp(28px,4vw,52px)", color: "#fff", margin: 0 }}>
            Selected <GlowText>Projects</GlowText>
          </h2>
          <p style={{ fontFamily: "monospace", fontSize: 12, color: "#6B7280", marginTop: 10 }}>Click any card to explore details, screenshots and source code.</p>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, transparent, rgba(0,255,178,0.2) 10%, rgba(0,255,178,0.2) 90%, transparent)", transform: "translateX(-50%)" }} className="timeline-line" />

          {PROJECTS.map((p, idx) => (
            <div key={p.id} style={{ marginBottom: 60, position: "relative" }}>
              <div style={{ position: "absolute", left: "50%", top: 28, width: 48, height: 48, borderRadius: 12, background: `${p.accent}15`, border: `1px solid ${p.accent}40`, color: p.accent, fontFamily: "serif", fontWeight: 900, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", transform: "translateX(-50%)", zIndex: 2, boxShadow: `0 0 18px ${p.accent}20` }} className="timeline-num">{p.number}</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className={`proj-grid ${idx % 2 === 1 ? "proj-grid-rev" : ""}`}>
                <div
                  style={{ background: "rgba(17,24,39,0.65)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, overflow: "hidden", cursor: "pointer", transition: "all 0.35s", backdropFilter: "blur(12px)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${p.accent}50`; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 20px 40px ${p.accent}18`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  onClick={() => { setDialog(p); setCi(0); }}
                >
                  <div style={{ width: "100%", height: 200, background: `linear-gradient(135deg, ${p.accent}08, ${p.accent}18)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <Code2 size={52} style={{ color: p.accent, opacity: 0.2 }} />
                    <div style={{ position: "absolute", top: 12, right: 12, padding: "3px 12px", borderRadius: 20, border: `1px solid ${p.accent}40`, background: `${p.accent}12`, fontFamily: "monospace", fontSize: 10, color: p.accent }}>{p.tag}</div>
                  </div>
                  <div style={{ padding: 24 }}>
                    <h3 style={{ fontFamily: "serif", fontWeight: 800, fontSize: 20, color: "#fff", margin: "0 0 8px" }}>{p.title}</h3>
                    <p style={{ color: "#9CA3AF", fontSize: 13, lineHeight: 1.65, margin: "0 0 14px" }}>{p.short}</p>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {p.tech.slice(0, 3).map(t => <span key={t} style={{ fontFamily: "monospace", fontSize: 10, padding: "3px 10px", borderRadius: 4, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#9CA3AF" }}>{t}</span>)}
                    </div>
                  </div>
                </div>
                <div className="proj-spacer" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!dialog} onOpenChange={() => setDialog(null)}>
        <DialogContent style={{ background: "#0D1117", border: `1px solid ${dialog?.accent}35`, boxShadow: `0 0 60px ${dialog?.accent}18`, maxWidth: 680 }}>
          {dialog && <>
            <DialogHeader>
              <DialogTitle style={{ fontFamily: "serif", fontWeight: 900, fontSize: 24, color: "#fff" }}>{dialog.title}</DialogTitle>
            </DialogHeader>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 8 }} className="dialog-grid">
              <div>
                <div style={{ borderRadius: 12, overflow: "hidden", height: 180, background: `linear-gradient(135deg, ${dialog.accent}08, ${dialog.accent}18)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 11, color: "#6B7280" }}>{dialog.screenshots[ci]}</span>
                  {dialog.screenshots.length > 1 && <>
                    <button onClick={() => setCi(c => (c - 1 + dialog.screenshots.length) % dialog.screenshots.length)} style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", width: 28, height: 28, borderRadius: "50%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><ChevronLeft size={13} /></button>
                    <button onClick={() => setCi(c => (c + 1) % dialog.screenshots.length)} style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", width: 28, height: 28, borderRadius: "50%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><ChevronRight size={13} /></button>
                    <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 5 }}>
                      {dialog.screenshots.map((_, i) => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i === ci ? dialog.accent : "rgba(255,255,255,0.2)", transition: "background 0.2s" }} />)}
                    </div>
                  </>}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <p style={{ color: "#9CA3AF", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{dialog.description}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {dialog.tech.map(t => <span key={t} style={{ fontFamily: "monospace", fontSize: 10, padding: "3px 10px", borderRadius: 4, border: `1px solid ${dialog.accent}40`, background: `${dialog.accent}10`, color: dialog.accent }}>{t}</span>)}
                </div>
                <div style={{ display: "flex", gap: 10, paddingTop: 4 }}>
                  <NeonBtn href={dialog.demo} style={{ padding: "8px 16px", fontSize: 10 }}><ExternalLink size={12} />Live Demo</NeonBtn>
                  <NeonBtn href={dialog.github} outline style={{ padding: "8px 16px", fontSize: 10 }}><Github size={12} />GitHub</NeonBtn>
                </div>
              </div>
            </div>
          </>}
        </DialogContent>
      </Dialog>
      <style>{`
        @media(max-width:768px){.timeline-line{display:none!important}.timeline-num{display:none!important}.proj-grid{grid-template-columns:1fr!important}.proj-spacer{display:none!important}.dialog-grid{grid-template-columns:1fr!important}}
        .proj-grid-rev > *:first-child{order:2}.proj-grid-rev .proj-spacer{order:1}
      `}</style>
    </section>
  );
}

export default Projects;