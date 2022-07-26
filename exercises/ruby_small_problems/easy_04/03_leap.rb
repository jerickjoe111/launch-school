require "date"

def leap_year?(year)
  Date.gregorian_leap?(year)
end

def leap_year_v2?(year)  
  if year % 4 == 0 && year % 100 != 0
    return true
  elsif year % 100 == 0 && year % 400 == 0
    return true
  end

  false
end
