# https://launchschool.com/exercises/a7fce257

# >>>>>> Problem

# Write a method that returns the number of Friday the 13ths 
# in the year given by an argument. 

# input: an integer (a year from 1752)

# output: number of Fridsy the 13ths in that year

# >>>>>> Caveats

# You may assume that the year is greater than 1752 
# (when the United Kingdom adopted the modern Gregorian Calendar) 
# and that it will remain in use for the foreseeable future.

# Take on account leap years

# >>>>>> Examples and test cases

# friday_13th(2015) == 3
# friday_13th(1986) == 1
# friday_13th(2019) == 2

# >>>>>> Data Structures

# >>>>>> Algorithm

# 1. set counter to 0

# 2. for each day in year:
#     if day is Friday and day number == 12, add 1 to counter

# 3. return counter

# >>>>>> Code

require "date"

YEAR_DAYS = 365

def friday_13th(year)
  year_days = Date.leap?(year) ? YEAR_DAYS + 1 : YEAR_DAYS
  year = Date.new(year, 1, 1)
  
  friday_13th_count = 0
  counter = 0
  loop do
    day = year + counter
    
    friday_13th_count += 1 if day.friday? && day.mday == 13
    
    counter += 1

    break if counter > year_days
  end

  friday_13th_count
end
