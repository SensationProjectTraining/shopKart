import React, { useState } from 'react'

const Home = () => {
  const Image=[
    "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1728/cms/F7x1nF5Ph1DzVxxEduf3V/1699985e7be02c57fb4753a494fbfd4c/24Q4_ColorFlow1_Site_HomepageHero_Desktop_880x1245_US_Blank.png",
    "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1920/cms/289bH0CF9S0jfBtY5Z9R6K/8c5e546b86223dbfbf5a45c2ec913aa2/Update_24Q4_TreeRunner_Site_HomepageHero_Desktop_2880x1245.png"
  ]
  const [currentIndex, setIndex] =useState(0)
  function previousbtn()
  {
    if(currentIndex===0)
    {
      setIndex(Image.length - 1)
    }
    else
    {
      setIndex(currentIndex - 1)
    }
  }
  function nextbtn()
    {
      if(currentIndex===Image.length - 1)
        {
          setIndex(0)
        }
        else
        {
          setIndex(currentIndex + 1)
        }
    }
  return (
    <div className='relative w-full '>
      <img className='relative' src={Image[currentIndex]} alt={`Slide ${currentIndex}`}></img>
      <div>
        <button className='text-white absolute text-5xl top-1/2 transform -translate-y-1/2' onClick={previousbtn}>-</button>
        <button className='text-white absolute text-2xl top-1/2 transform -translate-y-1/2 text-right w-full' onClick={nextbtn}>+</button></div>
    </div>
  )
}

export default Home
