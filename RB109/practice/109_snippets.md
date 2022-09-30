# Code Snippets for RB109 Written Prep

## Variable Scope

Local Scope

```ruby
# What is output when we execute the following code?
def a_method
  puts message
end

message = "hello there!"

puts message
a_method
```

Global Scope

```ruby
# What is output when we execute the following code?
# How does it differ from the example above?
MESSAGE = "hello there!"

def a_method
  puts message
end

puts MESSAGE
a_method
```

Local Scope

```ruby
# What is output when we execute the following code? Explain how and why
def a_method(message)
  puts message
end

message = "hello there!"

puts message
a_method(message)
```

Inner and Outer Scope

```ruby
# What is output when we execute the following code? Explain why
x = "blue"

4.times do
  x = "yellow"
  y = "purple"
end

puts x
puts y
```

What constitutes a block? / Inner Scope

```ruby
# What is output by the following code? Why?
i = 0
while i < 1 do
  a = "abcdefg"
  i += 1
end

loop do
  b = "abcdefg"
  break
end

puts a
puts b
```

Peer blocks create different & discreet inner scopes

```ruby
# What is output by the following code? Why?
2.times do
  a = "pizza"
  b = "spaghetti"
end

2.times do
  a = "pizza"
  puts a
  puts b
end

# if student does well, paste the following and ask what the object_id
# calls will output
2.times do
  a = 'pizza'
  b = 'spaghetti'
  puts a.object_id
end

2.times do
  a = 'pizza'
  puts a.object_id
end
# => ?
# => ?
```

Nested levels of inner and outer scope

```ruby
# What does the following code output? Why?
a = 'hamburger'

1.times do
  b = 'french fries'

  1.times do
    c = 'milkshake'

    puts a
    puts b
    puts c
  end

  puts a
  puts b
  puts c
end

puts a
puts b
puts c
```

Variable Shadowing

```ruby
# What does the following code output? Why?
a = 'poem'

%w(to be or not to be).each do |a|
  a = 'sonnet'
end

puts a
```

```ruby
# What does the following code output? Why?
a = 'string'

[1, 2, 3, 4, 5].each do |a|
  puts a
end

puts a
```

Local variables passed into methods as arguments cannot be altered within the method (unless they are _mutated_).

```ruby
# What does the following code output? Why?
a = 'some words'

def change_string(str)
  str = 'other words'
end

change_string(a)
puts a
```

Blocks within a method

```ruby
# What does the following code output? Why?
def a_method
  a = 'hamburger'

  1.times do
    a = 'actually, just salad please'
    b = 'but a side of fries as well'

    puts a
    puts b
  end

  puts a
  puts b
end

puts a
puts b
```

## Mutating Methods and Object Passing

Mutating Method vs Non-Mutating Method

```ruby
# What is output by the following code? Why?

a = 'string'
b = a.upcase
puts a == b
puts a.object_id == b.object_id

a = 'string'
b = a.upcase!

puts a == b
puts a.object_id == b.object_id
```

Variable Assignment is non-mutating

```ruby
# What is output by the following code? Why?
def make_uppercase(string)
  string = string.upcase
end

a = 'string'

puts make_uppercase(a)
puts a

# if student has trouble understanding use object_id to show what's going on
```

Assignment Operators can also break link between variable and object

```ruby
# What is output by the following code? Why?
def pluralize(string)
  string += 's'
  string
end

a = 'string'
pluralize(a)

puts a
```

Assignment can result in the variable being reassigned to the same reference object, but only if that same object is returned by the expression to the right of the assignment operator.

```ruby
# What is output by the following code? Why?
def proper_noun(string)
  string = string.capitalize!
  string
end

name = 'jane doe'
puts proper_noun(name)
puts name
```

Indexed Assignment is Mutating

```ruby
# What is output by the following code? Why?
def proper_noun(string)
  string[0] = string[0].capitalize
end

name = 'jane'
proper_noun(name)
puts name
```

```ruby
# What is output by the following code? Why?
def adds_one_to(array)
  array[0] += 1
  array
end

zeros = [0, 0, 0]
p adds_one_to(zeros)
p zeros
```

```ruby
# What is output by the following code? Why?
def add_one_to(nums)
  0.upto(nums.length) do |i|
    nums[i] += 1
  end

  nums
end

numbers = [0, 1, 2, 3, 4]

p add_one_to(numbers)
p numbers
```

Mutating Collections via their Elements

```ruby
# What is output by the following code? Why?
array = ['a', 'b', 'c', 'd', 'e']

array.each do |letter|
  letter.upcase!
end

p array
```

Concatenation is mutating (when using `<<`)

```ruby
# What is output by the following code? Why?
def adds_an_s(word)
  word << 's'
  word
end

noun = 'cat'
adds_an_s(noun)
puts noun
```

Mutating methods after the link between variable and object is broken

```ruby
def make_a_sentence(string)
  string = string.capitalize
  string += ' how are you'
  string << '?'
end

word = 'hello'
p make_a_sentence(word)
p word
```

## Object Passing

Pass by Reference

```ruby
def make_uppercase(string)
  string.upcase!
end

a = 'hello'
puts a
puts make_uppercase(a)
puts a
```

Pass by Value

```ruby
def add_emphasis(string)
  string += '!'
end

a = 'hello'
puts a
puts add_emphasis(a)
puts a
```

## Collections

### Element Reference

String Element Reference

```ruby
s = 'Hello World'
puts s[0]
puts s[2]
puts s[-1]
puts s[2, 3]
puts s[2, 3][2]
```

Array Element Reference

```ruby
arr = %w(a b c d e f g)
arr[0]          
arr[1]          
arr [-1]        
arr[2, 3]       
arr[2, 3][2]
```

```ruby
arr = %w(a b c d e f g)
arr.slice(3, 1)
arr.slice(3..3)
arr.slice(3)
```

Hash Element Reference

```ruby
hash = { one: 1, two: 2, three: 3 }
hash[:one]
hash[:two]

hsh = { 1 => 'one', 2 => 'two' }
hash[2][2]
```

Out of Bounds Indices

```ruby
string = 'Hello'
string[5]
string[-6]
```

```ruby
arr = ['one', :two, 3, nil]
arr[4]
arr[3]

arr.fetch(3)
arr.fetch(4)
```

Invalid Hash Keys

```ruby
hsh = {one: 'son', two: 'shoe', infinity: nil }
hsh[:one]
hsh[:three]
hsh[:infinity]

hsh.fetch(:infinity)
hsh.fetch(:three)
```

### Comparison

The Comparison Operator

```ruby
2 <=> 1
1 <=> 2
2 <=> 2

'b' <=> 'a'
'a' <=> 'b'
'a' <=> 'a'

1 <=> 'a'
```

### Sorting

Sorting Strings

```ruby
'a' <=> 'b'
'apple' <=> 'ape'
'cat' <=> 'catty'

words = %w(card soap knife crab soapy coin sand king kill)
words.sort
```

Sorting Arrays

```ruby
[[2, 4], [2, 1, 4], [0, 1, 2], [3, 2, 0], [0, 1], [3, 2, 5]].sort
```

### Shallow Copy

Mutating an element in a collection copy

```ruby
arr_a = %w(ant bat cat)
arr_b = arr_a.dup

arr_b[1].upcase!
p arr_a
p arr_b
```

Mutating a collection copy as a whole

```ruby
arr_a = %w(ant bat cat)
arr_b = arr_a.dup

arr_b.map! { |word| word.upcase }

p arr_a
p arr_b
```

Mutating each element within a collection copy

```ruby
arr_a = %w(ant bat cat)
arr_b = arr_a.dup

arr_b.map! { |word| word.upcase! }

p arr_a
p arr_b
```

### Each, Select, Map

Each

```ruby
# What does the following code output? What does it return? When is a good time to use the each method?
names = ["george", "bobbi", "joel", "susan"]
names.each do |name|
  puts name.capitalize
end

# What if we call the destructive capitalize! method here?
```

```ruby
# What does the following code output? What does it return? When is a good time to use the each method?
names = ["george", "bobbi", "joel", "susan"]
names = names.each do |name|
          name.capitalize
        end
```
