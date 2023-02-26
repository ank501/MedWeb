import { Box, HStack } from '@chakra-ui/react'
import React from 'react'


import { Card, CardHeader, CardBody, CardFooter ,Heading,Text,Image,Stack,Divider,Button,ButtonGroup} from '@chakra-ui/react'


const CartComponent = ({img ,name,price,description}) => {
  return (
    <div>
        <HStack style={{width :"80%" ,margin :"auto"}}>
            <Box style={{margin:"auto" ,border :"1px solid black" ,width:"60%"}}>
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
            </Box>
            <Box style={{margin:"auto", border :"1px solid black" ,width:"35%"}}>
                world
            </Box>
        </HStack>
    </div>
  )
}

export default CartComponent