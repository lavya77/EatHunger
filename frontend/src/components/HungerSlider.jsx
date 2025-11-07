import React, { useEffect, useRef, useState } from "react";

export default function HungerSlider() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1581579186983-2fe3b1aaef1b",
      title: "Together We Can End Hunger",
      text: "Millions go to bed hungry every night. Let’s stand together to make a difference.",
    },
    {
      image: "https://images.unsplash.com/photo-1615474900155-0b2e0c4b2b2a",
      title: "NGO Volunteers in Action",
      text: "Thousands of volunteers serve food and hope every single day.",
    },
    {
      image: "https://images.unsplash.com/photo-1593113598332-cd15f7b8b7f8",
      title: "Every Meal Counts",
      text: "Your contribution can fill a child’s plate and heart with joy.",
    },
    {
      image: "https://images.unsplash.com/photo-1576765607924-efdc3bce2d5d",
      title: "Be the Change",
      text: "Support organizations that fight hunger with love and compassion.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const autoPlayMs = 5000;         // change timing if you want
  const autoPlay = true;           // turn off by setting to false

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  // Auto-play with pause on hover
  useEffect(() => {
    if (!autoPlay) return;
    const el = sliderRef.current;
    let id = setInterval(next, autoPlayMs);
    const pause = () => clearInterval(id);
    const resume = () => (id = setInterval(next, autoPlayMs));
    el?.addEventListener("mouseenter", pause);
    el?.addEventListener("mouseleave", resume);
    return () => {
      clearInterval(id);
      el?.removeEventListener("mouseenter", pause);
      el?.removeEventListener("mouseleave", resume);
    };
  }, [autoPlayMs, autoPlay]);

  // Keyboard navigation (← →)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      ref={sliderRef}
      className="relative w-full h-screen overflow-hidden bg-black"
      aria-label="Hunger awareness slider"
    >
      {/* Track */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}vw)`,
          width: `${slides.length * 100}vw`,
        }}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className="w-screen h-screen flex-shrink-0 relative"
            style={{
              backgroundImage: `url(${s.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-16 text-white">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
                {s.title}
              </h2>
              <p className="max-w-2xl text-base md:text-lg mb-10 opacity-90">
                {s.text}
              </p>
              <button className="px-8 py-3 rounded-full bg-green-600 hover:bg-green-700 shadow-lg transition">
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="z-20 absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full grid place-items-center text-2xl"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="z-20 absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full grid place-items-center text-2xl"
      >
        ›
      </button>

      {/* Dots */}
      <div className="z-20 absolute bottom-6 w-full flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              current === i ? "w-8 bg-white" : "w-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
