import dev from "../assets/dev.jpg";
import designer from "../assets/designer.jpg";
import student from "../assets/student.jpg";
import adventurer from "../assets/adventurer.jpg";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const profiles = [
    { name: "Recruiter", img: dev, bg: "bg-sky-500", route: "/recruiter"},
    { name: "Developer", img: designer, bg: "bg-pink-500", route: "/developer" },
    { name: "Researcher", img: student, bg: "bg-purple-400", route: "/researcher" },
    { name: "Stalker", img: adventurer, bg: "bg-yellow-400", route: "/stalker" },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-white w-full h-screen bg-black">
      <h2 className="text-3xl font-semibold mb-8">Who&apos;s Watching?</h2>

      {/* profile row */}
      <div
        className="flex justify-center items-center flex-wrap"
        style={{ gap: "0.5cm" }}
      >
        {profiles.map((p, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div
              className={`${p.bg} w-28 h-28 rounded-md flex items-center justify-center 
                          transition-all duration-300 cursor-pointer
                          hover:scale-105 hover:ring-2 hover:ring-white`}
              style={{
                width: "10rem", // ~128px
                height: "10rem",
              }}
              onClick={() => navigate(p.route)}
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-sm text-gray-300 hover:text-white">
              {p.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
