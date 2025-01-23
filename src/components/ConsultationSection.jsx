import { MdOutlineArrowOutward } from "react-icons/md";

const FreeConsultation = () => {
  return (
    <section className="bg-[#E9F3F1]">
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
          <button className="bg-[#93FF61] text-[#08344E] font-semibold text-[15px] px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg transform transition hover:bg-green-500 hover:scale-105 hover:shadow-xl focus:outline-none">
            <span>Let&apos;s Go</span>
            <MdOutlineArrowOutward />
          </button>
        </div>

        {/* Background Gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-300 opacity-30 pointer-events-none"></div> */}
      </div>
    </section>
  );
};

export default FreeConsultation;
