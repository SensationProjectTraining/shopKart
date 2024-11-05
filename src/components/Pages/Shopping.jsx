import React, { useState, useEffect } from 'react';
import { IoIosPricetag } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";
import { FcRating } from "react-icons/fc";
import { FiLoader } from "react-icons/fi"; 

const Shopping = () => {
  const [storeData, setStoreData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleData = async () => {
      try {
        const getData = await fetch("https://fakestoreapi.com/products");
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
      <div className="bg-amber-100 p-3 flex flex-wrap justify-evenly">
        {isLoading ? (
          <h1 className="h-[500px] w-full text-8xl flex justify-center p-20 items-center">
            <FiLoader className="animate-spin inline-block" />
          </h1>
        ) : (
          storeData.map((product) => (
            <div
              key={product.id}
              className="bg-white w-[250px] border-2 border-black p-2 mb-2 rounded-lg shadow-red-400 shadow-lg hover:scale-95 duration-300 ease-linear"
            >
              <button type='button' className='relative left-[150px] bg-sky-400 p-2 font-bold text-white rounded-md hover:bg-gradient-to-tr from-red-500 to-yellow-300'>Add Cart</button>
              <h1 className="text-blue-700 font-semibold text-center hover:text-red-500">
                {product.title}
              </h1>
              <img
                src={product.image}
                alt="not image match"
                className="h-[120px] w-full border-2 border-l-rose-900 rounded-lg p-2"
              />
              <h4 className="text-violet-900 font-semibold">Description:</h4>
              <p className="text-wrap break-words font-serif text-justify whitespace-normal">
                {product.description}
              </p>
              <span className="font-semibold text-green-950">
                <IoIosPricetag className="inline-block" />
                Price: <BsCurrencyDollar className="inline-block" />
                {product.price}
              </span>
              <span className="font-semibold text-green-950">
                <FcRating className="inline-block ml-2" />
                Rating: {product.rating.rate}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Shopping;
