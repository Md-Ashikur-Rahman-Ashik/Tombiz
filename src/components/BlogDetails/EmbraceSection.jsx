import { motion } from "framer-motion";
import { CiUser } from "react-icons/ci";
import { FaRegComments, FaRegFolderOpen } from "react-icons/fa";
import Revolution from "./Revolution";
import Comment from "./Comment";
import Aside from "./Aside";

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

          {/* Third Section */}
          <Comment />
        </div>

        {/* Right side section */}
        <Aside />
      </div>
    </motion.section>
  );
};

export default EmbraceSection;
