import React from "react";

const blogs = [
  {
    image: "/images/blog1.jpg",
    title: "First Time Home Owner Ideas",
    author: "Kristin Watson",
    date: "Apr 19,24",
  },
  {
    image: "/images/blog2.jpg",
    title: "How To Keep Your Furniture Clean",
    author: "Robert Fox",
    date: "Apr 20,24",
  },
  {
    image: "/images/blog3.jpg",
    title: "Small Space Furniture Apartment Ideas",
    author: "Kristin Watson",
    date: "Dec 20,24",
  },
];

const BlogCard = ({ image, title, author, date }) => (
  <div className="flex flex-col gap-2 w-full md:w-auto">
    <img
      src={image}
      alt={title}
      className="rounded-2xl w-full h-48 object-cover"
    />
    <h4 className="text-lg font-heading mt-2">{title}</h4>
    <p className="text-sm text-gray-500">
      by {author} on <span className="text-yellow-600">{date}</span>
    </p>
  </div>
);

const Sblog = () => {
  return (
    <div className="p-6 font-body text-2xl space-y-10">
      {/* Blog Section */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Explore Our Latest Blog</h2>
          <button className="bg-yellow-500 text-white font-medium py-2 px-6 rounded-full">
            View All Posts →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sblog;
