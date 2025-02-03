import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const accordionData = [
  {
    question: "How often can I make a Consult?",
    answer:
      "Lorem Ipsum is simply dummy text the printing and typesetting industry standard.",
  },
  {
    question: "Can I consult in someone else's name?",
    answer:
      "Yes, you can consult on behalf of someone else with proper authorization.",
  },
  {
    question: "Is there a minimum consult meeting?",
    answer:
      "There is no minimum, but consultations typically last at least 30 minutes.",
  },
  {
    question: "Do you accept consult from international owners?",
    answer: "Yes, we accept consultations from international business owners.",
  },
  {
    question: "Is there a minimum business amount?",
    answer: "No, we cater to businesses of all sizes.",
  },
  {
    question: "How often can consult be made?",
    answer: "You can schedule consultations as frequently as needed.",
  },
  {
    question: "Are initiatives consult towards?",
    answer:
      "Consultations can be directed towards various business initiatives.",
  },
];

export default function Accordion() {
  const [openIndexes, setOpenIndexes] = useState([]);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const toggleAccordion = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto py-10"
    >
      <div className="container mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <button
              className="w-full text-left px-5 py-4 bg-white hover:bg-gray-100 focus:outline-none flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-semibold text-[#08344E] text-lg">
                {item.question}
              </span>
              <span className="text-xl">
                {openIndexes.includes(index) ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
            </button>
            {openIndexes.includes(index) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-5 py-3 text-[#72777D] text-[15px] font-medium"
              >
                {item.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
