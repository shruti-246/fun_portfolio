import React from "react";
import RecruiterNavbar from "../../components/RecruiterNavbar";
import { projects } from "../../data/proj_data";

export default function Projects() {
  return (
    <div className="bg-black text-white min-h-screen overflow-y-auto">
      {/* Navbar stays fixed */}
      <div className="sticky top-0 z-50">
        <RecruiterNavbar />
      </div>

      {/* Content area */}
      <div className="pt-20 px-6 md:px-12">
        <h1 className="text-center text-4xl font-bold mb-8">
          MY <span className="text-emerald-500">Projects</span>
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="
                bg-zinc-900 rounded-md overflow-hidden shadow-md flex flex-col
                border border-transparent
                hover:border-emerald-500
                hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]
                hover:scale-[1.02]
                transition duration-300
              "
            >
              {/* Thumbnail */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />

              {/* Body */}
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-emerald-500 mb-2">
                  {p.title}
                </h2>
                <p className="text-gray-300 mb-4 text-sm flex-grow">
                  {p.description}
                </p>

                {/* Tech stack */}
                <div className="flex gap-2 text-xs text-emerald-400 flex-wrap mb-4">
                  {p.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-zinc-800 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-auto">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-3 py-1 text-xs rounded text-white
                        bg-emerald-600 hover:bg-emerald-500 transition
                      "
                    >
                      Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-3 py-1 text-xs rounded text-white
                        bg-gray-700 hover:bg-gray-600 transition
                      "
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
