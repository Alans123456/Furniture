import React, { useState } from "react";
import { product } from "../Component/Product";
import { Heart, ShoppingCart } from "lucide-react";

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
    <div className="px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-10">
        <h1 className="text-4xl md:text-5xl font-heading mb-4 md:mb-0">
          Trending product <br /> for you:
        </h1>
        <button className="bg-secondary text-white font-bold px-6 py-3 rounded-full">
          View all products →
        </button>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex gap-4 flex-wrap mt-8 mb-6 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-red-700 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative">
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              {/* Discount Badge */}
              <span className="absolute top-3 left-3 bg-teal-700 text-white text-xs px-2 py-1 rounded-full">
                -{product.discount}%
              </span>

              {/* Heart Button */}
              <button
                onClick={() => toggleLike(product.id)}
                className="absolute top-3 right-3 bg-white rounded-full p-1 hover:scale-110 transition"
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

            {/* Bottom Product Info Bar */}
            <div className="bg-teal-900 text-white px-4 py-3 flex justify-between items-center">
              <div>
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="text-sm">${product.price.toFixed(2)}</p>
              </div>
              <button className="bg-white rounded-full p-2 text-yellow-500 hover:bg-gray-100 transition">
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
