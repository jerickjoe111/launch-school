def century(year)
  year % 100 == 0 ? century = year / 100 : century = year / 100 + 1
  
  suffixes = Array.new (10) do |index| 
    case index
    when 1 then "st" 
    when 2 then "nd"
    when 3 then "rd"
    else "th"
    end
  end

  if century.to_s.end_with?("11", "12", "13")
    century_suffix = "th"
  else
    century_suffix = suffixes[century % 10]
  end 

  century.to_s + century_suffix
end

puts century(2000) == '20th'
puts century(2001) == '21st'
puts century(1965) == '20th'
puts century(256) == '3rd'
puts century(5) == '1st'
puts century(10103) == '102nd'
puts century(1052) == '11th'
puts century(1127) == '12th'
puts century(11201) == '113th'






# number = 2322

# if number % 100 == 0
#   century = number / 100
# else
#   century = number / 100 + 1
# end

# case century % 4
# if century % 10 == 4
#   puts century.to_s + "th"
# end
