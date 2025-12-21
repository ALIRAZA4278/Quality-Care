import Image from "next/image";

export default function GalleryPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] flex items-center justify-center mt-[100px] sm:mt-[120px] md:mt-[140px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Gallery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        {/* Hero Title */}
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            Gallery
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-6"></div>
        </div>
      </section>

      {/* Gallery Introduction */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3
            className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3"
            style={{
              fontFamily: "var(--font-aulletta)",
              color: "#887904",
            }}
          >
            Gallery
          </h3>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            A warm look into our home
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#887904] mx-auto"></div>
        </div>
      </section>

      {/* Bedrooms Section */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines */}
          <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
            <div className="flex-1 h-px bg-[#887904]"></div>
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap"
              style={{ fontFamily: "var(--font-recoleta)" }}
            >
              Bedrooms
            </h3>
            <div className="flex-1 h-px bg-[#887904]"></div>
          </div>

          {/* Image Grid - 3 columns, 2 rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/1.png"
                alt="Bedroom 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/2.png"
                alt="Bedroom 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/3.png"
                alt="Bedroom 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/4.png"
                alt="Bedroom 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/5.png"
                alt="Bedroom 5"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/6.png"
                alt="Bedroom 6"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Living room Section */}
      <section className="bg-[#f8f8f8] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines */}
          <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
            <div className="flex-1 h-px bg-[#887904]"></div>
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap"
              style={{ fontFamily: "var(--font-recoleta)" }}
            >
              Living room
            </h3>
            <div className="flex-1 h-px bg-[#887904]"></div>
          </div>

          {/* Image Grid - 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/7.png"
                alt="Living room 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/8.png"
                alt="Living room 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/9.png"
                alt="Living room 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dining area Section */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines */}
          <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
            <div className="flex-1 h-px bg-[#887904]"></div>
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap"
              style={{ fontFamily: "var(--font-recoleta)" }}
            >
              Dining area
            </h3>
            <div className="flex-1 h-px bg-[#887904]"></div>
          </div>

          {/* Image Grid - 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/10.png"
                alt="Dining area 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/11.png"
                alt="Dining area 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/12.png"
                alt="Dining area 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Section */}
      <section className="bg-[#f8f8f8] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines */}
          <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
            <div className="flex-1 h-px bg-[#887904]"></div>
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap"
              style={{ fontFamily: "var(--font-recoleta)" }}
            >
              Kitchen
            </h3>
            <div className="flex-1 h-px bg-[#887904]"></div>
          </div>

          {/* Image Grid - 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/13.png"
                alt="Kitchen 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/14.png"
                alt="Kitchen 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/15.png"
                alt="Kitchen 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bathrooms Section */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines */}
          <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
            <div className="flex-1 h-px bg-[#887904]"></div>
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap"
              style={{ fontFamily: "var(--font-recoleta)" }}
            >
              Bathrooms
            </h3>
            <div className="flex-1 h-px bg-[#887904]"></div>
          </div>

          {/* Image Grid - 3 columns, 2 rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/16.png"
                alt="Bathroom 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/17.png"
                alt="Bathroom 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/18.png"
                alt="Bathroom 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/19.png"
                alt="Bathroom 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/20.png"
                alt="Bathroom 5"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/21.png"
                alt="Bathroom 6"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor spaces Section */}
      <section className="bg-[#f8f8f8] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines */}
          <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
            <div className="flex-1 h-px bg-[#887904]"></div>
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap"
              style={{ fontFamily: "var(--font-recoleta)" }}
            >
              Outdoor spaces
            </h3>
            <div className="flex-1 h-px bg-[#887904]"></div>
          </div>

          {/* Image Grid - 3 columns, 2 rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/22.png"
                alt="Outdoor space 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/23.png"
                alt="Outdoor space 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/24.png"
                alt="Outdoor space 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/25.png"
                alt="Outdoor space 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/26.png"
                alt="Outdoor space 5"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/gallery/27.png"
                alt="Outdoor space 6"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
