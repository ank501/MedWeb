import React from 'react'
import { Box ,Image ,Text} from '@chakra-ui/react'
import "./hoverShadow.css"

const CircleCard = ({img,name}) => {
  return (
<Box style={{padding:"10px" ,maxWidth:"200px" ,borderRadius:"10px"}} className="cardHover">
    <Image src={img} alt={name} style={{borderRadius:"50%"}}></Image>
    <Text fontSize={"lg"} fontWeight={"bold"}>{name}</Text>
  </Box>
  )
}

export default CircleCard