"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aarav Mehta",
      role: "Volunteer, Mumbai",
      quote:
        "EatHunger has completely changed how surplus food is saved. I love contributing because every meal actually reaches someone who needs it.",
      image: "/user1.jpg",
    },
    {
      name: "Cafe Aroma",
      role: "Partner Restaurant",
      quote:
        "We used to waste 8–10 plates daily due to cancellations. Now EatHunger collects it and feeds people. It’s efficient and meaningful.",
      image: "/user2.jpg",
    },
    {
      name: "Sunita Devi",
      role: "Beneficiary",
      quote:
        "My kids now receive fresh meals every evening. I’m grateful for the kindness this platform brings to people like us.",
      image: "/user3.jpg",
    },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#CCE8B5] to-[#A4D081] px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          What People Say About <span className="text-green-700">EatHunger</span>
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mt-4 text-lg">
          Real stories from donors, volunteers, restaurants, and families we serve.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="
              bg-white/40 backdrop-blur-xl 
              border border-white/50
              rounded-3xl p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.2)]
              hover:scale-[1.02] transition-transform
            "
          >
            {/* User */}
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                alt={t.name}
              />
              <div>
                <h3 className="font-bold text-lg text-gray-900">{t.name}</h3>
                <p className="text-gray-600 text-sm">{t.role}</p>
              </div>
            </div>

            {/* Quote */}
            <p className="mt-5 text-gray-800 leading-relaxed text-[15px]">
              “{t.quote}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
