def real_palindrome?(string)
  string.downcase.delete("^a-z0-9") == string.downcase.delete("^a-z0-9").reverse
end