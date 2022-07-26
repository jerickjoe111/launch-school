def remove_vowels(strings_array)
  strings_array.map { |string| string.delete("aeiouAEIOU")}
end
