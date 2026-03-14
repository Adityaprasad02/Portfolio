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
     <div style={{ textAlign: "center" }}>

  <img
  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linktree.svg"
  alt="Linktree"
  style={{
    width: 48,
    height: 48,
    margin: "0 auto 8px",
    display: "block",
          filter: "invert(70%) sepia(60%) saturate(500%) hue-rotate(80deg) brightness(100%) drop-shadow(0 0 8px #43E660)"

  }}
/>

            <div style={{ fontWeight: 700, fontSize: 18 }}>
                Connect on Linktree
            </div>

            <div style={{ fontSize: 14, color: "#43E660" }}>
                @{username}
            </div>

            <a
                href={`https://linktr.ee/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                marginTop: 8,
                display: "inline-block",
                background: "linear-gradient(90deg, #43E660, #2ecc71)",
                color: "#0f172a",
                padding: "8px 20px",
                borderRadius: 8,
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 2px 12px #43E66055",
                transition: "all 0.2s"
                }}
            >
                Go to Profile
            </a>

</div>
    </div>
  );
}
