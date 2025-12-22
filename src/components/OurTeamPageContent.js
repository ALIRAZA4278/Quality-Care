"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function OurTeamPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] flex items-center justify-center mt-[100px] sm:mt-[120px] md:mt-[140px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Our Team"
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
            Our Team
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-6"></div>
        </div>
      </section>

      {/* Team Member Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden">
        {/* Decorative leaves background */}
        <div className="absolute top-10 right-10 opacity-20">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <ellipse cx="100" cy="50" rx="15" ry="30" fill="#d0d0d0" transform="rotate(-20 100 50)" />
            <ellipse cx="130" cy="70" rx="12" ry="25" fill="#d0d0d0" transform="rotate(10 130 70)" />
            <ellipse cx="150" cy="100" rx="18" ry="35" fill="#d0d0d0" transform="rotate(-30 150 100)" />
            <ellipse cx="120" cy="130" rx="14" ry="28" fill="#d0d0d0" transform="rotate(20 120 130)" />
            <ellipse cx="90" cy="110" rx="16" ry="32" fill="#d0d0d0" transform="rotate(-10 90 110)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-[#887904] overflow-hidden flex flex-col lg:flex-row items-stretch relative">
            {/* Right - Image (Mobile First) */}
            <div className="relative w-full h-64 sm:h-80 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[50%] lg:h-auto lg:rounded-r-3xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/team/Shunkelia-Johnson.png"
                alt="Shunkelia Johnson"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Left - Text Content */}
            <div className="flex-1 p-6 sm:p-8 lg:p-12 xl:p-16 lg:pr-[55%] xl:pr-[54%] z-10 order-2 lg:order-1">
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Shunkelia Johnson
              </h2>
              <p
                className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6"
                style={{ color: "#887904" }}
              >
                Founder & Administrator of Quality Care Senior Living
              </p>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                <p>
                  I&apos;m Shunkelia Johnson-England, the Founder and Chief Administrative Officer of Quality Care Senior Living and a Licensed Assisted Living Community Administrator with 18 years of experience in the senior living industry. I began my career as a Certified Nursing Assistant and have since explored various roles throughout the Assisted Living sector. My specialty lies in Human Aging and Development Services, where I attended Georgia Gwinnett College to deepen my knowledge and passion for this field.
                </p>

                <p>
                  I believe that building strong relationships with families, residents, and staff is essential for providing exceptional service. As a leader, I strive to lead by example, fostering a supportive and collaborative environment. While I have the ability to work in operations across different industries, my true passion is helping seniors and
                </p>

                <p>
                  their families find a place where they can age in place with dignity and respect. I treat every resident who walks through our doors as if they were my own family member.
                </p>

                <p>
                  Outside of work, I enjoy spending quality time with my husband and our blended family of four, who keep us busy with a variety of weekend activities.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <div className="bg-[#887904] rounded-md p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:w-[18px] sm:h-[18px] drop-shadow-lg"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-900">1 (678) 910-8466</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-[#887904] rounded-md p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:w-[18px] sm:h-[18px] drop-shadow-lg"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-900">1 (678) 910-8466</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
