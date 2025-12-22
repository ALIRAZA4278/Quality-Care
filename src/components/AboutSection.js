"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

export default function AboutSection() {
  return (
    <section className="bg-[#f8f6f3] py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Images */}
          <ScrollAnimation animation="fade-left">
          <div className="relative w-full aspect-[3/2.5] max-w-[500px] sm:max-w-[600px] mx-auto lg:mx-0">
            {/* Dark Green Background Box - Top Left */}
            <div className="absolute top-8 sm:top-35 -left-6 sm:-left-10 w-[30%] h-[65%] bg-black rounded-[20px] sm:rounded-[32px] shadow-2xl"></div>

            {/* Main Large Image - Taller and bigger */}
            <div className="absolute top-[-5%] sm:top-[-8%] left-[0] w-[85%] h-[95%] rounded-[20px] sm:rounded-[32px] overflow-hidden shadow-2xl hover:shadow-[#887904]/50 hover:scale-105 transition-all duration-500 group">
              <Image
                src="/home/about1.png"
                alt="Senior couple having tea"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

            </div>
             {/* Logo Badge */}
              <div className="absolute top-1 sm:top-2 right-6 sm:right-10 bg-white rounded-full p-2 sm:p-4 shadow-xl hover:shadow-2xl hover:shadow-[#887904]/40 hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer group">
                <Image
                  src="/logo.svg"
                  alt="Quality Care Logo"
                  width={60}
                  height={60}
                  className="object-contain sm:w-[85px] sm:h-[85px] group-hover:rotate-[-6deg] transition-transform duration-300"
                />
              </div>

            {/* Years of Experience Text - Bottom Left, overlapping */}
            <div className="absolute -bottom-[10%] sm:-bottom-[2%] left-[10%] sm:left-[25%] z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-white transition-all duration-300 cursor-pointer">
              <div
                className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-none mb-1"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                25+
              </div>
              <div className="text-sm sm:text-base font-medium text-gray-900">
                Years Of Experiences
              </div>
            </div>

            {/* Bottom Right Small Image with White Border - Taller */}
            <div className="absolute -bottom-6 sm:-bottom-8 -right-3 sm:-right-5 w-[50%] h-[65%] bg-white rounded-[20px] sm:rounded-[32px] border-8 sm:border-10 border-white p-2 sm:p-4 shadow-2xl hover:shadow-[#887904]/50 hover:scale-105 hover:-rotate-2 transition-all duration-500 group cursor-pointer">
              <div className="w-full h-full rounded-[16px] sm:rounded-[20px] overflow-hidden">
                <Image
                  src="/home/about2.png"
                  alt="Seniors in living room"
                  fill
                  className="object-cover rounded-[16px] sm:rounded-[32px] group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          </ScrollAnimation>

          {/* Right Side - Content */}
          <ScrollAnimation animation="fade-right">
          <div className="lg:pl-8 mt-8 lg:mt-0">
            {/* About Us Label */}
            <h3
              className="text-3xl sm:text-4xl md:text-[45px] mb-3 sm:mb-4"
              style={{
                fontFamily: "var(--font-aulletta)",
                color: "#887904",
                fontWeight: "400",
              }}
            >
              About Us
            </h3>

            {/* Main Heading */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: "var(--font-recoleta)" }}
            >
              Our Promise to Your Loved One
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-5 sm:mb-6 leading-relaxed">
              Quality Care Senior Living is a small, family-centered personal
              care home in Decatur where seniors receive the attention, dignity,
              and comfort they deserve. With only a few residents at a time, we
              create a warm environment where each person is known, valued, and
              supported.
            </p>

            {/* We... Section */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 border-l-4 border-[#887904] pl-3">
                We...
              </h4>

              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3 hover:bg-white/50 p-2 rounded-lg hover:shadow-md transition-all duration-300 group cursor-pointer">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#887904] mt-1 flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 drop-shadow-md"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    Personalized One-on-One Care
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 hover:bg-white/50 p-2 rounded-lg hover:shadow-md transition-all duration-300 group cursor-pointer">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#887904] mt-1 flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 drop-shadow-md"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    Safe & Peaceful Home Setting
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 hover:bg-white/50 p-2 rounded-lg hover:shadow-md transition-all duration-300 group cursor-pointer">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#887904] mt-1 flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 drop-shadow-md"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-300">24/7 Trained Staff</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 hover:bg-white/50 p-2 rounded-lg hover:shadow-md transition-all duration-300 group cursor-pointer">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#887904] mt-1 flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 drop-shadow-md"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    Home-Cooked Meals & Daily Support
                  </span>
                </li>
              </ul>
            </div>

            {/* Learn More Button */}
            <Link
              href="/about"
              className="bg-black text-white pl-6 sm:pl-8 pr-2 py-2.5 sm:py-3 rounded-full font-medium hover:bg-[#887904] hover:scale-110 hover:shadow-2xl hover:shadow-[#887904]/40 active:scale-95 inline-flex items-center gap-3 sm:gap-4 transition-all duration-300 text-sm sm:text-[15px] shadow-xl group"
            >
              LEARN MORE
              <div className="bg-white rounded-full p-2 sm:p-3 flex items-center justify-center transition-all duration-300 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-5 sm:h-5 drop-shadow-md"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
