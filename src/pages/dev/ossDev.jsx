import React from "react";
import DeveloperNavbar from "../../components/DeveloperNavbar";
import { themes } from "../../theme";
import { devOss } from "../../data/oss_dev";   

export default function OssDev() {
  const t = themes.developer;

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: t.bg }}>
      <DeveloperNavbar />

      <div className="pt-20 px-6 md:px-12">
        <h1 className="text-center text-4xl font-bold mb-8" style={{ color: t.accent }}>
          Open Source <span className="text-white">Work</span>
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {devOss.map((r, idx) => (
            <div
              key={idx}
              className="rounded-md p-5 shadow-md transform transition duration-300 ease-out cursor-pointer"
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
              <h2 className="text-lg font-bold mb-2" style={{ color: t.accent }}>
                {r.title}
              </h2>
              <p className="text-sm text-gray-300 mb-4">{r.desc}</p>
              <a
                href={r.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-3 py-1 text-sm rounded transition"
                style={{
                  backgroundColor: t.accent,
                  color: t.bg,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = t.hover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = t.accent)}
              >
                View Repo
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/shruti-246"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded font-semibold"
            style={{ border: `2px solid ${t.accent}`, color: t.accent }}
          >
            See All Repos →
          </a>
        </div>
      </div>
    </div>
  );
}
