"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function OurTeamPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] flex items-center justify-center mt-[70px] sm:mt-[80px] md:mt-[90px]">
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
        <div className="relative z-10 text-center px-4 mt-10">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 uppercase"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            Our Team
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-1"></div>
        </div>
      </section>

      {/* Meet Our Team Introduction Section */}
      <section className="bg-white pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollAnimation animation="fade-up">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
              style={{ fontFamily: "var(--font-recoleta)" }}
            >
              "The Heart Behind Our Care"
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#887904] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
              At Quality Care Senior Living, our team is the foundation of the care we provide. Our dedicated
              professionals are committed to delivering compassionate, respectful, and personalized care in a
              safe and supportive environment where every resident feels at home.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team Member Section */}
      <section className="bg-white pt-0 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Decorative leaves background - top right */}
        <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
          <svg width="250" height="250" viewBox="0 0 250 250" fill="none">
            <ellipse cx="100" cy="50" rx="20" ry="40" fill="#d4d4d4" transform="rotate(-20 100 50)" />
            <ellipse cx="140" cy="80" rx="18" ry="35" fill="#d4d4d4" transform="rotate(10 140 80)" />
            <ellipse cx="170" cy="120" rx="22" ry="45" fill="#d4d4d4" transform="rotate(-30 170 120)" />
            <ellipse cx="130" cy="160" rx="19" ry="38" fill="#d4d4d4" transform="rotate(20 130 160)" />
            <ellipse cx="90" cy="130" rx="21" ry="42" fill="#d4d4d4" transform="rotate(-10 90 130)" />
          </svg>
        </div>

        {/* Decorative leaves background - bottom left */}
        <div className="absolute bottom-20 left-10 opacity-10 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <ellipse cx="80" cy="60" rx="18" ry="36" fill="#d4d4d4" transform="rotate(15 80 60)" />
            <ellipse cx="110" cy="90" rx="16" ry="32" fill="#d4d4d4" transform="rotate(-25 110 90)" />
            <ellipse cx="140" cy="70" rx="20" ry="40" fill="#d4d4d4" transform="rotate(5 140 70)" />
            <ellipse cx="100" cy="120" rx="17" ry="34" fill="#d4d4d4" transform="rotate(-15 100 120)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Meet Our Team Heading */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2
                className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                MEET OUR TEAM
              </h2>
            </div>
          </ScrollAnimation>

          <div className="bg-white rounded-3xl border-4 border-[#887904] shadow-lg flex flex-col lg:flex-row overflow-hidden">
            {/* Image - Right Side */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <Image
                src="/team/Shunkelia-Johnson.png"
                alt="Shunkelia Johnson"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Content - Left Side */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-2 lg:p-4 xl:p-6 flex flex-col justify-center order-2 lg:order-1">
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 italic"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Shunkelia Johnson
              </h2>
              <p
                className="text-xs sm:text-sm md:text-base mb-6 font-semibold"
                style={{ color: "#887904" }}
              >
                Founder & Administrator of Quality Care Senior Living
              </p>

              <div className="space-y-4 text-[11px] sm:text-xs md:text-sm text-gray-700 leading-relaxed mb-8">
                <p>
                  I&apos;m Shunkelia Johnson-England, the Founder and Chief Administrative Officer of Quality Care Senior Living and a Licensed Assisted Living Community Administrator with 18 years of experience in the senior living industry. I began my career as a Certified Nursing Assistant and have since explored various roles throughout the Assisted Living sector. My specialty lies in Human Aging and Development Services, where I attended Georgia Gwinnett College to deepen my knowledge and passion for this field.
                </p>

                <p>
                  I believe that building strong relationships with families, residents, and staff is essential for providing exceptional service. As a leader, I strive to lead by example, fostering a supportive and collaborative environment. While I have the ability to work in operations across different industries, my true passion is helping seniors and
                  their families find a place where they can age in place with dignity and respect. I treat every resident who walks through our doors as if they were my own family member.
                </p>

                <p>
                  Outside of work, I enjoy spending quality time with my husband and our blended family of four, who keep us busy with a variety of weekend activities.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#887904] rounded-lg p-2">
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
                      className="sm:w-5 sm:h-5"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base text-gray-900 font-medium">1 (678) 910-8466</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#887904] rounded-lg p-2">
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
                      className="sm:w-5 sm:h-5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base text-gray-900 font-medium">1 (678) 910-8466</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
