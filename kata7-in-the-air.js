const checkAir = function (samples, threshold) {
  let ratio = [0, samples.length]; //stores values for the number of dirty samples and total number of samples
  for (sample of samples) { //loops through the array of samples
    if (sample === "dirty") { //if sample is dirty,
      ratio[0]++;             //increment total number of dirty samples
    }
  }
  if ((ratio[0] / ratio[1]) >= threshold) { //if the ratio of dirty samples is greater or equal to the threshold,
    return "Polluted";                      //air is polluted
  } else {                                  //otherwise,
    return "Clean";                         //air is clean
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));