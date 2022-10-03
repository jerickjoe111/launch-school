# Exercise 03

# How do you find where Ruby will look for a method when that method is called? 
# How can you find an object's ancestors?


module Taste
  def flavor(flavor)
    puts "#{flavor}"
  end
end

class Orange
  include Taste
end

class HotSauce
  include Taste
end

p Orange.ancestors
p HotSauce.ancestors