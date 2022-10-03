# Exercise 02

class InvoiceEntry
  attr_reader :quantity, :product_name
  
  def initialize(product_name, number_purchased)
    @quantity = number_purchased
    @product_name = product_name
  end

  def update_quantity(updated_count)
    # prevent negative quantities from being set
    quantity = updated_count if updated_count >= 0
  end
end

# Alyssa looked at the code and spotted a mistake. 
# "This will fail when update_quantity is called", she says.

# Can you spot the mistake and how to address it?

# We don't have a setter method for `@quantity`. Line 13 is just initializing
# a local variable `quantity` inside the method definition. We have to write 
# a setter method for `@quantity`:

class InvoiceEntry
  attr_reader :product_name
  attr_accessor :quantity
  
  def initialize(product_name, number_purchased)
    @quantity = number_purchased
    @product_name = product_name
  end

  def update_quantity(updated_count)
    # prevent negative quantities from being set
    self.quantity = updated_count if updated_count >= 0
  end
end