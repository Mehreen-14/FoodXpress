import React, { useContext, useEffect, useState} from 'react'
import "../css/sidebar.css"
import {Home,LocationOn,Article} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import AuthContext from '../context/AuthProvider';

function Sidebar(props)
{
    const {auth, setAuth} = useContext(AuthContext);
    const [data,setData] = useState({});
    useEffect(() => {
        const datat = window.localStorage.getItem('MY_APP_STATE');
        setData(JSON.parse(datat));
    },[]);
    const navigate = useNavigate();
    const gotohome = () => {
        navigate(`/home`);
    }
    const goMyorders = () =>
    {
        navigate(`/Myorders`);
    }
    const logout = async(e) => {
        e.preventDefault();

        setAuth({});
        window.localStorage.removeItem('MY_APP_STATE');
        navigate(`/`);
    }


    return(
        <div className="sidebar">
           <div className="Up">
              <div className="Title">FoodXpress</div>
              <div classNam="profile">
              <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="profile"/>
              <div className="profileName"><p>{data.name}</p></div>
              </div>
              
              
           </div>
           <div className="Mid">
            <button className="Option" onClick={gotohome}><Home className="Icon"/>Home</button>
            <button className="Option"><LocationOn className="Icon"/>Addresses</button>
            <button className="Option" onClick={goMyorders}><Article className="Icon"/>My Orders</button>
           </div>
           <div className="Down">
            <button className="logoutbutton" onClick={logout}>Log out</button>
           </div>
        </div>
    )
}

export default Sidebar;