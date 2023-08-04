import { useEffect, useState } from "react";

function SystemList() {

    const [systems,setSystems] = useState([])



    async function loadSystems() {
        const response = await fetch('http://localhost:8100/planets/systems_list/');


        if (response.ok) {
          const data = await response.json();
          setSystems(data.systems)
          console.log(data)
    }
  }


    useEffect(() => {
        loadSystems();
    }, []);



    return (
      <>
          <h1>Systems</h1>
          <table className='table table-dark table-striped table-hover'>
            <thead>
              <tr>
                <th>System Name</th>

              </tr>
            </thead>
            <tbody>
            {systems.map(system  => {
              return (
                <>
                  <tr>
                    <td>{system.name}</td>
                    </tr>
                  
  
                </>
                );
    })}
            </tbody>
          </table>
          </>
    )
    }
    
    export default SystemList
