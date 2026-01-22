"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function AccessibilityPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] flex items-center justify-center mt-[70px] sm:mt-[80px] md:mt-[90px]">
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
        <div className="relative z-10 text-center px-4 mt-10">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 uppercase"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            Accessibility Statement
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-1"></div>
        </div>
      </section>

      {/* Accessibility Content */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {/* Header */}
            <div className="text-center">
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                ACCESSIBILITY STATEMENT
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
                Quality Care Senior Living, LLC.
              </p>
            </div>

            {/* Introduction */}
            <div>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Quality Care Senior Living is committed to ensuring digital accessibility for all individuals, including people with disabilities. We strive to make our website accessible, inclusive, and user-friendly for everyone, including seniors, family members, caregivers, and visitors.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                We are continually improving the user experience for all and applying relevant accessibility standards to ensure equal access to information and services.
              </p>
            </div>

            {/* Our Commitment to Accessibility */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Our Commitment to Accessibility
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                Quality Care Senior Living is dedicated to providing a website that is accessible to the widest possible audience, regardless of ability, technology, or circumstance. We believe accessibility is an essential part of providing quality care, dignity, and respect to our community.
              </p>
            </div>

            {/* Accessibility Standards */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Accessibility Standards
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, as published by the World Wide Web Consortium (W3C). These guidelines outline best practices for making web content more accessible to people with a wide range of disabilities, including:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                <li>Visual impairments</li>
                <li>Hearing impairments</li>
                <li>Mobility limitations</li>
                <li>Cognitive disabilities</li>
              </ul>
            </div>

            {/* Accessibility Features */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Accessibility Features
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Our website includes, or is designed to support, the following accessibility features:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                <li>Clear and readable text with sufficient color contrast</li>
                <li>Logical page structure with consistent navigation</li>
                <li>Keyboard navigation compatibility</li>
                <li>Alternative text for images where applicable</li>
                <li>Scalable text for improved readability</li>
                <li>Accessible forms and labels</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3 sm:mt-4">
                We continue to evaluate and improve these features as part of our ongoing accessibility efforts.
              </p>
            </div>

            {/* Assistive Technology Compatibility */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Assistive Technology Compatibility
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                The Quality Care Senior Living website is designed to be compatible with commonly used assistive technologies, including:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                <li>Screen readers</li>
                <li>Screen magnifiers</li>
                <li>Voice recognition software</li>
                <li>Keyboard-only navigation tools</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3 sm:mt-4">
                While we strive for full compatibility, some content or third-party tools may not yet fully meet all accessibility standards.
              </p>
            </div>

            {/* Ongoing Improvements */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Ongoing Improvements
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                Accessibility is an ongoing process. We regularly review our website, conduct accessibility audits, and work to address identified issues. Updates and improvements are made as technology, standards, and user needs evolve.
              </p>
            </div>

            {/* Third-Party Content */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Third-Party Content
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                Some content or features on our website may be provided by third-party vendors or platforms. While we encourage accessibility compliance from all partners, we cannot guarantee full accessibility of third-party content outside our control.
              </p>
            </div>

            {/* Feedback & Assistance */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Feedback & Assistance
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                We welcome your feedback on the accessibility of our website. If you experience any difficulty accessing content, have trouble navigating the site, or need assistance, please contact us. We are committed to responding promptly and working with you to provide the information or support you need in an accessible format.
              </p>
              <div className="bg-[#f8f6f0] p-4 sm:p-6 rounded-lg">
                <p className="text-xs sm:text-sm md:text-base text-gray-900 font-semibold mb-3">
                  Contact Information:
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-900 font-semibold mb-2">
                  Quality Care Senior Living, LLC
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-1">
                  2033 Sombrero Way SE,
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-1">
                  Atlanta, GA 30316
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-1">
                  Email: info@qualitycareseniorliving.com
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700">
                  Phone: 1 (678) 910-8466
                </p>
              </div>
            </div>

            {/* Alternative Access */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Alternative Access
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                If you are unable to access any part of our website, we are happy to provide information through alternative methods, such as phone support or written communication, upon request.
              </p>
            </div>

            {/* Policy Updates */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Policy Updates
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                This Accessibility Statement may be updated from time to time to reflect improvements, changes in accessibility standards, or enhancements to our website. Updates will be posted on this page with a revised effective date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
