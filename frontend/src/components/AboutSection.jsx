"use client";

export default function AboutSection() {
  return (
    <section className="w-full flex justify-center py-24 bg-white ">
      <div className="relative w-[94%] md:w-[90%] lg:w-[85%] rounded-3xl overflow-hidden ">

        {/* LARGE IMAGE BACKGROUND */}
        <div className="w-full h-[450px] md:h-[520px] ">
          <img
            src="/about-big.jpg"
            alt="About Section"
            className="w-full h-full object-cover inverted-radius"
          />
        </div>

        {/* FLOATING LEFT CONTENT CARD */}
        <div className="
          absolute top-12 md:top-20 left-8 md:left-16
          bg-white/40 backdrop-blur-2xl
          p-10 md:p-14 rounded-3xl 
          max-w-[520px]
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          border border-white/40
        ">
          
          {/* Tag */}
          <span className="text-xs md:text-sm tracking-[0.2em] font-semibold text-green-700">
            OUR MISSION
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-snug tracking-tight">
            Ending Hunger Through  
            <span className="text-green-600"> Food Rescue & Care.</span>
          </h2>

          {/* Description */}
          <p className="text-gray-700 mt-5 text-[16px] leading-relaxed">
            EatHunger rescues fresh surplus food from restaurants, events, and
            homes — and transforms it into reliable meals for children,
            elderly citizens, and struggling families.
          </p>

          <p className="text-gray-600 mt-3 text-[16px] leading-relaxed">
            With a nationwide volunteer network, tech-driven logistics, and
            real-time meal tracking, we ensure that every donation creates a  
            powerful and measurable impact.
          </p>

          {/* Stats */}
          <div className="flex gap-10 mt-8">
            <div>
              <h3 className="text-3xl font-bold text-green-700">50K+</h3>
              <p className="text-gray-100 text-sm mt-1">Meals Delivered</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-700">10K+</h3>
              <p className="text-gray-100 text-sm mt-1">Families Supported</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-700">700+</h3>
              <p className="text-gray-100 text-sm mt-1">Active Volunteers</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="px-7 py-3.5 bg-green-700 text-white rounded-xl font-semibold hover:bg-green-800 transition">
              Learn More
            </button>
            <button className="px-7 py-3.5 border border-white text-white rounded-xl font-semibold hover:bg-green-800/30 transition">
              Our Vision
            </button>
          </div>
        </div>

      </div>

      {/* INVERTED RADIUS */}
      <style jsx>{`
        .inverted-radius {
          --r: 80px;
          --s: 80px;
          --x: 80px;
          --y: 70px;

          border-radius: var(--r);
          width: 100%;
          height: 100%;
          object-fit: cover;

          --_m:/calc(2 * var(--r)) calc(2 * var(--r))
            radial-gradient(#000 70%, #0000 72%);
          --_g: conic-gradient(
            from 90deg at calc(100% - var(--r)) calc(100% - var(--r)),
            #0000 25%,
            #000 0
          );
          --_d: calc(var(--s) + var(--r));

          mask:
            calc(100% - var(--_d) - var(--x)) 100% var(--_m),
            100% calc(100% - var(--_d) - var(--y)) var(--_m),
            radial-gradient(var(--s) at 100% 100%, #0000 99%, #000 calc(100% + 1px))
              calc(-1 * var(--r) - var(--x)) calc(-1 * var(--r) - var(--y)),
            var(--_g) calc(-1 * var(--_d) - var(--x)) 0,
            var(--_g) 0 calc(-1 * var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
      `}</style>
    </section>
  );
}
