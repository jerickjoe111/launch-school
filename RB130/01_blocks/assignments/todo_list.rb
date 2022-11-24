# This class represents a collection of Todo objects.
# You can perform typical collection-oriented actions
# on a TodoList object, including iteration and selection.

class TodoList
  attr_accessor :title
  
  private 
  attr_reader :todos
  
  public

  def initialize(title)
    @title = title
    @todos = []
  end

  def add(todo_item)
    if todo_item.is_a?(Todo)
      todos << todo_item
    else
      raise TypeError, "Can only add Todo objects"
    end
  end

  alias_method :<<, :add

  def size
    todos.size
  end

  def first
    todos.first
  end

  def last
    todos.last
  end

  def to_a
    todos.dup
  end

  def done?
    todos.all?(&:done?)
  end

  def item_at(index)
    index >= todos.size ? raise(IndexError) : todos[index]
  end

  def mark_done_at(index)
    index >= todos.size ? raise(IndexError) : todos[index].done!
  end

  def mark_undone_at(index)
    index >= todos.size ? raise(IndexError) : todos[index].undone!
  end

  def done!
    todos.each(&:done!)
  end

  def shift
    todos.shift
  end

  def pop
    todos.pop
  end

  def remove_at(index)
    index >= todos.size ? raise(IndexError) : todos.delete_at(index)
  end

  def to_s
    "---- #{title} ----\n" + todos.map(&:to_s).join("\n")
  end

  def each
    todos.each { |todo_item| yield todo_item }
    self
  end

  def select
    output_todo_list = TodoList.new("Selected from #{title}")

    each { |todo_item| output_todo_list << todo_item if yield todo_item }

    output_todo_list
  end

  def find_by_title(input_string)
    select { |todo_item| todo_item.title == input_string }
  end

  def all_done
    select { |todo_item| todo_item.done? }
  end

  def all_not_done
    select { |todo_item| !todo_item.done? }
  end

  def mark_done(input_string)
    find_by_title(input_string).done!    
  end

  def mark_all_done
    each(&:done!)
  end

  def mark_all_undone
    each(&:undone!)
  end
end

# This class represents a todo item and its associated
# data: name and description. There's also a "done"
# flag to show whether this todo item is done.

class Todo
  DONE_MARKER = 'X'
  UNDONE_MARKER = ' '

  attr_accessor :title, :description, :done

  def initialize(title, description='')
    @title = title
    @description = description
    @done = false
  end

  def done!
    self.done = true
  end

  def done?
    done
  end

  def undone!
    self.done = false
  end

  def to_s
    "[#{done? ? DONE_MARKER : UNDONE_MARKER}] #{title}"
  end

  def ==(otherTodo)
    title == otherTodo.title &&
      description == otherTodo.description &&
      done == otherTodo.done
  end
end

todo1 = Todo.new("Buy milk")
todo2 = Todo.new("Clean room")
todo3 = Todo.new("Go to gym")

list = TodoList.new("Today's Todos")
list.add(todo1)
list.add(todo2)
list.add(todo3)

todo1.done!

binding.irb
