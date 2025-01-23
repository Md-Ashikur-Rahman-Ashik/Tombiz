const ReviewSection = () => {
  return (
    <div className="bg-[#F8FDFE]">
      <div className="mt-10 container mx-auto flex flex-col items-center justify-center py-16 px-6 lg:px-32">
        <div className="text-center space-y-4">
          <img
            src="/ReviewPersonImg.png"
            alt="Courtney Henry"
            className="rounded-full mx-auto"
          />
          <div>
            <h3 className="text-[22px] font-semibold text-[#08344E]">
              Courtney Henry
            </h3>
            <p className="text-[15px] font-medium text-[#72777D]">
              Nursing Assistant
            </p>
          </div>
          <div className="flex justify-center space-x-1">
            <span className="text-[#08344E] text-xl">★</span>
            <span className="text-[#08344E] text-xl">★</span>
            <span className="text-[#08344E] text-xl">★</span>
            <span className="text-[#08344E] text-xl">★</span>
            <span className="text-gray-400 text-xl">★</span>
          </div>
          <div className="flex justify-between">
            <button className="shadow-md hover:shadow-lg">
              <span className="text-gray-600">←</span>
            </button>
            <button className="shadow-md hover:shadow-lg">
              <span className="text-gray-600">→</span>
            </button>
          </div>
          <p className="text-gray-700 text-base max-w-3xl mx-auto">
            “Financial planners help people to gain knowledge about how to
            invest and save their money in the most efficient way ever. Many
            people all across the Financial know.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
