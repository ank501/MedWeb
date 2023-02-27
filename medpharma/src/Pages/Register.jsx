import React from 'react'
import { Box ,Text,Input, Button } from '@chakra-ui/react'
import { useState ,useEffect ,useContext} from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const Register = () => {
  const {login,logout,isAuth} =useContext(AuthContext)
  return (
    <div>
      <Box>
     <Input type="text" placeholder="email"/>
     <Input type="password" placeholder="password" />
     <Button onClick={login}  >Login</Button>
     <Button onClick={logout} >Logout</Button>
     <h1>{isAuth?"yes" :"no"}</h1>
    
    </Box>
    </div>
  )
}

export default Register