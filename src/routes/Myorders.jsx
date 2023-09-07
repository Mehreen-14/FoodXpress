import React from "react";
import Sidebar from "../components/SideBar";
import  "../css/restaurant.css"
import "../css/myorder.css"
import { useState,useEffect,useContext } from "react";
import AuthContext from '../context/AuthProvider';
import hostWeb from "../apis/hostWeb";
import Myorder from "../components/Myorder";
import hehe from "../DummyData/DummyData";
function Myorders()
{
    const { auth, setAuth } = useContext(AuthContext);
    const [list,changelist]=React.useState([]);

    useEffect(() => {
        const datat = window.localStorage.getItem('MY_APP_STATE');
        if (datat !== null) setAuth(JSON.parse(datat));
        const fetchmyorder = async () => {
          try {
            const response = await hostWeb.get('/order/getOrderSummary', {
              headers: {
                auth_key: "Bearer " + JSON.parse(datat).auth_token,
              },
            });
            changelist(response.data.data);
          } catch (error) {
            console.log("error fetching data Myorder");
          }
        }
        fetchmyorder();
      }, []);


    return(<div className="RestaurantConatainer">
     
       <Sidebar/>
        <div className="orderContainer">
          <div className="heading">
           Orders
          </div>
          <Myorder orderlist={list}/>
        </div>
    </div>)
}
export default Myorders;