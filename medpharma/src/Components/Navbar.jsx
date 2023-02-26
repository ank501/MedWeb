import React from 'react'
import { HStack, Stack} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import { IoCart  } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <HStack style={{padding : "20px" ,justifyContent :"space-evenly" , marginBottom:"50px" ,boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
 {/* <HStack style={{border :"1px solid black" ,justifyContent :"space-around"}} > */}
   <Link to="/product">LabTest Offer</Link>
   <Link to="/product">Consult Doctors</Link>
   <Link to="/product">Covid 19</Link>
   <Link to="/product">Health care plan</Link>
    {/* </HStack> */}
      {/* <HStack> */}
      <Link to="/login">Log In </Link>
      <Link to="/register">Sign Up</Link>
      <Link to="/product">Offer</Link>
      <Link to="/cart">{<BsCart3/>}</Link>
       {/* </HStack> */}
       </HStack>
  )
}

export default Navbar