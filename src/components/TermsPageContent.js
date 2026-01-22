"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function TermsPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] flex items-center justify-center mt-[70px] sm:mt-[80px] md:mt-[90px]">
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
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 uppercase"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            Terms of Use
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-1"></div>
        </div>
      </section>

      {/* Terms Content */}
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
                Welcome to the website of Quality Care Senior Living ("Company," "we," "our," or "us"). These Terms of Use govern your access to and use of our website, services, and content. By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use the website.
              </p>
            </div>

            {/* 1. Use of Website */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                1. Use of Website
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                This website is provided for informational purposes only. It is intended to offer general information about Quality Care Senior Living, our services, amenities, and contact options.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                You agree to use this website:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>For lawful purposes only</li>
                <li>In a manner that does not violate any applicable laws or regulations</li>
                <li>Without attempting to disrupt, damage, or interfere with the website's functionality</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3">
                Unauthorized use of this website may result in termination of access and potential legal action.
              </p>
            </div>

            {/* 2. No Medical or Legal Advice */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                2. No Medical or Legal Advice
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                Information provided on this website is not medical, healthcare, or legal advice.
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>Content is for general informational purposes only</li>
                <li>No information on this website should be relied upon as a substitute for professional medical, legal, or healthcare advice</li>
                <li>Residents and families should consult licensed professionals for medical or legal decisions</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3">
                Use of this website does not create a caregiver, provider, or resident relationship.
              </p>
            </div>

            {/* 3. Eligibility */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                3. Eligibility
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                This website is intended for users who are at least 18 years of age. By using this website, you confirm that you meet this requirement.
              </p>
            </div>

            {/* 4. Intellectual Property Rights */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                4. Intellectual Property Rights
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                All content on this website—including but not limited to text, images, graphics, logos, videos, design elements, and trademarks—is the property of Quality Care Senior Living or its licensors and is protected by intellectual property laws.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>Copy, reproduce, distribute, modify, or republish content without written permission</li>
                <li>Use our name, logo, or branding without authorization</li>
                <li>Use website content for commercial purposes without consent</li>
              </ul>
            </div>

            {/* 5. User Submissions & Communications */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                5. User Submissions & Communications
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                If you submit information through our website (including contact forms, inquiries, or emails), you agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>Information provided is accurate and truthful</li>
                <li>We may use the information to respond to your inquiry or provide services</li>
                <li>Submission does not create a contractual or care obligation</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3">
                We reserve the right to review, remove, or disregard submissions that are inappropriate, unlawful, or misleading.
              </p>
            </div>

            {/* 6. Privacy & Data Protection */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                6. Privacy & Data Protection
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                Your use of this website is also governed by our Privacy Policy, which explains how we collect, use, and protect personal information.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                By using this website, you consent to the data practices described in our Privacy Policy.
              </p>
            </div>

            {/* 7. Third-Party Links */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                7. Third-Party Links
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                This website may contain links to third-party websites or services for convenience or informational purposes.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                Quality Care Senior Living:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>Does not control third-party websites</li>
                <li>Is not responsible for their content, policies, or practices</li>
                <li>Does not endorse third-party services unless explicitly stated</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3">
                Access third-party sites at your own risk.
              </p>
            </div>

            {/* 8. Disclaimer of Warranties */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                8. Disclaimer of Warranties
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                This website is provided on an "as is" and "as available" basis.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                We make no warranties or representations regarding:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>Accuracy or completeness of content</li>
                <li>Availability or uninterrupted access</li>
                <li>Freedom from errors, viruses, or security issues</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3">
                To the fullest extent permitted by law, we disclaim all warranties, express or implied.
              </p>
            </div>

            {/* 9. Limitation of Liability */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                9. Limitation of Liability
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                To the maximum extent permitted by Georgia law, Quality Care Senior Living shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>Use or inability to use the website</li>
                <li>Reliance on website content</li>
                <li>Unauthorized access to information</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3">
                Use of the website is at your own risk.
              </p>
            </div>

            {/* 10. Indemnification */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                10. Indemnification
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                You agree to indemnify and hold harmless Quality Care Senior Living, its owners, officers, employees, agents, and affiliates from any claims, liabilities, damages, losses, or expenses arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>Your use of the website</li>
                <li>Violation of these Terms of Use</li>
                <li>Violation of any applicable laws</li>
              </ul>
            </div>

            {/* 11. Governing Law & Jurisdiction */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                11. Governing Law & Jurisdiction
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                These Terms of Use are governed by and interpreted in accordance with the laws of the State of Georgia, without regard to conflict of law principles.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in Georgia.
              </p>
            </div>

            {/* 12. Changes to Terms */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                12. Changes to Terms
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                We reserve the right to update or modify these Terms of Use at any time. Changes will be effective upon posting to this website with a revised effective date.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                Your continued use of the website constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* 13. Termination of Access */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                13. Termination of Access
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                We reserve the right to suspend or terminate access to the website at our discretion, without notice, for violations of these Terms or for any reason deemed necessary to protect our operations or users.
              </p>
            </div>

            {/* 14. Contact Information */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                14. Contact Information
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                If you have questions regarding these Terms of Use, please contact:
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
                  Email: <a href="mailto:info@qualitycareseniorliving.com" className="text-[#887904] hover:underline">info@qualitycareseniorliving.com</a>
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
