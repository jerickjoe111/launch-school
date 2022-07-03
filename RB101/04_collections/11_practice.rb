# Practice Problems: Additional Practice

# Lucas Sorribes, July 2022.

# 1. Given the array below
# Turn this array into a hash where the names are the keys and the values are the positions in the array.

flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]

flintstones_hash = flintstones.each_with_object({}) do |name, hash|
  hash[name] = flintstones.index(name)
end


# 2. Add up all of the ages from the Munster family hash:

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }

ages_sum = ages.values.sum

sum = ages.values.reduce(:+)


# 3. In the age hash, remove people with age 100 or greater:

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }

ages.delete_if { |_, age| age >= 900}

# 4. Pick out the minimum age from our current Munster family hash:

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }

ages.values.min

minimum_age = ages.values[0]
ages.each_value { |age| minimum_age = age if age < minimum_age }

# 5. Find the index of the first name that starts with "Be"

flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

be_name_index = 0
flintstones.each_with_index { |name, index| be_name_index = index if name[0..1] == "Be" }

flintstones.index { |name| name[0..1] == "Be"}

# 6. Amend this array so that the names are all shortened to just the first three characters:

flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

flintstones.map! { |name| name[0..2] }

# 7. Create a hash that expresses the frequency with which each letter occurs in this string:

statement = "The Flintstones Rock"

letters_hash = statement.chars.each_with_object({}) do |character, hash|
                 unless character == " "
                   hash[character] = statement.count(character)
                 end
               end

# 8. What happens when we modify an array while we are iterating over it? What would be output by this code?

numbers = [1, 2, 3, 4]
numbers.each do |number|
  p number
  numbers.shift(1)
end

# 1 and 3. In the second iteration, p tries to print the number at index 1, but by that time, as the first value has been deleted by shift in the first iteration
# the number at 1 index is not 2, but 3. The same happens in the third iteration: by that time, there is no number at index 2.

numbers = [1, 2, 3, 4]
numbers.each do |number|
  p number
  numbers.pop(1)
end

# 1 and 2. As each item is removed from the end of the array by pop, each can't even achieve a third iteration: by that time all the items in array have been printed
# because the array size at that time is 2.


# 9. Write your own version of the rails titleize implementation.

words = "the flintstones rock"

words.split.map { |word| word.capitalize}.join(" ")

# 10. Modify the hash such that each member of the Munster family has an additional "age_group" key that has one of three values describing the age group the family 
# member is in (kid, adult, or senior). (a kid is in the age range 0 - 17, an adult is in the range 18 - 64 and a senior is aged 65+)

munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

munsters.transform_values do |member_hash|
  case member_hash["age"]
  when 0..17 then member_hash["age_group"] = "kid"
  when 18..64 then member_hash["age_group"] = "adult"
  when 65.. then member_hash["age_group"] = "senior"
  end
end

p munsters