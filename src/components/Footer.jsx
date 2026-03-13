import {
  Github, Linkedin, Mail, Download, ExternalLink, ChevronDown,
  ArrowRight, Code2, Terminal, Cpu, Database, Cloud, GitBranch,
  Server, Layers, Workflow, CheckCircle2, Menu, X,
  ChevronLeft, ChevronRight, Zap, Coffee,
  Contact,
} from "lucide-react";
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
export default Footer;