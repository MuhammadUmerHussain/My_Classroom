import React, { useRef, useState } from 'react'
import "./Login.css"

import { FcGoogle } from 'react-icons/fc';
import data from './data';
import { useGlobalContext } from '../context';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [name,setname]=useState('');
    const [password,setpassword]=useState('');
    const [validdata,setvaliddata]=useState(data)
    const [check,setcheck]=useState(false);
    const{SetSession}=useGlobalContext();
    const ch=useRef(false)
    const nav=useNavigate();
    
    const validpassword=(e)=>{
        e.preventDefault();
        
        console.log("u")
        let count=0;
        const check=validdata.map((curr)=>{
            if(curr.name===name)
            {
                if(curr.password===password)
                {
                   SetSession({name:name,password:password});
                    nav('/home')
                    
                }
            }
           else{

           }
        })
        

    }

  return (
    <main >
    
    <div className="container">
       <div className="item1">
<form className="form1" onSubmit={validpassword}>
 <h1>Login</h1>
 <label  >Email:</label>
 <input type="text" placeholder="abc@gmail.com" value={name} onChange={(e)=>{
    setname(e.target.value)
 }}/>
 
<label >Password:</label>
<input type="text" placeholder="*********" value={password} onChange={(e)=>{
    setpassword(e.target.value)
}}/>
<button className="l">Login</button>
<a href="">Forgot your password?</a>
<button className="g" type='Submit'><FcGoogle/> Continue With Google</button>
<h4>Dont have account?<a href="">start here</a></h4>
</form>
 
       </div> 
        <div className="item2">
        
            <h1>{name}</h1>
            <h1>{password}</h1>
               

        </div>
    </div>
        
    </main>
  )
}

export default Login