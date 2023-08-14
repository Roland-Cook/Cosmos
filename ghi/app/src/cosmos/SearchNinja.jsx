import { useEffect, useState } from "react";
import { Search } from 'react-bootstrap-icons';
import React, { Component } from "react";
import "./searchcard.scss"
import six from "./planetImages/6.jpg"


function NinjaSearch(e) {

  
    const [planetName,setPlanetName] = useState('')
    const [planets,setPlanets] = useState([])



    

    const handlePlanetNameChange = (event) => {
        const value = event.target.value;
        setPlanetName(value)
      }



  const handleSubmit = async (event) => {
    // event.preventDefault();

    const settings = {
        method: 'GET',
        headers: { 'X-Api-Key': 'LUzifa1Hcd3nt987OZgdkA==8nL9HBP8W1PZUT84'},
        
    };

    console.log(planetName)


    const asyncGetCall = async () => {
        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/planets?name=${planetName}`, settings);
             const data = await response.json();
            // enter you logic when the fetch is successful
             console.log(data);
             if (response.ok){
              setPlanets(data)
             }
           } catch(error) {
        // enter your logic for when there is an error (ex. error toast)
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
    <p class="information">Planet Temperature: {planet.temperature}</p>
    <p class="information">Days in year: {Math.trunc(planet.period)}</p>
</div>
<div class="product-image">
	<img src={six} alt="Omar Dsoky"/>
	
<div class="info">
	<h2></h2>
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
