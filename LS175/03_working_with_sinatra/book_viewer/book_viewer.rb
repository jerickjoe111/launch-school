require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"

require_relative "helpers"

BOOK_TITLE = 'The Adventures of Sherlock Holmes'

before do
  @table_of_contents = File.readlines('data/toc.txt')
end

# View helpers:
helpers do
  def to_chapters(table_of_contents)
    table_of_contents.map.with_index do |chapter, index|
      "<li class='pure-menu-item'><a href='/chapters/#{index + 1}' class='pure-menu-link'>#{chapter}</a></li>"
    end.join
  end

  def in_paragraphs(text)
    text.split("\n\n").map.with_index do |paragraph, index|
      "<p id='paragraph#{index}'%>#{paragraph}</p>"
    end.join
  end

  def search_results(chapter_list, search_string)
    chapter_list.map do |title, search_info|
      chapter_number = search_info[:number]
      "<li>"\
        "<h4>#{title}: </h4>"\
        "<ul>"\
          "#{search_info[:paragraphs].map do |(number, paragraph)|
            "<li><a href='/chapters/#{chapter_number}#paragraph#{number}'>"\
            "<p>#{highlight(search_string, paragraph)}</p></a></li>"
            end.join}"\
        "</ul>"\
      "</li>"
    end.join
  end

  def highlight(string, paragraph)
    original_string = paragraph[paragraph.downcase.index(string), string.size]

    paragraph.gsub!(original_string, "<strong>#{original_string}</strong>")
  end
end

get '/' do
  @title = BOOK_TITLE
  erb :home
end

get '/chapters/:number' do |number|
  number = number.to_i
  redirect '/' unless valid_chapter?(number)

  @chapter_text = File.read("data/chp#{number}.txt")
  @chapter_name = @table_of_contents[number.to_i - 1].strip
  @chapter_title = "Chapter #{to_roman(number)}: #{@chapter_name}"

  erb :chapter
end

get '/search' do
  unless params.empty?
    @search_string = params[:query]

    @matching_chapters = find_in_chapters(@search_string)
  end

  erb :search
end

not_found do 
  redirect '/'
end