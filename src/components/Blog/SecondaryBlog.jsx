import { motion } from "framer-motion";
import { CiUser } from "react-icons/ci";
import { FaArrowRight, FaRegComments, FaRegFolderOpen } from "react-icons/fa";
import AsideSection from "./AsideSection";

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
      className="container mx-auto px-4 py-12 flex lg:flex-row flex-col-reverse gap-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="lg:col-span-2 lg:w-4/5">
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
              <div className="flex md:flex-row flex-col md:items-center text-gray-500 text-sm md:space-x-4 mb-2">
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
              <h3 className="text-xl md:text-[35px] md:leading-10 text-[#08344E] font-semibold mb-4">
                {blog.title}
              </h3>
              <p className="text-[#08344E] text-[15px] font-medium mb-4">
                {blog.description}
              </p>
              <div>
                <button className="flex gap-2 items-center text-[#08344E] border border-[#08344E] md:py-5 py-2 px-7 rounded-full text-[15px] font-semibold hover:bg-[#08426a] hover:text-white transition font-inter">
                  Read More <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AsideSection />
    </motion.section>
  );
};

export default SecondaryBlog;
