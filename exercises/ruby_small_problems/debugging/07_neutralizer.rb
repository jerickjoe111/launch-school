# https://launchschool.com/exercises/51385f07

# We wrote a neutralize method that removes negative words from sentences. 
# However, it fails to remove all of them. What exactly happens?

def neutralize(sentence)
  words = sentence.split(' ')

  words.each_with_object([]) do |word, output_array|
    output_array << word unless negative?(word)
  end.join(' ')

end

def negative?(word)
  [ 'dull',
    'boring',
    'annoying',
    'chaotic'
  ].include?(word)
end

puts neutralize('These dull boring cards are part of a chaotic board game.')
# Expected: These cards are part of a board game.
# Actual: These boring cards are part of a board game.