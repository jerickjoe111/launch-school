# Practice Problems: Hard 1

# Lucas Sorribes, June 2022.

# Question 1

  # Greeting is nil because it was initialized within a if block, and local variables are always initialized to nil
  # even if the block it's never executed.

# Question 2

  # {:a=>"hi there"}

# Question 3

  # A: "one is one"; "two is two"; "three is three"
  # B: "one is one"; "two is two"; "three is three"
  # C: "one is two"; "two is three"; "three is one"

# Question 4

  # Version 1:

  def dot_separated_ip_address?(input_string)
    dot_separated_words = input_string.split(".")

    if dot_separated_words.size == 4
      all_ip_numbers = 0

      dot_separated_words.size.times do |i| 
        all_ip_numbers += 1 if is_an_ip_number?(dot_separated_words[i])
      end

      return true if all_ip_numbers == 4
    end

    false
  end

  # Version 2:

  def dot_separated_ip_address?(input_string)
    dot_separated_words = input_string.split(".")
    return false unless dot_separated_words.size == 4

    while dot_separated_words.size > 0
      word = dot_separated_words.pop
      return false unless is_an_ip_number?(word)
    end

    true
  end
  

