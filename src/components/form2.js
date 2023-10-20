import React,{useState} from "react"

function Form2(){
    const[data,setdata]=useState({
        name:"",
        address:"",
        collage:"",
        branch:""
    })
    const[tech,setTech]=useState("")
    const[str,setStr]=useState("")

    const handelname=(event)=>{
        setdata({
            ...data,
            name:event.target.value
        })
    }
    
    const handeladdres=(event)=>{
        setdata({
            ...data,
            address:event.target.value
        })
    }
    const handelcollage=(event)=>{
        setdata({
            ...data,
            collage:event.target.value
        })
    }    
    console.log(data)

const handelevent=(event)=>{   
setTech(event.target.value)
setStr(event.target.value+" "+" "+str)
}

const branch=(event)=>{
    setdata({
        ...data,
        branch:event.target.value
    })
}
const submit=()=>{
    alert(data.name+"  "+data.address+"  "+data.branch+"  "+data.collage+"  "+tech+"  "+str)
}


    return(
        <>
        <div style={{
            textAlign:"center",
            backgroundColor:"green"
        }}>
        <div style={{display:"flex",
    flexDirection:"column",
    justifyContent:"center"}}>
            <h1>form</h1>
            <p>Name<input type="text" onChange={handelname}/></p>
        
            <p>address<input type="text"onChange={handeladdres} /></p>
            <p>collage<input type="text" onChange={handelcollage} /></p>
            <p>Branch : cs<input type="radio" name="branch" value="CS" onClick={branch} />
            ec<input type="radio" name="branch" value="EC" onClick={branch} />
            it<input type="radio" name="branch" value="IT"  onClick={branch}/>
            ce<input type="radio" name="branch"  value="CE" onClick={branch}/></p>
            <p>Techstack :
                <select name="techstack" id="" onChange={handelevent}>
                    <option value="" >none</option>
                    <option value="JAVA" >JAVA</option>
                    <option value="javaScript" >JavaScript</option>
                    <option value="python" >Python</option>
                    </select> </p>
            <p><button type="submit" onClick={submit} >submit</button></p> 
           
            <h1>{str}</h1>
            <h1>{data.name}</h1>
            <h1>{data.address}</h1>
            <h1>{data.collage}</h1>
            <h1>{data.branch}</h1>

        </div>
        </div>
        </>
    )
}
export default Form2
