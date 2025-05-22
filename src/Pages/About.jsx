import React from "react";
import NavBar from "../Component/NavBar";
import SignUpBar from "../Component/SignUpBar";
import Footer from "../Component/Footer";
import Review from "../Component/Review";
import Symbol from "../Component/Symbol";

export default function About() {
  return (
    <>
      <div className="bg-primary text-white font-heading">
        {/* Fixed Top Bar */}
        <div className="fixed top-0 left-0 right-0 z-40">
          <SignUpBar />
          <NavBar />
        </div>

        {/* Page Heading */}
        <div className="flex justify-center items-center h-60 mt-[100px] text-5xl font-bold">
          About Sajilo Mart
        </div>
      </div>

      {/* Content Section - White Background */}
      <div className="bg-white text-black font-sans">
        {/* Intro */}
        <section className="py-16 px-6 md:px-18">
          <h2 className="text-4xl font-heading font-bold text-center mb-8">
            Who We Are:
          </h2>
          <div className="justify-center items-center gap-10">
            <img
              src="https://images.unsplash.com/photo-1693382464188-1ed395d8d3e1?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Furniture Display"
              className="w-250 h-80 rounded-xl shadow-lg items-center justify-center mx-auto mb-8"
            />
            <p className="text-lg leading-8 text-justify">
              Sajilo Mart is more than just a furniture store — we are a
              movement to simplify living. We bring modern, affordable, and
              high-quality furniture directly to your doorstep. Our goal is to
              turn your empty spaces into beautiful places, where comfort meets
              creativity. Whether you're setting up your first apartment or
              upgrading your family home, Sajilo Mart makes it effortless and
              exciting.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6 md:px-28 bg-[#f9f9f9]">
          <h2 className="text-4xl font-heading font-bold text-center mb-8">
            Why Choose Sajilo Mart?
          </h2>
          <div className="grid grid-cols-1 font-body md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl shadow-md bg-white">
              <img
                src="https://st3.depositphotos.com/1001201/18722/i/450/depositphotos_187222058-stock-photo-super-fast-delivery-of-package.jpg"
                alt="Fast Delivery"
                className="mx-auto w-full h-40 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Superfast Delivery</h3>
              <p>
                Get your furniture at lightning speed. We deliver faster than
                you'd expect, with love and care.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-md bg-white">
              <img
                src="https://sumesshmenonassociates.com/wp-content/uploads/2023/09/living-room-furniture-banner-new.webp"
                alt="Affordable"
                className="mx-auto w-full h-40 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Affordable Luxury</h3>
              <p>
                We blend quality and affordability so you don’t have to choose
                between style and savings.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-md bg-white">
              <img
                src="https://workingsolutions.com/wp-content/uploads/2019/06/on-demand-customer-friendly-agent.jpg"
                alt="Support"
                className="mx-auto w-full h-40 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Friendly Support</h3>
              <p>
                Our team is here 24/7 to help with anything you need — before or
                after your purchase.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-6 md:px-28">
          <h2 className="text-4xl font-bold font-heading text-center mb-8">
            Our Story
          </h2>
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
            <img
              src="https://plus.unsplash.com/premium_photo-1744799173105-ee050275450a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Story"
              className="w-400 h-100 rounded-xl shadow-lg"
            />
            <p className="text-lg leading-8  font-body text-justify">
              Sajilo Mart started with a simple idea — to make stylish furniture
              easy to find, easy to buy, and easy to love. Tired of the
              complicated furniture experience in Nepal, our founders built a
              platform that values simplicity, creativity, and the joy of good
              design. We’ve grown from a small team to a nationwide brand, but
              our mission remains the same.
            </p>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 px-6 md:px-28 bg-[#f9f9f9]">
          <h2 className="text-4xl font-bold font-heading text-center mb-12">
            Meet the Dream Team
          </h2>
          <div className="grid grid-cols-1 font-body sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { name: "Alans Shrestha", role: "CEO", image: "/team1.jpg" },
              { name: "Bikash Thapa", role: "CTO", image: "/team2.jpg" },
              {
                name: "Sushma KC",
                role: "Marketing Head",
                image: "/team3.jpg",
              },
              {
                name: "Roshan Shrestha",
                role: "Product Manager",
                image: "/team4.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="bg-white">
          <Review />
        </div>
        <div className="bg-[#f9f9f9]">
          <Symbol />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
