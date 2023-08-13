import { useEffect, useState } from "react";
import { Search } from 'react-bootstrap-icons';
import "./card.scss"
import React, { Component } from "react";



function PlanetSearch() {


    const [planetName,setPlanetName] = useState('')
    const [planets,setPlanets] = useState([])



    const handlePlanetNameChange = (event) => {
        const value = event.target.value;
        setPlanetName(value)
      }



  const handleSubmit = async (event) => {
    // event.preventDefault();

    const settings = {
        method: 'GET',
        headers: { 'X-Api-Key': 'LUzifa1Hcd3nt987OZgdkA==8nL9HBP8W1PZUT84'}
    };

    console.log("clicked", settings)


    // const Url = fetch(`https://api.api-ninjas.com/v1/planets?name=earth`, settings);

    // const response = await fetch(Url);
    // console.log(response)

    // const asyncGetCall = async () => {
    //     try {
    //         const response = await fetch(`https://api.api-ninjas.com/v1/planets?name=earth`, settings);
    //          const data = await response.json();
    //         // enter you logic when the fetch is successful
    //          console.log(data);
    //        } catch(error) {
    //     // enter your logic for when there is an error (ex. error toast)
    //           console.log(error)
    //          } 
    //     }


    //   asyncGetCall()

     }
       

      return (
        <>
    <div class="search-box">
        <button onClick={handleSubmit} onChange={handlePlanetNameChange} value={planetName} name={planetName} class="btn-search"><Search/></button>
        <input type="text" class="input-search" placeholder="Type to Search..."/>
    </div>
            </>
      )
      }
      
    export default PlanetSearch
