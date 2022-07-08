# Practice Problems: Sorting, Nested Collections and Working with Blocks.

# Lucas Sorribes, July 2022.

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

puts "Total age: #{total_age}"

