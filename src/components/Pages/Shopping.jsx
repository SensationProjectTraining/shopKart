import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
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
        <h1 className="rounded-t-3xl text-center h-[70px] bg-cover p-2 text-white font-bold text-3xl bg-[url('https://media1.thehungryjpeg.com/thumbs2/ori_3835815_wk0wopmkr838t66mrszoxs7sq5s3ei2ail3lh5o1_theater-stage-festive-background-audience-movie-opera-light-with-red.jpg')]">Cop Top Brands</h1>
      <div className="bg-[url('https://img.freepik.com/premium-photo/curtain-with-brown-curtain-left-side_14117-9119.jpg')] p-3 flex flex-wrap justify-evenly">
        {isLoading ? (
          <h1 className="h-[500px] w-full text-8xl flex justify-center p-20 items-center">
            <FiLoader className="animate-spin inline-block text-yellow-400 text-9xl" />
          </h1>
          
        ) : (
          storeData.map((product) => (
            <div
              key={product.id}
              className="bg-white border-4 border-yellow-400 h-[350px] w-[240px]  p-2  mt-7 rounded-xl shadow-amber-500 shadow-lg hover:scale-95 duration-300 ease-linear"
            >
              <button type='button' className=' mb-3 relative left-[130px] bg-sky-400 p-2 font-bold text-white rounded-md hover:bg-gradient-to-tr from-red-500 to-yellow-300'>Add Cart</button>
              <img
                src={product.image}
                alt="not image match"
                className="h-[120px] w-full border-2 border-l-rose-900 rounded-lg p-2"
              />
              <h1 className="text-blue-700 font-semibold text-center hover:text-red-500 mt-3 whitespace-nowrap overflow-hidden overflow-ellipsis">
                {product.title}
              </h1>
              <p className="text-slate-500 text-base h-[30px] overflow-hidden overflow-ellipsis whitespace-nowrap mb-5">
                {product.description}
              </p> <hr></hr>
              <div className="flex items-center">
  <BsCurrencyDollar className="text-lg" />
  <p className="text-lg">{product.price}</p>
</div>

<div className="p-1 rounded-xl items-center text-white bg-green-700 inline-flex w-[50px] mt-3">
<h1>{product.rating.rate}</h1>
<FaStar  className="text-lg " />
               
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Shopping;
