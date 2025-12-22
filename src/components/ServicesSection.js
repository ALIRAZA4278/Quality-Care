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
    <section className="bg-[#F9F9F9] py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollAnimation animation="fade-down">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h3
            className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4"
            style={{
              fontFamily: "var(--font-aulletta)",
              color: "#887904",
              fontWeight: "400",
            }}
          >
            Our Services
          </h3>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            Supporting Every Day, Every Way
          </h2>
          <div className="w-24 h-1 bg-[#887904] mx-auto mt-4"></div>
        </div>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {services.map((service, index) => (
            <ScrollAnimation animation="fade-up" delay={index * 0.1} key={service.id}>
            <div
              key={service.id}
              className="bg-white rounded-[32px] p-3 relative flex flex-col h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              {/* Image Container with padding and rounded */}
              <div className="relative h-65 sm:h-70 overflow-hidden rounded-[16px] mb-2">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>

              {/* Icon Badge - Overlapping between image and text */}
              <div className="flex justify-center -mt-10 mb-6 relative z-10">
                <div className="bg-white rounded-full p-4 shadow-xl group-hover:shadow-2xl group-hover:shadow-[#887904]/30 group-hover:scale-125 group-hover:-translate-y-2 transition-all duration-500">
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10">
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
              <div className="text-center px-2 flex flex-col flex-grow pb-4">
                <h3
                  className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm sm:text-lg text-gray-700 leading-relaxed flex-grow">
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
            className="bg-[#1a1a1a] text-white pl-8 pr-2 py-3 rounded-full font-medium hover:bg-[#887904] hover:scale-110 hover:shadow-2xl hover:shadow-[#887904]/40 active:scale-95 inline-flex items-center gap-4 transition-all duration-300 text-[15px] shadow-xl group"
          >
            VIEW ALL SERVICES
            <div className="bg-white rounded-full p-3 flex items-center justify-center transition-all duration-300 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
