import React, { useEffect, useState , useContext } from 'react'
import hostWeb from '../apis/hostWeb';
import { AuthContext } from '../context/AuthProvider';


const Test = () => {
    const {auth, setAuth} = useContext(AuthContext);
    const [data,setData] = useState({});
    useEffect(()=>{
        const datat = window.localStorage.getItem('MY_APP_STATE');
        if ( datat !== null ) setAuth(JSON.parse(datat));
        const fetchData = async () =>{
            try {
                const response = await hostWeb.get(`/auth/test`,{
                    headers:{
                        auth_key:"Bearer "+JSON.parse(datat).auth_token,
                    },
                });
                setData(response.data);
            } catch (error) {
                console.log("error fetching data testHome");
            }
        }
        fetchData();
    },[]);
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default Test
