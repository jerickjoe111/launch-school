# Exercise 02

# https://launchschool.com/exercises/c618c0e4


class TextAnalyzer
  def process
    file = File.open('sample.txt', 'r')
    yield(file.read)
    file.close
  end
end

analyzer = TextAnalyzer.new
analyzer.process do |file|
  paragraph_counter = file.split(/\n\n/).size

  puts "#{paragraph_counter} paragraphs"
end

analyzer.process do |file|
  line_counter = file.split(/\n/).size

  puts "#{line_counter} lines"
end

analyzer.process do |file|
  word_counter = file.scan(/\w+/).size

  puts "#{word_counter} words"
end
