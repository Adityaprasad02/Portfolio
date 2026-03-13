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
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "#3b82f6", fontWeight: 600 }}>{children}</span>
    <div style={{ height: 2, width: 60, background: "linear-gradient(to right, #3b82f6, transparent)", borderRadius: 2 }} />
  </div>
);

const GlowText = ({ children, colors = ["#3b82f6", "#60a5fa", "#93c5fd"] }) => (
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
    tag: "Backend", accent: "#3b82f6",
    tech: ["Spring Boot", "Kafka", "Docker", "Redis", "PostgreSQL"],
    description: "A production-grade microservices architecture with user service, product catalog, order management and payment processing. Event-driven via Apache Kafka. Redis caching reduced latency by 60%.",
    demo: "#", github: "#", screenshots: ["Screenshot 1", "Screenshot 2", "Screenshot 3"],
  },
  {
    id: 1, number: "02", title: "JWT Auth Service",
    short: "Robust authentication & authorization with JWT, refresh tokens and OAuth2.",
    tag: "Security", accent: "#60a5fa",
    tech: ["Spring Security", "JWT", "MySQL", "OAuth2"],
    description: "Complete authentication solution featuring JWT token management, silent refresh, MFA hooks, and fine-grained RBAC. 92% test coverage with JUnit/Mockito.",
    demo: "#", github: "#", screenshots: ["Auth Flow", "Token Diagram"],
  },
  {
    id: 2, number: "03", title: "Real-Time Analytics API",
    short: "High-throughput pipeline processing 1M+ events/hour via Redis Streams.",
    tag: "Analytics", accent: "#93c5fd",
    tech: ["Spring Batch", "Redis", "PostgreSQL", "Docker"],
    description: "Ingestion pipeline buffered via Redis Streams, bulk-processed with Spring Batch, and exposed via REST API with pagination and flexible query DSL.",
    demo: "#", github: "#", screenshots: ["Dashboard", "Pipeline Diagram"],
  },
];
  const [dialog, setDialog] = useState(null);
  const [ci, setCi] = useState(0);

  return (
    <section id="projects" style={{ padding: "100px 28px", width: "100%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: 64, textAlign: "center" }}>
          <SectionLabel>Portfolio</SectionLabel>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(36px,5vw,56px)", color: "#fff", margin: "12px 0 0", letterSpacing: "-0.02em" }}>
            Selected <GlowText>Projects</GlowText>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#94a3b8", marginTop: 12, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>Click any card to explore details, screenshots and source code.</p>
        </div>

        <div style={{ position: "relative", display: "grid", gap: 40 }}>
          {PROJECTS.map((p, idx) => (
            <div key={p.id} style={{ position: "relative", animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both` }}>
              <div
                style={{ background: "rgba(10,10,15,0.8)", border: "1px solid rgba(59,130,246,0.15)", borderRadius: 20, overflow: "hidden", cursor: "pointer", transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", backdropFilter: "blur(10px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `rgba(59,130,246,0.4)`; e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = `0 24px 48px rgba(59,130,246,0.2)`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ width: "100%", height: "100%", minHeight: 240, background: `linear-gradient(135deg, rgba(59,130,246,0.1), rgba(37,99,235,0.15))`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", padding: 40 }}>
                  <Code2 size={64} style={{ color: p.accent, opacity: 0.35 }} />
                  <div style={{ position: "absolute", top: 16, right: 16, padding: "6px 16px", borderRadius: 20, border: "1px solid rgba(59,130,246,0.4)", background: "rgba(59,130,246,0.15)", fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#60a5fa", fontWeight: 600 }}>{p.tag}</div>
                </div>
                <div style={{ padding: 32, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 24, color: "#fff", margin: "0 0 12px", letterSpacing: "-0.01em" }}>{p.title}</h3>
                  <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.7, margin: "0 0 20px", fontFamily: "'Inter', sans-serif" }}>{p.short}</p>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {p.tech.slice(0, 4).map(t => <span key={t} style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, padding: "4px 12px", borderRadius: 6, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "#60a5fa", fontWeight: 500 }}>{t}</span>)}
                  </div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
                    <NeonBtn onClick={() => { setDialog(p); setCi(0); }} style={{ padding: "10px 16px", fontSize: 12 }}><ArrowRight size={14} />Details</NeonBtn>
                    <NeonBtn href={p.demo} outline style={{ padding: "10px 16px", fontSize: 12 }}><ExternalLink size={14} />Live</NeonBtn>
                    <NeonBtn href={p.github} outline style={{ padding: "10px 16px", fontSize: 12 }}><Github size={14} />GitHub</NeonBtn>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!dialog} onOpenChange={() => setDialog(null)}>
        <DialogContent style={{ background: "#0a0a0f", border: "1px solid rgba(59,130,246,0.3)", boxShadow: "0 0 60px rgba(59,130,246,0.2)", maxWidth: 720, borderRadius: 20 }}>
          {dialog && <>
            <DialogHeader>
              <DialogTitle style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, color: "#fff", letterSpacing: "-0.01em" }}>{dialog.title}</DialogTitle>
            </DialogHeader>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 16 }} className="dialog-grid">
              <div>
                <div style={{ borderRadius: 16, overflow: "hidden", height: 200, background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(37,99,235,0.15))", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#64748b" }}>{dialog.screenshots[ci]}</span>
                  {dialog.screenshots.length > 1 && <>
                    <button onClick={() => setCi(c => (c - 1 + dialog.screenshots.length) % dialog.screenshots.length)} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 32, height: 32, borderRadius: "50%", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(59,130,246,0.3)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.background = "rgba(59,130,246,0.2)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)"; e.currentTarget.style.background = "rgba(0,0,0,0.6)"; }}
                    ><ChevronLeft size={16} /></button>
                    <button onClick={() => setCi(c => (c + 1) % dialog.screenshots.length)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", width: 32, height: 32, borderRadius: "50%", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(59,130,246,0.3)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.background = "rgba(59,130,246,0.2)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)"; e.currentTarget.style.background = "rgba(0,0,0,0.6)"; }}
                    ><ChevronRight size={16} /></button>
                    <div style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
                      {dialog.screenshots.map((_, i) => <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === ci ? "#3b82f6" : "rgba(255,255,255,0.2)", transition: "all 0.2s", boxShadow: i === ci ? "0 0 8px rgba(59,130,246,0.5)" : "none" }} />)}
                    </div>
                  </>}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.7, margin: 0, fontFamily: "'Inter', sans-serif" }}>{dialog.description}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {dialog.tech.map(t => <span key={t} style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, padding: "4px 12px", borderRadius: 6, border: "1px solid rgba(59,130,246,0.3)", background: "rgba(59,130,246,0.1)", color: "#60a5fa", fontWeight: 500 }}>{t}</span>)}
                </div>
                <div style={{ display: "flex", gap: 12, paddingTop: 8 }}>
                  <NeonBtn href={dialog.demo} style={{ padding: "10px 20px", fontSize: 12 }}><ExternalLink size={14} />Live Demo</NeonBtn>
                  <NeonBtn href={dialog.github} outline style={{ padding: "10px 20px", fontSize: 12 }}><Github size={14} />GitHub</NeonBtn>
                </div>
              </div>
            </div>
          </>}
        </DialogContent>
      </Dialog>
      <style>{`
        @media(max-width:768px){.dialog-grid{grid-template-columns:1fr!important}}
        @keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
      `}</style>
    </section>
  );
}

export default Projects;