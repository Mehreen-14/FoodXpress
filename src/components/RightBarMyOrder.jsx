import React, { useContext } from "react";
import "../css/rightbarcheckout.css";
import { ShoppingCart, NotificationsNone, LocalDining, ArrowForward, LocationOn, Edit, Money, ReceiptLong } from '@mui/icons-material';



function RightBarMyOrder(props) {
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

                <p>Delivery Fee : 0</p>
                <p>VAT : 0%</p>
                <hr />
                <p>Total : {props.total} </p>
            </div>
            </div>

    )
}

export default RightBarMyOrder;