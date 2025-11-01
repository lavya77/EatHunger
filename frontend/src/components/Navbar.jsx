import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
<nav class="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg text-white px-10 py-4 flex justify-between items-center border-b border-green-500">
 <Link
  to=""
  className="text-2xl font-extrabold tracking-wider text-green-400 hover:text-green-500 transition duration-300"
>
  EatHunger
</Link>

 
  <div class="hidden md:flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 w-80 shadow-inner shadow-indigo-500/20 focus-within:ring-2 focus-within:ring-indigo-400 transition">
    <input
      type="text"
      placeholder="Search products..."
      class="bg-transparent outline-none text-sm text-white placeholder-indigo-200 flex-grow"
    />
    <button class="text-indigo-300 hover:text-indigo-400 transition">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.2-5.2m1.2-4.8a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
  </div>


  <ul class="hidden md:flex text-black space-x-10 text-sm font-medium">
    <Link to="" className="hover:text-purple-400 transition">
          Home
        </Link>
        <Link to="" className="hover:text-purple-400 transition">
          Products
        </Link>
    <li><a href="#" class="hover:text-indigo-300 transition">About</a></li>
    <li><a href="#" class="hover:text-indigo-300 transition">Contact</a></li>
  </ul>

 
  <button class="md:hidden text-indigo-300 hover:text-indigo-400">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</nav>

  );
}

export default Navbar;