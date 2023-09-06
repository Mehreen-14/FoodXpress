import React from "react"
import "../css/menu.css"
import Food from "./Food";

function navitemlist(items) {
      return (<a href={"#"+items.category.replace(/ /g, '')} className="navitem">
            
            {items.category}
      </a>
      )
}
function foodinCategory(items) {
      return (
            <Food data={items} />
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

function Menu(props) {
      return (<div className="menu">
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