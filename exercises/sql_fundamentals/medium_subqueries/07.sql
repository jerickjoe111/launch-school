
-- We want to check that a given item is in our database. 
-- There is one problem though: we have all of the data 
-- for the item, but we don't know the id number. 
-- Write an SQL query that will display the id for the 
-- item that matches all of the data that we know, 
-- but does not use the AND keyword. 

-- Here is the data we know:

-- 'Painting', 100.00, 250.00

SELECT id FROM items
WHERE ROW(name, initial_price, sales_price) = ROW('Painting', 100.00, 250.00);