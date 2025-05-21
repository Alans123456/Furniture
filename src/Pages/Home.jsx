import React from "react";
import SignUpBar from "../Component/SignUpBar";
import NavBar from "../Component/NavBar";
import {
  Instagram,
  Facebook,
  Truck,
  ShoppingBag,
  Clock7,
  Repeat2,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import RoomGallery from "../Component/RoomGallery";
import DiscountCard from "../Component/DiscountCard";
import ProductCard from "../Component/ProductCard";
import Table from "../assets/Gallery/Table.jpeg";
import Categories from "../Component/Categories";
import Trending from "../Component/Trending";
import FlashSaleSection from "../Component/FlashSaleSection";
import Review from "../Component/Review";
import FAQItem from "../Component/FAQItem";
import PromoOffer from "../Component/PromoOffer";
import Sblog from "../Component/Sblog";
import Footer from "../Component/Footer";
import Newsletter from "../Component/NewsLetter";

export default function Home() {
  return (
    <>
      <div className="bg-primary">
        <SignUpBar />
        <NavBar />
        <div className="flex justify-between font-body px-16 py-10">
          <div className="flex flex-col text-white max-w-2xl space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Welcome to <br /> Sajilo Mart :
            </h1>
            <p className="leading-relaxed text-2xl pl-2">
              Discover the easiest way to shop online in Nepal. From daily
              groceries and home essentials to electronics, fashion, and more —
              we have everything you need, all in one place.
              <br />
              Enjoy smooth navigation, secure payments, and fast delivery right
              to your doorstep.
            </p>
            <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark w-fit transition duration-300">
              Shop Now
            </button>
            <div>
              <p className="text-2xl mb-2">Follow me on:</p>
              <div className="flex gap-4">
                <a href="#" className="text-pink-600 hover:text-pink-700">
                  <Instagram className="w-8 h-8" />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <Facebook className="w-8 h-8" />
                </a>
                <a href="#" className="text-black hover:text-gray-700">
                  <FontAwesomeIcon icon={faXTwitter} size="2x" />
                </a>
              </div>
            </div>
            <div className="flex text-heading gap-16 mt-5">
              <div>
                <h2 className="text-4xl">2500+</h2>
                <p className="text-2xl">Unique Styles</p>
              </div>
              <div>
                <h2 className="text-4xl">5000+</h2>
                <p className="text-2xl">Happy Customers</p>
              </div>
              <div>
                <h2 className="text-4xl">300+</h2>
                <p className="text-2xl">Certified Vendors</p>
              </div>
            </div>
          </div>
          <div>
            <RoomGallery />
          </div>
        </div>
      </div>

      <div className="bg-white flex justify-between p-8 px-20">
        <div className="flex flex-col w-60 items-center">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mt-5">
            <Truck className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-body mt-5 text-center">
            Fast & Free Delivery
          </h2>
        </div>
        <div className="flex flex-col w-60 items-center">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mt-5">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-body mt-5 text-center">Easy to Shop</h2>
        </div>
        <div className="flex flex-col w-60 items-center">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mt-5">
            <Clock7 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-body mt-5 text-center">24/7 Support</h2>
        </div>
        <div className="flex flex-col w-60 items-center">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mt-5">
            <Repeat2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-body mt-5 text-center">
            Hassle-Free Return
          </h2>
        </div>
      </div>

      <div className="bg-white p-6 mx-15  my-10 rounded-lg">
        <div className="flex flex-col lg:flex-row gap-6 ml-35 mr-35">
          {/* Left Section */}
          <div className="flex flex-col gap-6 w-full lg:w-2/3">
            <ProductCard
              title="Center Table"
              items={[
                "Square table",
                "Round table",
                "Wooden table",
                "Glass table",
              ]}
              image="https://bernadettelivingston.com/10622-large_default/rustic-style-solid-wood-round-dining-table.jpg"
              imgWidth="450px"
              imgHeight="340px"
            />

            <div className="flex flex-colgap-6 ">
              <div className="w-full sm:w-1/2 mr-5">
                <ProductCard
                  title="Lighting Lamp"
                  items={[
                    "Flore lamps",
                    "Tripod lamps",
                    "Table lamps",
                    "Study lamps",
                  ]}
                  image="https://i.pinimg.com/736x/26/ea/a1/26eaa1fd80bf8c1966f163c20ce7c103.jpg"
                  imgHeight="300px"
                  imageWidth="200px"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <DiscountCard />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/3">
            <ProductCard
              title="Accent Chairs"
              items={["Arm chair", "Wing chair", "Cafe chair", "Wheels chair"]}
              image="https://i.pinimg.com/736x/79/a7/66/79a7668d0f446f06df049d09161c64b9.jpg"
              imgWidth="600px"
              imgHeight="550px"
            />
          </div>
        </div>
      </div>
      <div className="bg-white mx-5 my-5 rounded-lg">
        <Categories />
      </div>
      <div>
        <Trending />
      </div>
      <div>
        <FlashSaleSection />
      </div>
      <div>
        <PromoOffer />
      </div>
      <div>
        <Review />
      </div>
      <div className="mx-5 my-5">
        <Sblog />
      </div>
      <div>
        <FAQItem />
      </div>
      <div>
        <Newsletter />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
