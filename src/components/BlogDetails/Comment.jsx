import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const comments = [
  {
    name: "Stanio Iainto",
    date: "September 16, 2024",
    text: "Ished fact that a reader will be distrol acted bioii the.ished fact that a reader will be distrol acted laoreet Aliquam fact that a reader will be distrol acted Aliquam eros justo.",
    avatar: "/Comment1.png",
  },
  {
    name: "Court Henry",
    date: "September 16, 2024",
    text: "Ished fact that a reader will be distrol acted bioii the.ished fact that a reader will be distrol acted laoreet Aliquam fact that a reader will be distrol acted Aliquam eros justo.",
    avatar: "/Comment2.png",
  },
];

const Comment = () => {
  return (
    <motion.section
      className="px-0 py-10 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="bg-[#E6F3F0] p-4 rounded-lg flex md:flex-row flex-col md:gap-0 gap-2 items-center justify-between">
        <p className="text-[15px] flex items-center gap-2 text-[#08344E] font-medium">
          <MdOutlineKeyboardDoubleArrowRight />
          Html, Css, Java, Wordpress, Designing
        </p>
        <div className="flex space-x-3 text-gray-600">
          <div className="w-8 h-8 bg-[#08344E] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <FaFacebookF className="text-white" />
          </div>
          <div className="w-8 h-8 bg-[#E6F3F0] border opacity-1 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <FaXTwitter className="text-[#08344E]" />
          </div>
          <div className="w-8 h-8 bg-[#E6F3F0] border opacity-1 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <FaInstagram className="text-[#08344E]" />
          </div>
          <div className="w-8 h-8 bg-[#E6F3F0] border opacity-1 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <FaPinterestP className="text-[#08344E]" />
          </div>
        </div>
      </div>
      <h2 className="mt-10 text-xl md:text-[22px] text-[#191B1A] text-left font-semibold">
        2 Comment
      </h2>
      <div className="mt-4 space-y-6">
        {comments.map((comment, index) => (
          <motion.div
            key={index}
            className="flex gap-4 items-start p-4 border-b border-gray-200"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <img
              src={comment.avatar}
              alt={comment.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="flex md:flex-row flex-col items-center md:gap-5 gap-2 text-base font-semibold text-left text-[#191B1A]">
                {comment.name}{" "}
                <span className="text-[15px] font-medium text-[#5B5B5B]">
                  {comment.date}
                </span>
                <span className="flex space-x-3 text-gray-600">
                  <span className="w-4 h-4 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <FaFacebookF className="text-[#158570]" />
                  </span>
                  <span className="w-4 h-4 border opacity-1 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <FaTwitter className="text-[#158570]" />
                  </span>
                  <span className="w-4 h-4 border opacity-1 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <FaInstagram className="text-[#158570]" />
                  </span>
                </span>
              </p>
              <p className="text-[#5B5B5B] text-[15px] font-medium mt-5 text-left">
                {comment.text}
              </p>
              <p className="text-[#158570] text-[15px] font-semibold text-left mt-2 cursor-pointer hover:underline">
                reply
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Comment;
