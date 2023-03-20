const whereCanIPark = function (spots, vehicle) {
  let pos = []; //stores position of acceptable available spot
  for ( y = 0; y < spots.length; y++) { //loops through rows
    for (x = 0; x < spots[y].length; x++) { //loops through columns
      switch (vehicle) { //checks for vehicle type
        case "motorcycle": //motorcycles will check all cases for open spot until spot is found
          if (spots[y][x] === "M") {  //if motorcycle spot found,
            pos = [x, y];             //store spot position and
            break;                    //exit switch statement
          }
        case "small": //small vehicles will check small and regular cases for open spot until spot is found
          if (spots[y][x] === "S") {  //if small spot is found,
            pos = [x, y];             //store spot position and
            break;                    //exit switch statement
          }
        case "regular": //regular vehicles wil check regular spots
          if (spots[y][x] === "R") {  //if regular spot is found,
            pos = [x, y];             //store spot position
          }
      }
      if (pos.length > 0) {   //if spot was found,
        break;                //exit column loop
      }
    }
    if (pos.length > 0) { //if spot was found,
      break;              //exit row loop
    }
  }
  if (pos.length > 0) { //if spot was found,
    return pos;         //return spot position
  } else {              //if no spot was found,
    return false;       //return false
  }
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));