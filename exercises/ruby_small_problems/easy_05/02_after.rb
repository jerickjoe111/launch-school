MINUTES_PER_HOUR = 60
HOURS_PER_DAY = 24


def time_of_day(minutes_input)
  hours = (minutes_input / MINUTES_PER_HOUR) % HOURS_PER_DAY
  minutes = (minutes_input % MINUTES_PER_HOUR)

  "#{format("%02d", hours)}:#{format("%02d", minutes)}"
end

def time_of_day(minutes)
  "#{format("%02d", (minutes / 60) % 24)}:#{format("%02d", minutes % 60)}"
end

puts time_of_day(0) == "00:00"
puts time_of_day(-3) == "23:57"
puts time_of_day(35) == "00:35"
puts time_of_day(-1437) == "00:03"
puts time_of_day(3000) == "02:00"
puts time_of_day(800) == "13:20"
puts time_of_day(-4231) == "01:29"