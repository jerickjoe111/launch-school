class Pet
  def swim
    'swimming!'
  end

  def run
    'running!'
  end

  def jump
    'jumping!'
  end

  def fetch
    'fetching!'
  end
end

class Dog < Pet
  def speak
    'bark!'
  end
end

class Bulldog < Dog
  def swim
    'can\'t swim!'
  end
end

class Cat < Pet
  def swim
    'can\'t swim!'
  end

  def fetch
    'can\'t fetch!'
  end

  def speak
    'meow!'
  end
end

# Diagram:

#               Pet
#          ______|_______
#         Dog           Cat
#          |
#       Bulldog
#       

