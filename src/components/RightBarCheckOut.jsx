import React, { useContext } from "react";
import "../css/rightbarcheckout.css";
import { ShoppingCart, NotificationsNone, LocalDining, ArrowForward, LocationOn, Edit, Money, ReceiptLong } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import hostWeb from "../apis/hostWeb";


function RightBarCheckOut(props) {
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const placeOrderFinal = async () => {
        const datat = window.localStorage.getItem('MY_APP_STATE');
        if (datat !== null) setAuth(JSON.parse(datat));
        try {
            const response = await hostWeb.post(`/order/placeOrder`,{}, {
                headers: {
                    auth_key: "Bearer " + JSON.parse(datat).auth_token,
                },
            });
        } catch (error) {
            console.log("error fetching data checkout");
        }
        navigate("/home");
    };


    return (
        <div className="rightbarcheckout">
            <div className="rightbarcheckoutIcons">
                <button className='rightbarcheckoutIconItem'>
                    <LocalDining />
                    <span className='rightbarcheckoutIconbadge'>
                        1
                    </span>
                </button>
                <button className='rightbarcheckoutIconItem'>
                    <NotificationsNone />
                    <span className='rightbarcheckoutIconbadge'>
                        2
                    </span>
                </button>
                <button className='rightbarcheckoutIconItem'>
                    <ShoppingCart />
                    <span className='rightbarcheckoutIconbadge'>
                        3
                    </span>
                </button>
            </div>

            <div className="rightbarcheckoutaddrbox">

                <h2 className="d-flex justify-content-between"><LocationOn />Delivery Address <Edit /></h2>

                <p>Sabekun Nahar Sony Hall</p>
            </div>



            <div className="rightbarcheckoutpaybox">

                <h2 d-flex justify-content-between><Money />Payment Method <Edit /></h2>

                <p>Bkash</p>
                <p>012324254252</p>
            </div>


            <div className="rightbarcheckoutorderbox">

                <h2 d-flex justify-content-between><ReceiptLong />Order Summary</h2>

                <p>Subtotal : {props.total}</p>

                <p>Delivery Fee : {30}</p>
                <p>VAT : 5%</p>
                <hr />
                <p>Total : {props.total + 30 + (props.total * 0.05)} </p>
            </div>



            <div className="rightbarcheckoutDown">
                <div className="rightbarcheckoutplacingorder btn btn-dark btn-lg" onClick={placeOrderFinal}>Place Order</div>
            </div>
        </div>
    )
}

export default RightBarCheckOut;