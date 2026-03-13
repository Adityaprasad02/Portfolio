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
const EXPERIENCE = [
  {
    role: "Software Engineering Intern", company: "TechCorp Pvt Ltd",
    duration: "Jun 2023 – Dec 2023", accent: "#00FFB2",
    tech: ["Spring Boot", "Redis", "MySQL"],
    description: "Developed RESTful APIs using Spring Boot. Redis caching reduced response time by 40%. Collaborated on DB schema design and query optimization.",
  },
  {
    role: "Backend Developer Intern", company: "StartupXYZ",
    duration: "Jan 2023 – May 2023", accent: "#a855f7",
    tech: ["Microservices", "JUnit", "Docker"],
    description: "Built microservices for user onboarding and notifications. Integrated payment APIs. Achieved 85% test coverage.",
  },
  {
    role: "Java Developer Intern", company: "DevStudio Labs",
    duration: "Jun 2022 – Dec 2022", accent: "#F59E0B",
    tech: ["Hibernate", "JPA", "PostgreSQL"],
    description: "Contributed to monolith-to-microservices migration. Maintained Hibernate ORM mappings with deep JPA and transaction management expertise.",
  },
];

  return (
    <section id="experience" style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <SectionLabel>Experience</SectionLabel>
          <h2 style={{ fontFamily: "serif", fontWeight: 900, fontSize: "clamp(28px,4vw,52px)", color: "#fff", margin: 0 }}>
            Internship <GlowText colors={["#00FFB2", "#a855f7"]}>Journey</GlowText>
          </h2>
        </div>
        <div style={{ position: "relative", paddingLeft: 40 }}>
          <div style={{ position: "absolute", left: 0, top: 4, bottom: 4, width: 1, background: "linear-gradient(to bottom, #00FFB2, #a855f7, #F59E0B)", opacity: 0.3 }} />
          {EXPERIENCE.map((e, i) => (
            <div key={i} style={{ position: "relative", marginBottom: 32 }}>
              <div style={{ position: "absolute", left: -47, top: 22, width: 14, height: 14, borderRadius: "50%", background: e.accent, border: "2.5px solid #080B10", boxShadow: `0 0 14px ${e.accent}90` }} />
              <div
                style={{ background: "rgba(17,24,39,0.65)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: 24, transition: "all 0.3s", backdropFilter: "blur(12px)" }}
                onMouseEnter={ev => { ev.currentTarget.style.borderColor = `${e.accent}40`; ev.currentTarget.style.boxShadow = `0 8px 28px ${e.accent}12`; }}
                onMouseLeave={ev => { ev.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; ev.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 10 }}>
                  <div>
                    <h3 style={{ fontFamily: "serif", fontWeight: 700, fontSize: 18, color: "#fff", margin: 0 }}>{e.role}</h3>
                    <p style={{ fontFamily: "monospace", fontSize: 12, color: e.accent, margin: "2px 0 0" }}>{e.company}</p>
                  </div>
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: "#6B7280", padding: "4px 12px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", whiteSpace: "nowrap" }}>{e.duration}</span>
                </div>
                <p style={{ color: "#9CA3AF", fontSize: 13, lineHeight: 1.7, margin: "0 0 10px" }}>{e.description}</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {e.tech.map(t => <span key={t} style={{ fontFamily: "monospace", fontSize: 11, color: `${e.accent}90` }}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Experience;