import React from 'react'
import Sidebar from '../components/SideBar'
import CheckOutCart from '../components/CheckOutCart'
import RightBarCheckOut from '../components/RightBarCheckOut'


const Checkout = () => {
    return (
      <div>
        <Sidebar/>
        <CheckOutCart/>
        <RightBarCheckOut/>

      </div>
    )
  }
  
  export default Checkout