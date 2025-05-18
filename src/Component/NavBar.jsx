import React from "react";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react"; // ✅ Import this
import iconAnimation from "../assets/icon.json";
import HeartAnimation from "../assets/heart.json"; // ✅ Import this
import UserAnimation from "../assets/user.json"; // ✅ Import this

export default function NavBar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="flex justify-between items-center bg-transparent border-white border-b-2 p-4 h-15">
      <div>
        <img src="Logo.png" alt="Logo" className="h-10" />
      </div>

      <ul className="flex gap-6 text-white">
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

      <div className="flex flex-grid items-center">
        <Lottie
          animationData={HeartAnimation}
          loop={true}
          className="w-20 h-20 "
        />
        <Lottie
          animationData={iconAnimation}
          loop={false}
          className="w-10 h-10 mb-1 mr-4"
        />
        <Lottie
          animationData={UserAnimation}
          loop={true}
          className="w-10 h-10 mb-1 mr-4"
        />
      </div>
    </div>
  );
}
