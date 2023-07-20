// Write your JavaScript code here!

// const list = document.getElementsById("faultyItems")
// const pilotName = document.getElementsByName("pilotName").innerHTML;
// const copilotName = document.getElementsByName("copilotName").innerHTML;
// const fuelLevel = document.getElementsByName("fuelLevel").innerHTML;
// const cargoMass = document.getElementsByName("cargoMass").innerHTML;


window.addEventListener("load", function() {
    const submit = document.querySelector("button");
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        formSubmission()
    });
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});