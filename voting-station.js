const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  let goodStations = []; //acceptable venues get added here
  for (let listing = 0; listing < stations.length; listing++) { //loop through the inputed array, tried for of loop, gave error line 10 at stations[listing][1], undefined
    if (stations[listing][1] >= 20 && (stations[listing][2] === "school" || stations[listing][2] === "community centre")) {
      goodStations.push(stations[listing][0]);
    } //if the venue has capacity and is proper type, adds venue name to goodStations
  }
  return goodStations; //returns names of acceptable venues to the call
}
console.log(chooseStations(stations));
