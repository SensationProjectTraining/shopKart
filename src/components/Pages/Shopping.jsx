import React from 'react'
import { useState } from 'react'
const Shopping = () => {
  const[storedata,setStoreData]=useState([]);
  const[Isloading,setIsLoading]=useState(false);
  const handledata=async()=>{
    try{
  const getdata = await fetch("https://fakestoreapi.com/products");
  if(!getdata.ok){
    throw new Error("Data Not Found");
  }
  const getresponse = await getdata.json();
  setStoreData(getresponse)
    }
    catch(err){
  console.log(err.message);
    }
    finally{
  setIsLoading(false)
    }
  }
  handledata();
  return (
   <div>
      <h1 className='text-center font-semibold text-green-900 text-4xl'>Product Page</h1>
      <div>
        {storedata.map((product) => (
          <h1 key={product.id}>{product.title}</h1> // Use 'title' instead of 'name', assuming 'title' exists
        ))}
      </div>
    
    </div>
    
  )
}

export default Shopping