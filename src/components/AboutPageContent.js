import Image from "next/image";
import Link from "next/link";

export default function AboutPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="About Us"
            fill
            className="object-contain"
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        {/* Logo at Top */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-white rounded-full p-4 shadow-lg">
            <Image
              src="/Logo.png"
              alt="Quality Care Senior Living"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <p className="text-center text-xs text-gray-600 mt-2 uppercase tracking-wide">
            Senior Living
          </p>
        </div>

        {/* Hero Title */}
        <div className="relative z-10 text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            About Us
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-6"></div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <div>
              <h3
                className="text-xl sm:text-2xl mb-3"
                style={{
                  fontFamily: "var(--font-aulletta)",
                  color: "#887904",
                }}
              >
                Our Mission
              </h3>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Connecting Care With Compassion
              </h2>

              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                At Quality Care Senior Living, our mission is simple:
              </p>

              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                to provide compassionate, personalized care in a comfortable home where seniors feel safe, respected, and truly cared for.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We believe every resident deserves dignity, love, and a peaceful environment they can call home.
              </p>
            </div>

            {/* Right - Image with 25+ Years Badge */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about/about1.png"
                  alt="Senior living room"
                  width={600}
                  height={400}
                  className="object-cover w-full"
                />
              </div>

              {/* 25+ Years Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#887904] text-white rounded-2xl p-6 shadow-xl">
                <div
                  className="text-5xl font-bold leading-none mb-2"
                  style={{ fontFamily: "var(--font-recoleta)" }}
                >
                  25+
                </div>
                <div className="text-sm font-medium uppercase">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-[#f8f6f3] py-16 sm:py-20 md:py-24 px-4 sm:px-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about/about2.png"
                  alt="Seniors walking"
                  width={600}
                  height={400}
                  className="object-cover w-full"
                />
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="order-1 lg:order-2">
              <h3
                className="text-xl sm:text-2xl mb-3"
                style={{
                  fontFamily: "var(--font-aulletta)",
                  color: "#887904",
                }}
              >
                About Us
              </h3>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Who We Are
              </h2>

              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                Quality Care Senior Living is a small, one-location personal care home serving families in the Decatur and Atlanta, Georgia area. Because we care for only a limited number of residents at a time, we are able to offer one-on-one support, consistent routines, and meaningful companionship.
              </p>

              <p
                className="text-lg sm:text-xl font-semibold text-gray-900 italic"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                This isn't just a facility — it's a home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Families Choose Us Section */}
      <section className=" py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h3
              className="text-xl sm:text-2xl mb-3"
              style={{
                fontFamily: "var(--font-aulletta)",
                color: "#887904",
              }}
            >
              Why Choose Us
            </h3>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
              style={{ fontFamily: "var(--font-recoleta)" }}
            >
              Why Families Choose Us
            </h2>
            <div className="w-24 h-1 bg-[#887904] mx-auto mt-6"></div>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="/about/image.png"
              alt="Why Families Choose Us"
              width={1200}
              height={600}
              className="object-contain w-full"
            />
          </div>
        </div>
      </section>


    </>
  );
}
