import Image from "next/image";

export default function CaregiversSection() {
  const caregivers = [
    {
      id: 1,
      name: "Employee Name",
      occupation: "Occupation",
      image: "/team/2.png",
    },
    {
      id: 2,
      name: "Employee Name",
      occupation: "Occupation",
      image: "/team/1.png",
    },
    {
      id: 3,
      name: "Employee Name",
      occupation: "Occupation",
      image: "/team/2.png",
    },
    {
      id: 4,
      name: "Employee Name",
      occupation: "Occupation",
      image: "/team/1.png",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            Caregivers
          </h2>
          <div className="w-24 h-1 bg-[#887904] mb-6"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl leading-relaxed">
            Our trained caregivers are committed to providing patient, respectful, and attentive assistance every day. Each team member brings warmth, professionalism, and genuine love for seniors.
          </p>
        </div>

        {/* Caregivers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12">
          {caregivers.map((caregiver) => (
            <div key={caregiver.id} className="text-center">
              {/* Circular Image with Light Background */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-gray-50 rounded-full"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={caregiver.image}
                    alt={caregiver.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name and Occupation */}
              <h3
                className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2 italic"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                {caregiver.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {caregiver.occupation}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Border */}
        <div className="w-full h-px bg-gray-300 mt-8"></div>
      </div>
    </section>
  );
}
