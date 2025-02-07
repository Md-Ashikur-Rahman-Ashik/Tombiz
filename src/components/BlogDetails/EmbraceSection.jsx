import { motion } from "framer-motion";
import { CiUser } from "react-icons/ci";
import { FaRegComments, FaRegFolderOpen } from "react-icons/fa";
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

const EmbraceSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
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
          <motion.section
            className="w-full px-6 py-16 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div className="mx-auto text-center">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700 italic">
                  {`"With a commitment to driving technological evolution, our IT
                  solutions and design services are the cornerstone of your
                  digital progression. We do not transcend boundaries; we enable
                  businesses."`}
                </p>
                <h3 className="mt-4 text-lg font-semibold">Stanio Iainto</h3>
                <p className="text-sm text-gray-500">Authore</p>
              </div>
              <p className="mt-6 text-gray-600 text-sm">
                Aliquam eros justo, posuere loborti viverra laoreet matti
                ullamcorper posuere viverra.
              </p>
              <h2 className="mt-8 text-2xl font-bold text-gray-900">
                Revolutionize Your Business with Consult
              </h2>
              <p className="mt-4 text-gray-600 text-sm">
                Aliquam eros justo, posuere loborti viverra laoreet matti
                ullamcorper posuere viverra. Aliquam eros justo posuere
                lobortis.
              </p>
              <ul className="mt-6 space-y-2 text-left text-gray-700">
                <li className="flex items-start gap-2">
                  ✅ Artificial Intelligence is a rapidly advancing field that
                  focuses on creating intelligent machines capable
                </li>
                <li className="flex items-start gap-2">
                  ✅ It encompasses areas such as machine learning, natural
                  language processing
                </li>
                <li className="flex items-start gap-2">
                  ✅ Natural language processing, computer vision, and robotics
                </li>
                <li className="flex items-start gap-2">
                  ✅ AI Transforming the Way We Live and Work Discover the Magic
                  of AI
                </li>
              </ul>
              <p className="mt-6 text-gray-600 text-sm">
                Aliquam eros justo, posuere loborti viverra laoreet matti
                ullamcorper posuere viverra.
              </p>
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
