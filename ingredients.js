const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for (a = 0; a < ingredients.length; a++) {
  console.log(ingredients[a]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (a = ingredients.length - 1; a >= 0; a--) {
  console.log(ingredients[a]);
}