Classes
•	Blueprints for objects (instances)
•	Named with nouns
•	define the attributes (state) + behaviors (methods)
•	superclass > subclass
•	control access to methods
•	define instance methods, class variables, class methods, class instance variables, constants
•	Can include as many modules as needed

Objects
•	An instance of a class
•	set of shared behaviors (defined by the class)
•	individual state
•	instance variables (keep track of the state)
•	instance methods (communicate with other objects, access to instance variables)
•	instantiation via ::new on the class; construction/i.v. initialization via #initialize

Instance variables
•	@ at the beginning
•	keep track of the object state
•	scoped at the object level (any method in the class can access them)
•	can be assigned to collaborators
•	not inherited
•	the instance needs access to the methods that initialize them
•	refer to the `nil` object if not initialized (won’t raise an exception)

Class variables
•	@@ at the beginning
•	scoped at the class-hierarchy level
•	one copy shared by class object and its instances, and descendant classes and instances
•	leaky + dangerous (class instance variables are better)
•	don’t need to be initialized explicitly if defined at the class level (pre-loaded on evaluation)

Constants
•	first letter in uppercase
•	can be reassigned (but warning)
•	lexical scope: where it’s defined determined its availability
•	constant lookup path (searches lexically): surrounding structure of the reference, hierarchy of the reference structure, top level.
•	Especial lookup notation `::` to refer constants from outside the defining structure.

Instance methods
•	Defined within a class
•	Available to every instance of the class (can have different outputs if they involve the state)
•	Accessor methods: getters (retrieve value of instance variables), setter (modify it).
•	Should be named with the same name as the instance variable they access to.
•	Autowriting: `attr_*` set of methods

Getters
•	Instance method that retrieves the value of an instance variable.
•	It is better to call getters than to refer to the instance variable directly (easier maintenance, security)

Setters
•	Instance method that modifies an instance variable (reassigns, modifies the object referenced)
•	We can add a `=` at the end of the name to take advantage of Ruby’s sugar.
•	ALWAYS returns what it was passed in as argument!
•	It is better to call a setter than to refer to the instance variable directly.

Class methods
•	Defined with `self.*`
•	Called on the class object itself, not on its instances.

Module
•	Extra collections of methods and constants.
•	Named with adjectives (reinforce notion of modules as behaviors/capabilities vs. classes)
•	Can’t be instantiated
•	Provide access to methods defined in module to classes, instances and descendants.
•	A class can include as many modules as needed
•	Can house module methods (defined inside them with `self_*`
•	Also used for namespacing
•	Classes can be extended by `extend` to add methods as class methods)

Namespacing
•	Modules can nest other classes and modules (create namespaces)
•	This avoids the risk of conflicting similar or equal names.

`self`
•	A keyword reference to the default or current object.
•	Only one self at any point of the program
•	Can change with scope but not always
•	five important levels: top, class, module, class method, instance method in class/in module

Method lookup path
•	Order in which an object will look for a method with the same name as message received:
o	Class, modules in reverse order of inclusion, superclass, modules in… etc.
•	Reaches Object class, Kernel Module, and BasicObject.
•	Two possible outcomes: a method is found/an exception is raised.

`super`
•	A keyword that jumps up to the next highest definition in the method lookup path of the method currently executed.
•	Three modes to forward arguments: no arguments, with argument list, empty list.

Method access control
•	Access modifiers: public, private, protected methods
•	With argument list (symbols) or without arguments (every following defined method)
o	Public: by default; accessible from anywhere in the program
o	Private: only on self, when self is an instance of the class that defines the method
o	Protected: like private, but can be called from within the class on object of the same class or descendant classes.
•	Method access rules are inherited, unless overridden in subclasses.

Inheritance
•	Superclass-subclass relationship, by which instances of the subclass acquire the behaviors defined in the superclass.
•	Less code, more efficient, reusability, generic -> specific dynamism.
•	Two ways:
o	class inheritance: superclass to class inheritance; principle of single inheritance.
	('is a' relationships)
o	interface inheritance: module functionality included in superclass is available to subclasses; any number of modules can be included (shared abilities/functionality)

Polymorphism
•	The ability of different objects of different types, related or not by inheritance, to respond to a common interface. 
•	Flexibility, abstraction, easier to read and to think about.
•	Two ways:
o	with inheritance: (overriding generic methods in subclasses for specific behaviors, same module included in different classes)
o	without inheritance (duck typing): method with the same (and number of arguments) in different unrelated classes, with different implementations, designed to be used polymorphically.

Encapsulation
•	Compartmentalization of object behavior and properties; hiding and exposing data and/or functionality.
•	A form of data protection, less dependencies, more abstraction.
•	Each object encapsulates a state
•	Control access to methods (differentiating between public interface and inner implementations): access modifiers.

Abstraction
•	Perception: lower the resolution of our perspective, in order to achieve more efficiency and more complex structures, and to better orchestrate the actors in our program.
•	See multiple and complex structures as units or chunks of functionality that work as intended.

Collaborator objects
•	Instance of a custom class to which an instance variable of an object is assigned to.
•	Custom objects stored as the object state: better orchestration in our program, more efficiency in more complex structures.

Equality and equivalence
•	Equality: same object identity (reference to the same location of memory)
•	Equivalence: same value, or same content in object state
•	Ruby provides ways to check for equality/equivalence of objects:
o	`==`: Originally defined in `BasicObject`, checks equality of operands. Usually redefined in Built-In and custom classes.
o	`equal?: Same implementation as `==` by default. Shouldn’t be redefined.
o	`object_id`: Returns a unique identifier of an object during the program execution.
o	`eql?`: used for hash key correspondence of both objects, not used often in isolation (same value + same class)
o	`===`: By default with the same behavior as `==`, it is usually redefined to provide meaningful semantics in `case` statements. (Called on `when` clauses, passing `case`)

Fake operators
•	Ruby provides a number of operator-like methods so we can take advantage of its generous syntactic sugar. 
•	We can redefine these methods to our own advantage, but we should follow convention and tradition for each fake operator.

Spike
•	An initial exploration of the problem we want to solve, in which we apply an outline of the OO design we want to follow. 
•	This is usually done by: first, writing a quick description of the program; second, extracting the nouns into classes, verbs into methods, and maybe adjectives into modules; and third, organizing these elements into a very light version of our program
