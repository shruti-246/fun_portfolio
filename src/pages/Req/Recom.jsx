// src/pages/Recommendations.jsx
import React from "react";
import { recommendations } from "../../data/rec_data";
import RecruiterNavbar from "../../components/RecruiterNavbar";

export default function Recommendations() {
  const hasRecs = recommendations && recommendations.length > 0;

  return (
    <div className="bg-black text-white min-h-screen">
      <RecruiterNavbar />

      <div className="pt-28 px-6 md:px-12 pb-12">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Recommendations
        </h1>

        {!hasRecs ? (
          <div className="text-center text-gray-400 text-lg">
            🚧 This section is currently <span className="text-emerald-400">in progress</span>.
            <br />
            Check back soon for recommendations!
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((r, i) => (
              <div
                key={i}
                className="bg-zinc-900 rounded-md p-6 shadow-md hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition"
              >
                {r.avatar && (
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500 mb-4"
                  />
                )}

                <h2 className="text-xl font-semibold text-emerald-400">
                  {r.name}
                </h2>
                <p className="text-sm text-gray-400 mb-4">{r.title}</p>
                <p className="text-gray-300 text-sm mb-4">{r.text}</p>

                {r.linkedin && (
                  <a
                    href={r.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 text-sm hover:underline"
                  >
                    View LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


/** import React from "react";
import { recommendations } from "../data/rec_data";
import RecruiterNavbar from "../components/RecruiterNavbar";

export default function Recommendations() {
  return (
    <div className="bg-black text-white min-h-screen">
      <RecruiterNavbar />

      <div className="pt-28 px-6 md:px-12 pb-12">
        <h1 className="text-4xl font-bold mb-10 text-center">
          <span className="text-emerald-500">Recommendations</span>
        </h1>

        {recommendations.length === 0 ? (
          <p className="text-center text-gray-400">
            No recommendations yet. Check back soon!
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((r, i) => (
              <div
                key={i}
                className="
                  bg-zinc-900 rounded-md p-6 shadow-md
                  border border-transparent
                  hover:border-emerald-500
                  hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]
                  transition duration-300
                "
              >
                {/* Avatar }
                {r.avatar && (
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="
                      w-16 h-16 rounded-full object-cover mb-4
                      border-2 border-emerald-500
                    "
                  />
                )}

                {/* Name & title }
                <h2 className="text-xl font-semibold text-emerald-500">
                  {r.name}
                </h2>
                <p className="text-sm text-gray-400 mb-4">{r.title}</p>

                {/* Recommendation text }
                <p className="text-gray-300 text-sm mb-4">{r.text}</p>

                {/* Optional LinkedIn }
                {r.linkedin && (
                  <a
                    href={r.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-block mt-2 px-3 py-1 text-xs rounded
                      bg-emerald-600 hover:bg-emerald-500
                      text-white transition
                    "
                  >
                    View LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
**/