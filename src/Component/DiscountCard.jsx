import React from "react";
import { useNavigate } from "react-router-dom";

const DiscountCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/discount"); // Change to your desired route
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#1e3d3f] text-white rounded-xl p-6 w-[320px] h-[350px] flex flex-col justify-center items-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      <button className="bg-yellow-500 text-white font-bold px-4 py-2 rounded-full mb-4">
        GET DISCOUNT
      </button>
      <p className="text-2xl font-semibold">20% OFFER</p>
    </div>
  );
};

export default DiscountCard;
