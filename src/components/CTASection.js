"use client";

import { useState } from "react";
import Image from "next/image";
import TourModal from "./TourModal";

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative bg-white overflow-visible sm:mt-20 ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home/bg1.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[200px] sm:min-h-[220px] md:min-h-[250px] lg:min-h-[280px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Side - Text Content */}
        <div className="text-white py-4 sm:py-5 lg:py-6 animate-slide-in-left">
          <h2
            className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold mb-2 sm:mb-3 md:mb-4 leading-snug sm:leading-tight italic max-w-md sm:max-w-lg md:max-w-xl"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            SCHEDULE A VISIT TODAY AND EXPERIENCE THE DIFFERENCE OF PERSONALIZED SENIOR CARE.
          </h2>

          {/* Yellow underline */}
          <div className="w-10 sm:w-12 md:w-16 h-1 bg-[#887904] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 hover:w-16 sm:hover:w-20"></div>

          {/* Book a Tour Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black pl-4 sm:pl-5 md:pl-6 pr-2 py-1.5 sm:py-2 rounded-full font-semibold hover:bg-[#887904] hover:text-white hover:scale-110 hover:shadow-2xl active:scale-95 inline-flex items-center gap-2 transition-all duration-300 text-xs sm:text-sm uppercase tracking-wide shadow-xl hover:shadow-white/50 group"
          >
            Book a Tour
            <div className="bg-black rounded-full p-2 flex items-center justify-center transition-all duration-300 group-hover:bg-white shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 group-hover:stroke-black transition-all duration-300"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Right Side - Caregiver Image - Hidden on mobile */}
        <div className="hidden lg:flex relative h-[350px] items-end justify-end animate-slide-in-right -mt-32 -mb-15 z-50">
          <div className="relative w-full h-full  transition-transform duration-500">
            <Image
              src="/home/home1.png"
              alt="Caregiver with senior"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      <TourModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
