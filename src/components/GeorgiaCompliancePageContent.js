"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function GeorgiaCompliancePageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] flex items-center justify-center mt-[100px] sm:mt-[120px] md:mt-[140px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Georgia-Specific Compliance & Legal Disclosure"
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
            Georgia Compliance & Legal Disclosure
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-1"></div>
        </div>
      </section>

      {/* Georgia Compliance Content */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {/* Introduction */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Quality Care Senior Living, LLC.
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                This page provides Georgia-specific disclosures and compliance statements related to the operation of Quality Care Senior Living within the State of Georgia.
              </p>
            </div>

            {/* Georgia Licensing & Regulatory Oversight */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Georgia Licensing & Regulatory Oversight
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                Quality Care Senior Living operates in accordance with applicable Georgia laws and regulations governing senior living and personal care homes, including oversight by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>Georgia Department of Community Health (DCH)</li>
                <li>Healthcare Facility Regulation Division (HFRD)</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3">
                Licensing status, capacity, and services may vary by location and are subject to inspection, approval, and renewal by the State of Georgia.
              </p>
            </div>

            {/* Scope of Care Disclaimer */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Scope of Care Disclaimer (Georgia Law)
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                Quality Care Senior Living provides non-medical residential care and supportive services as permitted under Georgia law.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                Unless otherwise stated:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>We are not a skilled nursing facility</li>
                <li>We do not provide continuous medical or clinical care</li>
                <li>Medical services are coordinated through licensed third-party providers when applicable</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3">
                Residents requiring skilled nursing or acute medical care may need external services or transfer to appropriate facilities.
              </p>
            </div>

            {/* Resident Rights */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Resident Rights (Georgia)
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                Residents are entitled to rights under Georgia law, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>Respect, dignity, and privacy</li>
                <li>Freedom from abuse, neglect, and exploitation</li>
                <li>Participation in care decisions</li>
                <li>Access to personal records as permitted by law</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3">
                Quality Care Senior Living is committed to upholding these rights in accordance with state regulations.
              </p>
            </div>

            {/* Mandatory Reporting & Legal Obligations */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Mandatory Reporting & Legal Obligations
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                In compliance with Georgia law, Quality Care Senior Living is required to report certain incidents, including suspected abuse, neglect, or exploitation, to appropriate authorities.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                We may also be required to disclose information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>Regulatory agencies</li>
                <li>Law enforcement</li>
                <li>Emergency services</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3">
                Such disclosures are made only as required or permitted by law.
              </p>
            </div>

            {/* HIPAA & State Privacy Alignment */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                HIPAA & State Privacy Alignment
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                While not all senior living services fall under HIPAA, Quality Care Senior Living applies HIPAA-aligned privacy and security practices where applicable and complies with relevant Georgia privacy laws.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                Protected or sensitive information is handled with strict confidentiality and security safeguards.
              </p>
            </div>

            {/* Non-Discrimination Statement */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Non-Discrimination Statement (Georgia & Federal)
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                Quality Care Senior Living does not discriminate based on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>Race</li>
                <li>Color</li>
                <li>Religion</li>
                <li>Sex</li>
                <li>National origin</li>
                <li>Disability</li>
                <li>Age</li>
                <li>Any other status protected by applicable law</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3">
                We comply with all applicable federal and Georgia non-discrimination laws.
              </p>
            </div>

            {/* Changes to Compliance Disclosures */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Changes to Compliance Disclosures
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                This compliance disclosure may be updated to reflect changes in Georgia laws, regulations, or operational practices. Updates will be posted on our website.
              </p>
            </div>

            {/* Contact for Compliance Questions */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Contact for Compliance Questions
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                For questions related to licensing, compliance, or resident rights, please contact:
              </p>
              <div className="bg-[#f8f6f3] p-4 sm:p-6 rounded-lg space-y-2">
                <p className="text-xs sm:text-sm md:text-base text-gray-900 font-semibold">
                  Quality Care Senior Living, LLC
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700">
                  2033 Sombrero Way SE,<br />
                  Atlanta, GA 30316
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700">
                  Email: <a href="mailto:sjohnson@qualitycareseniorliving.com" className="text-[#887904] hover:underline">sjohnson@qualitycareseniorliving.com</a>
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700">
                  Phone: <a href="tel:+16789108466" className="text-[#887904] hover:underline">1 (678) 910-8466</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
