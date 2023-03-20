const urlEncode = function(text) {
  let encoded = ""; //stores encoded text
  for (let index = 0; index < text.length; index++) { //loops through inputed string
    if ((index === 0 || index === text.length - 1) && text[index] === " ") { //if first or last character is space do nothing
    } else if (text[index] === " ") { //if the character is a space
      encoded += "%20"; //adds %20 to the encoded string
    } else { 
      encoded += text[index]; //otherwise add the character to the encoded string
    }
  }
  return encoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));