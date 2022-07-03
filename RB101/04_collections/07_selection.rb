# Topic 07: Selection and transformation

# Select the key-value pairs where the value is "Fruit":

  produce = {
    'apple' => 'Fruit',
    'carrot' => 'Vegetable',
    'pear' => 'Fruit',
    'broccoli' => 'Vegetable'
  }

  # Long solution:

  def select_fruit(hash)
    fruits = hash.keys

    selected_fruits = {}
    
    counter = 0
    loop do
      break if counter == fruits.size
      
      if hash[fruits[counter]] == "Fruit"
        selected_pairs[fruits[counter]] = "Fruit"
      end

      counter += 1
    end

    selected_fruits
  end

  # Short solution

  def select_fruit_s(hash)
    hash.select { |_, value| value == "Fruit" }
  end

# Implement a method that mutates its argument:

  my_numbers = [1, 4, 3, 7, 2, 6]

  def double_numbers!(numbers)
    counter = 0
    loop do
      break if counter == numbers.size

      numbers[counter] *= 2
      counter += 1
    end

    numbers
  end

  def double_numbers_s!(numbers)
    numbers.map! { |number| number * 2 }
  end

# Try coding a solution that doubles the numbers that have odd indices:

  def double_odd_index(numbers)
    transformed_numbers = []

    counter = 0
    loop do
      break if counter == numbers.size

      if counter.odd?
        transformed_numbers << numbers[counter] * 2
      else
        transformed_numbers << numbers[counter]
      end

      counter += 1
    end

    transformed_numbers
  end

  def double_odd_index_s(numbers)
    numbers.map.with_index {|number, index| index.odd? ? number * 2 : number }
  end

# Try coding a method that allows you to multiply every array item by a specified value:

  def multiply(numbers, value)
    multiplied_numbers = []

    counter = 0
    loop do
      break if counter == numbers.size

      multiplied_numbers << numbers[counter] * value

      counter += 1
    end
    
    multiplied_numbers
  end

  def multiply_s(numbers, value)
    numbers.map { |number| number * value }
  end
