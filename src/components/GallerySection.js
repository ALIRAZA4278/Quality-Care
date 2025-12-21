import Image from "next/image";
import Link from "next/link";

export default function GallerySection() {
  const galleryImages = [
    { id: 1, src: "/home/gallery1.png", alt: "Bedroom with comfortable bed" },
    { id: 2, src: "/home/gallery2.png", alt: "Modern bathroom" },
    { id: 3, src: "/home/gallery3.png", alt: "Spacious closet" },
    { id: 4, src: "/home/gallery4.png", alt: "Cozy bedroom" },
    { id: 5, src: "/home/gallery5.png", alt: "Beautiful backyard" },
    { id: 6, src: "/home/gallery6.png", alt: "Living room with TV" },
    { id: 7, src: "/home/gallery7.png", alt: "Master bedroom" },
    { id: 8, src: "/home/gallery8.png", alt: "Modern kitchen appliances" },
    { id: 9, src: "/home/gallery9.png", alt: "Full kitchen" },
    { id: 10, src: "/home/gallery10.png", alt: "Entertainment room" },
  ];

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16">
          <h3
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 md:mb-4"
            style={{
              fontFamily: "var(--font-aulletta)",
              color: "#887904",
              fontWeight: "400",
            }}
          >
            Our Gallery
          </h3>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-4"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            See Where Comfort and Care Meet
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#887904] mx-auto mt-3 sm:mt-4"></div>
        </div>

        {/* Gallery Grid - Responsive Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[180px] lg:auto-rows-[200px]">
          {/* First image - Large bedroom left (spans 2 rows on desktop, 1 on mobile) */}
          <div className="col-span-2 sm:row-span-2 sm:col-span-2 md:row-span-2 md:col-span-2 lg:row-span-2 lg:col-span-2 relative overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Bathroom */}
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer">
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Closet */}
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer">
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Bedroom right */}
          <div className="relative col-span-2 sm:col-span-1 md:col-span-2 overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer">
            <Image
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Backyard (spans 2 columns) */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2 relative overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer">
            <Image
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Bedroom/Closet */}
          <div className="relative col-span-2 sm:row-span-2 sm:col-span-2 md:row-span-2 md:col-span-2 lg:row-span-2 lg:col-span-2 overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer">
            <Image
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Bedroom */}
          <div className="relative col-span-2 sm:col-span-1 md:col-span-2 overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer">
            <Image
              src={galleryImages[6].src}
              alt={galleryImages[6].alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Bathroom */}
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer">
            <Image
              src={galleryImages[7].src}
              alt={galleryImages[7].alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Kitchen */}
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer">
            <Image
              src={galleryImages[8].src}
              alt={galleryImages[8].alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
        </div>

     
      </div>
    </section>
  );
}
