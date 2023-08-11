

window.addEventListener("load", function() {
  
    let form = document.querySelector("form");
  
    let pilotName;
    let copilot;
    let fuelLevel;
    let cargoMass;
    let missionTarget = document.getElementById('missionTarget');
    
    
  
  
    form.addEventListener("submit", function(event) { 

        pilotName = document.querySelector("input[name=pilotName]");
        pilotName = pilotName.value; 
        copilot = document.querySelector("input[name=copilotName]");
        copilot = copilot.value;
        fuelLevel = document.querySelector("input[name=fuelLevel]");
        fuelLevel = fuelLevel.value;
        cargoMass = document.querySelector("input[name=cargoMass]");
        cargoMass = cargoMass.value;
        let inputArray = [pilotName, copilot, fuelLevel, cargoMass];
        let faultyItems = document.getElementById('faultyItems');
        let tooHigh = "too high";
        let tooLow = "too low";
        let lowEnough = "low enough";
        let highEnough = "high enough";
  
  
        let count = 0;
        for (let i = 0; i < inputArray.length; i++){
          if (validateInput(inputArray[i]) != "Empty"){
            count += 1;
          };
        };
     
      

        if (count != inputArray.length){
          alert("All fields are required!")
        }else if (validateInput(pilotName) === "Is a Number" || validateInput(copilot) === "Is a Number"){
           alert("Make sure to enter valid information for each field!");
        } else if (validateInput(fuelLevel) === "Not a Number"|| validateInput(cargoMass) === "Not a Number"){
        alert("Make sure to enter valid information for each field!");
        }else{
          if ((fuelLevel < 10000) || (cargoMass > 10000)){
            document.getElementById('launchStatus').style.color = "red";
           document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
            faultyItems.style.visibility = "visible";

              if ((fuelLevel < 10000) && (cargoMass > 10000)){
                document.getElementById('launchStatus').style.color = "#C7254E";
                formSubmission(faultyItems, pilotName, copilot, tooLow, tooHigh);


              }else if(fuelLevel < 10000){
                  document.getElementById('launchStatus').style.color = "red";
                  formSubmission(faultyItems, pilotName, copilot, tooLow, lowEnough);
 
              }else if (cargoMass > 10000){
                  document.getElementById('launchStatus').style.color = "#C7254E";
                  formSubmission(faultyItems, pilotName, copilot, highEnough, tooHigh); 
              }
        }else {
        faultyItems.style.visibility = "visible";
        document.getElementById('launchStatus').style.color = "#419F6A";
        document.getElementById('launchStatus').innerHTML =  "Shuttle is ready for launch";
        formSubmission(faultyItems, pilotName, copilot, highEnough, lowEnough);

       }
      }
          
    event.preventDefault();
       
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
       let pick = pickPlanet(listedPlanets);
       
       addDestinationInfo(missionTarget, listedPlanets[pick].name, listedPlanets[pick].diameter, listedPlanets[pick].star, listedPlanets[pick].distance, listedPlanets[pick].moons, listedPlanets[pick].image);
   })



  });
