LOWERCASE = ("a".."z")
UPPERCASE = ("A".."Z")

def swapcase(string)
  string.chars.each_with_object("") do |character, empty_string|
    empty_string << case character
                    when LOWERCASE then character.upcase
                    when UPPERCASE then character.downcase
                    else character
                    end
  end
end