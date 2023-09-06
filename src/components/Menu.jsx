import React from "react"
import "../css/menu.css"
import Food from "./Food";
import {LocationOn} from '@mui/icons-material';

function Menu(props) {


      function notifyCart(item)
      {
            item.amount=1;
            item.restaurant_name=props.restaurant_name;
            props.addToCart(item);
      }
      function navitemlist(items) {
            return (<a href={"#"+items.category.replace(/ /g, '')} className="navitem">
                  
                  {items.category}
            </a>
            )
      }
      function foodinCategory(items) {
            
            return (
                  <Food data={items} notifyCart={notifyCart}/>
            )
      }
      function categorylist(items) {
            return (
                  <section id={items.category.replace(/ /g, '')} className="foodshow">
                        <div className="category">
                              {items.category}
                        </div>
                        <div className="foodshow">
                              {items.items.map(foodinCategory)}
                        </div>
      
                  </section>
            )
      }
     console.log("laaaala");
     console.log(props.RestaurantInfo);
     
      return (<div className="menu">
            <div className="Restaurantdesign">
               <div className="RestaurantName">
                {props.restaurant_data.restaurant_name}
               </div>
               <div className="RestaurantLocation">
               <LocationOn/> {props.restaurant_data.address}
               </div>
            </div>
            <div className="scrollitem">
                  <div className="navfood">
                        {props.data.map(navitemlist)}
                  </div>
                  <hr className="navhr"/>
            </div>

            <div className="categorylist">
                  {props.data.map(categorylist)}
            </div>
      </div>)
}

export default Menu;