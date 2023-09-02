import "./card.scss"
import { useEffect, useState } from "react";
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function SystemDetail(props) {
    const [planets,setPlanets] = useState([])

    async function loadPlanets() {
        const response = await fetch(`http://localhost:8100/api/system_planets/Solar System/`);
        console.log(response)

        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setPlanets(data.system_planets)
    }
  }


    useEffect(() => {
        loadPlanets();
    }, []);

    const handleDelete = async (planetName) => {
      const planetUrl = `http://localhost:8100/api/planet_detail/${planetName}/`
      const fetchConfig = {
          method: "DELETE",
      }
      const response = await fetch(planetUrl, fetchConfig);
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
              //   <Card style={{ width: '18rem' }}>
              //   <Card.Img variant="top" src={planet.image} style={{ height: 200 }}  />
              //   <Card.Body>
              //     <Card.Title>{planet.name}</Card.Title>
              //     <Card.Text>
              //       {planet.description}
              //     </Card.Text>
              //     <Card.Text>Mass: {planet.mass}</Card.Text>
              //      <Card.Text>Temperature: {planet.temperature}</Card.Text>
              //       <Card.Text>Discovered By: {planet.discovered_by}</Card.Text>
              //       <Card.Text>System: {planet.system.name}</Card.Text>
              //     <Button className="card-button" onClick={() => handleDelete(planet.name)}>Delete Planet</Button>
              //   </Card.Body>
              // </Card>
              <h1>{planet.name}</h1>
                );
              
    })}
    </div>
          </>
    )
    }
    
    export default SystemDetail
