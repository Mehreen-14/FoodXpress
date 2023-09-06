import React from "react";
import '../css/restaurant.css'
import Sidebar from "../components/SideBar";
import Rightbar from "../components/RightBar";
import Menu from "../components/Menu";
import hehe from "../DummyData/DummyData"
import { useParams } from "react-router-dom";
function Restaurant()
{
    const param = useParams();
    console.log(param);
    return(
        <div className="RestaurantConatainer">
           <Sidebar/>
           <Menu data={hehe.Restaurantinfo.data}/> 
           <Rightbar CartArray={hehe.Cartinfo}/>
        </div>
    )
}
export default Restaurant;