import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import Login from './components/Pages/Login'
import { UserProvider } from './Context/Context'
import SignUp from './components/Pages/SignUp'
import Shopping from './components/Pages/Shopping'
import Cart from './components/Pages/Cart'
import Footer from './components/Footer'
import ContactUs from "./components/Pages/ContactUs"
import SearchBar from './components/searchBar'


const App = () => {
  return (
    <>
    <UserProvider>
      <BrowserRouter>
        <Navbar/><br/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Shopping" element={<Shopping/>}/>
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/shopping" element={<Shopping/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/searchbar" element={<SearchBar/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </UserProvider>
    </>
  )
}

export default App