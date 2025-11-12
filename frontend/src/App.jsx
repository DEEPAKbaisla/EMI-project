import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">EMI Shop</Link>
        <nav>
          <Link to="/" className="px-3">Products</Link>
        </nav>
      </div>
    </header>
  );
}
