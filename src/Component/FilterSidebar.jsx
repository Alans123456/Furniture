import React, { useState } from "react";

const FilterSidebar = ({
  product,
  selectedCategory,
  setSelectedCategory,
  selectedType,
  setSelectedType,
  priceRange,
  setPriceRange,
  minAvailablePrice,
  maxAvailablePrice,
}) => {
  const [filterOpen, setFilterOpen] = useState({
    category: false,
    price: false,
    type: false,
  });

  const categories = ["All", ...new Set(product.map((p) => p.category))];
  const types = ["All", ...new Set(product.map((p) => p.type))];

  const toggleFilter = (filterName) => {
    setFilterOpen((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const arrowClass = (isOpen) =>
    `text-xl cursor-pointer transform transition-transform duration-300 ${
      isOpen ? "rotate-0" : "-rotate-180"
    }`;

  return (
    <div className="w-64 h-[calc(100vh-8rem)] sticky top-32 bg-white p-4 rounded-xl shadow overflow-y-auto font-body">
      <h2 className="text-2xl font-heading font-bold mb-6">Filter Option</h2>

      {/* Category Filter */}
      <div className="mb-6 border rounded p-3 shadow-sm">
        <div
          className="flex items-center justify-between mb-3 cursor-pointer select-none font-heading"
          onClick={() => toggleFilter("category")}
        >
          <h3 className="text-lg font-semibold">Category</h3>
          <span className={arrowClass(filterOpen.category)}>⌃</span>
        </div>
        {filterOpen.category && (
          <div className="space-y-2">
            {categories.map((cat) => (
              <label
                key={cat}
                className={`flex items-center space-x-3 px-4 py-2 rounded-full border cursor-pointer transition ${
                  selectedCategory === cat
                    ? "border-yellow-500 bg-yellow-100 text-yellow-700"
                    : "border-gray-300 bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                  className="hidden"
                />
                <div
                  className={`w-4 h-4 rounded-full border ${
                    selectedCategory === cat
                      ? "border-yellow-500 bg-yellow-500"
                      : "border-gray-400"
                  }`}
                />
                <span className="text-sm font-medium">{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Type Filter */}
      <div className="mb-6 border rounded p-3 shadow-sm">
        <div
          className="flex items-center justify-between mb-3 cursor-pointer select-none font-heading"
          onClick={() => toggleFilter("type")}
        >
          <h3 className="text-lg font-semibold">Type</h3>
          <span className={arrowClass(filterOpen.type)}>⌃</span>
        </div>
        {filterOpen.type && (
          <div className="space-y-2">
            {types.map((t) => (
              <label
                key={t}
                className={`flex items-center space-x-3 px-4 py-2 rounded-full border cursor-pointer transition ${
                  selectedType === t
                    ? "border-yellow-500 bg-yellow-100 text-yellow-700"
                    : "border-gray-300 bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <input
                  type="radio"
                  name="type"
                  value={t}
                  checked={selectedType === t}
                  onChange={() => setSelectedType(t)}
                  className="hidden"
                />
                <div
                  className={`w-4 h-4 rounded-full border ${
                    selectedType === t
                      ? "border-yellow-500 bg-yellow-500"
                      : "border-gray-400"
                  }`}
                />
                <span className="text-sm font-medium">{t}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="mb-6 border rounded p-3 shadow-sm">
        <div
          className="flex items-center justify-between mb-3 cursor-pointer select-none font-heading"
          onClick={() => toggleFilter("price")}
        >
          <h3 className="text-lg font-semibold">Price</h3>
          <span className={arrowClass(filterOpen.price)}>⌃</span>
        </div>
        {filterOpen.price && (
          <div className="flex items-center justify-between gap-2">
            <input
              type="number"
              min={minAvailablePrice}
              max={priceRange[1] === "" ? maxAvailablePrice : priceRange[1]}
              value={priceRange[0] === "" ? "" : priceRange[0]}
              onChange={(e) => {
                const val = e.target.value === "" ? "" : Number(e.target.value);
                if (
                  val === "" ||
                  val <=
                    (priceRange[1] === "" ? maxAvailablePrice : priceRange[1])
                ) {
                  setPriceRange([val, priceRange[1]]);
                }
              }}
              placeholder="Min"
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm font-body"
            />
            <input
              type="number"
              min={priceRange[0] === "" ? minAvailablePrice : priceRange[0]}
              value={priceRange[1] === "" ? "" : priceRange[1]}
              onChange={(e) => {
                const val = e.target.value === "" ? "" : Number(e.target.value);
                if (
                  val === "" ||
                  val >=
                    (priceRange[0] === "" ? minAvailablePrice : priceRange[0])
                ) {
                  setPriceRange([priceRange[0], val]);
                }
              }}
              placeholder="Max"
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm font-body"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
