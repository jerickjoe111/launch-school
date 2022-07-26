def stringy(int)
  string = ""
  int.times { |i| i.even? ? string[i] = "1" : string[i] = "0" }
  string
end