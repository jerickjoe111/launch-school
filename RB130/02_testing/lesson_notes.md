requirements/classes

possible outputs in testing

SEAT approach

assertions / refutation (LS list and some from documentation)

Minitest:

`setup` and `teardown`

## Why testing?

For beginners, write tests to prevent regression -- that's it! That's the only benefit of testing we'll focus on for now. We want to write tests so that when we make changes in our code, we don't have to manually verify everything still works.

## Minitest

Though many people use RSpec, Minitest is Ruby's default testing library and is part of Ruby's standard library. More specifically, it's a bundled gem, which means Minitest is shipped with the default Ruby installation, but is maintained outside the Ruby core team and can be uninstalled if necessary.

From a purely functional standpoint, Minitest can do everything RSpec can. However, Minitest provides a simpler and more straightforward syntax. RSpec bends over backwards to allow developers to write code that reads like natural English, but at the cost of simplicity. RSpec is what we call a Domain Specific Language; it's a DSL for writing tests. Minitest can also use a DSL, but it can also be used in a way that reads like ordinary Ruby code without a lot of magical syntax. This simpler style isn't a DSL, it's just Ruby.

Vocabulary

In the world of testing, a whole new vocabulary is necessary to talk about the new concepts. There is a lot of jargon when working with tests, but for now, we'll just focus on a few terms below.

- Test Suite: this is the entire set of tests that accompanies your program or application. You can think of this as all the tests for a project.
- Test: this describes a situation or context in which tests are run. For example, this test is about making sure you get an error message after trying to log in with the wrong password. A test can contain multiple assertions.
- Assertion: this is the actual verification step to confirm that the data returned by your program or application is indeed what is expected. You make one or more assertions within a test.

Basic test suit file content:

```ruby
require 'minitest/autorun'

require_relative 'car'

class CarTest < MiniTest::Test
  def test_wheels
    car = Car.new
    assert_equal(4, car.wheels)
  end
end
```

On line 1 is require 'minitest/autorun', which loads all the necessary files from the minitest gem. That's all we need to use Minitest. Next, on line 3 we require the file that we're testing, car.rb, which contains the Car class. We use require_relative to specify the file name from the current file's directory. Now when we make references to the Car class, Ruby knows where to look for it.

Finally, line 5 is where we create our test class. Note that this class must subclass MiniTest::Test. This will allow our test class to inherit all the necessary methods for writing tests.

Within our test class, CarTest, we can write tests by creating an instance method that starts with test_. Through this naming convention, Minitest will know that these methods are individual tests that need to be run. Within each test (or instance method that starts with "test_"), we will need to make some assertions. These assertions are what we are trying to verify. Before we make any assertions, however, we have to first set up the appropriate data or objects to make assertions against. 

There are many types of assertions, but for now, just focus on assert_equal. Since we are inside an instance method, you can guess that assert_equal is an inherited instance method from somewhere up the hierarchy. assert_equal takes two parameters: the first is the expected value, and the second is the test or actual value. If there's a discrepancy, assert_equal will save the error and Minitest will report that error to you at the end of the test run.

It's sometimes useful to have multiple assertions within one test (ie, instance method that starts with "test_")

Reading test output

```
Run options: --seed 62238

# Running:

CarTest .

Finished in 0.001097s, 911.3428 runs/s, 911.3428 assertions/s.

1 runs, 1 assertions, 0 failures, 0 errors, 0 skips
```

There are many options in Minitest, including various formatting options, but by default the output looks like the above. The first "seed" tells Minitest what order the tests were run in. In our example, we only have 1 test, but most test suites have many tests that are run in random order. The "seed" is how you tell Minitest to run the entire test suite in a particular order. This is rarely used, but is sometimes helpful when you have an especially tricky bug that only comes up when certain specific situations come up.

The next important thing to notice is the dot. There's only 1 here, so it looks like an inconsequential period, but it's very important. That means the test was run and nothing went wrong. If you skip a test with the "skip" keyword, it'll say "S". If you have a failure, it'll say "F". Pay attention to that to see if you have a failing test.

Expectation syntax

Thus far, we've been using the assertion or assert-style syntax. Minitest also has a completely different syntax called expectation or spec-style syntax.

In expectation style, tests are grouped into describe blocks, and individual tests are written with the it method. We no longer use assertions, and instead use expectation matchers. That sounds crazy, but when written out, it reads very nice. 

```ruby
require 'minitest/autorun'

require_relative 'car'

describe 'Car#wheels' do
  it 'has 4 wheels' do
    car = Car.new
    _(car.wheels).must_equal 4           # this is the expectation
  end
end
```
There's a lot of magic going on, and we won't spend too much time deciphering it. Note that this DSL doesn't look like "normal" Ruby code, and where did that must_equal method come from? Don't worry about all that for now.

Summary

Getting started with Minitest is very simple. In this lesson, you should have gotten a quick taste of how to run your first test using Minitest. Here are the other things you learned:

- Minitest is an intuitive test library. It comes installed with Ruby.
- Using Minitest is very easy, and you shouldn't be afraid to play around with it.
- Create a test file
- Create a test class by subclassing MiniTest::Test.
- Create a test by creating an instance method that starts with test_.
- Create assertions with assert_equal, and pass it the expected value and the actual value.
- Colorize Minitest output with minitest-reporters
- You can skip tests with skip.
- Minitest comes in two syntax flavors: assertion style and expectation style. The latter is to appease RSpec users, but the former is far more intuitive for beginning Ruby developers.

## Assertions

In the previous assignment, we saw how to use assert_equal to make an assertion about the equality of two objects. In the example, we wanted to assert that the number of wheels on car was equal to 4, because we're expecting all new Car objects to have 4 wheels. assert_equal is the most common assertion, and we can get pretty far only using that.

But there are times when we need to make different types of assertions. For example, besides equality, sometimes we want to assert that a specific error is raised, or that something is printed out to standard out, or an object must be an object of a specific class, or that something must be nil, or that it must not be nil, etc. Minitest can support virtually every kind of assertion you'd want to make. We won't cover it all, but we'll list a few of the more popular ones. If you ever feel like there should be an assertion for something, make sure to look up the full list of assertions to see if yours is in there.

|Assertion|Description|
|---------|-----------|
|`assert(test)	`|Fails unless test is truthy.|
|`assert_equal(exp, act)`|	Fails unless exp == act.|
|`assert_nil(obj)`|	Fails unless obj is nil.|
|`assert_raises(*exp) { ... }`|	Fails unless block raises one of *exp.|
|`assert_instance_of(cls, obj)`|	Fails unless obj is an instance of cls.|
|`assert_includes(collection, obj)`|	Fails unless collection includes obj.|

Refutations

We won't spend too much talking about refutations, except to say that they are the opposite of assertions. That is, they refute rather than assert. Every assertion has a corresponding refutation. For example, assert's opposite is refute. refute passes if the object you pass to it is falsy. Refutations all take the same arguments, except it's doing a refutation. And yes, there is a refute_equal, refute_nil, refute_includes, etc.

Again, we won't get into refutations because they're rarely used, except for rare circumstances (or if you're on a project where the team lead has chosen this style).

## SEAT Approach

As you read the tests from previous lessons, you might have noticed that we have to set up the car object within each test in order to perform some assertion on it. This seems a little redundant; it would be more optimal to do some set up once outside of each test, then just run the assertions you need. This may seem like a minor and unnecessary savings in lines of code (it may even increase the lines of code), but the savings add up if you have a lot of tests or if the set up process requires a lot of code.

In the previous assignments, we've been quickly diving down into the tests and assertions, but in larger projects, there are usually 4 steps to writing a test:

- Set up the necessary objects.
- Execute the code against the object we're testing.
- Assert that the executed code did the right thing.
- Tear down and clean up any lingering artifacts.

This is the SEAT approach. In our simple tests, we've been doing steps 2 and 3, and we haven't had the need to set up anything or perform any clean up or tear down.

```ruby
require 'minitest/autorun'

require_relative 'car'

class CarTest < MiniTest::Test
  def setup
    @car = Car.new
  end

  def test_car_exists
    assert(@car)
  end

  def test_wheels
    assert_equal(4, @car.wheels)
  end

  def teardown
    # Some code
  end
end
```

The setup method will be called before running each test, and the teardown method (which we don't have) will be called after running each test. In our case, we don't have any tear down activity, so it's not necessary. In some cases, we will need a tear down for cleaning up files or logging some information, or closing database connections.

In the simplest cases, we won't need either set up or tear down, but just keep in mind that there are 4 steps to running any test, and it is SEAT. At the minimum, you'll need EA, even if the E is just a simple object instantiation.

## Testing Equality

We already said that assert_equal is one of the most useful assertions, but how is it testing for equality? Recall from before that equality in Ruby (or any programming language) is not a straight-forward affair. Are we talking object equality? Or value equality? Or both?

When we use assert_equal, we are testing for value equality. Specifically, we're invoking the == method on the object. If we're looking for more strict object equality, then we need to use the assert_same assertion.

Let's take a look at an example. We'll just create a temporary test file to experiment with.

Equality with a custom class

Because the Ruby core library classes all implement sensible == to test for value equality, we can get away with using assert_equal on strings, arrays, hashes, etc. But what happens if we try to use assert_equal on our own custom classes?

The answer is we have to tell Minitest how to compare those objects by implementing our own == method. Let's use our familiar Car class, except we'll add a == method.

## Code Coverage

When writing tests, we want to get an idea of code coverage, or how much of our actual program code is tested by a test suite. You can see from our TodoList tests that all of our public methods are covered. If we are measuring code coverage based on testing the public methods, we could say that we have achieved 100% code coverage. Note that even though we are only testing public code, code coverage is based on all of your code, both public and private. Also, this doesn't mean every edge case is considered, or that even our program is working correctly. It only means that we have some tests in place for every method. There are other ways to measure code coverage too besides looking at public methods. For example, more sophisticated tools can help with ensuring that all branching logic is tested. While not foolproof, code coverage is one metric that you can use to gauge code quality.

There are many code coverage tools, but we'll use a very simple to use one called simplecov.

The code coverage should get closer to 100%. It's not always necessary to get to 100% coverage, but the percentage should depend on the type of project you work on. The more fault tolerant it has to be, the higher the test coverage.

Summary

-Minitest is Ruby's default testing library. It comes installed with Ruby.
-Minitest tests come in 2 flavors: assert-style and spec-style. Unless you really like RSpec, use assert-style.
-A test suite contains many tests. A test can contain many assertions.
-Use assert_equal liberally, but don't be afraid to look up other assertions when necessary. Remember that assert_equal is for asserting value equality as determined by the == method.
-Use the SEAT approach to writing tests.
-Use code coverage as a metric to gauge test quality. (But not the only metric.)
-Practice writing tests -- it's easy!