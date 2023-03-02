-- Exercise 08

-- For this exercise, write some code that ensures that only birds 
-- with a positive age may be added to the database. 
-- Then write and execute an SQL statement to check that this new constraint works correctly.

ALTER TABLE birds
ALTER COLUMN age
ADD CHECK (age > 0);