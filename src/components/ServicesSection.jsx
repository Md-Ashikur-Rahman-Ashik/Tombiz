const ServicesSection = () => {
  const services = [
    {
      id: "01",
      title: "Business Planner",
      description:
        "Our data handling practices, systems, and processes have been independently audited and certified.",
      imageSrc: "/BusinessPlannerImg.jpeg", // Replace with actual image URL
    },
    {
      id: "02",
      title: "Saving and strategy",
      description:
        "Our data handling practices, systems, and processes have been independently audited and certified.",
      imageSrc: "/SavingImg.jpeg", // Replace with actual image URL
    },
    {
      id: "03",
      title: "Financial management",
      description:
        "Our data handling practices, systems, and processes have been independently audited and certified.",
      imageSrc: "/FinancialManagementImg.jpeg", // Replace with actual image URL
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="uppercase font-bold text-[#08344E] mb-3">
          <span className="border text-[11.28px] py-[5px] px-[20px] rounded-[20px]">
            services
          </span>
        </h2>
        <h2 className="text-[40px] font-bold flex flex-col">
          Customized Solutions for <span>Your Business</span>
        </h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`relative py-20 border-2 p-6 ${
              index === 1 ? "border-[#93FF61] border-[5px] rounded-[20px]" : "border-transparent rounded-lg"
            } transition-transform duration-300 hover:scale-105`}
          >
            <div className="absolute rounded-tl-[20px] rounded-br-[20px] -top-1 left-0 bg-[#93FF61] text-[#08344E] font-semibold text-[22px] px-4 py-2">
              {service.id}
            </div>
            <img
              src={service.imageSrc}
              alt={service.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
