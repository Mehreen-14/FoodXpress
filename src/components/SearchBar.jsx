import { useState } from "react";
import "../css/search.css"
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [search,setSearch] = useState("");
  const navigate = useNavigate();
  const fetchData =  (e) => {
    e.preventDefault();
      navigate(`/search/${search}`);
  }
  return (
      <div class="rounded searchContainer">
                <input type="text" onChange={(e) => setSearch(e.target.value)} class="searchBox form-control rounded" placeholder="Search..." name=""/> 
                <span class="input-group-text border-0" id="search-addon" onClick={fetchData}>
                  <i class="fas fa-search"></i>
                </span>
      </div>
  );
}