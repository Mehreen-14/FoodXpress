import React from "react";

import "../css/food.css"
import { Add } from '@mui/icons-material';



function Food(props) {
        
        return (
                <div className="foodContainer" >
                        <div className="foodimage">
                                <img src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000" alt="" />
                        </div>
                        <div className="food">

                                <div className="des">
                                        <div className="foodName">{props.data.item_name}</div>
                                        <div className="fooddescription">{props.data.item_description}</div>
                                </div>
                                <div className="MoneyPlus">
                                        <div className="Money"> Tk. {props.data.price}</div>
                                        <div className="plusbutton">
                                                <button ><Add /></button>
                                        </div>
                                </div>
                        </div>


                </div>
        )
}

export default Food;