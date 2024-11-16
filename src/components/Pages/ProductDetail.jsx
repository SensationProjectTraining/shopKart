import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);
  const [cart, setCart]= useState(0)

  function addTocart(){
    setCart(productId)
  }
  console.log(productId)
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-5 mb-1">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 ">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-[300px] border rounded-lg shadow-lg p-1 "
          />
        </div>

        <div className="flex-grow">
          <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
          <p className="text-green-600 text-lg font-semibold">Special price</p>
          <div className="flex items-center text-2xl font-bold text-gray-800">
            <BsCurrencyRupee />
            <span>{product.price}</span>
            <span className="text-gray-500 line-through ml-4">₹999</span>
            <span className="ml-2 text-green-600">71% off</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-green-700 text-lg font-semibold mr-1">
              {product.rating.rate}
            </span>
            <FaStar className="text-yellow-300" />
            <span className="text-gray-600 ml-2">
              2,523 ratings and 103 reviews
            </span>
          </div>

          <div className="mt-4">
            <p className="text-lg font-semibold">Color</p>
            <div className="flex gap-2 mt-2">
              <img
                src={product.image}
                alt="Black color"
                className="w-10 h-10 border rounded p-1"
              />
            </div>

          <button className="text-2xl text-red-800" onClick={addTocart}>Buy Now</button>
          </div>

          <div className="mt-4">
            <div className="mt-4">
              <p className="text-lg font-semibold">Size</p>
              <div className="flex gap-2 mt-2">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeClick(size)}
                    className={`border p-2 rounded-md w-12 text-center ${
                      selectedSize === size ? "bg-green-300" : "bg-gray-300"
                    } hover:bg-green-200`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <p className="text-lg font-semibold">Available offers</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit
                  Card
                </li>
                <li>
                  Bank Offer Flat ₹2,000 off on HDFC Bank Credit Card EMI Txns
                  on 6 and 9 months tenure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;



{/* <h1 className=" text-center h-[70px] bg-cover p-2 text-white font-bold text-4xl font-serif bg-[url('https://media1.thehungryjpeg.com/thumbs2/ori_3835815_wk0wopmkr838t66mrszoxs7sq5s3ei2ail3lh5o1_theater-stage-festive-background-audience-movie-opera-light-with-red.jpg')]">
Shop Top Brands
</h1>
<div className="bg-[url('https://jooinn.com/images/red-stage-curtain-4.png')] p-3 flex flex-w */}
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
// import { BsCurrencyDollar } from "react-icons/bs";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// {isLoading
//   ? Array.from({ length: 6 }).map((_, index) => (
//       <div
//         key={index}
//         className="bg-white border-4 border-yellow-400 h-[400px] w-[240px] p-4 mt-7 rounded-xl shadow-amber-500 shadow-lg"
//       >
//         <Skeleton
//           className="mb-3 mt-[50px]"
//           height={100}
//           width="100%"
//         />
//         <Skeleton className="mb-2" height={30} width="100%" />
//         <Skeleton className="mb-2" height={20} width="100%" />
//         <hr className="mt-6" />
//         <Skeleton className="mb-2" height={20} width="40%" />
//         <Skeleton height={30} width="20%" />
//       </div>
//     ))
//   : storeData.map((product) => (
//       <ProductCard key={product.id} product={product} />
//     ))}
// </div>
// </div>
// );
// };
