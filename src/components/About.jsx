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
  const bars = [
    { label: "Java / Spring Boot", pct: 95 },
    { label: "Database Design", pct: 88 },
    { label: "Microservices / Docker", pct: 82 },
    { label: "System Design", pct: 78 },
  ];
  const [vis, setVis] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="about-grid">
        <div>
          <div style={{ background: "rgba(13,17,23,0.85)", border: "1px solid rgba(0,255,178,0.18)", borderRadius: 16, overflow: "hidden", boxShadow: "0 0 40px rgba(0,255,178,0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(17,24,39,0.5)" }}>
              {["#ef4444","#eab308","#22c55e"].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.75 }} />)}
              <span style={{ fontFamily: "monospace", fontSize: 11, color: "#6B7280", marginLeft: 8 }}>about_me.java</span>
              <Terminal size={12} style={{ color: "#4B5563", marginLeft: "auto" }} />
            </div>
            <div style={{ padding: 24, fontFamily: "monospace", fontSize: 13, lineHeight: 2.2 }}>
              {[
                <span key="0" style={{ color: "#6B7280" }}>{"// Aditya Prasad Sahoo"}</span>,
                <span key="1"><span style={{ color: "#a855f7" }}>public class </span><span style={{ color: "#00FFB2" }}>AdityaSahoo</span><span style={{ color: "#9CA3AF" }}> {"{"}</span></span>,
                <span key="2" style={{ paddingLeft: 24, display: "block" }}><span style={{ color: "#a855f7" }}>String </span><span style={{ color: "#93C5FD" }}>role</span><span style={{ color: "#9CA3AF" }}> = </span><span style={{ color: "#FCD34D" }}>"Java Backend Developer"</span><span style={{ color: "#9CA3AF" }}>;</span></span>,
                <span key="3" style={{ paddingLeft: 24, display: "block" }}><span style={{ color: "#a855f7" }}>String </span><span style={{ color: "#93C5FD" }}>location</span><span style={{ color: "#9CA3AF" }}> = </span><span style={{ color: "#FCD34D" }}>"India 🇮🇳"</span><span style={{ color: "#9CA3AF" }}>;</span></span>,
                <span key="4" style={{ paddingLeft: 24, display: "block", color: "#6B7280" }}>{"// Open to remote opportunities"}</span>,
                <span key="5">&nbsp;</span>,
                <span key="6" style={{ paddingLeft: 24, display: "block" }}><span style={{ color: "#a855f7" }}>String[] </span><span style={{ color: "#93C5FD" }}>loves</span><span style={{ color: "#9CA3AF" }}> = {"{"}</span></span>,
                ...["Clean Architecture", "Distributed Systems", "Performance Tuning"].map((v, i) => (
                  <span key={`v${i}`} style={{ paddingLeft: 48, display: "block", color: "#FCD34D" }}>&ldquo;{v}&rdquo;,</span>
                )),
                <span key="close1" style={{ paddingLeft: 24, display: "block", color: "#9CA3AF" }}>{"}"}</span>,
                <span key="close2" style={{ color: "#9CA3AF" }}>{"}"}</span>,
              ]}
            </div>
          </div>
        </div>

        <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <SectionLabel>About Me</SectionLabel>
          <h2 style={{ fontFamily: "serif", fontWeight: 900, fontSize: "clamp(28px,3.5vw,46px)", color: "#fff", lineHeight: 1.2, margin: 0 }}>
            Building backends that <GlowText colors={["#00FFB2", "#a855f7"]}>don't break</GlowText> at 3am
          </h2>
          <p style={{ color: "#9CA3AF", lineHeight: 1.75, fontSize: 15, margin: 0 }}>
            I'm a passionate Java Backend Developer with hands-on experience building scalable microservices and RESTful APIs. I specialize in Spring Boot — from JPA/Hibernate to Spring Security and Kafka messaging.
          </p>
          <p style={{ color: "#9CA3AF", lineHeight: 1.75, fontSize: 15, margin: 0 }}>
            I love tackling complex system design challenges, optimizing DB queries, and contributing to open source. When not pushing commits, I'm exploring JVM performance tricks.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 6 }}>
            {bars.map(({ label, pct }) => (
              <div key={label}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontFamily: "monospace", fontSize: 11, color: "#D1D5DB" }}>{label}</span>
                  <span style={{ fontFamily: "monospace", fontSize: 11, color: "#00FFB2" }}>{pct}%</span>
                </div>
                <div style={{ height: 3, background: "#1F2937", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: vis ? `${pct}%` : "0%", background: "linear-gradient(to right, #00FFB2, #a855f7)", borderRadius: 2, transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${pct * 5}ms` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

export default About;