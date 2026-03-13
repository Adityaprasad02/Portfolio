import {
  Github, Linkedin, Mail, Download, ExternalLink, ChevronDown,
  ArrowRight, Code2, Terminal, Cpu, Database, Cloud, GitBranch,
  Server, Layers, Workflow, CheckCircle2, Menu, X,
  ChevronLeft, ChevronRight, Zap, Coffee,
  Contact,
} from "lucide-react";
function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(59,130,246,0.1)", padding: "40px 28px", width: "100%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
        <div>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", margin: 0, letterSpacing: "-0.01em" }}>Aditya Prasad Sahoo</p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#64748b", margin: "6px 0 0", fontWeight: 500 }}>© 2025 — Built with ☕ &amp; Spring Boot</p>
        </div>
        <div style={{ display: "flex", gap: 28 }}>
          {[{ icon: Github, label: "GitHub", href: "#" }, { icon: Linkedin, label: "LinkedIn", href: "#" }].map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#64748b", textDecoration: "none", transition: "all 0.2s", fontWeight: 500 }}
              onMouseEnter={e => { e.currentTarget.style.color = "#3b82f6"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#64748b"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <Icon size={16} />{label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
export default Footer;