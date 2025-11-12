import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const variant = product.variants[0] || {};
  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <img
        src={variant.images?.[0] || "https://via.placeholder.com/400"}
        alt={product.name}
        className="w-full h-48 object-contain mb-3"
      />
      <h2 className="font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-500">{variant.name}</p>
      <div className="mt-2">
        <div className="text-gray-500 line-through text-sm">₹{variant.mrp}</div>
        <div className="text-lg font-bold">₹{variant.price}</div>
      </div>
      <Link
        to={`/products/${product.slug}`}
        className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded">
        View Plans
      </Link>
    </div>
  );
}
