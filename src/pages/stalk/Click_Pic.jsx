import React, { useState } from "react";
import StalkerNavbar from "../../components/StalkerNavbar";
import { themes } from "../../theme";
import { clickPicData } from "../../data/click_pic_data";

export default function Click_Pic() {
  const t = themes.stalker;
  const [selectedImage, setSelectedImage] = useState(null); // For modal control

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: t.bg }}>
      <StalkerNavbar />

      <div className="text-center max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold mb-4" style={{ color: t.accent }}>
          My Photography Corner ✨
        </h1>
        <p className="text-white/80 mb-10">
          A small collection of my <span style={{ color: t.accent }}>photography</span> &{" "}
          <span style={{ color: t.accent }}>nature</span> — where I relax and create.
        </p>

        {/* --- Image Grid --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clickPicData.map((item, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-md transform transition duration-300 ease-out cursor-pointer hover:scale-[1.05] hover:shadow-xl"
              style={{ backgroundColor: "#3A2B1F" }}
              onClick={() => setSelectedImage(item)} // open modal
            >
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-1">
                <span className="text-xs uppercase tracking-wide mb-1" style={{ color: t.hover }}>
                  {item.category}
                </span>
                <h2 className="text-lg font-bold mb-2" style={{ color: t.accent }}>
                  {item.title}
                </h2>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Modal (Lightbox) --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-[90%]">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-yellow-400"
            >
              ×
            </button>
            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold" style={{ color: t.accent }}>
                {selectedImage.title}
              </h2>
              <p className="text-gray-300 mt-2">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
