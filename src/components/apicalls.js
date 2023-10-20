import React,{useState} from "react";
function Fetch(){
    const[data,setData]=useState([])
    function call (){
      fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response=>response.json())
      .then(json=>console.log(json))
    }
    call()
    return (<>
     
    </>)
}
export default Fetch