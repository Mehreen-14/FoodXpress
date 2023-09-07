import React from 'react'
import Sidebar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import RestaurantList from '../components/RestaurantList'
import "../css/restaurant.css"
import Rightbar from '../components/RightBar'
import AuthContext from '../context/AuthProvider';
import hostWeb from "../apis/hostWeb";
import { useEffect,useContext } from 'react';


const Home = () => {
  const [total_price, changetotalprice] = React.useState(0);
  const { auth, setAuth } = useContext(AuthContext);
  const [list, changecart] = React.useState([]);
  function update(input, id) {

    console.log("in update");

    //changed here
    if (input.amount === 0) {
      console.log("zero te");
      changecart(current =>
        current.filter(obj => {


          return obj.item_id !== id;
        }),
      );
    }
    else {
      console.log("in  zero");
      const newState = list.map(obj => {

        if (obj.item_id === id) {
          return { ...obj, total_price: input.total_price, amount: input.amount };
        }


        return obj;
      });


      changecart(newState);
    }

  }
  useEffect(() => {

    console.log(list);

    //changed here
    const sum = list.reduce((a, v) => a = a + v.total_price, 0);
    changetotalprice(sum);

  }, [list]);

  useEffect(() => {
    const datat = window.localStorage.getItem('MY_APP_STATE');
    if (datat !== null) setAuth(JSON.parse(datat));
    const fetcart = async () => {
      try {
        const response = await hostWeb.get('/order/getCart', {
          headers: {
            auth_key: "Bearer " + JSON.parse(datat).auth_token,
          },
        });
        changecart(response.data.data);
        //changed here 
        changetotalprice(response.data.total_price);
        console.log("cart e achi");
        console.log(response.data.data);
      } catch (error) {
        console.log("error fetching data RestaurantHome");
      }
    }
    fetcart();
  }, []);


  return (
    <div className='RestaurantConatainer'>
      <Sidebar />
      <div className='mid'>
        <SearchBar />
        <RestaurantList />
      </div>
      <Rightbar CartArray={list} update={update} total_price={total_price} />
    </div>
  )
}

export default Home
