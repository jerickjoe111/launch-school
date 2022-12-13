def sequence
  counter = 1
  testy = 'aloha friend'
  Proc.new do
    puts(
      "I am a proc, and the counter value now is #{counter}\n "\
      "And I even can refer to a local variable inside the method's definition\n "\
      "called testy: #{testy}"
    )
    counter += 1
  end
end

# sequence_1 = sequence

# puts "Hi, I am #{sequence_1}\n"

# sequence_1.call
# sequence_1.call
# sequence_1.call

# sequence_2 = sequence

# puts "Hi, I am #{sequence_2}"
# sequence_2.call
# puts "Hi, I am #{sequence_1}"
# sequence_1.call
# puts "Hi, I am #{sequence_2}"
# sequence_2.call

def scope_broker(&a_block)
  puts "I am calling #{a_block} from inside the method definition!"
  a_block.call
end

other_var = "I am other variable"
testy = 'I am testing'

scope_broker { puts testy; binding.irb }

