import React from "react";

export default function LinktreeCard({ username }) {
  return (
    <div style={{
      background: "#161b22",
      borderRadius: 16,
      boxShadow: "0 4px 32px 0 #3b82f6cc, 0 0 0 2px #3b82f6",
      padding: 24,
      minWidth: 220,
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      zIndex: 9999
    }}>
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linktree.svg" alt="Linktree" style={{ width: 48, height: 48, marginBottom: 8 }} />
      <div style={{ fontWeight: 700, fontSize: 18 }}>Connect on Linktree</div>
      <div style={{ fontSize: 14, color: "#60a5fa" }}>@{username}</div>
      <a href={`https://linktr.ee/${username}`} target="_blank" rel="noopener noreferrer" style={{
        marginTop: 8,
        background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
        color: "#fff",
        padding: "8px 20px",
        borderRadius: 8,
        fontWeight: 600,
        textDecoration: "none",
        boxShadow: "0 2px 12px #22d3ee55",
        transition: "background 0.2s"
      }}>Go to Profile</a>
    </div>
  );
}
