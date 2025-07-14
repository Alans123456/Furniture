import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import iconAnimation from "../assets/Gallery/icon.json";
import UserAnimation from "../assets/Gallery/User.json";
import heartData from "../assets/Heart.json";
import { Search } from "lucide-react";

export default function NavBar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/Products" },
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
    <div className="flex justify-between items-center bg-primary border-white border-b-2 p-4 h-16 relative z-50">
      {/* Logo */}
      <div>
        <img src="/Logo.png" alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 text-white ml-82">
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

      {/* Search Box */}
      <div className="relative w-64 ml-20">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 text-black focus:outline-none focus:ring-2 focus:ring-[#d4931d] focus:border-transparent"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />

        {filteredProducts.length > 0 && (
          <ul className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto z-50">
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

      {/* Animations with NavLinks */}
      <div className="flex items-center gap-4 ml-6">
        <NavLink to="/wishlist" aria-label="Wishlist">
          <Lottie animationData={heartData} loop={true} className="w-15 h-15" />
        </NavLink>

        <NavLink to="/cart" aria-label="Cart">
          <Lottie
            animationData={iconAnimation}
            loop={false}
            className="w-8 h-8"
          />
        </NavLink>

        <NavLink to="/login" aria-label="Login">
          <Lottie
            animationData={UserAnimation}
            loop={true}
            className="w-8 h-8"
          />
        </NavLink>
      </div>
    </div>
  );
}
