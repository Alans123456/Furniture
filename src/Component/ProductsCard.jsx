import React, { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

const ProductsCard = ({ product, onAddToCart, onClick }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = (e) => {
    e.stopPropagation(); // prevent navigating when clicking heart
    setLiked(!liked);
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
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
          onClick={toggleLike}
          className="absolute top-3 right-3 bg-white rounded-full p-1 hover:scale-110 transition"
        >
          <Heart
            size={20}
            className={`${
              liked ? "text-red-600 fill-red-600" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="bg-teal-900 text-white px-4 py-3 flex justify-between items-center">
        <div>
          <h3 className="text-sm font-semibold">{product.name}</h3>
          <p className="text-sm">${product.price.toFixed(2)}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent opening detail page
            onAddToCart();
          }}
          className="bg-white rounded-full p-2 text-yellow-500 hover:bg-gray-100 transition"
        >
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
