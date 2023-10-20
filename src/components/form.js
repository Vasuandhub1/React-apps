import React,{useState} from 'react'
function Form(){
    const[form,setName]=useState({
        name:"",
        address:"",
        collage:""
    })
const confirmdetails=()=>{
    alert("Name :"+form.name+"  "+"   Address:"+ "  "+form.addres+"  "+"    collage: "+form.collage);
    console.log("clicked")
}
const handelname=(event)=>{
    setName({
        ...form,
        name:event.target.value,
    })
}
const handeladdress=(event)=>{
    setName({
        ...form,
        address:event.target.value
    })
}
const handelcollage=(event)=>{
    setName({
        ...form,
        collage:event.target.value
    })
}

    return(
    <>
    <div style={{
        textAlign:"center "
    }}>
        <h1>FORM</h1>
        Name:<input type="text"style={{margin:"20px"}} onChange={handelname}/>
        <br />
        Address:<input type="text" style={{margin:"20px"}} onChange={handeladdress}/>
        <br />
        Collage Name:<input type="text" style={{margin:"20px"}}  onChange={handelcollage}/>
        <br />
        <button style={{margin:"20px"}} onClick={confirmdetails}>Submit</button>
    </div>
    </>
        );
}

export default Form;