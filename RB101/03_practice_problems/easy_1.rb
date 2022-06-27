# Practice problems: Easy 1

# Lucas Sorribes, June 2022.


# Question 1

  # uniq returns a new version of the receiver array in which duplicates are removed, 
  # but, in this case, as the method does not modify the receiver (unlike its uniq! counterpart),
  # when we print the array, it still has the duplicate numbers.

  # Notice that the puts method prints each element of the array in a different line, instead of
  # printing the literal array notation with its content, as it would have happend if we had 
  # called the p method (that automatically calls the inspect method and prints the result)

# Question 2

  # The ! and ? symbols in a method's name are a conventional way to inform the user about the method effects
  # and output. The ! sign after the name (it is not syntax, but part of a method's name) is used to 
  # represent a method that mutates its caller,(not all methods that mutate its caller/receiver have a ! sign after it), 
  # and the ? sign is used to signify that the method answer is a boolean (true or false). As a logic operator, the ! symbol 
  # signifies 'not', it negates a condition, and it is sometimes called the 'bang' operator. The ? symbol is 
  # part as well of the syntax of the ternary operator (if..else), put after the condition to be checked.

  # 1. the operator != means 'not equal', being the opposite to the == operator, that signifies equality.
  # 2. the ! operator before a variable means its negation, meaning its boolean opposite (true if false, false if true)
  # 3. it is part of a conventional way of naming methods that mutate its receiver.
  # 4. it is a syntax error
  # 5. it represents the the condition to be checked in a ternary operator expression.
  # 6. this means double negation, in other words, its affirmation. Before an object, it turns it into its boolean equivalent.
  #    Its use is discouraged in the Ruby Style Guide.

# Question 3


  
