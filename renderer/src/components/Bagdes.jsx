import React from "react";

export default function ChallengeBadgesBar({ diyCount = 5, completedDIYs = [] }) {
  return (
    <div className="flex gap-4 justify-center flex-wrap my-8">
      {[...Array(diyCount)].map((_, idx) => {
        const isCompleted = completedDIYs.includes(idx + 1);
        return (
          <div
            key={idx}
            title={`DIY ${idx + 1}`}
            className={`relative w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 cursor-pointer
              ${isCompleted
                ? 'bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 text-white animate-glow'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white'
              } shadow-lg`}
          >
            {/* Star Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isCompleted ? 'white' : 'gray'}
              className={`w-8 h-8 ${isCompleted ? 'drop-shadow-glow' : 'opacity-70'}`}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>

            {/* Badge Number */}
            <span className="absolute bottom-0 right-0 text-xs bg-black/60 text-white px-1 rounded-full leading-none">
              {idx + 1}
            </span>
          </div>
        );
      })}
    </div>
  );
}
