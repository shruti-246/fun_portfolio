// src/pages/PeopleILove.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StalkerNavbar from "../../components/StalkerNavbar";
import { themes } from "../../theme";
import placeholder from "../../assets/placeholder.jpg";
import FamCoverImg from "../../assets/stalk/FamCov.jpg";
import FriendsCoverImg from "../../assets/stalk/frnd_cover.jpg";

export default function PeopleILove() {
  const t = themes.stalker;
  const navigate = useNavigate();

  const [selectedPerson, setSelectedPerson] = useState(null);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");

  const birthYear = "2003"; 

  const people = [
    {
      name: "Family",
      desc: "My favorite people in the world — the ones who raised me, guided me, and made countless memories worth cherishing. A little glimpse into the love and laughter that built who I am.",
      img: FamCoverImg,
      path: "/stalker/people/family",
    },
    {
      name: "Friends",
      desc: "Amazing people who make life fun 🌸 From late-night talks to adventures, they mean a lot to me.",
      img: FriendsCoverImg,
      path: "/stalker/people/friends",
    },
  ];

  const handleOpen = (person) => {
    setSelectedPerson(person);
    setPasscode("");
    setError("");
  };

  const handleSubmit = () => {
    if (passcode === birthYear) {
      navigate(selectedPerson.path);
    } else {
      setError("❌ Incorrect passcode. Try again!");
    }
  };

  return (
    <div className={`${t.bg} min-h-screen text-white`}>
      <StalkerNavbar />

      <div className="text-center pt-24 pb-10 px-6">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: t.accent }}>
          People I Love 💛
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          These are the people who mean the most to me. Click a card to see their pictures.
        </p>

        {/* Cards */}
        <div className="grid gap-8 px-8 pb-16 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {people.map((p, idx) => (
            <div
              key={idx}
              onClick={() => handleOpen(p)}
              className="
                bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl 
                transition transform hover:scale-[1.03] border-2 border-transparent hover:border-yellow-400 cursor-pointer
              "
            >
              <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
                <p className="text-sm opacity-90">{p.desc}</p>
                <p className="text-xs mt-2 opacity-60 italic">(Click to view photos)</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Passcode Modal */}
      {selectedPerson && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-md shadow-xl">
            <h2 className="text-2xl font-bold mb-4" style={{ color: t.accent }}>
              {selectedPerson.name} — Access Photos
            </h2>
            <p className="mb-4 text-sm opacity-90">
              This section is protected. Please enter the passcode to continue.
            </p>
            <input
              type="password"
              placeholder="Enter passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full px-4 py-2 rounded bg-zinc-800 text-white mb-3 focus:outline-none focus:ring-2"
              style={{ borderColor: t.accent }}
            />
            {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedPerson(null)}
                className="px-4 py-2 rounded font-semibold bg-gray-600 hover:bg-gray-700 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded font-semibold transition"
                style={{ backgroundColor: t.accent, color: t.bg }}
              >
                Unlock
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
