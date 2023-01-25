def to_roman(number)
  values = {
    1000 => "M",  
     900 => "CM",  
     500 => "D",  
     400 => "CD",
     100 => "C",  
      90 => "XC",  
      50 => "L",  
      40 => "XL",  
      10 => "X",  
        9 => "IX",  
        5 => "V",  
        4 => "IV",  
        1 => "I",  
  }

  roman = ""
  values.each do |value, letter|
    roman << letter*(number / value)
    number = number % value
  end
  roman
end

def valid_chapter?(number)
   (1..@table_of_contents.size).cover?(number.to_i) 
end

def find_in_chapters(string)
  return {} if string.nil?

  chapters_list = 
    Dir.glob('data/chp*').sort_by do |chapter_file_name|
      chapter_file_name.match(/(\d+).*+/)[1].to_i
    end

  matching_chapters = @table_of_contents.each_with_object({}) { |title, hash| hash[title] = { paragraphs: [] }  }

  chapters_list.each_with_index do |chapter_file_name, index|
    File.read(chapter_file_name).split("\n\n").each_with_index do |paragraph, paragraph_index|
      if paragraph.downcase.include?(string.downcase)
        matching_chapters[@table_of_contents[index]][:paragraphs] << [paragraph_index, paragraph]
        matching_chapters[@table_of_contents[index]][:number] = index + 1
      end
    end
  end

  matching_chapters.reject! { |_, hash| hash[:paragraphs].empty? }

  matching_chapters
end