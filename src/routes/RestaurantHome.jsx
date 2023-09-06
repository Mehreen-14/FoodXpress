import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthProvider';
import hostWeb from '../apis/hostWeb';
import SidebarRestaurant from '../components/SideBarRestaurant';
import OrderList from '../components/OrderList';

const RestaurantHome = () => {
    return (
    <div>
      <SidebarRestaurant/>
      <OrderList/>
    </div>
  )
}

export default RestaurantHome
