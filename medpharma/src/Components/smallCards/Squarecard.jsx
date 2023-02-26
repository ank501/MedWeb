import { Box ,Image,Text ,VStack} from '@chakra-ui/react'
import React from 'react'
import "./hoverShadow.css"

const Squarecard = ({img,name}) => {
  return (
  <VStack style={{ padding:"10px" ,maxWidth:"200px" ,borderRadius:"10px" }} className="cardHover" >
     <Image src={img} alt={name} style={{borderRadius:"10px"}}></Image>
    <Text fontSize={"lg"} fontWeight={"bold"}>{name}</Text>
  </VStack>
  )
}

export default Squarecard