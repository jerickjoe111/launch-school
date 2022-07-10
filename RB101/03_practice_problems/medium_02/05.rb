# Lesson 5: Medium 02 Practice Problems.

# Lucas Sorribes, June 2022.

# Question 5

def tricky_method(a_string_param, an_array_param)
  a_string_param += "rutabaga"
  an_array_param += "rutabaga"
  
  return a_string_param, an_array_param
end

my_string = "pumpkins"
my_array = ["pumpkins"]
my_string, my_array = tricky_method(my_string, my_array)
