// src/pages/ProjDev.jsx
import React from "react";
import DeveloperNavbar from "../../components/DeveloperNavbar";
import { themes } from "../../theme";
import { devProjects } from "../../data/projects_dev"; 

export default function ProjDev() {
  const t = themes.developer;

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: t.bg }}>
      <DeveloperNavbar />

      <div className="pt-20 px-6 md:px-12">
        <h1
          className="text-center text-4xl font-bold mb-8"
          style={{ color: t.accent }}
        >
          Developer <span className="text-white">Projects</span>
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {devProjects.map((p, i) => (
            <div
              key={i}
              className="rounded-md overflow-hidden shadow-md flex flex-col transform transition duration-300 ease-out cursor-pointer"
              style={{
                backgroundColor: "#3A2550",
                border: `1px solid ${t.accent}33`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.borderColor = t.accent;
                e.currentTarget.style.boxShadow = `0 0 18px ${t.hover}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = `${t.accent}33`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />

              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-xl font-bold mb-2" style={{ color: t.accent }}>
                  {p.title}
                </h2>
                <p className="text-gray-300 mb-4 text-sm flex-grow">{p.description}</p>

                <div
                  className="flex gap-2 text-xs flex-wrap mb-4"
                  style={{ color: t.hover }}
                >
                  {p.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded"
                      style={{ backgroundColor: "#2D1B3D" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-xs rounded transition"
                      style={{ backgroundColor: t.accent, color: t.bg }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = t.hover)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = t.accent)
                      }
                    >
                      Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-xs rounded"
                      style={{
                        backgroundColor: "#2D1B3D",
                        border: `1px solid ${t.accent}`,
                        color: t.accent,
                      }}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
