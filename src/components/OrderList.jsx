import React, { useEffect, useState } from "react"
import "../css/orderlist.css"
import Food from "./Food";
import RestaurantCard from "./RestaurantCard";
import hostWeb from "../apis/hostWeb";
import OrderCard from "./OrderCard";

function orderlist(items) {

      return (
                <OrderCard data={items}/>
      )
}

function OrderList(props) {
    console.log(props.details);
      return (
      <div className="menu">
            <div className="order-list-header">Orders</div>
            <div className="orderlistcontainer">
                  {props.details.map(orderlist)}
            </div>
      </div>
      )
}

export default OrderList;