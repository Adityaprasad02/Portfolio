import React from 'react';
import { useState, useEffect, useRef } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { X } from "lucide-react";
import NeonBtn from './ui/NeonBtn';
import LinktreeCard from './ui/LinktreeCard';

const NAV_LINKS = ["About", "Projects", "Experience", "Resume", "Profiles", "Contact"];

const Navbar = ({ active, scrollTo, menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = document.getElementById("scroll-root");
    if (!el) return;
    const h = () => setScrolled(el.scrollTop > 40);
    el.addEventListener("scroll", h, { passive: true });
    return () => el.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        /* ── Desktop nav ── */
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        /* ── Mobile pill-row nav (always visible, no hamburger) ── */
        .nav-mobile-bar {
          display: none;
        }

        /* Hide floating linktree on mobile — replaced by FAB */
        .floating-linktree-wrap {
          display: block;
        }

        /* Mobile floating Connect FAB — hidden on desktop */
        .mobile-connect-fab {
          display: none;
        }

        @media (max-width: 820px) {
          .nav-desktop        { display: none !important; }
          .nav-mobile-bar     { display: flex !important; }
          .nav-logo-text      { font-size: 13px !important; max-width: 150px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .floating-linktree-wrap { display: none !important; }
          /* Show FAB on mobile */
          .mobile-connect-fab { display: flex !important; }
        }

        @media (max-width: 400px) {
          .nav-logo-text { display: none !important; }
        }

        @keyframes fab-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,211,238,0.5), 0 4px 20px rgba(34,211,238,0.35); }
          60%       { box-shadow: 0 0 0 8px rgba(34,211,238,0), 0 4px 20px rgba(34,211,238,0.35); }
        }

        /* Scrollable pill strip — hide scrollbar visually */
        .nav-pill-strip {
          display: flex;
          align-items: center;
          gap: 6px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 0 12px 0 12px;
          /* Extra right padding so last pill fully visible */
          padding-right: 20px;
        }
        .nav-pill-strip::after {
          content: '';
          display: block;
          min-width: 8px;
          flex-shrink: 0;
        }
        .nav-pill-strip::-webkit-scrollbar {
          display: none;
        }

        /* Individual pill button */
        .nav-pill {
          flex-shrink: 0;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px 13px;
          border-radius: 100px;
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: all 0.2s ease;
          white-space: nowrap;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          line-height: 1;
        }
        .nav-pill.active {
          background: rgba(59,130,246,0.18);
          color: #3b82f6;
          box-shadow: 0 0 0 1.5px #3b82f6;
        }
        .nav-pill.inactive {
          color: #64748b;
          background: rgba(255,255,255,0.04);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.07);
        }
        .nav-pill-connect {
          flex-shrink: 0;
          background: rgba(34,211,238,0.12) !important;
          color: #22d3ee !important;
          box-shadow: 0 0 0 1.5px rgba(34,211,238,0.45) !important;
          border: none;
          cursor: pointer;
          padding: 5px 13px;
          border-radius: 100px;
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: all 0.2s ease;
          white-space: nowrap;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          line-height: 1;
        }
        .nav-pill-connect:hover {
          background: rgba(34,211,238,0.22) !important;
          box-shadow: 0 0 10px rgba(34,211,238,0.5) !important;
        }

        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 10px 2px #3b82f666; }
          50%       { box-shadow: 0 0 22px 6px #22d3ee55; }
        }
      `}</style>

      {/* ───── Main nav bar ───── */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(5,6,12,0.97)" : "rgba(5,6,12,0.7)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${scrolled ? "rgba(59,130,246,0.22)" : "rgba(59,130,246,0.1)"}`,
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        width: "100%",
      }}>
        {/* Top row: logo + desktop nav + hire me */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "10px 24px" : "16px 24px",
          transition: "padding 0.35s ease",
        }}>
          {/* Logo */}
          <button
            onClick={() => scrollTo("Hero")}
            style={{
              display: "flex", alignItems: "center", gap: 9,
              background: "none", border: "none", cursor: "pointer",
              transition: "transform 0.2s", flexShrink: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 10, flexShrink: 0,
              background: "linear-gradient(135deg,#3b82f6,#2563eb)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 16,
              color: "#ffffff", boxShadow: "0 0 20px rgba(59,130,246,0.4)"
            }}>A</div>
            <span
              className="nav-logo-text"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700, fontSize: 15,
                color: "#f1f5f9", letterSpacing: "-0.01em",
              }}
            >Aditya Prasad Sahoo</span>
          </button>

          {/* Desktop nav links */}
          <div className="nav-desktop">
            {NAV_LINKS.map(l => {
              const isActive = active === l.toLowerCase();
              return (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 11, fontWeight: 600,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    color: isActive ? "#3b82f6" : "#64748b",
                    borderBottom: `2px solid ${isActive ? "#3b82f6" : "transparent"}`,
                    paddingBottom: 3,
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "#94a3b8"; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "#64748b"; }}
                >{l}</button>
              );
            })}
            <NeonBtn onClick={() => scrollTo("Contact")} style={{ padding: "7px 18px", fontSize: 11 }}>
              Hire Me
            </NeonBtn>
          </div>
        </div>

        {/* Mobile pill-row (shown only ≤820px) */}
        <div
          className="nav-mobile-bar"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingBottom: 8,
            paddingTop: 6,
          }}
        >
          <div className="nav-pill-strip">
            {NAV_LINKS.map(l => {
              const isActive = active === l.toLowerCase();
              return (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className={`nav-pill ${isActive ? "active" : "inactive"}`}
                >{l}</button>
              );
            })}
            {/* Hire Me pill */}
            <button
              onClick={() => scrollTo("Contact")}
              className="nav-pill"
              style={{
                background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                color: "#fff",
                boxShadow: "0 0 12px rgba(59,130,246,0.4)",
              }}
            >Hire Me</button>
          </div>
        </div>
      </nav>

      {/* ───── Mobile Connect FAB (fixed, always visible, bottom-right) ───── */}
      <a
        href="https://linktr.ee/adityasahoo217"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-connect-fab"
        style={{
          position: "fixed",
          bottom: 24,
          right: 16,
          zIndex: 999,
          alignItems: "center",
          gap: 7,
          padding: "10px 18px",
          borderRadius: 100,
          background: "rgba(6,8,18,0.92)",
          border: "1.5px solid #22d3ee",
          backdropFilter: "blur(12px)",
          textDecoration: "none",
          animation: "fab-pulse 2.5s ease-in-out infinite",
          cursor: "pointer",
        }}
      >
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linktree.svg"
          alt="Linktree"
          style={{
            width: 15, height: 15,
            filter: "invert(70%) sepia(60%) saturate(500%) hue-rotate(80deg) brightness(100%) drop-shadow(0 0 8px #43E660)",
          }}
        />
        <span style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize: 13,
          color: "#22d3ee",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}>Connect</span>
      </a>

      {/* ───── Desktop Floating Linktree ───── */}
      <div
        className="floating-linktree-wrap"
        style={{
          position: "fixed",
          top: 76, right: 24,
          zIndex: 120,
        }}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://linktr.ee/adityasahoo217"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div style={{
                  display: "flex", alignItems: "center", gap: 7,
                  padding: "6px 14px", borderRadius: 11,
                  background: "rgba(8,10,20,0.82)",
                  boxShadow: "0 2px 14px #3b82f6bb, 0 0 0 1.5px #3b82f6",
                  border: "1px solid #22d3ee",
                  backdropFilter: "blur(8px)",
                  cursor: "pointer",
                  transition: "box-shadow 0.3s, border-color 0.3s",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = "0 0 22px 4px #22d3ee88, 0 0 0 1.5px #3b82f6";
                    e.currentTarget.style.borderColor = "#3b82f6";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = "0 2px 14px #3b82f6bb, 0 0 0 1.5px #3b82f6";
                    e.currentTarget.style.borderColor = "#22d3ee";
                  }}
                >
                  <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linktree.svg"
                  alt="Linktree"
                  style={{
                    width: 16,
                    height: 16,
                    filter: "invert(64%) sepia(83%) saturate(374%) hue-rotate(79deg) brightness(95%) contrast(91%) drop-shadow(0 0 5px #43E660)"
                  }}
                />
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700, fontSize: 12,
                    color: "#fff",
                    textShadow: "0 0 4px #22d3ee",
                    letterSpacing: "0.04em",
                  }}>Connect</span>
                </div>
              </a>
            </TooltipTrigger>
            <TooltipContent
              sideOffset={12}
              style={{ background: "transparent", border: "none", boxShadow: "none", padding: 0 }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <LinktreeCard username="adityasahoo217" />
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};

export default Navbar;