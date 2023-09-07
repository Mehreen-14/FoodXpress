import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/SideBar'
import RightBarMyOrder from '../components/RightBarMyOrder'
import AuthContext from '../context/AuthProvider';
import hostWeb from '../apis/hostWeb';
import { useLocation, useParams } from 'react-router-dom';

const MyOrderDetails = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const [data, setData] = useState({});
    const [total, setTotal] = useState(0);
    const { orderid } = useParams();
    console.log(orderid);
    const location = useLocation();
    const tempdata = {};
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
                console.log("my order details")
                console.log(response.data);
                console.log("data - ",data);
                console.log(response.data);                
                setTotal(response.data.data[0].total_price);
            } catch (error) {
                console.log("error fetching data myorderdetails");
            }
        }
        fetchData();
    }, [location.state]);

    return (
        <div>
            <Sidebar />
            <RightBarMyOrder />
        </div>
    )
}

export default MyOrderDetails
