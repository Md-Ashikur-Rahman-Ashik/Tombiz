import { MdArrowOutward } from "react-icons/md";

const ProvenResults = () => {
  return (
    <div className="relative mt-20 flex items-center justify-center min-h-screen bg-white">
      {/* Central Content */}
      <div className="relative flex flex-col items-center text-center px-4">
        {/* Title and Subtitle */}
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-[#08344E] md:w-1/3">
          Proven Results by thousands People
        </h2>
        <p className="text-[#72777D] md:w-1/3 mt-5 text-[15px] font-medium">
          Our data handling practices, systems, and processes have been
          independently audited and certified. Our data handling practices,
          systems, and processes have
        </p>
        <button className="mt-6 text-[15px] font-semibold inline-flex gap-2 items-center rounded-full bg-[#93FF61] px-6 py-3 text-[#08344E] hover:bg-green-600 hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
          Learn More <MdArrowOutward className="text-lg" />
        </button>

        {/* Concentric Circles */}
        <div className="absolute w-[80%] md:w-[60%] h-[80%] md:h-[60%] rounded-full border border-gray-200 -z-10"></div>
        <div className="absolute w-[95%] md:w-[75%] h-[95%] md:h-[75%] rounded-full border border-gray-200 -z-10"></div>

        {/* Image Positions */}
        <div className="absolute inset-0">
          {/* Top-Left Image */}
          <div
            className="absolute -bottom-72 left-20 w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-lg shadow-lg transform transition hover:scale-105 duration-300 animate-fadeInUp"
            style={{
              backgroundImage: "url('/ProvenImg1.jpeg')", // Replace with actual image URL
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Top-Center Image */}
          <div
            className="absolute md:-top-40 -top-28 md:left-20 left-14 transform -translate-x-1/2 w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-lg shadow-lg transition hover:scale-105 duration-300 animate-fadeInDown"
            style={{
              backgroundImage: "url('/ProvenImg2.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Top-Right Image */}
          <div
            className="absolute lg:-top-52 -top-40 lg:right-36 md:right-20 right-28 w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-lg shadow-lg transition hover:scale-105 duration-300 animate-fadeInUp"
            style={{
              backgroundImage: "url('/ProvenImg3.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Middle-Left Image */}
          <div
            className="absolute right-5 -bottom-80 transform -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-lg shadow-lg transition hover:scale-105 duration-300 animate-fadeInDown"
            style={{
              backgroundImage: "url('/BusinessPlannerImg.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Middle-Right Image */}
          <div
            className="absolute lg:-left-10 md:left-0 left-4 md:top-64 top-80 transform -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-lg shadow-lg transition hover:scale-105 duration-300 animate-fadeInUp"
            style={{
              backgroundImage: "url('/ConsultingTeam.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Bottom-Left Image */}
          <div
            className="absolute lg:-top-48 -top-36 lg:left-96 md:left-80 left-52 w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-lg shadow-lg transition hover:scale-105 duration-300 animate-fadeInDown"
            style={{
              backgroundImage: "url('/FinancialManagementImg.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Bottom-Center Image */}
          <div
            className="absolute md:bottom-0 -bottom-28 -right-10 transform -translate-x-1/2 w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-lg shadow-lg transition hover:scale-105 duration-300 animate-fadeInUp"
            style={{
              backgroundImage: "url('/SavingImg.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Bottom-Right Image */}
          <div
            className="absolute -bottom-60 right-96 w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-lg shadow-lg transition hover:scale-105 duration-300 animate-fadeInDown"
            style={{
              backgroundImage: "url('/TeamWork.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProvenResults;
