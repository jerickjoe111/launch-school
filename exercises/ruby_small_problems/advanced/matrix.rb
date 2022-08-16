# https://launchschool.com/exercises/01d32e03


# >>>>>> Problem

# Write a method that takes a 3 x 3 matrix in Array of Arrays 
# format and returns the transpose of the original matrix. 

# input: a 2d array (a 3x3 matrix)

# output: a new (transposed) matrix


# >>>>>> Caveats

# transposed: columns of the original are the rows of the new matrix

# >>>>>> Examples and test cases

# matrix 

# 1  5  8
# 4  7  2
# 3  9  6

# transposed matrix

# 1  4  3
# 5  7  9
# 8  2  6

# >>>>>> Data Structures + Possible methods/strategies to use

# init. new 3x3 2d array

# a loop inside a loop

# >>>>>> Algorithm

# 0. init empty matrix

# 1. for each column in input matrix:
#     - for each element in column:
#         - store element in equivalent place in row of output matrix
      
# >>>>>> Code

require 'pry'

def transpose(original_matrix)
  matrix_size = original_matrix.size

  transposed_matrix = Array.new (matrix_size) { [] }
 
  column = 0             
  loop do
    break if column == matrix_size

    row = 0
    loop do
      break if row == matrix_size

      transposed_matrix[column] << original_matrix[row][column]

      row += 1 
    end

    column += 1
  end

  transposed_matrix
end

def transpose!(original_matrix)
  matrix_size = original_matrix.size
 
  row = 0             
  loop do
    break if row == matrix_size

    column = 0
    loop do
      break if column == matrix_size

      original_matrix[column][row] = original_matrix[row][column]

      column += 1 
    end

    row += 1
  end

  original_matrix
end
