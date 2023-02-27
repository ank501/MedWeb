import { Box ,Text,Input,  Button ,Image } from '@chakra-ui/react'
import React from 'react'
import {Form} from "react"
import {Link } from "react-router-dom";
import {Navigate} from "react"
import { useState ,useEffect ,useContext} from "react";
import { AuthContext } from "../Context/AuthContextProvider";


const Login = () => {
const {login,logout,isAuth} =useContext(AuthContext)

return (
  <Box style={{width:"50%" ,margin:"auto" ,padding:"20px" ,border:"1px solid teal"}}>
    <Box style={{width:"40%" ,margin:"auto" ,border:"1px solid teal" ,padding :"10px" ,borderRadius:"10px" ,height:"80vh"}}>
     <Input type="text" placeholder="email" />
     <br/>
     <br/>
     <Input type="password" placeholder="password" />
     <br/>
     < Button onClick={login}  >Login</ Button>
    
    </Box>
    </Box>
            
 
)
}

export default Login