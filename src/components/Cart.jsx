import React from "react";
import "../css/cart.css"
import {Remove,Add} from '@mui/icons-material';
import { useEffect,useContext } from 'react';
import hostWeb from "../apis/hostWeb";
import AuthContext from "../context/AuthProvider";
//Remove Add
function Cart(props) {
    const {auth, setAuth} = useContext(AuthContext);
    const [count, changeCount] = React.useState(parseInt(props.cartinfo.amount));

    useEffect(() => {

        props.cartinfo.amount = count;
        console.log(count);
        props.somethingisChnaged(props.cartinfo);
    }, [count]);
    function increase() {
        changeCount(count + 1);
        const datat = window.localStorage.getItem('MY_APP_STATE');
        if ( datat !== null ) setAuth(JSON.parse(datat));
        
      
            const addCartToDatabase = async () => {
                try {
                    const response = await hostWeb.post(`/order/incrementItemInCart`,{item_id:props.cartinfo.item_id},{
                        headers:{
                            auth_key:"Bearer "+JSON.parse(datat).auth_token,
                        },
                    });
                    console.log(response);
                } catch (error) {
                    console.log("error fetching data RestaurantHome");
                }
            }
            addCartToDatabase();

    }
    function decrease() {
        if (count > 0)
            {
            changeCount(count - 1);
            const datat = window.localStorage.getItem('MY_APP_STATE');
            if ( datat !== null ) setAuth(JSON.parse(datat));
            
          
                const addCartToDatabase = async () => {
                    try {
                        const response = await hostWeb.post(`/order/decrementItemInCart`,{item_id:props.cartinfo.item_id},{
                            headers:{
                                auth_key:"Bearer "+JSON.parse(datat).auth_token,
                            },
                        });
                        console.log(response);
                    } catch (error) {
                        console.log("error fetching data RestaurantHome");
                    }
                }
                addCartToDatabase();
            }

    }
    return (
        <div className="cartContainer" >
            <div className="foodinfo">
                <div className="description">
                    <div className="foodName">{props.cartinfo.item_name}</div>
                    <div className="fooddescription">{props.cartinfo.restaurant_name}</div>
                </div>
                <div className="foodImage">
                    <img src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000" alt="" />
                </div>

            </div>
            <div className="MoneyPlusChangeitemNumber">
                <div className="showMoney"> Tk. {props.cartinfo.price}</div>
                <div className="itemChange">
                    <button className="removeadd" onClick={decrease}><Remove style={{ height: "1rem", width: "1rem" }} /></button><span className="itemNumber">{count}</span><button className="removeadd" onClick={increase}><Add style={{ height: "1rem", width: "1rem" }} /></button>
                </div>
            </div>
        </div>
    )
}

export default Cart;