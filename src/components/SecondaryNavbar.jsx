import PropTypes from "prop-types";

const SecondaryNavbar = ({ routeName }) => {
  return (
    <header className="bg-[#EAF4F4]">
      {/* Navbar Section */}
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          {/* Placeholder Logo */}
          <div className="w-8 h-8 bg-[#0A355A] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <span className="text-[#0A355A] font-bold text-lg">TomBiz</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex space-x-8 text-[#0A355A] text-sm font-medium">
          <li className="relative group">
            Home
            <div className="absolute left-0 mt-2 hidden group-hover:block">
              <ul className="bg-white shadow-md p-2 rounded-lg">
                <li className="py-1 px-3 hover:bg-gray-100">Submenu 1</li>
                <li className="py-1 px-3 hover:bg-gray-100">Submenu 2</li>
              </ul>
            </div>
          </li>
          <li>About Us</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Page</li>
          <li>Contact</li>
        </ul>

        {/* Get a Quote Button */}
        <button className="hidden lg:block bg-[#0A355A] text-white py-2 px-6 rounded-full text-sm font-medium hover:bg-[#08426a] transition">
          Get a Quote →
        </button>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button className="text-[#0A355A] text-2xl">☰</button>
        </div>
      </nav>

      {/* Breadcrumb Section */}
      <div className="container mx-auto text-center py-8">
        <h1 className="text-[#0A355A] text-2xl font-bold">{routeName}</h1>
        <p className="text-[#6B7A89] text-sm mt-2">
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
