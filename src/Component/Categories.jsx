import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  const categoriesData = [
    {
      id: 1,
      name: "Sofas",
      image:
        "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=60",
      description: "Cozy sofas and couches to relax and unwind.",
    },
    {
      id: 2,
      name: "Beds",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
      description: "Comfortable beds for a good night's sleep.",
    },
    {
      id: 3,
      name: "Dining Sets",
      image:
        "https://images.unsplash.com/photo-1615874958890-9a3746cd2cf7?auto=format&fit=crop&w=800&q=60",
      description: "Complete dining sets for family meals and guests.",
    },
    {
      id: 4,
      name: "Chairs",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=60",
      description: "Comfortable and stylish chairs for every room.",
    },
    {
      id: 5,
      name: "Coffee Tables",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=60",
      description: "Elegant coffee tables for your lounge area.",
    },
    {
      id: 6,
      name: "Wardrobes",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
      description: "Spacious wardrobes for all your clothing needs.",
    },
    {
      id: 7,
      name: "Desks",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
      description: "Functional desks for home offices and study rooms.",
    },
    {
      id: 8,
      name: "Bookcases",
      image:
        "https://images.unsplash.com/photo-1616627984894-f2e3ad211ed6?auto=format&fit=crop&w=800&q=60",
      description: "Perfect shelves for your book collection and decor.",
    },
    {
      id: 9,
      name: "Nightstands",
      image:
        "https://images.unsplash.com/photo-1616486302835-ec39b487d7a2?auto=format&fit=crop&w=800&q=60",
      description: "Handy nightstands to keep essentials within reach.",
    },
    {
      id: 10,
      name: "TV Stands",
      image:
        "https://images.unsplash.com/photo-1616628182504-8403285b4423?auto=format&fit=crop&w=800&q=60",
      description: "Stylish TV units to elevate your living room.",
    },
    {
      id: 11,
      name: "Accent Chairs",
      image:
        "https://images.unsplash.com/photo-1603808033192-e59adf94c6a0?auto=format&fit=crop&w=800&q=60",
      description: "Add a pop of color and comfort with accent seating.",
    },
    {
      id: 12,
      name: "Outdoor Furniture",
      image:
        "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=60",
      description: "Durable furniture for your garden and patio.",
    },
    {
      id: 13,
      name: "Vanities",
      image:
        "https://images.unsplash.com/photo-1605743031063-cd1e96934de2?auto=format&fit=crop&w=800&q=60",
      description: "Elegant vanity tables for your personal grooming space.",
    },
    {
      id: 14,
      name: "Entryway Tables",
      image:
        "https://images.unsplash.com/photo-1606157223784-81a6cfa0d7f0?auto=format&fit=crop&w=800&q=60",
      description: "Decorate your hallway with stylish entry tables.",
    },
    {
      id: 15,
      name: "Room Dividers",
      image:
        "https://images.unsplash.com/photo-1616627723755-44855fef43d3?auto=format&fit=crop&w=800&q=60",
      description: "Stylish partitions to create separate zones.",
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // pixels to scroll
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="mt-10 px-4">
      <h1 className="text-5xl  font-heading text-center mb-6">
        Featured Categories :
      </h1>

      <div className="relative flex items-center">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 bg-gray-400 text-white p-3 rounded-full hover:bg-gray-500 transition"
          aria-label="Scroll Left"
        >
          &#8592;
        </button>

        {/* Scrollable Categories Container */}
        <div
          ref={scrollRef}
          className="overflow-x-scroll scrollbar-hide flex space-x-4 w-full "
          style={{ scrollBehavior: "smooth" }}
        >
          {categoriesData.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="bg-gray-200 w-[280px] flex-shrink-0 p-4 rounded-lg shadow-md"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold">{category.name}</h2>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 bg-gray-400 text-white p-3 rounded-full hover:bg-gray-500 transition"
          aria-label="Scroll Right"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
