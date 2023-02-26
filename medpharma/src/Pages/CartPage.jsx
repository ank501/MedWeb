import React, { useState } from 'react'
import CartComponent from '../Components/CartComponent'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Box } from '@chakra-ui/react'



const CartPage = () => {
const cart = [];
const out = JSON.parse(localStorage.getItem("cartData"))
cart.push(out)

console.log(cart)

  return (
    <div>
      <Navbar/>
      <Box>
      </Box>
      <Footer/>
    </div>
  )
}

export default CartPage