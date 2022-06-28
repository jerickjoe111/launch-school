def palindrome?(string)
  string == string.reverse
end

def palindrome_v2?(string)
  if string.size.odd?
    mirror_substring = (0..string.size / 2)
  else
    mirror_substring = (0...string.size / 2)
  end

  string.count(string[mirror_substring]) == string.size
end

