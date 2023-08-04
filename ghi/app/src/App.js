import PlanetList from "./cosmos/PlanetList";
import SystemList from "./cosmos/SystemList";
import MainPage from "./MainPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="container"> 
    <h1>Cosmos</h1>
    <MainPage/>
    <PlanetList/>
    <SystemList/>
    </div>
  );
}

export default App;
