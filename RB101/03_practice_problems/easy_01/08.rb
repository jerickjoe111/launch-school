# Lesson 5: Easy 01 Practice Problems.

# Lucas Sorribes, June 2022.

# Question 8

# Given the hash below:
flintstones = { "Fred" => 0, "Wilma" => 1, "Barney" => 2, "Betty" => 3, "BamBam" => 4, "Pebbles" => 5 }
flintstones = flintstones.select { |k| k == "Barney" }.to_a.flatten