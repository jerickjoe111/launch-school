# frozen_string_literal: true

# A small archiving program that stores students'
# names along with the grade that they are in.
class School
  USA_GRADES = 12

  def initialize
    @grades = initialize_grades_hash
  end

  def add(student_name, grade)
    raise ArgumentError unless valid?(grade)

    grades[grade] << student_name
    grades[grade].sort!
  end

  def to_h
    grades.reject { |_, grade| grade.empty? }
  end

  def grade(number)
    grades[number]
  end

  private

  attr_reader :grades

  def initialize_grades_hash
    (1..USA_GRADES).each_with_object({}) do |grade, output_hash|
      output_hash[grade] = []
    end
  end

  def valid?(grade)
    (1..USA_GRADES).include?(grade)
  end
end
