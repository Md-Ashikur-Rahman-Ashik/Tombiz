import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 mt-10">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            {/* Placeholder for logo */}
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <img src="/TomBizLogo.svg" alt="TomBizLogo" />
            </div>
            <h2 className="text-[30px] font-bold text-[#08344E]">TomBiz</h2>
          </div>
          <p className="mt-4 text-[15px] font-medium text-[#08344E]">
            Many desktop publishing packages web page editors no Lorem Ipsum a
            default model text.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <div className="w-8 h-8 bg-[#93FF61] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <FaFacebookF className="text-[#08344E]" />
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <FaLinkedinIn className="text-[#08344E]" />
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <FaInstagram className="text-[#08344E]" />
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <FaXTwitter className="text-[#08344E]" />
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[22px] text-[#08344E] font-semibold mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-[15px] font-medium text-[#72777D]">
            <li className="hover:underline cursor-pointer">
              Financial Consult
            </li>
            <li className="hover:underline cursor-pointer">Business Managed</li>
            <li className="hover:underline cursor-pointer">Business Analyse</li>
            <li className="hover:underline cursor-pointer">
              Business Security
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-[#08344E]">
          <h3 className="text-[22px] font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-[15px] font-medium">
            <li className="flex items-center space-x-2">
              <IoMdCall className="text-sm text-[#08344E] font-black" />
              <span>+880 123 45 67 89</span>
            </li>
            <li className="flex items-center space-x-2">
              <IoMdMail className="text-sm text-[#08344E] " />
              <span>yourmail@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaLocationDot className="text-sm text-[#08344E]" />
              <span>1212, Lav Vegas, The Veg Street</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto flex md:flex-row flex-col text-center md:text-left items-center justify-between px-4 border-t border-gray-300 mt-8 py-4">
        <p className="text-[15px] font-medium text-[#72777D] mb-4 md:mb-0">
          © Yoursitename 2024 | All Rights Reserved
        </p>
        <div className="flex justify-center space-x-4 text-[#72777D] text-[15px] font-medium">
          <span className="hover:text-black cursor-pointer border-r-2 pr-2">
            Privacy
          </span>
          <span className="hover:text-black cursor-pointer border-r-2 pr-2">
            Terms
          </span>
          <span className="hover:text-black cursor-pointer border-r-2 pr-2">
            Sitemap
          </span>
          <span className="hover:text-black cursor-pointer">Help</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
