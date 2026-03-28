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

function Resume() {
    const SectionLabel = ({ children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, justifyContent: "center" }}>
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
  return (
    <section id="resume" style={{ padding: "100px 28px", width: "100%" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", width: "100%" }}>
        <div style={{ position: "relative", background: "rgba(10,10,15,0.9)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 24, padding: "80px 40px", textAlign: "center", overflow: "hidden", backdropFilter: "blur(20px)", boxShadow: "0 0 60px rgba(59,130,246,0.1)", transition: "all 0.3s" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)"; e.currentTarget.style.boxShadow = "0 0 80px rgba(59,130,246,0.2)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)"; e.currentTarget.style.boxShadow = "0 0 60px rgba(59,130,246,0.1)"; }}
        >
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.03) 1px,transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(59,130,246,0.08), transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <SectionLabel>Resume</SectionLabel>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(36px,5vw,64px)", color: "#fff", margin: "12px 0 24px", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              Want to know <GlowText>more?</GlowText>
            </h2>
            <p style={{ color: "#94a3b8", fontSize: 17, marginBottom: 40, maxWidth: 520, margin: "0 auto 40px", fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
              Download my resume for a complete overview of my experience, skills, certifications, and achievements.
            <a
            href="/assets/Resume/resumeAdi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <NeonBtn style={{ padding: "16px 56px", fontSize: 14, fontWeight: 600 }}>
                <Download size={18} />Download Resume (PDF)
              </NeonBtn>
            </a>
            </p>
            <p style={{  fontSize: 12, color: "#64748b", marginTop: 24, fontWeight: 500 }}>Last updated: 2026*</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Resume;