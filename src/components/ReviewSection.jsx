import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ReviewSection = () => {
  // Ref to detect when the section is in view
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5, once: false });

  return (
    <div className="bg-[#F8FDFE]">
      <motion.div
        ref={sectionRef}
        className="mt-10 container mx-auto flex flex-col items-center justify-center py-16 px-6 lg:px-32"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="text-center space-y-4">
          <img
            src="/ReviewPersonImg.png"
            alt="Courtney Henry"
            className="rounded-full mx-auto"
          />
          <div>
            <h3 className="text-[22px] font-semibold text-[#08344E]">
              Courtney Henry
            </h3>
            <p className="text-[15px] font-medium text-[#72777D]">
              Nursing Assistant
            </p>
          </div>
          <div className="flex justify-center space-x-1">
            <span className="text-[#08344E] text-xl">★</span>
            <span className="text-[#08344E] text-xl">★</span>
            <span className="text-[#08344E] text-xl">★</span>
            <span className="text-[#08344E] text-xl">★</span>
            <span className="text-gray-400 text-xl">★</span>
          </div>
          <div className="flex justify-between">
            <button className="-mt-20">
              <FaArrowLeft className="text-gray-600" />
            </button>
            <button className="-mt-20">
              <FaArrowRight className="text-gray-600" />
            </button>
          </div>
          <p className="text-[#08344E] md:text-[35px] text-2xl font-medium leading-10 mx-auto">
            “Financial planners help people to gain knowledge about how to
            invest and save their money in the most efficient way ever. Many
            people all across the Financial know.”
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ReviewSection;