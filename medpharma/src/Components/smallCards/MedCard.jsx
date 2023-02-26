import React from 'react'
import { Card, CardHeader, CardBody, CardFooter ,Button ,Divider ,ButtonGroup,Text,Stack,Heading,Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import "./hoverShadow.css"


function MedCard ({img ,name ,category ,desc ,price,discount,id ,addToCart}) {
 return(
<Card maxW='sm' className="cardHover">
  <CardBody>
    <Image
      src={img}
       alt={id}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='sm'>{name}</Heading>
      <Text>
      {category}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Rs.{price}
      </Text>
    </Stack>
    <Link to={`/products/${id}`} >More Details</Link>
  </CardBody>
</Card>)
}
export default MedCard