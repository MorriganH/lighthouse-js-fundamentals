const numberOfVowels = function(data) {
  let total = 0; //stores number of vowels
  for (let val of data) { //loops through inputed string
    switch (val) { //checks for vowel characters
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        total++; //increments vowel count
    };
  }
  return total;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));