import React from "react";
import RecruiterNavbar from "../components/RecruiterNavbar";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaUnity,
} from "react-icons/fa";
import {
  SiDjango,
  SiFlask,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiCplusplus,
  SiOpencv,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiPhp,
  SiFlutter,
  SiDart,
  //SiCsharp,
} from "react-icons/si";

// ─── Languages ────────────────────────────────
const languages = [
  { icon: <FaPython size={32} />, label: "Python", category: "Programming" },
  { icon: <SiCplusplus size={32} />, label: "C / C++", category: "Programming" },
  //{ icon: <SiCsharp size={32} />, label: "C#", category: "Game Dev" },
  { icon: ( <span className="text-2xl font-bold text-emerald-500 leading-none">C#</span> ), label: "C#", category: "Game Development / Unity", },
  { icon: <SiDart size={32} />, label: "Dart", category: "Mobile Dev" },
  { icon: <SiJavascript size={32} />, label: "JavaScript", category: "Web" },
  { icon: <SiPhp size={32} />, label: "PHP", category: "Backend Scripting" },
];

// ─── Frontend ────────────────────────────────
const frontend = [
  { icon: <FaHtml5 size={32} />, label: "HTML5", category: "Markup" },
  { icon: <FaCss3Alt size={32} />, label: "CSS3", category: "Styling" },
  { icon: <SiBootstrap size={32} />, label: "Bootstrap", category: "UI Framework" },
  { icon: <SiTailwindcss size={32} />, label: "Tailwind", category: "Utility CSS" },
  { icon: <FaReact size={32} />, label: "React", category: "Frontend Library" },
  { icon: <SiFlutter size={32} />, label: "Flutter", category: "Cross-Platform" },
];

// ─── Backend / Databases ─────────────────────
const backend = [
  { icon: <SiFlask size={32} />, label: "Flask", category: "Python Framework" },
  { icon: <SiDjango size={32} />, label: "Django", category: "Python Framework" },
  { icon: <FaDatabase size={32} />, label: "SQLite", category: "Database" },
  { icon: <SiMysql size={32} />, label: "MySQL", category: "Database" },
  { icon: <SiMongodb size={32} />, label: "MongoDB", category: "Database" },
];

// ─── Game Dev & CV ───────────────────────────
const gamedev = [
  { icon: <FaUnity size={32} />, label: "Unity", category: "Game Engine" },
  { icon: <SiOpencv size={32} />, label: "OpenCV", category: "Computer Vision" },
];

// ─── Tools ───────────────────────────────────
const tools = [
  { icon: <FaGitAlt size={32} />, label: "Git / GitHub", category: "Version Control" },
  { icon: <FaDatabase size={32} />, label: "DB Design", category: "Schema & ER" },
  { icon: <FaPython size={32} />, label: "OS by Python", category: "Coursework" },
];

const SkillGrid = ({ title, items }) => (
  <>
    <h2 className="text-xl font-semibold mb-6 text-gray-200">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
      {items.map((skill, idx) => (
        <div
          key={idx}
          className="
            group bg-zinc-900 p-6 rounded-md text-center
            border border-transparent
            hover:border-emerald-500
            hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]
            transition duration-300
          "
        >
          <div className="mb-3 text-emerald-500 group-hover:scale-110 transition">
            {skill.icon}
          </div>
          <h3 className="font-bold text-lg">{skill.label}</h3>
          <p className="text-sm text-gray-400">{skill.category}</p>
        </div>
      ))}
    </div>
  </>
);

export default function Skills() {
  return (
    <div className="bg-black min-h-screen text-white">
      <RecruiterNavbar />
      <div className="pt-20 px-6 md:px-12">
        <h1 className="text-center text-4xl font-bold mb-8">
          MY <span className="text-emerald-500">SKILLS</span>
        </h1>

        <SkillGrid title="Programming Languages" items={languages} />
        <SkillGrid title="Frontend Development" items={frontend} />
        <SkillGrid title="Backend & Databases" items={backend} />
        <SkillGrid title="Game Dev & Computer Vision" items={gamedev} />
        <SkillGrid title="Tools & Others" items={tools} />
      </div>
    </div>
  );
}
