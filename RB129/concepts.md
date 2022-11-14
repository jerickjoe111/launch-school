### What is OOP and why OOP:

Object Oriented Programming is a paradigm that organizes a program in classes and instances of that classes. Each instance inherits behaviors and encapsulates a state, and the programmer orchestrates the ensemble of actors in the program, objects, to interact with each other in order to achieve the desired results. The classic four core principles of OOP are: abstraction, encapsulation, polymorphism, and inheritance.

OOP allows us to modularize parts of the program, encapsulating behaviors, to avoid the ripple effect of pure functional approaches. OOP means different blocks acting in orchestration, instead of a sea of interdependent functions, so it provides a higher level of abstraction and a new way of thinking about design, and helps to create more complex and sophisticated programs. Besides that, this paradigm makes for a  more easily maintainable code, and a chance to apply different philosophies, values and priorities, for example, when implementing models of hierarchies and dependencies more faithful to the real world.

### Classes:
Classes are the outlines or blueprints for objects—instances of classes—, that define their attributes and behaviors. The attributes represent the state of the object, the data and information associated with the particular object, and the behaviors represent the methods that the object will be capable of execute.
We can define our own custom classes with the syntax `class…end`, and we name them using constants in CamelCase. Inside them, we can define class variables, class methods, class instance variables, instance methods and constants; we can also _mix in_ modules —extra collections of functionalities—, and control the access to methods via _access modifiers_.

### Objects:
In Ruby, we can say that everything that has a value can be considered an object, and every object is an instance of a class. Each instance of the same class has a set of shared behaviors, defined by the class, but also holds its own `stash` of data and information called the object _state_. We define instance variables in order to keep track of the state, and we define instance methods to communicate with other objects, and to access and/or modify the object state, which means in practice access to its instance variables. 

Objects can be created from classes calling the `::new` class method on the class, a process called _instantiation_, which will trigger an instance constructor method `#initialize`, if defined in the class,  called upon the newly created instance. This is usually used to initialize the instance variables we will need in the instances.

### Instance variables:
The instance variables are defined with an `@` at the beginning of their name; they keep track of the particular object state, and are scoped at the object level. This means that, although other instances of the same class can’t access them, these variables are available to any instance method in the class, even if they were initialized in other instance method or weren’t passed in as arguments.  

The instance variables can be assigned to any value or object, even other instances of custom classes we have created—in this case, the objects assigned to them are called collaborators. Contrary to local variables, if we try to retrieve the value of an uninitialized instance variable, an exception won’t be raised, but they will act as referencing a value of `nil`. 

This means that: first, in order to initialize them, we have to call the method in which this happens — usually the `initialize` instance method, called upon instantiation—; and second, that instance variables and their values are not inherited: we have to initialize them first at the instance level. So, in order to initialize instance variables, the object needs access to the methods that do so. If the object can't access the method, or if the method is overridden, the instance variable will never be initialized, and will act as referring to the `nil` value.


### Class variables:
The class variables are defined with two `@@` at the beginning of their name, and they are scoped at the class-hierarchy level, which means that they provide a storage mechanism shared between a class object and instances of that class, not visible to any other object. They are also shared throughout the hierarchy, that is, by its descendant classes and their instances, which makes class variables leaky, as too many objects can get hold of them: there is just one copy of the class variable shared among all its holders. Only class variables allow us to share state between objects.
They don’t need to be initialized explicitly if they are defined in the class, as the class variables are loaded when the class is evaluated by Ruby.

### Constants:
The name of every constant begins with a capital letter and are assigned to values as we do with variables. They can be reassigned, but Ruby will raise a warning: this is not considered a good practice. A constant defined in a class can be referred to from inside the class instance or class methods. 
Constants have _lexical scope_, which means that where the constant definition is determines its availability. So, when Ruby tries to resolve them, it searches 'lexically', meaning, it searches the surrounding structure—lexical scope— of the constant reference. If it fails, Ruby then traverses up the inheritance chain of that surrounding structure. And if this fails too, it will look up in the top—`main`— level.
It’s also possible to refer to a constant from outside the class definition entirely, using a special constant lookup notation `::`, for example when it is in an unrelated class.

### Instance methods:
Instance methods are defined within a class to be available to every instance of that class. They have access to instance variables: methods that involve them can have different output based on the particular state of the object, but methods that don’t involve instance variables will have the same output across all the instances of the same class. 

Methods that are used to retrieve or reset the value of the instance variables are called _accessor_ methods: _getters_ if they retrieve, _setters_ if they modify the instance variables’ assigned value. It’s stablished good practice to name them with the same name as the instance variable they retrieve or modify; Ruby provide us with the `attr_*` set of methods to write them automatically.

### Getter:
An instance method used to retrieve the value of an instance variable. It is better to call a _getter_ than to refer to the instance variable directly, as it provides more flexibility to the code, makes it more easily maintainable (changes need only to be made where the method is defined), and allows for the implementation of needed security and/or data validation.
We can call the _getter_ inside any method without an explicit caller object: the object on which we call the method is implicitly the default or current object, referred to by `self`.

### Setter:
An instance method to modify the attribute of an object; i.e., reassign an instance variable. We can add a `=` at the end of the method name to take advantage of Ruby’s syntactic sugar to make the method call look like an ordinary assignment operation. However, when calling this method inside the class, we have to provide an explicit `self` as a caller, in order to disambiguate from a local variable assignment.
It's important to remember that setter method always return the value that is passed in as an argument, regardless if it was mutated or not, even if we try to force it otherwise.

### Class method:
The method that we call directly on the class object itself, not on any of its instances. Defined with a `self.*` inside the class definition, we used them to provide functionality that belongs to the class object, not to its instances.


### Module: 
Like classes, modules are collections of methods and constants, but unlike them, modules don’t have instances. Instead, we specify that we want to add the functionality of a particular module to that of a class, by using `include` keyword in the class. A module included in this manner is sometimes referred to as a 'mix-in', and the result is that instances of the class have access to the instance methods defined in the module. In Ruby, a class can only have a single superclass (principle of single inheritance), but it can include as many modules as needed.
Classes are usually named with nouns, but modules are named with adjectives to reinforce the notion that modules define a behavior or functionality collection.
Modules can also house _module methods_, methods defined with `self.*` that we call directly on the module object, representing behaviors that seem to be out of place in any other structure in our program.

### Namespacing:
We can nest class definitions inside a module definition. Nested module/class chains are sometimes used to create separate 'namespaces', hence this name, for classes, modules and methods. This technique can help if two classes have a similar name but aren’t the same class: the two classes won’t conflict with each other because each one is nested in its own namespace.

### Self:
At every point when the program is running, there’s one and only one default or current object, accessible by the keyword `self`. Whatever object gets to be `self`, depends on the context in which we reference it. It can change with the scope, but not always, as they are different concepts:
Local scope changes often, as so does the identity of `self`. Sometimes, but only sometimes, they vary together. When we start a definition block —method, class, module—, we start a new local scope, and we also create a block of code with a particular `self`. But local scope and `self` don’t operate entirely in parallel: they are not the same thing. 

- At the top level, outside any code block, refers to `main`, an instance of the `Object` class.
- At the class definition, refers to the class object that is being defined.
- At the module definition, refers to the module object that is being defined.
- Inside an instance method definition, inside a class, refers to the instance of that class on which we call this method.
- Inside an instance method definition, inside a module, it will refer to the instance of the class that includes the module, or descendant class.


### Method lookup path:
We can understand a method call on an object as a process in which a 'message' is sent to an object via the dot operator. When an object receives the message, the intended result is the execution of a method with the same name as the message. In order to resolve the message into a method, an object will look for the method in a certain order, called the _method lookup path_:

1.	Its class
2.	Modules included in its class, in reverse order of inclusion
3.	Its class’s superclass
4.	Modules included in its superclass, in reverse order of inclusion

And so on, until the message is traced this way up to `Object`, its mix-in `Kernel`, and `BasicObject`. If still hasn’t found the method, an exception will be raised.

### Super:
Inside the body of a method definition, you can use the `super` keyword to jump up to the next-highest definition in the method lookup path of the method being currently executed. It is usually used in the `initialize` instance method body, which allow us to extract more generalized code in a superclass, adding specialized code in the subclass’s instantiation. There are three modes to call `super`:

-	With no argument list: `super` will automatically forward the arguments that were passed to the method that contains it.
-	With specific arguments: `super` will send exactly those arguments.
-	With an empty list, `super()`: no methods will be forwarded, even those passed to the method from which is called.

## Method access control:
Ruby provides a way to restrict or allow access to certain methods defined in a class thanks to the access modifiers `public`, `private`, and `protected`, implementing what is called the method access control:

- `public` is the option by default (all methods are public by default). This means that any object throughout the program can call these methods as long as they know the method name. The set of a class public methods comprises the _class interface_—how other classes and objects interact with this class and its instances.
- To make methods 'private' we have to explicitly declare so, defining them after the `private` keyword. Private means that the methods are only accessible from other methods within the class, and not from outside the class definition by other objects. (private setter methods have to be called with the explicit `self`). In other words, private methods can only be called with an explicit caller `self`, precisely when `self` is an instance of the class that defines the method.
- Methods defined after `protected` cannot be invoked outside the class, like under `private`. However, contrary to the protected methods, they are accessible to other instances of the same class that defines them, or descendant classes of that class. They are usually used to compare objects of a particular class.
Subclasses inherit the method access rules of their superclasses, unless they set up new rules, which will take precedence.

### Inheritance:
Inheritance is a kind of downward-chaining relationship between two classes—the superclass and the subclass—, by which one class ‘inherits’ from another, and the instances of the subclass acquire the behaviors—the methods— defined in the superclass.

Inheritance allows us to define _parent_ (superclasses) classes with general functionality and great reusability, and _child_ (subclasses) classes for more fine-tuned and specific behaviors. We can implement inheritance by two ways: class inheritance and interface inheritance:
- via class inheritance; the subclass acquires the behaviors defined in the superclass. For example, we can override any inherited method from a superclass, which means that we redefine a method with the same name in the subclass, thus making it to be earlier in the lookup path, so it will be executed instead of the method with the same name in the superclass. A subclass can only inherit from a single superclass (principle of single inheritance).
- via interface inheritance, which describes when we mix in a module in a class, thus making its functionality available to the subclass, as the module will be now part of the lookup path. We can include as many modules in a class as we want.


### Polymorphism:
Polymorphism refers to the ability of different objects of different types, related or not by inheritance, to respond to a common interface, which means methods with the same name. This can be achieved with or without inheritance:
- Polymorphism with inheritance, for example, when a subclass inherits a more generic method from a superclass, or when a subclass overrides a method inherited from the superclass, to implement a more specific behavior. Also, when two different classes mix in the same module, thus making them to respond to the same functionality added by the module.
- Polymorphism without inheritance or duck-typing: when different unrelated types of objects respond to the same method name and number of arguments—a common interface—, but the implementation of each of these methods is different, with no relation of inheritance among them, but designed to work polymorphically.

### Encapsulation:
Encapsulation refers to the compartmentalization of object behavior and properties; hiding and exposing functionality, differentiating between what will be the public interface of an object and its internal implementation. It is at essence a form of data protection, defining boundaries within a given application in order to protect unwanted access or modification of the data. In Ruby, this is achieved with the method access control, differentiating between the 'public', 'private' and 'protected' categories. Encapsulation can also refer to the state of an object, which is separated from the state of any other object.
It is a good practice to keep as fewer public methods as possible, only those necessary properties and methods to the well-functioning of the program; this allows makes it less prone to errors, less dependencies, and to think in a higher level of abstraction.

## Abstraction
We can understand abstraction as the lowering of the resolution of our program: if before we were seeing a sea of pixels of different colors, with a higher level of abstraction we instead see large chunks of pixels, grouped together according to a common task or set of characteristics. We don’t care  about the exact details inside those chunks, we only want to know that the large chunks work as intended, and that now we only have to keep attention on how these chunks can work together, knowing beforehand that they’ll do what is asked from them. 
With this, we can say that we have abstracted the pixels into large chunks of functionality, hidden the inner workings of the pixels in favor of an easier way to coordinate them all: in other words, we have separated the implementation from the interface. This is the essence of abstraction. With each new layer of abstraction, we don’t have think about how a method or structure is implemented, only that it will do its work for us exactly as we want to, thus allowing us to focus and think better about our program. This, in the end, will result in a much more organized code, and much easier to maintain and to think about.

### Collaborator object:
In Ruby, every object has its own state, and we can keep track of that state thanks of the instance variables. Each instance variable can be assigned to any object, not only integers or strings, but entire collections or data structures. Objects that are stored as the object state, its instance variables assigned to them, are called collaborator objects, as they 'collaborate' with the classes they work in conjunction, representing connections between various actors in the program.
Although technically every object associated to a particular object’s instance variable is a collaborator object, usually they are custom objects we have defined in the program, not the built-in types. This allows us to modularize and coordinate better the ensemble of objects, and achieve new levels of abstraction in the language.

### Equivalence and equality:
Ruby provides some operator-like methods to check for equivalence and equality of objects:
- `==`: The original version of this method in defined in `BasicObject` class, class parent of every class in Ruby. With the same implementation by default as `equal?`, it returns `true` if both operands are in fact the same object. However, this method is normally overridden in the basic built-in classes like `String`, `Integer` or `Array`, to check for their own version of equivalence. Also, we need to redefine it if we need to compare to custom objects with `==`.
- `equal?`: returns true if both operands are the same object. Contrary to `==`, this method shouldn’t be overridden by subclasses.
- `object_id`: returns a unique identifying integer of the object. Can be used to check equality, as no two active objects will have the same id in the program.
- `===`: By default with the same behavior as `==`, it is typically overridden by descendants to provide meaningful semantics in `case` statements.
- `eql?`: returns true if both objects compared refer to the same hash key, rarely used explicitly.

### Fake operators:
In Ruby, many method calls are designed to look like the use of operators —Ruby is famous for its generous syntactic sugar—, making this language more appealing and easier to read, but often more difficult to understand what is happening under the hood. One advantage of this is that we can redefine and override this fake operator methods to implement our own desired behaviors to them; however, it’s important to follow the conventions established within the Ruby standard library and tradition.

### Spike:
A spike is like the rough draft of a program, its _skeleton_; an initial exploration of the problem we want to solve, in which we apply an outline of the OO design we want to follow. This is usually done by, first, writing a quick description of the program; second, extracting the nouns into classes, verbs into methods, and maybe adjectives into modules; and third, organizing these elements into a very light version of our program that will allow us to familiarize with its implementations and challenges.
