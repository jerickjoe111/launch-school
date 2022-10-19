### What is OOP and why OOP:

Object Oriented Programming is a paradigm that organizes a program in classes and instances of that classes. Each instance inherits behaviors and encapsulates a state, and the programmer orchestrates the ensemble of actors in the program, objects, to interact with each other in order to achieve the desired results.

OOP allows us to modularize parts of the program, encapsulating behaviors, to avoid the ripple effect of pure functional approaches. Provides a higher level of abstraction and a new way of thinking about design, and to create more complex and sophisticated programs. Besides that, this makes for a  more easily maintainable code, and a chance to apply different philosophies, values and priorities.

### Classes:
Classes are the outlines or blueprints for objects—instances of classes—, that define their attributes and behaviors. The attributes represent the state of the object, the data and information associated with the particular object, and the behaviors represent the methods that the object will be capable of execute.

We can define our own custom classes with the syntax `class…end`, and we name them using constants in CamelCase. Inside it, we can define class variables, class methods, instance variables, instance methods, class instance variables, and constants; we also can mix in modules—extra collections of functionality—, and control the access to methods.

### Objects:
In Ruby, we can say that everything that has a value can be considered an object, and every object is an instance of a class. Each instance of the same class has a set of shared behaviors, defined by the class, but also has its own stash of data and information called the object state. We define instance variables in order to keep track of the state, and we define instance methods to access and/or modify the object state, meaning, access to its instance variables. 

Objects can be created from classes calling the `new` class constructor method on the class, a process called _instantiation_, which will trigger an instance constructor method `initialize`, called upon the new created instance.

### Instance variables:
The instance variables are defined with an `@` at the beginning of their name; they keep track of the particular object state, and are scoped at the object level. This means that, although other instances of the same class can’t access them, these variables are available to any method of their instance owner, even if they were initialized in other instance method or weren’t passed in as arguments. 

The instance variables can be assigned to any value or object, even other instances of custom classes we have created—in this case, the objects assigned to them are called collaborators. Contrary to local variables, if we try to retrieve the value of an uninitialized instance variable, an exception won’t be raised, but they will act as referencing a value of `nil`.

This means that, first, in order to initialize them, we have to call the method in which this happens —usually the `initialize` instance method, called on instantiation—; and second, that instance variables and their values are not inherited, we have to initialize them first at the instance level. So, in order to initialize instance variables, the object needs access to the methods that do so, thanks to class inheritance or interface inheritance. If the object can't access the method, or if the method is overridden in the subclass, the instance variable will never be initialized, and will act as referring to the `nil` value.

### Class variables:
The class variables are defined with two `@@` at the beginning of their name, and they are scoped at a class-hierarchy level, which means that they provide a storage mechanism shared between a class and instances of that class, not visible to any other object. They are also shared throughout the hierarchy, that is, by its descendant classes and their instances, which makes class variables leaky, as too many objects can get hold of them: there is just one copy of the class variable shared among all its holders. Only class variables allow us to share state between objects.
They don’t need to be initialized if they are initialized in the class definition, as the class variables are loaded when the class are evaluated by Ruby.

### Constants:
The name of every constant begins with a capital letter and are assigned to values as we do with variables. A constant defined in a class can be referred to from inside the class instance or class methods. They can be reassigned, but Ruby will raise a warning: this is not considered a good practice.

Constants have lexical scope, which means that when Ruby tries to resolve them, it searches 'lexically', meaning, it searches the surrounding structure—lexical scope— of the constant reference. If it fails, Ruby then traverses up the inheritance hierarchy of that surrounding structure. And if this fails too, it will look up in the top—main— level.
It’s also possible to refer to a constant from outside the class definition entirely, using a special constant lookup notation `::`.

### Instance methods:
Instance methods are defined within a class to be available to every instance of that class. They have access to instance variables: methods that involve them can have different output based on the particular state of the object, but methods that don’t involve instance variables will have the same output across all the instance of the same class. 

Methods that are used to retrieve or reset the value of the instance variables are called _accessor_ methods: _getters_ if they retrieve, _setters_ if they modify the instance variables’ value. It’s stablished good practice to name them with the same name as the instance variable they retrieve or modify; Ruby provide us with the `attr_*` set of methods to write them automatically.

### Getter:
An instance method used to retrieve the value of an instance variable: it is better to call a _getter_ than to refer to the instance variable directly, as it provides more flexibility to the code and makes it more easily maintainable (changes need only to be made where the method is defined).
We can call the _getter_ inside any method without an explicit caller object: the object on which we call the method is implicitly the default or current object, referred to by `self`.

### Setter:
An instance method to modify the attribute of an object; i.e., reassign an instance variable. We can add a `=` at the end of the method name to take advantage of Ruby’s syntactic sugar to make the method call look like an ordinary assignment operation. However, when calling this method inside the class, we have to provide an explicit `self` as a caller, in order to disambiguate from a local variable assignment.
It's important to remember that setter method always return the value that is passed in as an argument, regardless if it was mutated or not.

### Class method:
The method that we call directly on the class object itself, not on any of its instances. Defined with a `self.*` inside the class definition, we used them to provide functionality that belongs to the class object, not to its instances.

### Self:
At every point when the program is running, there’s one and only one default or current object, accessible by the keyword `self`. Whatever object gets to be `self`, depends on the context in which we reference it. It can change with the scope, but not always, as they are different concepts:

- At the top level, outside any code block, refers to `main`, an instance of the `Object` class.
- At the class definition, refers to the class object that is being defined.
- At the module definition, refers to the module object that is being defined.
- Inside an instance method definition inside a class, refers to the instance of that class on which we will call this method.
- Inside an instance method definition inside a module, it will refer to the instance of the class that includes the module.

Local scope changes often, as so does the identity of `self`. Sometimes, but only sometimes, they vary together. When we start a definition block —method, class, module—, we start a new local scope, and we also create a block of code with a particular `self`. But local scope and `self` don’t operate entirely in parallel: they are not the same thing. 

### Module: 
Like classes, modules are collections of methods and constants, but unlike them, modules don’t have instances. Instead, we specify that we want to add the functionality of a particular module to that of a class, by using `include` keyword in the class. A module included in this manner is sometimes referred to as a 'mix-in', and the result is that instances of the class have access to the instance methods defined in the module. A class can only inherits from a single superclass, but it can include as many modules as needed.
Classes are usually named with nouns, but modules are with adjectives to reinforce the notion that the module defines a behavior.

### Namespacing:
We can nest class definitions inside a module definition. Nested module/class chains are sometimes used to create separate 'namespaces', hence this name, for classes modules and methods. This technique can help if two classes have a similar name but aren’t the same class: the two classes won’t conflict with each other because each is nested in its own namespace.

### Method lookup path:
We can understand a method call on an object as a process in which a 'message' is sent to an object via the dot operator. When an object receives the message, the intended result is the execution of a method with the same name as the message. In order to resolve the message into a method, an object will look for the method in a certain order, called the method lookup path:

1.	Its class
2.	Modules included in its class, in reverse order of inclusion
3.	Its class’s superclass
4.	Modules included in its superclass.

And so on, until the message is traced this way up to `Object`, its mix-in `Kernel`, and `BasicObject`. If still hasn’t found the method, an exception will be raised.

### Super:
Inside the body of a method definition, you can use the `super` keyword to jump up to the next-highest definition in the method lookup path of the method being currently executed. It is usually used in the `initialize` instance method body, which allow us to extract more generalized code in a superclass, adding specialized code in the subclasses instantiation. There are three modes to call `super`:

-	With no argument list: `super` will automatically forward the arguments that were passed to the method from which is called.
-	With specific arguments: `super` will send exactly those arguments.
-	With an empty list, `super()`: no methods will be forwarded, even those passed to the method from which is called.

## Method access control:
Ruby provides a way to restrict or allow access to certain methods defined in a class thanks to the access modifiers `public`, `private`, and `protected`, implementing what is called the method access control:

- `public` is the option by default (all methods are public by default). This means that any object throughout the program can call these methods as long as they know the method name. The set of a class public methods comprises the class interface—how other classes and objects interact with this class and its instances.
- To make methods 'private' we have to explicitly declare so, defining them after the `private` keyword. Private means that the methods are only accessible from other methods within the class, and not from outside the class definition by other objects. (private setter methods can and have to be called with the explicit `self`).
- Methods defined after `protected` cannot be invoked outside the class, being only accessible to other instances of the same class that defines them, or descendant classes of that class. They are usually used to compare objects of a particular class.

Subclasses inherit the method access rules of their superclasses, unless they set up new rules, which will take precedence.

### Inheritance:
Inheritance is a kind of downward-chaining relationship between two classes—the superclass and the subclass—, by which one class ‘inherits’ from another, and the instances of the subclass acquire the behaviors—the methods— defined in the superclass.

Inheritance allows us to define parent classes with general functionality and great reusability, and child classes for more fine-tuned and specific behaviors. We can implement inheritance by two ways: class inheritance and interface inheritance:
- via class inheritance; the subclass acquires the behaviors defined in the superclass. For example, we can override any inherited method from a superclass, which means that we redefine a method with the same name in the subclass, thus making it to be earlier in the lookup path, so it will be executed instead of the method with the same name in the superclass. A subclass can only inherit from a single superclass (principle of single inheritance).
- via interface inheritance, which describes when we mix in a module in a superclass, thus making its functionality available to the subclass, as the module will be part of the method lookup path. We can include as many modules in a class as we want. This can also be considered inheritance.


### Polymorphism:
Polymorphism refers to the ability of different objects of different types, related or not by inheritance, to respond to a common interface, which means methods with the same name. This can be achieved with or without inheritance:
- Polymorphism with inheritance, for example, when a subclass inherits a more generic method from a superclass, or when a subclass overrides a method inherited from the superclass, to implement a more specific behavior. Also, when two different classes mix in the same module, thus making them to respond to the same functionality added by the module.
- Polymorphism without inheritance or duck-typing: when different unrelated types of objects respond to the same method name and number of arguments—a common interface—, but the implementation of each of these methods is different, with no relation of inheritance among them, but designed to work polymorphically.

### Encapsulation:
Encapsulation refers to the compartmentalization of object behavior; hiding and exposing functionality, differentiating between what will be the public interface of an object and its internal implementation. It is at essence a form of data protection, defining boundaries within a given application in order to protect unwanted access or modification of the data. In Ruby, this is achieved with the method access control, differentiating between the 'public', 'private' and 'protected' categories. It is a good practice to keep as fewer public methods as possible, only those necessary properties and methods to the well-functioning of the program; this allows makes it less prone to errors and allows us to think in a higher level of abstraction.

### Collaborator object:
In Ruby, every object has its own state, and we can keep track of that state thanks of the instance variables. Each instance variable can be assigned to any object, not only integers or strings, but entire collections or data structures. Objects that are stored as the object state, its instance variables assigned to them, are called collaborator objects, as they 'collaborate' with the classes they work in conjunction, representing connections between various actors in the program.
Although technically every object associated to a particular object’s instance variable is a collaborator object, usually they are custom objects we have defined in the program, not the built-in types. This allows us to modularize and coordinate better the ensemble of objects, and achieve new levels of abstraction in the language.

### Equivalence and equality:
Ruby provides some operator-like methods to check for equivalence and equality of objects:
- `==`: The original version of this method in defined in `BasicObject` class, class parent of every class in Ruby. With the same implementation by default as `equal?`, it returns true if both operands are in fact the same object. However, this method is normally overridden in the basic built-in classes like `String`, `Integer` or `Array`, to check for their own version of equivalence. Also, we need to redefine it if we need to compare to custom objects.
- `equal?`: returns true if both operands are the same object. Contrary to `==`, this methods shouldn’t be overridden by subclasses.
- `object_id`: returns a unique identifying integer of the object. Can be used to check equality, as no two active objects will have the same id.
- `===`: By default with the same behavior as `==`, it is typically overridden by descendants to provide meaningful semantics in `case` statements.
- `eql?`: returns true if both objects compared refer to the same hash key, rarely used explicitly.

### Fake operators:
In Ruby, many method calls are designed to look like the use of operators, making this language more appealing and easier to read, but often more difficult to understand what is happening under the hood. One advantage of this is that we can redefine and override this fake operator methods to implement our own desired behaviors to them; however, it’s important to follow the conventions established within the Ruby standard library and tradition.

### Spike:
A spike is like the rough draft of a program; an initial exploration of the problem we want to solve, in which we apply an outline of the OO design we want to follow. This is usually done by, first, writing a quick description of the program; second, extracting the nouns into classes, verbs into methods, and maybe adjectives into modules; and third, organizing these elements into a very light version of our program that will allow us to familiarize with its implementations and challenges.

