import React, { useState } from "react";
import { product } from "../Component/Product";
import ProductsCard from "../Component/ProductsCard";
import { useNavigate } from "react-router-dom";
import SignUpBar from "../Component/SignUpBar";
import NavBar from "../Component/NavBar";
import FilterSidebar from "../Component/FilterSidebar"; // Imported the separate filter component
import Footer from "../Component/Footer";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const prices = product.map((p) => p.price);
  const minAvailablePrice = Math.min(...prices);
  const maxAvailablePrice = Math.max(...prices);

  const filteredProducts = product.filter((p) => {
    const categoryMatch =
      selectedCategory === "All" || p.category === selectedCategory;
    const typeMatch = selectedType === "All" || p.type === selectedType;
    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
    return categoryMatch && typeMatch && priceMatch;
  });

  const productsPerPage = 9;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const addToCart = (id) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
      alert("Added to cart!");
    }
  };

  const openProductDetail = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 right-0 font-heading z-50">
        <SignUpBar />
        <NavBar />
      </div>
      <div className="flex justify-center items-center h-48 bg-primary mt-[90px] text-white font-heading text-5xl">
        Products:
      </div>

      {/* Main Content */}
      <div className="flex flex-1 pt-32">
        {/* Filter Sidebar */}
        <FilterSidebar
          product={product}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          minAvailablePrice={minAvailablePrice}
          maxAvailablePrice={maxAvailablePrice}
        />

        {/* Product Grid and Pagination */}
        <div className="flex-1 pl-8 mb-10 max-h-[calc(100vh-8rem)] overflow-y-auto">
          {/* Pagination Arrows */}
          <div className="flex justify-between items-center mb-6">
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              ← Prev
            </button>
            <span className="text-gray-700 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded disabled:opacity-50"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentProducts.map((p) => (
              <ProductsCard
                key={p.id}
                product={p}
                onAddToCart={addToCart}
                onOpenDetail={openProductDetail}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Products;
