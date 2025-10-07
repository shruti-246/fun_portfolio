import React from "react";
import StalkerNavbar from "../../components/StalkerNavbar";
import { themes } from "../../theme";

// 🎵 You can replace this later with your own songs
const songs = [
  {
    title: "Perfect - Ed Sheeran",
    desc: "One of my favorite romantic songs to sing.",
  },
  {
    title: "Someone Like You - Adele",
    desc: "Beautiful and emotional ballad.",
  },
  {
    title: "Let It Go - Idina Menzel",
    desc: "Powerful and freeing Disney song.",
  },
];

export default function Singing() {
  const t = themes.stalker;

  return (
    <div className={`${t.bg} min-h-screen text-white`}>
      <StalkerNavbar />

      <div className="pt-24 pb-10 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: t.accent }}>
          Favourite Playlist & Bands
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Music has always been my safe space — a way to escape, dream, and feel deeply. Whether it’s soft melodies on a quiet night or upbeat tracks that make me dance, music fills my world with color.
        </p>
      </div>

      {/* Songs list */}
      <div className="max-w-3xl mx-auto px-6 pb-16 space-y-4">
        {songs.map((song, i) => (
          <div
            key={i}
            className="bg-zinc-800 rounded-lg p-4 shadow-md hover:shadow-xl transition transform hover:scale-[1.02] border-2 border-transparent hover:border-yellow-400"
          >
            <h2 className="text-xl font-semibold mb-2">{song.title}</h2>
            <p className="opacity-80 text-sm">{song.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
