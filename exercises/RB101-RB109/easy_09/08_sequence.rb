def sequence(items, sum)
  return [] if items == 0

  sum.step(by: sum).take(items)
end

def sequence_2(items, sum)
  return [] if items == 0
  
  output_array = []

  items.times do
    output_array << sum
    sum += sum
  end

  output_array
end

