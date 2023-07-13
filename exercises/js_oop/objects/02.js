// A grocery store uses a JavaScript function to calculate discounts on various items. 
// They are testing out various percentage discounts but are getting unexpected results. 
// Go over the code, and identify the reason why they aren't getting the expected 
// discounted prices from the function. 
// Then, modify the code so that it produces the correct results.

const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = this.price * percent / 100;
    let discountedPrice = this.price - discount; //

    return discountedPrice; // 
  },
};

// We were modifiying the value of property `price`.