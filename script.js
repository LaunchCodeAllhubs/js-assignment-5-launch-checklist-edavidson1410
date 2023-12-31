// Write your JavaScript code here!


window.addEventListener("load", function() {
    //added array number because there was not ID for the last 3 input fields and the ByName returns a nodelist.
    const list = document.getElementById("faultyItems")
    const pilotName = document.getElementsByName("pilotName")[0];
    const copilotName = document.getElementsByName("copilotName")[0];
    const fuelLevel = document.getElementsByName("fuelLevel")[0];
    const cargoMass = document.getElementsByName("cargoMass")[0];
    const submit = document.querySelector("button");

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        formSubmission(window.document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
    });
    
   let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randomPlanet = pickPlanet(listedPlanets);
        console.log(randomPlanet.imageUrl)
        addDestinationInfo(window.document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image)
    })
   
});