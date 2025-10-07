import React from "react";
import StalkerNavbar from "../../components/StalkerNavbar";
import { themes } from "../../theme";
import { randomFacts } from "../../data/randomFacts";

export default function RandomFacts() {
  const t = themes.stalker;

  return (
    <div className={`${t.bg} min-h-screen text-white`}>
      <StalkerNavbar />

      {/* Header */}
      <div className="text-center pt-24 pb-8 px-6">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: t.accent }}>
          Random Facts About Me 💡
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Just some quirky, fun, and unexpected facts you might enjoy knowing.
        </p>
      </div>

      {/* Facts List */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        {randomFacts.map((item, idx) => (
          <div
            key={idx}
            className="
              bg-zinc-800 rounded-lg p-4 mb-4 shadow-md hover:shadow-xl
              transition transform hover:scale-[1.02] border-2 border-transparent hover:border-yellow-400
            "
          >
            <p className="text-base">{item.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
