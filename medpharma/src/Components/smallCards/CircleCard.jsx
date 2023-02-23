import React from 'react'
import { Box ,Image ,Text} from '@chakra-ui/react'


const CircleCard = ({img,name}) => {
  return (
<Box style={{border:"1px solid black" ,padding:"10px" ,maxWidth:"200px" ,borderRadius:"10px"}}>
    <Image src={img} alt={name} style={{borderRadius:"50%"}}></Image>
    <Text fontSize={"lg"} fontWeight={"bold"}>{name}</Text>
  </Box>
  )
}

export default CircleCard