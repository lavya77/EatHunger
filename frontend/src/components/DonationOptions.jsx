"use client";

import { UtensilsCrossed, Store, Truck } from "lucide-react";

export default function DonationOptions() {
  const options = [
    {
      title: "Donate Home-Cooked Food",
      description:
        "Share fresh meals from your home. Our volunteers collect it quickly and deliver it to families in need.",
      icon: <UtensilsCrossed className="w-10 h-10 text-green-700" />,
      highlight: "Receive ₹10 as a token of appreciation",
    },
    {
      title: "Donate Surplus Restaurant Food",
      description:
        "Restaurants can donate cancelled or unsold meals, reducing waste and helping communities.",
      icon: <Store className="w-10 h-10 text-green-700" />,
      highlight: "Earn ₹10 per meal contribution",
    },
    {
      title: "Volunteer for Pickup & Delivery",
      description:
        "Join our team of verified volunteers to deliver food safely and efficiently across your city.",
      icon: <Truck className="w-10 h-10 text-green-700" />,
      highlight: "Flexible hours + official volunteer certificate",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#d7eaca]">
      <div className="w-[92%] md:w-[85%] mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-700 text-xs tracking-[0.25em] font-semibold">
            HOW YOU CAN SUPPORT
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Choose Your <span className="text-green-700">Contribution Path</span>
          </h2>

          <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you're cooking at home or running a restaurant, every
            contribution helps us feed more people with dignity.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="
                bg-white p-10 rounded-3xl border border-white/40
                shadow-[0_25px_50px_rgba(0,0,0,0.1)]
                hover:shadow-[0_35px_65px_rgba(0,0,0,0.15)]
                transition-all duration-300 hover:-translate-y-2
              "
            >
              {/* Icon */}
              <div className="mb-6">{option.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900">
                {option.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 mt-3 leading-relaxed">
                {option.description}
              </p>

              {/* Highlight */}
              <p className="mt-4 text-green-700 font-semibold">
                {option.highlight}
              </p>

              {/* Button */}
              <button
                className="
                  mt-6 px-6 py-3 bg-green-700 text-white rounded-xl font-semibold
                  hover:bg-green-800 transition
                "
              >
                Start Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
