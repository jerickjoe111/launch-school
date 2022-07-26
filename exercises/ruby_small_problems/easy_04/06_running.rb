def running_total(array)
  sum = 0
  array.map { |i| sum += i }
end

def running_total_2(array)
  sum_array = array.each_with_object([]) { |i, a| a << a[-1].to_i + i }
end
