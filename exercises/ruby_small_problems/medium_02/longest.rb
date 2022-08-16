# # https://launchschool.com/exercises/5c3e3cf3

# >>>>>> Problem

# Write a program that reads the content of a text file 
# and then prints the longest sentence in the file based on 
# number of words. Sentences may end 
# with periods (.), exclamation points (!), or question marks (?).

# Any sequence of characters that are not spaces or sentence-ending 
# characters should be treated as a word. You should also print the 
# number of words in the longest sentence.

# input: a string (long text)

# output: an integer (size of the longest sentence in text --number of characters)


# >>>>>> Caveats



# >>>>>> Examples and test cases



# >>>>>> Data Structures + Possible methods/strategies to use

# text in File

# array of sentences from text

# sort by

# max

# split(/\.|\?|!/)

# >>>>>> Algorithm

# 1. store external file text in variable

# 2. split text in array of sentences

# 3. find longestest sentence by number of words


# >>>>>> Code

def super_reader(text)
  {
   paragraph: find_longest_paragraph(text), 
   sentence: find_longest_sentence(text), 
   word: find_longest_word(text) 
  }
end

def find_longest_sentence(text)
  sentences = []

  sentence_beginning = 0
  sentence_end = 1
  while text[sentence_end]
    if %w[. ? !].include?(text[sentence_end])
      sentences << text[sentence_beginning..sentence_end].gsub("\n", " ")

      sentence_beginning = sentence_end + 2
      sentence_end += 3
    end

    sentence_end += 1
  end

  longest_sentence = sentences.max_by { |sentence| sentence.size }
  
  [longest_sentence, longest_sentence.split.size]
end

def find_longest_paragraph(text)
  paragraphs = text.split(".\n")
  
  longest_paragraph = paragraphs.max_by do |paragraph| 
                        paragraph.size }.gsub("\n", " ").lstrip
                      end
  
  [longest_paragraph, longest_paragraph.count(".?!")]
end

def find_longest_word(text)
  words = text.gsub("[^A-Za-z]", " ").split(" ")

  longest_word = words.max_by { |word| word.size }

  [longest_word, longest_word.size]
end

