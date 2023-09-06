import React from "react";
import "../css/checkoutcart.css"
import { DeliveryDining, ShoppingBag, Dining } from '@mui/icons-material';
import AuthContext from "../context/AuthProvider";
import hostWeb from "../apis/hostWeb";
import CheckOutCartCard from "./CheckOutCartCard";


//Remove Add
function CheckOutCart(props) {

  function notifyCheckOut(id,amount) {
    props.statusFunction(id,amount);
  }

  const loadItems = (items) => {
    return (
      <CheckOutCartCard items={items} statusFunction={notifyCheckOut} />
    )
  }

  return (
    <div className="checkoutcartContainer">

      <div className="mycart">
        My Cart
      </div>
      {props.data.map(loadItems)}

      <div className="checkoutIcons d-flex justify-content-between">
        <div className='checkoutIconItem'>
          <DeliveryDining />
          <div className="checkouttextop">Delivery</div>
        </div>
        <div className='checkoutIconItem'>
          <ShoppingBag />
          <div className="checkouttextop">PickUp</div>
        </div>
        <div className='checkoutIconItem'>
          <Dining />
          <div className="checkouttextop">Dine-In</div>
        </div>
      </div>

    </div>
  )
}

export default CheckOutCart;