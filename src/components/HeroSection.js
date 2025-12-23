"use client";

import { useState } from "react";
import Image from "next/image";
import TourModal from "./TourModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] mt-0">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/home/hero.png"
          alt="Happy senior couple"
          fill
          className="object-cover w-full h-full"
          style={{ objectPosition: "center center" }}
          quality={100}
          priority
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-[5] max-w-7xl mx-auto px-6 sm:px-8 h-full flex flex-col items-center justify-center text-center pt-20 sm:pt-24 md:pt-28 lg:pt-0 xl:pt-0">
        {/* Main Heading */}
        <h1
          className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 sm:mb-5 md:mb-6 max-w-4xl leading-tight animate-fade-in"
          style={{
            fontFamily: "var(--font-recoleta)",
            animationDelay: "0.4s",
            opacity: 0,
          }}
        >
          A Safe, Loving Home for Your Loved One
        </h1>

        {/* Description Text */}
        <p className="text-sm sm:text-base md:text-base lg:text-base text-white max-w-2xl md:max-w-3xl mb-6 sm:mb-8 leading-relaxed animate-fade-in"
          style={{
            animationDelay: "0.6s",
            opacity: 0,
          }}
        >
          Located at 2033 Sombrero Way SE, Atlanta, GA 30316, we provide
          professional, compassionate personal care in a peaceful residential
          setting where every resident is truly treated like family.
        </p>

        {/* Book a Tour Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#1a1a1a] text-white pl-5 sm:pl-6 pr-1.5 py-2 sm:py-2.5 rounded-full font-medium hover:bg-[#887904] hover:scale-105 hover:shadow-xl active:scale-95 inline-flex items-center gap-2 sm:gap-3 transition-all duration-300 text-xs sm:text-sm shadow-lg hover:shadow-[#887904]/50 animate-scale-in group"
          style={{
            animationDelay: "0.8s",
            opacity: 0,
          }}
        >
          BOOK A TOUR
          <div className="bg-white rounded-full p-2 sm:p-2.5 flex items-center justify-center transition-all duration-300 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:w-4 sm:h-4"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>

      <TourModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
