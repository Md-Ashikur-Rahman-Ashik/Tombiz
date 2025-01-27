import { MdArrowOutward } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-[#f0fdfa] to-[#e6f7f5] px-6 py-16 md:px-12 lg:px-20 mt-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="lg:w-[70%]">
          <h2 className="uppercase font-bold text-[#08344E] mb-6">
            <span className="border text-[11.28px] py-[5px] px-[20px] rounded-[20px]">
              why choose us
            </span>
          </h2>
          <h2 className="flex flex-col gap-3 text-3xl font-bold text-[#08344E] lg:text-[40px]">
            Why Leading <span>Companies Trust Us</span>
          </h2>
          <p className="mt-5 text-[#72777D] text-[15px] font-medium">
            Lorem ipsum Enjoy competitive rates and flexible payment options
            that fit your budget. We believe in offering afford insurance
            solutions without Lorem ipsum Enjoy competitive rates and flexible
            payment
          </p>
          <div className="mt-20">
            <img
              src="/ProvenImg1.jpeg"
              alt="Why choose us first image"
              className="w-full h-full rounded-[20px] object-cover"
            />
          </div>
        </div>

        {/* Images Section */}
        <div>
          <div>
            <img
              src="/SavingImg.jpeg"
              alt="Why choose us second image"
              className="w-full h-[656px] object-cover rounded-[20px]"
            />
          </div>
          <button className="mt-6 text-[15px] font-semibold inline-flex gap-2 items-center rounded-full bg-[#93FF61] px-6 py-3 text-[#08344E] hover:bg-green-600 hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
            Learn More <MdArrowOutward className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
