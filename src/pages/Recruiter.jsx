import React from "react";
import banner from "../assets/banner.jpg";
import { FaPlay } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import workPermitImg from "../assets/picks/work_permit.jpg";
import experienceImg from "../assets/picks/experience.jpg";
import skillsImg from "../assets/picks/skills.jpg";
import certificationsImg from "../assets/picks/certification.jpg";
import recommendationsImg from "../assets/picks/recommendations.jpg";
import projectsImg from "../assets/picks/projects.jpg";
import contactMeImg from "../assets/picks/contact_me.jpg";

const Recruiter = () => {
  const picks = [
  { title: "Work Permit", img: workPermitImg },
  { title: "Experience", img: experienceImg },
  { title: "Skills", img: skillsImg },
  { title: "Certifications", img: certificationsImg },
  { title: "Recommendations", img: recommendationsImg },
  { title: "Projects", img: projectsImg },
  { title: "Contact Me", img: contactMeImg },
  ];
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] flex flex-col justify-center px-12 text-white"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Shruti – Senior Year Student</h1>
          <p className="max-w-2xl text-lg mb-6">
            Dynamic and results-driven Software Engineer with X years of experience in
            full-stack development, database systems, and building real-world impactful projects.
          </p>

          {/* Netflix-style Buttons */}
          <div className="flex gap-10 mt-6">
            <button
                onClick={() => window.open("/resume.pdf", "_blank")}
                className="flex items-center gap-2 bg-white text-black px-10 py-4 rounded-md font-semibold hover:bg-gray-300 transition text-base"
                style={{ minWidth: "90px", minHeight: "30px" }}
            >
            <FaPlay className="text-black text-lg" /> Resume
            </button>

            <button
                onClick={() =>
                window.open("https://www.linkedin.com/in/yourprofile", "_blank")
                }
                className="flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-md font-semibold hover:bg-blue-500 transition text-base"
                style={{ minWidth: "90px", minHeight: "30px" }}
            >
            <FaLinkedin className="text-lg" /> LinkedIn
            </button>
          </div>
        </div>
      </div>

      {/* Top Picks Section */}
<div className="p-6">
  <h2 className="text-2xl font-bold mb-4">Today's Top Picks for Recruiter</h2>

  <div className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide pb-4">
    {picks.map((pick, idx) => (
      <div
  key={idx}
  className="relative min-w-[250px] h-[150px] flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300 mr-4 last:mr-0"
>
  <img
    src={pick.img}
    alt={pick.title}
    className="block w-full h-full object-cover"
  />

  <div
    style={{
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <span className="text-lg font-bold text-white">
  {pick.title}
</span>
  </div>
</div>
    ))}
  </div>
</div>
    </div>
  );
};

export default Recruiter;
