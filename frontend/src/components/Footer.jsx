"use client";

import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1f3b2f] text-white pt-20 pb-10">
      
      {/* Top Section */}
      <div className="w-[92%] md:w-[85%] mx-auto grid md:grid-cols-4 gap-14">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">EatHunger</h2>
          <p className="mt-4 text-gray-300 leading-relaxed max-w-sm">
            Rescuing surplus food and delivering it to those who need it most.
            Together, we ensure no meal is wasted and no one sleeps hungry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white transition">About Us</li>
            <li className="hover:text-white transition">Donate Food</li>
            <li className="hover:text-white transition">Volunteer</li>
            <li className="hover:text-white transition">Gallery</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-bold mb-4">Get Support</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-300" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-300" /> support@eathunger.org
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-green-300" />
              <span>
                EatHunger HQ, Mumbai<br />
                Maharashtra, India
              </span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-4">
            Subscribe to receive updates on food drives, community events, and impact stories.
          </p>

          <div className="flex items-center bg-white/10 rounded-xl overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white px-4 py-3 outline-none w-full placeholder-gray-300"
            />
            <button className="px-5 py-3 bg-green-600 hover:bg-green-700 transition font-semibold">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full mt-14 border-t border-white/20"></div>

      {/* bottom */}
      <div className="w-[92%] md:w-[85%] mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-6">

        <p className="text-gray-300 text-sm">
          © {new Date().getFullYear()} EatHunger. All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex gap-6">
          <Facebook className="w-6 h-6 text-gray-300 hover:text-white transition cursor-pointer" />
          <Instagram className="w-6 h-6 text-gray-300 hover:text-white transition cursor-pointer" />
          <Linkedin className="w-6 h-6 text-gray-300 hover:text-white transition cursor-pointer" />
        </div>
      </div>

    </footer>
  );
}
