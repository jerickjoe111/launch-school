def buy_fruit(list)
  list.each_with_object([]) do |fruit, list|
    fruit[1].times { list << fruit[0] }
  end
end

p buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]])