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
import profileImg from "@/assets/profile.png";
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
  const typed = useTypewriter(["Aditya Prasad Sahoo", "Java Full-Stack Dev", "Spring Boot | React"]);
  const [vis, setVis] = useState(false);
  const ref = useRef();
  const exp = useCountUp(3, 1200, vis);
  const proj = useCountUp(10, 1200, vis);
  const tech = useCountUp(12, 1200, vis);
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



const GlowText = ({ children, colors = ["#3b82f6", "#60a5fa", "#93c5fd"] }) => (
  <span style={{
    background: `linear-gradient(135deg, ${colors.join(", ")})`,
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    backgroundSize: "200% 200%", animation: "gradShift 4s ease-in-out infinite",
  }}>{children}</span>
);

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 0 80px", position: "relative", overflow: "hidden", width: "100%" }}>
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)", top: "-15%", right: "-5%", filter: "blur(60px)", pointerEvents: "none", animation: "pulse-glow 4s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%)", bottom: 0, left: "-10%", filter: "blur(50px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", padding: "0 28px" }} className="hero-grid">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", animation: "floatY 4s ease-in-out infinite" }}>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:28 }}>

  <div style={{ position:"relative", width:260, height:260  }}>
    {/* Spinning ring */}
    <svg viewBox="0 0 200 200" style={{ position:"absolute", inset:0, width:"100%", height:"100%", animation:"spin 8s linear infinite" }}>
      <defs>
        <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6"/>
          <stop offset="50%" stopColor="#818cf8"/>
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2"/>
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="none" stroke="url(#ring)" strokeWidth="3" strokeDasharray="200 400" strokeLinecap="round"/>
      <circle cx="100" cy="100" r="95" fill="none" stroke="url(#ring)" strokeWidth="3" strokeDasharray="80 520" strokeLinecap="round" strokeDashoffset="300"/>
    </svg>

    {/* Inner counter-spin ring */}
    <svg viewBox="0 0 200 200" style={{ position:"absolute", inset:0, width:"100%", height:"100%", animation:"spin 5s linear infinite reverse", opacity:0.5 }}>
      <circle cx="100" cy="100" r="87" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="30 60" strokeLinecap="round"/>
    </svg>

    {/* Photo */}
    <div style={{ position:"absolute", inset:12, borderRadius:"50%", overflow:"hidden", border:"3px solid #1d4ed8" }}>
      <img src={profileImg} alt="Aditya" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
    </div>

    {/* Online dot */}
    <div style={{ position:"absolute", bottom:14, right:14, width:16, height:16, borderRadius:"50%", background:"#4ade80", border:"2px solid #0a0a14", boxShadow:"0 0 8px #4ade80" }}/>
  </div>

  {/* Name */}
  <div style={{ textAlign:"center" }}>
    <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:32, fontWeight:700, color:"#fff", margin:"0 0 8px", letterSpacing:"-0.02em" }}>
      Aditya Prasad Sahoo
    </h2>
    <p style={{ fontFamily:"monospace", fontSize:12, color:"#60a5fa", margin:0, letterSpacing:"0.18em", textTransform:"uppercase" }}>
      Software Developer
    </p>
  </div>

</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, animation: "fadeInUp 0.6s ease-out" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#3b82f6", boxShadow: "0 0 10px #3b82f6", animation: "pulse-glow 2s ease-in-out infinite" }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#60a5fa", fontWeight: 600 }}>Hello, world!</span>
          </div>

          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(36px,6vw,64px)", lineHeight: 1.1, color: "#fff", margin: 0, letterSpacing: "-0.02em" }}>
            <span style={{ background: "linear-gradient(135deg,#ffffff,#e2e8f0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{typed}</span>
            <span style={{ display: "inline-block", width: 3, height: "0.9em", background: "#3b82f6", marginLeft: 4, verticalAlign: "middle", animation: "blink 1s step-end infinite", boxShadow: "0 0 8px #3b82f6" }} />
          </h1>

          <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "clamp(18px,2.5vw,24px)", margin: 0, color: "#e2e8f0" }}>
            <GlowText>Java full-stack developer · Spring Boot · React </GlowText>
          </p>

          <p style={{ color: "#94a3b8", lineHeight: 1.8, maxWidth: 500, margin: 0, fontSize: 16, fontFamily: "'Inter', sans-serif" }}>
Building scalable backend systems with microservices, APIs, and event-driven architecture — focused on clean, reliable code.          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 8 }}>
            <NeonBtn onClick={() => scrollTo("projects")}><Server size={14} />View Projects</NeonBtn>
            <NeonBtn href="/assets/Resume/AdityaUpdatedResume.pdf" outline><Download size={14} />Download Resume</NeonBtn>
          </div>

          <div ref={ref} style={{ display: "flex", gap: 40, paddingTop: 24, borderTop: "1px solid rgba(59,130,246,0.2)", marginTop: 8 }}>
            {[ { v: proj, s: "+", l: "Projects" }, { v: tech, s: "+", l: "Technologies" }].map(({ v, s, l }, idx) => (
              <div key={l} style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 32, color: "#3b82f6", margin: 0, textShadow: "0 0 20px rgba(59,130,246,0.5)", letterSpacing: "-0.02em" }}>{v}{s}</p>
                <p style={{ fontFamily: "monospace", fontSize: 10, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.15em", margin: "4px 0 0", fontWeight: 500 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.5, cursor: "pointer" }}
        onClick={() => scrollTo("skills")}
      >
        <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.2em", color: "#64748b", fontWeight: 500 }}>SCROLL</span>
        <ChevronDown size={17} style={{ color: "#3b82f6", animation: "bounce 1.5s infinite" }} />
      </div>
      <style>{`
        @media(max-width:768px){ .hero-grid{grid-template-columns:1fr!important; gap: 40px!important; padding: 0 20px!important} }
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}
        @keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes spin{to{transform:rotate(360deg)}}
      `}</style>
    </section>
  );
}
export default Hero;