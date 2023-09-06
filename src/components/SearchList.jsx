import React, { useEffect, useState } from 'react'
import hostWeb from '../apis/hostWeb';
import "../css/restaurantlist.css"
import RestaurantCard from './RestaurantCard';
import RestaurantItemCard from './RestaurantItemCard';

function restaurantlist(items) {

    return (
              <RestaurantCard data={items}/>
    )
}
function itemlist(item){
    return(
        <RestaurantItemCard data={item}/>
    )
}

const SearchList = (props) => {
    console.log(props.searchBy);
    const [restaurants,setRestaurants] = useState([]);
    const [items,setItems] = useState([]);
    useEffect(()=>{
            const fetchData = async () =>{
                try {
                    const response = await hostWeb.get(`search/home?name=${props.searchBy}`);
                    setRestaurants(response.data.restaurents);
                    setItems(response.data.items);
                } catch (error) {
                    console.log("error fetching data getRestaurentList");
                }
            }
            fetchData();
    },[props.searchBy]);
    return (
        <div className="menu">
            <div className="restaurant-list-header">Resturents <span className="searchcountshow">(Found {restaurants.length})</span></div>
            <div className="restaurentlistcontainer">
                  {restaurants.map(restaurantlist)}
            </div>
            <div className="restaurant-list-header">Items <span className="searchcountshow">(Found {items.length})</span></div>
            <div className="restaurentlistcontainer">
                  {items.map(itemlist)}
            </div>
      </div>
    )
}

export default SearchList
