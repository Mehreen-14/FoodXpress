import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/SideBar'
import CheckOutCart from '../components/CheckOutCart'
import RightBarCheckOut from '../components/RightBarCheckOut'
import AuthContext from '../context/AuthProvider'
import hostWeb from '../apis/hostWeb'


const Checkout = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    const datat = window.localStorage.getItem('MY_APP_STATE');
    if (datat !== null) setAuth(JSON.parse(datat));
    const fetchData = async () => {
      try {
        const response = await hostWeb.get(`/order/getCart`, {
          headers: {
            auth_key: "Bearer " + JSON.parse(datat).auth_token,
          },
        });
        setData(response.data.data);
        console.log(data);
        setTotal(response.data.total_price);
      } catch (error) {
        console.log("error fetching data checkout");
      }
    }
    fetchData();
  }, []);

  function calculateCost(id,amount){
    let total = 0;
    console.log(amount);

    for (let i = 0; i < data.length; i++) {
        if(data[i].item_id === id){
          data[i].amount = amount;
        }
          total += (data[i].amount*data[i].price);
    }
    setTotal(total);
    console.log(total);
  }
  return (
    <div>
      <Sidebar />
      <CheckOutCart data={data} statusFunction={calculateCost} />
      <RightBarCheckOut total={total} />
    </div>
  )
}

export default Checkout