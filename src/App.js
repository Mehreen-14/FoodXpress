import React from "react";
import {BrowserRouter as Router,Routes ,Route} from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import Welcome from "./components/welcompage.jsx";
import Home from "./routes/Home.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";


function App() {
    const [signIn, toggle] = React.useState(true);
     return(
        <GlobalContextProvider>
            <AuthProvider>
                <Router>
                    <Routes >
                        <Route exact path="/" Component={Welcome}/>
                        <Route exact path="/home" Component={Home}/>
                    </Routes >
                </Router>
            </AuthProvider>
        </GlobalContextProvider>
     )
}

export default App;