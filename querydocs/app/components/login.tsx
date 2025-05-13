"use client"
import React, {useState} from 'react';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async ()=>{
        const response = await axios.post("/api/auth", {email, password});
        alert("request submitted : " + response.data.message);
    };

    return (
        <div className="flex flex-col items-center p-6">
            <h1 className="text-2xl font-bold">Login</h1>
            <input type="email" placeholder="Email" className="border p-2 m-2" onChange = {(e)=>{setEmail(e.target.value)}}/>
            <input type="password" placeholder="Password" className="border p-2 m-2" onChange={(e) =>{setPassword(e.target.value)}} />
            <button className="bg-blue-500 text-white px-4 py-2" onClick={()=>handleSubmit()}>Login</button>
        </div>
    );
}