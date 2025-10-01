// src/pages/Researcher.jsx
import React from "react";
import { Link } from "react-router-dom";
import ResearcherNavbar from "../components/ResearcherNavbar"; 
import { themes } from "../theme";
import banner from "../assets/res/res_banner.jpg"; 

//top picks images 
import InterestImg from "../assets/res/res_int.jpg"
import LiteratureImg from "../assets/res/lit_res.jpg"
import ToolsImg from "../assets/res/tools_res.jpg"
import ContactImg from "../assets/res/cont_res.jpg"
//import placeholder from "../assets/placeholder.jpg"

// Reusable row for top picks
const ResearchRow = ({ title, items, theme }) => (
  <div className="px-8 pt-4 pb-6 mb-10">
    <h2 className="text-xl font-semibold mb-4" style={{ color: theme.accent }}>
      {title}
    </h2>

    <div className="flex gap-5 overflow-x-auto py-4 pl-4">
      {items.map((item, idx) => (
        <Link
          key={idx}
          to={item.link}
          className="
            relative min-w-[220px] h-[140px] flex-shrink-0 rounded-md overflow-hidden
            transform transition duration-300 ease-out cursor-pointer
          "
          style={{
            backgroundColor: "rgba(0,0,0,0.25)",
            border: `2px solid transparent`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = theme.accent;
            e.currentTarget.style.boxShadow = `0 0 18px ${theme.hover}55`;
            e.currentTarget.style.transform = "scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "transparent";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "none";
          }}
        >
          <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: "#00000066" }} />
          <span
            className="absolute bottom-2 left-2 font-bold text-sm drop-shadow"
            style={{ color: theme.accent }}
          >
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  </div>
);

export default function Researcher() {
  const t = themes.researcher; 

  const picks = [
    { title: "Research Interests",   img: InterestImg, link: "/res/interests" },
    { title: "Literature Reviews",   img: LiteratureImg, link: "/res/literature" },
    { title: "Contact",              img: ContactImg, link: "/res/contact" },
    { title: "Tools & Setup",        img: ToolsImg, link: "/res/tools" },
  ];

  return (
    <div className="text-white min-h-screen" style={{ backgroundColor: t.bg }}>
      {/* Hero */}
      <div
        className="relative h-screen w-full bg-cover bg-center flex flex-col justify-end pb-24 px-12"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6), rgba(30,19,48,0.55), rgba(30,19,48,0.0))",
          }}
        />
        <ResearcherNavbar />

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: t.accent }}>
            Shruti — Aspiring Researcher
          </h1>
          <p className="text-lg mb-6 text-white/90">
            Interested in data science, machine learning, and the intersection of technology & healthcare.
            Exploring how intelligent systems can be built responsibly and explainably.
            Open to research opportunities and collaborations.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/shruti-246"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded font-semibold transition"
              style={{ backgroundColor: t.accent, color: "#1E1330" }}
              onMouseEnter={(e)=> e.currentTarget.style.backgroundColor = t.hover}
              onMouseLeave={(e)=> e.currentTarget.style.backgroundColor = t.accent}
            >
              GitHub
            </a>
            <Link
              to="/research/interests"
              className="px-4 py-2 rounded font-semibold"
              style={{ border: `2px solid ${t.accent}`, color: t.accent }}
              onMouseEnter={(e)=> {
                e.currentTarget.style.backgroundColor = "#ffffff14";
                e.currentTarget.style.borderColor = t.hover;
                e.currentTarget.style.color = t.hover;
              }}
              onMouseLeave={(e)=> {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = t.accent;
                e.currentTarget.style.color = t.accent;
              }}
            >
              Explore Research
            </Link>
          </div>
        </div>
      </div>

      {/* Rows */}
      <div className="relative z-10 pt-10">
        <ResearchRow title="Top Picks for Researcher" items={picks} theme={t} />
      </div>
    </div>
  );
}
