import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    let mx = 0, my = 0, rx = 0, ry = 0;

    const moveCursor = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) {
        dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      }
    };

    document.addEventListener("mousemove", moveCursor);

    const animateRing = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ring) {
        ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      }
      requestAnimationFrame(animateRing);
    };
    animateRing();

    // Hover effect for links and buttons
    const hoverables = document.querySelectorAll("a, button");
    const handleEnter = () => {
      if (ring) ring.style.transform += " scale(1.8)";
    };
    const handleLeave = () => {
      if (ring) ring.style.transform = ring.style.transform.replace(" scale(1.8)", "");
    };
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        id="cursor-dot"
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-emerald-400 pointer-events-none z-[9999]"
      />
      <div
        id="cursor-ring"
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-400 pointer-events-none z-[9998] transition-transform duration-75 shadow-[0_0_12px_#34d399]"
      />
    </>
  );
}