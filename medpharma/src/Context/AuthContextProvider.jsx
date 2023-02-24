import { createContext ,useState} from "react";
import {Navigate} from "react"
export const AuthContext = createContext()

function AuthContextProvider({children}) {
    const [authState ,setAuthstate] = useState({
        isAuth :false
        ,token : null
    })
   // console.log(authState)
    const loginUser =(tok) =>{
     if(tok){
        setAuthstate({isAuth:true ,token:tok});
       
     }

    }
    const logoutUser =() =>{
        setAuthstate(authState.isAuth=false,authState.token=null);
      <Navigate to="/" />
    }

    return <AuthContext.Provider value={{ authState, loginUser,logoutUser }} >{children}</AuthContext.Provider>
}

export default AuthContextProvider;
