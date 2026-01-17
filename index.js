// ============================
// Flatburger Restaurant Lab
// ============================

// Step 1: Global Variables
let burgers = ['Hamburger', 'Cheeseburger'];  // global array
let featuredDrink = 'Strawberry Milkshake';  // global featured drink

// Step 2: Function to add a burger
function addBurger() {
  // Function-scoped variable
  let newBurger = 'Flatburger';

  // Add to global burgers array
  burgers.push(newBurger);

  // Block-scoped addition
  if (true) {
    let anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
  }
}

// Step 3: Function to change the featured drink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}

// Optional: Log results to see in the browser
console.log('Burgers before adding:', burgers);
console.log('Featured Drink before adding:', featuredDrink);

addBurger();
changeFeaturedDrink();

console.log('Burgers after adding:', burgers);
console.log('Featured Drink after adding:', featuredDrink);

// ============================
// Module exports for automated tests
// ============================
if (typeof module !== 'undefined') {
  module.exports = {
    burgers,
    featuredDrink,
    addBurger,
    changeFeaturedDrink
  };
}
