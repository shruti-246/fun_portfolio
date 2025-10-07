import React from "react";
import RecruiterNavbar from "../../components/RecruiterNavbar";
import { workPermit } from "../../data/workP_data";

export default function WorkPermit() {
  return (
    <div className="bg-black text-white min-h-screen overflow-y-auto">
      <div className="sticky top-0 z-50">
        <RecruiterNavbar />
      </div>

      <div className="pt-20 px-6 md:px-12">
        <h1 className="text-center text-4xl font-bold mb-8">
          <span className="text-emerald-500">Work Authorization</span>
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {workPermit.map((item, idx) => (
            <div
              key={idx}
              className="
                bg-zinc-900 rounded-md p-6 shadow
                border border-transparent
                hover:border-emerald-500
                hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]
                hover:scale-[1.02]
                transition
              "
            >
              <h2 className="text-xl font-bold text-emerald-500 mb-2">
                {item.country}
              </h2>
              <p className="text-gray-300 mb-3 text-sm">{item.status}</p>

              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                {item.details.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
