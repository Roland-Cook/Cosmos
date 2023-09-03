import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./card.scss"
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SystemList(props) {

      const [systems,setSystems] = useState([])
  
      async function loadPlanets() {
          const response = await fetch('http://localhost:8100/api/systems_list/');
            
          if (response.ok) {
            const data = await response.json();
            setSystems(data.systems)
      }
    }
  
      useEffect(() => {
          loadPlanets();
      }, []);



      async function handleClick(systemId) {
        props.setSystem(systemId)
      }

      const handleDelete = async (systemName) => {
        const planetUrl = `http://localhost:8100/api/system_detail/${systemName}/`
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
              {systems.map(system  => {
                return (
                  <Card style={{ width: '18rem' }}>
                  <Link to="/systemDetail">  <Card.Img variant="top" src={system.image} onClick={() => handleClick(system.name)} style={{ height: 200 }}   /> </Link>
                  
                  <Card.Body>
                    
                    <Card.Title>{system.name}</Card.Title>
                    <Card.Text>
                      {system.description}
                    </Card.Text>
                    <Button className="card-button" onClick={() => handleDelete(system.name)}>Delete System</Button>
                  </Card.Body>
                </Card>
                  );
      })}
      </div>
            </>
      )
      }
      
    export default SystemList
