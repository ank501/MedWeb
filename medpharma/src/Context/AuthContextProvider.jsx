import { createContext ,useState} from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext()

function AuthContextProvider({children}) {
 const [isAuth ,setIsAuth] = useState(true)


 const login = () =>{
    setIsAuth(true)
    alert("Your Login successfull")
     {<Navigate to="/admin"/>}
 }
 const logout= () =>{
    setIsAuth(false)
 }

  return(
    <AuthContext.Provider value={{login ,isAuth,logout}}>{children}</AuthContext.Provider>
  )


}

export default AuthContextProvider;
