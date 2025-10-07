import React from "react";
import StalkerNavbar from "../../components/StalkerNavbar";
import { themes } from "../../theme";
import { milestones } from "../../data/milestones";

export default function Milestones() {
  const t = themes.stalker;

  return (
    <div className={`${t.bg} min-h-screen text-white`}>
      <StalkerNavbar />

      {/* Header */}
      <div className="text-center pt-24 pb-10 px-6">
        <h1
          className="text-4xl font-extrabold mb-4"
          style={{ color: t.accent }}
        >
          My Milestones 🏆
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          A quick look at some key moments in my journey so far.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto px-6 pb-16">
        <div className="border-l-4 border-yellow-400/80 ml-4">
          {milestones.map((m, idx) => (
            <div key={idx} className="mb-8 ml-4">
              {/* Dot */}
              <div className="w-4 h-4 rounded-full bg-yellow-400 absolute -left-2.5 mt-2"></div>

              <div
                className="
                  bg-zinc-800 p-5 rounded-lg shadow-md
                  transition hover:shadow-xl hover:scale-[1.02]
                "
              >
                <span
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{ color: t.accent }}
                >
                  {m.year}
                </span>
                <h3 className="text-xl font-semibold mt-1">{m.title}</h3>
                <p className="text-sm opacity-80 mt-2">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
