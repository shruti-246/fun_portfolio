// src/pages/people/Mom.jsx
import React from "react";
import StalkerNavbar from "../../components/StalkerNavbar";
import { themes } from "../../theme";

// --- Replace with your real photos ---
import placeholder from "../../assets/placeholder.jpg";

export default function Friends() {
  const t = themes.stalker;

  const photos = [
    { src: placeholder, caption: "Mom cooking my favorite meal ❤️" },
    { src: placeholder, caption: "Family trip — best memories ✨" },
    { src: placeholder, caption: "Always my biggest supporter 🌸" },
  ];

  return (
    <div className={`${t.bg} min-h-screen text-white`}>
      <StalkerNavbar />

      {/* Header */}
      <div className="text-center pt-24 pb-8 px-6">
        <h1 className="text-4xl font-extrabold mb-3" style={{ color: t.accent }}>
          Mom 💛
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          She’s the heart of my world — my first teacher, biggest supporter, and constant
          source of love. Here are some of my favorite moments with her.
        </p>
      </div>

      {/* Photos Grid */}
      <div className="grid gap-6 px-8 pb-16 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {photos.map((p, idx) => (
          <div
            key={idx}
            className="
              bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl 
              transition transform hover:scale-[1.03] border-2 border-transparent hover:border-yellow-400
            "
          >
            <img src={p.src} alt={p.caption} className="w-full h-64 object-cover" />
            <div className="p-4">
              <p className="text-sm opacity-90">{p.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
