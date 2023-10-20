import React,{useState,useEffect} from "react";

function Timer(){
const[milli,setMili]=useState(0);
const[sec,setsec]=useState(0);
const[min,setmin]=useState(0); 
const[state,setstate]=useState(false)
useEffect(()=>{
  let timer=0
  if(state){
    if(milli<59){
    timer=setInterval(()=>{
      setMili(milli+1)
    },1000)
  }
  else{
    timer=setInterval(()=>{
      setMili(0)
    },1000)
  }
  if(sec<59){
    timer=setInterval(()=>{
      setsec(sec+1)
    },60000)
  }
  else{
    timer=setInterval(()=>{
      setsec(0)
    },60000)
  }
  if(min<12){
    timer=setInterval(()=>{
      setmin(min+1)
    },600000)
  }
  else{
    timer=setInterval(()=>{
      setmin(0)
    },600000)
  }
  }
  else{
    clearInterval(timer)
  }
})
const handelstart=()=>{
  setstate(true)
}
const handelstop=()=>{
  setstate(false)
}

    return (
    <>
     <div id="main" style={{
      textAlign:"center",
      display:"flex",
      justifyContent:"center",
      margin:"200px",
      backgroundColor:"black",
      color:"white"
     }}>
        <h1>
        <div style={{display:"flex",
      border:"2px solid red",
      borderRadius:"50%",
      width:"250px",
      justifyContent:"center"}}>
            <p id="minuts">{min}</p>
            <p> : </p>
            <p id="seconds">{sec}</p>
            <p>:</p>
            <p id="milli">{milli}</p>
        </div>
        <button id="start"  style={{
          background:"green",
          margin:"10px",
          width:"100px",
          height:"50px"
         }} onClick={handelstart} >start</button>
        <button id="reset" style={{
          background:"red",
          margin:"10px",
          width:"100px",
          height:"50px"
        }} onClick={handelstop}>stop</button></h1>

    </div>
    </>
)}
export default Timer;
