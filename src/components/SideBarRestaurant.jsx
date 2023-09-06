import React from "react";
import "../css/sidebar.css"
import {Home,LocationOn,Article} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

function SidebarRestaurant(props)
{
    
    const navigate = useNavigate();
    console.log(props.data);
    return(
        <div className="sidebar">
           <div className="Up">
              <div className="Title">FoodXpress</div>
              <div classNam="profile">
                <img src="https://as2.ftcdn.net/v2/jpg/03/11/71/81/1000_F_311718170_EPNjAH3HE5LPhftvxgZ4ECpjlubucVSg.jpg" alt="profile"/>
                <div className="profileName"><p>{props.data.name}</p></div>
              </div> 
           </div>
           <div className="Mid">
            <button className="Option" ><Home className="Icon"/>Home</button>
           </div>
           <div className="Down">
            <button className="logoutbutton">Log out</button>
           </div>
        </div>
    )
}

export default SidebarRestaurant;