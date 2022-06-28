
def short_long_short(string_a, string_b)
  sorted_strings = [string_a, string_b].sort {|word_a, word_b| word_a.size <=> word_b.size}

  sorted_strings[0] + sorted_strings[1] + sorted_strings[0]
end