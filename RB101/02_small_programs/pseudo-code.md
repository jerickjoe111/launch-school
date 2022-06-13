Pseudo-code examples:

1. A method that returns the sum of two integers:

  # Casual pseudo-code:

  Print welcome message

  Ask user for first number and save it into a variable
  Ask user for second number and save it into another variable

  Perform actual sum and save result in a variable

  Print result variable

  # Formal pseudo-code:

  START

  PRINT welcome message

  PRINT message asking user for first number
  GET input from user
  SET number1 = user input

  PRINT message asking user for second number
  GET input from user
  SET number2 = user input

  SET result = number1 + number2

  PRINT result

  END

2. A method that takes an array of strings, and returns a string that is all those strings concatenated together:

  # Casual pseudo-code

  Given an array of strings.

  Initialize an empty string.
  Iterate through the collection, one by one.
    - Append each element to the initialized string.
  
  Print string.

  # Formal pseudo-code

  START

  array = [n strings]

  SET string = ""

  SET i = 0

  WHILE i < array.size

    string << array[ith element]

    SET i += 1

  PRINT string

  END

3. A method that takes an array of inegers, and returns a new array with every other element from the original array. starting with the first element.

  # Casual pseudo-code

  Given an array [ array ] of integers.

  Initialize [ new array ].

  Iterate through each element of [ array ]
    - Append every even indexed element of [ array ] to [ new array ] (starting from 0)
  
  Print [ new array ]

  # Formal pseudo-code

  START

  SET array = [n integers]
  SET new_array = []
  SET i = 0

  WHILE i < array.size
    IF i % 2 == 0
      new_array << array[ith element]

    SET i += 1
  
  PRINT new_array

4. A method that determines the index of the 3rd occurrence of a given character in a string.

  # Casual pseudo-code:

  Take as input two arguments:
    - a string
    - a character
  Save them into two variables (string, character)

  Set counter = 0

  Iterate through each character in string via an iterator i
    - If the ith character is == character
      - counter += 1
      - If the counter is == 3
        - return i

  Return nil

  # Formal pseudo-code:

  START

  SET string = string provided by user
  SET character = character provided by user

  SET counter = 0

  WHILE i < string.size
    IF string[ith character] == character
      SET counter += 1
      IF counter == 3
        RETURN i

  RETURN nil

  END

5. A method that takes two arrays of numbers and returns the result of merging the arrays. 
  The elements of the first array should become the elements at the even indexes of the returned array, 
  while the elements of the second array should become the elements at the odd indexes.
  (You may assume that both array arguments have the same number of elements.)

  # Casual pseudo-code

  Given two integers arrays of the same size (array1, array2)

  Initialize new empty array (new_array)

  Iterate n times where n is the size of array1 via an iterator i (beginning from 0)
    - Append ith element of array1 to new array
    - Append ith element of array2 to new array
  
  Return new_array

  # Formal pseudo-code

  START

  SET array1 = array provided by user
  SET array2 = array provided by user

  SET new_array = [] (empty array)

  SET i = 0

  WHILE i < array1.size
    new_array << array1[ith element]
    new_array << array2[ith element]
  
  RETURN new_array

  END

