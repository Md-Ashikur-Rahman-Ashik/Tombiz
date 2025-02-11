import PropTypes from "prop-types";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const SecondaryNavbar = ({ routeName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#EAF4F4]">
      {/* Navbar Section */}
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0 border-b-2 border-[#C3CBDF]">
        {/* Logo */}
        <div>
          <Link
            to={"/"}
            className="text-[30px] font-bold text-[#08344E] flex items-center gap-[10px]"
          >
            <img
              src="/TomBizLogo.svg"
              alt="TomBiz Logo"
              className="w-[40px] h-[40px]"
            />
            TomBiz
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex space-x-8 text-[#08344E] text-[15px] font-medium">
          <li>
            <NavLink
              to={"/"}
              className="hover:text-[#22C55E] flex items-center transition"
            >
              Home <RiArrowDropDownLine />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about-us"}
              className={({ isActive }) =>
                `hover:text-[#22C55E] flex items-center transition ${
                  isActive ? "font-bold text-[#22C55E]" : ""
                }`
              }
            >
              About Us <RiArrowDropDownLine />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/services"}
              className={({ isActive }) =>
                `hover:text-[#22C55E] flex items-center transition ${
                  isActive ? "font-bold text-[#22C55E]" : ""
                }`
              }
            >
              Services <RiArrowDropDownLine />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `hover:text-[#22C55E] flex items-center transition ${
                  isActive ? "font-bold text-[#22C55E]" : ""
                }`
              }
            >
              Projects <RiArrowDropDownLine />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blog"}
              className={({ isActive }) =>
                `hover:text-[#22C55E] flex items-center transition ${
                  isActive ? "font-bold text-[#22C55E]" : ""
                }`
              }
            >
              Blog <RiArrowDropDownLine />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `hover:text-[#22C55E] flex items-center transition ${
                  isActive ? "font-bold text-[#22C55E]" : ""
                }`
              }
            >
              Page <RiArrowDropDownLine />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `hover:text-[#22C55E] flex items-center transition ${
                  isActive ? "font-bold text-[#22C55E]" : ""
                }`
              }
            >
              Contact <RiArrowDropDownLine />
            </NavLink>
          </li>
        </ul>

        {/* Get a Quote Button */}
        <button className="hidden lg:flex gap-2 items-center bg-[#08344E] text-white py-5 px-7 rounded-full text-[15px] font-medium hover:bg-[#08426a] transition font-inter">
          Get a Quote <FaArrowRight />
        </button>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            className="text-[#0A355A] text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden px-4 mt-4 space-y-4 text-sm text-[#1A202C] font-medium">
          <li>
            <NavLink to={"/"} className="hover:text-[#22C55E] transition">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about-us"}
              className={({ isActive }) =>
                `hover:text-[#22C55E] transition ${
                  isActive ? "font-bold text-[#22C55E]" : ""
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/services"}
              className={({ isActive }) =>
                `hover:text-[#22C55E] flex items-center transition ${
                  isActive ? "font-bold text-[#22C55E]" : ""
                }`
              }
            >
              Services <RiArrowDropDownLine />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `hover:text-[#22C55E] flex items-center transition ${
                  isActive ? "font-bold text-[#22C55E]" : ""
                }`
              }
            >
              Projects <RiArrowDropDownLine />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blog"}
              className={({ isActive }) =>
                `hover:text-[#22C55E] flex items-center transition ${
                  isActive ? "font-bold text-[#22C55E]" : ""
                }`
              }
            >
              Blog <RiArrowDropDownLine />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `hover:text-[#22C55E] flex items-center transition ${
                  isActive ? "font-bold text-[#22C55E]" : ""
                }`
              }
            >
              Page <RiArrowDropDownLine />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `hover:text-[#22C55E] flex items-center transition ${
                  isActive ? "font-bold text-[#22C55E]" : ""
                }`
              }
            >
              Contact <RiArrowDropDownLine />
            </NavLink>
          </li>
        </ul>
      )}

      {/* Breadcrumb Section */}
      <div className="container mx-auto text-center py-32">
        <h1 className="text-[#08344E] md:text-[40px] text-2xl font-bold">
          {routeName}
        </h1>
        <p className="text-[#08344E] text-lg mt-5">
          Home <span className="mx-1">›</span> {routeName}
        </p>
      </div>
    </header>
  );
};

// Add PropTypes validation
SecondaryNavbar.propTypes = {
  routeName: PropTypes.string.isRequired, // Validate routeName as a required string
};

export default SecondaryNavbar;
