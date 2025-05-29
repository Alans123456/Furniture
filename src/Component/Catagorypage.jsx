import React, { useState, useEffect } from "react";
import ProductCard from "./ProductsCard";
import { product as Product } from "./Product";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate

export default function Catagorypage() {
  const [selectedCategory, setSelectedCategory] = useState("Living Room");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [allTypes, setAllTypes] = useState([]);

  const navigate = useNavigate(); // <-- initialize navigate

  useEffect(() => {
    const filtered = Product.filter(
      (item) => item.category === selectedCategory
    );
    setFilteredProducts(filtered);

    const types = [...new Set(filtered.map((item) => item.type))];
    setAllTypes(["All", ...types.sort()]);
    setSelectedType("All");
  }, [selectedCategory]);

  const getFilteredByType = () => {
    if (selectedType === "All") {
      return filteredProducts;
    }
    return filteredProducts.filter((item) => item.type === selectedType);
  };

  const getTypeCount = (type) => {
    if (type === "All") {
      return filteredProducts.length;
    }
    return filteredProducts.filter((item) => item.type === type).length;
  };

  const productsToShow = getFilteredByType();

  // New function to navigate on product click
  const openProductDetails = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-48 bg-primary mt-[90px] text-white text-center px-4">
        <h1 className="text-5xl font-bold font-heading mb-2">
          {selectedCategory}
        </h1>
        <p className="text-lg opacity-80">
          Discover our collection of {selectedCategory.toLowerCase()} furniture
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Category Selector */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Category:
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Living Room">Living Room</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Dining Room">Dining Room</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Indoor">Indoor</option>
            <option value="Office">Office</option>
          </select>
        </div>

        {/* Type Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Filter by Type:
          </h3>
          <div className="flex flex-wrap gap-3">
            {allTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border-2 ${
                  selectedType === type
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {type} ({getTypeCount(type)})
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 mt-20">
          {productsToShow.length === 0 ? (
            <p>No products found for this category/type.</p>
          ) : (
            productsToShow.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={() => alert("Added to cart!")} // example handler
                onClick={() => openProductDetails(p.id)} // navigate to details page
              />
            ))
          )}
        </div>

        {/* No Products */}
        {productsToShow.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🛋️</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">
              Try selecting a different category or type filter.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
