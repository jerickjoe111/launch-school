# Lesson 5: Medium 02 Practice Problems.

# Lucas Sorribes, June 2022.

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
  