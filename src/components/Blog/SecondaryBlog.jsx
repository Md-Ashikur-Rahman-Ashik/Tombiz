import { motion } from "framer-motion";
import { CiUser } from "react-icons/ci";
import {
  FaArrowRight,
  FaRegComments,
  FaRegFolderOpen,
  FaSearch,
} from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";

const blogData = [
  {
    id: 1,
    title: "A mindfulness companion that offers guided Consulting Business",
    description:
      "Miquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis in non, viverra laoreet augue mattis start fermentum ullamcor viverra laoreet By Admin . Creativity . 29th Februarym 2022 . Leave a comment viverra laoreet augue mattis start fermentum ",
    author: "By Admin",
    category: "Category",
    comments: "05",
    image: "/ProvenImg3.jpeg",
  },
  {
    id: 2,
    title: "A mindfulness companion that offers guided Consulting Business",
    description:
      "Miquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis in non, viverra laoreet augue mattis start fermentum ullamcor viverra laoreet By Admin . Creativity . 29th Februarym 2022 . Leave a comment viverra laoreet augue mattis start fermentum ",
    author: "By Admin",
    category: "Category",
    comments: "12",
    image: "/BusinessPlannerImg.jpeg",
  },
  {
    id: 3,
    title: "Building Stronger Opportunity Businesses Together",
    description:
      "Miquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis in non, viverra laoreet augue mattis start fermentum ullamcor viverra laoreet By Admin . Creativity . 29th Februarym 2022 . Leave a comment viverra laoreet augue mattis start fermentum ",
    author: "By Admin",
    category: "Category",
    comments: "08",
    image: "/TeamWork.jpeg",
  },
  {
    id: 4,
    title: "Transforming Challenges into Opportunities",
    description:
      "Miquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis in non, viverra laoreet augue mattis start fermentum ullamcor viverra laoreet By Admin . Creativity . 29th Februarym 2022 . Leave a comment viverra laoreet augue mattis start fermentum ",
    author: "By Admin",
    category: "Category",
    comments: "09",
    image: "/SuccessStoryImg2.png",
  },
  {
    id: 5,
    title: "Strategic Insights Challenges Lasting Success",
    description:
      "Miquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis in non, viverra laoreet augue mattis start fermentum ullamcor viverra laoreet By Admin . Creativity . 29th Februarym 2022 . Leave a comment viverra laoreet augue mattis start fermentum ",
    author: "By Admin",
    category: "Category",
    comments: "14",
    image: "/TeamWork2.png",
  },
];

const SecondaryBlog = () => {
  return (
    <motion.section
      className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="lg:col-span-2">
        <div className="flex flex-col space-y-8">
          {blogData.map((blog) => (
            <motion.div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-96 object-cover rounded-md mb-4"
              />
              <div className="flex items-center text-gray-500 text-sm space-x-4 mb-2">
                <span className="flex items-center gap-1">
                  <CiUser /> {blog.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaRegFolderOpen /> {blog.category}
                </span>
                <span className="flex items-center gap-1">
                  <FaRegComments /> {`Comments (${blog.comments})`}
                </span>
              </div>
              <h3 className="text-xl md:text-[35px] leading-10 text-[#08344E] font-semibold mb-4">
                {blog.title}
              </h3>
              <p className="text-[#08344E] text-[15px] font-medium mb-4">
                {blog.description}
              </p>
              <div>
                <button className="hidden lg:flex gap-2 items-center text-[#08344E] border border-[#08344E] py-5 px-7 rounded-full text-[15px] font-semibold hover:bg-[#08426a] hover:text-white transition font-inter">
                  Read More <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <aside className="lg:col-span-1 space-y-6">
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
      </aside>
    </motion.section>
  );
};

export default SecondaryBlog;
