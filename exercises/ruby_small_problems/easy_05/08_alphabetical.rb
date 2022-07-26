ALPHABETICAL_NUMBERS = %w[
  zero one two three four five six seven eight nine ten eleven 
  twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen
]

def alphabetic_number_sort(array)
  array.sort_by {|number| ALPHABETICAL_NUMBERS[number] }
end

def alphabetic_number_sort_2(array)
  ALPHABETICAL_NUMBERS.sort.map { |number| ALPHABETICAL_NUMBERS.index(number) }
end

