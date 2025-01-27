const BrandSection = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-[#08344E]">
          Used and Trusted by Industry Leaders and teams around the world:
        </h2>
      </div>
      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
        {/* Placeholder logos */}
        <div>
          <img src="/TixelLogo.png" className="opacity-25" alt="Tixel Logo" />
        </div>
        <div>
          <img src="/CamFireLogo.png" alt="Camfire Logo" />
        </div>
        <div>
          <img src="/FirebaseLogo.png" alt="Firebase Logo" />
        </div>
        <div>
          <img src="/EEETWellLogo.png" alt="EEETWell Logo" />
        </div>
        <div className="col-span-2">
          <img src="/LelandLogo.png" className="opacity-25" alt="Leland Logo" />
        </div>
        <div className="text-gray-400 text-center">Google</div>
        <div className="text-gray-800 text-center font-semibold">Microsoft</div>
        <div className="text-gray-800 text-center font-semibold">NordVPN</div>
        <div className="text-gray-800 text-center font-semibold">ROKT</div>
        <div className="text-gray-800 text-center font-semibold">
          The Guardian
        </div>
        <div className="text-gray-400 text-center">Trivago</div>
        <div className="text-gray-400 text-center">Helio</div>
        <div className="text-gray-800 text-center font-semibold">Makelog</div>
        <div className="text-gray-800 text-center font-semibold">
          Kill Cliff
        </div>
        <div className="text-gray-800 text-center font-semibold">Helium</div>
        <div className="text-gray-400 text-center">CALA</div>
      </div>
    </div>
  );
};

export default BrandSection;
