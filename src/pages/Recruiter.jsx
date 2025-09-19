import React from "react";
import banner from "../assets/banner.jpg";
import { FaPlay, FaLinkedin } from "react-icons/fa";
import devPic from "../assets/dev.jpg";
import resume from "../assets/resume.pdf";
import workPermitImg from "../assets/picks/work_permit.jpg";
import experienceImg from "../assets/picks/experience.jpg";
import skillsImg from "../assets/picks/skills.jpg";
import certificationsImg from "../assets/picks/certification.jpg";
import recommendationsImg from "../assets/picks/recommendations.jpg";
import projectsImg from "../assets/picks/projects.jpg";
import contactMeImg from "../assets/picks/contact_me.jpg";

// Reusable carousel row
const CarouselRow = ({ title, items }) => (
  <div className="px-8 pt-4 pb-6 mb-10">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>

    <div className="flex gap-5 overflow-x-auto scrollbar-hide py-4 pl-4">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="
            relative min-w-[220px] h-[140px] mt-1 flex-shrink-0 rounded-md overflow-hidden
            bg-black/20
            border-2 border-transparent hover:border-red-600
            hover:scale-110 hover:shadow-[0_0_15px_rgba(255,0,0,0.6)]
            transform transition duration-300 ease-out cursor-pointer
          "
        >
          <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition"></div>
          <span className="absolute bottom-2 left-2 text-white font-bold text-sm drop-shadow">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  </div>
);


const Recruiter = () => {
  const topPicks = [
    { title: "Work Permit", img: workPermitImg },
    { title: "Experience", img: experienceImg },
    { title: "Skills", img: skillsImg },
    { title: "Certifications", img: certificationsImg },
    { title: "Recommendations", img: recommendationsImg },
    { title: "Projects", img: projectsImg },
    { title: "Contact Me", img: contactMeImg },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* --- Hero Section --- */}
      <div
  className="relative h-screen w-full bg-cover bg-center flex flex-col justify-end pb-24 px-12"
  style={{ backgroundImage: `url(${banner})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

  {/* Navbar */}
<nav className="absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-black/70 to-transparent">
  <div className="flex justify-between items-center px-10 py-4">
    {/* Brand name */}
    <h1 className="relative text-red-600 font-netflix text-4xl md:text-5xl font-bold">
  {"SHRUTI DEBNATH".split(" ").map((char, i) => (
    <span
      key={i}
      style={{
        display: "inline-block",
        transform: `rotate(${i - 6}deg) translateY(${Math.abs(i - 6) * 0.5}px)`,
      }}
    >
      {char}
    </span>
  ))}
</h1>

    {/* Links + profile */}
    <div className="flex items-center gap-8 text-white font-medium">
      <a href="#home" className="hover:text-gray-300">
        Home
      </a>
      <a href="#skills" className="hover:text-gray-300">
        Skills
      </a>
      <a href="#projects" className="hover:text-gray-300">
        Projects
      </a>
      <a href="#hire" className="hover:text-gray-300">
        Hire Me
      </a>
      <img
        src={devPic}
        alt="profile"
        className="w-8 h-8 rounded-full object-cover border-2 border-white/30"
      />
    </div>
  </div>
</nav>

  {/* Text + Buttons pinned at bottom */}
  <div className="relative z-10 max-w-2xl">
    <h1 className="text-4xl font-extrabold mb-4">
      Shruti – Senior Year Student
    </h1>
    <p className="text-lg mb-6">
      Passionate Computer Science undergraduate combining strong programming skills with experience in full-stack development, data structures, and game design. Adept in React, Flask, Python, C#, and Unity, with a focus on building clean, user-friendly solutions. I enjoy turning ideas into working software from polished web apps to engaging games. I’m always eager to learn new tools and improve my craft.
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
        className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded font-semibold hover:bg-blue-500 transition"
      >
        <FaLinkedin className="text-sm" /> LinkedIn
      </button>
    </div>
  </div>
</div>

      {/* --- Carousel Rows --- */}
      <div className="relative z-10 bg-black pt-10">
  <CarouselRow title="Today's Top Picks for Recruiter" items={topPicks} />
</div>
      {/* Example of more rows: */}
      {/* <CarouselRow title="Continue Watching" items={topPicks} /> */}
    </div>
  );
};

export default Recruiter;
