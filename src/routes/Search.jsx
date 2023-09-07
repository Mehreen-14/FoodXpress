import React from 'react'
import Sidebar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import { useParams } from 'react-router-dom';
import SearchList from '../components/SearchList';
import AuthContext from '../context/AuthProvider';
import hostWeb from "../apis/hostWeb";
import { useContext,useEffect } from 'react';
import Rightbar from '../components/RightBar';
import "../css/restaurant.css"
const Search = () => {
  const[total_price,changetotalprice] =React.useState(0);

  const { auth, setAuth } = useContext(AuthContext);
  const [list, changecart] = React.useState([]);
  function addToCart(input) {

      const isFound = list.some(element => {
          if (element.item_id === input.item_id) {
              input.amount += element.amount;
              input.total_price = input.amount * element.price;
              return true;
          }

          return false;
      });

      if (isFound) {

          // const datat = window.localStorage.getItem('MY_APP_STATE');
          // if (datat !== null) setAuth(JSON.parse(datat));


          // const addCartToDatabase = async () => {
          //     try {
          //         const response = await hostWeb.post(/order/incrementItemInCart, { item_id: input.item_id }, {
          //             headers: {
          //                 auth_key: "Bearer " + JSON.parse(datat).auth_token,
          //             },
          //         });
          //         console.log(response);
          //     } catch (error) {
          //         console.log("error fetching data RestaurantHome");
          //     }
          // }
          // addCartToDatabase();
          // update(input, input.item_id)
      }
      else {

          const datat = window.localStorage.getItem('MY_APP_STATE');
          if (datat !== null) setAuth(JSON.parse(datat));


          const addCartToDatabase = async () => {
              try {
                  const response = await hostWeb.post('/order/addToCart', { item_id: input.item_id, amount: 1 }, {
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
          changecart((prevlist) => {
              return [...prevlist, input]
          })
      }
      console.log("add");
  }
  function update(input, id) {

      console.log("in update");
     
      if(input.amount===0){
        console.log("zero te");
      changecart(current =>
        current.filter(obj => {
          
          
          return obj.item_id !== id;
        }),
      );
      }
      else{
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
    const  sum=list.reduce((a,v) =>  a = a + v.total_price , 0 );
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
  const params = useParams();
  return (
    <div className='RestaurantConatainer'>
      <Sidebar/>
      <div className='mid'>
      <SearchBar />
      <SearchList searchBy={params.param} addToCart={addToCart} />
      </div>
      <Rightbar CartArray={list} update={update} total_price={total_price} />
    </div>
  )
}

export default Search
