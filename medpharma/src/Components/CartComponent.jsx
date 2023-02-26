import { Box, HStack } from '@chakra-ui/react'
import React from 'react'

const CartComponent = () => {
  return (
    <div>
        <HStack style={{width :"80%" ,margin :"auto"}}>
            <Box style={{margin:"auto" ,border :"1px solid black" ,width:"60%"}}>
              hello
            </Box>
            <Box style={{margin:"auto", border :"1px solid black" ,width:"35%"}}>
                world
            </Box>
        </HStack>
    </div>
  )
}

export default CartComponent