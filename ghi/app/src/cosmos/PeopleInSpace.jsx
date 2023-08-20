import { useState, useEffect } from "react";
import React from "react";
import "./card.scss"

function PeopleSearch() {

    const [people,setPeople] = useState([])
    const [total,setTotal] = useState(0)

    const handleSubmit = async (event) => {
  
      const response = await fetch(`http://api.open-notify.org/astros.json`);
      if (response.ok) {
        const data = await response.json();
        setPeople(data.people)
        setTotal(data.number)
        console.log(data)
  }
    
  }
  useEffect(() => {
    handleSubmit();
  }, []);
  
        return (
          <>
            <h1 style={{display:"flex", justifyContent:"center", color:"white", margin:"0px 0px 25px 0px"}}>There Are {total} People In Space Right now</h1>
            
            <div className="f-container" style={{color:"white"}}>
              {people.map(person  => {
                return (
                    <>
                    <div className="card people">
                    <h2>Name: {person.name}</h2>
                    <h2>Craft:{person.craft}</h2>
                    </div>
                 </>
                  );
      })}
      </div>
          </>
       )}
      
    export default PeopleSearch
