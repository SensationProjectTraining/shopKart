import React from 'react'
import { FaFacebook,FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter,FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (

    <footer className="bg-gray-800 text-white py-8 mt-32 mx-0.5">
      <div className="container mx-auto px-6">
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='text-center md:text-left ml-32'>
            <h3 className='text-2xl font-semibold mb-4'>About Us</h3>
            <p className='text-sm'>We are an e-commerce platform dedicated to providing high-quality products
              to our customers. We offer a wide variety of
              goods at competitive prices. Shop with us for the best deals and customer service.
            </p>
          </div>
          <div className='text-center md:text-left ml-44'>
            <h3 className='text-xl font-semibold mb-4'>Categories</h3>
            <ul className='text-sm'>
              <li>Men</li>
              <li>Women</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div className='text-center md:text-left ml-20'>
            <h3 className='text-xl font-semibold mb-4'>Contact Us</h3>
            <p className='text-sm'>Email: support@shopkart.com</p>
            <p className='text-sm mb-4'>Phone: (123) 456-7890</p>
            <div className='flex justify-center md:justify-start space-x-4'>
              <a href="https://www.facebook.com" target='_blank' className='text-white hover:text-blue-500'>
              <FaFacebook size={20}/></a>

              <a href="https://www.instagram.com" target='_blank' className='text-white hover:text-pink-500'>
              <FaInstagram size={20}/></a>

              <a href="https://www.twitter.com" target='_blank' className='text-white hover:text-blue-500'>
              <FaSquareXTwitter size={20}/></a>

             <a href="https://www.linkedin.com" target='_blank' className='text-white hover:text-blue-500'>
             <FaLinkedin size={20}/></a>
            </div>
          </div>
        </div>
        <div className='mt-8 border-gray-600 pt-4 text-center text-sm'>
          <p>&copy; {new Date().getFullYear()} ShopKart. All rights reserved.</p>
        </div>

        </div>
        </footer>
  )
}
export default Footer;