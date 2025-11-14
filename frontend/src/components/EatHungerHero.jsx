"use client";

export default function EatHungerHero() {
  return (
    <section className="w-full flex justify-center py-14 bg-[#4CBB17]]">
        
      {/* MAIN CARD */}
      <div className="w-[94%] md:w-[90%] lg:w-[82%] bg-black rounded-3xl shadow-2xl overflow-hidden relative z-10">

        {/* NAV BAR */}
        <div className="flex justify-between items-center px-6 md:px-10 py-6 border-b border-white/10">
          <h2 className="text-white text-xl md:text-2xl font-bold tracking-wide">
            Eat<span className="text-[#4CBB17]">Hunger</span>
          </h2>

          <div className="hidden md:flex items-center gap-8 text-white/80">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Donate</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>

          <button className="bg-[#4CBB17] hover:bg-[#3ea211] text-black font-semibold px-5 py-2 rounded-full text-sm md:text-base">
            Donate Now
          </button>
        </div>

        {/* CONTENT + IMAGE */}
        <div className="flex flex-col md:flex-row">

          {/* LEFT TEXT */}
          <div className="w-full md:w-1/2 px-6 md:px-14 py-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Donate Food &  
              <br />
              <span className="text-[#4CBB17]">Help End Hunger</span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg mb-7 max-w-md">
              EatHunger connects people who want to donate food with trusted NGOs,
              disaster relief teams, and hungry children. Even ₹10 can serve a meal.
            </p>

            <div className="flex items-center gap-3 mt-4">
              <button className="bg-[#4CBB17] hover:bg-[#3ea211] text-black font-semibold px-6 py-3 rounded-full transition-all text-sm md:text-base">
                Donate Now
              </button>

              <button className="border border-[#4CBB17] text-[#4CBB17] hover:bg-[#4CBB17] hover:text-black px-6 py-3 rounded-full transition-all text-sm md:text-base">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT HERO IMAGE */}
          <div className="w-full md:w-1/2 relative min-h-[300px] max-h-[500px] md:max-h-none">
            <img
              src="https://images.pexels.com/photos/6140201/pexels-photo-6140201.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Child"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* SLIDER CONTROLS */}
            <div className="absolute bottom-6 right-6 flex items-center gap-4 text-white z-20">
              <span className="opacity-80 text-sm md:text-base">1 / 3</span>
              <button className="w-9 h-9 md:w-10 md:h-10 border border-white/40 rounded-full flex items-center justify-center hover:bg-white/20">
                ‹
              </button>
              <button className="w-9 h-9 md:w-10 md:h-10 border border-white/40 rounded-full flex items-center justify-center hover:bg-white/20">
                ›
              </button>
            </div>
          </div>

        </div>

        {/* LOWER SECTION */}
        <div className="flex flex-col md:flex-row">

          {/* LEFT THUMBNAIL */}
          <div className="w-full md:w-1/3 relative h-[260px] md:h-[300px] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/6646914/pexels-photo-6646914.jpeg?auto=compress&cs=tinysrgb&w=1200"
              className="w-full h-full object-cover"
            />

            <button className="absolute inset-0 m-auto w-fit h-fit bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white border border-white/40 text-sm md:text-base">
              ▶ Watch Video
            </button>
          </div>

          {/* RIGHT TEXT */}
          <div className="w-full md:w-2/3 bg-black px-6 md:px-10 py-9">
            <h3 className="text-white text-lg md:text-xl font-bold mb-2">
              Bringing Meals to Those in Need
            </h3>
            <p className="text-gray-400 max-w-xl text-sm md:text-base">
              Every small donation helps us deliver food to children, elderly,
              and families who struggle daily for a meal.
            </p>

            <button className="text-[#4CBB17] font-semibold mt-5 hover:text-[#3ea211] text-sm md:text-base">
              Donate Now →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
