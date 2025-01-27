import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SuccessStories = () => {
  // Array to hold image data
  const images = [
    {
      src: "/FinancialManagementImg.jpeg",
      alt: "Team meeting",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
    {
      src: "/SavingImg.jpeg",
      alt: "Business discussion",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
    {
      src: "/ProvenImg2.jpeg",
      alt: "Office environment",
      colSpan: "col-span-1",
      rowSpan: "md:row-span-2 row-span-1",
    },
    {
      src: "/SuccessStoryImg2.png",
      alt: "Team brainstorming",
      colSpan: "md:col-span-2 col-span-1",
      rowSpan: "row-span-1",
    },
    {
      src: "/SuccessStoryImg.png",
      alt: "Collaborative meeting",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
    {
      src: "/BusinessPlannerImg.jpeg",
      alt: "Casual discussion",
      colSpan: "md:col-span-2 col-span-1",
      rowSpan: "row-span-1",
    },
  ];

  // Ref to detect when the section is in view
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5, once: false });

  return (
    <section
      ref={sectionRef}
      className="container mx-auto lg:mt-40 md:mt-60 px-4 py-8 sm:px-6 lg:px-8"
    >
      {/* Heading Section */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="uppercase font-bold text-[#08344E] mb-6">
          <span className="border text-[11.28px] py-[5px] px-[20px] rounded-[20px]">
            gallery
          </span>
        </h2>
        <h2 className="md:text-[40px] lg:w-1/3 mx-auto lg:leading-10 font-bold text-2xl">
          Success Stories That Speak Volumes
        </h2>
      </motion.div>

      {/* Image Grid */}
      <motion.div
        className="grid gap-4 grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[300px]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Render Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg shadow-md group ${image.colSpan} ${image.rowSpan}`}
          >
            <img
              src={
                image.src || "https://via.placeholder.com/300?text=Placeholder"
              }
              alt={image.alt || `Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default SuccessStories;