// src/components/ProfileCard.jsx
export default function ProfileCard({ title, bgColor }) {
  return (
    <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform">
      <div
        className={`w-24 h-24 rounded-md flex items-center justify-center text-white text-2xl font-bold ${bgColor}`}
      >
        {title[0]}
      </div>
      <p className="mt-2 text-lg">{title}</p>
    </div>
  );
}
