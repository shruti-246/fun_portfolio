import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import RecruiterNavbar from "../../components/RecruiterNavbar";

const contacts = [
  {
    icon: <FaEnvelope size={32} />,
    label: "Email",
    value: "debnathshruti477@gmail.com",
    link: "mailto:debnathshruti477@gmail.com",
  },
  {
    icon: <FaPhone size={32} />,
    label: "Phone",
    value: "+1 986-600-8506",
    link: "tel:+19866008506",
  },
  {
    icon: <FaLinkedin size={32} />,
    label: "LinkedIn",
    value: "linkedin.com/in/shrutidebnath224",
    link: "https://www.linkedin.com/in/shrutidebnath224/",
  },
  {
    icon: <FaGithub size={32} />,
    label: "GitHub",
    value: "github.com/shruti-246",
    link: "https://github.com/shruti-246",
  },
];

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">
      <RecruiterNavbar />

      <div className="pt-20 px-6 md:px-12 pb-12">
        <h1 className="text-center text-4xl font-bold mb-6">
          CONTACT <span className="text-emerald-500">ME</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.link}
              target={contact.link.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="
                bg-zinc-900 rounded-md p-6 shadow-md border border-transparent
                flex flex-col items-center text-center group
                transition duration-300
                hover:scale-[1.05]
                hover:border-emerald-500
                hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]
              "
            >
              <div className="mb-3 text-emerald-500 group-hover:scale-110 transition">
                {contact.icon}
              </div>
              <h3 className="font-bold text-lg mb-1">{contact.label}</h3>
              <p className="text-sm text-gray-400">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
