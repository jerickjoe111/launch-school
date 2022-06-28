# Practice Problems: Medium 2

# Lucas Sorribes, June 2022.

# Question 1

  # Variables a and c point to the same object. B object has the same content ("forty two"), but is not the same object.
  # B points to a different place in memory.

# Question 2

  # The three variables point to the same object. That is so because integers in ruby are immutable, unique, as it never can
  # be more than one 1, or more than one 2, etc. Operations with numbers simply return new number object, do not modify
  # existing ones.

# Question 3

  # my_string: "pumpkins"
  # my_array: ["pumpkins", "rutabaga"]

# Question 4

  # my_string: "pumpkinsrutabaga"
  # my_array: ["pumpkins"]

# Question 5

  def tricky_method(a_string_param, an_array_param)
    a_string_param += "rutabaga"
    an_array_param += "rutabaga"
    
    return a_string_param, an_array_param
  end

  my_string = "pumpkins"
  my_array = ["pumpkins"]
  my_string, my_array = tricky_method(my_string, my_array)

# Question 6

  def color_valid(color)
    color == "blue" || color == "green"
  end
  