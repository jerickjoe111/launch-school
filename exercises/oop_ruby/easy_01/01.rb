# Exercise 01

class Banner
  def initialize(message, width=nil)
    @message = message
    @size = width ? width : message.size
  end

  def to_s
    [
      horizontal_rule, 
      empty_line, 
      message_line, 
      empty_line, 
      horizontal_rule
    ].join("\n")
  end

  private

  attr_reader :message, :size

  def horizontal_rule
    "+-#{'-' * size}-+"
  end

  def empty_line
    "| #{(' ' * size)} |"
  end

  def message_line
    "| #{message.center(size)} |"
  end
end

banner = Banner.new('To boldly go where no one has gone before.', 100)
puts banner