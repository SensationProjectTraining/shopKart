import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Shopping from './Pages/Shopping'
import Cart from './Pages/Cart'
import Login from './Pages/Login'

const Navbar = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="shopping" element={<Shopping/>}>Shopping</Route>
      <Route path="cart" element={<Cart/>}>Cart</Route>
      <Route path="login" element={<Login/>}>Login/SignUP</Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Navbar
