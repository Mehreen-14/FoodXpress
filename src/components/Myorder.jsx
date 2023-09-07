import React from "react";
import "../css/myorder.css"
import { useNavigate } from "react-router-dom";

function itemName(item)
{
    return (
        <p>
            {item.amount}X{item.item_name}
        </p>
    )
}
function Myorder(props)
{
    const navigate = useNavigate();
    function showOrder(order)
    {
        
        const gotoMyOrderPage = () =>{
            console.log("clicking")
            navigate(`/MyorderDetails/${order.order_id}`);
        }
        return(
            <div className="myorderitem" >
            <div onClick={gotoMyOrderPage}>
            #{order.order_id}({order.order_status})
            </div>
              <div className="myorderdetail">
              {order.items.map(itemName)}
              </div>
              <div>
               Tk {order.total}
              </div>
            </div>
        )
    }
    
    return(
        <div className="showmyorders">
            {props.orderlist.map(showOrder)}
        </div>
    )
}

export default Myorder;