import { Box ,Text } from '@chakra-ui/react'
import React from 'react'
import {Form} from "react"
import {Link } from "react-router-dom";
import {Navigate} from "react"
import { useState ,useEffect ,useContext} from "react";
import { AuthContext } from "../Context/AuthContextProvider";


const Login = () => {

  const [email ,setEmail] = useState("");
  const [password ,setPassword] = useState("");
  const {loginUser ,authState} = useContext(AuthContext) ;
 
 
  const handleSubmit = (e)=>{
        e.preventDefault()
  const user={email,password}
 
   
  return  fetch("https://reqres.in/api/login" , {
   method :"POST",
   headers: {
     'Content-Type': 'application/json',
   },
  body : JSON.stringify(user)
 }).then((res)=>res.json())
 .then((data) => {
 loginUser(data.token);
 console.log(authState)
 
 })
 .catch((err)=>console.log("error"))
 
 }

  return (
    <div>
    <form data-testid="login-form" onSubmit={handleSubmit}>
      <div>
        <label>
          Email
          <input data-testid="email-input" type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            data-testid="password-input"
            type="password"
            placeholder="password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <input data-testid="form-submit" type="submit" value="SUBMIT" />
      </div>
    </form>
    <div>
      <Link to="/">Go Back</Link>
    </div>
  </div>
  )
}

export default Login