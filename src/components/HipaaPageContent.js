"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function HipaaPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] flex items-center justify-center mt-[100px] sm:mt-[120px] md:mt-[140px]">
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
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 uppercase"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            HIPAA Policy
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-6"></div>
        </div>
      </section>

      {/* HIPAA Content */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {/* Resident Privacy Information */}
            <div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Resident Privacy Information
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Sunrise Senior Living is strongly committed to protecting your health information. Our Notice of Privacy Practices describes how we may use and disclose your protected health information to carry out treatment, payment or healthcare operations and for other purposes that are permitted or required by law. It also describes your rights to access and control your protected health information. Protected health information is information about you that may identify you and that relates to your past, present, or future physical or mental health or condition and related healthcare services.
              </p>
            </div>

            {/* HIPAA and What It Means to You */}
            <div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                HIPAA and What It Means to You
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                The Health Insurance Portability and Accountability Act (HIPAA) became a federal law in 1996. HIPAA is complex and has many components. Two major areas addressed by HIPAA include:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
                <li>Privacy: It provides rules regarding how your health information may be used and disclosed.</li>
                <li>Security: It requires specific security measures to protect health information that is sent or stored electronically.</li>
              </ul>
            </div>

            {/* What do you do if you have any questions */}
            <div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                What do you do if you have any questions or would like further information?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                If you have a question about our Notice of Privacy Practices or would like further information, please contact your Executive Director or the Corporate Privacy Officer at the address listed below:
              </p>
              <div className="text-sm sm:text-base md:text-lg text-gray-700 space-y-1">
                <p className="font-semibold">Sunrise Senior Living</p>
                <p>Attn: Corporate Privacy Officer</p>
                <p>7902 Westpark Drive</p>
                <p>McLean, VA 22102</p>
                <p>Phone: 703-273-7500</p>
                <p>Fax: 888-882-3901</p>
              </div>
            </div>

            {/* Below are our Notices of Privacy Practices */}
            <div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 font-semibold mb-2 sm:mb-3">
                Below are our Notices of Privacy Practices:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
                <li>Sunrise Senior Living Notice of Privacy Practices List of Covered Communities</li>
                <li>Quality Care Notice of Privacy Practices</li>
                <li>List of Covered Communities</li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 font-semibold mb-2 sm:mb-3">
                About Us
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
                <li>The Sunrise Story</li>
                <li>Mission & Values</li>
                <li>Leadership</li>
                <li>Locations</li>
                <li>Awards</li>
                <li>Pay Your Bill</li>
                <li>Referral Program</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Careers at Sunrise */}
            <div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 font-semibold mb-2 sm:mb-3">
                Careers at Sunrise
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
                <li>Life at Quality Care</li>
                <li>Benefits at Quality Care</li>
                <li>Hiring Process</li>
                <li>Roles at Quality Care</li>
                <li>For Team Members</li>
                <li>Careers at Quality Care</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="pt-4 sm:pt-6">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                If you have questions regarding these Terms of Use, please contact us at: Email: legal@qualitycare.com Phone: (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
