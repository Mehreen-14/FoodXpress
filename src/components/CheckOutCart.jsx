import React from "react";
import "../css/checkoutcart.css"
import {DeliveryDining,ShoppingBag,Dining} from '@mui/icons-material';


//Remove Add
function CheckOutCart(props) {
    const [count,changeCount]=React.useState(0);
  function increase()
   {
    changeCount(count+1)
   }
   function decrease()
   {
    if(count>0)
    changeCount(count-1)
   }
    return (
        <div className="cartContainer">
            
           <div className="mycart">
            My Cart
           </div>
           <div className="box">
            
           <img src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000" alt="" className="image" />
                    <div className="text">
                   <h2>Burger</h2>
                    <p>The Munch Station</p>
                    <p>Tk. 350</p>
                    </div>
           <div className="buttons">
            <button className="plus-button" onClick={increase}>+</button>
            <p>{count}</p>
            <button className="minus-button" onClick={decrease}>-</button>
          </div>
          </div>


          <div className="box">
            
           <img src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000" alt="" className="image" />
                    <div className="text">
                    <h2>Burger</h2>
                    <p>The Munch Station</p>
                    <p>Tk. 350</p>
                    </div>
           <div className="buttons">
            <button className="plus-button" onClick={increase}>+</button>
            <p>{count}</p>
            <button className="minus-button" onClick={decrease}>-</button>
          </div>
          </div>

          <div className="mycart2">
           Select Option
           </div>

           <div className="Icons">
        <button className='IconItem'>
        <DeliveryDining/>
        <div className="textop">Delivery</div>
        
        </button>
        <button className='IconItem'>
        <ShoppingBag/>
        <div className="textop">Pick Up</div>
        
        
        </button>
        <button className='IconItem'>
        <Dining/>
        <div className="textop">Dine-In</div>
        
        
        </button>
           </div>

        </div>
    )
}

export default CheckOutCart;