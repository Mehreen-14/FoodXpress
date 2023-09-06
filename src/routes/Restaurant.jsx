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
    console.log(hehe.Restaurantinfo.data);
    console.log(hehe.Cartinfo);
    const [restaurantinfo,setRestaurantinfo] = useState([]);
    const [RestaurantInfo,setRestaurantName] =useState([]);
    const[list,changecart]=React.useState([]);
    // const [initialSate,changestate]=React.useState(true);
    // const [isedit,changedit]=React.useState(false);
    // const [newitem,changeitem]=React.useState({});
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
                
            const datat = window.localStorage.getItem('MY_APP_STATE');
            if ( datat !== null ) setAuth(JSON.parse(datat));
            
          
                const addCartToDatabase = async () => {
                    try {
                        const response = await hostWeb.post(`/order/incrementItemInCart`,{item_id:input.item_id},{
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
                update(input,input.item_id)
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
            // const datat = window.localStorage.getItem('MY_APP_STATE');
            // if ( datat !== null ) setAuth(JSON.parse(datat));
            
          
            //     const addCartToDatabase = async () => {
            //         try {
            //             const response = await hostWeb.post(`/order/incrementItemInCart`,{item_id:input.item_id},{
            //                 headers:{
            //                     auth_key:"Bearer "+JSON.parse(datat).auth_token,
            //                 },
            //             });
            //             console.log(response);
            //         } catch (error) {
            //             console.log("error fetching data RestaurantHome");
            //         }
            //     }
            //     addCartToDatabase();
            
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
            } catch (error) {
                console.log("error fetching data RestaurantHome");
            }
        }
            const fetchData = async () =>{
                try {
                    const response = await hostWeb.post(`/restaurant/getmenu`,{ "restaurant_id": id });
                    setRestaurantinfo(response.data.data);
                } catch (error) {
                    console.log("error fetching data getRestaurentMenu");
                }
            }
            const fetchRestaurantName = async() =>
            {
                try {
                    const response = await hostWeb.post(`/restaurant/getRestaurantById`,{ "restaurant_id": id });
                    setRestaurantName(response.data.data);
                    //setRestaurantName
                    console.log(response);
                    console.log("nam nicchi");
                } catch (error) {
                    console.log("error fetching data getRestaurentMenu");
                }
            }
            fetchData();
            fetcart ();
            fetchRestaurantName();
    },[id]);
//     useEffect(()=>{
            
//         const fetchData = async () =>{
//             try {
//                 const response = await hostWeb.get(`/order/getCart`);
//                 setRestaurantinfo(response.data.data);
//             } catch (error) {
//                 console.log("error fetching data getRestaurentMenu");
//             }
//         }
//         fetchData();
// },[id]);
    return(
        <div className="RestaurantConatainer">
           <Sidebar/>
           <Menu data={restaurantinfo} addToCart={addToCart} RestaurantInfo={RestaurantInfo[0]} /> 
           <Rightbar CartArray={list} update={update} />
        </div>
    )
// /order/getCart
   

}
export default Restaurant;