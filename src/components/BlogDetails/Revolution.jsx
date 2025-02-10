import { motion } from "framer-motion";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

const Revolution = () => {
  return (
    <motion.section
      className="w-full px-6 py-8 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="mx-auto">
        <div className="py-6 md:px-14 px-2 rounded-[15px] border">
          <p className="text-xl text-[#08344E] text-left">
            {`With a commitment to driving technological evolution, our IT solutions and a desigm services are the cornerstone of your digital progression. We to not  a transcend boundariesi enabling businesses`}
          </p>
          <h3 className="mt-7 text-left text-[#08344E] text-[22px] font-semibold">
            Stanio Iainto
          </h3>
          <p className="text-[15px] text-left font-medium text-[#72777D]">
            Authore
          </p>
          <div className="flex justify-end">
            <BiSolidQuoteAltRight className="md:text-[57.143px] text-2xl text-[#93FF61] font-black" />
          </div>
        </div>
        <p className="mt-7 text-[#72777D] font-medium text-[15px]">
          Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
          posuere viverra .Aliquam eros justoposuere lobortis non, viverra
          laoreet augue mattis fermentum ullamcorper viverra laore
        </p>
        <h2 className="mt-12 text-2xl md:text-[35px] font-bold text-[#08344E]">
          Revolutionize Your Business with Consult
        </h2>
        <p className="mt-7 md:text-left text-[#72777D]  font-medium text-[15px]">
          Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
          posuere viverra .Aliquam eros just posuere lobortis, viverra laoreet
          augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo,
          posuere loborti viverra laoreet matti ullamcorper posuere viverra
          .Aliquam eros justo, posuere
        </p>
        <ul className="mt-6 space-y-2 text-left text-[#08344E]">
          <li className="flex items-center gap-3 font-medium text-[15px]">
            <FaCheck className="text-base font-black" /> Artificial Intelligence
            is a rapidly advancing field that focuses on creating intelligent
            machines capable
          </li>
          <li className="flex items-center gap-3 font-medium text-[15px]">
            <FaCheck className="text-base font-black" /> It encompasses areas
            such as machine learning, natural language processing
          </li>
          <li className="flex items-center gap-3 font-medium text-[15px]">
            <FaCheck className="text-base font-black" /> Natural language
            processing, computer vision, and robotics
          </li>
          <li className="flex items-center gap-3 font-medium text-[15px]">
            <FaCheck className="text-base font-black" /> AI Transforming the Way
            We Live and Work Discover the Magic of AI
          </li>
        </ul>
        <p className="mt-10 text-[#08344E] text-[15px] font-medium">
          Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
          posuere viverra .Aliquam eros justoposuere lobortis non, viverra
          laoreet augue mattis fermentum ullamcorper viverra laore
        </p>
      </div>
    </motion.section>
  );
};

export default Revolution;
