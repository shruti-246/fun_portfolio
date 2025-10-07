import React from "react";
import StalkerNavbar from "../../components/StalkerNavbar";
import { themes } from "../../theme";
import { interests } from "../../data/interests";

export default function InterestBucketList() {
  const t = themes.stalker;

  return (
    <div className={`${t.bg} min-h-screen text-white`}>
      <StalkerNavbar />

      {/* Header */}
      <div className="text-center pt-24 pb-8 px-6">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: t.accent }}>
          Interests & Bucket List ✨
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Dreams, goals, and things I’m passionate about exploring throughout my life.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 px-8 pb-16 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {interests.map((item, idx) => (
          <div
            key={idx}
            className="
              bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl
              transition transform hover:scale-[1.03] border-2 border-transparent hover:border-yellow-400
            "
          >
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm opacity-90">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
