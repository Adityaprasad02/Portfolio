import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import React from "react";

/* ─── SVG Icons (original brand marks) ─── */
function IconX({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLinkedIn({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconGmail({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335" />
      <path d="M0 5.457v13.909c0 .904.732 1.636 1.636 1.636h3.819V11.73L12 16.64V9.548L5.455 4.64 3.927 3.493C2.309 2.28 0 3.434 0 5.457z" fill="#4285F4" />
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64V9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#FBBC05" />
    </svg>
  );
}

/* ─── Toast notification ─── */
function Toast({ type, onDone }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(100);
  const DURATION = 4000;

  useEffect(() => {
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.max(0, 100 - (elapsed / DURATION) * 100);
      setProgress(pct);
      if (elapsed >= DURATION) {
        clearInterval(tick);
        setVisible(false);
        setTimeout(onDone, 400);
      }
    }, 30);
    return () => clearInterval(tick);
  }, []);

  const isSuccess = type === "success";
  const color = isSuccess ? "#34d399" : "#f87171";
  const bg = isSuccess ? "rgba(52,211,153,0.08)" : "rgba(248,113,113,0.08)";
  const border = isSuccess ? "rgba(52,211,153,0.25)" : "rgba(248,113,113,0.25)";

  return (
    <div style={{
      position: "fixed",
      top: 24,
      right: 24,
      zIndex: 9999,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0) scale(1)" : "translateY(-16px) scale(0.96)",
      transition: "opacity 0.35s ease, transform 0.35s ease",
      maxWidth: 380,
      width: "calc(100vw - 48px)",
    }}>
      <div style={{
        background: "rgba(8,10,18,0.96)",
        border: `1.5px solid ${border}`,
        borderRadius: 14,
        padding: "16px 20px",
        backdropFilter: "blur(16px)",
        boxShadow: `0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px ${color}18`,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: `${color}18`,
            border: `1.5px solid ${color}44`,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            {isSuccess ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            )}
          </div>
          <div>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color: "#f1f5f9",
              margin: "0 0 3px",
            }}>
              {isSuccess ? "Message sent!" : "Something went wrong"}
            </p>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 13,
              color: "#64748b",
              margin: 0,
              lineHeight: 1.5,
            }}>
              {isSuccess
                ? "I'll get back to you within 24 hours."
                : "Try again or email shubhamsahoo230@gmail.com directly."}
            </p>
          </div>
        </div>
        {/* Progress bar */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "rgba(255,255,255,0.04)",
        }}>
          <div style={{
            height: "100%",
            width: `${progress}%`,
            background: `linear-gradient(to right, ${color}88, ${color})`,
            transition: "width 0.03s linear",
            borderRadius: "0 0 0 14px",
          }} />
        </div>
      </div>
    </div>
  );
}

/* ─── Input field ─── */
function Field({ label, type = "text", placeholder, value, onChange, multiline = false }) {
  const [focused, setFocused] = useState(false);
  const accentColor = "#3b82f6";

  const sharedStyle = {
    width: "100%",
    background: focused ? "rgba(59,130,246,0.04)" : "rgba(255,255,255,0.03)",
    border: `1.5px solid ${focused ? accentColor + "77" : "rgba(255,255,255,0.08)"}`,
    borderRadius: 12,
    padding: "13px 16px",
    color: "#e2e8f0",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 14,
    outline: "none",
    resize: "none",
    transition: "all 0.25s ease",
    boxShadow: focused ? `0 0 0 3px ${accentColor}18` : "none",
    boxSizing: "border-box",
  };

  return (
    <div>
      <label style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10,
        color: focused ? accentColor : "#475569",
        textTransform: "uppercase",
        letterSpacing: "0.13em",
        display: "block",
        marginBottom: 8,
        transition: "color 0.2s",
      }}>{label}</label>
      {multiline ? (
        <textarea
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...sharedStyle, lineHeight: 1.6 }}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={sharedStyle}
        />
      )}
    </div>
  );
}

/* ─── Contact link row ─── */
function ContactLink({ icon: Icon, label, href, color, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        textDecoration: "none",
        opacity: 0,
        animation: `slide-in-left 0.5s cubic-bezier(0.23,1,0.32,1) ${delay}s forwards`,
        transition: "transform 0.25s ease",
        transform: hovered ? "translateX(6px)" : "translateX(0)",
      }}
    >
      <div style={{
        width: 46,
        height: 46,
        borderRadius: 13,
        background: hovered ? `${color}18` : "rgba(255,255,255,0.04)",
        border: `1.5px solid ${hovered ? color + "55" : "rgba(255,255,255,0.08)"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: hovered ? color : "#64748b",
        transition: "all 0.25s ease",
        flexShrink: 0,
        boxShadow: hovered ? `0 4px 20px ${color}22` : "none",
      }}>
        <Icon size={18} />
      </div>
      <span style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 13.5,
        color: hovered ? "#e2e8f0" : "#64748b",
        fontWeight: 500,
        transition: "color 0.2s",
        wordBreak: "break-all",
      }}>{label}</span>
    </a>
  );
}

/* ─── Main ─── */
export default function ContactForm() {
  const SERVICE_ID  = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const USER_ID     = import.meta.env.VITE_USER_ID;

  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [toast, setToast]   = useState(null);   // null | "success" | "error"
  const sectionRef          = useRef(null);
  const [vis, setVis]       = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handle = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        title: "Contact Form Submission",
      }, USER_ID);
      setStatus("idle");
      setToast("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("idle");
      setToast("error");
    }
  };

  const CONTACTS = [
    { icon: IconX,       label: "x.com/shubhamsahoo230",          href: "https://x.com/shubhamsahoo230",                 color: "#e2e8f0", delay: 0.1 },
    { icon: IconGmail,   label: "shubhamsahoo230@gmail.com",       href: "mailto:shubhamsahoo230@gmail.com",              color: "#EA4335", delay: 0.2 },
    { icon: IconLinkedIn,label: "linkedin.com/in/adityaps09",      href: "https://www.linkedin.com/in/adityaps09/",       color: "#0A66C2", delay: 0.3 },
  ];

  const sending = status === "sending";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        input::placeholder, textarea::placeholder {
          color: #334155;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 44px !important;
          }
        }
      `}</style>

      {/* Toast */}
      {toast && <Toast type={toast} onDone={() => setToast(null)} />}

      <section
        id="contact"
        ref={sectionRef}
        style={{
          padding: "110px 24px",
          width: "100%",
          background: "#080a10",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div style={{ position: "absolute", top: "20%", left: "-8%", width: 500, height: 500, borderRadius: "50%", background: "rgba(59,130,246,0.06)", filter: "blur(90px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "0%", width: 400, height: 400, borderRadius: "50%", background: "rgba(52,211,153,0.04)", filter: "blur(80px)", pointerEvents: "none" }} />

        {/* Dot grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "44px 44px", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Section heading */}
          <div style={{
            textAlign: "center",
            marginBottom: 64,
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: 100, padding: "5px 15px", marginBottom: 18,
            }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#3b82f6" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#3b82f6", letterSpacing: "0.15em", textTransform: "uppercase" }}>Contact</span>
            </div>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(34px, 5.5vw, 62px)",
              color: "#f1f5f9",
              margin: "0 0 14px",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}>
              Let's build something{" "}
              <span style={{ WebkitTextStroke: "2px #3b82f6", WebkitTextFillColor: "transparent" }}>great.</span>
            </h2>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 15,
              color: "#475569",
              maxWidth: 460,
              margin: "0 auto",
              lineHeight: 1.65,
            }}>
              Open to backend roles, freelance gigs, and interesting collaborations. I reply within 24 hours.
            </p>
          </div>

          <div className="contact-grid">

            {/* ── Left: info ── */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
              opacity: vis ? 1 : 0,
              transform: vis ? "translateX(0)" : "translateX(-28px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s cubic-bezier(0.23,1,0.32,1) 0.15s",
            }}>
           
                
              

              {/* Divider label */}
              <div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#334155", letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 18px" }}>Reach me via</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {CONTACTS.map(c => <ContactLink key={c.href} {...c} />)}
                </div>
              </div>

              {/* Response time */}
              <div style={{
                padding: "16px 20px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.02)",
                border: "1.5px solid rgba(255,255,255,0.06)",
              }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#334155", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 12px" }}>Typical response time</p>
                <div style={{ display: "flex", gap: 10 }}>
                  {[["Email", "~24h"], ["LinkedIn", "~12h"], ["Twitter", "~6h"]].map(([platform, time]) => (
                    <div key={platform} style={{ flex: 1, textAlign: "center", padding: "10px 8px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 16, color: "#e2e8f0", margin: "0 0 3px" }}>{time}</p>
                      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#475569", margin: 0, letterSpacing: "0.08em" }}>{platform.toUpperCase()}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div style={{
              opacity: vis ? 1 : 0,
              transform: vis ? "translateX(0)" : "translateX(28px)",
              transition: "opacity 0.7s ease 0.25s, transform 0.7s cubic-bezier(0.23,1,0.32,1) 0.25s",
            }}>
              <div style={{
                background: "rgba(10,11,20,0.9)",
                border: "1.5px solid rgba(255,255,255,0.07)",
                borderRadius: 22,
                padding: "36px 32px",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 48px rgba(0,0,0,0.4)",
              }}>
                {/* Form top bar */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: 20,
                    color: "#f1f5f9",
                    margin: 0,
                    letterSpacing: "-0.02em",
                  }}>Send a message</h3>
                  <div style={{ display: "flex", gap: 6 }}>
                    {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
                      <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.7 }} />
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="form-row">
                    <Field
                      label="Name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    />
                    <Field
                      label="Email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    />
                  </div>

                  <Field
                    label="Message"
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    multiline
                  />

                  <button
                    onClick={handle}
                    disabled={sending || !form.name || !form.email || !form.message}
                    style={{
                      width: "100%",
                      padding: "14px 24px",
                      borderRadius: 13,
                      background: (!form.name || !form.email || !form.message)
                        ? "rgba(59,130,246,0.3)"
                        : "linear-gradient(135deg, #2563eb, #3b82f6)",
                      border: "none",
                      color: "#fff",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: 15,
                      cursor: (!form.name || !form.email || !form.message) ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      transition: "opacity 0.2s, transform 0.2s, box-shadow 0.2s",
                      letterSpacing: "0.01em",
                      boxShadow: (!form.name || !form.email || !form.message) ? "none" : "0 4px 24px rgba(59,130,246,0.4)",
                    }}
                    onMouseEnter={e => {
                      if (!sending && form.name && form.email && form.message) {
                        e.currentTarget.style.opacity = "0.9";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {sending ? (
                      <>
                        <div style={{
                          width: 16, height: 16, borderRadius: "50%",
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderTopColor: "#fff",
                          animation: "spin 0.7s linear infinite",
                        }} />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}