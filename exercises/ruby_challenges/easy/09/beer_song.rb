
# Write a program that can generate the lyrics of 
# the 99 Bottles of Beer song. 

# See the test suite for the entire song.

class BeerSong
  SONG_SIZE = [99, 0]

  def self.verse(*verses_range)
    start_verse, end_verse = verses_range
    end_verse = start_verse if end_verse.nil?

    to_print = []
    verse_number = start_verse
    while verse_number >= end_verse
      to_print << print_verse(verse_number)
      verse_number -= 1
    end

    to_print.join("\n")
  end

  def self.lyrics
    verse(*SONG_SIZE)
  end
  
  class << self
    alias_method :verses, :verse
  end
  
  class << self
    private

    def print_verse(verse_number)
      case verse_number
      when (3..99)
        "#{verse_number} bottles of beer on the wall, #{verse_number}" +
        " bottles of beer.\nTake one down and pass it around, " +
        "#{verse_number - 1} bottles of beer on the wall.\n"
      when 2
        "2 bottles of beer on the wall, 2 bottles of beer.\n" +
        "Take one down and pass it around, 1 bottle of beer " +
        "on the wall.\n"
      when 1
        "1 bottle of beer on the wall, 1 bottle of beer.\n" +
        "Take it down and pass it around, no more bottles of beer " +
        "on the wall.\n"
      else
        "No more bottles of beer on the wall, no more bottles " +
        "of beer.\nGo to the store and buy some more, 99 bottles " +
        "of beer on the wall.\n"
      end
    end
  end
end
