const HeroSection = () => {
  return (
    <section className="bg-[#F3FDF8]">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Text */}
        <div className="text-center py-12">
          <p className="text-sm font-medium uppercase text-[#a4c2c0] tracking-wide mb-3">
            Business Consulting
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#00324b]">
            Transform Your Business Potential
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/HeroSectionImg.jpeg" // Replace with the actual path to your image
              alt="Business Consulting"
              className="w-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
              <div>
                <button className="flex items-center px-4 py-2 text-white bg-black/60 rounded-md hover:bg-black/80 transition">
                  <span className="mr-2">▶</span> Demo Video
                </button>
                <p className="text-sm text-white mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
          </div>

          {/* Animated Banners */}
          <div className="absolute -bottom-10 left-0 w-full overflow-hidden">
            <div className="flex space-x-6 animate-scroll">
              <p className="font-bold text-lg text-[#00324b]">Consult</p>
              <p className="font-bold text-lg text-[#00c48c]">Consult</p>
              {/* Add more banners as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
