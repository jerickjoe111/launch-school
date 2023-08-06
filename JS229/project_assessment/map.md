# Overview

The `todoManager` is responsible for returning a set of todos from a `todoList` based on certain criteria. 

The `todoList` is an object that has a collection of `todo` objects. 

the app has a `Todo` that is responsible for creating the `todo` objects. The `todo objects should have unique `ids`.

## Todo

Creates `todos` that have unique ids.

The `todo` objects it creates only have the following properties and shared methods:

Properties:
* id (must be unique)
* title
* completed
* month
* year
* description

Instance Methods:
* isWithinMonthYear(month, year)

The class can have any static method and property

the constructor method within the class can have any private method

## `todoList`

The todoList is an object that contains a **collection of `todo` objects** (private access only). 

An interface for manipulating **the collection of objects** (i.e., adding, updating, deleting, etc.). 

The todoList maintains the integrity of the collection by:

 - _returning only a copy of the collection_ anytime that a method returns all or a subset of it (single object).

**It does not allow users or others objects to manipulate the values of `todo` objects directly**

The todoList object supports the following operations:

- Maintains a collection of `todo` objects
- Initializes the collection with `todo` objects
- Adds a `todo` object to the collection
- Deletes a `todo` object from the collection
- Updates existing properties of a specific `todo` object
- Returns a specified `todo` object based on its `id` property


## `todoManager`

The todoManager interfaces with the `todoList` object. 

It has methods that query the `todoList` to return all or a subset of the todo objects as an array of todo objects.

Return all todo objects
Return all completed todo objects
Return all todo objects within a given month-year combination
Return all completed todo objects within a given month-year combination