def multisum(integer)
  (1..integer).select {|i| i % 3 == 0 || i % 5 == 0 }.sum
end
