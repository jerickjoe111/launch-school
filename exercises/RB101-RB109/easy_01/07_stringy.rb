def stringy(int)
  string = ""
  int.times { |i| i % 2 == 0 ? string[i] = "1" : string[i] = "0" }
  string
end