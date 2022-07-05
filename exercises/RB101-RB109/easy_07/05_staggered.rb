def staggered_case(string)
  counter = 0
  
  string.chars.each_with_object("") do |char, new_string|
    counter.even? ? new_string << char.upcase : new_string << char.downcase
    counter += 1
  end
end

def staggered_case_2(string, firstupcase=true)
  
  
  counter = 0
  string.chars.each_with_object("") do |char, new_string|
    counter.even? ? new_string << char.upcase : new_string << char.downcase
    counter += 1
  end
end


puts staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
puts staggered_case('ALL_CAPS') == 'AlL_CaPs'
puts staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'

