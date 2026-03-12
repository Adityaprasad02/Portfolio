import React from "react";

export default function NeonBtn({ children, onClick, href, outline = false, style = {} }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 7,
    padding: outline ? "10px 22px" : "11px 26px",
    borderRadius: 7, fontFamily: "monospace", fontSize: 11,
    letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer",
    transition: "all 0.25s", border: "1px solid",
    background: outline ? "transparent" : "#00FFB2",
    color: outline ? "#00FFB2" : "#080B10",
    borderColor: "#00FFB2", textDecoration: "none", ...style,
  };
  if (href) return <a href={href} style={base}>{children}</a>;
  return <button style={base} onClick={onClick}>{children}</button>;
}
