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
    {
      id: "04",
      title: "Business Planner",
      description:
        "Our data handling practices, systems, and processes have been independently audited and certified.",
      imageSrc: "/ConsultingTeam.jpeg", // Replace with actual image URL
    },
    {
      id: "05",
      title: "Financial management",
      description:
        "Our data handling practices, systems, and processes have been independently audited and certified.",
      imageSrc: "/FinancialManagementImg.png", // Replace with actual image URL
    },
    {
      id: "06",
      title: "Financial management",
      description:
        "Our data handling practices, systems, and processes have been independently audited and certified.",
      imageSrc: "/BusinessPlannerImg.jpeg", // Replace with actual image URL
    },
  ];

  return (
    <motion.section
      className="py-16 px-4 lg:px-20 opacity-100 sm:opacity-0" // Ensure it's visible on mobile by default
      style={{ minHeight: "100vh" }}
      initial={{ opacity: window.innerWidth < 640 ? 1 : 0 }} // Prevent animation blocking on mobile
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }} // Reduce amount to trigger visibility sooner
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
            <h3 className="text-center md:text-[35px] text-xl font-semibold text-[#08344E] mb-4">
              {service.title}
            </h3>
            <img
              src={service.imageSrc}
              alt={service.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default SecondaryServicesSection;
