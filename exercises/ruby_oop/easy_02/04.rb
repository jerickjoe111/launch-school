# Exercise 04

class Transform
  def self.lowercase(message)
    message.downcase
  end

  def initialize(content)
    @content = content
  end

  def uppercase
    @content.upcase
  end
end

my_data = Transform.new('abc')
puts my_data.uppercase
puts Transform.lowercase('XYZ')