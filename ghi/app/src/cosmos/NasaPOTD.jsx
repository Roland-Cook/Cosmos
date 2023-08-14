import { useEffect, useState } from "react";
import { Search } from 'react-bootstrap-icons';
import "./card.scss"
import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import "./searchcard.scss"



function Picture() {

  
    const [planet,setPlanet] = useState('')





  const handleSubmit = async (event) => {
    // event.preventDefault();


    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=fpbF4huSJNHXSw8bkV2TwYcxeGsvcVCagmxF3RrJ`);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      setPlanet(data)
}
  
    
}
useEffect(() => {
  handleSubmit();
}, []);

      return (
        <>
        <div className="potd">
        <img  src={planet.hdurl} alt="" />
        <p>{planet.explanation}</p>
        </div>
        </>
     )}
    
      
    export default Picture
