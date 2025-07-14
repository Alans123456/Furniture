import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = ({
  companyName = "SajiloMart",
  year = "2024",
  aboutLinks = ["Our Company", "Our Story", "Blog"],
  infoLinks = [
    "Delivery Information",
    "Privacy Policy",
    "Terms & Conditions",
    "Return",
  ],
  supportLinks = ["Contact Us", "Help", "FAQ", "Checkout"],
}) => {
  return (
    <footer className="bg-primary border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo */}
          <div className="w-60 font-bold text-gray-900 flex items-center gap-2">
            <img src="/Logo.png" alt="" />
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full md:w-auto text-sm">
            <div>
              <h4 className="font-semibold text-secondary mb-3">About</h4>
              <ul className="space-y-2 text-white">
                {aboutLinks.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-secondary mb-3">Information</h4>
              <ul className="space-y-2 text-white">
                {infoLinks.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-secondary mb-3">Support</h4>
              <ul className="space-y-2 text-white">
                {supportLinks.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white">
          <p>
            Copyright©{year} {companyName}. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaInstagram className="hover:text-gray-700 cursor-pointer" />
            <FaTwitter className="hover:text-gray-700 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-700 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
