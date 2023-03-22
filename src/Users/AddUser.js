import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

export default function AddUser(){
    const [user, setUser]=useState({
        username:"",
        password:""
    });
    
    const{username,password}=user;

    const onInputChange=(e)=>{
        setUser({ ...user, [e.target.name]: e.target.value });//split operator
    };
    
    const onSubmit=async(e)=>{
        e.preventDefault();
        //setUser({id:10,username:"mukta",password:"muk456"});
        await axios.post("http://localhost:8080/addUser",user);
        
    };

    return (
        <div className='container '>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4  mt-2 shadow'>
                    <h2 className='text-center m-4'>REGISTER USER</h2>

                    <form onSubmit={(e)=> onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='UserName' className='form-label'>
                            User name
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter your username'
                            name="username" 
                            value={username}
                            onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Password' className='form-label'>
                            Password
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter your password'
                            name="password" 
                            value={password}
                            onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                   
                    </form>
                </div>
            </div>
        </div>
    )
}