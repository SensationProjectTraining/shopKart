import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import Login from './components/Pages/Login'
import { UserProvider } from './Context/Context'
import SignUp from './components/Pages/SignUp'
import Footer from './components/Footer'

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar/><br/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes><br/>
        <Footer/>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App