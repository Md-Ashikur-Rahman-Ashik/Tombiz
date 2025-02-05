import { motion } from "framer-motion";
import { useState } from "react";
import { IoCall, IoMail } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";

const serviceList = [
  "Peak Performance Partners",
  "Optima Business Advisors",
  "Empowerment Consulting Group",
  "Clarity Consulting Services",
  "Horizon Business Insights",
  "Fusion Growth Advisors",
];

export default function ServiceOverview() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      className="container mx-auto my-10 p-6 flex md:flex-row flex-col gap-7"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Image Section */}
      <div className="md:w-2/3">
        <img
          src="/FinancialManagementImg.jpeg"
          alt="Service Overview"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <h2 className="text-2xl md:text-[35px] my-10 font-semibold text-[#08344E]">
          Service Overview
        </h2>
        <p className="text-[#72777D] text-[15px] font-medium my-5">
          Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere
          viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet
          augue mattis start fermentum ullamcor viverra laoreet By Admin .
          Creativity . 28th February 2022 . Leave a comment viverra laoreet
          augue mattis start fermentum
        </p>
        <p className="text-[#72777D] text-[15px] font-medium">
          Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere
          viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet
          augue mattis start fermentum ullamcor
        </p>
        <p className="font-semibold text-lg my-7 text-[#08344E]">
          Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere
          viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet
        </p>
      </div>

      {/* Content Section */}
      <div className="space-y-6 md:w-1/3">
        {/* Service List */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-[35px] mb-5 font-semibold text-[#08344E]">
            Service lists
          </h3>
          <ul className="space-y-2">
            {serviceList.map((service, index) => (
              <li
                key={index}
                className={`p-4 text-[#08344E] text-lg font-medium rounded-[20px] cursor-pointer flex justify-between items-center border border-gray-300 transition-colors duration-300 ${
                  activeIndex === index ? "bg-[#93FF61]" : "bg-gray-100"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {service}
                <span>&#187;</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="bg-[#E6F3F0] p-6 rounded-[20px]">
          <h3 className="text-xl md:text-[35px] font-semibold text-[#08344E] mb-5">
            Get in Touch
          </h3>
          <p className="text-[#72777D] text-[15px] font-medium flex items-center gap-2">
            <IoCall className="text-sm font-black text-[#08344E]" /> (303)
            555-0105
          </p>
          <p className="text-[#72777D] text-[15px] font-medium flex items-center gap-2">
            <IoMail className="text-sm font-black text-[#08344E]" />{" "}
            bill.sanders@example.com
          </p>
          <p className="text-[#72777D] text-[15px] font-medium flex items-center gap-2">
            <MdAccessTimeFilled className="text-sm font-black text-[#08344E]" />{" "}
            Mon-Sun: 8AM - 5PM
          </p>
        </div>
      </div>
    </motion.section>
  );
}
