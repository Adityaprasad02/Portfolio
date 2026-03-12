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
import NeonBtn from './ui/NeonBtn';

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
        position: "sticky", top: 0, zIndex: 50,
        background: scrolled ? "rgba(8,11,16,0.92)" : "rgba(8,11,16,0.5)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: scrolled ? "10px 28px" : "18px 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.4s",
      }}>
        <button onClick={() => scrollTo("Hero")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "#00FFB2", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: 14, color: "#080B10" }}>A</div>
          <span style={{ fontFamily: "serif", fontWeight: 700, fontSize: 18, color: "#fff", letterSpacing: "-0.02em" }}>Aditya</span>
        </button>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="desktop-nav">
          {["About", "Projects", "Experience", "Resume", "Contact"].map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
              color: active === l.toLowerCase() ? "#00FFB2" : "#9CA3AF",
              borderBottom: active === l.toLowerCase() ? "1px solid #00FFB2" : "1px solid transparent",
              paddingBottom: 2, transition: "all 0.2s",
            }}>{l}</button>
          ))}
          <NeonBtn onClick={() => scrollTo("Contact")} style={{ padding: "7px 18px" }}>Hire Me</NeonBtn>
        </div>
        <button onClick={() => setMenuOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", display: "none" }} className="mob-menu-btn">
          <Menu size={22} />
        </button>
      </nav>
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(8,11,16,0.97)", backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 36 }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 24, right: 24, background: "none", border: "none", cursor: "pointer", color: "#9CA3AF" }}><X size={26} /></button>
          {["About", "Projects", "Experience", "Resume", "Contact"].map(l => (
            <button key={l} onClick={() => { scrollTo(l); setMenuOpen(false); }} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "serif", fontSize: 42, fontWeight: 700, color: "#fff", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#00FFB2"}
              onMouseLeave={e => e.target.style.color = "#fff"}
            >{l}</button>
          ))}
        </div>
      )}
      <style>{`
        @media(max-width:768px){ .desktop-nav{display:none!important} .mob-menu-btn{display:flex!important} }
      `}</style>
    </>
  )};

  export default Navbar;
