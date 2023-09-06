import React from 'react'
import "../css/restaurantitemcard.css"
import { useNavigate } from "react-router-dom";

const RestaurantItemCard = (props) => {
    return (
        <div className="restaurantitemcard">
            <div className="restaurantitemcard-slot">
                <div className="restaurantitemcard-name">{props.data.item_name}</div>
                <div className="restaurantitemcard-address">{props.data.restaurant_name}</div>
                <div className="restaurantitemcard-price">{props.data.price} Tk</div>
            </div>
            
        </div>
)
}

export default RestaurantItemCard
