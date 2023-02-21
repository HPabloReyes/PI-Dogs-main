import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Perros from "./components/Navbar/Perros/Perros.js";
import Home from "./components/Navbar/Home/Home";
import Create from "./components/Navbar/Create/Create";
import Details from "./components/Navbar/Details/Details";
import Landing from "./components/Navbar/Landing/Landing";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path={"/"} component={Landing} />
      <Route exact path={"/home"} component={Home} />
      <Route path={"/details/:id"} component={Details} />
      <Route path={"/create"} component={Create} />
      <Route path={"/perros"} component={Perros} />
    </div>
  );
}

export default App;
