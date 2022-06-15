# version a:
def reverse_sentence(sentence)
  words = sentence.split
  reversed_words = []

  i = 0
  while i <= words.length - 1
    reversed_words << words[-1 - i]
    i += 1
  end

  reversed_words.join(' ')
end

p reverse_sentence('how are you doing')

# version b:
def reverse_sentence(sentence)
  words = sentence.split
  reversed_words = []

  i = 0
  while i < words.length
    reversed_words.unshift(words[i])
    i += 1
  end

  reversed_words.join(' ')
end