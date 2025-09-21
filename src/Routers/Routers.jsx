import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Product from '../Pages/Product'
import ProductDetails from '../Pages/ProductDetails'
import Buy from '../Pages/Buy'
import Cart from '../Pages/Cart'
import Basis from '../Pages/Basis'
import Home from '../Pages/Home'
import Footer from '../Pages/Footer'




export const Routers = () => {
  return (
    <>
    

      <Router>
        <Basis />
        <div style={{ paddingTop: '80px' }}></div>
        <Routes>
          <Route path='/Product' element={<Product />} />

          <Route path='/Product/Details' element={<ProductDetails />} />
          <Route path='/Buy' element={<Buy />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Basis' element={<Basis />} />
          <Route path='/Footer' element={<Footer/>} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    
    </>
  )
}
