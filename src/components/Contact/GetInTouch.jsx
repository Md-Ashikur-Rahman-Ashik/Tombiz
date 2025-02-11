import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted!", formData);
    }
  };

  return (
    <motion.section
      className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 p-8 my-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <form onSubmit={handleSubmit} className="w-full lg:w-1/2 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-[20px] placeholder:text-[15px] placeholder:font-medium placeholder:text-[#72777D]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-[20px] placeholder:text-[15px] placeholder:font-medium placeholder:text-[#72777D]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-[20px] placeholder:text-[15px] placeholder:font-medium placeholder:text-[#72777D]"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-[20px] placeholder:text-[15px] placeholder:font-medium placeholder:text-[#72777D]"
          rows="4"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
        <motion.button
          type="submit"
          className="flex items-center justify-center gap-2 bg-[#93FF61] text-[#08344E] font-semibold text-[15px] py-3 px-6 rounded-full shadow-md hover:bg-lime-500 transition"
          whileTap={{ scale: 0.9 }}
        >
          Send a message <FaArrowRight />
        </motion.button>
      </form>
      <div className="w-full lg:w-1/2">
        <span className="text-2xl md:text-[35px] text-[#08344E] font-semibold pb-2 border-b border-[#93FF61]">
          Get in touch
        </span>
        <p className="text-[#72777D] lg:w-2/3 text-[15px] font-medium mt-5">
          It is a long established fact that a reader will be distrol acted
          bioiiy desig the rea dablea contentIt
        </p>
        <div className="mt-7 space-y-2">
          <p className="font-semibold text-[#08344E] text-base">Address</p>
          <p className="text-[15px] font-medium text-[#72777D] lg:w-1/2">
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </p>
          <p className="font-semibold text-[#08344E] text-base">
            Email Address
          </p>
          <p className="text-[15px] font-medium text-[#72777D]">
            nevaeh.simmons@example.com
          </p>
          <p className="font-semibold text-[#08344E] text-base">Phone number</p>
          <p className="text-[15px] font-medium text-[#72777D]">
            (704) 555-0127
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default GetInTouch;
