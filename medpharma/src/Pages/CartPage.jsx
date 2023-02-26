import React from 'react'
import CartComponent from '../Components/CartComponent'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const CartPage = () => {
  return (
    <div>
      <Navbar/>
      <CartComponent/>
      <Footer/>
    </div>
  )
}

export default CartPage