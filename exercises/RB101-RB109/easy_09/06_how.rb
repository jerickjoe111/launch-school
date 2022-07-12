
def word_lengths(sentence)
  sentence.split(" ").map { |word| "#{word} #{word.size}" }
end

