import React, {useState, useEffect} from "react";


function EditSystem () {

const [name, setName] = useState('');
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



const handleSubmit = async (event) => {
    event.preventDefault();
   
    // create an empty JSON object
    const data = {};
    data.name = name;
    data.description = description
    data.image = image


    const Url = `http://localhost:8100/api/system_detail/${name}/`;
    console.log(data)
    const fetchConfig = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(Url, fetchConfig);
    console.log(response)

    if (response.ok) {
      setName('');
      setImage('')
      setDescription('')

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
  }, []);




return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="">
        <h1 style={{color:"white"}}>Edit a System</h1>
        <form onSubmit={handleSubmit} id="planet-form">
        <div className="mb-3">
            <select onChange={handleNameChange} name={name} value={name} className="form-select">
            <option >Choose a System</option>
                {systems.map(planet => {
                  return (
                    <option key={planet.name} value={planet.name}>
                      {planet.name}
                    </option>
                  );
                })}
                </select>
          </div>

          <div className="form-floating mb-3">
            <input  onChange={handleDescriptionChange} value={description} placeholder="date" name={description} id="time" className="form-control"/>
            <label>Description</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleImageChange} type="url" value={image} placeholder="Image URL" name={image} id="reason" className="form-control"/>
            <label htmlFor="picture_url">Image URL </label>
          </div>
          <button type="submit" className="btn btn-primary">Edit</button>
        </form>
      </div>
    </div>
  </div>
);
};

export default EditSystem
