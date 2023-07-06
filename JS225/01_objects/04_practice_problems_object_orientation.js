// Create a function that takes one of our product objects as an argument, 
// and sets the object's price to a non-negative number of our choosing, 
// passed in as a second argument. If the new price is negative, 
// alert the user that the new price is invalid.

function setProductPrice(product, newPrice) {
  if (product >= 0) product.price = newPrice;
  else alert('Invalid price!');
}

function describeProduct(product) {
  console.log('Name: ' + product.name);
  console.log('ID: ' + product.id);
  console.log('Price: $' + product.price);
  console.log('Stock: ' + product.stock);
}

// Create a new function createProduct which takes arguments for id, 
// name, stock, and price and also adds setPrice and describe to the new object.

function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    setProductPrice(product, newPrice) {
      if (product >= 0) product.price = newPrice;
      else alert('Invalid price!');
    },
    describeProduct(product) {
      console.log('Name: ' + product.name);
      console.log('ID: ' + product.id);
      console.log('Price: $' + product.price);
      console.log('Stock: ' + product.stock);
    },
  };
}