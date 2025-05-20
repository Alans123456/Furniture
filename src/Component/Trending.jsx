import React, { useState } from "react";
import { product } from "../Component/Product";
import { Heart } from "lucide-react";

const Trending = () => {
  const [selectedCategory, setSelectedCategory] = useState("Living Room");
  const [likedProducts, setLikedProducts] = useState([]);

  const categories = [...new Set(product.map((p) => p.category))];

  const filteredProducts = product.filter(
    (item) => item.category === selectedCategory
  );

  const toggleLike = (id) => {
    setLikedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <div className="px-6 py-10 ml-5 mr-5">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 ">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-800">
          Trending product <br /> for you:
        </h1>
        <button className="bg-secondary text-white font-medium px-6 py-3 rounded-full mt-4 md:mt-0">
          View all products →
        </button>
      </div>

      <div className="flex gap-3 flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2.5 rounded-full border shadow-sm text-sm font-medium transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-primary text-white"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-4"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-contain rounded-xl bg-gray-50"
              />
              <span className="absolute top-2 left-2 bg-teal-700 text-white text-sm px-2 py-1 rounded-full">
                -{product.discount}%
              </span>
              <button
                onClick={() => toggleLike(product.id)}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm hover:scale-110 transition"
              >
                <Heart
                  size={20}
                  className={`${
                    likedProducts.includes(product.id)
                      ? "text-red-600 fill-red-600"
                      : "text-gray-400"
                  }`}
                />
              </button>
            </div>

            <div className="mt-5 p-4 bg-teal-900 rounded-lg text-white text-center">
              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
              <p className="text-sm">${product.price.toFixed(2)}</p>
              <button className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-full transition">
                Add to Cart 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
