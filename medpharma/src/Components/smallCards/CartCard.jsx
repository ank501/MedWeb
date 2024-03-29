import React from 'react'
import "./hoverShadow.css"
import { Card, CardHeader, CardBody, CardFooter ,Heading,Text,Image,Stack,Divider,Button,ButtonGroup} from '@chakra-ui/react'

const CartCard = ({img ,name,description,price}) => {
  return (
    <Card maxW='sm' className="cardHover">
  <CardBody>
    <Image
      src={img}
      alt={name}
      borderRadius='lg'
      />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
      <Text>
       {description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
       Remove
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default CartCard