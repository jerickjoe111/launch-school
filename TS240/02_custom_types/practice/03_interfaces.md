# Practice Problems: Interfaces

1. Given the following JavaScript object representing a book in a library:

```ts
const book = {
  title: "The Great Gatsby",
  author: {
    firstName: "F. Scott",
    lastName: "Fitzgerald",
  },
  publicationDate: 1925,
  genres: ["Tragedy", "Realism"],
};
```

Please create a TypeScript interface that can accurately describe the shape of this book object.

```ts
interface Book {
  title: string;
  author: Author;
  publicationDate: number;
  genres: string[];
}

interface Author {
  firstName: string;
  lastName: string;
}
```
