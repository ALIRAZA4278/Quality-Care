import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen lg:h-[120vh] mt-[60px] sm:mt-[70px] md:mt-0">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/home/hero.png"
          alt="Happy senior couple"
          fill
          className="object-cover w-full h-full"
          style={{ objectPosition: "center" }}
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col items-center justify-center md:pt-32 lg:pt-64 md:justify-start text-center">
        {/* Golden Script Text */}
        <h2
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 sm:mb-3"
          style={{
            fontFamily: "var(--font-aulletta)",
            color: "#887904",
            fontWeight: "400",
          }}
        >
          Quality Care Senior Living
        </h2>

        {/* Main Heading */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-3 sm:mb-4 md:mb-5 max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-7xl leading-tight px-4"
          style={{ fontFamily: "var(--font-recoleta)" }}
        >
          A Safe, Loving Home for Your Loved One
        </h1>

        {/* Description Text */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mb-4 sm:mb-6 md:mb-8 leading-relaxed px-4 sm:px-6 md:px-8">
          Located at 2033 Sombrero Way SE, Atlanta, GA 30316, we provide
          professional, compassionate personal care in a peaceful residential
          setting where every resident is truly treated like family.
        </p>

        {/* Book a Tour Button */}
        <Link
          href="/book-tour"
          className="bg-[#1a1a1a] text-white pl-4 sm:pl-6 md:pl-8 pr-2 py-2 sm:py-2.5 rounded-full font-medium hover:bg-gray-800 inline-flex items-center gap-2 sm:gap-3 md:gap-4 transition-colors text-xs sm:text-sm md:text-[15px]"
        >
          BOOK A TOUR
          <div className="bg-white rounded-full p-2 sm:p-3 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a1a1a"
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
    </section>
  );
}
