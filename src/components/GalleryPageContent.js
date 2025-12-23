"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function GalleryPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] flex items-center justify-center mt-[70px] sm:mt-[80px] md:mt-[90px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Gallery"
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
            Gallery
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-1"></div>
        </div>
      </section>

      {/* Gallery Introduction */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <ScrollAnimation animation="fade-down">
          <div className="max-w-7xl mx-auto text-center">
            
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-recoleta)" }}
            >
              A warm look into our home
            </h2>
            <div className="w-24 h-1 bg-[#887904] mx-auto"></div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Bedrooms Section */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines */}
          <ScrollAnimation animation="fade-right">
            <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
              <div className="flex-1 h-px bg-[#887904]"></div>
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Bedrooms
              </h3>
              <div className="flex-1 h-px bg-[#887904]"></div>
            </div>
          </ScrollAnimation>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <ScrollAnimation key={num} animation="fade-up" delay={index * 0.1}>
                <div className="relative h-[180px] sm:h-[220px] md:h-[260px] rounded-lg sm:rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#887904]/30 transition-all duration-500">
                  <Image
                    src={`/gallery/${num}.png`}
                    alt={`Bedroom ${num}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Living room Section */}
      <section className="bg-[#f8f8f8] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines */}
          <ScrollAnimation animation="fade-left">
            <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
              <div className="flex-1 h-px bg-[#887904]"></div>
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Living room
              </h3>
              <div className="flex-1 h-px bg-[#887904]"></div>
            </div>
          </ScrollAnimation>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[7, 8, 9].map((num, index) => (
              <ScrollAnimation key={num} animation="zoom" delay={index * 0.1}>
                <div className="relative h-[180px] sm:h-[220px] md:h-[260px] rounded-lg sm:rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#887904]/30 transition-all duration-500">
                  <Image
                    src={`/gallery/${num}.png`}
                    alt={`Living room ${num - 6}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Dining area Section */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines */}
          <ScrollAnimation animation="fade-right">
            <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
              <div className="flex-1 h-px bg-[#887904]"></div>
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Dining area
              </h3>
              <div className="flex-1 h-px bg-[#887904]"></div>
            </div>
          </ScrollAnimation>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[10, 11, 12].map((num, index) => (
              <ScrollAnimation key={num} animation="fade-up" delay={index * 0.1}>
                <div className="relative h-[180px] sm:h-[220px] md:h-[260px] rounded-lg sm:rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#887904]/30 transition-all duration-500">
                  <Image
                    src={`/gallery/${num}.png`}
                    alt={`Dining area ${num - 9}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Section */}
      <section className="bg-[#f8f8f8] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines */}
          <ScrollAnimation animation="fade-left">
            <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
              <div className="flex-1 h-px bg-[#887904]"></div>
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Kitchen
              </h3>
              <div className="flex-1 h-px bg-[#887904]"></div>
            </div>
          </ScrollAnimation>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[13, 14, 15].map((num, index) => (
              <ScrollAnimation key={num} animation="zoom" delay={index * 0.1}>
                <div className="relative h-[180px] sm:h-[220px] md:h-[260px] rounded-lg sm:rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#887904]/30 transition-all duration-500">
                  <Image
                    src={`/gallery/${num}.png`}
                    alt={`Kitchen ${num - 12}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Bathrooms Section */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines */}
          <ScrollAnimation animation="fade-right">
            <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
              <div className="flex-1 h-px bg-[#887904]"></div>
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Bathrooms
              </h3>
              <div className="flex-1 h-px bg-[#887904]"></div>
            </div>
          </ScrollAnimation>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[16, 17, 18, 19, 20, 21].map((num, index) => (
              <ScrollAnimation key={num} animation="fade-up" delay={(index % 3) * 0.1}>
                <div className="relative h-[180px] sm:h-[220px] md:h-[260px] rounded-lg sm:rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#887904]/30 transition-all duration-500">
                  <Image
                    src={`/gallery/${num}.png`}
                    alt={`Bathroom ${num - 15}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor spaces Section */}
      <section className="bg-[#f8f8f8] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines */}
          <ScrollAnimation animation="fade-left">
            <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
              <div className="flex-1 h-px bg-[#887904]"></div>
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Outdoor spaces
              </h3>
              <div className="flex-1 h-px bg-[#887904]"></div>
            </div>
          </ScrollAnimation>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[22, 23, 24, 25, 26, 27].map((num, index) => (
              <ScrollAnimation key={num} animation="zoom" delay={(index % 3) * 0.1}>
                <div className="relative h-[180px] sm:h-[220px] md:h-[260px] rounded-lg sm:rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#887904]/30 transition-all duration-500">
                  <Image
                    src={`/gallery/${num}.png`}
                    alt={`Outdoor space ${num - 21}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
