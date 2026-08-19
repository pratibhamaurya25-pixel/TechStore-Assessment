import React from 'react'
import {useState} from "react";

function Checkout() {
   const[name, setName] = useState("");
   const[email, setEmail] = useState("");
   const[address, setAddress] = useState("");

   function handleSubmit(e){
      e.preventDefault();

      if(name.length<=3){
         alert("Enter valid name")
      }
   }

  return (
     <Form onSubmit={handleSubmit}>
         <input 
         type="text"
         value={name}
         placeholder="Enter Full Name"
         onChange={(e)=>setName(e.target.value)} />

         <br></br>

         <input
         type="email"
         value={email}
         placeholder='Enter email'
         onChange={(e)=>setEmail(e.target.value)} />
          
         <input
         type="text"
         value={address}
         placeholder='Enter shipping Address'
         onChange={(e)=>setAddress(e.target.value)} />

         <button type="submit">Submit</button>

     </Form>
  )
}

export default Checkout