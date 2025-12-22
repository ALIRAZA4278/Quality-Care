"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function AmenitiesPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] flex items-center justify-center mt-[100px] sm:mt-[120px] md:mt-[140px]">
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
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            Amenities
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-6"></div>
        </div>
      </section>

      {/* A Comfortable Home Environment Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <p
              className="text-[#887904] text-3xl sm:text-4xl md:text-[45px] mb-3 sm:mb-4"
              style={{ fontFamily: "var(--font-aulletta)" }}
            >
              
              Amenities
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4"
              style={{ fontFamily: "var(--font-recoleta)" }}
            >
              A Comfortable Home Environment
            </h2>
            <div className="w-20 sm:w-24 md:w-28 h-1 bg-[#887904] mx-auto mb-6 sm:mb-8"></div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
              We offer a safe, peaceful personal care home setting designed to make residents feel
              comfortable and cared for.
            </p>
          </div>

          {/* Three Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12 md:mt-16">
            {/* Card 1 - Home Features */}
            <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden ">
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src="/amenities/1.png"
                  alt="Home Features"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white rounded-full p-2 sm:p-3 shadow-md">
                  <Image
                    src="/amenities/icon1.png"
                    alt="Home Icon"
                    width={20}
                    height={20}
                    className="object-contain sm:w-6 sm:h-6"
                  />
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3
                  className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Home Features
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#887904] mt-0.5 flex-shrink-0"
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
            <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden ">
              <div className="relative h-64">
                <Image
                  src="/amenities/2.png"
                  alt="Care Environment"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-md">
                  <Image
                    src="/amenities/icon2.png"
                    alt="Care Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="text-xl sm:text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Care Environment
                </h3>
                <ul className="space-y-3 text-gray-700">
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
                    <span>24/7 supervision</span>
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
                    <span>Assistance with all daily needs</span>
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
                    <span>Emotional and social support</span>
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
                    <span>Warm, respectful interactions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 - Resident Experience */}
            <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden  sm:col-span-2 lg:col-span-1">
              <div className="relative h-64">
                <Image
                  src="/amenities/3.png"
                  alt="Resident Experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-md">
                  <Image
                    src="/amenities/icon3.png"
                    alt="Resident Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="text-xl sm:text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Resident Experience
                </h3>
                <ul className="space-y-3 text-gray-700">
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
                    <span>Home-cooked meals</span>
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
                    <span>Daily routines</span>
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
                    <span>Activities and engagement</span>
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
                    <span>Family-friendly environment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan Layout Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left Side - Floor Plan Images */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] order-2 lg:order-1">
              {/* Dark Box in Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-40 h-32 sm:w-56 sm:h-44 md:w-72 md:h-56 z-0 rounded-xl sm:rounded-2xl"></div>

              {/* Floor Plan 1 - Top Left */}
              <div className="absolute -top-6 sm:-top-12 md:-top-15 -left-2 sm:-left-6 md:-left-10 z-10">
                <Image
                  src="/amenities/f1.png"
                  alt="Floor Plan 1"
                  width={200}
                  height={175}
                  className="object-contain sm:w-[260px] sm:h-[228px] md:w-[400px] md:h-[380px]"
                />
              </div>

              {/* Floor Plan 2 - Bottom Right */}
              <div className="absolute bottom-0 right-0 z-10">
                <Image
                  src="/amenities/f2.png"
                  alt="Floor Plan 2"
                  width={200}
                  height={175}
                  className="object-contain sm:w-[260px] sm:h-[228px] md:w-[320px] md:h-[280px]"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 lg:pt-8">
              <p
                className="text-[#887904] text-3xl sm:text-4xl md:text-[45px] mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-aulletta)" }}
              >
                About Us
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Floor Plan Layout
              </h2>
              <div className="w-20 sm:w-24 md:w-28 h-1 bg-[#887904] mb-6 sm:mb-8"></div>

              <div className="space-y-4 sm:space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Quality Care Senior Living at 2033 Sombrero Way offers an elegant, thoughtfully designed residence that blends comfort, privacy, and refined living. The home features beautifully appointed common areas, including a spacious living room, dining area, and kitchen, designed to create a relaxed and upscale atmosphere for daily living and social engagement.
                </p>

                <p>
                  Residents enjoy well-sized bedrooms with natural light, modern bathrooms, on-site laundry, and a serene patio seating area for quiet moments and supervised outdoor enjoyment. Every space is intentionally arranged to support ease of movement, attentive care, and a peaceful, home-like luxury experience.
                </p>

                <p className="font-bold text-gray-900">
                  This isn't just a facility — it's a home.
                </p>
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
