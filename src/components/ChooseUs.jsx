import { MdArrowOutward } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5, once: false });

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5fcfc] px-6 py-12 flex lg:flex-row flex-col-reverse lg:gap-8 lg:items-center lg:justify-between lg:px-16 lg:py-20"
    >
      {/* Left Content */}
      <motion.div
        className="lg:w-[40%]"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <h2 className="uppercase font-bold text-[#08344E] mb-6">
          <span className="border text-[11.28px] py-[5px] px-[20px] rounded-[20px]">
            why choose us
          </span>
        </h2>
        <h2 className="flex flex-col gap-3 text-3xl font-bold text-[#08344E] lg:text-[40px]">
          Why Leading <span>Companies Trust Us</span>
        </h2>
        <p className="mt-5 text-[#72777D] text-[15px] font-medium">
          Lorem ipsum Enjoy competitive rates and flexible payment options that
          fit your budget. We believe in offering afford insurance solutions
          without Lorem ipsum Enjoy competitive rates and flexible payment
        </p>
        <p className="mt-5 text-[#72777D] text-[15px] font-medium">
          offering afford insurance solutions without Lorem ipsum Enjoy
          competitive rates and flexible payment
        </p>
        <button className="mt-6 text-[15px] font-semibold inline-flex gap-2 items-center rounded-full bg-[#93FF61] px-6 py-3 text-[#08344E] hover:bg-green-600 hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
          Learn More <MdArrowOutward className="text-lg" />
        </button>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="relative mb-10 lg:mt-0 lg:max-w-[66%] flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <div className="flex max-w-full gap-4">
          <img
            src="/SavingImg.jpeg"
            alt="Client discussion"
            className="lg:w-[450px] w-full h-[656px] object-cover lg:object-left object-center rounded-[20px]"
          />
          <img
            src="/SavingImg.jpeg"
            alt="Client discussion"
            className="lg:w-1/2 lg:block hidden h-[656px] object-cover object-right rounded-[20px]"
          />
        </div>
        <div className="absolute flex items-center gap-2 bottom-24 md:left-96 bg-white p-4 rounded-lg transform hover:scale-105 transition duration-300 text-[#08344E]">
          <p className="text-[40px] font-bold ">4.7+</p>
          <p className="text-lg flex flex-col font-semibold">
            Client <span>Review</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ChooseUs;