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
  return (
    <section id="resume" style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ position: "relative", background: "rgba(17,24,39,0.75)", border: "1px solid rgba(0,255,178,0.22)", borderRadius: 24, padding: "80px 40px", textAlign: "center", overflow: "hidden", backdropFilter: "blur(20px)", boxShadow: "0 0 60px rgba(0,255,178,0.06)" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,255,178,0.025) 1px, transparent 1px),linear-gradient(90deg,rgba(0,255,178,0.025) 1px,transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(0,255,178,0.05), transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <SectionLabel>Resume</SectionLabel>
            <h2 style={{ fontFamily: "serif", fontWeight: 900, fontSize: "clamp(32px,5vw,58px)", color: "#fff", margin: "0 0 18px", lineHeight: 1.2 }}>
              Want to know <GlowText>more?</GlowText>
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: 16, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              Download my resume for a complete overview of my experience, skills, certifications, and achievements.
            </p>
            <NeonBtn href="resume.pdf" style={{ padding: "14px 48px", fontSize: 12 }}><Download size={16} />Download Resume (PDF)</NeonBtn>
            <p style={{ fontFamily: "monospace", fontSize: 11, color: "#4B5563", marginTop: 20 }}>Last updated: 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Resume;