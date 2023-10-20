import React, { useEffect, useState } from "react";
import { Tabs, rem } from '@mantine/core';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'

export default function Global(){
    const iconStyle = { width: rem(12), height: rem(12) };
    const[apidata,setdata]=useState([])
    const[wishlist,setwishlist]=useState([])
    function call(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
          let temp=[...json]
          temp.map((element)=>{
            element["wish"]=false;
            element["disable"]=false;
          })
            setdata(temp)

        })
    }
   useEffect(()=>{
    call()
   },[])
   console.log(apidata)

   const handelwish=(index)=>{
    let temp=[...apidata]
    console.log(index)
    if(temp[index].wish==false){
    temp[index].wish=true
    }
    console.log(temp[index].wish)
   setdata(temp)
    
   }
   const handeldisable=(index)=>{
    let temp=[...apidata];
    if(temp[index].disable===false){
      temp[index].disable=true;
    }
    setdata(temp)
   }
    return (
    <>
    <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery">
          ALL
        </Tabs.Tab>
        <Tabs.Tab value="messages"  >
          wishlist
        </Tabs.Tab>
        <Tabs.Tab value="settings" >
          Disable
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
      
      <div style={{display:"flex", flexWrap:"wrap", gap:"2rem", margin:"5rem", justifyContent:"center",}}>
{apidata.map((element,index)=>{
  if(element.disable===false){
    return (<div  key={index}>
     <div class="card text-bg-dark mb-3" style={{maxWidth:"24rem", maxHeight:"24rem", paddingLeft:"2rem",paddingRight:"2rem"}}>
    <div class="card-header">{element.id}</div>
    <div class="card-body text-primary"/>
      <h5 class="card-title">{element.title}</h5>
      <p class="card-text">{element.body}</p>
      <div>
      <button type="button" class="btn btn-danger" onClick={()=>handelwish(index)}>Wish</button>
      <button type="button" class="btn btn-warning" onClick={()=>handeldisable(index)}>Disabel</button>
      </div>
    </div>
    </div>)
}})}
    </div> 
       
      </Tabs.Panel>
      
      <Tabs.Panel value="messages">
      <div style={{display:"flex", flexWrap:"wrap", gap:"2rem", margin:"5rem", justifyContent:"center",}}>
{apidata.map((element,index)=>{
  if(element.wish===true && element.disable===false){
    return <div  key={index}>
     <div class="card text-bg-dark mb-3" style={{maxWidth:"24rem", maxHeight:"24rem", paddingLeft:"2rem",paddingRight:"2rem"}}>
    <div class="card-header">{element.id}</div>
    <div class="card-body text-primary"/>
      <h5 class="card-title">{element.title}</h5>
      <p class="card-text">{element.body}</p>
      <div>
      <button type="button" class="btn btn-warning" onClick={()=>handeldisable(index)}>Disabel</button>
      </div>
    </div>
    </div>
}})}
    </div>

      </Tabs.Panel>

      <Tabs.Panel value="settings">
      <div style={{display:"flex", flexWrap:"wrap", gap:"2rem", margin:"5rem", justifyContent:"center",}}>
{apidata.map((element,index)=>{
  if(element.disable===true){
    return (<div  key={index}>
     <div class="card text-bg-dark mb-3" style={{maxWidth:"24rem", maxHeight:"24rem", paddingLeft:"2rem",paddingRight:"2rem"}}>
    <div class="card-header">{element.id}</div>
    <div class="card-body text-primary"/>
      <h5 class="card-title">{element.title}</h5>
      <p class="card-text">{element.body}</p>
      <div>
      <button type="button" class="btn btn-danger" onClick={()=>handelwish(index)}>Wish</button>
     
      </div>
    </div>
    </div>)
}})}
    </div> 
      </Tabs.Panel>
    </Tabs>
    </>)}
