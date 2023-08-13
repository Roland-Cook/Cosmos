import PlanetList from "./cosmos/PlanetList";
import SystemList from "./cosmos/SystemList";
import MainPage from "./MainPage";
import NavBar from "./Nav";
import CreatePlanet from "./cosmos/CreatePlanet";
import EditPlanet from "./cosmos/EditPlanet"
import "./Style.css"
import "./scss/style.scss"
import CreateSystem from "./cosmos/CreateSystem";
import EditSystem from "./cosmos/EditSystem";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import SystemsPlanets from "./cosmos/SystemsPlanetsList";
import PlanetSearch from "./cosmos/SearchPlanets";
import NinjaSearch from "./cosmos/SearchNinja";
import { NavLink } from "react-router-dom";
function App() {
  // converted TS to JS for mouse trail

  return (
    <>
  <MouseTrail strokeColor={"white"}></MouseTrail>
  <div class="stars">
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
</div>

    <div className="App">
    <div className="container "> 
    <BrowserRouter>
    <NavLink className="nav-link" to="/"> <h1 id="main-title">Cosmos</h1></NavLink>
    </BrowserRouter>

    <BrowserRouter>
    <NavBar className="main-navbar"/>
    <Routes>
    <Route path="/editsystem" element={<EditSystem/>}/>
      <Route path="/createsystem" element={<CreateSystem/>}/>
      <Route path="/createPlanet" element={<CreatePlanet/>}/> 
      <Route path="/" element={<MainPage/>}/>
      <Route path="/planetList" element={<PlanetList/>}/>
      <Route path="/systemList" element={<SystemList/>}/>
      <Route path="/editPlanet" element={<EditPlanet/>}/>
      <Route path="/systemsPlanets/<:name>" element={<SystemsPlanets/>}/>
      <Route path="/planetSearch" element={<PlanetSearch/>}/>
      <Route path="/ninjaSearch" element={<NinjaSearch/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </div>
    </>
  );
}

export default App;
