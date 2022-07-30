# # https://launchschool.com/exercises/75ff93ae


# # PEDAC

# # >>>>>> Problem

# # Write a method that displays a 4-pointed diamond in an n x n grid, 
# # where n is an odd integer that is supplied as an argument to the method. 
# # You may assume that the argument will always be an odd integer.

# # input: an odd integer

# # output: a 4 pointed diamond made out of * characters

# we have to print whitespaces " "
# and                          "*"

# the number of rows is equal to the number `n`

# the central row's number of "*" is equal to `n`

# the initial whitespaces we've got to print is equal to `n` / 2 (with no decimal)

# the initial stars we've got to print is equal to `n`, in increments of 2 for each row until rows == `n`


# # >>>>>> Examples and test cases

# # diamond(1) ==

# # *

# # diamond(3) == 

# #  *
# # ***
# #  *

# # diamond(9) ==

# #     *
# #    ***
# #   *****
# #  *******
# # *********
# #  *******
# #   *****
# #    ***
# #     *


# # >>>>>> Algorithm

# 1. initialize variable `whitespaces` to `n` / 2 (without decimals)

# 2. initialize variabe `stars` to 1

# 3. LOOP 1:
#        break if `stars` is more `n`
#     a. print " " * `whitespaces`
#     b. print "*" * stars
#     c. substract 1 to `whitespaces`
#     d. add 2 to `stars`

# 4. set `whitespaces` to 1
# 5. set `stars` to `n` - 2

# 5. LOOP 2:
#       break if `stars` is less than 0
#     a. print " " * `whitespaces`
#     b. print "*" * `stars`
#     c. add 1 to `whitespaces`
#     d. substract 2 to stars.

# # >>>>>> Code

require "pry"

def diamonds(n)

  whitespaces = n / 2
  stars = 1

  loop do
    break if stars > n

    print " " * whitespaces
    puts "*" * stars

    whitespaces -= 1
    stars += 2
  end

  whitespaces = 1
  stars = n - 2 

  loop do
    break if stars < 0

    print " " * whitespaces
    puts "*" * stars

    whitespaces += 1
    stars -= 2
  end

end
