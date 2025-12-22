"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function AccessibilityPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] flex items-center justify-center mt-[100px] sm:mt-[120px] md:mt-[140px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Accessibility Statement"
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
            Accessibility Statement
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-6"></div>
        </div>
      </section>

      {/* Accessibility Content */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Quality Care is committed to its policy that persons with disabilities have a full and equal opportunity to benefit from the goods, services, privileges, advantages, and accommodations offered by Quality Care. In keeping with that policy, Sunrise Senior Living has implemented and maintains compliance with the relevant portions of the World Wide Web Consortium's Web Content Accessibility Guidelines 2.0 Level AA (WCAG 2.0 AA) as well as state and federal accessibility requirements.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              As part of this commitment, we are continually improving our website to make it more accessible. If you encounter any difficulty using our website, have suggestions about improving the usability or accessibility of the website, or would like to know more about Quality Care commitment to accessibility, please contact our accessibility team by email using the contact information below.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
              Email: quality@qualitycare.com
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
              Phone: 703-273-7500 (request to speak with our legal department)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
