"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

export default function ServicesSection() {
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
        "Daily medication management ensures residents stay consistent and safe.",
    },
    {
      id: 3,
      image: "/home/services3.png",
      icon: "/home/services-icon3.png",
      title: "Home-Cooked Meals",
      description:
        "Freshly prepared meals and snacks tailored to dietary needs and personal preferences.",
    },
    {
      id: 4,
      image: "/home/services4.png",
      icon: "/home/services-icon4.png",
      title: "Daily Activities",
      description:
        "Light exercise, walks, games, conversations, music, TV time, puzzles, and intentional engagement to promote...",
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
      title: "Companionship & Emotional Support",
      description:
        "Daily awareness of changes in behavior, appetite, or mobility. Caregivers provide updates to families as needed.",
    },
  ];

  return (
    <section className="bg-[#F9F9F9] py-6 sm:py-8 md:py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollAnimation animation="fade-down">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h3
            className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 uppercase"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#887904",
              fontWeight: "700",
            }}
          >
            Our Services
          </h3>
          <h2
            className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            Supporting Every Day, Every Way
          </h2>
          <div className="w-24 h-1 bg-[#887904] mx-auto mt-4"></div>
        </div>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-8">
          {services.map((service, index) => (
            <ScrollAnimation animation="fade-up" delay={index * 0.1} key={service.id}>
            <div
              key={service.id}
              className="bg-white rounded-2xl p-2 relative flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] group animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              {/* Image Container with padding and rounded */}
              <div className="relative h-40 sm:h-44 overflow-hidden rounded-xl mb-2">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>

              {/* Icon Badge - Overlapping between image and text */}
              <div className="flex justify-center -mt-7 mb-4 relative z-10">
                <div className="bg-white rounded-full p-3 shadow-lg group-hover:shadow-xl group-hover:shadow-[#887904]/30 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                  <div className="relative w-6 h-6 sm:w-8 sm:h-8">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      fill
                      className="object-contain group-hover:rotate-360 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center px-2 flex flex-col flex-grow pb-3">
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 mb-3 leading-tight"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* View All Button */}
        <ScrollAnimation animation="zoom">
        <div className="text-center">
          <Link
            href="/services"
            className="bg-[#1a1a1a] text-white pl-5 sm:pl-6 pr-1.5 py-2 sm:py-2.5 rounded-full font-medium hover:bg-[#887904] hover:scale-105 hover:shadow-xl hover:shadow-[#887904]/40 active:scale-95 inline-flex items-center gap-2 sm:gap-3 transition-all duration-300 text-xs sm:text-sm shadow-lg group"
          >
            VIEW ALL SERVICES
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
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
