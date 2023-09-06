import React, { useEffect, useState } from "react";
import '../css/restaurant.css'
import Sidebar from "../components/SideBar";
import Rightbar from "../components/RightBar";
import Menu from "../components/Menu";
import hehe from "../DummyData/DummyData"
import { useParams } from "react-router-dom";
import hostWeb from "../apis/hostWeb";
function Restaurant()
{
    const { id } = useParams();
    console.log(hehe.Restaurantinfo.data);
    console.log(hehe.Cartinfo);
    const [restaurantinfo,setRestaurantinfo] = useState([]);
    const [cartinfo,setCartinnfo] = useState([]);
    useEffect(()=>{
            
            const fetchData = async () =>{
                try {
                    const response = await hostWeb.post(`/restaurant/getmenu`,{ "restaurant_id": id });
                    setRestaurantinfo(response.data.data);
                } catch (error) {
                    console.log("error fetching data getRestaurentMenu");
                }
            }
            fetchData();
    },[id]);
    return(
        <div className="RestaurantConatainer">
           <Sidebar/>
           <Menu data={restaurantinfo}/> 
           <Rightbar CartArray={hehe.Cartinfo}/>
        </div>
    )
}
export default Restaurant;