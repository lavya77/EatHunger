"use client";

export default function Gallery() {
  const images = [
    { src: "/gallery/home-food.jpg", title: "Home-Cooked Donations" },
    { src: "/gallery/restaurant.jpg", title: "Restaurant Surplus Meals" },
    { src: "/gallery/volunteers.jpg", title: "Volunteers Delivering Food" },
    { src: "/gallery/community.jpg", title: "Community Distribution" },
    { src: "/gallery/kitchen.jpg", title: "Freshly Prepared Meals" },
    { src: "/gallery/support.jpg", title: "Support & Smiles" },
  ];

  return (
    <section className="w-full py-24 bg-[#f4f7f0]">
      <div className="w-[92%] md:w-[85%] mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-700 text-xs tracking-[0.3em] font-semibold">
            GALLERY
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
            Moments That <span className="text-[#356249]">Matter</span>
          </h2>

          <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Real contributions, real people, real impact — captured through our journey.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((img, i) => (
            <div
              key={i}
              className="
                relative group rounded-3xl overflow-hidden
                transition-all duration-500
                shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                hover:-translate-y-2
              "
            >
              {/* Elegant Matcha Frame */}
              <div
                className="
                  absolute inset-0 rounded-3xl
                  bg-gradient-to-br from-[#b5d5a5]/40 to-[#4e7f5a]/40
                  opacity-0 group-hover:opacity-100
                  blur-md transition-all duration-700
                "
              />

              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                className="
                  w-full h-72 object-cover rounded-3xl
                  border-4 border-[#e2f0d7]
                  transition-all duration-700 
                  group-hover:scale-[1.06]
                  group-hover:brightness-90
                "
              />

              {/* Overlay Shade */}
              <div
                className="
                  absolute inset-0 bg-gradient-to-t
                  from-black/45 via-black/20 to-transparent
                  rounded-3xl opacity-90
                "
              />

              {/* Title */}
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                {img.title}
              </div>

              {/* Subtle Metallic Shine */}
              <div
                className="
                  absolute -top-10 -left-10 w-40 h-40 
                  bg-gradient-to-br from-white/40 to-transparent
                  transform rotate-45
                  group-hover:translate-x-64 group-hover:translate-y-64
                  transition-all duration-[1500ms] ease-out
                  pointer-events-none
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
