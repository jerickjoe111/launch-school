require "date"

def leap_year?(year)
  if year < 1752
    Date.julian_leap?(year)
  else
    Date.gregorian_leap?(year)
  end
end

def leap_year?(year)
  if year < 1752
    return true if year % 4 == 0
  else
    if year % 4 == 0 && year % 100 != 0
      return true
    elsif year % 100 == 0 && year % 400 == 0
      return true
    end
  end

  false
end

puts leap_year?(2016) == true
puts leap_year?(2015) == false
puts leap_year?(2100) == false
puts leap_year?(2400) == true
puts leap_year?(240000) == true
puts leap_year?(240001) == false
puts leap_year?(2000) == true
puts leap_year?(1900) == false
puts leap_year?(1752) == true
puts leap_year?(1700) == true
puts leap_year?(1) == false
puts leap_year?(100) == true
puts leap_year?(400) == true