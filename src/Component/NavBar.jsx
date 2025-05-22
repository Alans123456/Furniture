import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import iconAnimation from "../assets/icon.json";
import HeartAnimation from "../assets/heart.json";
import UserAnimation from "../assets/user.json";
import { Search } from "lucide-react";

export default function NavBar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const products = [
    "Bed",
    "Sofa",
    "Chair",
    "Table",
    "Wardrobe",
    "Bookshelf",
    "TV Stand",
    "Cabinet",
    "Dresser",
    "Shoe Rack",
    "Bench",
    "Nightstand",
    "Shelf",
    "Cupboard",
    "Drawer",
    "Recliner",
    "Dining Set",
    "Desk",
    "Stool",
    "Chest",
    "Ottoman",
    "Divider",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = products.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleSuggestionClick = (item) => {
    setSearchTerm(item);
    setFilteredProducts([]);
  };

  return (
    <div className="flex justify-between items-center bg-primary border-white border-b-2 p-4 h-15 relative z-50">
      {/* Logo */}
      <div>
        <img src="Logo.png" alt="Logo" className="h-12 w-45" />
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 text-white ml-105 w-155">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-[#d4931d] underline" : "hover:text-[#d4931d]"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Side Icons + Search */}
      <div className="flex flex-col items-center relative w-64 ml-40">
        <div className=" w-full">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d4931d] focus:border-transparent"
          />
          <Search className="absolute right-3 top-2 text-white" />
        </div>

        {filteredProducts.length > 0 && (
          <ul className="absolute top-12 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-auto">
            {filteredProducts.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-[#fbe8cc] cursor-pointer text-black"
                onClick={() => handleSuggestionClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Animations */}
      <div className="flex items-center ">
        <Lottie
          animationData={HeartAnimation}
          loop={true}
          className="w-20 h-20"
        />
        <Lottie
          animationData={iconAnimation}
          loop={false}
          className="w-10 h-10 mb-1 mr-4"
        />
        <a href="/login">
          <Lottie
            animationData={UserAnimation}
            loop={true}
            className="w-10 h-10 mb-1 mr-4"
          />
        </a>
      </div>
    </div>
  );
}
