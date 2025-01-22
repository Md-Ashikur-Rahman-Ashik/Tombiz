import { motion } from "framer-motion";

const TrustedSection = () => {
  return (
    <section className="bg-white py-16 mt-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Logos Section */}
        <div className="flex justify-center items-center gap-8 mb-12">
          <img src="/GoogleImg.png" alt="Google" className="h-8" />
          <img src="/NaverImg.svg" alt="Naver" className="h-8" />
          <img src="/LotteImg.svg" alt="Lotte" className="h-8" />
          <img src="/SnykImg.svg" alt="Snyk" className="h-8" />
          <img src="/ComplyImg.svg" alt="ComplyAdvantage" className="h-8" />
          <img src="/UIImg.svg" alt="UiPath" className="h-8" />
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-semibold text-blue-500">ABOUT US</h2>
            <h1 className="text-4xl font-bold text-gray-800 leading-snug">
              Trusted Consulting <br />
              Partner For You
            </h1>
            <p className="text-gray-600">
              Lorem ipsum Enjoy competitive rates and flexible payment options that fit your budget.
              We believe in offering afford insurance solutions without compromising on quality.
            </p>

            {/* Tabs */}
            <div className="space-y-4">
              <div className="p-4 border-2 border-green-400 rounded-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-800">Corporate business</h3>
                <p className="text-sm text-gray-500">
                  Create tailored SMS campaigns to engage and convert your customers.
                </p>
              </div>
              <div className="p-4 border-2 border-gray-200 rounded-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-800">Financial planning</h3>
              </div>
              <div className="p-4 border-2 border-gray-200 rounded-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-800">Business strategy</h3>
              </div>
              <div className="p-4 border-2 border-gray-200 rounded-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-800">Innovative ideas</h3>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/consulting-main.jpg"
              alt="Consulting Team"
              className="rounded-lg shadow-lg w-full"
            />
            <img
              src="/consulting-secondary.jpg"
              alt="Teamwork"
              className="absolute bottom-0 right-0 w-1/2 rounded-lg border-4 border-white shadow-lg transform translate-x-6 translate-y-6"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
