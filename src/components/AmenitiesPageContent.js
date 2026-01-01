"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function AmenitiesPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] flex items-center justify-center mt-[70px] sm:mt-[80px] md:mt-[90px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Amenities"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        {/* Hero Title */}
        <div className="relative z-10 text-center px-4 mt-10">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 uppercase"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            Amenities
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-1"></div>
        </div>
      </section>

      {/* A Comfortable Home Environment Section */}
      <section className="bg-white py-6 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8">
           
            <h2
              className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 px-4"
              style={{ fontFamily: "var(--font-recoleta)" }}
            >
              A Comfortable Home Environment
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#887904] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base max-w-4xl mx-auto leading-relaxed px-4 mb-4">
              At Quality Care Senior Living, our amenities are thoughtfully designed to enhance comfort,
              promote independence, and create a warm, home-like atmosphere. Every detail of our residence
              supports ease of living, safety, and enjoyment, ensuring residents feel relaxed, cared for, and
              truly at home.
            </p>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base max-w-4xl mx-auto leading-relaxed px-4">
              We believe quality living goes beyond care. Our amenities encourage social connection,
              relaxation, and peace of mind while providing families confidence that their loved ones are in a
              secure and nurturing environment.
            </p>
          </div>

          {/* Three Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6 sm:mt-8">
            {/* Card 1 - Home Features */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] flex flex-col h-full">
              <div className="relative h-40 sm:h-44">
                <Image
                  src="/amenities/1.png"
                  alt="Home Features"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white rounded-full p-2 shadow-md">
                  <Image
                    src="/amenities/icon1.png"
                    alt="Home Icon"
                    width={16}
                    height={16}
                    className="object-contain sm:w-5 sm:h-5"
                  />
                </div>
              </div>
              <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <h3
                  className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Home Features
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#887904] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Clean, modern living spaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#887904] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Private & shared rooms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#887904] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Cozy common areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#887904] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Beautiful residential surroundings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#887904] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Safe neighborhood location</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 - Care Environment */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] flex flex-col h-full">
              <div className="relative h-40 sm:h-44">
                <Image
                  src="/amenities/2.png"
                  alt="Care Environment"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white rounded-full p-2 shadow-md">
                  <Image
                    src="/amenities/icon2.png"
                    alt="Care Icon"
                    width={16}
                    height={16}
                    className="object-contain sm:w-5 sm:h-5"
                  />
                </div>
              </div>
              <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <h3
                  className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Care Environment
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#887904] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>24/7 supervision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#887904] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Assistance with all daily needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#887904] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Emotional and social support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#887904] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Warm, respectful interactions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 - Resident Experience */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] sm:col-span-2 lg:col-span-1 flex flex-col h-full">
              <div className="relative h-40 sm:h-44">
                <Image
                  src="/amenities/3.png"
                  alt="Resident Experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white rounded-full p-2 shadow-md">
                  <Image
                    src="/amenities/icon3.png"
                    alt="Resident Icon"
                    width={16}
                    height={16}
                    className="object-contain sm:w-5 sm:h-5"
                  />
                </div>
              </div>
              <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <h3
                  className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Resident Experience
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#887904] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Home-cooked meals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#887904] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Daily routines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#887904] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Activities and engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#887904] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Family-friendly environment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Amenities Section */}
      <section className="bg-[#f8f6f3] py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-down">
            <div className="text-center mb-8 sm:mb-12">
              <h2
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Our Amenities
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-[#887904] mx-auto"></div>
            </div>
          </ScrollAnimation>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
            {/* Amenity 1 */}
            <ScrollAnimation animation="fade-up" delay={0.1}>
              <div className="group bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#887904]/30 h-full">
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-[#887904] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Private & Semi-Private Living Spaces
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Comfortable, well-appointed bedrooms designed to provide privacy, tranquility, and a personal sense of home.
                </p>
              </div>
            </ScrollAnimation>

            {/* Amenity 2 */}
            <ScrollAnimation animation="fade-up" delay={0.2}>
              <div className="group bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#887904]/30 h-full">
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-[#887904] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Safe & Secure Environment
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  A professionally monitored setting featuring security guards and camera systems to ensure resident safety and provide families with peace of mind.
                </p>
              </div>
            </ScrollAnimation>

            {/* Amenity 3 */}
            <ScrollAnimation animation="fade-up" delay={0.3}>
              <div className="group bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#887904]/30 h-full">
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-[#887904] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Spacious Common Areas
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Inviting shared spaces for socializing, activities, entertainment, and daily gatherings.
                </p>
              </div>
            </ScrollAnimation>

            {/* Amenity 4 */}
            <ScrollAnimation animation="fade-up" delay={0.4}>
              <div className="group bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#887904]/30 h-full">
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-[#887904] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Comfortable Dining Area & Kitchen Access
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  A welcoming dining space where residents enjoy nutritious, home-cooked meals, supported by a fully equipped kitchen including a dishwasher for cleanliness and efficiency.
                </p>
              </div>
            </ScrollAnimation>

            {/* Amenity 5 */}
            <ScrollAnimation animation="fade-up" delay={0.5}>
              <div className="group bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#887904]/30 h-full">
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-[#887904] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Daily Activity & Engagement Areas
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Dedicated spaces for games, music, group activities, and meaningful social interaction.
                </p>
              </div>
            </ScrollAnimation>

            {/* Amenity 6 */}
            <ScrollAnimation animation="fade-up" delay={0.6}>
              <div className="group bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#887904]/30 h-full">
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-[#887904] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Outdoor Patio & Relaxation Space
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  A peaceful patio and outdoor area designed for fresh air, light movement, social time, and quiet relaxation.
                </p>
              </div>
            </ScrollAnimation>

            {/* Amenity 7 */}
            <ScrollAnimation animation="fade-up" delay={0.7}>
              <div className="group bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#887904]/30 h-full">
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-[#887904] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Climate-Controlled Home
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Comfortable indoor temperatures year-round to ensure resident comfort in every season.
                </p>
              </div>
            </ScrollAnimation>

            {/* Amenity 8 */}
            <ScrollAnimation animation="fade-up" delay={0.8}>
              <div className="group bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#887904]/30 h-full">
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-[#887904] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Fully Furnished Living Areas
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Tastefully furnished common spaces designed for comfort, accessibility, and ease of movement.
                </p>
              </div>
            </ScrollAnimation>

            {/* Amenity 9 */}
            <ScrollAnimation animation="fade-up" delay={0.9}>
              <div className="group bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#887904]/30 h-full">
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-[#887904] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Wheelchair-Accessible Layout
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Thoughtfully designed pathways and living spaces to support mobility, independence, and safety.
                </p>
              </div>
            </ScrollAnimation>

            {/* Amenity 10 */}
            <ScrollAnimation animation="fade-up" delay={1.0}>
              <div className="group bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#887904]/30 h-full">
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-[#887904] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Housekeeping-Maintained Environment
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  A clean, well-maintained home with regular housekeeping and on-site washer and dryer access to support daily living needs.
                </p>
              </div>
            </ScrollAnimation>

            {/* Amenity 11 */}
            <ScrollAnimation animation="fade-up" delay={1.1}>
              <div className="group bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#887904]/30 h-full">
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-[#887904] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  High-Speed Wi-Fi Access
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Reliable internet access throughout the home to support entertainment, communication with loved ones, and virtual engagement.
                </p>
              </div>
            </ScrollAnimation>

            {/* Amenity 12 */}
            <ScrollAnimation animation="fade-up" delay={1.2}>
              <div className="group bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#887904]/30 h-full">
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-[#887904] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Storage Areas
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Designated storage space to safely accommodate personal belongings and essential items.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Floor Plan Layout Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Left Side - Floor Plan Images */}
            <div className="relative w-full h-[280px] sm:h-[350px] md:h-[420px] order-2 lg:order-1 flex items-center justify-center">
              {/* Dark Box in Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-32 h-24 sm:w-44 sm:h-32 md:w-56 md:h-40 z-0 rounded-lg sm:rounded-xl"></div>

              {/* Floor Plan 1 - Top Left */}
              <div className="absolute -top-4 sm:-top-8 md:-top-10 -left-1 sm:-left-4 md:-left-6 z-10">
                <Image
                  src="/amenities/f1.png"
                  alt="Floor Plan 1"
                  width={180}
                  height={160}
                  className="object-contain sm:w-[220px] sm:h-[190px] md:w-[320px] md:h-[280px]"
                />
              </div>

              {/* Floor Plan 2 - Bottom Right */}
              <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-1 sm:-right-4 md:-right-6 z-10">
                <Image
                  src="/amenities/f2.png"
                  alt="Floor Plan 2"
                  width={180}
                  height={160}
                  className="object-contain sm:w-[220px] sm:h-[190px] md:w-[280px] md:h-[240px]"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <h2
                className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Our Floor Plan
              </h2>
              <p
                className="text-[#887904] text-sm sm:text-base md:text-lg mb-3 sm:mb-4 italic"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: "600" }}
              >
                "Thoughtfully Designed for Comfort, Safety & Daily Living"
              </p>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#887904] mb-4 sm:mb-6"></div>

              <div className="space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm leading-relaxed">
                <p>
                  The Quality Care Senior Living residence at 2033 Sombrero Way SE, Atlanta, GA is
                  thoughtfully designed to provide both functionality and comfort across two spacious levels. Our
                  floor plan allows residents to enjoy privacy while still fostering community, connection, and ease
                  of movement throughout the home.
                </p>

                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5 text-sm sm:text-base">Upstairs Plan</h3>
                  <p className="mb-2">
                    The main level features a bright, open-concept living and dining area that serves as the heart of
                    the home, perfect for meals, social gatherings, and daily activities. The kitchen is centrally
                    located for efficiency and accessibility, allowing seamless meal preparation and service.
                  </p>
                  <p>
                    This level includes three private bedrooms, a sitting area, and accessible bathrooms designed to
                    support comfort and daily routines. The layout promotes natural light, clear pathways, and a
                    calm, welcoming atmosphere. An attached carport and front porch provide easy entry and
                    convenience.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5 text-sm sm:text-base">Downstairs</h3>
                  <p className="mb-2">
                    The lower level offers additional living space designed for both privacy and functionality. It
                    includes a private bedroom with a nearby bathroom, a secondary living/dining area, and direct
                    access to a peaceful outdoor patio, ideal for relaxation and fresh air.
                  </p>
                  <p>
                    This level also features ample storage areas and a utility space, supporting household operations
                    while keeping resident areas uncluttered and serene.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5 text-sm sm:text-base">Designed With Purpose</h3>
                  <p className="mb-2">
                    Every square foot of our home is intentionally planned to support safety, accessibility, and
                    quality of life. Wide walkways, clearly defined spaces, and dedicated common areas ensure
                    residents can move comfortably while enjoying both independence and companionship.
                  </p>
                  <p className="font-semibold text-gray-900 italic">
                    Our floor plan reflects our commitment to providing not just care, but a true home environment
                    where residents feel secure, respected, and at ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-[280px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5466494949987!2d-0.1220994871307612!3d51.50318637169487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7eb9be3%3A0x3918653583725b56!2sRiverside%20Building%2C%20County%20Hall%2C%20Westminster%20Bridge%20Rd%2C%20London%20SE1%207JA%2C%20UK!5e0!3m2!1sen!2sus!4v1766317314261!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
