import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Shopping = () => {
  const [storedata, setStoreData] = useState([]);
  const [Isloading, setIsLoading] = useState(true);

  // Function to truncate text with ellipsis
  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

  useEffect(() => {
    const handledata = async () => {
      try {
        const getdata = await fetch(`https://fakestoreapi.com/products`);
        if (!getdata) {
          throw new Error("Something went wrong!!!");
        }
        const response = await getdata.json();
        setStoreData(response);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    handledata();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center h-[70px] bg-cover p-2 text-white font-bold text-4xl font-serif bg-[url('https://media1.thehungryjpeg.com/thumbs2/ori_3835815_wk0wopmkr838t66mrszoxs7sq5s3ei2ail3lh5o1_theater-stage-festive-background-audience-movie-opera-light-with-red.jpg')] rounded-t-3xl">
          Shop Top Brands
        </h1>
      </div>
      <div className="bg-[url('https://jooinn.com/images/red-stage-curtain-4.png')] h-auto w-full flex flex-wrap justify-around border-2 border-black gap-4 p-2">
        {Isloading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white h-auto w-[250px]  rounded-xl p-3"
              >
                <Skeleton height={100} width="100%" className="mb-3"></Skeleton>
                <Skeleton height={30} width="100%" className="mb-2"></Skeleton>
                <hr />
                <Skeleton
                  height={20}
                  width="100%"
                  className="mb-2  mt-4"
                ></Skeleton>
                <Skeleton height={20} width="100%" className="mb-2"></Skeleton>
                <Skeleton
                  height={20}
                  width="40%"
                  className="mb-2 mt-1 inline-block"
                ></Skeleton>
              </div>
            ))
          : storedata.map((product) => (
              <div
                key={product.id}
                className="bg-white hover:scale-105 duration-300 ease-linear h-auto w-[250px] mt-5 mb-5 rounded-xl shadow-lg shadow-yellow-300 p-3"
              >
                <img
                  src={product.image}
                  alt="image not found"
                  className="h-[130px] w-full border-2 border-gray-500 p-2 rounded-md"
                />

                {/* Truncate the title */}
                <h1 className="text-center text-lg font-semibold mt-2 text-blue-800 hover:text-red-600">
                  <Link to={`/product/${product.id}`}>
                    {truncateText(product.title, 20)}{" "}
                    {/* Truncate title to 30 characters */}
                  </Link>
                </h1>
                <hr className="mt-2" />
                {/* Truncate the description */}
                <p className="mt-3">
                  {truncateText(product.description, 75)}{" "}
                  {/* Truncate description to 100 characters */}
                </p>
                <div className="items-center justify-start flex space-x-2">
                  <p className="text-lg font-semibold mt-2 items-center flex">
                    <BsCurrencyDollar className="inline-block text-center" />
                    {product.price}
                  </p>
                  <p className="text-base bg-green-500 text-white  p-1 rounded-lg font-semibold mt-2 flex items-center">
                    {product.rating.rate}
                    <FaStar className="inline-block items-center" />
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
