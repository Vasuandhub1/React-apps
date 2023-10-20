import React, { useContext, useState } from "react";
import Usercontext from "./context";
import { useNavigate } from "react-router-dom";

function Login(){

    const[username,setUsername]=useState("")
    const[Password1,setPassword]=useState("")
    const {user} =useContext(Usercontext)
    const {password} =useContext(Usercontext)
    const {setlogin}=useContext(Usercontext)
    const {login}=useContext(Usercontext)
    console.log(user)
    console.log(password)
    console.log(login)
  
    const navi =useNavigate()

    const handelclick=()=>{
       
        if (Password1===password && username===user){
          setlogin(true)
          console.log(login)
          return navi("/Todo")

        }
        else{
          alert("wrong")
        }

    }
    return (
        <>
        <div>
        <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">@</span>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"onChange={(event)=>{
setUsername(event.target.value)
  }}/>
</div>
<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">#</span>
  <input type="password" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={(event)=>{
    setPassword(event.target.value)
  }}/>
</div>
<button type="button" className="btn btn-primary btn-lg" onClick={handelclick}>Login</button>
        </div>
        </>
    )
} 
export default Login