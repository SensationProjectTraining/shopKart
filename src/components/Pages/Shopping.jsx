import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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
      <h1 className="rounded-t-3xl text-center h-[70px] bg-cover p-2 text-white font-bold text-3xl bg-[url('https://media1.thehungryjpeg.com/thumbs2/ori_3835815_wk0wopmkr838t66mrszoxs7sq5s3ei2ail3lh5o1_theater-stage-festive-background-audience-movie-opera-light-with-red.jpg')]">
        Cop Top Brands
      </h1>
      <div className="bg-[url('https://img.freepik.com/premium-photo/curtain-with-brown-curtain-left-side_14117-9119.jpg')] p-3 flex flex-wrap justify-evenly">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white border-4 border-yellow-400 h-[350px] w-[240px] p-2 mt-7 rounded-xl shadow-amber-500 shadow-lg"
              >
                <Skeleton className="mb-3 mt-[50px]" height={100} width="100%" />
                <Skeleton className="mb-2" height={30} width="100%" />
                <Skeleton className="mb-2" height={20} width="100%" />
                <hr className="mt-6" />
                <Skeleton className="mb-2" height={20} width="40%" />
                <Skeleton height={30} width="20%" />
              </div>
            ))
          : storeData.map((product) => (
              <div
                key={product.id}
                className="bg-white border-4 border-yellow-400 h-[350px] w-[240px] p-2 mt-7 rounded-xl shadow-amber-500 shadow-lg hover:scale-95 duration-300 ease-linear"
              >
                <button
                  type="button"
                  className="mb-3 relative left-[130px] bg-sky-400 p-2 font-bold text-white rounded-md hover:bg-gradient-to-tr from-red-500 to-yellow-300"
                >
                  Add Cart
                </button>
                <img
                  src={product.image}
                  alt="not image match"
                  className="h-[120px] w-full border-2 border-l-rose-900 rounded-lg p-2"
                />
                {/* Title with ellipsis class */}
                <h1 className="text-blue-700 font-semibold text-center hover:text-red-500 mt-3 ellipsis cursor-pointer">
                  <Link to={`/Shopping/ProductDetail/${product.id}`}>
                    {product.title}
                  </Link>
                </h1>

                {/* Description with ellipsis class */}
                <p className="text-slate-500 text-base h-[30px] ellipsis mb-5">
                  {product.description}
                </p>
                <hr />
                <div className="flex items-center">
                  <BsCurrencyDollar className="text-lg" />
                  <p className="text-lg">{product.price}</p>
                </div>

                <div className="p-1 rounded-xl items-center text-white bg-green-700 inline-flex w-[50px] mt-3">
                  <h1>{product.rating.rate}</h1>
                  <FaStar className="text-lg" />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Shopping;
