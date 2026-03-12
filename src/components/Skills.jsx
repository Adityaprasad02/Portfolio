import React from 'react'
import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Github, Linkedin, Mail, Download, ExternalLink, ChevronDown,
  ArrowRight, Code2, Terminal, Cpu, Database, Cloud, GitBranch,
  Server, Layers, Workflow, CheckCircle2, Menu, X,
  ChevronLeft, ChevronRight, Zap, Coffee,
} from "lucide-react";


function Skills() {
    const SKILLS = [
  { name: "Java", icon: Coffee, color: "#f89820" },
  { name: "Spring Boot", icon: Layers, color: "#6DB33F" },
  { name: "Hibernate", icon: Database, color: "#BC843B" },
  { name: "MySQL", icon: Database, color: "#4479A1" },
  { name: "PostgreSQL", icon: Database, color: "#336791" },
  { name: "Docker", icon: Cloud, color: "#2496ED" },
  { name: "Git", icon: GitBranch, color: "#F05032" },
  { name: "REST APIs", icon: Workflow, color: "#00FFB2" },
  { name: "Microservices", icon: Server, color: "#a855f7" },
  { name: "Kafka", icon: Zap, color: "#F59E0B" },
  { name: "Redis", icon: Cpu, color: "#DC2626" },
  { name: "Spring Security", icon: Code2, color: "#6DB33F" },
];
const SectionLabel = ({ children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
    <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#00FFB2" }}>{children}</span>
    <div style={{ height: 1, width: 50, background: "linear-gradient(to right, #00FFB2, transparent)" }} />
  </div>
);
  const doubled = [...SKILLS, ...SKILLS];
  return (
    <section id="skills" style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
      <div style={{ padding: "0 28px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>Tech Stack</SectionLabel>
        <h2 style={{ fontFamily: "serif", fontWeight: 900, fontSize: "clamp(26px,3vw,38px)", color: "#fff", margin: 0 }}>Technologies I Work With</h2>
      </div>
      {[false, true].map((rev, ri) => (
        <div key={ri} style={{ overflow: "hidden", marginBottom: ri === 0 ? 12 : 0 }}>
          <div className={rev ? "marquee-rev" : "marquee"} style={{ display: "flex", gap: 12, width: "max-content" }}>
            {doubled.map((s, i) => {
              const Icon = s.icon;
              return (
                <TooltipProvider key={i}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 20px", borderRadius: 100, background: "rgba(17,24,39,0.8)", border: "1px solid rgba(255,255,255,0.07)", fontFamily: "monospace", fontSize: 12, color: "#9CA3AF", whiteSpace: "nowrap", cursor: "default", transition: "all 0.3s" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = `${s.color}60`; e.currentTarget.style.color = s.color; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 10px 24px ${s.color}25`; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "#9CA3AF"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                      >
                        <Icon size={13} style={{ color: s.color }} />{s.name}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent style={{ background: "#111827", border: "1px solid rgba(0,255,178,0.2)", color: "#E5E7EB", fontFamily: "monospace", fontSize: 11 }}>{s.name}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>
        </div>
      ))}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-rev {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee {
          animation: marquee 26s linear infinite;
        }
        .marquee-rev {
          animation: marquee-rev 32s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Skills;