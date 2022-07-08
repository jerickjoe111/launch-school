# Practice Problems: Sorting, Nested Collections and Working with Blocks.

# Lucas Sorribes, July 2022.

# 6. Given this previously seen family hash, print out the name, age and gender of each family member:

munsters.each do |name, description|
  puts "#{name} is a #{description['age']}-year-old #{description['gender']}"
end
