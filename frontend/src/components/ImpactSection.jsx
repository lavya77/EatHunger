"use client";

import { motion } from "framer-motion";

export default function ImpactSection() {
  return (
    <section className="relative w-full py-28 bg-green-50">
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Our Impact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 max-w-2xl mb-14"
        >
          Every meal served is a step towards a fearless, hunger-free future.
          Together, we’ve transformed thousands of lives.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 mt-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200 hover:shadow-2xl transition-all"
          >
            <h3 className="text-5xl font-extrabold text-[#4CBB17] mb-3">57K+</h3>
            <p className="text-gray-700 text-lg font-medium">
              Meals served to underprivileged communities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200 hover:shadow-2xl transition-all"
          >
            <h3 className="text-5xl font-extrabold text-[#4CBB17] mb-3">120+</h3>
            <p className="text-gray-700 text-lg font-medium">
              Communities impacted across India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200 hover:shadow-2xl transition-all"
          >
            <h3 className="text-5xl font-extrabold text-[#4CBB17] mb-3">2500+</h3>
            <p className="text-gray-700 text-lg font-medium">
              Volunteers helping us fight hunger
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
