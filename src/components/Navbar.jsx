import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F3FDF8] px-2 py-6">
      <div className="container mx-auto bg-white rounded-[20px] px-6 py-2 md:px-10 lg:px-20">
        <div className="flex justify-center gap-20 items-center">
          {/* Logo */}
          <div className="text-[30px] font-bold font-plus-jakarta text-[#08344E] flex items-center gap-[10px]">
            <img
              src="/TomBizLogo.svg"
              alt="TomBiz Logo"
              className="w-[40px] h-[40px]"
            />
            TomBiz
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex lg:space-x-8 md:space-x-4 text-[15px] text-[#1A202C] font-medium md:w-full lg:w-auto">
            <li className="hover:text-[#22C55E] flex items-center transition">
              About Us <RiArrowDropDownLine />
            </li>
            <li className="hover:text-[#22C55E] flex items-center transition">
              Services <RiArrowDropDownLine />
            </li>
            <li className="hover:text-[#22C55E] flex items-center transition">
              Blog <RiArrowDropDownLine />
            </li>
            <li className="hover:text-[#22C55E] flex items-center transition">
              Contact <RiArrowDropDownLine />
            </li>
          </ul>

          {/* "Read More" Button */}
          <button className="hidden md:block md:w-1/5 lg:w-auto px-4 py-2 text-[15px] font-semibold bg-[#93FF61] text-[#08344E] rounded-lg shadow-md hover:shadow-lg transition hover:scale-105">
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
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
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
