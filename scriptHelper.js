// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}"></img>`

   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput === "") {
        return "Empty"
      } else if (isNaN(testInput)) {
        return "Not a Number"
      } else if (!isNaN(testInput)) {
        return "Is a Number"
      } else {

      }
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const launchStatus = document.getElementById("launchStatus")
    // const d = document
    let readyToLaunch = true;
    const inputs = [pilot, copilot, fuelLevel, cargoLevel]
    const validation = inputs.map(input => validateInput(input));

    if(validation.includes("Empty")) {
        alert("All inputs must be filled out.")
    } else {
        
        if(validation[0] === "Not a Number" && validation[1] === "Not a Number") {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for Launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for Launch`;
        } else alert("Pilot's names must only contain letters.");
        
        if(validation[2] === "Is a Number" && validation[3] === "Is a Number") {   
            if(fuelLevel < 10000) {
                launchStatus.style.color = "rgb(199, 37, 78)";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                fuelStatus.innerHTML = "Fuel level too low for launch";
                readyToLaunch = false;
            }
            if(cargoLevel > 10000) {
                launchStatus.style.color = "rgb(199, 37, 78)";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                readyToLaunch = false;
            }     
            } else alert("Fuel Level and Cargo Level must be numbers.")
        
        if(readyToLaunch) {
        launchStatus.style.color = "rgb(65, 159, 106)";
        launchStatus.innerHTML = "Shuttle ready for launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
        list.style.visibility = "visible";
    }
}

async function myFetch() {
    let planetsReturned;
    planetData = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    planetsReturned = await planetData.json();
    // planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( response => {
    //     response.json().then( json => {
    //         console.log(json)
    //         return json
    //     })
    // });
    return planetsReturned;
}

function pickPlanet(planets) {
    const randomPlanet = Math.floor(Math.random() * (planets.length-1))
    return planets[randomPlanet]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
