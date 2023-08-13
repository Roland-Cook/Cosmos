import { useEffect, useState } from "react";
import { Search } from 'react-bootstrap-icons';
import "./card.scss"
import React, { Component } from "react";
import Card from 'react-bootstrap/Card';





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


      return (
        <> 
    <div class="search-box">
        <button onClick={handleSubmit}  value={planetName} name={planetName} class="btn-search"><Search/></button>
        <input type="text" onChange={handlePlanetNameChange} class="input-search" placeholder="Type to Search..."/>
    </div>

        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={planet.image} style={{ height: 200 }}  />
                <Card.Body>
                  <Card.Title>{planet.name}</Card.Title>
                  <Card.Text>
                    {planet.description}
                  </Card.Text>
                  <Card.Text>Mass: {planet.mass}</Card.Text>
                   <Card.Text>Temperature: {planet.temperature}</Card.Text>
                    <Card.Text>Discovered By: {planet.discovered_by}</Card.Text>
                    <Card.Text>Light Years Away: {planet.discovered_by}</Card.Text>
                </Card.Body>
              </Card>

            </>
      )
      }
      
    export default PlanetSearch
