import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";

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

const Aside = () => {
  return (
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
  );
};

export default Aside;
