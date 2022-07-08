# Practice Problems: Sorting, Nested Collections and Working with Blocks.

# Lucas Sorribes, July 2022.

=begin

PEDAC

input: none
output: UUID string (32 hex. characters -characters between 0 and f-, broken into 5 sections by dashes: 8-4-4-4-12 )

DS:
- initialize CONSTANT with array containing all hexadecimal characters (0-f)
- initialize CONSTANT with array containing the number of needed characers as integers ([8, 4, 4, 4, 12]) ?
- empty string on which every character will be added, and then output.

- write minifunction to generate random hex. character ?

ALGORITHM:
1. initialize CONSTANT with all possible hex. characters HEX
2. initialize CONSTANT with number of needed characters NUMBERS
3. initialize empty string ("") UUID
4. UUID generation process:
   a. for each integer N in NUMBERS array:
     - repeat N times: add random character from HEX array to UUID string 
     - add '-' symbol
   b. delete last '-' symbol in UUID string
5. return UUID string
=end

HEX_CHARACTERS = %w[0 1 2 3 4 5 6 7 8 9 a b c d e f]

SECTIONS = [8, 4, 4, 4, 12]

def uuid_generator()
  uuid = ""

  SECTIONS.each do |number_of_characters|
    number_of_characters.times { uuid << HEX_CHARACTERS.sample }
    
    uuid << "-" unless number_of_characters == SECTIONS[-1] 
  end

  uuid
end
