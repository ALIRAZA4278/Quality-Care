import Image from "next/image";

export default function AccessibilityPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Accessibility Statement"
            fill
            className="object-contain"
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        {/* Hero Title */}
        <div className="relative z-10 text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            Accessibility Statement
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-6"></div>
        </div>
      </section>

      {/* Accessibility Content */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Quality Care is committed to its policy that persons with disabilities have a full and equal opportunity to benefit from the goods, services, privileges, advantages, and accommodations offered by Quality Care. In keeping with that policy, Sunrise Senior Living has implemented and maintains compliance with the relevant portions of the World Wide Web Consortium's Web Content Accessibility Guidelines 2.0 Level AA (WCAG 2.0 AA) as well as state and federal accessibility requirements.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              As part of this commitment, we are continually improving our website to make it more accessible. If you encounter any difficulty using our website, have suggestions about improving the usability or accessibility of the website, or would like to know more about Quality Care commitment to accessibility, please contact our accessibility team by email using the contact information below.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Email: quality@qualitycare.com
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Phone: 703-273-7500 (request to speak with our legal department)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
