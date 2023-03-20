const instructorWithLongestName = function(instructors) {
  let longest = {}; //holds instructor object with longest name
  let longestValue = 0; //holds length of longest name
  for (let instructor of instructors){ //loops through array of instructors
    if (instructor.name.length > longestValue) { //if length of new instructor name is larger than previous
      longest = instructor; //update 'longest' variable to the object of that instructor
      longestValue = instructor.name.length; //update length value of the longest name for future comparisons
    }
  }
  return longest;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));