## Concept examples


### Closures

```ruby
def will_return_proc
  var_a = 1
  var_b = 2

  Proc.new do
    puts "I come from a different scope: "
    puts var_a
    puts var_b
  end
end

my_proc = will_return_proc()

my_proc.call
```

The `Proc` returned from the method has created a closure around `var_a` and `var_b`; when we call it outside the method definition, from a different scope, we see that the `Proc` still has access to them, apparently breaking the rules for local variables: this is one of the most important things about closures.

```ruby
def count_letters
  counter = -1
  letters = [*('A'..'Z')]

  Proc.new do
    counter += 1
    puts letters[counter]
  end
end

my_proc = count_letters
my_proc.call
my_proc.call

my_proc2 = count_letters
my_proc2.call
```

Here we see that `my_proc` and `my_proc2` can have different outputs: each one retains unique copies of the variables `counter` and `letters` they drag for their corresponding closure creation.

```ruby
  def say_name(proc)
    proc.call
  end

  name = 'Luke'
  a_proc = Proc.new { puts "My name is #{}" }

  name = 'Lucas'

  say_name(a_proc)
```

Here we see that that the closure formed by the `Proc` keeps track of the variables's new value, even if we reassigned it after the closure's creation.

## Blocks in our own methods:

Two main use cases for using blocks in your own methods are:

1. To defer some implementation code to method invocation decision.

   Blocks allow the method user to fine tune the behavior of a method at invocation time, extending its capabilities without altering the method implementation. This gives the method great flexibility, as we can adapt its generic behavior with a code block appropiate to each situation.

```ruby
def compare(string)
  before = string
  after = yield string
      
   puts "Comparing the argument before and after being process by the block: "
   puts "Before: #{before}"
   puts "After: #{after}"
end
      
compare('aloha', &:capitalize)
```

2. Methods that need to perform some 'before' and 'after' operations (_sandwich code_)

   We can implement methods designed to perform a task between two other operations. We can implement the 'before' and 'after' operations, and let the method user to decide what task should be performed between them via a block: that task will be the execution of the code block we provided at invocation time.

```ruby
File.open('some_file.txt') do |file|
  # This method will open the file, pass it to the block as argument,
  # execute the code inside the block, and then
  # close the file for us, instead of having to close it explicitly.
end
```

## Explicit block parameters


