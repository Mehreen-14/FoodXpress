import React from "react";
import "../css/rightbar.css"
import Cart from "./Cart";
import {ShoppingCart,NotificationsNone,LocalDining,ArrowForward} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
// function fetch_cart(cartItems)
// {
//     return(
//         <Cart cartinfo={cartItems}/>
//     )
// }
function Rightbar(props)
{
    // return(
    //     <div className="rightbar">
    //        <div className="Icons">
    //     <button className='IconItem'>
    //     <LocalDining/>
    //     <span className='Iconbadge'> 
    //      1
    //     </span>
    //     </button>
    //     <button className='IconItem'>
    //     <NotificationsNone/>
    //     <span className='Iconbadge'> 
    //      2
    //     </span>
    //     </button>
    //     <button className='IconItem'>
    //     <ShoppingCart/>
    //     <span className='Iconbadge'> 
    //      3
    //     </span>
    //     </button>
    //        </div>
    //        <div className="Carts">
    //        <div className="cartHeading">
    //        <div className="Carttitle">MY Cart</div>
           
    //        <div className="approxtime">ASAP(34 min)</div>
           
    //        </div>
          
           
    //       {props.CartArray.map(fetch_cart)}
    //        <hr className="dividecart"/>
    //        <div className="showtotalMoney">
    //        <div >Sub Total</div>           
    //        <div>Tk.500</div>
    //        </div>
    //        <button className="checkoutbutton"> <span className="arrowsign"> Checkout </span><ArrowForward /></button>
    //        </div>
    //     </div>
    // )


    const [state, changestate] = React.useState(false);
    const navigate = useNavigate();
    const Checkout =  (e) => {
      e.preventDefault();
        navigate(`/Checkout`);
    }
    function somethingisChnaged(item)
    {
        console.log(item.amount);
        if(item.amount>0)
        {
            item.total_price=item.price * item.amount;
            props.update(item,item.item_id);
            console.log("lara please relax!");
            console.log(item.item_name);
        }
        // else
        // {
            
        // }
        
    }
    function fetch_cart(cartItems) {
        return (
            <Cart cartinfo={cartItems}  somethingisChnaged={somethingisChnaged} />
        )
    }
    return (
        <div className="rightbar">
            <div className="Icons">
                <button className='IconItem'>
                    <LocalDining />
                    <span className='Iconbadge'>
                        1
                    </span>
                </button>
                <button className='IconItem'>
                    <NotificationsNone />
                    <span className='Iconbadge'>
                        2
                    </span>
                </button>
                <button className='IconItem' onClick={() => { changestate(!state) }}>
                    <ShoppingCart />
                    <span className='Iconbadge'>
                        3
                    </span>
                </button>
            </div>
            {state === true &&
                <div className="Carts">
                    <div className="cartHeading">
                        <div className="Carttitle">MY Cart</div>

                        <div className="approxtime">ASAP(34 min)</div>

                    </div>


                    {props.CartArray.map(fetch_cart)}
                    <hr className="dividecart" />
                    <div className="showtotalMoney">
                        <div >Sub Total</div>
                        <div>Tk.500</div>
                    </div>
                    <button className="checkoutbutton" onClick={Checkout} > <span className="arrowsign"> Checkout </span><ArrowForward /></button>

                </div>}
        </div>
    )
}

export default Rightbar;