import React, { useState } from "react";

export default function Advance(){
    const [counter2,setCounter2]=useState(10)
   
    const handelcounter=()=>{
        let value=counter2
        value+=5;
        value-=2;
        value-=3;

        setCounter2(value)
        value=counter2
        // setCounter2(value-2)
        // value=counter2
        // setCounter2(value-3)
    }

    return (
        <>
        <div>
            <h1>{counter2}</h1>
            <button onClick={handelcounter}>change value</button>
        </div>
        </>
    )
}