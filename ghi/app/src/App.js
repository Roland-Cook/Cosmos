
import PlanetList from "./cosmos/PlanetList";
import SystemList from "./cosmos/SystemList";
import MainPage from "./MainPage";
import NavBar from "./Nav";
import CreatePlanet from "./cosmos/CreatePlanet";
import EditPlanet from "./cosmos/EditPlanet"
import "./Style.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="container"> 
    <h1 id="main-title">Cosmos</h1>
    <BrowserRouter>
    <NavBar className="main-navbar"/>
    <Routes>
      <Route path="/createPlanet" element={<CreatePlanet/>}/> 
      <Route path="/" element={<MainPage/>}/>
      <Route path="/planetList" element={<PlanetList/>}/>
      <Route path="/systemList" element={<SystemList/>}/>
      <Route path="/editPlanet" element={<EditPlanet/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
