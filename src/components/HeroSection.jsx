import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AiOutlinePlayCircle } from "react-icons/ai";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="bg-[#F3FDF8] relative"
    >
      <motion.div
        className="max-w-7xl relative z-10 mx-auto px-6 sm:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        {/* Foreground Content */}
        <div className="text-center py-12">
          <p className="text-[11.28px] font-bold uppercase text-[#08344E] tracking-wide mb-6">
            <span className="border py-[5px] px-[20px] rounded-[20px]">
              Business Consulting
            </span>
          </p>
          <h1 className="md:text-[88.762px] text-5xl flex flex-col font-semibold text-[#08344E]">
            Transform Your <span>Business Potential</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/HeroSectionImg.jpeg" // Replace with the actual path to your image
              alt="Business Consulting"
              className="w-full object-cover md:h-auto h-screen"
            />
            {/* Overlay */}
            <div className="absolute inset-0 flex items-end p-2 md:p-6 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex md:flex-row flex-col md:justify-between justify-end">
                <button className="flex items-center px-4 py-2 text-white rounded-md hover:bg-black/80 transition">
                  <span className="mr-2">
                    <AiOutlinePlayCircle className="w-[48px] h-[48px]" />
                  </span>
                  <span className="text-[15px] font-semibold">Demo Video</span>
                </button>
                <p className="text-[15px] font-medium md:w-1/3 text-white mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;