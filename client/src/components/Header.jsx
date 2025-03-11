import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="mb-10 relative">
      <h1 className="md:text-6xl text-4xl lg:text-8xl font-bold text-center relative z-50 text-white pt-10">
        Expense <Link to={"/"}>GQL</Link>
      </h1>

      {/* Dark, Slightly Bold Glowing Underline */}
      <div className="relative w-[200px] md:w-[260px] h-[3px] mx-auto mt-3 bg-transparent">
        {/* Dark Glow Effect */}
        <div className="absolute inset-0 h-full bg-gradient-to-r from-transparent via-blue-700 to-transparent opacity-40 blur-sm"></div>
        {/* Smooth Moving Light */}
        <div className="absolute inset-0 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70 animate-subtleGlow"></div>
      </div>

      <style>
        {`
          @keyframes subtleGlow {
            0% { transform: translateX(-60%); opacity: 0.2; }
            50% { transform: translateX(0%); opacity: 0.6; }
            100% { transform: translateX(60%); opacity: 0.2; }
          }
          .animate-subtleGlow {
            animation: subtleGlow 2.2s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
