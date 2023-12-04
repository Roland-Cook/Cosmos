import React, {useState} from "react";


function CreateSystem () {

const [name, setName] = useState('');
const [description,setDescription] = useState('')
const [image,setImage] = useState('');



const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  }

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  }

  const handleImageChange = (event) => {
    const value = event.target.value;
    setImage(value);
  }

    // sends a post request with the data recorded in the functions above 

const handleSubmit = async (event) => {
    event.preventDefault();
   
    // create an empty JSON object
    const data = {};
    data.name = name;
    data.image = image
    data.description = description

    const Url = `http://localhost:8100/api/systems_list/`;
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
      setImage('')
      setDescription('')
    }
  }




return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="">
        <h1 style={{color:"white"}}>Create a System</h1>
        <form onSubmit={handleSubmit} id="planet-form">
          <div className="form-floating mb-3">
            <input onChange={handleNameChange} value={name} placeholder="Planet Name" name={name}  className="form-control"/>
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleImageChange} type="url" value={image} placeholder="Image URL" required name={image}  className="form-control"/>
            <label htmlFor="picture_url">Image URL </label>
          </div>
          <div className="form-floating mb-3">
            <textarea onChange={handleDescriptionChange}  value={description} placeholder="Description of planet..."  name={description} className="form-control"/>
            <label >Description </label>
          </div>

          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  </div>
);
};

export default CreateSystem
