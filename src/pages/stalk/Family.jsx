// src/pages/people/Family.jsx
import React from "react";
import StalkerNavbar from "../../components/StalkerNavbar";
import { themes } from "../../theme";
import { family } from "../../data/family_data";

export default function Family() {
  const t = themes.stalker;

  return (
    <div className={`${t.bg} min-h-screen text-white`}>
      <StalkerNavbar />

      {/* Header */}
      <div className="text-center pt-24 pb-8 px-6">
        <h1 className="text-4xl font-extrabold mb-3" style={{ color: t.accent }}>
          Family 💛
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          They’re my heart — my first teachers, biggest supporters, and constant
          source of love. Here are some of my favorite moments with them.
        </p>
      </div>

      {/* Photos Grid */}
      <div className="grid gap-6 px-8 pb-16 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {family.map((p, idx) => (
          <div
            key={idx}
            className="
              bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl 
              transition transform hover:scale-[1.03] border-2 border-transparent hover:border-yellow-400
            "
          >
            <img src={p.img} alt={p.title} className="w-full h-72 object-cover rounded-md" />
            <div className="p-4">
              <p className="text-sm opacity-90">{p.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
