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
                backgroundImage:`url("https://images.getbento.com/accounts/0dd435255ed47ef59b07b494968680e4/media/images/12960PQ_CHICAGO_INTERIOR_FULL.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5")`
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