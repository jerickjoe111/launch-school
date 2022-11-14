# You're designing a Recipe Book application.

# Each Recipe Book has one or more recipes. Starter recipes, main course recipes, 
# and dessert recipes are all recipe types and share some characteristics but 
# not others. Recipes have one or more ingredients.

# You decide that the application also needs a Conversion module that contains 
# some temperature and measurement conversion methods required by Recipe 
# and Ingredient objects.

module Conversion
  def convert_to(units)
  end
end

class RecipeBook
  attr_reader :recipes

  def initialize
    @recipes = []
  end

  def <<(new_recipe)
    recipes << new_recipe
  end
end

class Recipe
  include Conversion
  
  attr_reader :name, :ingredients
  
  def initialize(name, ingredient_list)
    @name = name
    @ingredient_list = ingredient_list
    set_ingredients_amounts
  end

  private
  
  def set_ingredients_amounts
    ingredient_list.each do |ingredient|
      ingredient.amount = self.class::AMOUNTS[:ingredient][:amount]
    end
  end
end

class Starter < Recipe
  AMOUNTS = {}
end

class MainCourse < Recipe
  AMOUNTS = {}
end

class Dessert < Recipe
  AMOUNTS = {}
end

class Ingredient
  include Conversion

  attr_reader :name
  attr_accessor :amount

  def initialize(name)
    @name = name
  end
end

