# Practice Problems: Type Intersections

1. Consider the following two types:

```ts
type Product = {
  name: string;
  price: number;
};

type Shipping = {
  weight: number;
  shippingCost: number;
};
```

Now, imagine there's a new product type called `ShippableProduct`, that combines the properties of both `Product` and `Shipping`. Try to create this new type using the knowledge you just learned.

```ts
type ShippableProduct = Product & Shipping;
```

2. In the previous practice problem, you used type intersections to create a new type `ShippableProduct` that combined the properties of both `Product` and `Shipping`. Now, try do the same thing but using interfaces.

```ts
interface ShippableProduct extends Product, Shipping {}; 
// literal empty object means the new type won't have any new properties.
```
