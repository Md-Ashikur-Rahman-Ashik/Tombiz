import { motion } from "framer-motion";

const blogData = [
  {
    id: 1,
    title: "A mindfulness companion that offers guided Consulting Business",
    description:
      "Miquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra.",
    date: "29th February 2022",
    author: "By Admin",
    category: "Creativity",
    comments: "05",
    image: "image1.jpg",
  },
  {
    id: 2,
    title: "Effective strategies for growing your business in 2025",
    description:
      "Learn key techniques to scale and sustain your business with expert insights.",
    date: "15th January 2025",
    author: "By John Doe",
    category: "Business",
    comments: "12",
    image: "image2.jpg",
  },
  {
    id: 3,
    title: "Harnessing AI for smarter business decisions",
    description:
      "How artificial intelligence is transforming decision-making in the corporate world.",
    date: "10th December 2024",
    author: "By AI Expert",
    category: "Technology",
    comments: "08",
    image: "image3.jpg",
  },
  {
    id: 4,
    title: "The future of remote work and digital nomad lifestyle",
    description:
      "What to expect in the evolving landscape of remote jobs and freelancing.",
    date: "5th November 2024",
    author: "By Digital Nomad",
    category: "Trends",
    comments: "09",
    image: "image4.jpg",
  },
  {
    id: 5,
    title: "Building a strong personal brand in the digital age",
    description:
      "Essential tips on establishing credibility and growing your online presence.",
    date: "20th October 2024",
    author: "By Branding Guru",
    category: "Marketing",
    comments: "14",
    image: "image5.jpg",
  },
];

const SecondaryBlog = () => {
  return (
    <motion.section
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Blogs</h2>
      <div className="flex flex-col space-y-8">
        {blogData.map((blog) => (
          <motion.div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-6"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <div className="flex items-center text-gray-500 text-sm space-x-4 mb-2">
              <span>{blog.author}</span>
              <span>{blog.category}</span>
              <span>{`Comments (${blog.comments})`}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-4">{blog.description}</p>
            <div className="text-sm text-gray-400">{blog.date}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SecondaryBlog;
