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
        <div className="col-span-2 flex justify-center">
          <img src="/LelandLogo.png" className="opacity-25" alt="Leland Logo" />
        </div>
        <div>
          <img
            src="/GoogleLogo.png"
            className="opacity-25 w-[123px] h-[48px]"
            alt="Google Logo"
          />
        </div>
        <div>
          <img src="/MicrosoftLogo.png" alt="Microsoft Logo" />
        </div>
        <div>
          <img src="/NordVPNLogo.png" alt="NordVPN Logo" />
        </div>
        <div>
          <img src="/RoktLogo.png" alt="ROKT Logo" />
        </div>
        <div>
          <img src="/GuardianLogo.png" alt="Guardian Logo" />
        </div>
        <div>
          <img
            src="/TrivagoLogo.png"
            className="opacity-25"
            alt="Trivago Logo"
          />
        </div>
        <div>
          <img src="/HelioLogo.png" className="opacity-25" alt="Helio Logo" />
        </div>
        <div>
          <img src="/MakeLogLogo.png" alt="MakeLog Logo" />
        </div>
        <div>
          <img src="/KillCliffLogo.png" alt="Kill Cliff Logo" />
        </div>
        <div>
          <img src="/HeliumLogo.png" alt="Helium Logo" />
        </div>
        <div className="col-span-2 flex justify-center">
          <img src="/CalaLogo.png" className="opacity-25" alt="Cala Logo" />
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
