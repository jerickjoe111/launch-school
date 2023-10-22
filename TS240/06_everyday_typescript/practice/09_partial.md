# Practice Problems: Partial

1. Let's say we have the following interface Product and an array of product objects:

```ts
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

let products: Product[] = [
  {
    id: 1,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];
```

Try implementing the `updateProduct` function based on the provided requirements.

```ts
function updateProduct(
  productId: number,
  updatedValues: Partial<Product>
): void {
  // Your implementation here:
  // Find product to update by productId
  // If found, apply partial update with using object spreading
  // Else log out "Product not found"
  
  products.forEach((product, index) => {
    if (product.id === productId) {
      products[index] = { ...product, ...updatedValues}
      return products[index]
    }
  })

  console.log('Product not found')
}

updateProduct(1, {
  name: "Updated Product Name",
  price: 99.99,
});
```
