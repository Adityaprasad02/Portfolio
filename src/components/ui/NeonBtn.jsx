import React from "react";

export default function NeonBtn({ children, onClick, href, outline = false, style = {} }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: outline ? "12px 24px" : "13px 28px",
    borderRadius: 10, fontFamily: "'Inter', sans-serif", fontSize: 13,
    letterSpacing: "0.02em", cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", border: "1px solid",
    background: outline ? "transparent" : "linear-gradient(135deg, #3b82f6, #2563eb)",
    color: outline ? "#3b82f6" : "#ffffff",
    borderColor: "#3b82f6", textDecoration: "none", fontWeight: 600,
    boxShadow: outline ? "none" : "0 4px 20px rgba(59,130,246,0.3)",
    ...style,
  };
  const hoverStyle = {
    transform: "translateY(-2px)",
    boxShadow: outline ? "0 0 20px rgba(59,130,246,0.4)" : "0 6px 30px rgba(59,130,246,0.5)",
    borderColor: "#60a5fa",
  };
  const Component = href ? 'a' : 'button';
  return (
    <Component
      href={href}
      onClick={onClick}
      style={base}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyle);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = outline ? "none" : "0 4px 20px rgba(59,130,246,0.3)";
        e.currentTarget.style.borderColor = "#3b82f6";
      }}
    >
      {children}
    </Component>
  );
}
