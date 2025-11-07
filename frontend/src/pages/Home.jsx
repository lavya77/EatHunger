import React from "react";
import { Link } from "react-router-dom";
import HungerScroller from "../components/HungerSlider";
import NgoSlider from "../components/NgoSlider";

export default function Home() {
  return (
   <>
    <body>
     <section className="min-h-screen flex justify-start items-center text-center px-6 md:px-8 ">
      <div className="grid grid-cols-1 p-10 w-full h-full ">
        <div className="text-left p-2 ">
         <p className="text-7xl md:text-5xl font-extrabold text-[black drop-shadow-lg">
             Share <span className="text-orange-400"> Food</span> Share <span className="text-red-500"> Love</span>
    </p>
        </div>
  <div className="text-left bg-[#4CBB17] w-full h-196 rounded-xl p-8 p">
    <p className="text-7xl md:text-8xl p-8 font-extrabold text-[black drop-shadow-lg">
     
      Eat <span className="text-white">Hunger</span>
    </p>
    <div className="bg-white w-full h-96 rounded-xl ">

    </div>
  </div>
  </div>
</section>

<section className="min-h-screen overflow-y-scroll flex flex-col justify-center items-center text-center px-6 md:px-16 bg-gray-50">
  <HungerScroller />
</section>

<div className="my-20">
  <NgoSlider />
</div>

<section className="min-h-screen overflow-y-auto flex flex-col justify-center items-center text-center px-6 md:px-16 bg-gradient-to-b from-orange-50 via-white to-green-50">
  {/* Heading */}
  <div className="mt-16 mb-12 max-w-3xl">
    <h1 className="text-5xl font-extrabold mb-6 text-gray-800 leading-tight tracking-tight">
      Join Hands to <span className="text-green-700">End Hunger</span> 
    </h1>
    <p className="text-lg text-gray-600 leading-relaxed">
      Together we can make a difference. Your kindness helps NGOs bring meals, care,
      and hope to those in need. Every contribution matters.
    </p>
  </div>

  {/* Image Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mb-16">
    {[
      "https://images.unsplash.com/photo-1581579186983-2fe3b1aaef1b",
      "https://images.unsplash.com/photo-1615474900155-0b2e0c4b2b2a",
      "https://images.unsplash.com/photo-1593113598332-cd15f7b8b7f8",
      "https://images.unsplash.com/photo-1576765607924-efdc3bce2d5d",
      "https://images.unsplash.com/photo-1565120130293-3e8c1b4bba06",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    ].map((src, i) => (
      <div
        key={i}
        className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        <img
          src={src}
          alt={`Hunger awareness ${i + 1}`}
          className="object-cover w-full h-80 transform group-hover:scale-110 transition duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
          <span className="text-white text-lg font-semibold">Make a Difference </span>
        </div>
      </div>
    ))}
  </div>

  {/* Call to Action */}
  <div className="mb-20">
    <button className="px-10 py-4 bg-green-600 text-white text-lg rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition-transform duration-300">
      Donate Now
    </button>
    <p className="text-gray-500 mt-4 text-sm">
      100% of your donations go directly to feeding programs.
    </p>
  </div>
</section>

<div className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 tracking-tight">
    Meet Our <span className="text-indigo-600">Founders</span>
  </h2>

  <div className="flex flex-col md:flex-row justify-center items-center gap-14 px-6 md:px-20">
    {/* Founder 1 */}
    <div className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden max-w-sm">
      <div className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1603415526960-f7e0328a08b0?q=80&w=800"
          alt="Founder 1"
          className="w-full h-80 object-cover rounded-t-3xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      <div className="p-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900">Aarav Mehta</h3>
        <p className="text-indigo-600 font-medium mt-1">Co-Founder & CEO</p>
        <div className="w-10 h-1 bg-indigo-600 mx-auto mt-4 mb-5 rounded-full"></div>
        <p className="text-gray-600 text-sm leading-relaxed">
          Aarav leads our mission to eliminate hunger with technology-driven and community-supported
          solutions that bring measurable impact.
        </p>
      </div>
    </div>

    {/* Founder 2 */}
    <div className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden max-w-sm">
      <div className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800"
          alt="Founder 2"
          className="w-full h-80 object-cover rounded-t-3xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      <div className="p-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900">Kavya Singh</h3>
        <p className="text-indigo-600 font-medium mt-1">Co-Founder & Director</p>
        <div className="w-10 h-1 bg-indigo-600 mx-auto mt-4 mb-5 rounded-full"></div>
        <p className="text-gray-600 text-sm leading-relaxed">
          Kavya empowers NGOs across India to collaborate effectively and sustain long-term
          initiatives to end hunger and promote equality.
        </p>
      </div>
    </div>
  </div>
</div>



    </body>
   </>
  );
}
