# 01 

# Write a method that takes two strings as arguments, determines the longest of the two strings, 
# and then returns the result of concatenating the shorter string, the longer string, 
# and the shorter string once again. 
# You may assume that the strings are of different lengths.

def short_long_short(string_a, string_b)
  short, long = [string_a, string_b].sort_by { |string| string.size }
  short + long + short
end

# 02

# Write a method that takes a year as input and returns the century. 
# The return value should be a string that begins with the century number, 
# and ends with st, nd, rd, or th as appropriate for that number.

# New centuries begin in years that end with 01. So, the years 1901-2000 comprise the 20th century.