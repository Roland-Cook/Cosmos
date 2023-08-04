import { useEffect, useState } from "react";

function PlanetList() {

    const [planets,setPlanets] = useState([])



    async function loadPlanets() {
        const response = await fetch('http://localhost:8100/planets/planets_list/');


        if (response.ok) {
          const data = await response.json();
          setPlanets(data.planets)
          console.log(data)
    }
  }


    useEffect(() => {
        loadPlanets();
    }, []);



    return (
      <>
          <h1>Planets</h1>
          <table className='table table-dark table-striped table-hover'>
            <thead>
              <tr>
                <th>Planet Name</th>

              </tr>
            </thead>
            <tbody>
            {planets.map(planet  => {
              return (
                <>
                  <tr>
                    <td>{planet.name}</td>
                    </tr>
                  
  
                </>
                );
    })}
            </tbody>
          </table>
          </>
    )
    }
    
    export default PlanetList
