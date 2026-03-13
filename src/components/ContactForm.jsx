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
function ContactForm() {
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
export default ContactForm;