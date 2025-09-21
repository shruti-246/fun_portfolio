import React, { useState } from "react";
import RecruiterNavbar from "../components/RecruiterNavbar";
import { experiences } from "../data/exp_data";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen">
      <RecruiterNavbar />

      <div className="pt-20 px-6 md:px-12">
        <h1 className="text-center text-4xl font-bold mb-8">
          <span className="text-emerald-500">EXPERIENCES</span>
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="
                bg-zinc-900 p-6 rounded-md
                border border-transparent
                transition duration-300
                hover:border-emerald-500
                hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]
                hover:scale-[1.02]
              "
            >
              <h2 className="text-xl font-semibold text-emerald-500">
                {exp.role}
              </h2>
              <p className="text-gray-300 text-sm">
                {exp.company} • {exp.duration}
              </p>

              <p className="mt-3 text-gray-400 text-sm">{exp.summary}</p>

              {/* Expand / Collapse button */}
              <button
                className="
                  mt-4 px-3 py-1 text-xs
                  bg-emerald-600 hover:bg-emerald-500
                  rounded transition
                "
                onClick={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
              >
                {openIndex === idx ? "Hide Details" : "View Details"}
              </button>

              {/* Expanded details */}
              {openIndex === idx && (
                <ul className="mt-3 list-disc list-inside text-gray-300 text-sm space-y-1">
                  {exp.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
