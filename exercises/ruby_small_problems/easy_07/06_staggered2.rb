def staggered_case(string, ignore_non_alphabetic=true)
  index_index_counter = 0
  
  string.chars.each_with_object("") do |char, new_string|
    index_counter.even? ? new_string << char.upcase : new_string << char.downcase

    if ignore_non_alphabetic
      index_counter += 1 unless char.match(/[\W_\d]/)
    else
      index_counter += 1
    end
  end
end