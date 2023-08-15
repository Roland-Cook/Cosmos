# Comos



## Getting started

Cosmos was created using Django for the backend and react for the front end. This application is fully containerized using Docker. To run the application please utalize our docker compose file. While in your terminal navigate to this project and in the parent directory please run the command "docker compose build" followed by "docker compose up". 

## Application Details

This application was built to model planets, planetary systems and the overall navigation of celestial bodies. 

Cosmos was created utalizing CRUD methodolgies while making various API calls. I used two third party API in the creation of this application. 

Nasa's API to grab the picture of the day along with its description and Ninjas Planet API to make it possible to search through thousands of planets and pull information about the planet.

When using this application please note that you cannot have two planets with the same name. Also when searching for planets using Ninjas search you will notice that the planet image is static, that is because Ninjas API does not contain imagery for its planets.


I've built several features encourage the original image I had in mind when creating this application please see examples down below. 



***



# CRUD


<h3> Users can define planets by filling out the form, users must first define a planetary system to properly complete this form. </h3>

![grab-landing-page](./planets/gifs/CreatePlanet.gif)

<h3> Once a planet is defined users can then view a list of all planets defined. </h3>

![](.\planets\gifs\AllPlanets.gif)



<h3> Users can also define planetary systems within this application, these systems are tied to planets using foreign keys. </h3>

![grab-landing-page](\planets\gifs\CreateSystem.gif)


<h3> Under search planets users have the ability to search through any planets they defined within the application to that planets particular information. </h3>

![me](\planets\gifs\YourSearch.gif)


## Third Party APIs

<h3> Using Ninjas Planet API users can search through thousands of planets and pull information from them. </h3>

![grab-landing-page](\planets\gifs\SearchNinja.gif)

<h3> On the bottom right users can access Nasa's Astronomy Picture of The Day. </h3>

![grab-landing-page](\planets\gifs\POTD.gif)






## Technologies 
HTML, CSS, JS, Python, React, Django, SASS, Bootstrap

## Project status
Still being worked on, I plan to add a couple more features pertaining to API calls and working with outside data. I am looking into making this application mobile responsive via media quieries. 