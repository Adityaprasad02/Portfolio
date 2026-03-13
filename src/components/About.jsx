import { useState, useEffect, useRef } from "react";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Github, Linkedin, Mail, Download, ExternalLink, ChevronDown,
  ArrowRight, Code2, Terminal, Cpu, Database, Cloud, GitBranch,
  Server, Layers, Workflow, CheckCircle2, Menu, X,
  ChevronLeft, ChevronRight, Zap, Coffee,
} from "lucide-react";
function About() {
  const SectionLabel = ({ children }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "#3b82f6", fontWeight: 600 }}>{children}</span>
      <div style={{ height: 2, width: 60, background: "linear-gradient(to right, #3b82f6, transparent)", borderRadius: 2 }} />
    </div>
  );
  const GlowText = ({ children }) => (
    <span style={{
      background: "linear-gradient(135deg, #3b82f6, #60a5fa, #93c5fd)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundSize: "200% 200%",
      animation: "gradShift 4s ease-in-out infinite",
    }}>
      {children}
    </span>
  );
  const bars = [
    { label: "Java / Spring Boot", pct: 95 },
    { label: "Database Design", pct: 88 },
    { label: "Microservices / Docker", pct: 82 },
    { label: "System Design", pct: 78 },
  ];
  const [vis, setVis] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new window.IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section id="about" style={{ padding: "100px 28px", width: "100%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="about-grid">
        <div style={{ animation: "fadeInLeft 0.6s ease-out" }}>
          <div style={{ background: "rgba(10,10,15,0.9)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 20, overflow: "hidden", boxShadow: "0 0 40px rgba(59,130,246,0.1)", backdropFilter: "blur(10px)", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)"; e.currentTarget.style.boxShadow = "0 0 60px rgba(59,130,246,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(59,130,246,0.1)"; }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 20px", borderBottom: "1px solid rgba(59,130,246,0.1)", background: "rgba(0,0,0,0.3)" }}>
              {['#ef4444','#eab308','#22c55e'].map(c => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", opacity: 0.8, background: c }} />
              ))}
              <span style={{ fontFamily: "monospace", fontSize: 11, color: "#64748b", marginLeft: 12 }}>about_me.java</span>
              <Terminal size={14} style={{ color: "#64748b", marginLeft: "auto" }} />
            </div>
            <div style={{ padding: 24, fontFamily: "monospace", fontSize: 13, lineHeight: 1.8 }}>
              <span style={{ color: "#64748b" }}>// Aditya Prasad Sahoo</span>
              <br />
              <span><span style={{ color: "#a78bfa" }}>public class </span><span style={{ color: "#60a5fa" }}>AdityaSahoo</span><span style={{ color: "#64748b" }}> {'{'}</span></span>
              <br />
              <span style={{ paddingLeft: 24, display: "block" }}><span style={{ color: "#a78bfa" }}>String </span><span style={{ color: "#7dd3fc" }}>role</span><span style={{ color: "#64748b" }}> = </span><span style={{ color: "#fbbf24" }}>"Java Backend Developer"</span><span style={{ color: "#64748b" }}>;</span></span>
              <span style={{ paddingLeft: 24, display: "block" }}><span style={{ color: "#a78bfa" }}>String </span><span style={{ color: "#7dd3fc" }}>location</span><span style={{ color: "#64748b" }}> = </span><span style={{ color: "#fbbf24" }}>"India 🇮🇳"</span><span style={{ color: "#64748b" }}>;</span></span>
              <span style={{ paddingLeft: 24, display: "block", color: "#64748b" }}>// Open to remote opportunities</span>
              <br />
              <span style={{ paddingLeft: 24, display: "block" }}><span style={{ color: "#a78bfa" }}>String[] </span><span style={{ color: "#7dd3fc" }}>loves</span><span style={{ color: "#64748b" }}> = {'{'}</span></span>
                <span style={{ paddingLeft: 24, display: "block", color: "#64748b" }}>{'}'}</span>
                <span style={{ color: "#64748b" }}>{'}'}</span>
            </div>
          </div>
        </div>

        <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <SectionLabel>About Me</SectionLabel>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(32px,4vw,48px)", color: "#fff", lineHeight: 1.2, margin: 0, letterSpacing: "-0.02em" }}>
            Building backends that <GlowText>don't break</GlowText> at 3am
          </h2>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 16, margin: 0, fontFamily: "'Inter', sans-serif" }}>
            I'm a passionate Java Backend Developer with hands-on experience building scalable microservices and RESTful APIs. I specialize in Spring Boot — from JPA/Hibernate to Spring Security and Kafka messaging.
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 16, margin: 0, fontFamily: "'Inter', sans-serif" }}>
            I love tackling complex system design challenges, optimizing DB queries, and contributing to open source. When not pushing commits, I'm exploring JVM performance tricks.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 8 }}>
            {bars.map(({ label, pct }, idx) => (
              <div key={label} style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#e2e8f0", fontWeight: 500 }}>{label}</span>
                  <span style={{ fontFamily: "monospace", fontSize: 12, color: "#3b82f6", fontWeight: 600 }}>{pct}%</span>
                </div>
                <div style={{ height: 4, background: "rgba(59,130,246,0.1)", borderRadius: 4, overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      borderRadius: 4,
                      transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
                      width: vis ? `${pct}%` : "0%",
                      background: "linear-gradient(to right, #3b82f6, #60a5fa)",
                      boxShadow: vis ? "0 0 10px rgba(59,130,246,0.5)" : "none",
                      transitionDelay: `${idx * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){.about-grid{grid-template-columns:1fr!important; gap: 40px!important}}
        @keyframes fadeInLeft{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}
        @keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
      `}</style>
    </section>
  );
}

export default About;