import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shopping = () => {
  const [storeData, setStoreData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleData = async () => {
      try {
        const getData = await fetch(`https://fakestoreapi.com/products`);
        if (!getData.ok) {
          throw new Error("Data Not Found");
        }
        const getResponse = await getData.json();
        setStoreData(getResponse);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    handleData();
  }, []);

  return (
    <div>
      <h1 className=" text-center h-[70px] bg-cover p-2 text-white font-bold text-4xl font-serif bg-[url('https://media1.thehungryjpeg.com/thumbs2/ori_3835815_wk0wopmkr838t66mrszoxs7sq5s3ei2ail3lh5o1_theater-stage-festive-background-audience-movie-opera-light-with-red.jpg')]">
        Shop Top Brands
      </h1>
      <div className="bg-[url('https://png.pngtree.com/background/20210711/original/pngtree-red-curtain-product-gift-e-commerce-background-picture-image_1097410.jpg')] p-3 flex flex-wrap justify-evenly gap-6">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white border-4 border-yellow-400 h-[400px] w-[240px] p-4 mt-7 rounded-xl shadow-amber-500 shadow-lg"
              >
                <Skeleton
                  className="mb-3 mt-[50px]"
                  height={100}
                  width="100%"
                />
                <Skeleton className="mb-2" height={30} width="100%" />
                <Skeleton className="mb-2" height={20} width="100%" />
                <hr className="mt-6" />
                <Skeleton className="mb-2" height={20} width="40%" />
                <Skeleton height={30} width="20%" />
              </div>
            ))
          : storeData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
    setIsTruncated(!isTruncated);
  };

  const truncatedDescription =
    product.description.length > 100
      ? `${product.description.substring(0, 100)}...`
      : product.description;

  return (
    <div className="group bg-white border-4 border-yellow-400 w-[240px] p-5 mt-7 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 ease-out">
      <img
        src={product.image}
        alt="not image match"
        className="h-[150px] w-full border-2 border-l-rose-900 rounded-lg p-2"
      />
      <h1 className="text-blue-700 font-semibold text-center hover:text-red-500 mt-3 text-sm truncate">
        <Link to={`/Shopping/ProductDetail/${product.id}`}>
          {product.title}
        </Link>
      </h1>

      <p className="text-slate-500 text-base mb-4">
        {isExpanded ? product.description : truncatedDescription}
      </p>

      <button
        onClick={toggleDescription}
        className="text-blue-500 text-sm mt-2"
      >
        {isTruncated ? "Read more" : "Read less"}
      </button>

      <hr className="my-4" />

      <div className="flex items-center space-x-2">
        <BsCurrencyDollar className="text-lg" />
        <p className="text-lg font-semibold">{product.price}</p>
      </div>

      <div className="p-1 rounded-xl items-center text-white bg-green-700 inline-flex w-[50px] mt-3">
        <h1>{product.rating.rate}</h1>
        <FaStar className="text-lg" />
      </div>
      <button
        type="button"
        className="mb-3 relative ml-10 bg-sky-400 p-1 font-bold text-white rounded-md hover:bg-gradient-to-tr from-red-500 to-yellow-300"
      >
        Add Cart
      </button>
    </div>
  );
};

export default Shopping;
