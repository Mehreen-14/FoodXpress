const RestList = {
  "success": true,
  "data": [
    {
      "restaurant_id": 1,
      "restaurant_name": "Chillox",
      "address": "Lalbagh",
      "restaurant_image": null
    },
    {
      "restaurant_id": 2,
      "restaurant_name": "Pizza King",
      "address": "17 Lalbagh Rd, Dhaka 1211",
      "restaurant_image": null
    },
    {
      "restaurant_id": 4,
      "restaurant_name": "Waffle Time",
      "address": "13, 6 Salimullah Road, Dhaka 1207",
      "restaurant_image": null
    },
    {
      "restaurant_id": 3,
      "restaurant_name": "The Munch Station",
      "address": "25/3, Block C, Tajmahal Road, Mohammadpur, Dhaka 1207",
      "restaurant_image": null
    }
  ]
}

const Cartinfo=
{
  "success": true,
  "data": [
    {
      "item_id": 12,
      "item_name": "Smokey BBQ Chicken Cheese Burger",
      "image": null,
      "amount": 2,
      "price": 250,
      "total_price": 500,
      "restaurant_name": "Chillox",
      "restaurant_id": 1
    },
    {
      "item_id": 1,
      "item_name": "Nutella Chocolate Waffle",
      "image": null,
      "amount": 2,
      "price": 150,
      "total_price": 300,
      "restaurant_name": "Waffle Time",
      "restaurant_id": 4
    },
    {
      "item_id": 2,
      "item_name": "Nutshell Banana Waffle",
      "image": null,
      "amount": 3,
      "price": 160,
      "total_price": 480,
      "restaurant_name": "Waffle Time",
      "restaurant_id": 4
    }
  ],
  "total_price": 1280
};
const Restaurantinfo=
{
  "success": true,
  "data": [
    {
      "category": "Beef Burger",
      "items": [
        {
          "item_id": 16,
          "item_name": "Beef Burger",
          "available": true,
          "price": 200,
          "preparation_time": 30,
          "item_description": "1:1 - Prepared with beef patty & special sauce",
          "restaurant_id": 1,
          "image": null
        },
        {
          "item_id": 17,
          "item_name": "Beef Cheese Burger",
          "available": true,
          "price": 230,
          "preparation_time": 30,
          "item_description": "1:1 - Prepared with beef patty, cheese & special sauce",
          "restaurant_id": 1,
          "image": null
        },
        {
          "item_id": 18,
          "item_name": "Smokey BBQ Beef Cheese Burger",
          "available": true,
          "price": 250,
          "preparation_time": 30,
          "item_description": "1:1 - Prepared with beef patty, bbq sauce & cheese",
          "restaurant_id": 1,
          "image": null
        },
        {
          "item_id": 19,
          "item_name": "Beef Cheese Blast",
          "available": true,
          "price": 250,
          "preparation_time": 30,
          "item_description": "1:1 - Prepared with 2 pcs melted cheese inside a double beef patty & cheese outside",
          "restaurant_id": 1,
          "image": null
        },
        {
          "item_id": 20,
          "item_name": "Giganto Beef Burger",
          "available": true,
          "price": 350,
          "preparation_time": 30,
          "item_description": "1:1 - Prepared with giant beef patty, 2 pcs cheese, 2 pcs beef bacon & bbq sauce",
          "restaurant_id": 1,
          "image": null
        }
      ]
    },
    {
      "category": "Chicken Burger",
      "items": [
        {
          "item_id": 11,
          "item_name": "Chicken Cheese Burger",
          "available": true,
          "price": 230,
          "preparation_time": 30,
          "item_description": "1:1 - Prepared with chicken patty, cheese & special sauce",
          "restaurant_id": 1,
          "image": null
        },
        {
          "item_id": 12,
          "item_name": "Smokey BBQ Chicken Cheese Burger",
          "available": true,
          "price": 250,
          "preparation_time": 30,
          "item_description": "1:1 - Prepared with chicken patty, bbq sauce & cheese",
          "restaurant_id": 1,
          "image": null
        },
        {
          "item_id": 13,
          "item_name": "Chicken Sausage Burger",
          "available": true,
          "price": 230,
          "preparation_time": 30,
          "item_description": "1:1 - Prepared with chicken patty, 2 pcs chicken sausage & cheese",
          "restaurant_id": 1,
          "image": null
        },
        {
          "item_id": 14,
          "item_name": "Chicken Signature Burger",
          "available": true,
          "price": 330,
          "preparation_time": 40,
          "item_description": "1:1 - Prepared with 2 pcs chicken patty, 2 pcs cheese, chicken pastrami & poached egg",
          "restaurant_id": 1,
          "image": null
        },
        {
          "item_id": 15,
          "item_name": "Double Decker Chicken Burger",
          "available": true,
          "price": 300,
          "preparation_time": 40,
          "item_description": "1:1 - Prepared with 2 pcs chicken patty & 2 pcs cheese",
          "restaurant_id": 1,
          "image": null
        }
      ]
    },
    {
      "category": "Sides",
      "items": [
        {
          "item_id": 21,
          "item_name": "French Fries",
          "available": true,
          "price": 90,
          "preparation_time": 30,
          "item_description": "Finely cut deep fried potatoes",
          "restaurant_id": 1,
          "image": null
        },
        {
          "item_id": 22,
          "item_name": "Naga Drums",
          "available": true,
          "price": 120,
          "preparation_time": 30,
          "item_description": "Crispy fried chicken drums with the right amount of spice",
          "restaurant_id": 1,
          "image": null
        }
      ]
    }
  ]
}
;

const myorder=[
{
  "order_id": 32,
  "order_status": "running",
  "total": "510",
  "start_time": null,
  "end_time": null,
  "delivery_fee": "30",
  "items": [
    {
      "item_id": 12,
      "item_name": "Smokey BBQ Chicken Cheese Burger",
      "amount": 1,
      "price": 250,
      "item_total_price": 250,
      "restaurant_name": "Chillox"
    },
    {
      "item_id": 13,
      "item_name": "Chicken Sausage Burger",
      "amount": 1,
      "price": 230,
      "item_total_price": 230,
      "restaurant_name": "Chillox"
    }
  ]
},
]

const hehe = {
  "RestList" : RestList,
  "Cartinfo" : Cartinfo,
  "Restaurantinfo" : Restaurantinfo,
  "myorder" :myorder
}

export default hehe;

