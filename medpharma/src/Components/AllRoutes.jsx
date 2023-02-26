import React from 'react'
import {Routes ,Route } from "react-router-dom"
import Admin from '../Pages/Admin'
import Checkout from '../Pages/Checkout'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import NoFound from '../Pages/NoFound'
import ProductDetail from '../Pages/ProductDetail'
import ProductPage from '../Pages/ProductPage'
import Register from '../Pages/Register'
import CartPage from '../Pages/CartPage'

const AllRoutes = () => {
  return (
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/products' element={<ProductPage/>} />
        <Route path='/products/:id' element={<ProductDetail/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='*' element={<NoFound/>} />
     </Routes>
  )
}

export default AllRoutes