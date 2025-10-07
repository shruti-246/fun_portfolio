import React, { useState } from "react";
import StalkerNavbar from "../../components/StalkerNavbar";
import { themes } from "../../theme";
import { goodMemories } from "../../data/goodMemories";

export default function GoodMemories() {
  const t = themes.stalker;
  const [selected, setSelected] = useState(null);

  return (
    <div className={`${t.bg} min-h-screen text-white`}>
      <StalkerNavbar />

      {/* Header */}
      <div className="text-center pt-24 pb-10 px-6">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: t.accent }}>
          Good Memories
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          A collection of moments that made me smile and stay grateful 🌟
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 px-8 pb-16 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {goodMemories.map((mem, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(mem)}
            className="
              bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl
              transition transform hover:scale-[1.03] border-2 border-transparent hover:border-yellow-400
              cursor-pointer
            "
          >
            <img src={mem.img} alt={mem.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{mem.title}</h2>
              <p className="text-sm opacity-90 line-clamp-3">{mem.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-zinc-900 rounded-lg p-6 max-w-lg w-[90%] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl hover:text-yellow-400"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
            <img src={selected.img} alt={selected.title} className="w-full rounded mb-4" />
            <h2 className="text-2xl font-bold mb-2" style={{ color: t.accent }}>
              {selected.title}
            </h2>
            <p className="text-sm opacity-90">{selected.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
