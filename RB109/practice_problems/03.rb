# Write a method named to_weird_case that accepts a string, and
# returns the same sequence of characters with every 2nd character
# in every third word converted to uppercase. Other characters
# should remain the same.

# Examples:

# p to_weird_case('Lorem Ipsum is simply dummy text of the printing') ==
#                 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG'
# p to_weird_case(
#   'It is a long established fact that a reader will be distracted') ==
#   'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD'
# p to_weird_case('aaA bB c') == 'aaA bB c'
# p to_weird_case(
#   'Miss Mary Poppins word is supercalifragilisticexpialidocious') ==
#   'Miss Mary POpPiNs word is sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS'

# # The tests above should print "true".

# input: a string

# output: a new string (with every 2nd character from every third word converted to uppercase)

# >>>> Caveats

# empty strings?

# symbol strings?

# >>>> Strategies + methods + DS
# 2nd character == characters at odd index positions in each word

# third word == every word at index position + 1 that are multiples of 3 except 0

# >>>> Algorithm

# 1. split the input string in an array of words

# 2. for every word in array of words:
#     if the word's index + 1 is multiple of 3 and not 0:
#       - for each character in word:
#           - if current character index is odd:
#               - convert to uppercase

# 3. join back the array into a single string (with spaces)


# >>>> Code

def to_weird_case(input_string)
  words = input_string.split

  words.each.with_index do |word, index|

    if (index + 1) % 3 == 0 && !index.zero?
      
      word.chars.each.with_index do |character, index|
        word[index] = word[index].upcase if index.odd?
      end

    end

  end.join(' ')
end