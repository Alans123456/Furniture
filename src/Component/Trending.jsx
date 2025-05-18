import React from "react";

export default function Trending(trending) {
  return (
    <>
      <div>
        <div className="flex justify-between ml-10 mt-10 mr-10">
          <h1 className="text-5xl  font-heading">
            Trending product <br /> for you:
          </h1>
          <button className=" items-center justify-center bg-secondary text-white font-bold px-4 w-50 h-15 mt-5 py-2 rounded-full mb-4">
            View all products →
          </button>
        </div>
      </div>
    </>
  );
}
