# Practice Problems: Easy 2

# Lucas Sorribes, June 2022.


# Question 1

  ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }

  ages.key?("Spot")

  ages.include?("Spot")
  ages.member?("Spot")

# Question 2

  munsters_description = "The Munsters are creepy in a good way."

  munsters_description.swapcase!
  munsters_description.capitalize!
  munsters_description.downcase!
  munsters_description.upcase!

# Question 3

  ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10 }
  additional_ages = { "Marilyn" => 22, "Spot" => 237 }

  ages.update(additional_ages)

# Question 3

  advice = "Few things in life are as important as house training your pet dinosaur."

  advice.include?("Dino")

# Question 5

  flintstones = ["Fred", "Barney", "Wilma", "Betty", "BamBam", "Pebbles"]

  flintstones = %W[Fred Barney Wilma Betty BamBam Pebbles]

# Question 6

  flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

  flintstones << "Dino"

# Question 7

  flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

  flintstones.push("Dino", "Hoppy")

# Question 8

  advice = "Few things in life are as important as house training your pet dinosaur."

  advice.slice!(0...advice.index("house"))

# Question 9

  statement = "The Flintstones Rock!"

  statement.count("t")

# Question 10

  title = "Flintstone Family Members"

  title.center(40)







