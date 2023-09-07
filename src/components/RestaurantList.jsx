import React, { useContext, useEffect, useState } from "react"
import "../css/restaurantlist.css"
import Food from "./Food";
import RestaurantCard from "./RestaurantCard";
import hostWeb from "../apis/hostWeb";
import AuthContext from "../context/AuthProvider";

function categorylist(items) {

      return (
            <RestaurantCard data={items}/>
      )
}

function RestaurantList(props) {
    const [data,setData] = useState([]);
    const { auth, setAuth } = useContext(AuthContext);
    useEffect(()=>{
      const datat = window.localStorage.getItem('MY_APP_STATE');
      if (datat !== null) setAuth(JSON.parse(datat));
            const fetchData = async () =>{
                try {
                    const response = await hostWeb.get(`restaurant/getAllRestaurants`,{
                        headers: {
                          auth_key: "Bearer " + JSON.parse(datat).auth_token,
                        },
                      });
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