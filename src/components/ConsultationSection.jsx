import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FreeConsultation = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5, once: false });

  return (
    <motion.section
      ref={sectionRef}
      className="bg-[#E9F3F1]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="container mx-auto relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 lg:py-20 space-y-8 lg:space-y-0">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl lg:text-[60px] font-semibold text-[#08344E] leading-none lg:w-2/3">
            Book Your Free Consultation
          </h2>
          <p className="mt-4 text-[15px] font-medium text-[#72777D] lg:w-1/2">
            Lorem ipsum Enjoy competitive rates and flexible payment options
            that fit your budget.
          </p>
        </div>

        {/* Right Button */}
        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <motion.button
            className="bg-[#93FF61] text-[#08344E] font-semibold text-[15px] px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg transform transition hover:bg-green-500 hover:scale-105 hover:shadow-xl focus:outline-none"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          >
            <span>Let&apos;s Go</span>
            <MdOutlineArrowOutward />
          </motion.button>
        </div>

        {/* Background Gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-300 opacity-30 pointer-events-none"></div> */}
      </div>
    </motion.section>
  );
};

export default FreeConsultation;