import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

function ShoppingProductsPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);  
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm animate-pulse">
                <div className="w-full h-40 bg-gray-200 mb-4 rounded"></div>
                <div className="h-4 bg-gray-200 mb-2 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 mb-4 rounded w-1/2"></div>
                <div className="h-10 bg-orange-200 rounded w-full"></div>
              </div>
            ))
          : filteredProducts.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                <Link to={`/ProductDetail/${product.id}`} >
                <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-4 " />
                </Link>
                <Link to={`/ProductDetail/${product.id}`} >
                  <h3 className="text-lg font-semibold hover:text-blue-500 transition-colors duration-200">{product.title}</h3>
                </Link>
                <p className="text-green-600 font-semibold">₹{product.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
                >
                  Add to Cart
                </button>
              </div>
            ))}
      </div>
    </div>
  );
}

export default ShoppingProductsPage;
