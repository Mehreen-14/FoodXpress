import axios from "axios"


export default axios.create({
    baseURL: "http://localhost:8080/"
    //baseURL: "https://food-express-fuws.onrender.com/"
})