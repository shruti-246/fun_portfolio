// src/pages/Hobbies.jsx
import React from "react";
import { Link } from "react-router-dom";
import StalkerNavbar from "../../components/StalkerNavbar";
import { themes } from "../../theme";

import ClickPicImg from "../../assets/stalk/Clicking_pic.jpg";
import DrawImg from "../../assets/stalk/Drawing_Stalk.jpg";
import MusicImg from "../../assets/stalk/Listening_Music.jpg";

export default function Hobbies() {
  const t = themes.stalker;

  const hobbies = [
    {
      title: "Listening to Music",
      desc: "Songs are like way to my heart, it brings me peace, changes my mood and I believe that's for everybody.",
      img: MusicImg,
      link: "/stalker/singing" 
    },
    {
      title: "Drawing & Crafting",
      desc: "I love sketching and exploring new art styles whenever inspiration hits.",
      img: DrawImg,
      link: "/stalker/art-craft" 
    },
    {
      title: "Clicking Pictures",
      desc: "Photography helps me capture moments and see the world from different perspectives.",
      img: ClickPicImg,
      link: "/stalker/reading"
    },
  ];

  return (
    <div className={`${t.bg} min-h-screen text-white`}>
      <StalkerNavbar />

      {/* Header */}
      <div className="text-center pt-24 pb-10 px-6">
        <h1
          className="text-4xl font-extrabold mb-4"
          style={{ color: t.accent }}
        >
          My Hobbies
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Things that make me happy and keep life creative and exciting 
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 px-8 pb-16 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {hobbies.map((hobby, idx) => {
          const Card = (
            <div
              className="
                bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl 
                transition transform hover:scale-[1.03] border-2 border-transparent hover:border-yellow-400
              "
            >
              <img src={hobby.img} alt={hobby.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{hobby.title}</h2>
                <p className="text-sm opacity-90">{hobby.desc}</p>
              </div>
            </div>
          );

          // If hobby.link exists → wrap with Link
          return hobby.link ? (
            <Link key={idx} to={hobby.link}>
              {Card}
            </Link>
          ) : (
            <div key={idx}>{Card}</div>
          );
        })}
      </div>
    </div>
  );
}
