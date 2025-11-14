"use client";

import { motion } from "framer-motion";
import { Coffee, DollarSign, Truck } from "lucide-react"; // valid lucide icons

export default function HowWeWork() {
  const steps = [
    {
      id: 1,
      icon: <Coffee className="w-6 h-6 text-white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />,
      title: "Cook & Donate",
      description:
        "Prepare fresh meals at home or gather unused food from your restaurant and donate to EatHunger.",
      highlight: true,
    },
    {
      id: 2,
      icon: <DollarSign className="w-6 h-6 text-white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />,
      title: "Earn ₹10 per Meal",
      description:
        "Receive ₹10 for each meal donated. Your contribution helps feed those in need while rewarding you.",
      highlight: false,
    },
    {
      id: 3,
      icon: <Truck className="w-6 h-6 text-white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />,
      title: "We Deliver to People in Need",
      description:
        "EatHunger collects the donated meals and distributes them safely to communities and individuals who need them most.",
      highlight: false,
    },
  ];

  return (
    <section className="relative w-full py-24 bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-sm font-semibold text-gray-500 uppercase tracking-wider"
        >
          Home &gt; How We Work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-4xl md:text-5xl font-bold text-gray-900"
        >
          Cook. Donate. Earn.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-500 max-w-2xl mx-auto"
        >
          Donate homemade meals or leftover restaurant orders to EatHunger and get rewarded while helping feed those in need.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop"
            alt="Food donation"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
          <div className="absolute -top-16 -left-16 w-72 h-72 bg-green-200/20 rounded-full blur-3xl -z-10" />
        </motion.div>

        {/* Right Steps */}
        <div className="relative pl-4">
          {/* Vertical line */}
          <div className="absolute left-10 top-8 bottom-0 w-0.5 bg-gray-300 hidden md:block" />

          <div className="flex flex-col gap-16">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative flex gap-6 md:gap-8 group"
              >
                {/* Icon with ₹10 badge */}
                <div className="relative">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-xl shadow-sm transition-all duration-300
                    ${step.highlight ? "bg-green-500 ring-4 ring-green-100" : "bg-gray-400"}`}
                  >
                    {step.icon}
                  </div>
                  {(step.id === 1 || step.id === 2) && (
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-white font-bold rounded-full px-2 py-1 text-xs animate-pulse">
                      ₹10
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className="pt-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connecting steps */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-8 top-16 md:block hidden h-10 w-px bg-green-300"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <a
              href="#donate"
              className="inline-block bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-colors"
            >
              Donate & Earn ₹10
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
