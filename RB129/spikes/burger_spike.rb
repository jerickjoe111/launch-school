# The following is a short description of an application that lets a customer place an order for a meal:

# - A meal always has three meal items: a burger, a side, and drink.
# - For each meal item, the customer must choose an option.
# - The application must compute the total cost of the order.

# 1. Identify the nouns and verbs we need in order to model our classes and methods.
# 2. Create an outline in code (a spike) of the structure of this application.
# 3. Place methods in the appropriate classes to correspond with various verbs.

# 1. nouns: meal, burger, side, drink, customer, option, order
#    verbs: choose, compute_cost

require 'pry'

class Customer
  attr_reader :name, :order

  def initialize(name)
    @name = name
  end

  def choose
    @order = Order.new
  end
end

class Order
  attr_reader :burger, :side, :drink

  def initialize
    @burger = Burger.new
    @side = Side.new
    @drink = Drink.new
  end

  def total
    price = [burger, side, drink].map(&:price).sum
    format('$%.2f', price)
  end
end

class MealItem
  attr_reader :name, :price

  def initialize
    @name = prompt_option[:name]
    @price = self.class::OPTIONS.find { |item| item[:name] == name }[:price]
  end

  def display_available
    self.class::OPTIONS.each_with_index do |item, index|
      puts "=> #{index + 1}. #{item[:name]}: " + format('$%.2f', item[:price])
    end
  end

  def prompt_option
    puts 'Welcome to our restaurant!' if self.is_a?(Burger)
    puts "Please, choose a #{self.class} option:"
    display_available
    number = gets.chomp.to_i - 1
    self.class::OPTIONS[number]
  end
end

class Burger < MealItem
  OPTIONS = [
    { name: 'Beef & Cheese', price: 9 },
    { name: 'Mexican', price: 9 },
    { name: 'Tex-Mex', price: 9 }
  ]
end

class Side < MealItem
  OPTIONS = [
    { name: 'Fries', price: 3 },
    { name: 'Sweet Potato', price: 3 },
    { name: 'Frijoles', price: 3 }
  ]
end

class Drink < MealItem
  OPTIONS = [
    { name: 'Water', price: 1 },
    { name: 'Coke', price: 2 },
    { name: 'Beer', price: 2 }
  ]
end

luke = Customer.new('Luke')

luke.choose

binding.pry