import { useState, useEffect, useRef } from "react";
import React from "react";
import NeonBtn from "./components/ui/NeonBtn.jsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Github, Linkedin, Mail, Download, ExternalLink, ChevronDown,
  ArrowRight, Code2, Terminal, Cpu, Database, Cloud, GitBranch,
  Server, Layers, Workflow, CheckCircle2, Menu, X,
  ChevronLeft, ChevronRight, Zap, Coffee,
  Contact,
} from "lucide-react";
import Navbar from "@/components/Navbar.jsx";
import CustomCursor from "@/components/ui/CustomCursor.jsx";
import Hero from "@/components/Hero.jsx";
import Skills from "@/components/Skills.jsx";
import About from "@/components/About.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Resume from "./components/Resume.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "@/components/Footer.jsx";


export default function Portfolio() {
  // scrollTo function to scroll to section by id
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Optionally, update active section on scroll
  useEffect(() => {
    const root = document.getElementById("scroll-root");
    if (!root) return;
    const h = () => {
      const sections = ["hero","skills","about","projects","experience","resume","contact"];
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= root.scrollTop + 140) setActive(id);
      });
    };
    root.addEventListener("scroll", h, { passive: true });
    return () => root.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <CustomCursor />
      <div
        id="scroll-root"
        className="bg-[#080B10] min-h-screen text-gray-200 overflow-x-hidden overflow-y-auto"
      >
        <Navbar active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Experience />
        <Resume />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}