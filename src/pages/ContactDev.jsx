import React from "react";
import { themes } from "../theme";
import DeveloperNavbar from "../components/DeveloperNavbar"; 
import { Mail, Phone, Linkedin, Github } from "lucide-react"; 

export default function ContactDev() {
  const t = themes.developer;

  const contacts = [
    {
      icon: <Mail size={40} />,
      title: "Email",
      value: "debnathshruti477@gmail.com",
      link: "mailto:debnathshruti477@gmail.com",
    },
    {
      icon: <Phone size={40} />,
      title: "Phone",
      value: "+1 986-600-8506",
      link: "tel:+19866008506",
    },
    {
      icon: <Linkedin size={40} />,
      title: "LinkedIn",
      value: "linkedin.com/in/shrutidebnath224",
      link: "https://linkedin.com/in/shrutidebnath224",
    },
    {
      icon: <Github size={40} />,
      title: "GitHub",
      value: "github.com/shruti-246",
      link: "https://github.com/shruti-246",
    },
  ];

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: t.bg }}>
      <DeveloperNavbar /> 

      <div className="text-center pt-20">
        <h1 className="text-4xl font-extrabold mb-12" style={{ color: t.accent }}>
          Contact <span style={{ color: t.hover }}>Me</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-6 shadow-md flex flex-col items-center transition transform"
              style={{ backgroundColor: "#3A2550" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = `0 0 15px ${t.hover}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ color: t.accent }}>{c.icon}</div>
              <h2 className="mt-3 font-bold uppercase" style={{ color: t.accent }}>
                {c.title}
              </h2>
              <p className="text-sm text-gray-300 mt-2">{c.value}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
