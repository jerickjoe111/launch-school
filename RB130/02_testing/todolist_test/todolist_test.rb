require 'simplecov'
SimpleCov.start

require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

require_relative 'todolist'

class TodoListTest < MiniTest::Test

  def setup
    @todo1 = Todo.new("Buy milk")
    @todo2 = Todo.new("Clean room")
    @todo3 = Todo.new("Go to gym")
    @todos = [@todo1, @todo2, @todo3]

    @list = TodoList.new("Today's Todos")
    @list.add(@todo1)
    @list.add(@todo2)
    @list.add(@todo3)
  end

  def test_to_a
    assert_equal(@todos, @list.to_a)
  end

  def test_size
    assert_equal(@todos.size, @list.size)
  end

  def test_first
    assert_equal(@todos.first, @list.first)
  end

  def test_last
    assert_equal(@todos.last, @list.last)
  end

  def test_shift
    assert_equal(@todo1, @list.shift)
    assert_equal([@todo2, @todo3], @list.to_a)
  end

  def test_pop
    assert_equal(@todo3, @list.pop)
    assert_equal([@todo1, @todo2], @list.to_a)
  end

  def test_done?
    @todos.each(&:done!)
    @list.each(&:done!)

    assert_equal(@todos.all?(&:done?), @list.done?)
  end

  def test_typeerror
    assert_raises(TypeError) { @list.add 1 }
    assert_raises(TypeError) { @list.add 'string' }
  end

  def test_shovel
    @list << Todo.new('Testing')
    assert_equal(4, @list.size)
  end

  def test_alias_add_shovel
    testing_todo = Todo.new('Testing')
    @list << testing_todo
    @todos << testing_todo
    assert_equal(@todos, @list.to_a)
  end

  def test_item_at
    assert_raises(IndexError) { @list.item_at(3) }
    assert_equal(@todo1, @list.item_at(0))
  end

  def test_mark_done_at
    assert_raises(IndexError) { @list.mark_done_at(3) }
    @list.mark_done_at(0)
    assert_equal(true, @list.item_at(0).done?)
    assert_equal(false, @list.item_at(1).done?)
  end

  def test_mark_undone_at
    assert_raises(IndexError) { @list.mark_undone_at(3) }
    @list.mark_done_at(0)
    @list.mark_done_at(1)
    @list.mark_undone_at(0)
    assert_equal(false, @list.item_at(0).done?)
    assert_equal(true, @list.item_at(1).done?)
  end

  def test_done!
    @list.done!
    assert_equal(true, @todo1.done?)
    assert_equal(true, @todo2.done?)
    assert_equal(true, @todo3.done?)
    assert_equal(true, @list.done?)
  end

  def test_remove_at
    assert_raises(IndexError) { @list.remove_at(3) }
  end

  def test_to_s
    output = <<~OUTPUT.chomp
    ---- Today's Todos ----
    [ ] Buy milk
    [ ] Clean room
    [ ] Go to gym
    OUTPUT
  
    assert_equal(output, @list.to_s)
  end

  def test_to_s_one_done
    output = <<~OUTPUT.chomp
    ---- Today's Todos ----
    [ ] Buy milk
    [X] Clean room
    [ ] Go to gym
    OUTPUT
    
    @list.mark_done_at(1)
    assert_equal(output, @list.to_s)
  end

  def test_to_s_all_done
    output = <<~OUTPUT.chomp
    ---- Today's Todos ----
    [X] Buy milk
    [X] Clean room
    [X] Go to gym
    OUTPUT

    @list.mark_all_done
    assert_equal(output, @list.to_s)
  end

  def test_each
    @list.each(&:done!)
    assert(@list.done?)
  end

  def test_each
    assert_same(@list.each(&:done?), @list.each(&:done?))
  end

  def test_select
    @todo1.done!
    testing_list = TodoList.new(@list.title)
    testing_list << @todo1

    assert_equal(1, @list.select { |todo| todo.done? }.size)
    assert_equal(1, testing_list.select { |todo| todo.done? }.size)
  end

  def test_find_by_title
    assert_equal(@todos.first, @list.find_by_title('Buy milk').first)
  end

  def test_all_done
    assert_equal(0, @list.all_done.size)
    @list.mark_done_at(0)
    assert_equal(@todo1, @list.all_done.first)
  end

  def test_all_not_done
    assert_equal(3, @list.all_not_done.size)
    @list.mark_undone_at(0)
    assert_equal(@todo1, @list.all_not_done.first)
  end

  def test_mark_done
    @list.mark_done('Buy milk')
    assert_equal(@todo1, @list.all_done.first)
  end

  def test_mark_all_done
    @list.mark_all_done
    assert_equal(3, @list.all_done.size)
  end

  def test_mark_all_undone
    @list.mark_all_undone
    assert_equal(0, @list.all_done.size)
  end
end