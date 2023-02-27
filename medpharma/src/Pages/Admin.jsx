import { useState ,useEffect, useContext } from 'react'
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
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'


const data = {

}

const Admin = () => {
  const [page,setPage] =useState(1)
  const {isAuth } =  useContext(AuthContext)
  const [data ,setData] = useState([])
  const [show,setShow] = useState(false)

  const getdata =() =>{
return  fetch(`https://medpharma.onrender.com/med1?_limit=5&_page=${page}`)
.then((res)=>res.json())
.then((data)=>setData(data))
  }
const deletedata = (id) => {
  fetch(`https://medpharma.onrender.com/med1/${id}`, { method: 'DELETE' })
  getdata()
}
const ascSort =() =>{
  fetch(`https://medpharma.onrender.com/med1?_sort=price&_order=asc`)
  .then((res)=>res.json())
.then((data)=>getdata(data))
 
}

const dscSort =() =>{
  fetch(`https://medpharma.onrender.com/med1?_sort=price&_order=desc`)
  .then((res)=>res.json())
.then((data)=>getdata(data))

}

  useEffect(()=>{
   getdata()
   
  },[page])

  if(!isAuth){
    return ( <Navigate to="/login" />)
  }
  
  return (
    <>
    <Navbar/>
  
  {/* <Button marginBottom={"20px"} onClick={()=>setShow(!show)}  >{show?"Close Form" : "Show Add Medicine Form"}</Button> */}

    <Box >
      <Box>
      <Button onClick={ascSort}>Low to High Price</Button>
      <Button onClick={dscSort}>High To Low Price</Button>
      </Box>


<Box marginTop="1.5" >
  <Text fontSize={"3xl"} fontWeight={"bold"} >Product Data</Text>
</Box>

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
            <td><Button onClick={()=>{
              deletedata(el.id);
              alert( el.name + "Medicine is Deleted")
            
            }}  >Delete</Button></td>
        </Tr>)
        })}
        
      </Tbody>
    </Table>
  </TableContainer>
  <Box style={{dislay:"flex" ,marginTop:"30px"}}>
  <Button  onClick={()=>setPage(page-1)}>Prev</Button>
  <Button disabled>{page}</Button>
  <Button onClick={()=>setPage(page+1)}>Next</Button>
  </Box>
<Divider/>
  <form style={{width:"50%" ,margin : "auto" ,marginTop:"10px",padding:"20px" ,border:"1px solid teal" ,borderRadius :"10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
      
      <HStack> <Text>Name:-</Text><Input type={"text"} placeholder="name"  /></HStack>
      <br/>
      <HStack> <Text>ImgURL:-</Text><Input type={"text"} placeholder="img url"/></HStack>
      <br/>
      <HStack> <Text>Price:-</Text> <Input type={"text"}  placeholder="price"/></HStack>
      <br/>
      <HStack> <Text>Category:-</Text>  <Input type={"text"} placeholder="category"/></HStack>
      <br/>
        <Button colorScheme='linkedin' style={{marginBottom :"30px"}}>Add data</Button>
      </form>

  <Footer/>
  </Box>
  </>
  )
}

export default Admin