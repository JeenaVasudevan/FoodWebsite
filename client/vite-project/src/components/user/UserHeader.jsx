import React from 'react';
import { Link } from "react-router-dom";
import { DarkMode } from "../shared/DarkMode";
import { CircleUser, ShoppingCart } from 'lucide-react';

export const UserHeader = () => {
  return (
    <header className="flex justify-between items-center w-full px-8 h-20 bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg">
      <Link to="/" aria-label="Home">
        <div className="text-4xl font-extrabold text-white transition-transform transform hover:scale-105">Zestora</div>
      </Link>
      <nav className="flex gap-10 items-center font-semibold text-white">
        <Link to="/" className="hover:underline hover:opacity-80" aria-label="Home">Home</Link>
        <Link to="/about" className="hover:underline hover:opacity-80" aria-label="About">About</Link>
        <Link to="/food" className="hover:underline hover:opacity-80" aria-label="Food">Food</Link>
      </nav>
      <div className="flex items-center gap-6 text-white">
        <Link to="/user/cart" className="hover:text-white transition-colors" aria-label="Shopping Cart">
          <ShoppingCart className="w-6 h-6" />
        </Link>
        <Link to="/user/profile" className="hover:text-white transition-colors" aria-label="User Profile">
          <CircleUser className="w-6 h-6" />
        </Link>
        <div aria-label="Toggle Dark Mode">
          <DarkMode className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
    </header>
  );
}
