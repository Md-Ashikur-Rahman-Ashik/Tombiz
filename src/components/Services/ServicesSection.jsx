import { motion } from "framer-motion";

const SecondaryServicesSection = () => {
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
    <motion.section
      className="py-16 px-4 lg:px-20"
      style={{ minHeight: "100vh" }} // Ensure it's at least the height of the viewport
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }} // Reset animation each time the section enters the viewport
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`relative py-20 border-2 p-6 transition-transform duration-300 hover:scale-105 ${
              index === 1
                ? "border-[#93FF61] border-[5px] rounded-[20px]"
                : "border-transparent rounded-lg"
            }`}
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
    </motion.section>
  );
};

export default SecondaryServicesSection;
