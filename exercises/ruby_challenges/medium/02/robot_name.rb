class Robot
  MAX_NUMBER = 999
  LETTER_CODES = 65..90

  @used_names = []

  def self.used_names
    @used_names
  end

  attr_reader :name

  def initialize
    @name = generate_name
    self.class.used_names << @name
  end

  def reset
    self.class.used_names.delete(name)
    self.name = generate_name
    self.class.used_names << name
  end

  private

  attr_writer :name

  def generate_name
    letter_a = rand(LETTER_CODES).chr
    letter_b = rand(LETTER_CODES).chr
    number = rand(MAX_NUMBER)

    name = format("%s%s%03i", letter_a, letter_b, number)

    self.class.used_names.include?(name) ? avoid_collision(name) : name
  end

  def avoid_collision(name)
    letters = name[0, 2].chars.shuffle.join
    numbers = name[2, 3].chars.shuffle.join

    "#{letters}#{numbers}"
  end  
end
