const repeatNumbers = function(data) {
  let output = ""; //stores the repeated numbers
  for (let pair = 0; pair < data.length; pair++) { //loop through first dimension of inputted array
    for (let repeats = data[pair][1]; repeats > 0; repeats--) { //adds first value of pair to output a number of
      output += data[pair][0];                                  //times equal to the second value of pair
    }
    if (pair < data.length - 1) { //only print a comma if there are more pairs
      output += ", ";
    }
  }
  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));