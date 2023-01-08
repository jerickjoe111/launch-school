class Boomerang
  def self.boomerang?(array)
    return false if array.size < 3 || array.size.even?

    center_index = array.size / 2

    sequence_a = array[0...center_index]
    sequence_b = array[center_index + 1..-1]

    (increasing?(sequence_a) && decreasing?(sequence_b)) ||
      (decreasing?(sequence_a) && increasing?(sequence_b))
  end

  class << self
    private

    def increasing?(array)
      array.each_cons(2).all? { |a, b| a < b }
    end

    def decreasing?(array)
      array.each_cons(2).all? { |a, b| a > b }
    end
  end
end
