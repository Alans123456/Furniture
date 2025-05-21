import React from "react";

const PromoOffer = () => {
  return (
    <div className="flex flex-col md:flex-row font-body gap-6 ml-45 mr-45 my-10">
      {/* Left Card - Exclusive Offer */}
      <div
        className="relative flex-1 bg-cover bg-center rounded-2xl overflow-hidden text-white"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
      >
        <div className="bg-black/40 w-full h-70 p-8 flex  font-body flex-col justify-between">
          <div>
            <span className="bg-white text-yellow-600 text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block">
              15% OFF
            </span>
            <h2 className="text-3xl font-bold leading-snug">
              Best Online Deals, Free Stuff
            </h2>
            <p className="mt-2 text-lg">Only on this week... Donit miss</p>
          </div>
          <button className="mt-6 bg-yellow-500 text-black font-medium py-2 px-4 rounded-full w-max">
            Get Best Deal →
          </button>
        </div>
      </div>

      {/* Right Card - Regular Offer */}
      <div className="flex-1 bg-gray-100 p-8 rounded-2xl">
        <span className="text-gray-500 font-medium">Regular Offer</span>
        <h3 className="text-3xl font-semibold mt-2 mb-4">
          10% cash-back on personal care
        </h3>
        <p className="text-gray-600 mb-6">Max cashback: $12. Code: CADHL837</p>
        <button className="bg-teal-800 text-white font-medium py-2 px-6 rounded-full">
          Shop Now →
        </button>
      </div>
    </div>
  );
};

export default PromoOffer;
