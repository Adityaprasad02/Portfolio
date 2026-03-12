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
function Hero({ scrollTo }) {
    
    function useTypewriter(words, speed = 80, pause = 2000) {
      const [display, setDisplay] = useState("");
      const [wordIdx, setWordIdx] = useState(0);
      const [charIdx, setCharIdx] = useState(0);
      const [deleting, setDeleting] = useState(false);
      useEffect(() => {
        const current = words[wordIdx];
        const timeout = setTimeout(() => {
          if (!deleting) {
            setDisplay(current.slice(0, charIdx + 1));
            if (charIdx + 1 === current.length) setTimeout(() => setDeleting(true), pause);
            else setCharIdx(c => c + 1);
          } else {
            setDisplay(current.slice(0, charIdx - 1));
            if (charIdx - 1 === 0) { setDeleting(false); setWordIdx(w => (w + 1) % words.length); setCharIdx(0); }
            else setCharIdx(c => c - 1);
          }
        }, deleting ? speed / 2 : speed);
        return () => clearTimeout(timeout);
      }, [display, deleting, charIdx, wordIdx, words, speed, pause]);
      return display;
    }
  const typed = useTypewriter(["Aditya Prasad Sahoo", "Java Backend Dev", "Spring Boot Expert"]);
  const [vis, setVis] = useState(false);
  const ref = useRef();
  const exp = useCountUp(3, 1200, vis);
  const proj = useCountUp(20, 1200, vis);
  const tech = useCountUp(10, 1200, vis);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  function useCountUp(target, duration = 1400, trigger) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, target, duration]);
  return val;
}

const GlowText = ({ children, colors = ["#00FFB2", "#a855f7", "#F59E0B"] }) => (
  <span style={{
    background: `linear-gradient(135deg, ${colors.join(", ")})`,
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    backgroundSize: "200% 200%", animation: "gradShift 4s ease-in-out infinite",
  }}>{children}</span>
);

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 28px 80px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,255,178,0.07), transparent 70%)", top: "-15%", right: "-5%", filter: "blur(40px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.07), transparent 70%)", bottom: 0, left: "-10%", filter: "blur(40px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,255,178,0.025) 1px, transparent 1px),linear-gradient(90deg,rgba(0,255,178,0.025) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", animation: "floatY 4s ease-in-out infinite" }}>
            <div style={{ position: "absolute", inset: -12, borderRadius: 28, background: "linear-gradient(135deg,#00FFB2,#7C3AED,#F59E0B)", filter: "blur(24px)", opacity: 0.5, backgroundSize: "300% 300%", animation: "gradShift 4s ease-in-out infinite" }} />
            <div style={{ position: "relative", width: 240, height: 300, borderRadius: 24, overflow: "hidden", background: "linear-gradient(135deg,#111827,#1a1f2e)", border: "1px solid rgba(0,255,178,0.25)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <div style={{ width: 88, height: 88, borderRadius: "50%", background: "linear-gradient(135deg,#00FFB2,#7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 900, color: "#080B10", fontFamily: "serif", border: "3px solid rgba(0,255,178,0.3)" }}>AP</div>
              <span style={{ fontFamily: "monospace", fontSize: 11, color: "#4B5563" }}>your-photo.jpg</span>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 20, border: "1px solid rgba(0,255,178,0.3)", background: "rgba(0,255,178,0.05)" }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#00FFB2", boxShadow: "0 0 8px #00FFB2" }} />
                <span style={{ fontFamily: "monospace", fontSize: 10, color: "#00FFB2" }}>Available for hire</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#00FFB2", boxShadow: "0 0 10px #00FFB2" }} />
            <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#00FFB2" }}>Hello, world!</span>
          </div>

          <h1 style={{ fontFamily: "serif", fontWeight: 900, fontSize: "clamp(32px,5vw,58px)", lineHeight: 1.15, color: "#fff", margin: 0 }}>
            <span style={{ background: "linear-gradient(135deg,#fff,#9CA3AF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{typed}</span>
            <span style={{ display: "inline-block", width: 3, height: "0.9em", background: "#00FFB2", marginLeft: 4, verticalAlign: "middle", animation: "blink 1s step-end infinite" }} />
          </h1>

          <p style={{ fontFamily: "serif", fontWeight: 700, fontSize: "clamp(16px,2vw,22px)", margin: 0 }}>
            <GlowText>Java Backend Developer · Spring Boot Specialist</GlowText>
          </p>

          <p style={{ color: "#9CA3AF", lineHeight: 1.7, maxWidth: 460, margin: 0, fontSize: 15 }}>
            I architect high-performance backend systems — from microservices to distributed event pipelines. Passionate about clean code that scales without breaking at 3am.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <NeonBtn onClick={() => scrollTo("Projects")}><Server size={14} />View Projects</NeonBtn>
            <NeonBtn href="resume.pdf" outline><Download size={14} />Download Resume</NeonBtn>
          </div>

          <div ref={ref} style={{ display: "flex", gap: 32, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {[{ v: exp, s: "+", l: "Years Exp" }, { v: proj, s: "+", l: "Projects" }, { v: tech, s: "+", l: "Technologies" }].map(({ v, s, l }) => (
              <div key={l}>
                <p style={{ fontFamily: "serif", fontWeight: 900, fontSize: 26, color: "#00FFB2", margin: 0, textShadow: "0 0 20px rgba(0,255,178,0.4)" }}>{v}{s}</p>
                <p style={{ fontFamily: "monospace", fontSize: 10, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.15em", margin: "3px 0 0" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.4 }}>
        <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.2em", color: "#6B7280" }}>SCROLL</span>
        <ChevronDown size={17} style={{ color: "#00FFB2", animation: "bounce 1.5s infinite" }} />
      </div>
      <style>{`
        @media(max-width:768px){ .hero-grid{grid-template-columns:1fr!important} }
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}
      `}</style>
    </section>
  );
}
export default Hero;