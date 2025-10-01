import React from "react";
import ResearcherNavbar from "../components/ResearcherNavbar";
import { themes } from "../theme";
import { literaturePapers } from "../data/literature_res"; 

export default function LiteratureResearcher() {
  const t = themes.researcher;

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: t.bg }}>
      <ResearcherNavbar />

      <div className="text-center max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold mb-8" style={{ color: t.accent }}>
          Literature & Reading List
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {literaturePapers.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-5 shadow-md transform transition duration-300 ease-out cursor-pointer flex flex-col"
              style={{
                backgroundColor: "#3A2550",
                border: `1px solid ${t.accent}33`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.borderColor = t.accent;
                e.currentTarget.style.boxShadow = `0 0 18px ${t.hover}55`;
                const span = e.currentTarget.querySelector("span");
                if (span) span.style.color = t.hover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = `${t.accent}33`;
                e.currentTarget.style.boxShadow = "none";
                const span = e.currentTarget.querySelector("span");
                if (span) span.style.color = t.accent;
              }}
            >
              <h2 className="text-lg font-bold mb-2" style={{ color: t.accent }}>
                {p.title}
              </h2>
              <p className="text-sm text-gray-300 flex-grow">{p.desc}</p>
              <span
                className="mt-4 text-sm font-semibold transition-colors duration-300"
                style={{ color: t.accent }}
              >
                Read Paper →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
