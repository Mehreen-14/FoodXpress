import React from 'react'
import Sidebar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import { useParams } from 'react-router-dom';
import SearchList from '../components/SearchList';

const Search = () => {
  const params = useParams();
  return (
    <div>
      <Sidebar/>
      <SearchBar />
      <SearchList searchBy={params.param} />
    </div>
  )
}

export default Search
