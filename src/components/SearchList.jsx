import React, { useContext, useEffect, useState } from 'react'
import hostWeb from '../apis/hostWeb';
import "../css/restaurantlist.css"
import RestaurantCard from './RestaurantCard';
import RestaurantItemCard from './RestaurantItemCard';
import Food from './Food';
import AuthContext from '../context/AuthProvider';

function restaurantlist(items) {

    return (
              <RestaurantCard data={items}/>
    )
}


const SearchList = (props) => {
    function notifyCart(item)
    {
          item.amount=1;
          props.addToCart(item);
    }
    function itemlist(item){
        return(
            <Food data={item} notifyCart={notifyCart}/>
        )
    }
    const [restaurants,setRestaurants] = useState([]);
    const [items,setItems] = useState([]);
    const { auth, setAuth } = useContext(AuthContext);
    useEffect(()=>{
        const datat = window.localStorage.getItem('MY_APP_STATE');
      if (datat !== null) setAuth(JSON.parse(datat));
            const fetchData = async () =>{
                try {
                    const response = await hostWeb.get(`search/home?name=${props.searchBy}`,{
                        headers: {
                          auth_key: "Bearer " + JSON.parse(datat).auth_token,
                        },
                      });
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
