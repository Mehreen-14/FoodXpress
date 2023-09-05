import React, { useState } from "react";
import * as Components from './Components';
import { useNavigate, useParams } from 'react-router-dom'
import hostWeb from "../apis/hostWeb";

const LogIn = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const verifyAcc = async (e)=>{
        e.preventDefault();
        try {
            const response = await hostWeb.post(`/auth/login`,{email,password});
            console.log(response.data.success);
            if(response.data.success){
                navigate(`/home`);
            }

        } catch (error) {
            console.log(error);
            console.log("there was an error verifying the data");
        }
    }
    return (

            <Components.Form>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input value={email} onChange={(e) => setEmail(e.target.value)}  type='email' placeholder='Email' />
                      <Components.Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <button onClick={verifyAcc} className="btn btn-primary">Sign In</button>
            </Components.Form>
    )
}

export default LogIn