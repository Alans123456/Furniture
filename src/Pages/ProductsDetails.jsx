import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { product } from "../Component/Product";
import { ShoppingCart } from "lucide-react";

const ProductsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const prod = product.find((p) => p.id === parseInt(id));
  if (!prod) return <p>Product not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-red-600 text-white rounded"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={prod.image}
          alt={prod.name}
          className="w-full md:w-1/2 h-auto rounded"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{prod.name}</h1>
          <p className="mb-2 text-xl font-semibold">${prod.price.toFixed(2)}</p>
          <p className="mb-4">Discount: {prod.discount}%</p>
          <p className="mb-6">
            {prod.description || "No description available."}
          </p>
          <button className="flex items-center gap-2 bg-yellow-500 px-4 py-2 rounded text-white font-semibold hover:bg-yellow-600 transition">
            <ShoppingCart size={20} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
