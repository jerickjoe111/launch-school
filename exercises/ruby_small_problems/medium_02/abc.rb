# https://launchschool.com/exercises/41e03303

# PEDAC

# >>>>>> Problem

# Set of blocks:

# B:O   X:K   D:Q   C:P   N:A
# G:T   R:E   F:S   J:W   H:U
# V:I   L:Y   Z:M

# Write a method that returns true if the word passed in as an argument 
# can be spelled from this set of blocks, false otherwise.

# input: a string (a word)

# output: a boolean

# if the input word contains one of the letters in one of the blocks,
# it can't contain the other letter in that same block:

# if it does: return false

# if it does not: return true


# >>>>>> Examples and test cases

# block_word?('BATCH') == true
# block_word?('BUTCH') == false
# block_word?('jest') == true
# block_word?('cop') == false


# >>>>>> Data Structures

# a constant for an array of block regexps


# >>>>>> Algorithm

# 1. store blocks in an array of regexps

# 2. for each regex in regexps:
#     a. check if input word matches the regex:
#         - if yes: return false (it can't be spelled from this set of blocks)
#         - if no: return true


# >>>>>> Code



BLOCKS = ["ab", "xk", "dq", "cp", "na", "gt", "re", "fs",
  "fs", "jw", "hu", "vi", "ly", "zm"
  ]

def block_word?(word)
  possible = true

  BLOCKS.each do |block| 
    possible = false if word.match?(block[0]) && word.match?(block[1])
  end

  possible
end
