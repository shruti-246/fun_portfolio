// src/pages/Stalker.jsx
import React from "react";
import banner from "../assets/stalk/stalker_banner.jpg"; 
import { themes } from "../theme";
import StalkerNavbar from "../components/StalkerNavbar";
import { Link } from "react-router-dom";
import AboutMeImg from "../assets/stalk/about_me.jpg";
import HobbiesImg from "../assets/stalk/hobbies.jpg";
import BucketListImg from "../assets/stalk/BucketList.jpg";
import MemoriesImg from "../assets/stalk/goodMem.jpg";
import PeopleImg from "../assets/stalk/peopleIlove.jpg";
import FactsImg from "../assets/stalk/RandomFacts.jpg";
import MilestonesImg from "../assets/stalk/milestone.jpg";
import SecretsImg from "../assets/stalk/secrets.jpg";


const CarouselRow = ({ title, items }) => (
  <div className="px-8 pt-4 pb-6 mb-10">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>

    <div className="flex gap-5 overflow-x-auto scrollbar-hide py-4 pl-4">
      {items.map((item, idx) => (
        <Link
          key={idx}
          to={item.link}
          className="
            relative min-w-[220px] h-[140px] mt-1 flex-shrink-0 rounded-md overflow-hidden
            bg-black/20 border-2 border-transparent bg-zinc-900 shadow transition duration-300 hover:scale-[1.03]
            hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] ease-out cursor-pointer
          "
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition"></div>
          <span className="absolute bottom-2 left-2 text-white font-bold text-sm drop-shadow">
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  </div>
);

export default function Stalker() {
  const theme = themes.stalker; 
  // --- Top Picks ---
  const topPicks = [
    { title: "About Me", img: AboutMeImg, link: "/stalker/about" },
    { title: "Interests & Bucket List", img: BucketListImg, link: "/stalker/interests-bucket-list" },
    { title: "Hobbies", img: HobbiesImg, link: "/stalker/hobbies" },
    { title: "Good Memories", img: MemoriesImg, link: "/stalker/memories" },
    { title: "People I Love", img: PeopleImg, link: "/stalker/people" },
  ];

  // --- Additional Picks ---
  const additionalPicks = [
    { title: "Random Facts", img: FactsImg, link: "/stalker/facts" },
    { title: "Milestones", img: MilestonesImg, link: "/stalker/milestones" },
    { title: "Secrets", img: SecretsImg, link: "/stalker/secrets" },
  ];

  return (
    <div className={`${theme.bg} text-white min-h-screen`}>
      {/* --- Hero Section --- */}
      <div
        className="relative h-screen w-full bg-cover bg-center flex flex-col justify-end pb-24 px-12"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        {/* Navbar (absolute top) */}
        <StalkerNavbar />

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl font-extrabold mb-4">
            Shruti – The Goofy Side
          </h1>
          <p className="text-lg mb-6">
            A little window into my life, passions, and the things that make me who I am. Feel free to explore and get to know me better!
          </p>

          <button
            onClick={() =>
              document.getElementById("picks-section").scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-yellow-400 text-black px-5 py-2 rounded font-semibold hover:bg-yellow-300 transition"
          >
            See Picks ↓
          </button>
        </div>
      </div>

      {/* --- Picks Section --- */}
      <div id="picks-section" className="relative z-10 pt-10">
        <CarouselRow title="Top Picks" items={topPicks} />
        <CarouselRow title="Additional Picks" items={additionalPicks} />
      </div>
    </div>
  );
}
