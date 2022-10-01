# Exercise 07

class Shelter
  attr_reader :register, :kernels

  def initialize
    @kernels = []
    @register = {}
  end

  def keep(pet)
    kernels << pet
  end
  
  def print_unadopted
    puts 'The Animal Shelter has the following unadopted pets:'
    kernels.each do |pet|
      puts pet
    end
  end
  
  def number_of_unadopted
    kernels.size
  end

  def adopt(owner, pet)
    owner.pets << pet

    register[owner] ||= []
    register[owner] << pet 
  end

  def print_adoptions
    register.each do |owner, pets|
      puts "#{owner.name} has adopted the following pets:"

      owner.print_pets

      puts ""
    end
  end
end

class Owner
  attr_reader :name, :pets

  def initialize(name)
    @name = name
    @pets = []
  end

  def number_of_pets
    pets.size
  end

  def print_pets
    pets.each do |pet|
      puts pet
    end
  end
end

class Pet
  attr_reader :species, :name

  def initialize(species, name)
    @species = species
    @name = name
  end

  def to_s
    "a #{species} named #{name}"
  end
end

butterscotch = Pet.new('cat', 'Butterscotch')
pudding      = Pet.new('cat', 'Pudding')
darwin       = Pet.new('bearded dragon', 'Darwin')
kennedy      = Pet.new('dog', 'Kennedy')
sweetie      = Pet.new('parakeet', 'Sweetie Pie')
molly        = Pet.new('dog', 'Molly')
chester      = Pet.new('fish', 'Chester')

phanson = Owner.new('P Hanson')
bholmes = Owner.new('B Holmes')

shelter = Shelter.new

shelter.adopt(phanson, butterscotch)
shelter.adopt(phanson, pudding)
shelter.adopt(phanson, darwin)
shelter.adopt(bholmes, kennedy)
shelter.adopt(bholmes, sweetie)
shelter.adopt(bholmes, molly)
shelter.adopt(bholmes, chester)
shelter.print_adoptions

puts "#{phanson.name} has #{phanson.number_of_pets} adopted pets."
puts "#{bholmes.name} has #{bholmes.number_of_pets} adopted pets."

