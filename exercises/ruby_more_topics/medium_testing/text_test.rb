require 'minitest/autorun'
# require 'minitest/reporters'
# Minitest::Reporters.use!

require_relative 'text'

class TextTest < MiniTest::Test
  TEST_LETTER_01 = 'a'
  TEST_LETTER_02 = 'b'

  def setup
    @test_file = File.open('sample_text.txt', 'r')
    @sample_text = @test_file.read
    @text = Text.new(@sample_text)
  end

  def test_swap
    expected_text = @sample_text.gsub(TEST_LETTER_01, TEST_LETTER_02)
    actual_text = @text.swap(TEST_LETTER_01, TEST_LETTER_02)

    assert_equal(expected_text, actual_text)    
  end

  def test_word_count
    assert_equal(@sample_text.split.size, @text.word_count)
  end

  def teardown
    @test_file.close
    puts "File has been closed: #{@test_file.closed?}"
  end
end