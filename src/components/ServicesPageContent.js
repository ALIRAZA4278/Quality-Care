"use client";

import { useState } from "react";
import Image from "next/image";
import TourModal from "./TourModal";
import ScrollAnimation from "./ScrollAnimation";

export default function ServicesPageContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    {
      id: 1,
      image: "/home/services1.png",
      icon: "/home/services-icon1.png",
      title: "Personal Care Assistance",
      description:
        "Help with bathing, grooming, dressing, hygiene, mobility, and toileting — always with dignity and respect.",
    },
    {
      id: 2,
      image: "/home/services2.png",
      icon: "/home/services-icon2.png",
      title: "Medication Reminders",
      description:
        "Daily medication prompts to ensure residents stay consistent and safe.",
    },
    {
      id: 3,
      image: "/home/services3.png",
      icon: "/home/services-icon3.png",
      title: "Nutritious Home-Cooked Meals",
      description:
        "Freshly prepared meals and snacks tailored to dietary needs and personal preferences.",
    },
    {
      id: 4,
      image: "/home/services4.png",
      icon: "/home/services-icon4.png",
      title: "Activities & Companionship",
      description:
        "Light exercise, walks, games, conversations, music, TV time, puzzles, and personal engagement to promote emotional well-being.",
    },
    {
      id: 5,
      image: "/home/services5.png",
      icon: "/home/services-icon5.png",
      title: "Housekeeping & Laundry",
      description:
        "Daily tidying, weekly cleaning, and regular laundry services keep the home clean and comfortable.",
    },
    {
      id: 6,
      image: "/home/services6.png",
      icon: "/home/services-icon6.png",
      title: "Health & Wellness Monitoring",
      description:
        "Daily awareness of changes in behavior, appetite, or mobility. Caregivers provide updates to families as needed.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] flex items-center justify-center mt-[120px] sm:mt-[140px] md:mt-[160px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        {/* Hero Title */}
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 uppercase"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            Services
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-6"></div>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation animation="fade-down">
            <div className="text-center mb-8 sm:mb-12">
          
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight px-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Supporting Every Day, Every Way
              </h2>
              <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-1 bg-[#887904] mx-auto mt-4 sm:mt-6"></div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-4 sm:mt-6 max-w-3xl mx-auto px-4">
                At Quality Care Senior Living, we provide essential daily support
                to ensure every resident feels comfortable, cared for, and safe.
              </p>
            </div>
          </ScrollAnimation>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {services.map((service, index) => (
              <ScrollAnimation key={service.id} animation="fade-up" delay={index * 0.1}>
                <div
                  className="bg-white rounded-2xl sm:rounded-[32px] p-2 sm:p-3 relative flex flex-col h-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] group"
                >
                {/* Image Container with padding and rounded */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl sm:rounded-[16px] mb-2">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>

                {/* Icon Badge - Overlapping between image and text */}
                <div className="flex justify-center -mt-8 sm:-mt-10 mb-4 sm:mb-6 relative z-10">
                  <div className="bg-white rounded-full p-3 sm:p-4 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#887904]/30 group-hover:scale-125 group-hover:-translate-y-2 transition-all duration-500">
                    <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
                      <Image
                        src={service.icon}
                        alt={`${service.title} icon`}
                        fill
                        className="object-contain group-hover:rotate-12 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center px-2 sm:px-3 flex flex-col flex-grow pb-3 sm:pb-4">
                  <h3
                    className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Book a Tour CTA */}
          <ScrollAnimation animation="zoom">
            <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#1a1a1a] text-white pl-6 sm:pl-8 pr-2 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#887904] hover:scale-110 hover:shadow-2xl hover:shadow-[#887904]/40 active:scale-95 inline-flex items-center gap-2 sm:gap-3 transition-all duration-300 text-xs sm:text-sm md:text-[15px] uppercase tracking-wide shadow-lg group"
            >
              Book a Tour
              <div className="bg-white rounded-full p-2 sm:p-3 flex items-center justify-center transition-all duration-300 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-5 sm:h-5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <TourModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
