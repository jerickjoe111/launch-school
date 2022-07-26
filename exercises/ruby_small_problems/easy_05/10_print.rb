MAX_WIDTH = 76

def print_in_box(string)
  width = string.size
  horizontal_frame = "+-#{'-' * width}-+"
  empty_line = "| #{' ' * width} |"
  string_line = "| #{string} |\n"

  puts horizontal_frame
  puts empty_line

  if width > MAX_WIDTH
    buffer_string = string
    (width.to_f / MAX_WIDTH).round.times do
    print "|#{buffer_string.slice!(0, MAX_WIDTH).center(horizontal_frame.size - 2)}|\n"
    end
  else
    print string_line
  end

  puts empty_line
  puts horizontal_frame
end

