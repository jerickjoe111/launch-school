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


# 10. 