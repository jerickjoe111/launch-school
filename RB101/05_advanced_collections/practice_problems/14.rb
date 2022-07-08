# Practice Problems: Sorting, Nested Collections and Working with Blocks.

# Lucas Sorribes, July 2022.

# 14. Given this data structure write some code to return an array containing the colors of the fruits 
#     and the sizes of the vegetables. The sizes should be uppercase and the colors should be capitalized.

hash = {
  'grape' => {type: 'fruit', colors: ['red', 'green'], size: 'small'},
  'carrot' => {type: 'vegetable', colors: ['orange'], size: 'medium'},
  'apple' => {type: 'fruit', colors: ['red', 'green'], size: 'medium'},
  'apricot' => {type: 'fruit', colors: ['orange'], size: 'medium'},
  'marrow' => {type: 'vegetable', colors: ['green'], size: 'large'},
}

=begin
P:
  input: hash
  output: array with:
                    - colors ONLY from fruits
                    - sizes ONLY from vegetables
  rules: 
                    - colors BE capitalized !
                    - sizes BE uppercase !
DS:
  initialize an empty array ?
  use it to store retrieved values
A:
  1. initialize empty array
  2. iterate through each element in hash
      a. check if the element is a fruit:
          - if yes: store colors in array
          - if no: store size in array (the item is a vegetable)
  3. return array
=end

array = []

hash.each do |name, characteristics|
  case characteristics[:type]
  when "fruit" then array << characteristics[:colors].map do |color|
                                                  color.capitalize
                                                end
  else array << characteristics[:size].upcase
  end
end
