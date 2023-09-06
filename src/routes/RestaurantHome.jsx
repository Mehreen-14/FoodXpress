import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthProvider';
import hostWeb from '../apis/hostWeb';
import SidebarRestaurant from '../components/SideBarRestaurant';
import OrderList from '../components/OrderList';

const RestaurantHome = () => {
    const {auth, setAuth} = useContext(AuthContext);
    const [data,setData] = useState({});
    const [details,setDetails] = useState({});
    useEffect(()=>{
        const datat = window.localStorage.getItem('MY_APP_STATE');
        if ( datat !== null ) setAuth(JSON.parse(datat));
        const fetchrestaurantData = async () =>{
            try {
                const response = await hostWeb.get(`/auth/test`,{
                    headers:{
                        auth_key:"Bearer "+JSON.parse(datat).auth_token,
                    },
                });
                setData(response.data);
            } catch (error) {
                console.log("error fetching data RestaurantHome");
            }
        }
        const fetchorderdetails = async () => {
            try {
                const response = await hostWeb.get(`/order/getRestaurantOrders`,{
                    headers:{
                        auth_key:"Bearer "+JSON.parse(datat).auth_token,
                    },
                });
                setDetails(response.data.data);
            } catch (error) {
                console.log("error fetching data RestaurantHome");
            }
        }
        fetchrestaurantData();
        fetchorderdetails();
    },[]);
    return (
    <div>
      <SidebarRestaurant data={data}/>
      <OrderList details={details} />
    </div>
  )
}

export default RestaurantHome
