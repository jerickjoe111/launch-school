def after_midnight(time)
  minutes_output = time[0, 2].to_i * 60 + time[3, 2].to_i

  # minutes_output < 1440 ? minutes_output : 0 
  # minutes_output < 1439
end

puts after_midnight('00:00') == 0
# puts before_midnight('00:00') == 0
puts after_midnight('12:34') == 754
# puts before_midnight('12:34') == 686
puts after_midnight('24:00') == 0
# puts before_midnight('24:00') == 0