class Person
  attr_accessor :first_name, :last_name

  def initialize(full_name)
    full_name = full_name.split
    @first_name = full_name.first
    @last_name = full_name.size > 1 ? full_name.last : ''
  end

  def name
    (first_name + ' ' + last_name).strip
  end

  def name=(name)
    name = name.split
    self.first_name = name.first

    self.last_name = name.size > 1 ? name.last : ''
  end

  def to_s
    name
  end
end

bob = Person.new("Robert Smith")

puts "The person's name is: #{bob}"