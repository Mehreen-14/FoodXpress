import React, { useContext, useEffect, useState } from "react"
import "../css/orderlist.css"
import Food from "./Food";
import RestaurantCard from "./RestaurantCard";
import hostWeb from "../apis/hostWeb";
import OrderCard from "./OrderCard";
import AuthContext from "../context/AuthProvider";

function orderlist(items) {

      return (
                <OrderCard data={items}/>
      )
}

function OrderList(props) {
      const {auth, setAuth} = useContext(AuthContext);
      const [details,setDetails] = useState([]);
      useEffect(()=>{
          const datat = window.localStorage.getItem('MY_APP_STATE');
          if ( datat !== null ) setAuth(JSON.parse(datat));
          const fetchorderdetails = async () => {
              try {
                  const response = await hostWeb.get(`/order/getRestaurantOrders`,{
                      headers:{
                          auth_key:"Bearer "+JSON.parse(datat).auth_token,
                      },
                  });
                  setDetails(response.data.data);
              } catch (error) {
                  console.log("error fetching data RestaurantHome");
              }
          }
          fetchorderdetails();
      },[]);;
      return (
      <div className="menu">
            <div className="order-list-header">Orders</div>
            <div className="orderlistcontainer">
                  {details.map(orderlist)}
            </div>
      </div>
      )
}

export default OrderList;