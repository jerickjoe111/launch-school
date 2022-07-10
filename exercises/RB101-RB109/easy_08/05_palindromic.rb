=begin

Write a method that returns a list of all substrings of a string that are palindromic. 
That is, each substring must consist of the same sequence of characters forwards as it does backwards. 
The return value should be arranged in the same sequence as the substrings appear in the string. 

Duplicate palindromes should be included multiple times.

input: a string
output: an array of substrings that are palindromic

palindrome: a word that reads the same backward or forward

Algorithm: 

1. Calculate if number of characters (size) in input string is even or odd:
    - if even: initialize a variable with the integer representing the middle index position size / 2
    - if odd: initialize a variable with the integer representing the middle index position size / 2 + 1
2. initialize empty array (substrings)
3. initialize index_right = 0
4. initialize index_left = -1
3. iterate through characters of the input string from index position 0 until middle position:
    - check if the characters from index_right to index_left are palindromic:
        - if yes: get substrings with substrings method and add them to the substrings array
    - increment index_right counter by 1
    - increment index_left counter by -1
    - go back to step 3.a unless index_right is greater than the middle index position
4. return substrings array


=end

require "pry"

def leading_substrings(string)
  array = []
  string.size.times do |index|
    array << string[0..index]
  end

  array.sort
end

def substrings(string)
  characters = string.chars

  array = []

  string.size.times do 
    array << leading_substrings(characters.join)

    characters.shift
  end

  array.flatten
end

def palindromic?(string)
  string == string.reverse && string.size > 1
end


# def palindromes(string)

#   array = []

#   index_left = 0
#   loop do
#     break if index_left >= string.size - 1

#     index_right = index_left + 1
#     loop do
#       break if index_right >= string.size

#       substring = string[index_left..index_right]
#       array << substring if palindromic?(substring) 
      
#       index_right += 1
#     end

#     index_left += 1
#   end
  
#   array
# end

def palindromes(string)
  substrings = substrings(string)

  array = []
  substrings.each do |substring|
    array << substring if palindromic?(substring)
  end
  
  array
end

p palindromes('abcd') == []
p palindromes('madam') == ['madam', 'ada']
p palindromes('hello-madam-did-madam-goodbye') == [
  'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  '-madam-', 'madam', 'ada', 'oo'
]
p palindromes('knitting cassettes') == [
  'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
]