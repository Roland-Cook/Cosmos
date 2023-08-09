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


const handleSubmit = async (event) => {
    event.preventDefault();
   
    // create an empty JSON object
    const data = {};
    data.name = name;
    data.mass = mass
    data.temperature = temperature
    data.distance = distance
    data.image = image
    data.discovered_by = discovered
    data.system = system

    const Url = `http://localhost:8100/api/planets_list/`;
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(Url, fetchConfig);

    if (response.ok) {
      setName('');
      setMass('')
      setTemperature('')
      setDiscovered('')
      setDistance('')
      setImage('')
      setDiscovered('')
      setSystem('') 
    }
  }


const fetchData = async () => {
    const url = 'http://localhost:8100/api/systems_list/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setSystems(data.systems)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1 style={{color:"white"}}>Create a Planet</h1>
        <form onSubmit={handleSubmit} id="create-location-form">
          <div className="form-floating mb-3">
            <input onChange={handleNameChange} value={name} placeholder="Planet Name"  name={name} id="automobileVin" className="form-control"/>
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleMassChange} value={mass} placeholder="customer" name={mass} id="customer" className="form-control"/>
            <label htmlFor="manufacturer">Mass</label>
          </div>
          <div className="form-floating mb-3">
            <input  onChange={handleTemperatureChange} value={temperature} placeholder="date" name={temperature} id="datetime" className="form-control"/>
            <label >Temperature</label>
          </div>
          <div className="form-floating mb-3">
            <input  onChange={handleDistanceChange} value={distance} placeholder="date" name={distance} id="time" className="form-control"/>
            <label >Distance</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleDiscoverChange} value={discovered} placeholder="Reason" required name={discovered} id="reason" className="form-control"/>
            <label htmlFor="picture_url">Discovered By </label>
          </div>
          <div className="mb-3">
            <select onChange={handleSystemChange} name={system} value={system} id="technician" className="form-select">
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
);
};

export default CreatePlanet
