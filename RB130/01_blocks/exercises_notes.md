Easy 01

1.

```ruby
class Tree
  include Enumerable

  def each
    ...
  end
end
```
To provide most of the functionality of the Enumerable module, all you need to do is include Enumerable in your class, and define an each method that yields each member of the collection, one at a time.

2. 

```ruby
def compute
  block_given? ? yield : 'Does not compute.'
end
```

The Kernel#block_given? method can be used to determine if a block has been passed to a method, even if there is no mention of a block in the method arguments.

3.

