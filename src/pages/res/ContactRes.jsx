import React from "react";
import ResearcherNavbar from "../../components/ResearcherNavbar";
import { themes } from "../../theme";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactResearcher() {
  const t = themes.researcher;

  const contacts = [
    {
      icon: <FaEnvelope size={24} />,
      title: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
    },
    {
      icon: <FaLinkedin size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile",
    },
    {
      icon: <FaGithub size={24} />,
      title: "GitHub",
      value: "github.com/shruti-246",
      link: "https://github.com/shruti-246",
    },
  ];

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: t.bg }}>
      <ResearcherNavbar />

      <div className="text-center max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold mb-8" style={{ color: t.accent }}>
          Contact Me
        </h1>
        <p className="text-white/80 mb-12">
          Reach out if you want to discuss research, collaborations, or new ideas!
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-md shadow-md flex flex-col items-center text-center transform transition duration-300 ease-out cursor-pointer"
              style={{
                backgroundColor: "#3A2550",
                border: `1px solid ${t.accent}33`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.borderColor = t.accent;
                e.currentTarget.style.boxShadow = `0 0 18px ${t.hover}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = `${t.accent}33`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="mb-3" style={{ color: t.accent }}>
                {c.icon}
              </div>
              <h2 className="font-semibold text-lg mb-1" style={{ color: t.accent }}>
                {c.title}
              </h2>
              <p className="text-sm text-gray-300">{c.value}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
