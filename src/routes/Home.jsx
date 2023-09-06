import React from 'react'
import Sidebar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import RestaurantList from '../components/RestaurantList'
import { useLocation } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Sidebar/>
      <SearchBar/>
      <RestaurantList /> 
    </div>
  )
}

export default Home
