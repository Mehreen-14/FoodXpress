import React, { useContext, useEffect, useState } from "react";
import hostWeb from "../apis/hostWeb";
import AuthContext from "../context/AuthProvider";

const CheckOutCartCard = (props) => {
    const { auth, setAuth } = useContext(AuthContext);
    const [count, setCount] = useState(props.items.amount);
    useEffect(() => {
        props.statusFunction(props.items.item_id,count);
    }, [count]);
    const increase = () => {
        setCount(count + 1);
        const datat = window.localStorage.getItem('MY_APP_STATE');
        if (datat !== null) setAuth(JSON.parse(datat));
        const addCartToDatabase = async () => {
            try {
                const response = await hostWeb.post(`/order/incrementItemInCart`, { item_id: props.items.item_id }, {
                    headers: {
                        auth_key: "Bearer " + JSON.parse(datat).auth_token,
                    },
                });
            } catch (error) {
                console.log("error fetching data RestaurantHome");
            }
        }
        addCartToDatabase();

    }

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
            const datat = window.localStorage.getItem('MY_APP_STATE');
            if (datat !== null) setAuth(JSON.parse(datat));


            const addCartToDatabase = async () => {
                try {
                    const response = await hostWeb.post(`/order/decrementItemInCart`, { item_id: props.items.item_id }, {
                        headers: {
                            auth_key: "Bearer " + JSON.parse(datat).auth_token,
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
        <div className="checkoutbox d-flex justify-content-between">
            <div className="d-flex">
                <img src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000" alt="" className="checkoutimage" />
                <div className="checkouttext">
                    <div className="checkoutitemtitle">{props.items.item_name}</div>
                    <div className="checkoutitemrestaurant">{props.items.restaurant_name}</div>
                    <div className="checkoutprice">Tk. {(props.items.price) * count}</div>
                </div>
            </div>
            <div className="checkoutbuttons">
                <button className="checkout-plus-button" onClick={increase}>+</button>
                <div>{count}</div>
                <button className="checkout-minus-button" onClick={decrease}>-</button>
            </div>
        </div>
    )
}

export default CheckOutCartCard
