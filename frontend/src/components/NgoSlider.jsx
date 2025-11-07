import React from "react";

export default function NgoSlider() {
  const ngos = [
    {
      name: "Feeding India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Feeding_India_logo.png",
    },
    {
      name: "Akshaya Patra",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/47/Akshaya_Patra_Foundation_Logo.png",
    },
    {
      name: "No Hungry Child",
      logo: "https://www.nohungrychild.in/assets/img/logo.png",
    },
    {
      name: "Robin Hood Army",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/Robin_Hood_Army_Logo.png",
    },
    {
      name: "ShareTheMeal",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/d2/ShareTheMeal_logo.png",
    },
    {
      name: "Food For Life",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/d5/Food_for_Life_Global_logo.png",
    },
  ];

  // Duplicate logos for seamless infinite scroll
  const doubledNgos = [...ngos, ...ngos];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-16 text-center overflow-hidden">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 tracking-tight">
        Trusted by Leading <span className="text-green-600">NGOs</span> Worldwide 
      </h2>
      <p className="text-gray-600 mb-10">
        Together, we fight hunger and bring hope to thousands of lives.
      </p>

      {/* Slider */}
      <div className="relative group overflow-hidden">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] gap-8">
          {doubledNgos.map((ngo, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center bg-white rounded-2xl shadow-md p-6 w-56 h-56 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <img
                src={ngo.logo}
                alt={ngo.name}
                className="w-24 h-24 object-contain mb-4 transition-transform duration-500 group-hover:scale-105"
              />
              <h3 className="text-sm font-semibold text-gray-700">{ngo.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <p className="text-gray-500 mt-8 text-sm">
        {ngos.length}+ NGOs have partnered with us to create lasting change 
      </p>

      {/* Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
