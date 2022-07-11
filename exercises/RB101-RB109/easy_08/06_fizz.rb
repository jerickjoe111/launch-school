
def fizz_buzz_else(integer_1, integer_2)
  (integer_1..integer_2).each_with_object([]) do |integer, output_array|
    case
    when integer % 3 == 0 && integer % 5 == 0
      output_array << "FizzBuzz"
    when integer % 5 == 0
      output_array << "Buzz"
    when integer % 3 == 0 
      output_array << "Fizz"
    else
      output_array << integer
    end
  end
end

def fizzbuzz(integer_1, integer_2)
  output_array = fizz_buzz_else(integer_1, integer_2)

  output_array.each_with_index do |item, index|
    index != output_array.size - 1 ? print("#{item}, ") : print("#{item}\n")
  end
end
