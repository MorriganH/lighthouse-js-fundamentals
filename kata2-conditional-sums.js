const conditionalSum = function(values, condition) {
  let sum = 0; //stores sum of accepted values
  for (let val of values) { //loops through inputed array
    if (condition === "even" && val % 2 === 0) { //checks if value and condition are even
      sum += val; //adds even value to sum
    } else if (condition === "odd" && val % 2 != 0) { //checks if value and condition are odd
      sum += val; //adds odd value to sum
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));