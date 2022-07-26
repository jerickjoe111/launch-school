# 1.  Understand the PROBLEM
#            a.	Inputs
#            b.	Outputs
#            c.	Problem domain (clear all concepts)
#            d.	Identify rules and implicit requirements
#            e.	Build mental model of the problem
#            f.	Ask clarifying questions

# 2.	EXAMPLES/Test/Edge Cases
#            a. Consider given examples
#            b.	Try to get ahead of what would happen with wrong inputs, 
#               negative numbers, empty structures as inputs, etc.
#            c.	Try to imagine significant cases.

# 3.	What DATA STRUCTURE(s) is/are more appropriate for the problem
#            a.	Hashes? Hashes of hashes?
#            b.	Arrays? Sort first? arrays of arrays?
#            c.	Exporting to external files?

# 4.	Write the ALGORITHM using plain English
#            a.	Use agnostic language (don’t mention specific methods, etc.)
#            b.	It is flexible (Not uncommon to change during implementation)

# 5.	CODE with intent
#            a.	Notice here lays PEDAC’s major benefit: it is a translation of the
#               previous algorithm into the programming language of your choice.
#            b.	You will probably have to go back and forth to the algorithm. 
#               (Normal and expected)

# 6.  SCRATCHPAD
#            a.	Write here snippets of code, inspirations, gut-feelings, etc.

def swap(string)
  string.split(" ").map do |word|
    buffer = word[0]
    word[0] = word[-1]
    word[-1] = buffer
    word
  end.join(" ")
end
