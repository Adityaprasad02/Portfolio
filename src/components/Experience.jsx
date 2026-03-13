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
function Experience() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
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
const EXPERIENCE = [
  {
    role: "Software Engineering Intern", company: "TechCorp Pvt Ltd",
    duration: "Jun 2023 – Dec 2023", accent: "#3b82f6",
    tech: ["Spring Boot", "Redis", "MySQL"],
    description: "Developed RESTful APIs using Spring Boot. Redis caching reduced response time by 40%. Collaborated on DB schema design and query optimization.",
    highlights: ["Built scalable REST APIs", "Improved latency with caching", "Optimized DB queries"],
  },
  {
    role: "Backend Developer Intern", company: "StartupXYZ",
    duration: "Jan 2023 – May 2023", accent: "#60a5fa",
    tech: ["Microservices", "JUnit", "Docker"],
    description: "Built microservices for user onboarding and notifications. Integrated payment APIs. Achieved 85% test coverage.",
    highlights: ["Microservices delivery", "Payment API integration", "High test coverage"],
  },
  {
    role: "Java Developer Intern", company: "DevStudio Labs",
    duration: "Jun 2022 – Dec 2022", accent: "#93c5fd",
    tech: ["Hibernate", "JPA", "PostgreSQL"],
    description: "Contributed to monolith-to-microservices migration. Maintained Hibernate ORM mappings with deep JPA and transaction management expertise.",
    highlights: ["Migration support", "Hibernate/JPA expertise", "Reliable transactions"],
  },
];

  return (
    <section id="experience" style={{ padding: "100px 28px", width: "100%" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: 64, textAlign: "center" }}>
          <SectionLabel>Experience</SectionLabel>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(36px,5vw,56px)", color: "#fff", margin: "12px 0 0", letterSpacing: "-0.02em" }}>
            Internship <GlowText colors={["#3b82f6", "#60a5fa"]}>Journey</GlowText>
          </h2>
        </div>
        <div style={{ position: "relative", paddingLeft: 48 }}>
          <div style={{ position: "absolute", left: 0, top: 8, bottom: 8, width: 2, background: "linear-gradient(to bottom, #3b82f6, #60a5fa, #93c5fd)", borderRadius: 2, opacity: 0.4 }} />
          {EXPERIENCE.map((e, i) => (
            <div key={i} style={{ position: "relative", marginBottom: 40, animation: `fadeInLeft 0.6s ease-out ${i * 0.15}s both` }}>
              <div style={{ position: "absolute", left: -56, top: 24, width: 16, height: 16, borderRadius: "50%", background: e.accent, border: "3px solid #000000", boxShadow: `0 0 20px ${e.accent}80`, zIndex: 2 }} />
              <div
                style={{
                  position: "relative",
                  background: "rgba(10,10,15,0.82)",
                  border: "1px solid rgba(59,130,246,0.15)",
                  borderRadius: 18,
                  padding: 28,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  backdropFilter: "blur(10px)",
                  transform: hoveredIdx === i ? "translateX(10px) translateY(-4px)" : "translateX(0) translateY(0)",
                  boxShadow: hoveredIdx === i ? `0 18px 44px rgba(59,130,246,0.22)` : "none",
                  borderColor: hoveredIdx === i ? "rgba(59,130,246,0.40)" : "rgba(59,130,246,0.15)",
                }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: hoveredIdx === i ? 1 : 0, transition: "opacity 0.35s", background: `radial-gradient(900px 240px at 20% 0%, ${e.accent}18, transparent 60%)` }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", margin: 0, letterSpacing: "-0.01em" }}>{e.role}</h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: e.accent, margin: "4px 0 0", fontWeight: 500 }}>{e.company}</p>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#64748b", padding: "6px 14px", borderRadius: 20, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.05)", whiteSpace: "nowrap", fontWeight: 500 }}>{e.duration}</span>
                </div>
                <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.7, margin: "0 0 16px", fontFamily: "'Inter', sans-serif" }}>{e.description}</p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 10,
                    margin: "-4px 0 16px",
                    opacity: hoveredIdx === i ? 1 : 0.65,
                    transform: hoveredIdx === i ? "translateY(0)" : "translateY(6px)",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  className="exp-highlights"
                >
                  {e.highlights.map((h) => (
                    <div key={h} style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#cbd5e1", fontWeight: 500, display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: e.accent, boxShadow: `0 0 12px ${e.accent}66` }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {e.tech.map(t => <span key={t} style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: e.accent, padding: "4px 12px", borderRadius: 6, background: `rgba(59,130,246,0.1)`, border: `1px solid rgba(59,130,246,0.2)`, fontWeight: 500 }}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fadeInLeft{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}
        @media(max-width:640px){
          .exp-highlights{grid-template-columns:1fr!important;}
        }
      `}</style>
    </section>
  );
}
export default Experience;