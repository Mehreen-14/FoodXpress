import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/SideBar'
import RightBarMyOrder from '../components/RightBarMyOrder'
import AuthContext from '../context/AuthProvider';
import hostWeb from '../apis/hostWeb';
import '../css/myorderdetails.css'
import { useParams } from 'react-router-dom';
import MyOrderTrack from '../components/MyOrderTrack';

const MyOrderDetails = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const [data, setData] = useState({"hello":"world"});
    const [refresh,setRefresh] = useState(0);
    const { orderid } = useParams();
    const refreshpage = () =>{
            setRefresh(refresh+1);
    }
    useEffect(() => {
        const datat = window.localStorage.getItem('MY_APP_STATE');
        if (datat !== null) setAuth(JSON.parse(datat));
        const fetchData = async () => {
            try {
                const response = await hostWeb.post(`/order/trackOrder`,{"order_id": orderid}, {
                    headers: {
                        auth_key: "Bearer " + JSON.parse(datat).auth_token,
                    },
                });
                setData(response.data);            
                console.log(data);
            } catch (error) {
                console.log("error fetching data myorderdetails");
            }
        }
        fetchData();
    }, [refresh]);
    console.log(data);

    return (
        <div>
            <Sidebar />
            <RightBarMyOrder />
        </div>
    )
}

export default MyOrderDetails
