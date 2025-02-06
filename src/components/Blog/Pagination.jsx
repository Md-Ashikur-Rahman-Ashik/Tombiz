import { FaArrowRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="container mx-auto flex justify-center my-10 space-x-5">
      <button className="min-w-9 rounded-full py-4 px-6 border border-slate-300 text-center text-[15px] font-medium text-[#08344E] transition-all shadow-md hover:shadow-lg hover:bg-[#93FF61] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
        01
      </button>
      <button className="min-w-9 rounded-full border border-slate-300 py-4 px-6 text-center text-[15px] font-medium text-[#08344E] transition-all shadow-sm hover:shadow-lg hover:bg-[#93FF61] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
        02
      </button>
      <button className="min-w-9 rounded-full border border-slate-300 py-4 px-6 text-center text-[15px] font-medium text-[#08344E] transition-all shadow-sm hover:shadow-lg hover:bg-[#93FF61] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
        03
      </button>
      <button className="min-w-9 rounded-full border border-slate-300 bg-[#93FF61] py-4 px-6 text-center text-[17px] text-[#08344E] transition-all shadow-sm hover:shadow-lg font-black focus:text-white focus:bg-slate-800 focus:border-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
