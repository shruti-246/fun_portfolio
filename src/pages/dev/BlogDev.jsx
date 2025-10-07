import React from "react";
import DeveloperNavbar from "../../components/DeveloperNavbar";
import { themes } from "../../theme";
import { devNotes } from "../../data/blog_dev"; 

export default function BlogDev() {
  const t = themes.developer;

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: t.bg }}>
      <DeveloperNavbar />

      <div className="text-center max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold mb-8" style={{ color: t.accent }}>
          Developer Blog / Notes
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devNotes.map((n, i) => (
            <a
              key={i}
              href={n.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-5 shadow-md transform transition
                         hover:scale-[1.05] hover:shadow-xl flex flex-col"
              style={{ backgroundColor: "#3A2550" }}
            >
              <h2 className="text-lg font-bold mb-2" style={{ color: t.accent }}>
                {n.title}
              </h2>
              <p className="text-sm text-gray-300 flex-grow">{n.desc}</p>
              <span className="mt-4 text-sm font-semibold" style={{ color: t.hover }}>
                Read More →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
