import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import Login from './components/Pages/Login'
import { UserProvider } from './Context/Context'
import SignUp from './components/Pages/SignUp'

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App