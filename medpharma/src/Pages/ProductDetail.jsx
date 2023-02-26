import React from "react";
import ProductDetailCard from "../Components/ProductDetailCard";
import { useParams } from "react-router-dom";
import { useState ,useEffect } from "react";
import { Link ,useNavigate } from 'react-router-dom';





const ProductDetail = () => {

  const [data,setData] =useState({}); 
  const cartArr = [];
  const val =  useParams();
  console.log(val.id);
  const cartD = [];
  cartD.push(data)

  const addToCart = () => { 
    // cartPage()
    return ( localStorage.setItem("cartData" ,JSON.stringify(cartD))
    )
  }
  
  // const navigate=useNavigate()
  // const cartPage = () =>{
  //   return navigate('/cart')
  // }


  useEffect(()=>{
    fetch(`https://medpharma.onrender.com/med1/${val.id}`)
    .then((res)=>res.json())
    .then((data)=>setData(data))
  },[])

  console.log(data)
  return (
    <>
  
      <ProductDetailCard name={data.name} img={data.image} price={data.price} category={data.category} discount={data.discount} handleAdd={addToCart} />    
     
    </>
  )
}

export default ProductDetail