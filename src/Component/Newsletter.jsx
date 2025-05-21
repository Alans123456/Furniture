import React from "react";
import { FiMail } from "react-icons/fi";

const Newsletter = ({
  title = "Subscribe To Our Newsletter",
  subtitle = "Subscribe to our email newsletter today to receive update on the latest news",
  placeholder = "Enter your Email",
  buttonText = "Subscribe",
  imageUrl = "/newsletter-image.jpg", // replace with actual path
}) => {
  return (
    <section className="bg-gray-100 rounded-xl p-6 sm:p-10 md:flex justify-between items-center max-w-7xl mx-auto my-10">
      {/* Left Side */}
      <div className="md:w-1/2 space-y-5">
        <h2 className="text-3xl font-heading text-gray-900 leading-tight">
          {title}
        </h2>
        <p className="text-gray-600">{subtitle}</p>
        <div className="flex items-center bg-white font-body rounded-full shadow-md overflow-hidden w-full max-w-md">
          <div className="px-4 text-gray-400">
            <FiMail />
          </div>
          <input
            type="email"
            placeholder={placeholder}
            className="w-full px-4 py-2 focus:outline-none"
          />
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full">
            {buttonText}
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src={imageUrl}
          alt="Newsletter Visual"
          className="rounded-xl max-w-sm w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Newsletter;
