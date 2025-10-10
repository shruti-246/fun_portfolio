import React from "react";
import StalkerNavbar from "../../components/StalkerNavbar";
import { themes } from "../../theme";
import { randomFacts } from "../../data/randomFacts";

export default function RandomFacts() {
  const t = themes.stalker;

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: t.bg }}>
      <StalkerNavbar />

      {/* Header */}
      <div className="text-center pt-24 pb-8 px-6">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: t.accent }}>
          Random Moods of Mine
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Just some quirky, fun, and unexpected facts you might enjoy knowing.
        </p>
      </div>

      {/* Facts Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {randomFacts.map((item, idx) => (
          <div
            key={idx}
            className="bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl 
                       transition transform hover:scale-[1.03] border border-zinc-700"
          >
            {/* Funny image */}
            {item.img && (
              <img
                src={item.img}
                alt={`Random fact ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
            )}

            {/* Text */}
            <div className="p-4">
              <p className="text-base text-gray-200">{item.fact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

