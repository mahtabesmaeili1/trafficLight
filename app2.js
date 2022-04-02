"use strict";
// does not work!!! i get infinitie green light
const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on", currentState);

if (currentState == "green") {
      trafficLight.state = "orange";
    } else if (currentState == "orange") {
      trafficLight.state = "red";
    } else {cycle++;
      trafficLight.state = "green";
    }
}

    
