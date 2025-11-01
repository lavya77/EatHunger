import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
   <>
    <body>
     <section className="min-h-screen flex justify-start items-center text-center px-6 md:px-8 ">
      <div className="grid grid-cols-1 p-10 w-full h-full ">
        <div className="text-left p-2 ">
         <p className="text-7xl md:text-5xl font-extrabold text-[black drop-shadow-lg">
             Share <span className="text-orange-300"> Food</span> Share <span className="text-red-500"> Love</span>
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

 <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-16 ">
        
</section>
    </body>
   </>
  );
}
