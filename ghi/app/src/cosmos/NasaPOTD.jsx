import { useEffect, useState } from "react";
import "./card.scss"
import React from "react";
import "./searchcard.scss"



function Picture() {
  
  const [planet,setPlanet] = useState('')

  const handleSubmit = async (event) => {

    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=fpbF4huSJNHXSw8bkV2TwYcxeGsvcVCagmxF3RrJ`);
    if (response.ok) {
      const data = await response.json();
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
