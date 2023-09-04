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
import PlanetSearch from "./cosmos/SearchPlanets";
import NinjaSearch from "./cosmos/SearchNinja";
import PeopleSearch from "./cosmos/PeopleInSpace";
import { NavLink, Link } from "react-router-dom";
import Picture from "./cosmos/NasaPOTD";
import SystemDetail from "./cosmos/systemDetail";
import { useEffect, useState } from "react";
import React from "react";
import Footer from "./cosmos/Footer";


function App() {
  // converted TS to JS for mouse trail

  const [system, setSystem] = useState("");

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
    <Link className="nav-link" to="/"> <h1 id="main-title">Cosmos</h1></Link>
    </BrowserRouter>

    <BrowserRouter>
    <NavBar className="main-navbar"/>
    <Routes>
    <Route path="/editsystem" element={<EditSystem/>}/>
      <Route path="/createsystem" element={<CreateSystem/>}/>
      <Route path="/createPlanet" element={<CreatePlanet/>}/> 
      <Route path="/" element={<MainPage/>}/>
      <Route path="/planetList" element={<PlanetList/>}/>
      <Route path="/systemList"  element={<SystemList setSystem = {setSystem}/>} />
      <Route path="/editPlanet" element={<EditPlanet/>}/>
      <Route path="/planetSearch" element={<PlanetSearch/>}/>
      <Route path="/ninjaSearch" element={<NinjaSearch/>}/>
      <Route path="/dailyPicture" element={<Picture/>}/>
      <Route path="/peopleInSpace" element={<PeopleSearch/>}/>
      <Route path="/systemDetail" element={<SystemDetail system = {system}/>} />
      
      </Routes>
      <Footer/>

    </BrowserRouter>

    </div>
    </div>

    </>
  );
}

export default App;
