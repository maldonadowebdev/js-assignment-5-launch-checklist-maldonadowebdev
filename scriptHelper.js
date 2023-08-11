// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.innerHTML =
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
    
  };

function validateInput(testInput) {
 
    if (!testInput){
        return "Empty";
       }else if(isNaN(testInput) == false){
        return "Is a Number";
       }else{
        return "Not a Number";
       }
};

//I removed the "list" parameter between document and pilot from the formSubmission function below.
function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    document.innerHTML = `
              <ol>
                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} Ready</li>
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} Ready</li>
                <li id="fuelStatus" data-testid="fuelStatus">Fuel level ${fuelLevel} for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass ${cargoLevel} for launch</li>
              </ol>`;   
  };

  
  async function myFetch() {
    let planetsReturned;
    let data;
  
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
      data = response.json();
    
        });
        
  return data;
  }

  function pickPlanet(planets) {
    let selected = Math.floor(Math.random() * planets.length);
    return selected;
  }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;