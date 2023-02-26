import { useState ,useEffect } from 'react'
import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Text,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Button,
  Box,
  Divider,
  Input,
  HStack
} from '@chakra-ui/react'

const Admin = () => {
  
  const [data ,setData] = useState([])

  useEffect(()=>{
    fetch("https://medpharma.onrender.com/med1")
    .then((res)=>res.json())
    .then((data)=>setData(data))
  },[])

  return (
    <Box style={{width:"100%" , margin :"auto" ,border:"1px solid teal"}}>
     
    <form style={{width:"50%" ,margin : "auto"}}>
      
    <HStack> <Text>Name:-</Text><Input type={"text"} placeholder="name" /></HStack>
    <br/>
    <HStack> <Text>ImgURL:-</Text><Input type={"text"} placeholder="img url"/></HStack>
    <br/>
    <HStack> <Text>Price:-</Text> <Input type={"text"}  placeholder="price"/></HStack>
    <br/>
    <HStack> <Text>Category:-</Text>  <Input type={"text"} placeholder="category"/></HStack>
    <br/>
      <Button colorScheme='linkedin' style={{marginBottom :"30px"}}>Add data</Button>
    </form>

    <Divider/>



    <TableContainer >
    <Table variant='striped' colorScheme='teal'>
      <Thead>
        <Tr>
          <Th>Img</Th>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>Category</Th>
          <Th>Discount</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((el)=>{
         return( 
         <Tr key={el.id
         }>
            <Td><Image style={{borderRadius:"50%"}} width="30%" src={el.image}></Image></Td>
            <Td>{el.name}</Td>
            <Td>{el.price}</Td>
            <Td>{el.category}</Td>
            <Td>{el.discount}</Td>
            <td><Button>Delete</Button></td>
        </Tr>)
        })}
        
      </Tbody>
    </Table>
  </TableContainer>
  </Box>
  )
}

export default Admin