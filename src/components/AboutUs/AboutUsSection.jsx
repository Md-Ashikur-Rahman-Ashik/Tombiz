import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <section className="bg-white py-16 mt-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <motion.div
            className="space-y-6 lg:w-3/4 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="uppercase font-bold text-[#08344E]">
              <span className="border text-[11.28px] py-[5px] px-[20px] rounded-[20px]">
                about us
              </span>
            </h2>
            <h1 className="text-[40px] font-bold text-[#08344E] leading-snug">
              Trusted Consulting <br />
              Partner For You
            </h1>
            <p className="text-gray-600">
              Lorem ipsum Enjoy competitive rates and flexible payment options
              that fit your budget. We believe in offering afford insurance
              solutions without compromising on quality.
            </p>

            {/* Tabs */}
            <div className="space-y-4">
              <div className="p-4 border-2 border-green-400 rounded-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-800">
                  Corporate business
                </h3>
                <p className="text-sm text-gray-500">
                  Create tailored SMS campaigns to engage and convert your
                  customers.
                </p>
              </div>
              <div className="p-4 border-2 border-gray-200 rounded-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-800">
                  Financial planning
                </h3>
              </div>
              <div className="p-4 border-2 border-gray-200 rounded-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-800">
                  Business strategy
                </h3>
              </div>
              <div className="p-4 border-2 border-gray-200 rounded-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-800">
                  Innovative ideas
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/ConsultingTeam.jpeg"
              alt="Consulting Team"
              className="rounded-lg shadow-lg lg:w-[550px] lg:h-[630px]"
            />
            <img
              src="/TeamWork.jpeg"
              alt="Teamwork"
              className="absolute lg:bottom-12 md:bottom-0 bottom-0 lg:-left-24 -left-12 md:w-[300px] w-2/3 md:h-[305px] rounded-lg border-4 border-white shadow-lg transform translate-x-6 translate-y-6"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
