=begin

i: string
o: new string with all characters doubled

return original string if the string is empty?

Algorithm:

1. initialize empty string (new_string)
2. iterate through all characters of input string
    - copy each character to new string * 2
3. return new_string

=end

def repeater(string)
  string.chars.each_with_object("") do |character, new_string|
    new_string << character * 2
  end
end