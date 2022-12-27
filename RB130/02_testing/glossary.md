## Assertion

_Assertion_ refers to the step of a test in which we can confirm a determined situation/context/implementation produces the expected output/results. In the assertion, we compare an expected value with the actual value that the part of the code we want to test produces. The assertion compares both values, and passes if they are equal, and fails if they are not (our code does not results in the expected value)

This comparison can be made in different ways, depending on the type of assertion:

Common Assertions:

|Assertion|Description|
|---------|-----------|
|`assert(test)	`|Passes if `test` is truthy.|
|`assert_equal(exp, act)`|	Passes if `exp == act` is `true`.|
|`assert_nil(obj)`|	Passes if `obj` is `nil`.|
|`assert_raises(*exp) { ... }`|	Passes if the code in the block raises an exception of the `*exp` type.|
|`assert_instance_of(cls, obj)`|	Passes if `obj` is an instance of `cls`.|
|`assert_includes(collection, obj)`|	Passes if `collection` includes `obj`.|

There are also _refutations_, not very widely used, with the opposite effect: they refute rather than assert. Every assertion has a corresponding refutation. They confirm that these two results are _not_ in line with each other. Where as assertions _assert_ (prove an expression to be true), refutations _refute_. They prove an expression to be _false_. Every assertion has a corresponding refutation. The corresponding refutation takes the exact same arguments as the assertion, except looks for a false of falsey result.

## Code Coverage

_Code coverage_ it's a way to express how much of the code in the program is actually tested in the test suite. Bases it's percentage on _all_ code, including both public and private interfaces.

A comple code coverage of 100%  is achieved when every method, including private methods, are tested in the testing suite Further, while you _can_ always get up to 100% code coverage it's not always necessary. The more _fault tolerant_ your code should be, the higher the necessary coverage.

Code coverage should be understood as a tool within other tools to gauge code quality.

The `simplecov` Ruby gem is a code coverage testing tool. It has to be included at the top of your test suit file:

```ruby
require 'simplecov'
SimpleCov.start
```
This will generate a file within a `coverage` folder with our code coverage data.

## DSL

_DSL_ or _Domain Specific Language_ is a high level language built within another language used to solve problems within a specific domain: an specialized application within another language. Examples of this are the expectation-style syntax in Minitest, the Ruby testing tool RSpec, or even the framework Rails.

## Equivalence and equality

Different types of assertion use different methods to test for equality:

`assert_equal` tests equivalence or _value equality_: it uses the `#==` method defined for the object's class to check if two objects have the same value.

`assert_same` tests equality or  _object equality_: it checks if two objects are indeed the same object in memory. Two different objects with equivalent values will not be considered equal in this case.

Because `assert_equal` uses the `#==` method to determine value equivalence, if the objects being tested are custom defined objects, we need to ensure that a custom `#==` has been implemented for the objects in their class; remember that the inherited `BasicObject#==` method checks for _object equality_, having the same effect that `assert_same`, and not equivalence, _value equality_, which is what we want.

## Minitest

Minitest is a Ruby gem that serves as a tool to test our programs: it is the default testing library that comes with Ruby, and an easy and simple way to write automated tests. Unlike RSpec, Minitest does not rely on a DSL, allowing us to write tests in Ruby syntax.

There are two styles in Minitest:

- _assertion-style_ uses regular Ruby code, more familiar for beginner developers. It is used by writing a series of methods beginning with `test_` that will include specific assertions to test certain parts of our code.

- _expectation-style_ relies on a DSL similar to the RSpec testing style. It groups tests by `describe` blocks, writing individual tests with an `it` method, using expectation matchers instead of assertions.

A Minitest suit can have four possible outputs for each test:

- `S` if the test was skipped
- `E` if the program raised and error and stopped execution
- `F` if the test failed
- `.` if the test passed successfully

## Regression

Refers to having to go back our steps to fix the bugs caused by the ripple effect after adding a new implementation. These changes can include adding new features/functionality or any kind of refactoring.

## SEAT Approach

This refers to a strategy commonly used for writing tests.

1. S - Set up necessary objects

    Instead of having to set up the necessary objects and process for each test, we can extract these repeated steps into a method that gets executed before the running of each test. This is acheived in Minitest by defining a `setup` instance method inside the test class,  which will automatically run before each of the `test_*` methods. By assigning testing objects to an instance variables, we can make them available throughout the rest of the test methods within the testing class.

2. E - Execute the code against the object to test

    The code that you need to execute in order to test it gets runs. Sometimes, code that needs to be executed is simple enough to run within the assertion itself, but others it may require multiple steps, and it is better to run it outside of the assertion and save the result in a local variable for comparison.

3. A - Assert the results of the execution

    The assertion (or refutation) is executed to test the results of our executed code against the expected results, to determine if our program behaves as we want in the context of the situation we want to test. 

4. T - Tear down and clean up lingering artifacts

    This refers to the code that gets run after the execution of each test in our testing class. In Minitest we can define this in a `teardown` method. Actions included here can be: cleaning up and deleting any files, logging results, or closing database connections.

## Skip

The `skip` keyword is a keyword we can use at the beginning of a Minitest test. It tells the testing program to skip this test when it is encountered. This will be reported in the output of minitest with an `S`. We can pass a string into `skip` if we want to display a custom message.

## Test Suite

A test suite is the entire set of tests that comes with a program. This can include any number of tests: unit tests, integration tests, regression tests, etc. A test suit is comprised of all the tests involved with a project.

## Unit Testing

**Unit Testing** = automated tests that are designed and run in order to ensure that the smallest possible "unit" of a program is functioning as intended. In OOP, this "unit" usually consists of a singe interface, as in that of a class.

The goal of unit testing is to ensure that each isolated piece of a program is functioning correctly.By using individual assertions, it provides a written contract that the interface in question must satisfy. We can build "units" based on this contract. Once all the tests pass, we consider the interface in question to be complete.

Further, we can run these tests each time a change is made, to ensure that the unit in question continually fulfills its obligations and no regression occurs.