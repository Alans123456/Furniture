import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const reviews = [
  {
    name: "Emily K.",
    location: "New York, NY",
    image: "/images/client-1.jpg",
    text: "I recently purchased a beautiful dining set from FurniFlex. The quality is top-notch and it looks even better in person.",
  },
  {
    name: "Sarah L.",
    location: "Los Angeles, CA",
    image: "/images/client-2.jpg",
    text: "Love the modern style of my new sofa. Delivery was quick and packaging was great.",
  },
  {
    name: "Michael B.",
    location: "Chicago, IL",
    image: "/images/client-3.jpg",
    text: "Great value for money. Support team answered all my queries patiently.",
  },
  {
    name: "Jessica M.",
    location: "Houston, TX",
    image: "/images/client-4.jpg",
    text: "The coffee table fits perfectly. Super sturdy and stylish.",
  },
  {
    name: "David R.",
    location: "Seattle, WA",
    image: "/images/client-5.jpg",
    text: "Third order from FurniFlex — they never disappoint. Great products!",
  },
];

const Review = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 320;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="px-4 md:px-12 py-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold  text-gray-900 mb-6">
            Don't belive us? <br /> See what our customers say!
          </h2>
        </div>
        <div className="flex justify-end gap-2 ">
          <button
            className="p-2 rounded-full bg-white border border-gray-300"
            onClick={() => scroll("left")}
          >
            <ArrowLeft className="text-gray-700" size={20} />
          </button>
          <button
            className="p-2 rounded-full bg-yellow-600"
            onClick={() => scroll("right")}
          >
            <ArrowRight className="text-white" size={20} />
          </button>
        </div>
      </div>

      {/* Scrollable container */}
      <div className="relative">
        {/* Scrollable reviews */}
        <div
          ref={scrollRef}
          className="flex gap-4 font-body overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="snap-start shrink-0 min-w-[400px] max-w-[300px] bg-primary border border-gray-200 rounded-xl shadow hover:shadow-md transition-all duration-300"
            >
              <div className="grid grid-cols-3 h-full">
                {/* Image (1/3) */}
                <div className="col-span-1">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover rounded-l-xl"
                  />
                </div>

                {/* Text Content (2/3) */}
                <div className="col-span-2 p-4 flex flex-col justify-between">
                  <p className="text-sm text-white mb-2 leading-snug">
                    "{review.text}"
                  </p>
                  <div className="text-xs text-white mt-2 border-t pt-2">
                    <p className="font-body text-white">{review.name}</p>
                    <p className="font-body">{review.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
      </div>
    </section>
  );
};

export default Review;
