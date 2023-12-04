import { useState } from "react";
import { Search } from 'react-bootstrap-icons';
import React from "react";
import "./searchcard.scss"

import two from "./planetImages/2.jpg"
import three from "./planetImages/3.jpg"
import four from "./planetImages/4.png"
import six from "./planetImages/6.jpg"
import seven from "./planetImages/7.jpg"


const planetImages = [
two,three,four,six,seven
]

function NinjaSearch() {
    // generates a random number and stores it in a piece of state
    // that number is used to pick a planet image at random each time a request is made

  const randomNumber = Math.floor(Math.random() * planetImages.length)

    const [planetName,setPlanetName] = useState('')
    const [planets,setPlanets] = useState([])
    const [random,setRandom] = useState(0)

      // records the planet thats typed in to send to ninjas api
    const handlePlanetNameChange = (event) => {
        const value = event.target.value;
        setPlanetName(value)
      }


  const handleSubmit = async () => {
    setRandom(randomNumber)

    const settings = {
        method: 'GET',
        headers: { 'X-Api-Key': 'LUzifa1Hcd3nt987OZgdkA==8nL9HBP8W1PZUT84'},
        
    };

    // sends a call the the api using the planetName that was typed in
    const asyncGetCall = async () => {
        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/planets?name=${planetName}`, settings);
             const data = await response.json();

             if (response.ok){
              setPlanets(data)
             }

           } catch(error) {
              console.log(error)
             } 
        }
      asyncGetCall()
     }
      return (
        <>
        
    <div class="search-box">
        <button onClick={handleSubmit}  value={planetName} name={planetName} class="btn-search"><Search/></button>
        <input type="text" onChange={handlePlanetNameChange} class="input-search" placeholder="Type to Search..."/>
    </div>

{planets.map(planet  => {
  if (planets.length ===1){
    return (
      <>
      <div className="display-planet-info">
      	<div class="product-details">
		
	<h1> Planet Name: {planet.name}</h1>
  <hr style={{width:300}}></hr>
	
		<p class="information">Light years away: {Math.trunc(planet.distance_light_year)}</p>
    <p class="information">Planet Mass: {planet.mass}</p>
    <p class="information">Planet Temperature: {Math.floor(((planet.temperature - 273.15) * 9/5 + 32))}°f</p>
    <p class="information">Days in year: {Math.trunc(planet.period)}</p>
</div>
<div class="product-image">
	<img src={planetImages[random]} alt="Planet Img"/>
	
<div class="info">
</div>
</div>
</div>
      </>
      );
  }
  else{
  }       
    })}
            </>
      )
      }
      
    export default NinjaSearch
