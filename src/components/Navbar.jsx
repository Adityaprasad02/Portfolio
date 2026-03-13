import React from 'react'
import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Github, Linkedin, Mail, Download, ExternalLink, ChevronDown,
  ArrowRight, Code2, Terminal, Cpu, Database, Cloud, GitBranch,
  Server, Layers, Workflow, CheckCircle2, Menu, X,
  ChevronLeft, ChevronRight, Zap, Coffee,
} from "lucide-react";
import NeonBtn from './ui/NeonBtn';
import LinktreeCard from './ui/LinktreeCard';

const  Navbar = ({ active, scrollTo, menuOpen, setMenuOpen }) =>{
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const el = document.getElementById("scroll-root");
    if (!el) return;
    const h = () => setScrolled(el.scrollTop > 40);
    el.addEventListener("scroll", h, { passive: true });
    return () => el.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(59,130,246,0.2)" : "1px solid rgba(59,130,246,0.1)",
        padding: scrolled ? "12px 28px" : "20px 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        width: "100%",
        maxWidth: "100%",
      }}>
        <button onClick={() => scrollTo("Hero")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", transition: "transform 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#3b82f6,#2563eb)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 16, color: "#ffffff", boxShadow: "0 0 20px rgba(59,130,246,0.4)" }}>A</div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", letterSpacing: "-0.02em" }}>Aditya Prasad Sahoo</span>
        </button>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {["About", "Projects", "Experience", "Resume", "Profiles", "Contact"].map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600,
              color: active === l.toLowerCase() ? "#3b82f6" : "#94a3b8",
              borderBottom: active === l.toLowerCase() ? "2px solid #3b82f6" : "2px solid transparent",
              paddingBottom: 4, transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
            }}
              onMouseEnter={e => { if (active !== l.toLowerCase()) e.currentTarget.style.color = "#60a5fa"; }}
              onMouseLeave={e => { if (active !== l.toLowerCase()) e.currentTarget.style.color = active === l.toLowerCase() ? "#3b82f6" : "#94a3b8"; }}
            >{l}</button>
          ))}
          <NeonBtn onClick={() => scrollTo("Contact")} style={{ padding: "8px 20px", fontSize: 12 }}>Hire Me</NeonBtn>
          {/* Linktree Connect Button with Neon Glow and Card Tooltip */}
          {/* Connect button removed from navbar */}
        </div>
        <button onClick={() => setMenuOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", display: "none", padding: 8 }} className="mob-menu-btn">
          <Menu size={22} />
        </button>
      </nav>
      {/* Floating Professional Connect on Linktree Button */}
      <div
        style={{
          position: 'fixed',
          top: 80,
          right: 28,
          zIndex: 120,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          /* Responsive: move to bottom right and shrink on mobile */
        }}
        className="floating-linktree-btn"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://linktr.ee/adityasahoo217"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '7px 16px',
                    borderRadius: 12,
                    background: 'rgba(24, 32, 56, 0.72)',
                    boxShadow: '0 3px 16px 0 #3b82f6cc, 0 0 0 1.5px #3b82f6',
                    border: '1.2px solid #22d3ee',
                    backdropFilter: 'blur(6px)',
                    transition: 'box-shadow 0.3s, border 0.3s',
                    cursor: 'pointer',
                    minWidth: 110,
                    maxWidth: 180,
                  }}
                  className="floating-linktree-btn-inner"
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 0 20px 4px #22d3ee99, 0 0 0 1.5px #3b82f6';
                    e.currentTarget.style.border = '1.5px solid #3b82f6';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0 3px 16px 0 #3b82f6cc, 0 0 0 1.5px #3b82f6';
                    e.currentTarget.style.border = '1.2px solid #22d3ee';
                  }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linktree.svg" alt="Linktree" style={{ width: 18, height: 18, filter: 'drop-shadow(0 0 5px #22d3ee)' }} className="floating-linktree-btn-img" />
                  <span style={{
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    fontSize: 13,
                    color: '#fff',
                    textShadow: '0 0 4px #22d3ee, 0 0 1px #3b82f6',
                    fontFamily: 'Space Grotesk, Inter, sans-serif',
                  }} className="floating-linktree-btn-text">Connect</span>
                </div>
              </a>
            </TooltipTrigger>
            <TooltipContent sideOffset={14} style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <LinktreeCard username="adityasahoo217" />
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.98)", backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28, animation: "fadeIn 0.3s ease-out", padding: 16 }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 24, right: 24, background: "none", border: "none", cursor: "pointer", color: "#94a3b8", padding: 8, transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#3b82f6"}
            onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}
          ><X size={26} /></button>
          {["About", "Projects", "Experience", "Resume", "Profiles", "Contact"].map((l, idx) => (
            <button key={l + '-' + idx} onClick={() => { scrollTo(l); setMenuOpen(false); }} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(18px,7vw,38px)', fontWeight: 700, color: "#fff", transition: "all 0.3s", animation: `fadeInUp 0.4s ease-out ${idx * 0.1}s both`, width: '100%', textAlign: 'center', padding: '10px 0' }}
              onMouseEnter={e => { e.target.style.color = "#3b82f6"; e.target.style.transform = "scale(1.08)"; }}
              onMouseLeave={e => { e.target.style.color = "#fff"; e.target.style.transform = "scale(1)"; }}
            >{l}</button>
          ))}
          {/* Add Hire Me and Connect buttons in mobile menu */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, width: '100%', alignItems: 'center', marginTop: 18 }}>
            
            <NeonBtn onClick={() => { scrollTo('Contact'); setMenuOpen(false); }} style={{ padding: '10px 0', width: '80%', fontSize: 18 }}>Hire Me</NeonBtn>
            <NeonBtn
              as="a"
              href="https://linktr.ee/adityasahoo217"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '10px 0',
                width: '80%',
                fontSize: 18,
                background: 'linear-gradient(135deg, #3b82f6 60%, #22d3ee 100%)',
                color: '#fff',
                boxShadow: '0 0 16px 2px #3b82f6, 0 0 32px 8px #22d3ee44',
                border: '1.5px solid #3b82f6',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                justifyContent: 'center',
                animation: 'pulse-glow 2s infinite',
              }}
            >
              <img src="https://api.blog.production.linktr.ee/wp-content/uploads/2022/06/Avatar-Symbol-Canopy.png" alt="Linktree" style={{ width: 22, height: 22, filter: 'drop-shadow(0 0 6px #22d3ee)' }} />
              <span style={{ fontWeight: 600, letterSpacing: '0.04em' }}>Connect</span>
            </NeonBtn>
          </div>
        </div>
      )}
      <style>{`
                @media (max-width: 600px) {
                  .floating-linktree-btn {
                    top: auto !important;
                    bottom: 24px !important;
                    right: 16px !important;
                    align-items: flex-end !important;
                  }
                  .floating-linktree-btn-inner {
                    padding: 5px 10px !important;
                    border-radius: 9px !important;
                    min-width: 70px !important;
                    max-width: 120px !important;
                  }
                  .floating-linktree-btn-img {
                    width: 13px !important;
                    height: 13px !important;
                  }
                  .floating-linktree-btn-text {
                    font-size: 10px !important;
                    letter-spacing: 0.03em !important;
                  }
                }
        @media(max-width:768px){ .desktop-nav{display:none!important} .mob-menu-btn{display:flex!important} }
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
      `}</style>
    </>
  )};

  export default Navbar;
