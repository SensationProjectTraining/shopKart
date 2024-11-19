import { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

export const Shopping = () => {
  const [storedata, setStoreData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentpage,setCurrentPage]=useState(1);
  const itemsperpage = 3;
  const [value,setValue]=useState('');
  const [searchvalue,setSearchvalue] = useState('');



  // Function to truncate text with ellipsis
  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setStoreData(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  const filterdata = storedata.filter(product=>{
    return product.title.toLowerCase().includes(searchvalue.toLowerCase());
  })

  const LastIndex = currentpage* itemsperpage;
  const FirstIndex = LastIndex - itemsperpage;
  const currentProduct = filterdata.slice(FirstIndex,LastIndex);

  const totalpages = Math.ceil(filterdata.length/itemsperpage);
  
  const handlerPagination=(page)=>{
    setCurrentPage(page)
  }
  const handlenext=()=>{
    if(currentpage<totalpages){
      setCurrentPage(currentpage+1)
    }
  }
  const handleprev=()=>{
    if(currentpage>1){
      setCurrentPage(currentpage-1)
    }
  }
   const handlevalue=(e)=>{
    setValue(e.target.value);
   }
   const hndlesearch=()=>{
       setSearchvalue(value);
       setCurrentPage(1);
       setValue('')
   }
  
  return (
    <div>
      <div>
        <h1 className="text-center h-[70px] bg-cover p-2 text-white font-bold text-4xl font-serif bg-[url('https://media1.thehungryjpeg.com/thumbs2/ori_3835815_wk0wopmkr838t66mrszoxs7sq5s3ei2ail3lh5o1_theater-stage-festive-background-audience-movie-opera-light-with-red.jpg')] rounded-t-3xl">
          Shop Top Brands
        </h1>
      </div>
      <div className="bg-[url('https://jooinn.com/images/red-stage-curtain-4.png')] flex justify-center pt-3 gap-4">
      <input type='text' value={value} onChange={handlevalue} placeholder='Enter Here' className='w-[300px] p-2 font-semibold rounded-xl  outline-none focus:border-4 border-yellow-400'/>
      <button type='button' onClick={hndlesearch} className='bg-yellow-400 p-2 rounded-lg cursor-pointer font-bold'>Search</button>
      </div>
      <div className="bg-[url('https://jooinn.com/images/red-stage-curtain-4.png')] h-auto w-full flex flex-wrap justify-around  gap-4 p-2">
        {isLoading ? (
         Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white h-auto w-[250px] rounded-xl p-3">
              <Skeleton height={100} width="100%" className="mb-3" />
              <Skeleton height={30} width="100%" className="mb-2" />
              <hr />
              <Skeleton height={20} width="100%" className="mb-2 mt-4" />
              <Skeleton height={20} width="100%" className="mb-2" />
              <Skeleton height={20} width="40%" className="mb-2 mt-1 inline-block" />
            </div>
          ))
        ) : (
          currentProduct.map((product) => (
            <div
              key={product.id}
              className="bg-white hover:scale-105 duration-300 ease-linear h-auto w-[250px] mt-5 mb-5 rounded-xl shadow-lg shadow-yellow-300 p-3"
            >
              <img
                src={product.image}
                alt="image not found"
                className="h-[130px] w-full border-2 border-gray-500 p-2 rounded-md"
              />
              <h1 className="text-center text-lg font-semibold mt-2 text-blue-800 hover:text-red-600">
                <Link to={`/product/${product.id}`}>
                  {truncateText(product.title, 20)}
                </Link>
              </h1>
              <hr className="mt-2" />
              <p className="mt-3">{truncateText(product.description, 75)}</p>
              <div className="items-center justify-start flex space-x-2">
                <p className="text-lg font-semibold mt-2 items-center flex">
                  <BsCurrencyDollar className="inline-block text-center" />
                  {product.price}
                </p>
                <p className="text-base bg-green-500 text-white p-1 rounded-lg font-semibold mt-2 flex items-center">
                  {product.rating.rate}
                  <FaStar className="inline-block items-center" />
                </p>
                
                
              </div>
    
            </div>
           
          ))
        )}
    
      </div>

      <div className='flex justify-center items-center gap-2 p-2 font-semibold bg-amber-100'>
        <button type='button' onClick={handleprev} disabled={currentpage==1} className='rounded-lg border-2 border-blue-400 p-1'>Prev</button>
      {[...Array(totalpages)].map((_,index)=>(
        <button key={index} type='button' onClick={()=>handlerPagination(index+1)} className='rounded-lg border-2 border-blue-400 p-1 w-[35px]'>{index+1}</button>
      ))}
        <button type='button' onClick={handlenext} disabled={currentpage==totalpages} className='rounded-lg border-2 border-blue-400 p-1'>Next</button>
      </div>
    </div>
  );
};

export default Shopping;