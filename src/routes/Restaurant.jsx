import React, { useContext,useEffect, useState } from "react";
import '../css/restaurant.css'
import Sidebar from "../components/SideBar";
import Rightbar from "../components/RightBar";
import Menu from "../components/Menu";
import hehe from "../DummyData/DummyData"
import { useParams } from "react-router-dom";
import hostWeb from "../apis/hostWeb";
import AuthContext from '../context/AuthProvider';
function Restaurant()
{
    const {auth, setAuth} = useContext(AuthContext);
    const { id } = useParams();
    const [restaurantinfo,setRestaurantinfo] = useState([]);
    const[list,changecart]=React.useState([]);
    const [resinfo, setresinfo] = useState({});
    const[total_price,changetotalprice] =React.useState(0);

    function addToCart(input)
    {

        const isFound = list.some(element => {
            if (element.item_id === input.item_id) {
                input.amount+=element.amount;
                input.total_price=input.amount*element.price;
              return true;
            }
        
            return false;
          });
        
          if (isFound) {
                ;
          }
        else {
            
            const datat = window.localStorage.getItem('MY_APP_STATE');
            if ( datat !== null ) setAuth(JSON.parse(datat));
            
          
                const addCartToDatabase = async () => {
                    try {
                        const response = await hostWeb.post(`/order/addToCart`,{item_id:input.item_id,amount:1},{
                            headers:{
                                auth_key:"Bearer "+JSON.parse(datat).auth_token,
                            },
                        });
                        console.log(response);
                    } catch (error) {
                        console.log("error fetching data RestaurantHome");
                    }
                }
                addCartToDatabase();
        changecart((prevlist)=>
        {
            return [...prevlist,input]
        })
    }
    console.log("add");
    }
    function update(input,id)
    {
           
            console.log("in update");

            
        const newState = list.map(obj => {
            // 👇️ if id equals 2, update country property
            if (obj.item_id === id) {
              return {...obj, total_price:input.total_price, amount:input.amount};
            }
      
            // 👇️ otherwise return the object as is
            return obj;
          });
          
          
          changecart(newState);
        //   console.log(list);
    }
    useEffect(() => {
        const  sum=list.reduce((a,v) =>  a = a + v.total_price , 0 );
        changetotalprice(sum);
        console.log(list);
    }, [list]);

    useEffect(()=>{
            
        const datat = window.localStorage.getItem('MY_APP_STATE');
        if ( datat !== null ) setAuth(JSON.parse(datat));
        const fetcart = async () => {
            try {
                const response = await hostWeb.get(`/order/getCart`,{
                    headers:{
                        auth_key:"Bearer "+JSON.parse(datat).auth_token,
                    },
                });
                changecart(response.data.data);
                changetotalprice(response.data.total_price);
            } catch (error) {
                console.log("error fetching data RestaurantHome");
            }
        }
            const fetchData = async () =>{
                try {
                    const response = await hostWeb.post(`/restaurant/getmenu`,{ "restaurant_id": id });
                    setRestaurantinfo(response.data.data);
                    console.log("3---");
                    console.log(response.data);
                    setresinfo(response.data.restaurant_data);
                    
                } catch (error) {
                    console.log("error fetching data getRestaurentMenu");
                }
            }
            fetchData();
            fetcart ();

    },[id]);
    return(
        <div className="RestaurantConatainer">
           <Sidebar/>
           <Menu data={restaurantinfo} addToCart={addToCart} restaurant_data={resinfo} /> 
           <Rightbar CartArray={list} update={update} total_price={total_price} />
        </div>
    )
   

}
export default Restaurant;