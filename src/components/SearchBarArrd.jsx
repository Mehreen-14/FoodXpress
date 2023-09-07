import { useContext, useState } from "react";
import "../css/search.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthProvider";
import hostWeb from "../apis/hostWeb";

export default function SearchBarAddr() {
    const { auth, setAuth } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [data,setData] = useState([]);
  const navigate = useNavigate();

  const setaddr = async (event,adata) => {
    const datat = window.localStorage.getItem('MY_APP_STATE');
        if (datat !== null) setAuth(JSON.parse(datat));
    try {
        const response = await hostWeb.post(`/auth/saveLocation`,{
            x_coord: adata[0],
            y_coord: adata[1]
        }, {
            headers: {
                auth_key: "Bearer " + JSON.parse(datat).auth_token,
            },
        }); 
        navigate(`/home`);           
    } catch (error) {
        console.log("error fetching data myorderdetails");
    }
  }

  const showaddr = (item) => {
    return(
        <div onClick={(event)=> setaddr(event,item.location)}>
             {item.name}
        </div>
    )
  }

  const fetchData = async (e) => {
    e.preventDefault();
        try {
            const response = await axios.get(`https://dev.maps.api.dingi.live/search/all/?token=${search}`,{
                headers: {
                  "x-api-key": "f335c582-5854-4ea0-9b69-75e65774a4ea",
                },
              });
              setData(response.data.result);
            
        } catch (error) {
            console.log("error fetching data getRestaurentList");
        }
        console.log(data);
    
  }


  return (
    <div className="rounded searchContainer">
      <form action="" onSubmit={fetchData}>
        <input type="text" id="home-search-box" onChange={(e) => setSearch(e.target.value)} class="searchBox form-control" placeholder="Search..." name="" />
        <div>
            {data.map(showaddr)}
        </div>
      </form>
    </div>
  );
}