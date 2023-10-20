import React, { useState } from "react";

function Meta(){
     const[details,setdetails]=useState([
        {name:"Cricket",
         state:false,
         position:"left"
        },
        {name:"Football",
        state:false,
        position:"left"   
        },
        {name:"Hockey",
        state:false,
        position:"left"
        },
        {name:"Tabletennis",
        state:false,
        position:"left"
        }
    ])
    const handelcheck=(index)=>{
        var temp=[...details]
        if(temp[index].state===false){
        temp[index].state=true
        setdetails(temp)
        }
        else{
            temp[index].state=false
        setdetails(temp)
        }
    }
    const handelleft=()=>{
        var temp=[...details]
        for(let i=0;i<details.length;i++){
            if(temp[i].state===true){
                temp[i].position="right"
                

            }
        }
        setdetails(temp)
    }
    const handelright=()=>{
        var temp=[...details]
        for(let i=0;i<details.length;i++){
            if(temp[i].state===false){
                temp[i].position="left"
                

            }
        }
        setdetails(temp)
    }


     console.log(details)
    return (
        <>
        <div style={{display:"flex",justifyContent:"center",padding:"200px"}}>
            <div className="p-3 bg-info bg-opacity-10 border border-info border-start- rounded">
            <ul style={{listStyle:"none",}}>
                {details.map((element,index)=>{
                    return <li key={index}>{element.position==="left" ? <div  style={{display:"flex "}} >
                    <input type="checkbox" name="sports" style={{margin:"8px"}} onChange={()=>handelcheck(index)}/><h6>{element.name}</h6></div>:""} </li>
                })}
            </ul>
            </div>
            <div style={{display:"flex",justifyContent:"space-between", flexDirection:"column",padding:"10px ",gap:"10px"}}>
            <button  className="btn btn-success" onClick={handelleft} > ---)</button>
            <button  className="btn btn-success" onClick={handelright}>(---</button>
            </div>
            <div className="p-3 bg-info bg-opacity-10 border border-info border-start- rounded">
            <ul style={{listStyle:"none",}}>
                {details.map((element,index)=>{
                    return <li key={index}>{element.position==="right" ? <div  style={{display:"flex "}} >
                    <input type="checkbox" name="sports" style={{margin:"8px"}} onChange={()=>handelcheck(index)} /><h6>{element.name}</h6></div>:""} </li>
                })}
            </ul>
            </div>
        </div>
        </>
    )
}
export default Meta