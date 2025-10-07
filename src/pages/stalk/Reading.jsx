import React from "react";
import StalkerNavbar from "../../components/StalkerNavbar";
import { themes } from "../../theme";

const books = [
  {
    title: "Atomic Habits — James Clear",
    desc: "Life-changing book about building better habits and improving daily routines.",
  },
  {
    title: "The Psychology of Money — Morgan Housel",
    desc: "Helps understand how emotions influence financial decisions.",
  },
  {
    title: "Deep Work — Cal Newport",
    desc: "Teaches how to focus deeply and achieve meaningful work.",
  },
];

export default function Reading() {
  const t = themes.stalker;

  return (
    <div className={`${t.bg} min-h-screen text-white`}>
      <StalkerNavbar />

      <div className="pt-24 pb-10 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: t.accent }}>
          📖 My Reading List
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          I love exploring books that inspire, teach, and spark new ideas.
          Here's a small list of my favorite reads so far.
        </p>
      </div>

      {/* Books list */}
      <div className="max-w-3xl mx-auto px-6 pb-16 space-y-4">
        {books.map((book, i) => (
          <div
            key={i}
            className="bg-zinc-800 rounded-lg p-4 shadow-md hover:shadow-xl transition transform hover:scale-[1.02] border-2 border-transparent hover:border-yellow-400"
          >
            <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
            <p className="opacity-80 text-sm">{book.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
