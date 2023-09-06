import React, { useContext, useState } from 'react'
import '../css/ordercard.css'
import AuthContext from '../context/AuthProvider';
import hostWeb from '../apis/hostWeb';


const OrderCard = (props) => {
    const {auth, setAuth} = useContext(AuthContext);
    const [data,setData] = useState({});
    console.log("in order card");
    console.log(props.data);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const fetch_item_data = (items)=>{
        return(
            <div>
                {items.amount}x {items.item_name}
            </div>
        )
    }
    
    const fetch_button = ()=>{
        let mystyle = "btn btn-primary mybutton";
        let button_cap = "Complete";
        if(props.data.max == "completed"){
            mystyle = "btn btn-primary mybutton";
            button_cap = "Completed";
        }
        return(
            <div id='helloworld' className={mystyle} >{button_cap}</div>
        )
    }
    const completecooking = async ()=>{
        if (!isButtonClicked) {
            setIsButtonClicked(true);
            document.getElementById('helloworld').innerHTML = "Completed";
            const datat = window.localStorage.getItem('MY_APP_STATE');
            if ( datat !== null ) setAuth(JSON.parse(datat));
            try {
                const response = await hostWeb.post(`/order/handleOrder`,{"order_id":props.data.order_id},{
                    headers:{
                        auth_key:"Bearer "+JSON.parse(datat).auth_token,
                    }
                });
                console.log(response.adta);
                setData(response.data);
            } catch (error) {
                console.log("error fetching data testHome");
            }
          }
        
    }
    return (
            <div className="ordercard" >
                <div className="ordercard-slot">
                    <p className="ordercard-number">Order#{props.data.order_id}</p>
                    <div className="oredercard-container d-flex justify-content-around">
                        <div className="orderlist">
                            {props.data.items.map(fetch_item_data)}
                        </div>
                        <div onClick={completecooking} className={`cooking-button-status ${isButtonClicked ? 'disabled' : ''}`}>
                        {fetch_button()}
                        </div>
                        
                    </div>
                    
                    
                </div>
                
            </div>
    )
}

export default OrderCard
