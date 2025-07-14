import React, { useState } from "react";
import { product as Product } from "../Component/Product";
import ProductsCard from "../Component/ProductsCard";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const [selectedCategory, setSelectedCategory] = useState("Living Room");
  const navigate = useNavigate();

  const categories = [...new Set(Product.map((p) => p.category))];
  const top20Products = Product.slice(0, 20);

  const filteredProducts = top20Products.filter(
    (item) => item.category === selectedCategory
  );

  const handleAddToCart = (id) => {
    alert("Added to cart!");
  };

  const openProductDetail = (id) => {
    navigate(`/products/${id}`);
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

      {/* Category Buttons */}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {filteredProducts.map((item) => (
          <ProductsCard
            key={item.id}
            product={item}
            onAddToCart={() => handleAddToCart(item.id)}
            onClick={() => openProductDetail(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
