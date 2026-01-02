"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function AboutPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] flex items-center justify-center mt-[70px] sm:mt-[80px] md:mt-[90px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="About Us"
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
            About Us
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-1"></div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Text Content */}
            <ScrollAnimation animation="fade-right">
              <div>
                <h3
                  className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 uppercase"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#887904",
                    fontWeight: "700",
                  }}
                >
                  Our Mission
                </h3>
                <h2
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  Connecting Care With Compassion
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  At Quality Care Senior Living, our mission is simple yet deeply intentional: to provide
                  compassionate, personalized care in a comfortable, home-like setting where seniors feel safe,
                  respected, and genuinely valued. We are committed to supporting each resident&apos;s physical,
                  emotional, and social well-being while honoring their individuality, life experiences, and
                  personal needs.
                </p>

                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  We believe every resident deserves dignity, patience, and love—delivered with consistency and
                  integrity. Our goal is to create a peaceful, nurturing environment where families feel confident,
                  residents feel supported, and every day is met with care that comes from the heart.
                </p>
              </div>
            </ScrollAnimation>

            {/* Right - Image with 15+ Years Badge */}
            <ScrollAnimation animation="fade-left">
              <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about/about1.png"
                  alt="Senior living room"
                  width={600}
                  height={400}
                  className="object-cover w-full"
                />
              </div>

              {/* 15+ Years Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[#887904] text-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl">
                <div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold leading-none mb-1 sm:mb-2"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  15+
                </div>
                <div className="text-[10px] sm:text-xs font-medium uppercase">
                  Years Experience
                </div>
              </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-[#f8f6f3] py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image */}
            <ScrollAnimation animation="fade-right">
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/about/about2.png"
                    alt="Seniors walking"
                    width={600}
                    height={400}
                    className="object-cover w-full"
                  />
                </div>
              </div>
            </ScrollAnimation>

            {/* Right - Text Content */}
            <ScrollAnimation animation="fade-left">
              <div className="order-1 lg:order-2">
              <h3
                className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 uppercase"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#887904",
                  fontWeight: "700",
                }}
              >
                About Us
              </h3>
              <h2
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Who We Are
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Quality Care Senior Living is a privately operated, one-location personal care home proudly
                serving families in the Decatur and greater Atlanta, Georgia area. We intentionally maintain a
                small, close-knit community, allowing us to provide attentive one-on-one support, personalized
                care plans, and consistent daily routines tailored to each resident&apos;s needs.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Our approach goes beyond basic care. We focus on building genuine relationships, fostering
                trust, and creating a sense of belonging through meaningful companionship and daily
                engagement. Our experienced and compassionate caregivers are dedicated to ensuring residents
                feel comfortable, understood, and cared for at every stage of life.
              </p>

              <p
                className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 italic"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                This isn&apos;t just a facility, it&apos;s a home. A place where residents are known by name, treated like
                family, and supported with the respect and warmth they deserve.
              </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Families Choose Us Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation animation="fade-down">
            <div className="text-center mb-8 sm:mb-12">
              <h3
                className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 uppercase"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#887904",
                  fontWeight: "700",
                }}
              >
                Why Choose Us
              </h3>
              <h2
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Why Families Choose Us
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-[#887904] mx-auto mt-4 sm:mt-6"></div>
            </div>
          </ScrollAnimation>

          {/* Image */}
          <ScrollAnimation animation="zoom">
            <div className="relative">
              <Image
                src="/about/image.png"
                alt="Why Families Choose Us"
                width={1200}
                height={600}
                className="object-contain w-full"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>


    </>
  );
}
