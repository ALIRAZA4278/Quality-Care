"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function HipaaPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] flex items-center justify-center mt-[70px] sm:mt-[80px] md:mt-[90px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="HIPAA Policy"
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
            HIPAA Policy
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-1a"></div>
        </div>
      </section>

      {/* HIPAA Content */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {/* Header */}
            <div className="text-center">
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                HIPAA Notice of Privacy Practices (NPP)
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
                Quality Care Senior Living, LLC
              </p>
            </div>

            {/* Important Notice */}
            <div className="bg-[#f8f6f0] border-l-4 border-[#887904] p-4 sm:p-6">
              <p className="text-xs sm:text-sm md:text-base text-gray-900 font-semibold uppercase">
                THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
              </p>
            </div>

            {/* 1. Our Commitment to Your Privacy */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                1. Our Commitment to Your Privacy
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Quality Care Senior Living ("we," "our," or "us") is committed to protecting the privacy and confidentiality of your health information. This Notice of Privacy Practices explains how we may use and disclose your Protected Health Information (PHI), your rights regarding your information, and our legal obligations under the Health Insurance Portability and Accountability Act (HIPAA).
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold mb-2">
                We are required by law to:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                <li>Maintain the privacy of your PHI</li>
                <li>Provide you with this Notice of our legal duties and privacy practices</li>
                <li>Follow the terms of this Notice currently in effect</li>
              </ul>
            </div>

            {/* 2. What Is Protected Health Information (PHI) */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                2. What Is Protected Health Information (PHI)
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Protected Health Information includes information that:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                <li>Identifies you or could reasonably be used to identify you</li>
                <li>Relates to your health condition, care, or payment for care</li>
                <li>Is created, received, or maintained by Quality Care Senior Living</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3 sm:mt-4">
                PHI may exist in written, electronic, or verbal form.
              </p>
            </div>

            {/* 3. How We May Use and Disclose Your Information */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                3. How We May Use and Disclose Your Information
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                We may use and disclose your PHI without your written authorization for the following purposes:
              </p>

              {/* A. Treatment */}
              <div className="mb-4">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  A. Treatment
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-2">
                  We may use and share your PHI to provide, coordinate, or manage your care.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 italic pl-4">
                  Example: Sharing information with caregivers, nurses, physicians, or other healthcare providers involved in your care.
                </p>
              </div>

              {/* B. Payment */}
              <div className="mb-4">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  B. Payment
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-2">
                  We may use and disclose PHI to bill and collect payment for services provided.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 italic pl-4">
                  Example: Submitting information to insurance providers or payment processors.
                </p>
              </div>

              {/* C. Healthcare Operations */}
              <div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  C. Healthcare Operations
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  We may use PHI for operational purposes such as quality assurance, staff training, licensing, audits, and compliance activities.
                </p>
              </div>
            </div>

            {/* 4. Other Permitted Uses and Disclosures */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                4. Other Permitted Uses and Disclosures
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                We may also use or disclose your PHI for:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                <li>Care coordination and resident safety</li>
                <li>Emergency situations</li>
                <li>Public health activities (as required by law)</li>
                <li>Health oversight activities (licensing, inspections, audits)</li>
                <li>Legal proceedings (court orders, subpoenas)</li>
                <li>Law enforcement purposes (as permitted by law)</li>
                <li>Coroners, medical examiners, and funeral directors</li>
                <li>To avert a serious threat to health or safety</li>
              </ul>
            </div>

            {/* 5. Uses and Disclosures Requiring Your Authorization */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                5. Uses and Disclosures Requiring Your Authorization
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                We will obtain your written authorization before using or disclosing your PHI for:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                <li>Marketing purposes</li>
                <li>Sale of PHI</li>
                <li>Uses not described in this Notice</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3 sm:mt-4">
                You may revoke your authorization at any time in writing, except where we have already relied on it.
              </p>
            </div>

            {/* 6. Your Rights Regarding Your Health Information */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                6. Your Rights Regarding Your Health Information
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    A. Right to Access
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Request to inspect or obtain a copy of your PHI.
                  </p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    B. Right to Amend
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Request corrections to your PHI if you believe it is inaccurate or incomplete.
                  </p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    C. Right to an Accounting of Disclosures
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Request a list of certain disclosures we have made of your PHI.
                  </p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    D. Right to Request Restrictions
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Ask us to limit how we use or disclose your PHI. We are not required to agree to all requests.
                  </p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    E. Right to Request Confidential Communications
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Request that we communicate with you in a specific way or location.
                  </p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    F. Right to a Paper Copy
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Request a paper copy of this Notice at any time.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Our Responsibilities */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                7. Our Responsibilities
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Quality Care Senior Living will:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                <li>Protect your PHI using appropriate safeguards</li>
                <li>Limit access to PHI to authorized personnel only</li>
                <li>Train staff on privacy and confidentiality obligations</li>
                <li>Notify you in the event of a breach involving unsecured PHI</li>
              </ul>
            </div>

            {/* 8. Breach Notification */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                8. Breach Notification
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                In the event of a breach of unsecured PHI, we will notify affected individuals in accordance with HIPAA and applicable state laws, including information on what happened, what information was involved, and steps you can take to protect yourself.
              </p>
            </div>

            {/* 9. Complaints */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                9. Complaints
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                If you believe your privacy rights have been violated, you may file a complaint with:
              </p>
              <div className="bg-[#f8f6f0] p-4 rounded-lg mb-3">
                <p className="text-xs sm:text-sm md:text-base text-gray-900 font-semibold mb-2">
                  Quality Care Senior Living – Privacy Officer
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700">
                  Email: info@qualitycareseniorliving.com
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700">
                  Phone: 1 (678) 910-8466
                </p>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                You may also file a complaint with the U.S. Department of Health and Human Services. Filing a complaint will not result in retaliation.
              </p>
            </div>

            {/* 10. Changes to This Notice */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                10. Changes to This Notice
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                We reserve the right to change this Notice at any time. Any changes will apply to all PHI we maintain. The revised Notice will be made available upon request and posted on our website.
              </p>
            </div>

            {/* 11. Contact Information */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                11. Contact Information
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                If you have questions about this Notice or your privacy rights, contact:
              </p>
              <div className="bg-[#f8f6f0] p-4 sm:p-6 rounded-lg">
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
          </div>
        </div>
      </section>
    </>
  );
}
