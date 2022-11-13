import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/App.css";
import Navigation from "./Navbar"
import Home from "./Home";
import Pagina1 from "./Pagina1"
import Pagina2 from "./Pagina2"
import Pagina3 from "./Pagina3"
import Pagina4 from "./Pagina4"

function App(){
return (

<Router>
  <Navigation/>
  <div className="container p-4">
   <Route path= "/home" component ={Home}/>
   <Route path= "/pagina1" component ={Pagina1}/>
   <Route path= "/pagina2" component ={Pagina2}/>
   <Route path= "/pagina3" component ={Pagina3}/>
   <Route path= "/pagina4" component ={Pagina4}/>
   </div>
</Router>

);


}

export default App;