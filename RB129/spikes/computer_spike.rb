# You are coding a day simulator!
# A person has to work in the computer and complete all the assessments before being
# able to play videogames!

# nouns: person, computer, task, assessment, game
# verbs: turn on, make coffee, complete, play, add, remove

module Executable
end

class Person
  def initialize(name)
    @name = name
    @task_list = []
  end

  def drink_coffee
  end

  def <<(task)
  end

  def complete(task)
  end

  def play
  end
end

class Computer
  def turn_on
  end

  def perform_task
  end
end

class Task
  include Executable

  def initialize
    @completed = false
  end
end

class Assessment < Task
end

class Game < Task
end
