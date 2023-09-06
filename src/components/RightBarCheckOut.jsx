import React from "react";
import "../css/rightbarcheckout.css";
import {ShoppingCart,NotificationsNone,LocalDining,ArrowForward,LocationOn,Edit,Money,ReceiptLong} from '@mui/icons-material';


function RightBarCheckOut(props)
{   
    //import HomePage from "./routes/Home.jsx";
    return(
        <div className="rightbarcheckout">
           <div className="Icons">
        <button className='IconItem'>
        <LocalDining/>
        <span className='Iconbadge'> 
         1
        </span>
        </button>
        <button className='IconItem'>
        <NotificationsNone/>
        <span className='Iconbadge'> 
         2
        </span>
        </button>
        <button className='IconItem'>
        <ShoppingCart/>
        <span className='Iconbadge'> 
         3
        </span>
        </button>
           </div>
           
           <div className="box">
            
          <h2><LocationOn/>Delivery Address <Edit/></h2>

          <p>Sabekun Nahar Sony Hall</p>
          </div>

        

          <div className="paybox">
            
          <h2><Money/>Payment Method <Edit/></h2>

          <p>Bkash</p>
          <p>012324254252</p>
          </div>


          <div className="orderbox">
            
            <h2><ReceiptLong/>Order Summary</h2>
  
            <p>Sutotal</p>
            
            <p>Delivery Charge</p>
            <p>VAT</p>
            <hr />
            <p>Total </p>
            </div>
  
        
           
        <div className="Down">
            <button className="placingorder">Placing Order</button>
           </div>



           
           
        </div>
    )
}

export default RightBarCheckOut;