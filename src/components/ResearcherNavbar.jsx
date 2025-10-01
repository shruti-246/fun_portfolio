import React from "react";
import { Link, NavLink } from "react-router-dom";
import devPic from "../assets/researcher.jpg"; 
import { themes } from "../theme";

export default function ResearcherNavbar() {
  const t = themes.researcher; 

  const linkBase =
    "text-white/90 hover:text-white transition font-medium";
  const active =
    "relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full";

  return (
    <nav
      className="absolute top-0 left-0 w-full z-20"
      style={{
        background:
          "linear-gradient(to bottom, rgba(45,27,61,0.85), rgba(45,27,61,0.0))",
      }}
    >
      <div className="flex justify-between items-center px-10 py-4">
        {/* Brand */}
        <Link
          to="/researcher"
          className="font-netflix text-4xl md:text-5xl font-bold tracking-widest"
          style={{ color: t.accent }}
        >
          SHRUTI&nbsp;<span style={{ color: t.hover }}>DEBNATH</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8">
          <NavLink to="/researcher" className={linkBase + " " + active}>
            Home
          </NavLink>
          <NavLink to="/res/interests" className={linkBase}>
            Interests
          </NavLink>
          <NavLink to="/res/literature" className={linkBase}>
            Literature
          </NavLink>
          <NavLink to="/res/tools" className={linkBase}>
            Tools
          </NavLink>
          <NavLink to="/res/contact" className={linkBase}>
            Contact
          </NavLink>

          <img
            src={devPic}
            alt="profile"
            className="w-8 h-8 rounded-full object-cover ring-2"
            style={{ ringColor: t.hover }}
          />
        </div>
      </div>
    </nav>
  );
}
