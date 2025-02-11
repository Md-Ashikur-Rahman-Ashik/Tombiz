import { FaLocationDot } from "react-icons/fa6";

const MapSection = () => {
  return (
    <div className="container mx-auto relative">
      <img src="/Map.png" alt="" className="w-full md:h-full h-80 rounded-[20px]" />
      <div className="absolute inset-0 bg-gray-200 opacity-50 rounded-[20px]"></div>
      <FaLocationDot className="absolute top-[50%] left-[50%] text-[40px] font-black text-[#08344E]" />
    </div>
  );
};

export default MapSection;
