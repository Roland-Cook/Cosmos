import React, {useState, useEffect} from "react";


function EditPlanet () {

const [name, setName] = useState('');
const [newName, setNewName] = useState('');
const [mass, setMass] = useState('');
const [temperature,setTemperature] = useState('')
const [distance,setDistance] = useState('')
const [description,setDescription] = useState('')
const [image, setImage] = useState('');
const [discovered,setDiscovered] = useState('');
const [systems,setSystems] = useState([]);
const [planets,setPlanets] = useState([]);
const [system,setSystem] = useState('');



const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  }

  const handleNewNameChange = (event) => {
    const value = event.target.value;
    setNewName(value);
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
    data.name = newName
    data.mass = mass
    data.temperature = temperature
    data.distance = distance
    data.image = image
    data.description = description
    data.discovered_by = discovered
    data.system = system

    const Url = `http://localhost:8100/api/planet_detail/${name}/`;
    console.log(data)
    const fetchConfig = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(Url, fetchConfig);

    if (response.ok) {
      setName('')
      setNewName('');
      setMass('')
      setTemperature('')
      setDiscovered('')
      setDistance('')
      setImage('')
      setDescription('')
      setSystem('') 
    }
  }


const fetchData = async () => {
    const url = 'http://localhost:8100/api/systems_list/';
    const url2 = 'http://localhost:8100/api/planets_list/';

    const response = await fetch(url);
    const response2 = await fetch(url2);


    if (response.ok) {
      const data = await response.json();
      const data2 = await response2.json();

      setSystems(data.systems)
      setPlanets(data2.planets)
    }
  }



  useEffect(() => {
    fetchData();
  });


return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="form-planet">
        <h1 style={{color:"white"}}>Edit an Existing Planet</h1>
        <form onSubmit={handleSubmit} id="planet-form">
        <div className="mb-3">
            <select onChange={handleNameChange} value={name} name={name} className="form-select">
            <option >Choose a Planet</option>
                {planets.map(planet => {
                  return (
                    <option key={planet.name} value={planet.name}>
                      {planet.name}
                    </option>
                  );
                })}
                </select>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleNewNameChange} value={newName} required placeholder="newName"  name={newName}  className="form-control"/>
            <label>Name</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleMassChange} value={mass} required placeholder="mass"  name={mass} className="form-control"/>
            <label>Mass</label>
          </div>
          <div className="form-floating mb-3">
            <input  onChange={handleTemperatureChange} value={temperature} required placeholder="date" name={temperature}  className="form-control"/>
            <label >Temperature</label>
          </div>
          <div className="form-floating mb-3">
            <input  onChange={handleDistanceChange} value={distance} required placeholder="date" name={distance} className="form-control"/>
            <label>Distance</label>
          </div>
          <div className="form-floating mb-3">
            <input  onChange={handleDescriptionChange} value={description} required  placeholder="date" name={description}  className="form-control"/>
            <label>Description</label>
          </div>
          <div className="form-floating mb-3">
            <textarea onChange={handleDiscoverChange} value={discovered} required placeholder="Reason" name={discovered} className="form-control"/>
            <label >Discovered By </label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleImageChange} type="url"  required value={image} placeholder="Image URL" name={image} className="form-control"/>
            <label>Image URL </label>
          </div>
          <div className="mb-3">
            <select onChange={handleSystemChange} name={system} value={system} className="form-select">
            <option >Choose a System</option>
                {systems.map(system => {
                  return (
                    <option key={system.name} value={system.id}>
                      {system.name}
                    </option>
                  );
                })}
                </select>
          </div>
          <button type="submit" className="btn btn-primary">Edit</button>
        </form>
      </div>
    </div>
  </div>
);
};

export default EditPlanet
