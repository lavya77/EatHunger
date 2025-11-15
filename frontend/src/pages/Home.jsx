import React from "react";
import { Link } from "react-router-dom";
import HungerScroller from "../components/HungerSlider";
import NgoSlider from "../components/NgoSlider";
import EatHungerHero from "../components/EatHungerHero";
import AboutSection from "../components/AboutSection";
import ImpactSection from "../components/ImpactSection";
import HowWeWork from "../components/HowWeWork";
import FeaturedStories from "../components/FeaturedStories";
import DonationOptions from "../components/DonationOptions";
import Gallery from "../components/Gallery";
import TestimonialsSection from "../components/TestimonialSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
   <>
    <body>
   <section className="relative w-full min-h-screen bg-[#4CBB17] overflow-hidden flex items-center justify-center px-4">

  {/* Hero Component */}
  <div className="relative z-10 w-full flex items-center justify-center py-10">
    <EatHungerHero />
  </div>

</section>
 <section className="relative w-full bg-white overflow-hidden flex items-center justify-center px-4">
  <AboutSection />
</section>

 <section className="relative w-full bg-white overflow-hidden flex items-center justify-center px-4">
  <ImpactSection />
</section>

 <section className="relative w-full bg-white overflow-hidden flex items-center justify-center px-4">
  <HowWeWork />
</section>

 <section className="relative w-full bg-white overflow-hidden flex items-center justify-center px-4">
  <FeaturedStories />
</section>

 <section className="relative w-full bg-white overflow-hidden flex items-center justify-center px-4">
  <DonationOptions />
</section>

 <section className="relative w-full bg-white overflow-hidden flex items-center justify-center px-4">
  <Gallery />
</section>

<section className="relative w-full bg-white overflow-hidden flex items-center justify-center px-4">
  <TestimonialsSection/>
</section>

<section className="relative w-full bg-white overflow-hidden flex items-center justify-center px-4">
  <Footer/>
</section>

    </body>
   </>
  );
}
