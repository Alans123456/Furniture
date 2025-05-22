import React from "react";
import {
  Instagram,
  Facebook,
  Truck,
  ShoppingBag,
  Clock7,
  Repeat2,
} from "lucide-react";

export default function Symbol() {
  return (
    <>
      <div className=" flex justify-between p-8 px-20">
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
    </>
  );
}
