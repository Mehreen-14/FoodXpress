import React from "react"
import "../css/menu.css"
import Food from "./Food";
import {LocationOn} from '@mui/icons-material';
// function navitemlist(items) {
//       return (<a href={"#"+items.category.replace(/ /g, '')} className="navitem">
            
//             {items.category}
//       </a>
//       )
// }
// function foodinCategory(items) {
//       return (
//             <Food data={items} />
//       )
// }
// function categorylist(items) {
//       return (
//             <section id={items.category.replace(/ /g, '')} className="foodshow">
//                   <div className="category">
//                         {items.category}
//                   </div>
//                   <div className="foodshow">
//                         {items.items.map(foodinCategory)}
//                   </div>

//             </section>
//       )
// }

function Menu(props) {
      // return (<div className="menu">
      //       <div className="scrollitem">
      //             <div className="navfood">
      //                   {props.data.map(navitemlist)}
      //             </div>

      //       </div>

      //       <div className="categorylist">
      //             {props.data.map(categorylist)}
      //       </div>
      // </div>)


      function notifyCart(item)
      {
            //item.restaurant_name=props.Restaurantname;
            item.amount=1;
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
//      console.log(props.RestaurantInfo[0]);
//      const temp=props.RestaurantInfo;
     console.log(props.RestaurantInfo);
     
      return (<div className="menu">
              <div className="Restaurantdesign">
               <div className="RestaurantName">
                {/* {props.RestaurantInfo.restaurant_name}   */}
               </div>
               <div className="RestaurantLocation">
               <LocationOn/>
               </div>
              </div>
            <div className="scrollitem">
                  <div className="navfood">
                        {props.data.map(navitemlist)}
                  </div>

            </div>

            <div className="categorylist">
                  {props.data.map(categorylist)}
            </div>
      </div>)
}

export default Menu;