# Practice Problems: Methods and More Methods

# Lucas Sorribes, July 2022.


# 1. What is the return value of the select method below? Why?

[1, 2, 3].select do |num|
  num > 5
  'hi'
end

# The return value will be [1, 2, 3]: the select method iterates through every item in the collection, and performs a selection 
# based on the truthiness of the block's return value. In this case, "hi", being a truthy value, makes that every item in the caller
# array is selected to be part of the returned new array.


# 2. How does count treat the block's return value? How can we find out?

['ant', 'bat', 'caterpillar'].count do |str|
  str.length < 4
end

# Count in this case iterates through every item in array and adds 1 to a counter if the block returns a true value. In other words,
# count returns the number of elements in the array for which the code block returns a true value.


# 3. What is the return value of reject in the following code? Why?

[1, 2, 3].reject do |num|
  puts num
end

# The return value is [1, 2, 3]. What reject does is to return an array containing only those items for which the code block returns
# false or nil. In this case, as each iteration of the block, one for each item in the caller array, returns nil (nil being the return 
# value of puts method), every item is thus selected of the returning array, which will be equal to the original array.


# 4. What is the return value of each_with_object in the following code? Why?

['ant', 'bear', 'cat'].each_with_object({}) do |value, hash|
  hash[value[0]] = value
end

# The return value will be a hash: {"a"=> "ant", "b"=> "bear", "c"=> "cat"}. Each_with_object passes each item of the array as an argument to the block,
# one at a time with each iteration, and the object given to each_with_object itself as a method argument, in this case a hash {}. What this does is adding 
# a new key-value pair to the hash object with each iteration, by which the key is the passed on array item first character (value[0]), and the value is the whole
# item string.


# 5. What does shift do in the following code? How can we find out?

hash = { a: 'ant', b: 'bear' }
hash.shift

# Shift removes first element (first key-value pair in this case, the caller object being a hash), and returns it as a two-item array.


# 6. What is the return value of the following statement? Why?

['ant', 'bear', 'caterpillar'].pop.size

# The return value of this expression is 11. pop removes last object from collection, a string in this case, and returns it. Via method chaining we capture
# that return value from pop, the "caterpillar" string object, and we call the method size on it, which returns its character length or size: 11.


# 7. What is the block's return value in the following code? How is it determined? Also, what is the return value of any? in this code and what does it output?

[1, 2, 3].any? do |num|
  puts num
  num.odd?
end

# The block's return value is in this case 'true', and it is determined by the truth value or truthiness of its last expression evaluated, num.odd?
# Any? returns a boolean: 'true' if at least one item in the collection evaluates to 'true' via the code block (which means that 'true' must be returned
# at least once from the block), 'false' otherwhise. As there are two items in the array that evaluate to 'true' when called on the 'odd?' method, the 
# return value of any? will be 'true'. Any?, nevertheless, will stop iterating after the first 'true' result, as it only needs one 'true' value to return
# a result of 'true'.


# 8. How does take work? Is it destructive? How can we find out?

arr = [1, 2, 3, 4, 5]
arr.take(2)

# take method returns n first items from array, where n is an integer provided as argument.


# 9. What is the return value of map in the following code? Why?

{ a: 'ant', b: 'bear' }.map do |key, value|
  if value.size > 3
    value
  end
end

# The return value is: [nil, "bear"]. The first element is 'nil' because the if condition, not being true for the first pair passed as an argument,
# returns 'nil' itself. On the second iteration, the if condition being true, value is returned: 'bear', the value of the second key-value pair in the hash.

# 10. What is the return value of the following code? Why?

[1, 2, 3].map do |num|
  if num > 1
    puts num
  else
    num
  end
end

# The return value is [1, nil, nil]. With the first iteration of map, 1, the argument passed to the block, is returned from it as the if condition ( 1 > 1 == false)
# turns to be false, thus the else branch is executed, returning num itself from the block and back to the method, which stores is into the new to-be-returned array.
# But, for the rest of the elements (2 and 3) of the array the if condition will be true, and the return value from the first branch will be returned from the block.
# Each number will be printed as a side effect, but remember the return value from the puts method is not whatever object is printed, but 'nil'. Then, 'nil' will be
# stored in the new array, and that is why the returned array from this map is [1, nil, nil].

