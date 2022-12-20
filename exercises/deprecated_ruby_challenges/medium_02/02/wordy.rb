class WordProblem
  ALLOWED_OPERATIONS = /plus|minus|multiplied by|divided by/.freeze
  OPERATION_TO_SYMBOL = {
    'plus' => :+,
    'minus' => :-,
    'multiplied by' => :*,
    'divided by' => :/
  }.freeze

  attr_reader :problem

  def initialize(problem)
    @problem = problem
    @operands = extract_operands(problem)
    @operations = extract_operations(problem)
  end

  def answer
    raise ArgumentError unless valid?

    operations.each do |operation|
      operand_a = operands.shift
      operand_b = operands.shift
      result = operand_a.send(operation, operand_b)
      operands.unshift(result)
    end

    operands.first
  end

  private

  attr_reader :operands, :operations

  def valid?
    operands.size >= 2 || !operations.size.zero?
  end

  def extract_operands(string)
    string.scan(/\-?\d+/).map(&:to_i)
  end

  def extract_operations(string)
    string.scan(ALLOWED_OPERATIONS).map do |operation|
      OPERATION_TO_SYMBOL[operation]
    end
  end
end
