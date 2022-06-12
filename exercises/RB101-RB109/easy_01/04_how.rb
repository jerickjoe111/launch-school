def count_occurrences(list)
  count = {}

  list.uniq.each { |element| count[element] = list.count(element) }

  count.each { |key, value| puts "#{key} => #{value}" }
end


vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]

count_occurrences(vehicles)