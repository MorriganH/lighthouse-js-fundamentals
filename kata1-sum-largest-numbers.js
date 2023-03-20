const sumLargestNumbers = function(data) {
  let largest = 0; //holds largest number in array
  let second = 0; //holds second largest number in array
  for (let val of data) { //loops through inputed array
    if (val > largest) { //if new number is bigger than previous numbers
      second = largest; //transfer previous largest to second largest
      largest = val; //update largest with new number
    } else if (val > second) { //if new number is bigger than previous second
      second = val; //update second with new number
    }
  }
  return largest + second;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));