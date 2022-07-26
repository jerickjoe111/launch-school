def show_multiplicative_average(array)
  result = array.reduce(&:*) / array.size.to_f

  "The result is #{format("%.3f", result)}"
end
