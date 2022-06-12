def stringy(int, a=1)
  string = ""
  int.times do |i| 
    i.even? ? string[i] = "1" : string[i] = "0" if a == 1 || a != 0
    i.even? ? string[i] = "0" : string[i] = "1" if a == 0 
  end
  string
end
