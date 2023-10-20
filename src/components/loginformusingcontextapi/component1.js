import { useState } from "react"
import React from "react"
import Usercontext from "./context"


const Componenet1=({children})=>{
    const[user,setuser]=useState("vasu")
    const[password,setpassword]=useState("singh")
    const[login,setlogin]=useState(false)
    return(
        
        <Usercontext.Provider value={{user,password,login,setlogin}}>
            {children}
        </Usercontext.Provider>
        
    )}
 
export default Componenet1