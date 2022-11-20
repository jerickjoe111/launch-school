## Ingredients of iteration:

When you call a method on an object, control is passed to the body of the method (a different scope): and when the methiod has finished executing, control returns to the point right after the point where the method call took place.

## Iterator:

An iterator is a Ruby method that has an extra ingredient in tis calling syntax: it expects you to provide it with a _code block_. Curly braces or `do`..`end` key words delimit the block.

The code block is part of the method call, that is, part of its syntax. A code block is not an argument. 

## Curly braces and do/end syntax:

The difference between the two ways of delimiting a code block is a difference in precedence.

## Yielding/returning:

Yielding to a block and returning from a method are two different things. A method may yield to its block any number of times, but every method returns exactly one, assuming no fatal errors. It's like a jump in figure skating. You take off, execute some rotations in the air, and land. No matter how many rotations you execute, you only take off once and land once. A method call causes the method to run once and execute once.

Code blocks, loke methods, can take arguments. When a method yields, it can yield one or more values. The block pick ups the argument through its parameters, and the parameters get bound to whatever value gets yielded from the method to the block.

Code blocks always return a value: its last evaluated expression. The return value comes back from the block to the method as the return value from `yield`.

## Blocks and scope

Blocks have direct access to variables that already exist. However, block parameters behave differently from non-parameter variables. If you have a variable of a given name in scope and also use that name as one of your block parameters, then the two variables, the one that exists and the one in the parameter list, are not the same as each other (_shadowing_, as the parameter _shadows_ the outer variable).

Blocks share local scope with the code that preceds them. Blocks can serve as the bodies of anonymous function objects, and those objects preserve the local variables that are in the scope at the time of their creation, even if the function objects get handed around other local scopes.