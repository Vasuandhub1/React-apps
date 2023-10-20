import React, { useState } from 'react'

export default function Autosuggestion() {
    const [text,settext]=useState("")
    const arr=["Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
       "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"
        ]
        const handelchange=(event)=>{
            settext(event.target.value)
        }
  return (
    <div  style={{textAlign:"center"}}>
      <div style={{display:"flex", justifyContent:"center", margin:"2rem"}}>
        <input type="text" placeholder='enter city'  style={{border:"2px solid grey", borderRadius:"20rem", width:"30rem",height:"3rem",padding:"1rem",fontSize:"20px"}} value={text}
        onChange={handelchange}
        />
      </div>
      <div>
        {arr.map((element,index)=>{
        if(element.includes(text)){
        return(<div key={index}><h4>{element}</h4></div>)
        }
      })}</div>
    </div>
  )
}

