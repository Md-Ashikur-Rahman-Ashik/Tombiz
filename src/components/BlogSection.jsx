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
      <div className="text-center mb-10">
        <h2 className="text-lg font-medium text-blue-500 uppercase">
          Blogs and News
        </h2>
        <h3 className="text-4xl font-bold">
          Recent <span className="text-blue-500">Blogs</span> And{" "}
          <span className="text-blue-500">News</span>
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
              <p className="text-sm text-gray-500">{blog.date}</p>
              <h4 className="text-lg font-semibold text-gray-900 mt-2">
                {blog.title}
              </h4>
              <a
                href="#"
                className="inline-flex items-center text-blue-500 font-medium mt-4 hover:underline"
              >
                Read More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-7-7l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
