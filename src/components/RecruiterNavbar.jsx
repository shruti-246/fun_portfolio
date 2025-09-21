import React from "react";
import devPic from "../assets/dev.jpg"; // adjust path if needed
import { Link } from "react-router-dom";

export default function RecruiterNavbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-black/70 to-transparent">
      <div className="flex justify-between items-center px-10 py-4">
        {/* Brand */}
        <h1 className="relative text-teal-500 font-netflix text-4xl md:text-5xl font-bold">
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

        {/* Links */}
        <div className="flex items-center gap-8 text-white font-medium">
          <Link to="/recruiter" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/skills" className="hover:text-gray-300">
            Skills
          </Link>
          <Link to="/projects" className="hover:text-gray-300">
            Projects
          </Link>
          <Link to="/certifications" className="hover:text-gray-300">
            Certifications
          </Link>
          <Link to="/experience" className="hover:text-gray-300">
            Experience
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Hire Me
          </Link>
          <img
            src={devPic}
            alt="profile"
            className="w-8 h-8 rounded-full object-cover border-2 border-white/30"
          />
        </div>
      </div>
    </nav>
  );
}
