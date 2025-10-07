import React, { useState } from "react";
import RecruiterNavbar from "../../components/RecruiterNavbar";
import { education } from "../../data/edu";
import { themes } from "../../theme";

export default function Education() {
  const theme = themes.recruiter; // or pass it as prop

  return (
    <div className={`${theme.bg} ${theme.text} min-h-screen overflow-y-auto`}>
      <div className="sticky top-0 z-50">
        <RecruiterNavbar />
      </div>

      <div className="pt-20 px-6 md:px-12">
        <h1 className="text-center text-4xl font-bold mb-8">
          <span className={theme.accent}>EDUCATION</span> and{" "}
          <span className={theme.accent}>CERTIFICATIONS</span>
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {education.map((item, idx) => (
            <EducationCard key={idx} item={item} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  );
}

function EducationCard({ item, theme }) {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <div className="bg-zinc-900 rounded-md p-6 shadow transition duration-300 hover:scale-[1.03] hover:border-emerald-500
    hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] border border-transparent
    ">
      <h2 className={`text-xl font-bold mb-2 ${theme.accent}`}>{item.title}</h2>

      {item.degree && <p className="text-gray-300 text-sm mb-1">{item.degree}</p>}
      {item.location && <p className="text-gray-400 text-xs mb-1">{item.location}</p>}
      {item.period && <p className="text-gray-400 text-xs mb-4">{item.period}</p>}
      {item.gpa && <p className="text-gray-300 text-sm mb-4">{item.gpa}</p>}

      {item.courses && (
        <div className="mt-2">
          <button
            onClick={() => setShowCourses((prev) => !prev)}
            className={`text-xs ${theme.button} px-3 py-1 rounded transition`}
          >
            {showCourses ? "Hide Courses" : "Show Relevant Courses"}
          </button>

          {showCourses && (
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1 mt-3">
              {item.courses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}