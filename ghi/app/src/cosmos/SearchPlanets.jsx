import { useEffect, useState } from "react";
import { Search } from 'react-bootstrap-icons';
import "./card.scss"
import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import "./searchcard.scss"



function PlanetSearch(e) {

  
    const [planetName,setPlanetName] = useState('')
    const [planet,setPlanet] = useState('')

    const [planets,setPlanets] = useState([])



    

    const handlePlanetNameChange = (event) => {
        const value = event.target.value;
        setPlanetName(value)
      }



  const handleSubmit = async (event) => {
    // event.preventDefault();



    console.log(planetName)
    const response = await fetch(`http://localhost:8100/api/planet_detail/${planetName}/`);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      setPlanet(data)
}
  
    
}
useEffect(() => {
  handleSubmit();
}, []);
  if (planet.length ===0)
      return (
        <> 
    <div class="search-box">
        <button onClick={handleSubmit}  value={planetName} name={planetName} class="btn-search"><Search/></button>
        <input type="text" onChange={handlePlanetNameChange} class="input-search" placeholder="Type to Search..."/>
    </div>
    </>
    )
      else{
    return(
      <>
          <div class="search-box">
        <button onClick={handleSubmit}  value={planetName} name={planetName} class="btn-search"><Search/></button>
        <input type="text" onChange={handlePlanetNameChange} class="input-search" placeholder="Type to Search..."/>
    </div>
      <div className="display-planet-info">
      <div class="product-details">
      <h1> Planet Name: {planet.name}</h1>
      <hr style={{width:300}}></hr>
    
        <p class="information">Light years away: {Math.trunc(planet.distance)}</p>
        <p class="information">Planet Mass: {planet.mass}</p>
        <p class="information">Planet Temperature: {planet.temperature}</p>
        <p class="information">Discovered By: {planet.discovered_by}</p>
    </div>
    <div class="product-image">
      <img src={planet.image} alt=""/>
      
    <div class="info">
      <h2>{planet.description}</h2>
    </div>
    </div>
    </div>
    </>
      )}
      }
    
      
    export default PlanetSearch
