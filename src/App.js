import React from "react";
import {BrowserRouter as Router,Routes ,Route} from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import Welcome from "./components/welcompage.jsx";
import Home from "./routes/Home.jsx";
import Restaurant from "./routes/Restaurant.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import Search from "./routes/Search.jsx"
import RestaurantHome from "./routes/RestaurantHome.jsx";
import Checkout from "./routes/Checkout.jsx";
import OrderProgress from "./routes/OrderProgress.jsx";
import Myorders from "./routes/Myorders.jsx";
import MyOrderDetails from "./routes/MyOrderDetails.jsx";
import SetAddr from "./routes/SetAddr.jsx";
function App() {
    const [signIn, toggle] = React.useState(true);
     return(
        <GlobalContextProvider>
            <AuthProvider>
                <Router>
                    <Routes >
                        <Route exact path="/" Component={Welcome}/>
                        <Route exact path="/home" Component={Home}/>
                        <Route exact path="/restaurant/:id" Component={Restaurant}/>
                        <Route exact path="/search/:param" Component={Search}/>
                        <Route exact path="/restauranthome/:id" Component={RestaurantHome}/>
                        <Route exact path="/Checkout" Component={Checkout}/>
                        <Route exact path="/OrderProgress" Component={OrderProgress}/>
                        <Route exact path="/Myorders" Component={Myorders}/>
                        <Route exact path="/MyorderDetails/:orderid" Component={MyOrderDetails}/>
                        <Route exact path="/SetAddr" Component={SetAddr}/>

                    </Routes >
                </Router>
            </AuthProvider>
        </GlobalContextProvider>
     )
}

export default App;