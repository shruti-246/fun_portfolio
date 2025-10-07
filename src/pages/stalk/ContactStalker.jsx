import React from "react";
import StalkerNavbar from "../../components/StalkerNavbar";
import { themes } from "../../theme";
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function ContactStalker() {
  const t = themes.stalker;

  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "debnathshruti477@gmail.com", 
      link: "mailto:debnathshruti477@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/shrutidebnath224",
      link: "https://www.linkedin.com/in/shrutidebnath224/",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      value: "@shrutiisbrutal",
      link: "https://www.instagram.com/shrutiisbrutal/", 
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/shruti-246",
      link: "https://github.com/shruti-246",
    },
  ];

  return (
    <div className={`${t.bg} min-h-screen text-white`}>
      <StalkerNavbar />

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <h1
          className="text-4xl font-extrabold mb-6 text-center"
          style={{ color: t.accent }}
        >
          Contact Me
        </h1>
        <p className="text-center text-white/80 max-w-xl mx-auto mb-12">
          If you want to reach out — whether it’s for collaboration, a chat, or
          just to say hi — here are the ways you can connect with me.
        </p>

        {/* Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {contacts.map((c, idx) => (
            <a
              key={idx}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-lg shadow-md transform transition duration-300 bg-zinc-800 hover:scale-[1.05] hover:shadow-xl"
              style={{ border: `1px solid ${t.accent}55` }}
            >
              <div
                className="text-3xl p-3 rounded-full"
                style={{ backgroundColor: t.accent, color: t.bg }}
              >
                {c.icon}
              </div>
              <div>
                <h2 className="font-bold text-lg" style={{ color: t.accent }}>
                  {c.label}
                </h2>
                <p className="text-white/80 text-sm">{c.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
