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
   listedPlanets = myFetch();
   console.log(listedPlanets)
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});