class Series
  attr_reader :digits_string, :digits_size

  def initialize(digits_string)
    @digits_string = digits_string
    @digits_size = digits_string.size
  end

  def slices(series_size)
    raise ArgumentError, 'Slice size bigger than string' if series_size > digits_size

    last_index = digits_size - series_size

    slices_string = 
    (0..last_index).each_with_object([]) do |current_index, output_array|
      output_array << digits_string[current_index, series_size]
    end

    slices_string.map { |slice| slice.chars.map(&:to_i) }
  end
end
