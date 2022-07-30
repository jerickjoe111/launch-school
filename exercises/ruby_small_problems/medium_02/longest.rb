# https://launchschool.com/exercises/5c3e3cf3

# PEDAC

# >>>>>> Problem

# Write a program that reads the content of a text file and then prints the 
# longest sentence in the file based on number of words. Sentences may end
# with periods (.), exclamation points (!), or question marks (?). 
# Any sequence of characters that are not spaces or sentence-ending 
# characters should be treated as a word. You should also print the number 
# of words in the longest sentence.

# input: a long text

# output: an integer (the size in words of the longes sentence)


# >>>>>> Examples and test cases



# >>>>>> Data Structures

# Text: an array of Sentences

# sentence: an array of words

# >>>>>> Algorithm

# 1. split text in Sentences

# 2. split sentences in words

# 3. return longest sentence (by number of words == number of elements in array sentence)

# >>>>>> Code

text = File.read("./text_file.txt")

sentences = text.split(/\.|\?|\!/).map { |sentence| sentence.split(" ")}

sentences.each {|sentence| sentence[-1] << "." }

p sentences.max_by { |sentence| sentence.size }.size