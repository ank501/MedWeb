import React from "react";
import ProductDetailCard from "../Components/ProductDetailCard";
import { useParams } from "react-router-dom";
import { useState ,useEffect } from "react";
import { PhoneIcon, AddIcon, WarningIcon ,ArrowLeftIcon,ArrowRightIcon} from '@chakra-ui/icons'


const ProductDetail = () => {
  const [data,setData] =useState({}); 
  const val =  useParams();
  console.log(val.id);

  useEffect(()=>{
    fetch(`https://medpharma.onrender.com/med1/${val.id}`)
    .then((res)=>res.json())
    .then((data)=>setData(data))
  },[])

  console.log(data)
  return (
    <>
  
      <ProductDetailCard name={data.name} img={data.image} price={data.price} category={data.category} discount={data.discount} />    
     
    </>
  )
}

export default ProductDetail