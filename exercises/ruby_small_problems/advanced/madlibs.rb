# https://launchschool.com/exercises/3dd7dd43


# >>>>>> Problem

# Make a madlibs program that reads in some text from a text file that you have created, 
# and then plugs in a selection of randomized nouns, verbs, adjectives, 
# and adverbs into that text and prints it. You can build your lists of nouns, 
# verbs, adjectives, and adverbs directly into your program, but the text data 
# should come from a file or other external source. Your program should read this 
# text, and for each line, it should place random words of the appropriate 
# types into the text, and print the result.


# input:

# output:


# >>>>>> Caveats



# >>>>>> Examples and test cases



# >>>>>> Data Structures + Possible methods/strategies to use



# >>>>>> Algorithm



# >>>>>> Code

WORDS = {
  adjectives: %w[quick lazy sleepy ugly],
  nouns: %w[fox dog head leg],
  verbs: %w[jumps lifts bites licks],
  adverb: %w[easily lazily noisily excitedly]
}.freeze

string = File.read('text_data.txt')

puts format(string,
            { adjective: WORDS[:adjectives].sample,
              noun: WORDS[:nouns].sample,
              verb: WORDS[:verbs].sample,
              adverb: WORDS[:adverb].sample })
