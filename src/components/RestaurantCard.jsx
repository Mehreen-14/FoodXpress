import React from "react";

import "../css/restaurantcard.css"
import { Add } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";



function RestaurantCard(props) {
        const navigate = useNavigate();
        const gotoRestaurant = ()=>{
            navigate(`/restaurant/${props.data.restaurant_id}`);
        }
        let myStyle={};
        if(props.data.restaurant_image){
            myStyle={
                backgroundImage:"url(" + props.data.restaurant_image + ")"
            };
        }
        
        return (
                <div className="restaurantcard" style={myStyle} onClick={gotoRestaurant} >
                    <div className="restaurantcard-slot">
                        <div className="restaurantcard-name">{props.data.restaurant_name}</div>
                        <div className="restaurantcard-address">{props.data.address}</div>
                    </div>
                    
                </div>
        )
}

export default RestaurantCard;