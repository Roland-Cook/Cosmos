import React, {useState, useEffect} from "react";


function CreatePlanet () {

const [name, setName] = useState('');
const [mass, setMass] = useState('');
const [temperature,setTemperature] = useState('')
const [distance,setDistance] = useState('')
const [description,setDescription] = useState('')
const [image, setImage] = useState('');
const [discovered,setDiscovered] = useState('');
const [systems,setSystems] = useState([]);
const [system,setSystem] = useState('');


  // Functions to update the state as the user is inputting information
const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  }

  const handleMassChange = (event) => {
    const value = event.target.value;
    setMass(value);
  }

  const handleTemperatureChange = (event) => {
    const value = event.target.value;
    setTemperature(value);
  }
  const handleDistanceChange = (event) => {
    const value = event.target.value;
    setDistance(value);
  }

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  }

  const handleImageChange = (event) => {
    const value = event.target.value;
    setImage(value);
  }

  
  const handleSystemChange = (event) => {
    const value = event.target.value;
    setSystem(value);
  }

  const handleDiscoverChange = (event) => {
    const value = event.target.value;
    setDiscovered(value);
  }


    // sends a post request with the data recorded in the functions above 
const handleSubmit = async (event) => {
    event.preventDefault();
   
    // create an empty JSON object
    const data = {};
    data.name = name.toLowerCase();
    data.mass = mass
    data.temperature = temperature
    data.distance = distance
    data.image = image
    data.discovered_by = discovered
    data.system = system
    data.description = description

    const Url = `http://localhost:8100/api/planets_list/`;
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(Url, fetchConfig);
      // if the response goes through ok reset all the fields to an empty string
    if (response.ok) {
      setName('');
      setMass('')
      setTemperature('')
      setDiscovered('')
      setDistance('')
      setImage('')
      setDiscovered('')
      setSystem('')
      setDescription('')
    }
  }


const fetchData = async () => {
    const url = 'http://localhost:8100/api/systems_list/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      // Takes the data from the above call and puts it into a piece of state
      setSystems(data.systems)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


return (
  <>
    <div className="row">
    <div className="offset-3 col-6">
      
    <div className="form-planet">        
        <h1 style={{color:"white"}}>Create a Planet</h1>
        <form onSubmit={handleSubmit} id="planet-form">
          <div className="form-floating mb-3">
            <input onChange={handleNameChange} value={name} placeholder="Planet Name"  name={name} className="form-control"/>
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleMassChange} value={mass} placeholder="mass" name={mass} className="form-control"/>
            <label htmlFor="mass">Mass</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleTemperatureChange} value={temperature} placeholder="temperature" name={temperature}  className="form-control"/>
            <label >Temperature</label>
          </div>
          <div className="form-floating mb-3">
            <input  onChange={handleDistanceChange} value={distance} placeholder="distance" name={distance}  className="form-control"/>
            <label>Distance</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleDiscoverChange} value={discovered} placeholder="Discovered BY" required name={discovered} className="form-control"/>
            <label htmlFor="Discovered BY">Discovered By </label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleImageChange} type="url" value={image} placeholder="Image URL" required name={image}  className="form-control"/>
            <label htmlFor="Image URL">Image URL </label>

</div>
          <div className="form-floating mb-3">
            <textarea onChange={handleDescriptionChange}  value={description} placeholder="Description of planet..." name={description} id="" className="form-control"/>
            <label>Description </label>
    
          </div>

          <div className="mb-3">
            <select onChange={handleSystemChange} name={system} value={system} className="form-select">
            <option >Choose a System</option>
                {systems.map(system => {
                  return (
                    <option key={system.name} value={system.name}>
                      {system.name}
                    </option>
                  );
                })}
                </select>
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  </div>
  </>
);
};

export default CreatePlanet
