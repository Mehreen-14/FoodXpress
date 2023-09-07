import React, { useContext, useEffect, useState } from 'react'
import "../css/checkoutcart.css"
import AuthContext from '../context/AuthProvider';
import hostWeb from '../apis/hostWeb';

const MyOrderTrack = (props) => {
    const { auth, setAuth } = useContext(AuthContext);
const [avg,setAvg] = useState({});
console.log("track")
console.log(props.data);
console.log(avg)
  return (
    <div className="checkoutcartContainer">

      <div className="mycart">
        My Order
      </div>
      <div className="myorderpan">Order Received - {avg.data[0].order_id}  </div>
      

    </div>
  )
}

export default MyOrderTrack
