import React, { useContext, useEffect, useState } from "react";
import "../css/sidebar.css"
import {Home,LocationOn,Article} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import hostWeb from "../apis/hostWeb";

function SidebarRestaurant(props)
{
    const navigate = useNavigate();
    
    const logout = async(e) => {
        e.preventDefault();

        setAuth({});
        window.localStorage.removeItem('MY_APP_STATE');
        navigate(`/`);
    }
  const {auth, setAuth} = useContext(AuthContext);
  const [data,setData] = useState({});
  useEffect(()=>{
      const datat = window.localStorage.getItem('MY_APP_STATE');
      if ( datat !== null ) setAuth(JSON.parse(datat));
      const fetchrestaurantData = async () =>{
          try {
              const response = await hostWeb.get(`/auth/test`,{
                  headers:{
                      auth_key:"Bearer "+JSON.parse(datat).auth_token,
                  },
              });
              setData(response.data);
          } catch (error) {
              console.log("error fetching data RestaurantHome");
          }
      }
      fetchrestaurantData();
  },[]);
    return(
        <div className="sidebar">
           <div className="Up">
              <div className="Title">FoodXpress</div>
              <div classNam="profile">
                <img src="https://as2.ftcdn.net/v2/jpg/03/11/71/81/1000_F_311718170_EPNjAH3HE5LPhftvxgZ4ECpjlubucVSg.jpg" alt="profile"/>
                <div className="profileName"><p>{data.name}</p></div>
              </div> 
           </div>
           <div className="Mid">
            <button className="Option" ><Home className="Icon"/>Home</button>
           </div>
           <div className="Down">
            <button className="logoutbutton" onClick={logout}>Log out</button>
           </div>
        </div>
    )
}

export default SidebarRestaurant;