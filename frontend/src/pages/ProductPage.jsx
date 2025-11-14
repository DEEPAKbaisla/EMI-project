import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";
import EMIList from "../components/EMIList";

export default function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [variantLoading, setVariantLoading] = useState(false);


  useEffect(() => {
    setLoading(true);

    api
      .get(`/api/products/${slug}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  if (!product) return <div className="p-6">Loading...</div>;

  const variant = product.variants[selectedVariantIndex];
  const handleVariantChange = (index) => {
    setVariantLoading(true);

    setSelectedVariantIndex(product.variants[index]);

    setTimeout(() => {
      setVariantLoading(false);
    }, 400); // 400ms smooth delay
  };

  return (
    <main className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          {variantLoading ? (
            <div className="flex items-center justify-center h-64 w-full">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-indigo-600"></div>
            </div>
          ) : (
            <img
              src={variant.images[0]}
              alt={product.name}
              className="w-full object-contain"
            />
          )}
        </div>
        <div className="col-span-2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-1">{variant.name}</p>
          <div className="mt-3">
            <div className="line-through text-sm text-gray-500">
              ₹{variant.mrp}
            </div>
            <div className="text-2xl font-bold">₹{variant.price}</div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium">Variants</label>
            <div className="flex gap-2 mt-2">
              {product.variants.map((v, idx) => (
                <button
                  key={v.sku}
                  onClick={() => {
                    setSelectedVariantIndex(idx);
                    setSelectedPlanIndex(null);
                  }}
                  className={`px-3 py-1 border rounded ${
                    idx === selectedVariantIndex
                      ? "bg-indigo-600 text-white"
                      : ""
                  }`}>
                  {v.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <EMIList
              plans={variant.emiPlans}
              onSelect={(i) => setSelectedPlanIndex(i)}
              selectedIndex={selectedPlanIndex}
              price={variant.price}
            />
          </div>

          <div className="mt-6">
            <button
              disabled={selectedPlanIndex === null}
              className={`px-4 py-2 rounded ${
                selectedPlanIndex === null
                  ? "bg-gray-300"
                  : "bg-green-600 text-white"
              }`}>
              Proceed with Selected Plan
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
