import { useEffect, useState } from "react";
import { Search } from 'react-bootstrap-icons';
import "./card.scss"
import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

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
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={six} style={{ height: 200 }}  />
      <Card.Body>
        <Card.Title>{planet.name}</Card.Title>
        <Card.Text>
          Light years away from us: {planet.distance_light_year}
        </Card.Text>
        <Card.Text>Mass: {planet.mass}</Card.Text>
        <Card.Text>Temperature: {planet.temperature}</Card.Text>
      </Card.Body>
    </Card>
      );
  }
  else{
    
  }       
    })}


            </>
      )
      }
      
    export default NinjaSearch
