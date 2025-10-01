// src/pages/Recruiter.jsx
import React from "react";
import banner from "../assets/req/req_banner.jpg";
import { FaPlay, FaLinkedin } from "react-icons/fa";
import { themes } from "../theme";
//import devPic from "../assets/recruiter.jpg";
import resume from "../assets/resume.pdf";

// Top Picks images
import workPermitImg from "../assets/req/work_permit.jpg";
import experienceImg from "../assets/req/experience.jpg";
import skillsImg from "../assets/req/skills.jpg";
import certificationsImg from "../assets/req/certification.jpg";
import recommendationsImg from "../assets/req/recommendations.jpg";
import projectsImg from "../assets/req/projects.jpg";
import contactMeImg from "../assets/req/contact_me.jpg";

import { Link } from "react-router-dom";
import RecruiterNavbar from "../components/RecruiterNavbar";

// ---------------------------
// Carousel Row (reusable)
// ---------------------------
const CarouselRow = ({ title, items }) => (
  <div className="px-8 pt-4 pb-6 mb-10">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>

    <div className="flex gap-5 overflow-x-auto scrollbar-hide py-4 pl-4">
      {items.map((item, idx) => (
        <Link
          key={idx}
          to={item.link}
          className="
            relative min-w-[220px] h-[140px] mt-1 flex-shrink-0 rounded-md overflow-hidden
            bg-black/20 border-2 border-transparent bg-zinc-900 shadow transition duration-300 hover:scale-[1.03]
            hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] ease-out cursor-pointer
          "
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition"></div>
          <span className="absolute bottom-2 left-2 text-white font-bold text-sm drop-shadow">
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  </div>
);

// ---------------------------
// Recruiter Page
// ---------------------------
export default function Recruiter() {
  const theme = themes.recruiter; // pick colors for this role

  const topPicks = [
    { title: "Projects", img: projectsImg, link: "/projects" },
    { title: "Skills", img: skillsImg, link: "/skills" },
    { title: "Experience", img: experienceImg, link: "/experience" },
    {
      title: "Education & Certifications",
      img: certificationsImg,
      link: "/certifications",
    },
    { title: "Recommendations", img: recommendationsImg, link: "/recommendations" },
    { title: "Work Permit", img: workPermitImg, link: "/work-permit" },
    { title: "Contact Me", img: contactMeImg, link: "/contact" },
  ];

  return (
    <div className={`${theme.bg} text-white min-h-screen`}>
      {/* --- Hero Section --- */}
      <div
        className="relative h-screen w-full bg-cover bg-center flex flex-col justify-end pb-24 px-12"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        {/* Navbar */}
        <RecruiterNavbar />

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl font-extrabold mb-4">
            Shruti – Senior Year Student
          </h1>
          <p className="text-lg mb-6">
            Passionate Computer Science undergraduate combining strong
            programming skills with experience in full-stack development, data
            structures, and game design. Adept in React, Flask, Python, C#, and
            Unity, with a focus on building clean, user-friendly solutions. I
            enjoy turning ideas into working software from polished web apps to
            engaging games. I’m always eager to learn new tools and improve my
            craft.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => window.open(resume, "_blank")}
              className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-300 transition"
            >
              <FaPlay className="text-black text-sm" /> Resume
            </button>

            <button
              onClick={() =>
                window.open("https://www.linkedin.com/in/shrutidebnath224/", "_blank")
              }
              className={`flex items-center gap-2 px-4 py-2 rounded font-semibold transition ${theme.button}`}
            >
              <FaLinkedin className="text-sm" /> LinkedIn
            </button>
          </div>
        </div>
      </div>

      {/* --- Carousel --- */}
      <div className="relative z-10 pt-10">
        <CarouselRow title="Today's Top Picks for Recruiter" items={topPicks} />
      </div>
    </div>
  );
}
