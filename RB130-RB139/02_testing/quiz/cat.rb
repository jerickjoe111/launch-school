class Cat
  attr_accessor :name, :purr_factor

  def initialize(name, purr_factor)
    @name = name
    @purr_factor = purr_factor
  end

  def miaow
    "#{name} is miaowing."
  end
end