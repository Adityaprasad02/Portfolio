import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Code2, Database, Cloud, GitBranch,
  Server, Layers, Workflow, Coffee
} from "lucide-react";

import {
  SiJavascript,
  SiReact,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiPython
} from "react-icons/si";
import { SiSpringboot, SiReact, SiPostgresql } from "react-icons/si";

function Skills() {

const SKILLS = [
  { name: "Java", icon: Coffee, color: "#f89820" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#6DB33F" },
  { name: "Microservices", icon: Server, color: "#60a5fa" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Hibernate", icon: SiHibernate, color: "#59666C" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "REST APIs", icon: Workflow, color: "#3b82f6" },
  { name: "Spring Security", icon: Code2, color: "#6DB33F" },
];

const SectionLabel = ({ children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
    <span style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: 12,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "#3b82f6",
      fontWeight: 600
    }}>
      {children}
    </span>
    <div style={{
      height: 2,
      width: 60,
      background: "linear-gradient(to right, #3b82f6, transparent)",
      borderRadius: 2
    }} />
  </div>
);

return (
<section id="skills" style={{
  padding: "100px 0",
  borderTop: "1px solid rgba(59,130,246,0.1)",
  overflow: "hidden",
  width: "100%"
}}>

<div style={{ padding: "0 28px 40px", maxWidth: 1200, margin: "0 auto" }}>
  <SectionLabel>Tech Stack</SectionLabel>

  <h2 style={{
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: "clamp(40px,5vw,64px)",
    color: "#fff",
    margin: "10px 0 0",
    letterSpacing: "-0.03em"
  }}>
    Tech Stack I Work With
  </h2>

  <p style={{
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    color: "#94a3b8",
    margin: "12px 0 0",
    maxWidth: 600
  }}>
    A curated collection of tools and technologies I use to build robust applications.
  </p>
</div>

<div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>

<div className="skills-grid" style={{
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 18
}}>

{SKILLS.map((s, i) => {

const Icon = s.icon;

return (
<TooltipProvider key={s.name}>
<Tooltip>

<TooltipTrigger asChild>

<div
className="skill-card"
style={{
position: "relative",
padding: 18,
borderRadius: 18,
background: "linear-gradient(180deg, rgba(10,10,15,0.9), rgba(0,0,0,0.55))",
border: "1px solid rgba(59,130,246,0.14)",
backdropFilter: "blur(10px)",
overflow: "hidden",
cursor: "default",
transform: "translateZ(0)",
willChange: "transform",
animation: `skillIn 0.6s ease-out ${i * 0.06}s both`
}}

onMouseEnter={(e)=>{
e.currentTarget.style.transform="translateY(-8px)";
e.currentTarget.style.boxShadow=`0 25px 50px ${s.color}25`;
e.currentTarget.querySelector("svg").style.transform="scale(1.2)";
}}

onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0)";
e.currentTarget.style.boxShadow="none";
e.currentTarget.querySelector("svg").style.transform="scale(1)";
}}

>

<div style={{
position:"absolute",
inset:0,
pointerEvents:"none",
background:`radial-gradient(600px 200px at 20% 0%, ${s.color}15, transparent 60%)`
}}/>

<div style={{
position:"relative",
display:"flex",
alignItems:"center",
gap:12
}}>

<div style={{
width:46,
height:46,
borderRadius:14,
background:"rgba(0,0,0,0.35)",
border:"1px solid rgba(59,130,246,0.18)",
display:"flex",
alignItems:"center",
justifyContent:"center"
}}>

<Icon size={20} style={{
color:s.color,
transition:"transform 0.3s ease"
}}/>

</div>

<div style={{ display:"flex", flexDirection:"column", gap:4 }}>
<div style={{
fontFamily:"'Space Grotesk', sans-serif",
fontWeight:700,
fontSize:16,
color:"#e2e8f0"
}}>
{s.name}
</div>

<div style={{
fontFamily:"'Inter', sans-serif",
fontSize:12,
color:"#64748b"
}}>
Core
</div>
</div>
</div>

<div style={{
position:"relative",
marginTop:14,
height:8,
borderRadius:999,
background:"rgba(59,130,246,0.10)",
overflow:"hidden"
}}>
<div style={{
width:"72%",
height:"100%",
borderRadius:999,
background:`linear-gradient(90deg, ${s.color}, rgba(59,130,246,0.35))`
}}/>
</div>

</div>

</TooltipTrigger>

<TooltipContent style={{
background:"#0a0a0f",
border:"1px solid rgba(59,130,246,0.3)",
color:"#E5E7EB",
fontSize:12,
padding:"6px 12px",
borderRadius:8
}}>
{s.name}
</TooltipContent>

</Tooltip>
</TooltipProvider>
);

})}

</div>
</div>

<style>{`

@media(max-width:980px){
.skills-grid{grid-template-columns:repeat(2,1fr)!important;}
}

@media(max-width:640px){
.skills-grid{grid-template-columns:1fr!important;}
}

@keyframes skillIn{
0%{
opacity:0;
transform:translateY(30px) scale(0.95);
}
100%{
opacity:1;
transform:translateY(0) scale(1);
}
}

`}</style>

</section>
);
}

export default Skills;