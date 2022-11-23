def sequence
  counter = 1
  testy = 'aloha friend'
  Proc.new do
    puts "I am a proc, and the counter value now is #{counter}"
    counter += 1
  end
end

sequence_1 = sequence
puts "Hi, I am #{sequence_1}"
sequence_1.call
sequence_1.call
sequence_1.call
binding.irb
sequence_2 = sequence

puts "Hi, I am #{sequence_2}"
sequence_2.call
puts "Hi, I am #{sequence_1}"
sequence_1.call
puts "Hi, I am #{sequence_2}"
sequence_2.call