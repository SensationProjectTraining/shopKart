import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';
import { MdOutlineMessage } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton'; 
import 'react-loading-skeleton/dist/skeleton.css';
import { useUserContext } from '../../context/Context';

export const DetailsPage = () => {
  const [storedata, setStoreData] = useState(null);  
  const [loading, setLoading] = useState(true);  
  const { productId } = useParams();
 const {addToCart} = useUserContext();

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        
      
        if (!response.ok) {
          throw new Error('Product not found');
        }
        
        const data = await response.json();
        setStoreData(data);  
      } catch (err) {
        setError(err.message);  
      } finally {
        setLoading(false);  
      }
    };

    fetchData();
  }, [productId]);
  
   const handleAddToCart = ()=>{
    if (storedata) {
      addToCart(storedata);  
    }
   }

  return (
    <div className="p-6">
      {loading ? (
        // Skeleton loader for when the page is loading
        <div className="flex items-start">
          {/* Image Skeleton Loader */}
          <div className="bg-slate-300 p-4 h-[400px] w-[400px] flex items-center justify-center rounded-2xl box-border">
            <Skeleton width={300} height={300} className='box-border rounded-2xl'/>
          </div>

          {/* Text Skeleton Loader */}
          <div className=" ml-10">
            <Skeleton height={25} width={400} className="mb-4 rounded-xl" /> {/* Title Skeleton */}
            <Skeleton height={20} width={150} className="mb-3 rounded-xl" /> {/* Category Skeleton */}
            <Skeleton height={25} width={100} className="mb-2 rounded-xl" /> {/* Price Skeleton */}
            <div className='inline-flex items-center gap-3 mt-2 -ml-1 rounded-xl'>
            <Skeleton height={25} width={150} className="mb-3 rounded-xl" /> {/* Rating Skeleton */}
            <Skeleton height={25} width={150} className="mb-3 rounded-xl" /> {/* Rating Count Skeleton */}
            </div><br/>
            <Skeleton height={35} width={250} className=" mt-3 rounded-xl" /><hr className='mt-3'/>
            <Skeleton height={25} width={200} className="mt-3 rounded-xl" />
            <Skeleton height={100} width={700} className="mt-4 w-full rounded-xl" /> {/* Description Skeleton */}
          </div>
        </div>
      ) : (
        // Actual content once data is loaded
        <div className="flex  items-start">
          <div className="bg-slate-300 p-4 h-[400px] w-[600px] flex items-center justify-center rounded-2xl box-border">
            <img
              src={storedata.image}
              alt="Product"
              className="box-border h-[300px] w-[500px] rounded-lg transition-transform duration-300 hover:scale-90"
            />
          </div>

          <div className="-mt-[100px] ml-10">
            <h1 className="text-lg font-semibold mt-[100px]">{storedata.title}</h1>
            <h1 className="text-xl text-gray-400">{storedata.category}</h1>
            <p className="mt-3 font-semibold">
              <BsCurrencyDollar className="inline-block" />
              {storedata.price}
            </p>
            <div className="inline-flex items-center gap-3 mt-2 hover:border-2 border-gray-400 p-2">
              <p className="p-1 rounded-lg w-[50px] text-center">
                <FaStar className="inline-flex" />
                {storedata.rating.rate}
              </p>
              <p>({storedata.rating.count})</p>
            </div>
            <br />
            <button
              onClick={handleAddToCart} 
              type="button"
              className="mt-3 relative w-[250px] bg-sky-400 p-2 font-bold text-white rounded-md hover:bg-gradient-to-tr from-red-500 to-yellow-300"
            >
              Add to Cart
            </button>
            <hr className="mt-3" />
            <h3 className="mt-3 font-semibold">
              Product Details
              <MdOutlineMessage className="inline-flex ml-2" />
            </h3>
            <p className="mt-2 text-pretty">{storedata.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
