import "./card.css"

import { useEffect, useState } from "react";
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PlanetList() {

    const [planets,setPlanets] = useState([])



    async function loadPlanets() {
        const response = await fetch('http://localhost:8100/api/planets_list/');
        console.log(response)

        if (response.ok) {
          const data = await response.json();
          setPlanets(data.planets)
          console.log(data)
    }
  }


    useEffect(() => {
        loadPlanets();
    }, [planets]);


    const handleDelete = async (planetName) => {
      const hatUrl = `http://localhost:8100/api/planet_detail/${planetName}/`
      console.log(hatUrl, planetName)
      const fetchConfig = {
          method: "DELETE",
      }
      const response = await fetch(hatUrl, fetchConfig);
      if (response.ok) {
      } else {
          console.error('Failed to delete')
      }
  }

    return (
      <>
          <div className="f-container">
            {planets.map(planet  => {
              return (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={planet.image} />
                <Card.Body>
                  <Card.Title>{planet.name}</Card.Title>
                  <Card.Text>
                    
                    {planet.description}
                  </Card.Text>
                  <Button onClick={() => handleDelete(planet.name)}>Delete Planet</Button>
                </Card.Body>
              </Card>
                );
              
    })}
    </div>
          </>
    )
    }
    
    export default PlanetList
