# Practice Problems: Sorting, Nested Collections and Working with Blocks.

# Lucas Sorribes, July 2022.


# 1. How would you order this array of number strings by descending numeric value?

arr = ['10', '11', '9', '7', '8']

arr.sort! {|num_1, num_2| num_2.to_i<=> num_1.to_i }


# 2. How would you order this array of hashes based on the year of publication of each book, from the earliest to the latest?

books = [
  {title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967'},
  {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925'},
  {title: 'War and Peace', author: 'Leo Tolstoy', published: '1869'},
  {title: 'Ulysses', author: 'James Joyce', published: '1922'}
]

books.sort_by! do |book| 
  book[:published]
end


# 3. For each of these collection objects demonstrate how you would reference the letter 'g'.

arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]]

arr2 = [{first: ['a', 'b', 'c'], second: ['d', 'e', 'f']}, {third: ['g', 'h', 'i']}]

arr3 = [['abc'], ['def'], {third: ['ghi']}]

hsh1 = {'a' => ['d', 'e'], 'b' => ['f', 'g'], 'c' => ['h', 'i']}

hsh2 = {first: {'d' => 3}, second: {'e' => 2, 'f' => 1}, third: {'g' => 0}}

arr1[2][1][3]

arr2[1][:third][0]

arr3[2][:third][0][0]

hsh1["b"][1]

hsh2[:third].keys[0]


# 4. For each of these collection objects where the value 3 occurs, demonstrate how you would change this to 4.

arr1 = [1, [2, 3], 4]

arr2 = [{a: 1}, {b: 2, c: [7, 6, 5], d: 4}, 3]

hsh1 = {first: [1, 2, [3]]}

hsh2 = {['a'] => {a: ['1', :two, 3], b: 4}, 'b' => 5}

arr1[1][1] = 4

arr2[2] = 4

hsh1[:first][2][0] = 4

hsh2[["a"]][:a][2] = 4


# 5. Given this nested Hash, figure out the total age of just the male members of the family:

munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

total_age = 0

munsters.each_value do |member|
  total_age += member["age"] if member["gender"] == "male"
end


# 6. Given this previously seen family hash, print out the name, age and gender of each family member:

munsters.each do |name, description|
  "#{name} is a #{description['age']}-year-old #{description['gender']}"
end


# 7. Given this code, what would be the final values of a and b? Try to work this out without running the code.

a = 2
b = [5, 8]
arr = [a, b]

arr[0] += 2 # a is still 2. the += means a reassigning operation, we are not resetting a, but the array: we set the value of a + 2, 4, as the array's first element, not a.
            # now the array arr is [4, (b)[5,8]]
arr[1][0] -= a # -= is also a reassigning operation, but in this case, b pointing to an array, we are modifying the array object itself that the variable points to, and not reassigning the
               # variable to an integer or a new array as we did with a (arr[0] was an alternative way to refer to a)

               # The final result is: 
               # a = 2
               # b = [3, 8]
               # arr = [4, [3, 8]]
                    

# 8. Using the each method, write some code to output all of the vowels from the strings.

hash = {first: ['the', 'quick'], second: ['brown', 'fox'], third: ['jumped'], fourth: ['over', 'the', 'lazy', 'dog']}

VOWELS = ("aeiouAEIOU")

hash.each do |_, words_array|
  words_array.each do |word|
    word.chars.each do |letter|
      letter if VOWELS.include?(letter)
    end
  end
end


# 9. Given this data structure, return a new array of the same structure but with the sub arrays being ordered 
#    (alphabetically or numerically as appropriate) in descending order.

arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']]

sorted_array = arr.map do |sub_array|
              sub_array.sort do |item_a, item_b|
                item_b <=> item_a
              end
            end


# 10. Given the following data structure and without modifying the original array, use the map method to return 
#     a new array identical in structure to the original but where the value of each integer is incremented by 1.

original_array = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}]

new_array = original_array.map do |hash|
              hash.map do |key, value|
                [key, value += 1]
              end.to_h
            end


# 11. Given the following data structure use a combination of methods, including either the select or reject method, 
#     to return a new array identical in structure to the original but containing only the integers that are multiples of 3.

original_array = [[2], [3, 5, 7], [9], [11, 13, 15]]

new_array = original_array.map do |sub_array|
              sub_array.select do |integer|
                integer % 3 == 0
              end
            end


# 12. Given the following data structure, and without using the Array#to_h method, write some code that will 
#     return a hash where the key is the first item in each sub array and the value is the second item.

arr = [[:a, 1], ['b', 'two'], ['sea', {c: 3}], [{a: 1, b: 2, c: 3, d: 4}, 'D']]
# expected return value: {:a=>1, "b"=>"two", "sea"=>{:c=>3}, {:a=>1, :b=>2, :c=>3, :d=>4}=>"D"}

hash = {}
arr.each do |sub_array|
  hash[sub_array[0]] = sub_array[1]
end


# 13. Given the following data structure, return a new array containing the same sub-arrays as the original 
#     but ordered logically by only taking into consideration the odd numbers they contain.

arr = [[1, 6, 9], [6, 1, 7], [1, 8, 3], [1, 5, 9]]

sorted = arr.sort_by do |sub_array|
           sub_array.select do |integer|
             integer.odd?
           end
         end

# 14. Given this data structure write some code to return an array containing the colors of the fruits 
#     and the sizes of the vegetables. The sizes should be uppercase and the colors should be capitalized.

hash = {
  'grape' => {type: 'fruit', colors: ['red', 'green'], size: 'small'},
  'carrot' => {type: 'vegetable', colors: ['orange'], size: 'medium'},
  'apple' => {type: 'fruit', colors: ['red', 'green'], size: 'medium'},
  'apricot' => {type: 'fruit', colors: ['orange'], size: 'medium'},
  'marrow' => {type: 'vegetable', colors: ['green'], size: 'large'},
}

=begin
P:
  input: hash
  output: array with:
                    - colors ONLY from fruits
                    - sizes ONLY from vegetables
  rules: 
                    - colors BE capitalized !
                    - sizes BE uppercase !
DS:
  initialize an empty array ?
  use it to store retrieved values
A:
  1. initialize empty array
  2. iterate through each element in hash
      a. check if the element is a fruit:
          - if yes: store colors in array
          - if no: store size in array (the item is a vegetable)
  3. return array
=end

array = []

hash.each do |name, characteristics|
  case characteristics[:type]
  when "fruit" then array << characteristics[:colors].map do |color|
                                                  color.capitalize
                                                end
  else array << characteristics[:size].upcase
  end
end


# 15. Given this data structure write some code to return an array which contains only 
#     the hashes where all the integers are even.

arr = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]

selected_array = arr.select do |hash|
                   hash.all? do |_, hash_array|
                     hash_array.all? do |integer|
                       integer.even?
                     end                    
                   end
                 end


# # 16. Write a method that returns one UUID when called with no parameters.

#       Each UUID consists of 32 hexadecimal characters, and is typically broken 

#       into 5 sections like this 8-4-4-4-12 and represented as a string.

#       It looks like this: "f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91"

=begin

PEDAC

input: none
output: UUID string (32 hex. characters -characters between 0 and f-, broken into 5 sections by dashes: 8-4-4-4-12 )

DS:
- initialize CONSTANT with array containing all hexadecimal characters (0-f)
- initialize CONSTANT with array containing the number of needed characers as integers ([8, 4, 4, 4, 12]) ?
- empty string on which every character will be added, and then output.

- write minifunction to generate random hex. character ?

ALGORITHM:
1. initialize CONSTANT with all possible hex. characters HEX
2. initialize CONSTANT with number of needed characters NUMBERS
3. initialize empty string ("") UUID
4. UUID generation process:
   a. for each integer N in NUMBERS array:
     - repeat N times: add random character from HEX array to UUID string 
     - add '-' symbol
   b. delete last '-' symbol in UUID string
5. return UUID string
=end

HEX_CHARACTERS = %w[0 1 2 3 4 5 6 7 8 9 a b c d e f]

SECTIONS = [8, 4, 4, 4, 12]

def uuid_generator()
  uuid = ""

  SECTIONS.each do |number_of_characters|
    number_of_characters.times { uuid << HEX_CHARACTERS.sample }
    uuid << "-" unless number_of_characters == SECTIONS[-1] 
  end

  uuid
end

