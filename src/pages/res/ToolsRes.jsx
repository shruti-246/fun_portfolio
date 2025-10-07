import React from "react";
import ResearcherNavbar from "../../components/ResearcherNavbar";
import { themes } from "../../theme";
import { researchTools } from "../../data/tools_res"; 

export default function ToolsResearcher() {
  const t = themes.researcher;

  return (
    <div className="text-white min-h-screen" style={{ backgroundColor: t.bg }}>
      <ResearcherNavbar />

      <div className="pt-20 px-8 md:px-16">
        <h1
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: t.accent }}
        >
          Research Tools & Environment
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {researchTools.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg shadow transform transition duration-300 ease-out cursor-pointer"
              style={{
                backgroundColor: "#2b1c3a",
                border: `1px solid ${t.accent}44`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.borderColor = t.accent;
                e.currentTarget.style.boxShadow = `0 0 18px ${t.hover}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = `${t.accent}44`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: t.accent }}
              >
                {cat.title}
              </h2>
              <ul className="space-y-2 text-white/80">
                {cat.items.map((tool, i) => (
                  <li key={i}>• {tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
