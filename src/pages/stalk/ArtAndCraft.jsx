import React from "react";
import StalkerNavbar from "../../components/StalkerNavbar";
import { themes } from "../../theme";
import { artCraftData } from "../../data/art_craft_data";

export default function ArtAndCraft() {
  const t = themes.stalker;

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: t.bg }}>
      <StalkerNavbar />

      <div className="text-center max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold mb-4" style={{ color: t.accent }}>
          My Creative Corner ✨
        </h1>
        <p className="text-white/80 mb-10">
          A small collection of my <span style={{ color: t.accent }}>crafts</span> &{" "}
          <span style={{ color: t.accent }}>artworks</span> — where I relax and create.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artCraftData.map((item, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-md transform transition duration-300 ease-out cursor-pointer hover:scale-[1.05] hover:shadow-xl"
              style={{ backgroundColor: "#3A2B1F" }}
            >
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-1">
                <span className="text-xs uppercase tracking-wide mb-1" style={{ color: t.hover }}>
                  {item.category}
                </span>
                <h2 className="text-lg font-bold mb-2" style={{ color: t.accent }}>
                  {item.title}
                </h2>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
