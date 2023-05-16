// Exercise 08

// We make a few purchases to prepare for our study session, 
// but the amount charged upon checkout seems too high. 
// Run the following code and find out why we are charged incorrectly.

// The shopping cart is a list of items, where each item
// is an object { name: <string>, amount: <number> }.
let shoppingCart = [];

// Currently available products with prices.
const prices = {
  'notebook': 9.99,
  'pencil': 1.70,
  'coffee': 3.00,
  'smoothie': 2.10,
};

function price({name}) {
  return prices[name];
}

// Adding an item to the shopping cart.
// The amount is optional and defaults to 1.
// If the item is already in the cart, its amount is updated.
function updateCart(name, amount = 1) { 
  let alreadyInCart = false;
  
  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];

    if (item.name === name) {
      item.amount = amount;
      alreadyInCart = true;
      break;
    }
  }
  
  if (!alreadyInCart) {
    shoppingCart.push({ name, amount });
  }
}

// Calculating the price for the whole shopping cart.
function total() {
  let total = 0;
  debugger;
  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];

    total += (item.amount * price(item));
  }

  return total.toFixed(2);
}

function pay() {
  // omitted

  console.log(`You have been charged $${total()}.`);
}

function checkout() {
  pay();
  shoppingCart = [];
}

// Example purchase.

updateCart('notebook'); // 9.99
updateCart('coffee', 1); // 3
updateCart('pencil', 2); // 3.40
// "Oh, wait, I do have pencils..."
updateCart('pencil', 0);

checkout();
// You have been charged $14.69.