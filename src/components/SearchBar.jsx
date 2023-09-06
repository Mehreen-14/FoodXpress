import { useState } from "react";
import "../css/search.css"
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const fetchData = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  }


  return (
    <div class="rounded searchContainer">
      <form action="" onSubmit={fetchData}>
        <input type="text" id="home-search-box" onChange={(e) => setSearch(e.target.value)} class="searchBox form-control" placeholder="Search..." name="" />
        {/* <span class="input-group-text border-0" id="search-addon" onClick={fetchData}>
          <i class="fas fa-search" style={{position:"absolute"}}></i>
        </span> */}
      </form>
    </div>
  );
}