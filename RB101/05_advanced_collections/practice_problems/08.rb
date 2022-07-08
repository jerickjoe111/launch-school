# Practice Problems: Sorting, Nested Collections and Working with Blocks.

# Lucas Sorribes, July 2022.

# 8. Using the each method, write some code to output all of the vowels from the strings.

hash = {first: ['the', 'quick'], second: ['brown', 'fox'], third: ['jumped'], fourth: ['over', 'the', 'lazy', 'dog']}

VOWELS = ("aeiouAEIOU")

hash.each do |_, words_array|
  words_array.each do |word|
    word.chars.each do |letter|
      letter if VOWELS.include?(letter)
    end
  end
end
