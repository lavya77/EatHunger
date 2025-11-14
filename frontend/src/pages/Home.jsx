import React from "react";
import { Link } from "react-router-dom";
import HungerScroller from "../components/HungerSlider";
import NgoSlider from "../components/NgoSlider";
import EatHungerHero from "../components/EatHungerHero";

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



    </body>
   </>
  );
}
