// src/components/StalkerNavbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { themes } from "../theme";
import stalkerPic from "../assets/stalker.jpg";

export default function StalkerNavbar() {
  const t = themes.stalker;

  const linkBase =
    "transition-colors duration-300 hover:text-yellow-300 font-medium";
  const activeStyle = "text-yellow-400 font-semibold";

  return (
    <nav
      className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50"
      style={{ backgroundColor: `${t.bg}CC` }} // CC = 80% opacity
    >
      {/* Left side - Name */}
      <h1
        className="text-2xl font-extrabold tracking-wider"
        style={{ color: t.accent }}
      >
        SHRUTI DEBNATH
      </h1>

      {/* Right side - Links & Avatar */}
      <div className="flex items-center gap-8">
        <NavLink
          to="/stalker"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/stalker/hobbies"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : ""}`
          }
        >
          Hobbies
        </NavLink>

        <NavLink
          to="/stalker/contact"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : ""}`
          }
        >
          Contact
        </NavLink>

        <img
          src={stalkerPic}
          alt="profile"
          className="w-8 h-8 rounded-full object-cover ring-2"
          style={{ borderColor: t.hover }}
        />
      </div>
    </nav>
  );
}
