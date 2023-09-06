import React, { useState, useContext, useEffect } from "react";
import * as Components from './Components';
import { useNavigate, useParams } from 'react-router-dom'
import hostWeb from "../apis/hostWeb";
import AuthContext from "../context/AuthProvider";


const LogIn = () => {
    const {auth,setAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    useEffect(() => {
        window.localStorage.setItem('MY_APP_STATE', JSON.stringify(auth));
      }, [auth]);
    const verifyAcc = async (e)=>{
        e.preventDefault();
        try {
            const response = await hostWeb.post(`/auth/login`,{email,password});
            setAuth(response.data.data);
            console.log(response.data.data.type);
            if(response.data.success){
                if(response.data.data.type == "customer")
                    navigate(`/home`);
                else if(response.data.data.type == "restaurant")
                    navigate(`restauranthome/${response.data.data.user_id}`);
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