import React from "react";
import { Link } from "react-router-dom";
import DeveloperNavbar from "../components/DeveloperNavbar";
import { themes } from "../theme";
import banner from "../assets/banner.jpg";
import { devProjects } from "../data/projects_dev";
import devProjImg from "../assets/dev/projects.jpg";
import devOssImg from "../assets/dev/oss.jpg";
import devBlogImg from "../assets/dev/blog.jpg";
import devToolsImg from "../assets/dev/tools.jpg";
import devContactImg from "../assets/dev/contact.jpg";

// Carousel row styled for the dev theme
const DevRow = ({ title, items, theme }) => (
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
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#00000066" }}
          />
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

export default function Developer() {
  const t = themes.developer;

  // temporary images — reuse your picks or any placeholder

  const picks = [
    { title: "Dev Projects",        img: devProjImg, link: "/dev/projects" },
    { title: "Open Source",         img: devOssImg, link: "/dev/oss" },
    { title: "Blog / Notes",        img: devBlogImg, link: "/dev/blog" },
    { title: "Tools & Setup",       img: devToolsImg, link: "/dev/tools" },
    { title: "Contact",             img: devContactImg, link: "/dev/contact" },
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
              "linear-gradient(to top, rgba(0,0,0,0.6), rgba(45,27,61,0.55), rgba(45,27,61,0.0))",
          }}
        />
        <DeveloperNavbar />

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: t.accent }}>
            Shruti — Developer
          </h1>
          <p className="text-lg mb-6 text-white/90">
            Building clean, performant interfaces and playful experiments.
            I love turning ideas into working products with React, Flutter, and Python backends.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/shruti-246"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded font-semibold transition"
              style={{ backgroundColor: t.accent, color: "#2D1B3D" }}
              onMouseEnter={(e)=> e.currentTarget.style.backgroundColor = t.hover}
              onMouseLeave={(e)=> e.currentTarget.style.backgroundColor = t.accent}
            >
              GitHub
            </a>
            <Link
              to="/dev/projects"
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
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Rows */}
      <div className="relative z-10 pt-10">
        <DevRow title="Today’s Top Picks for Developer" items={picks} theme={t} />
      </div>
    </div>
  );
}
