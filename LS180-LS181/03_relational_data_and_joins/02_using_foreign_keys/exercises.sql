-- Update the orders table so that referential integrity will be preserved for the data between orders and products.

ALTER TABLE orders 
ADD CONSTRAINT orders_product_id_fkey 
FOREIGN KEY (product_id) REFERENCES products(id);

-- Use psql to insert the data shown in the following table into the database:

-- Quantity	Product
-- 10	      small bolt
-- 25	      small bolt
-- 15	      large bolt

INSERT INTO products (name) VALUES ('small bolt');
INSERT INTO products (name) VALUES ('large bolt');

INSERT INTO orders (product_id, quantity) VALUES (1, 10);
INSERT INTO orders (product_id, quantity) VALUES (1, 25);
INSERT INTO orders (product_id, quantity) VALUES (2, 15);


-- Write a SQL statement that returns a result like this:

--  quantity |    name
-- ----------+------------
--        10 | small bolt
--        25 | small bolt
--        15 | large bolt
-- (3 rows)

SELECT orders.quantity, products.name FROM orders
JOIN products ON products.id = orders.product_id;

-- Create a new table called reviews to store the data shown below. 
-- This table should include a primary key and a reference to the products table.

CREATE TABLE reviews (
  id serial PRIMARY KEY,
  product_id integer NOT NULL REFERENCES products (id),
  review text NOT NULL
)

-- Write SQL statements to insert the data shown in the table in #8.

-- Product	   Review
-- small bolt	 a little small
-- small bolt	 very round!
-- large bolt	 could have been smaller

INSERT INTO reviews (product_id, review) VALUES
(1, 'a little small'), 
(1, 'very round!'),
(2, 'could have been smaller');