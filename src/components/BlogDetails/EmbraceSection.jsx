import { motion } from "framer-motion";
import { CiUser } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaRegComments,
  FaRegFolderOpen,
  FaTwitter,
} from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  MdDoubleArrow,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import Revolution from "./Revolution";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const newsItems = [
  {
    date: "Dec 12, 2024",
    title: "Experience innovation the with consulting",
    image: "/NewsImg1.png",
  },
  {
    date: "Dec 12, 2024",
    title: "Say goodbye traditional consulting",
    image: "/NewsImg2.png",
  },
  {
    date: "Dec 12, 2024",
    title: "Streamline your the an consulting",
    image: "/NewsImg3.png",
  },
];

const tags = [
  "All Project",
  "Automac",
  "saas Tech",
  "Mobile saas",
  "ServicePro",
];

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

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const EmbraceSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }} // Reduced amount for mobile triggers
      className="container mx-auto px-4 py-10 md:py-16 lg:py-20"
    >
      <div className="flex lg:flex-row flex-col-reverse gap-8">
        <div className="mx-auto text-center lg:w-2/3">
          <img
            src="/BlogDetails.jpeg"
            alt="Consulting Business"
            className="w-full h-96 object-cover rounded-md mb-4"
          />
          <div className="flex md:flex-row flex-col md:items-center text-gray-500 text-sm md:space-x-4 mb-5">
            <span className="flex items-center gap-1">
              <CiUser /> By admin
            </span>
            <span className="flex items-center gap-1">
              <FaRegFolderOpen /> Category
            </span>
            <span className="flex items-center gap-1">
              <FaRegComments /> Comments (05)
            </span>
          </div>
          <h3 className="text-xl md:text-[40px] md:leading-10 text-[#08344E] font-bold mb-10 lg:w-2/3 text-left">
            Embrace the Future of the Consulting Business
          </h3>
          <p className="text-[#72777D] text-left text-[15px] font-medium mb-4">
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros just posuere lobortis,
            viverra laoreet augue mattis fermentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            non, viverra laoree augue mattis.Aliquam eros justo, posuere loborti
            viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
            justo posuere lobortis, viverra laoreet augue mattis fermentum
          </p>

          {/* Second Section */}
          <Revolution />
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
        </div>
        <aside className="lg:col-span-1 space-y-6 lg:w-1/3">
          <div className="bg-white p-6 border rounded-xl">
            <span className="text-[22px] text-[#08344E] font-semibold pb-2 border-b border-[#08344E]">
              Search
            </span>
            <div className="flex items-center mt-8">
              <input
                type="text"
                placeholder="Enter search"
                className="w-full p-4 border-2 focus:outline-none rounded-full"
              />
              <FaSearch className="-ml-14 rounded-r-3xl bg-[#93FF61] w-14 h-14 p-4" />
            </div>
          </div>
          <div className="bg-white p-6 border rounded-xl">
            <span className="text-[22px] text-[#08344E] font-semibold pb-2 border-b border-[#08344E]">
              Category
            </span>
            <ul className="space-y-2 mt-8 text-[15px] text-[#08344E] font-medium">
              <li className="cursor-pointer flex items-center gap-2">
                <MdDoubleArrow /> Blog (1)
              </li>
              <li className="cursor-pointer flex items-center gap-2">
                <MdDoubleArrow /> AI-Generated
              </li>
              <li className="cursor-pointer flex items-center gap-2">
                <MdDoubleArrow /> Featured (6)
              </li>
              <li className="cursor-pointer flex items-center gap-2">
                <MdDoubleArrow /> Business (8)
              </li>
              <li className="cursor-pointer flex items-center gap-2">
                <MdDoubleArrow /> News (4)
              </li>
              <li className="cursor-pointer flex items-center gap-2">
                <MdDoubleArrow /> Ideas (7)
              </li>
              <li className="cursor-pointer flex items-center gap-2">
                <MdDoubleArrow /> Post Types (6)
              </li>
              <li className="cursor-pointer flex items-center gap-2">
                <MdDoubleArrow /> Top Rated (2)
              </li>
              <li className="cursor-pointer flex items-center gap-2">
                <MdDoubleArrow /> Trends (5)
              </li>
              <li className="cursor-pointer flex items-center gap-2">
                <MdDoubleArrow /> Style (9)
              </li>
              <li className="cursor-pointer flex items-center gap-2">
                <MdDoubleArrow /> Technology (6)
              </li>
            </ul>
          </div>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6 mx-auto"
          >
            <motion.div
              variants={fadeInVariants}
              className="bg-white p-4 border rounded-xl"
            >
              <span className="text-[22px] text-[#08344E] font-semibold pb-2 border-b border-[#08344E]">
                Recent News
              </span>
              <div className="space-y-4 mt-4">
                {newsItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInVariants}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition"
                  >
                    <img
                      src={item.image}
                      alt="News"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-xs text-[#72777D]">{item.date}</p>
                      <p className="text-lg font-semibold text-[#08344E]">
                        {item.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInVariants}
              className="bg-white p-4 border rounded-xl"
            >
              <span className="text-[22px] text-[#08344E] font-semibold pb-2 border-b border-[#08344E]">
                Tags
              </span>
              <div className="flex flex-wrap gap-2 mt-8">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-[15px] font-medium text-[#08344E] border rounded-full hover:bg-gray-200 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.section>
        </aside>
      </div>
    </motion.section>
  );
};

export default EmbraceSection;
