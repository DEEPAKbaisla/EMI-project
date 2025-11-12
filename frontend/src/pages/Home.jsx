import React, { useEffect, useState } from 'react';
import { api } from '../api';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);

//   useEffect(() => {
//     api.get('/api/products').then(res => {
//       setProducts(res.data);
//     }).catch(err => {
//       console.error(err);
//     });
//   }, []);
useEffect(() => {
  api.get('/api/products')
    .then(res => {
      console.log("API Response:", res.data);
      setProducts(res.data);
    })
    .catch(err => {
      console.error("API Error:", err);
    });
}, []);


  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </main>
  );
}
