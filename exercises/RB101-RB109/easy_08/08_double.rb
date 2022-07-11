=begin

i: string
o: new string with all characters doubled

return original string if the string is empty?

Algorithm:

1. initialize empty string (new_string)
2. iterate through all characters of input string
    - check if the character is a consonant:
      - if yes: copy each character to new string * 2
3. return new_string

=end

CONSONANTS = /[A-z&&[^aeiou]]/ 

def double_consonants(string)
  string.chars.each_with_object("") do |char, new_string|
    char.match?(CONSONANTS) ? new_string << char * 2 : new_string << char
  end
end