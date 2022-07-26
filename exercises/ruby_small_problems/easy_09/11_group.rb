
def group_anagrams(word_list)
  word_list.group_by { |word| word.chars.sort }.values.reject do |anagrams|
                                                         anagrams.size == 1
                                                       end
end

words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
  'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
  'flow', 'neon']

