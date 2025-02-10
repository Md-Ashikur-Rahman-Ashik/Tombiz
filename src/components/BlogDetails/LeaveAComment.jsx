import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const LeaveAComment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
    }
  };

  return (
    <motion.section
      className="w-full container mx-auto p-6 text-left"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <h2 className="text-3xl md:text-[40px] font-bold text-[#08344E]">
        Leave a comment
      </h2>
      <p className="text-[#08344E] text-[15px] font-medium mt-8">
        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
        posuere viverra .Aliquam eros justo, posuere lobortis non, viverra
        laoreet augue mattis fermentum
      </p>
      <form onSubmit={handleSubmit} className="mt-7 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded-full focus:ring focus:ring-blue-300 placeholder:text-[#08344E] placeholder:text-[15px] placeholder:font-medium"
              value={formData.name}
              onChange={handleChange}
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
              className="w-full p-3 border rounded-full focus:ring focus:ring-blue-300 placeholder:text-[#08344E] placeholder:text-[15px] placeholder:font-medium"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Write your message"
            className="w-full p-3 border rounded-[20px] focus:ring focus:ring-blue-300 placeholder:text-[#08344E] placeholder:text-[15px] placeholder:font-medium"
            rows="8"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <motion.button
          type="submit"
          className="flex items-center gap-2 px-6 py-3 bg-[#93FF61] hover:text-white rounded-full font-semibold hover:bg-green-500 transition text-[#08344E]"
          whileTap={{ scale: 0.9 }}
        >
          Submit Now <FaArrowRight />
        </motion.button>
      </form>
    </motion.section>
  );
};

export default LeaveAComment;
