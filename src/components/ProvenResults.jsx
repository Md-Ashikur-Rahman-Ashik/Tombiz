import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const ProvenResults = () => {
  return (
    <motion.div
      className="relative mt-20 flex items-center justify-center min-h-screen bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
    >
      {/* Central Content */}
      <div className="relative flex flex-col items-center text-center px-4">
        {/* Title and Subtitle */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-[40px] font-bold text-[#08344E] md:w-1/3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
        >
          Proven Results by thousands People
        </motion.h2>
        <motion.p
          className="text-[#72777D] md:w-1/3 mt-5 text-[15px] font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
        >
          Our data handling practices, systems, and processes have been
          independently audited and certified. Our data handling practices,
          systems, and processes have
        </motion.p>
        <motion.button
          className="mt-6 text-[15px] font-semibold inline-flex gap-2 items-center rounded-full bg-[#93FF61] px-6 py-3 text-[#08344E] hover:bg-green-600 hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
        >
          Learn More <MdArrowOutward className="text-lg" />
        </motion.button>

        {/* Concentric Circles */}
        <motion.div
          className="absolute w-[80%] md:w-[60%] h-[80%] md:h-[60%] rounded-full border border-gray-200 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ amount: 0.2 }}
        ></motion.div>
        <motion.div
          className="absolute w-[95%] md:w-[75%] h-[95%] md:h-[75%] rounded-full border border-gray-200 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.2 }}
        ></motion.div>

        {/* Image Positions */}
        <div className="absolute inset-0">
          {/* Reusable Image Animation */}
          {[
            { id: 1, className: "-bottom-72 left-20", delay: 0.2, img: "/ProvenImg1.jpeg" },
            { id: 2, className: "md:-top-40 -top-28 md:left-20 left-14", delay: 0.3, img: "/ProvenImg2.jpeg" },
            { id: 3, className: "lg:-top-52 -top-40 lg:right-36 md:right-20 right-28", delay: 0.4, img: "/ProvenImg3.jpeg" },
            { id: 4, className: "right-5 -bottom-80", delay: 0.5, img: "/BusinessPlannerImg.jpeg" },
            { id: 5, className: "lg:-left-10 md:left-0 left-4 md:top-64 top-80", delay: 0.6, img: "/ConsultingTeam.jpeg" },
            { id: 6, className: "lg:-top-48 -top-36 lg:left-96 md:left-80 left-52", delay: 0.7, img: "/FinancialManagementImg.jpeg" },
            { id: 7, className: "md:bottom-0 -bottom-28 lg:-right-16 -right-1", delay: 0.8, img: "/SavingImg.jpeg" },
            { id: 8, className: "-bottom-60 right-96", delay: 0.9, img: "/TeamWork.jpeg" },
          ].map((item) => (
            <motion.div
              key={item.id}
              className={`absolute ${item.className} w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-lg shadow-lg transition hover:scale-105 duration-300`}
              style={{
                backgroundImage: `url('${item.img}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
              viewport={{ amount: 0.2 }}
            ></motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProvenResults;