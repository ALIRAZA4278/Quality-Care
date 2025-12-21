import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home/bg1.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Side - Text Content */}
        <div className="text-white py-6 sm:py-8 lg:py-10">
          <h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight italic max-w-xl sm:max-w-2xl"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            SCHEDULE A VISIT TODAY AND EXPERIENCE THE DIFFERENCE OF PERSONALIZED SENIOR CARE.
          </h2>

          {/* Yellow underline */}
          <div className="w-16 sm:w-20 h-1 bg-[#887904] mb-5 sm:mb-6 md:mb-8"></div>

          {/* Book a Tour Button */}
          <Link
            href="/book-tour"
            className="bg-white text-black pl-4 sm:pl-6 md:pl-8 pr-2 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold hover:bg-gray-100 inline-flex items-center gap-2 sm:gap-3 transition-colors text-xs sm:text-sm md:text-[15px] uppercase tracking-wide"
          >
            Book a Tour
            <div className="bg-black rounded-full p-2 sm:p-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Right Side - Caregiver Image */}
        <div className="relative top-2 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] flex items-end justify-end">
          <div className="absolute w-full h-full">
            <Image
              src="/home/home1.png"
              alt="Caregiver with senior"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
