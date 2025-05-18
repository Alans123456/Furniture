import React from "react";
import { useNavigate } from "react-router-dom"; // for navigation

const ProductCard = ({
  title,
  items,
  image,
  imgHeight = "300px",
  imageWidth = "300px",
  viewAllLink = "/products", // default route
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex gap-10 h-full cursor-pointer">
      <div className="flex-1">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-teal-800 bg-teal-100 rounded-full">
            NEW COLLECTION
          </span>
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <ul className="text-gray-600 text-sm space-y-1 mb-4">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button
          onClick={() => navigate(viewAllLink)}
          className="text-primary font-medium text-sm flex items-center gap-1 hover:underline"
        >
          View All →
        </button>
      </div>

      {/* Image with dynamic height and width */}
      <div className="flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          style={{
            height: imgHeight,
            width: imageWidth,
            display: "block",
            borderRadius: "12px",
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
