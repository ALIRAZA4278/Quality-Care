import Image from "next/image";
import Link from "next/link";

export default function ServicesPageContent() {
  const services = [
    {
      id: 1,
      image: "/home/services1.png",
      icon: "/home/services-icon1.png",
      title: "Personal Care Assistance",
      description:
        "Help with bathing, grooming, dressing, hygiene, mobility, and toileting — always with dignity and respect.",
    },
    {
      id: 2,
      image: "/home/services2.png",
      icon: "/home/services-icon2.png",
      title: "Medication Reminders",
      description:
        "Daily medication prompts to ensure residents stay consistent and safe.",
    },
    {
      id: 3,
      image: "/home/services3.png",
      icon: "/home/services-icon3.png",
      title: "Nutritious Home-Cooked Meals",
      description:
        "Freshly prepared meals and snacks tailored to dietary needs and personal preferences.",
    },
    {
      id: 4,
      image: "/home/services4.png",
      icon: "/home/services-icon4.png",
      title: "Activities & Companionship",
      description:
        "Light exercise, walks, games, conversations, music, TV time, puzzles, and personal engagement to promote emotional well-being.",
    },
    {
      id: 5,
      image: "/home/services5.png",
      icon: "/home/services-icon5.png",
      title: "Housekeeping & Laundry",
      description:
        "Daily tidying, weekly cleaning, and regular laundry services keep the home clean and comfortable.",
    },
    {
      id: 6,
      image: "/home/services6.png",
      icon: "/home/services-icon6.png",
      title: "Health & Wellness Monitoring",
      description:
        "Daily awareness of changes in behavior, appetite, or mobility. Caregivers provide updates to families as needed.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Services"
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
            Services
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-6"></div>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h3
              className="text-xl sm:text-2xl mb-3"
              style={{
                fontFamily: "var(--font-aulletta)",
                color: "#887904",
              }}
            >
              Our Services
            </h3>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "var(--font-recoleta)" }}
            >
              Supporting Every Day, Every Way
            </h2>
            <div className="w-24 h-1 bg-[#887904] mx-auto mt-6"></div>
            <p className="text-base sm:text-lg text-gray-700 mt-6 max-w-3xl mx-auto">
              At Quality Care Senior Living, we provide essential daily support
              to ensure every resident feels comfortable, cared for, and safe.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-[32px] p-3 relative flex flex-col"
              >
                {/* Image Container with padding and rounded */}
                <div className="relative h-65 sm:h-70 overflow-hidden rounded-[16px] mb-2">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Icon Badge - Overlapping between image and text */}
                <div className="flex justify-center -mt-10 mb-6 relative z-10">
                  <div className="bg-white rounded-full p-4 shadow-lg">
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                      <Image
                        src={service.icon}
                        alt={`${service.title} icon`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center px-2 flex flex-col flex-grow">
                  <h3
                    className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-lg text-gray-700 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="pb-4">
                    <Link
                      href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-block text-[#887904] font-semibold text-base hover:text-[#6a5f03] transition-colors border-b-2 border-[#887904] hover:border-[#6a5f03]"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Book a Tour CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/book-tour"
              className="bg-black text-white pl-8 pr-2 py-3 rounded-full font-semibold hover:bg-gray-800 inline-flex items-center gap-3 transition-colors text-[15px] uppercase tracking-wide"
            >
              Book a Tour
              <div className="bg-white rounded-full p-3 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
