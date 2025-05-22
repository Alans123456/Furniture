import React from "react";
import NavBar from "../Component/NavBar";
import SignUpBar from "../Component/SignUpBar";
import Footer from "../Component/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* Top Navigation */}
      <div className="bg-primary  text-white font-heading">
        <div className="fixed top-0 left-0 right-0 z-40">
          <SignUpBar />
          <NavBar />
        </div>
      </div>

      {/* Title Section */}
      <div className="flex justify-center items-center h-48 bg-primary mt-[90px] text-white font-heading text-5xl">
        Contact Sajilo Mart
      </div>

      {/* Contact Info + Form */}
      <div className="bg-white py-16 px-6 md:px-20 font-body">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading text-primary mb-4">
            We'd Love to Hear From You!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you have a question about our products, services, or
            anything else — we’re here to help.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Contact Details */}
          <div className="flex-1 space-y-8 text-gray-700 mt-20 ml-10">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary" />
              <div>
                <h4 className="text-xl font-heading">Visit Us</h4>
                <p className="font-body">Kumaripati, Lalitpur, Nepal</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-primary" />
              <div>
                <h4 className="text-xl font-heading">Call Us</h4>
                <p className="font-body">+977-9800000000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-primary" />
              <div>
                <h4 className="text-xl font-heading">Email Us</h4>
                <p className="font-body">support@sajilomart.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-gray-50 rounded-xl p-8 shadow-md font-body">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-body"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-body"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-body"
              ></textarea>
              <button
                type="submit"
                className="bg-[#d4931d] text-white py-3 px-6 rounded-full hover:bg-[#c47e0f] transition-all duration-300 font-heading"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="px-6 md:px-20 pb-16 bg-white">
        <h3 className="text-3xl font-heading text-center text-primary mb-6">
          Find Us on the Map
        </h3>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Sajilo Mart Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.657721059586!2d85.31906507500446!3d27.69889667619814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1993a4555555%3A0xeeeeef123456abcd!2sKumaripati%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1682422212345!5m2!1sen!2snp"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
