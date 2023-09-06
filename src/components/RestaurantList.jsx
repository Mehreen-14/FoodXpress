import React, { useEffect, useState } from "react"
import "../css/restaurantlist.css"
import Food from "./Food";
import RestaurantCard from "./RestaurantCard";
import hostWeb from "../apis/hostWeb";

function categorylist(items) {

      return (
            <RestaurantCard data={items}/>
      )
}

function RestaurantList(props) {
    const [data,setData] = useState([]);
    useEffect(()=>{
            const fetchData = async () =>{
                try {
                    const response = await hostWeb.get(`restaurant/getAllRestaurants`);
                    setData(response.data.data);
                } catch (error) {
                    console.log("error fetching data getRestaurentList");
                }
            }
            fetchData();
    },[]);
      return (
      <div className="menu">
            <div className="restaurant-list-header">Restaurants Near You</div>
            <div className="restaurentlistcontainer">
                  {data.map(categorylist)}
            </div>
      </div>
      )
}

export default RestaurantList;