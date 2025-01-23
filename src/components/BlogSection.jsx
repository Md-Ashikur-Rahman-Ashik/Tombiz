import { FaArrowRight } from "react-icons/fa";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      date: "October 19, 2024",
      title: "Rank Higher Reach Further Clicks into Customers",
      image: "/BlogImg1.png",
    },
    {
      id: 2,
      date: "October 19, 2024",
      title: "SEO Excellence for Every Website Presence",
      image: "/BlogImg2.png",
    },
    {
      id: 3,
      date: "October 19, 2024",
      title: "Business Solutions That Deliver Results Partner",
      image: "/BlogImg3.png",
    },
  ];

  return (
    <section className="container mx-auto mt-10 py-12 px-4 lg:px-20">
      <div className="text-center mb-20">
        <h2 className="uppercase font-bold text-[#08344E] mb-6">
          <span className="border text-[11.28px] py-[5px] px-[20px] rounded-[20px]">
            blogs and news
          </span>
        </h2>
        <h3 className="md:text-[40px] text-2xl text-[#0C0C0E] font-bold">
          Recent <span className="text-[#08344E]">Blogs </span>
          And News
        </h3>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <p className="text-[11.28px] uppercase font-bold text-[#72777D]">
                {blog.date}
              </p>
              <h4 className="text-[22px] font-semibold text-[#08344E] mt-2">
                {blog.title}
              </h4>
              <button
                className="inline-flex gap-2 items-center text-[15px] text-[#08344E] font-semibold mt-4 hover:underline"
              >
                Read More
                <FaArrowRight className="text-green-300" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
