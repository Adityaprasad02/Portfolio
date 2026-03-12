import { useState, useEffect, useRef } from "react";
import React from "react";
import NeonBtn from "./components/ui/NeonBtn.jsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Github, Linkedin, Mail, Download, ExternalLink, ChevronDown,
  ArrowRight, Code2, Terminal, Cpu, Database, Cloud, GitBranch,
  Server, Layers, Workflow, CheckCircle2, Menu, X,
  ChevronLeft, ChevronRight, Zap, Coffee,
} from "lucide-react";
import Navbar from "@/components/Navbar.jsx";
import CustomCursor from "@/components/ui/CustomCursor.jsx";
import Hero from "@/components/Hero.jsx";
import Skills from "@/components/Skills.jsx";



const PROJECTS = [
  {
    id: 0, number: "01", title: "E-Commerce Microservices",
    short: "Scalable e-commerce platform powered by event-driven Spring Boot microservices.",
    tag: "Backend", accent: "#00FFB2",
    tech: ["Spring Boot", "Kafka", "Docker", "Redis", "PostgreSQL"],
    description: "A production-grade microservices architecture with user service, product catalog, order management and payment processing. Event-driven via Apache Kafka. Redis caching reduced latency by 60%.",
    demo: "#", github: "#", screenshots: ["Screenshot 1", "Screenshot 2", "Screenshot 3"],
  },
  {
    id: 1, number: "02", title: "JWT Auth Service",
    short: "Robust authentication & authorization with JWT, refresh tokens and OAuth2.",
    tag: "Security", accent: "#a855f7",
    tech: ["Spring Security", "JWT", "MySQL", "OAuth2"],
    description: "Complete authentication solution featuring JWT token management, silent refresh, MFA hooks, and fine-grained RBAC. 92% test coverage with JUnit/Mockito.",
    demo: "#", github: "#", screenshots: ["Auth Flow", "Token Diagram"],
  },
  {
    id: 2, number: "03", title: "Real-Time Analytics API",
    short: "High-throughput pipeline processing 1M+ events/hour via Redis Streams.",
    tag: "Analytics", accent: "#F59E0B",
    tech: ["Spring Batch", "Redis", "PostgreSQL", "Docker"],
    description: "Ingestion pipeline buffered via Redis Streams, bulk-processed with Spring Batch, and exposed via REST API with pagination and flexible query DSL.",
    demo: "#", github: "#", screenshots: ["Dashboard", "Pipeline Diagram"],
  },
];

const SectionLabel = ({ children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
    <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#00FFB2" }}>{children}</span>
    <div style={{ height: 1, width: 50, background: "linear-gradient(to right, #00FFB2, transparent)" }} />
  </div>
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

const NAV_LINKS = ["Hero", "Skills", "About", "Projects", "Experience", "Resume", "Contact"];






const GlowText = ({ children, colors = ["#00FFB2", "#a855f7", "#F59E0B"] }) => (
  <span style={{
    background: `linear-gradient(135deg, ${colors.join(", ")})`,
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    backgroundSize: "200% 200%", animation: "gradShift 4s ease-in-out infinite",
  }}>{children}</span>
);




// ── NAVBAR
<>
  // ── NAVBAR
  <Navbar />
  // ── HERO
  <Hero /></>

// ── SKILLS


// ── ABOUT
function About() {
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

// ── PROJECTS
function Projects() {
  const [dialog, setDialog] = useState(null);
  const [ci, setCi] = useState(0);

  return (
    <section id="projects" style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <SectionLabel>Portfolio</SectionLabel>
          <h2 style={{ fontFamily: "serif", fontWeight: 900, fontSize: "clamp(28px,4vw,52px)", color: "#fff", margin: 0 }}>
            Selected <GlowText>Projects</GlowText>
          </h2>
          <p style={{ fontFamily: "monospace", fontSize: 12, color: "#6B7280", marginTop: 10 }}>Click any card to explore details, screenshots and source code.</p>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, transparent, rgba(0,255,178,0.2) 10%, rgba(0,255,178,0.2) 90%, transparent)", transform: "translateX(-50%)" }} className="timeline-line" />

          {PROJECTS.map((p, idx) => (
            <div key={p.id} style={{ marginBottom: 60, position: "relative" }}>
              <div style={{ position: "absolute", left: "50%", top: 28, width: 48, height: 48, borderRadius: 12, background: `${p.accent}15`, border: `1px solid ${p.accent}40`, color: p.accent, fontFamily: "serif", fontWeight: 900, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", transform: "translateX(-50%)", zIndex: 2, boxShadow: `0 0 18px ${p.accent}20` }} className="timeline-num">{p.number}</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className={`proj-grid ${idx % 2 === 1 ? "proj-grid-rev" : ""}`}>
                <div
                  style={{ background: "rgba(17,24,39,0.65)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, overflow: "hidden", cursor: "pointer", transition: "all 0.35s", backdropFilter: "blur(12px)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${p.accent}50`; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 20px 40px ${p.accent}18`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  onClick={() => { setDialog(p); setCi(0); }}
                >
                  <div style={{ width: "100%", height: 200, background: `linear-gradient(135deg, ${p.accent}08, ${p.accent}18)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <Code2 size={52} style={{ color: p.accent, opacity: 0.2 }} />
                    <div style={{ position: "absolute", top: 12, right: 12, padding: "3px 12px", borderRadius: 20, border: `1px solid ${p.accent}40`, background: `${p.accent}12`, fontFamily: "monospace", fontSize: 10, color: p.accent }}>{p.tag}</div>
                  </div>
                  <div style={{ padding: 24 }}>
                    <h3 style={{ fontFamily: "serif", fontWeight: 800, fontSize: 20, color: "#fff", margin: "0 0 8px" }}>{p.title}</h3>
                    <p style={{ color: "#9CA3AF", fontSize: 13, lineHeight: 1.65, margin: "0 0 14px" }}>{p.short}</p>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {p.tech.slice(0, 3).map(t => <span key={t} style={{ fontFamily: "monospace", fontSize: 10, padding: "3px 10px", borderRadius: 4, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#9CA3AF" }}>{t}</span>)}
                    </div>
                  </div>
                </div>
                <div className="proj-spacer" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!dialog} onOpenChange={() => setDialog(null)}>
        <DialogContent style={{ background: "#0D1117", border: `1px solid ${dialog?.accent}35`, boxShadow: `0 0 60px ${dialog?.accent}18`, maxWidth: 680 }}>
          {dialog && <>
            <DialogHeader>
              <DialogTitle style={{ fontFamily: "serif", fontWeight: 900, fontSize: 24, color: "#fff" }}>{dialog.title}</DialogTitle>
            </DialogHeader>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 8 }} className="dialog-grid">
              <div>
                <div style={{ borderRadius: 12, overflow: "hidden", height: 180, background: `linear-gradient(135deg, ${dialog.accent}08, ${dialog.accent}18)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 11, color: "#6B7280" }}>{dialog.screenshots[ci]}</span>
                  {dialog.screenshots.length > 1 && <>
                    <button onClick={() => setCi(c => (c - 1 + dialog.screenshots.length) % dialog.screenshots.length)} style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", width: 28, height: 28, borderRadius: "50%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><ChevronLeft size={13} /></button>
                    <button onClick={() => setCi(c => (c + 1) % dialog.screenshots.length)} style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", width: 28, height: 28, borderRadius: "50%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><ChevronRight size={13} /></button>
                    <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 5 }}>
                      {dialog.screenshots.map((_, i) => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i === ci ? dialog.accent : "rgba(255,255,255,0.2)", transition: "background 0.2s" }} />)}
                    </div>
                  </>}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <p style={{ color: "#9CA3AF", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{dialog.description}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {dialog.tech.map(t => <span key={t} style={{ fontFamily: "monospace", fontSize: 10, padding: "3px 10px", borderRadius: 4, border: `1px solid ${dialog.accent}40`, background: `${dialog.accent}10`, color: dialog.accent }}>{t}</span>)}
                </div>
                <div style={{ display: "flex", gap: 10, paddingTop: 4 }}>
                  <NeonBtn href={dialog.demo} style={{ padding: "8px 16px", fontSize: 10 }}><ExternalLink size={12} />Live Demo</NeonBtn>
                  <NeonBtn href={dialog.github} outline style={{ padding: "8px 16px", fontSize: 10 }}><Github size={12} />GitHub</NeonBtn>
                </div>
              </div>
            </div>
          </>}
        </DialogContent>
      </Dialog>
      <style>{`
        @media(max-width:768px){.timeline-line{display:none!important}.timeline-num{display:none!important}.proj-grid{grid-template-columns:1fr!important}.proj-spacer{display:none!important}.dialog-grid{grid-template-columns:1fr!important}}
        .proj-grid-rev > *:first-child{order:2}.proj-grid-rev .proj-spacer{order:1}
      `}</style>
    </section>
  );
}

// ── EXPERIENCE
function Experience() {
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

// ── RESUME
function Resume() {
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

// ── CONTACT
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const handle = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1600));
    setStatus("success");
  };
  return (
    <section id="contact" style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="contact-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 style={{ fontFamily: "serif", fontWeight: 900, fontSize: "clamp(28px,3.5vw,48px)", color: "#fff", lineHeight: 1.2, margin: 0 }}>
              Let's build something <GlowText colors={["#00FFB2", "#a855f7"]}>great together</GlowText>
            </h2>
          </div>
          <p style={{ color: "#9CA3AF", lineHeight: 1.75, fontSize: 15 }}>Open to backend roles, freelance projects and interesting collaborations. I reply within 24 hours.</p>
          {[{ icon: Mail, label: "aditya@example.com", href: "mailto:aditya@example.com" }, { icon: Github, label: "github.com/yourusername", href: "#" }, { icon: Linkedin, label: "linkedin.com/in/yourusername", href: "#" }].map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(17,24,39,0.8)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,255,178,0.45)"; e.currentTarget.style.boxShadow = "0 0 16px rgba(0,255,178,0.15)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none"; }}
              ><Icon size={15} style={{ color: "#00FFB2" }} /></div>
              <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9CA3AF", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#00FFB2"} onMouseLeave={e => e.target.style.color = "#9CA3AF"}>{label}</span>
            </a>
          ))}
        </div>

        <div style={{ background: "rgba(17,24,39,0.75)", border: "1px solid rgba(0,255,178,0.18)", borderRadius: 16, padding: 32, backdropFilter: "blur(16px)", boxShadow: "0 0 40px rgba(0,255,178,0.05)" }}>
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "32px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(0,255,178,0.1)", border: "2px solid #00FFB2", display: "flex", alignItems: "center", justifyContent: "center", animation: "checkPulse 0.6s ease" }}>
                <CheckCircle2 size={26} style={{ color: "#00FFB2" }} />
              </div>
              <h3 style={{ fontFamily: "serif", fontWeight: 800, fontSize: 22, color: "#fff", margin: 0 }}>Message Sent!</h3>
              <p style={{ color: "#9CA3AF", fontSize: 13 }}>I'll get back to you within 24 hours.</p>
              <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }} style={{ fontFamily: "monospace", fontSize: 11, color: "#6B7280", background: "none", border: "none", cursor: "pointer", marginTop: 6 }}>Send another →</button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[{ l: "Name", k: "name", t: "text", p: "Your full name" }, { l: "Email", k: "email", t: "email", p: "your@email.com" }].map(({ l, k, t, p }) => (
                <div key={k}>
                  <label style={{ fontFamily: "monospace", fontSize: 10, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.18em", display: "block", marginBottom: 8 }}>{l}</label>
                  <input type={t} placeholder={p} value={form[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} style={{ width: "100%", background: "rgba(8,11,16,0.6)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "11px 14px", color: "#E5E7EB", fontFamily: "monospace", fontSize: 13, outline: "none", transition: "border-color 0.2s" }} onFocus={e => e.target.style.borderColor = "rgba(0,255,178,0.45)"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"} />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: "monospace", fontSize: 10, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.18em", display: "block", marginBottom: 8 }}>Message</label>
                <textarea rows={5} placeholder="Tell me about your project..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ width: "100%", background: "rgba(8,11,16,0.6)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "11px 14px", color: "#E5E7EB", fontFamily: "monospace", fontSize: 13, outline: "none", resize: "none", transition: "border-color 0.2s" }} onFocus={e => e.target.style.borderColor = "rgba(0,255,178,0.45)"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"} />
              </div>
              <NeonBtn onClick={handle} style={{ width: "100%", justifyContent: "center", padding: "14px" }}>
                {status === "sending" ? <><div style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid #080B10", borderTopColor: "transparent", animation: "spin 0.7s linear infinite" }} />Sending...</> : <><ArrowRight size={14} />Send Message</>}
              </NeonBtn>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}
        @keyframes checkPulse{0%{transform:scale(0);opacity:0}60%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}}
        @keyframes spin{to{transform:rotate(360deg)}}
      `}</style>
    </section>
  );
}

// ── FOOTER
function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "28px 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div>
          <p style={{ fontFamily: "serif", fontWeight: 700, fontSize: 16, color: "#fff", margin: 0 }}>Aditya Prasad Sahoo</p>
          <p style={{ fontFamily: "monospace", fontSize: 11, color: "#4B5563", margin: "3px 0 0" }}>© 2025 — Built with ☕ &amp; Spring Boot</p>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {[{ icon: Github, label: "GitHub", href: "#" }, { icon: Linkedin, label: "LinkedIn", href: "#" }].map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: "monospace", fontSize: 11, color: "#6B7280", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#00FFB2"} onMouseLeave={e => e.currentTarget.style.color = "#6B7280"}>
              <Icon size={14} />{label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}



export default function Portfolio() {
  // scrollTo function to scroll to section by id
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Optionally, update active section on scroll
  useEffect(() => {
    const root = document.getElementById("scroll-root");
    if (!root) return;
    const h = () => {
      const sections = ["hero","skills","about","projects","experience","resume","contact"];
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= root.scrollTop + 140) setActive(id);
      });
    };
    root.addEventListener("scroll", h, { passive: true });
    return () => root.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <CustomCursor />
      <div
        id="scroll-root"
        className="bg-[#080B10] min-h-screen text-gray-200 overflow-x-hidden overflow-y-auto"
      >
        <Navbar active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  );
}