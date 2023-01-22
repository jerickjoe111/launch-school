require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"

require_relative 'helpers'

BOOK_TITLE = 'The Adventures of Sherlock Holmes'
TABLE_OF_CONTENTS = File.readlines('data/toc.txt')

get '/' do
  @title = BOOK_TITLE
  @table_of_contents = TABLE_OF_CONTENTS

  erb :home
end

get '/chapters/:number' do |number|
  number = number.to_i
  @table_of_contents = TABLE_OF_CONTENTS
  @chapter_text = File.read("data/chp#{number}.txt")
  @chapter_name = @table_of_contents[number.to_i - 1].strip
  @chapter_title = "Chapter #{to_roman(number)}: #{@chapter_name}"

  erb :chapter
end
