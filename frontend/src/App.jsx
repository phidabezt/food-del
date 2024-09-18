import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const openLogin = () => {
    setShowLogin(true)
  }

  const closeLogin = () => {
    setShowLogin(false)
  }

  return (
    <>
      {showLogin ? <LoginPopup closeLogin={closeLogin} /> : <></>}
      <div className='app'>
        <Navbar openLogin={openLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
