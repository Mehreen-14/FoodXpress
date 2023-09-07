import { useState } from "react";
import "../css/search.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SearchBarAddr() {
  const [search, setSearch] = useState("");
  const [data,setData] = useState([]);
  const navigate = useNavigate();
  const showaddr = (item) => {
    return(
        <div>
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