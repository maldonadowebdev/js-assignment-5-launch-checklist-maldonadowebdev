

window.addEventListener("load", function() {
  
    let form = document.querySelector("form");
    //let button = document.getElementById("formSubmit");
    let pilotName;
    let copilot;
    let fuelLevel;
    let cargoMass;
    let missionTarget = document.getElementById('missionTarget');
    let varArray = [pilotName, copilot, fuelLevel, cargoMass];
    
  
  
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
  
  
        let count = 0;
        for (let i = 0; i < inputArray.length; i++){
          if (inputArray[i].length > 0){
            count += 1;
          };
        };

        
        if (count != inputArray.length){
          alert("All fields are required!")
        }else if (isNaN(pilotName) != true || isNaN(copilot) != true){
           alert("Make sure to enter valid information for each field!");
       } else if (isNaN(fuelLevel) != false|| isNaN(cargoMass) != false){
        alert("Make sure to enter valid information for each field!");
       }else{
        if ((fuelLevel < 10000) || (cargoMass > 10000)){
          document.getElementById('launchStatus').style.color = "red";
          document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";

          let faultyItems = document.getElementById('faultyItems');
          faultyItems.style.visibility = "visible";

          let tooHigh = "too high";
          let tooLow = "too low";
  
          if ((fuelLevel < 10000) && (cargoMass > 10000)){
          document.getElementById('launchStatus').style.color = "#C7254E";

         // formSubmission(faultyItems, pilot, copilot, tooLow, tooHigh);

          faultyItems.innerHTML = `
          <ol>
                      <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilotName} Ready</li>
                      <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} Ready</li>
                      <li id="fuelStatus" data-testid="fuelStatus">Fuel level ${tooLow} for launch</li>
                      <li id="cargoStatus" data-testid="cargoStatus">Cargo mass ${tooHigh} for launch</li>
                  </ol>
          `;
 



        }else if(fuelLevel < 10000){
          document.getElementById('launchStatus').style.color = "red";
          faultyItems.innerHTML = `
          <ol>
                      <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilotName} Ready</li>
                      <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} Ready</li>
                      <li id="fuelStatus" data-testid="fuelStatus">Fuel level ${tooLow} for launch</li>
                      <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
                  </ol>
          `;
  
        }else if (cargoMass > 10000){
          document.getElementById('launchStatus').style.color = "#C7254E";
          faultyItems.innerHTML = `
          <ol>
                      <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilotName} Ready</li>
                      <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} Ready</li>
                      <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                      <li id="cargoStatus" data-testid="cargoStatus">Cargo mass ${tooHigh} for launch</li>
                  </ol>
          `;
  
        }
       }else {
        faultyItems.style.visibility = "visible";
        document.getElementById('launchStatus').style.color = "#419F6A";
        document.getElementById('launchStatus').innerHTML =  "Shuttle is ready for launch";
        faultyItems.innerHTML = `
          <ol>
                      <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilotName} Ready</li>
                      <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} Ready</li>
                      <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                      <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
                  </ol>
          `;
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
