<<<<<<< HEAD
import React, { useState } from 'react'
import { VscArrowCircleLeft } from "react-icons/vsc";
import { VscArrowCircleRight } from "react-icons/vsc";

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
      <div className='absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4'>
        <button className='text-5xl text-white' onClick={previousbtn}>{<VscArrowCircleLeft/>}</button>
        <button className='text-5xl text-white' onClick={nextbtn}>{<VscArrowCircleRight/>}</button></div>
=======
import React from 'react'
import Banner from './Banner'
import Category from './Category'
export const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
>>>>>>> 37547672999bbf9ea8ce604404c9e5da3b73d711
    </div>
  )
}
export default Home;
