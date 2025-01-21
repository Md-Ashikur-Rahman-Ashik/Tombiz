import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F3FDF8] px-6 py-4 md:px-10 lg:px-20">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#1A202C] flex items-center">
          <span className="mr-2 text-[#1A202C]">🌟</span>
          TomBiz
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm text-[#1A202C] font-medium">
          <li className="hover:text-[#22C55E] transition">About Us</li>
          <li className="hover:text-[#22C55E] transition">Services</li>
          <li className="hover:text-[#22C55E] transition">Blog</li>
          <li className="hover:text-[#22C55E] transition">Contact</li>
        </ul>

        {/* "Read More" Button */}
        <button className="hidden md:block px-4 py-2 text-sm font-medium bg-[#22C55E] text-white rounded-lg shadow-md hover:shadow-lg transition hover:scale-105">
          Read More
        </button>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-[#1A202C] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-sm text-[#1A202C] font-medium">
          <li className="hover:text-[#22C55E] transition">About Us</li>
          <li className="hover:text-[#22C55E] transition">Services</li>
          <li className="hover:text-[#22C55E] transition">Blog</li>
          <li className="hover:text-[#22C55E] transition">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
