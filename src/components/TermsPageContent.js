"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function TermsPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] flex items-center justify-center mt-[100px] sm:mt-[120px] md:mt-[140px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Terms of Use"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        {/* Hero Title */}
        <div className="relative z-10 text-center px-4 mt-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 uppercase"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            Terms of Use
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-1"></div>
        </div>
      </section>

      {/* Effective Date */}
      <section className="bg-white py-6 sm:py-8 px-4 sm:px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm sm:text-base text-gray-700 font-semibold">
            Effective Date: December 19, 2025
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* 1. Acceptance of Terms */}
            <div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                1. Acceptance of Terms
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Welcome to Quality Care. By accessing our website, you agree to be bound by these Terms of Use and our Privacy Policy. If you are using this site on behalf of a senior or family member, you represent that you have the authority to bind them to these terms.
              </p>
            </div>

            {/* 2. Medical Disclaimer */}
            <div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                2. MEDICAL DISCLAIMER <span className="text-[#887904]">(IMPORTANT)</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                The content on the Quality Care website is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
                <li>Always seek the advice of a physician or other qualified health provider with any questions regarding a medical condition.</li>
                <li>If you think you may have a medical emergency, call 911 or your local emergency services immediately.</li>
              </ul>
            </div>

            {/* 3. Description of Services */}
            <div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                3. Description of Services
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Quality Care provides a platform to learn about and request elderly home care services, including companion care, personal care, and specialized nursing.
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
                <li>The website allows users to request a free in-home assessment.</li>
                <li>Actual care services are governed by a separate Service Agreement signed at the time of enrollment.</li>
              </ul>
            </div>

            {/* 4. User Eligibility and Conduct */}
            <div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                4. User Eligibility and Conduct
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                To ensure a safe environment for our clients and caregivers, you agree to:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
                <li>Be at least 18 years of age to request a consultation.</li>
                <li>Provide accurate and truthful information regarding the health and living conditions of the care recipient.</li>
                <li>Use the website only for lawful purposes.</li>
              </ul>
            </div>

            {/* 5. Intellectual Property */}
            <div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                5. Intellectual Property
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                All website design, text, graphics, and logos are the property of Quality Care. You may download or print portions of this site for personal, non-commercial use only (e.g., sharing care options with family members).
              </p>
            </div>

            {/* 6. Safety and Caregiver Protection */}
            <div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                6. Safety and Caregiver Protection
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Quality Care is committed to the safety of our staff. We reserve the right to refuse or terminate services if a home environment is deemed unsafe, unsanitary, or if caregivers are subjected to harassment or discrimination.
              </p>
            </div>

            {/* 7. Limitation of Liability */}
            <div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                7. Limitation of Liability
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Quality Care and its employees shall not be liable for any damages resulting from your use of the website or reliance on any general health information provided herein.
              </p>
            </div>

            {/* 8. Changes to Terms */}
            <div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                8. Changes to Terms
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                We may update these terms from time to time to reflect changes in our services or legal requirements. We encourage you to review this page periodically.
              </p>
            </div>

            {/* 9. Contact Us */}
            <div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                9. Contact Us
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                If you have questions regarding these Terms of Use, please contact us at:{" "}
                <span className="font-semibold">Email: legal@qualitycare.com</span>{" "}
                <span className="font-semibold">Phone: (555) 123-4567</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
