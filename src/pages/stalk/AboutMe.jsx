import React from "react";
import StalkerNavbar from "../../components/StalkerNavbar"; 
import { themes } from "../../theme";                      
import { aboutMe } from "../../data/aboutMe";                


export default function AboutMe() {
  const t = themes.stalker;

  return (
    <div className={`${t.bg} min-h-screen text-white`}>
      <StalkerNavbar />

      {/* Header */}
      <div className="text-center pt-24 pb-8 px-6">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: t.accent }}>
          About Me 🌟
        </h1>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-6 pb-8 text-center">
        <p className="text-lg leading-relaxed opacity-90">{aboutMe.intro}</p>
      </div>

      {/* Highlights */}
      <div className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: t.accent }}>
          Quick Highlights
        </h2>
        <ul className="space-y-3">
          {aboutMe.highlights.map((item, idx) => (
            <li
              key={idx}
              className="
                bg-zinc-800 rounded-lg p-3 shadow-md hover:shadow-xl
                transition transform hover:scale-[1.02] border-2 border-transparent hover:border-yellow-400
              "
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Fun Quote */}
      <div className="max-w-2xl mx-auto px-6 pb-16 text-center">
        <p className="italic text-lg opacity-80" style={{ color: t.hover }}>
          {aboutMe.funQuote}
        </p>
      </div>
    </div>
  );
}
