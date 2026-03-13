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
  Twitter,
} from "lucide-react";
function ContactForm() {
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


  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const handle = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1600));
    setStatus("success");
  };
  return (
    <section id="contact" style={{ padding: "100px 28px", width: "100%" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="contact-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(32px,4vw,52px)", color: "#fff", lineHeight: 1.2, margin: "12px 0 0", letterSpacing: "-0.02em" }}>
              Let's build something <GlowText colors={["#3b82f6", "#60a5fa"]}>great together</GlowText>
            </h2>
          </div>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 16, fontFamily: "'Inter', sans-serif" }}>Open to backend roles, freelance projects and interesting collaborations. I reply within 24 hours.</p>
          {[{ icon: Twitter, label: "aditya@example.com", href: "#" }, { icon: Mail, label: "aditya@example.com", href: "mailto:aditya@example.com" }, { icon: Github, label: "github.com/yourusername", href: "#" }, { icon: Linkedin, label: "linkedin.com/in/yourusername", href: "#" }].map(({ icon: Icon, label, href }, idx) => (
            <a key={label + '-' + idx} href={href} style={{ display: "flex", alignItems: "center", gap: 16, textDecoration: "none", transition: "transform 0.2s", animation: `fadeInLeft 0.5s ease-out ${idx * 0.1}s both` }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateX(8px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateX(0)"}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(10,10,15,0.8)", border: "1px solid rgba(59,130,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(59,130,246,0.2)"; e.currentTarget.style.transform = "scale(1.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "scale(1)"; }}
              ><Icon size={18} style={{ color: "#3b82f6" }} /></div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#94a3b8", transition: "color 0.2s", fontWeight: 500 }} onMouseEnter={e => e.target.style.color = "#3b82f6"} onMouseLeave={e => e.target.style.color = "#94a3b8"}>{label}</span>
            </a>
          ))}
        </div>

        <div style={{ background: "rgba(10,10,15,0.9)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 20, padding: 40, backdropFilter: "blur(16px)", boxShadow: "0 0 40px rgba(59,130,246,0.1)", transition: "all 0.3s" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)"; e.currentTarget.style.boxShadow = "0 0 60px rgba(59,130,246,0.15)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(59,130,246,0.1)"; }}
        >
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "40px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(59,130,246,0.1)", border: "2px solid #3b82f6", display: "flex", alignItems: "center", justifyContent: "center", animation: "checkPulse 0.6s ease", boxShadow: "0 0 30px rgba(59,130,246,0.3)" }}>
                <CheckCircle2 size={32} style={{ color: "#3b82f6" }} />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 24, color: "#fff", margin: 0 }}>Message Sent!</h3>
              <p style={{ color: "#94a3b8", fontSize: 15, fontFamily: "'Inter', sans-serif" }}>I'll get back to you within 24 hours.</p>
              <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }} style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#64748b", background: "none", border: "none", cursor: "pointer", marginTop: 8, fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#3b82f6"}
                onMouseLeave={e => e.target.style.color = "#64748b"}
              >Send another →</button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[{ l: "Name", k: "name", t: "text", p: "Your full name" }, { l: "Email", k: "email", t: "email", p: "your@email.com" }].map(({ l, k, t, p }) => (
                <div key={k}>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: 10, fontWeight: 600 }}>{l}</label>
                  <input type={t} placeholder={p} value={form[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} style={{ width: "100%", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 10, padding: "12px 16px", color: "#E5E7EB", fontFamily: "'Inter', sans-serif", fontSize: 14, outline: "none", transition: "all 0.2s" }} onFocus={e => { e.target.style.borderColor = "rgba(59,130,246,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)"; }} onBlur={e => { e.target.style.borderColor = "rgba(59,130,246,0.2)"; e.target.style.boxShadow = "none"; }} />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: 10, fontWeight: 600 }}>Message</label>
                <textarea rows={6} placeholder="Tell me about your project..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ width: "100%", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 10, padding: "12px 16px", color: "#E5E7EB", fontFamily: "'Inter', sans-serif", fontSize: 14, outline: "none", resize: "none", transition: "all 0.2s" }} onFocus={e => { e.target.style.borderColor = "rgba(59,130,246,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)"; }} onBlur={e => { e.target.style.borderColor = "rgba(59,130,246,0.2)"; e.target.style.boxShadow = "none"; }} />
              </div>
              <NeonBtn onClick={handle} style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: 14, fontWeight: 600 }}>
                {status === "sending" ? <><div style={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid #000000", borderTopColor: "transparent", animation: "spin 0.7s linear infinite" }} />Sending...</> : <><ArrowRight size={16} />Send Message</>}
              </NeonBtn>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){.contact-grid{grid-template-columns:1fr!important; gap: 40px!important}}
        @keyframes checkPulse{0%{transform:scale(0);opacity:0}60%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes fadeInLeft{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}
      `}</style>
    </section>
  );
}
export default ContactForm;