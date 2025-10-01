// src/pages/InterestsResearcher.jsx
import React from "react";
import ResearcherNavbar from "../components/ResearcherNavbar";
import { themes } from "../theme";
import { researchInterests } from "../data/interests_res";

export default function InterestsResearcher() {
  const t = themes.researcher;

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: t.bg }}>
      <ResearcherNavbar />

      <div className="pt-20 px-6 md:px-12">
        <h1 className="text-center text-4xl font-bold mb-8" style={{ color: t.accent }}>
          Research <span className="text-white">Interests</span>
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {researchInterests.map((interest, idx) => (
            <div
              key={idx}
              className="rounded-md p-5 shadow-md transform transition duration-300 ease-out cursor-pointer"
              style={{
                backgroundColor: "#3A2550",
                border: `1px solid ${t.accent}33`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.borderColor = t.accent;
                e.currentTarget.style.boxShadow = `0 0 18px ${t.hover}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = `${t.accent}33`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h2 className="text-lg font-bold mb-2" style={{ color: t.accent }}>
                {interest.title}
              </h2>
              <p className="text-sm text-gray-300">{interest.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
