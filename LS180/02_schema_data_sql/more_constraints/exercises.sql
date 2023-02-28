-- Modify all of the columns to be NOT NULL.

ALTER TABLE films ALTER COLUMN title SET NOT NULL;
ALTER TABLE films ALTER COLUMN year SET NOT NULL;
ALTER TABLE films ALTER COLUMN genre SET NOT NULL;
ALTER TABLE films ALTER COLUMN director SET NOT NULL;
ALTER TABLE films ALTER COLUMN duration SET NOT NULL;

-- Add a constraint to the table films that ensures that all films have a unique title.

ALTER TABLE films
ADD CONSTRAINT title_unique UNIQUE (title);

-- Write a SQL statement to remove the constraint added in #4.

ALTER TABLE films
DROP CONSTRAINT title_unique;

-- Add a constraint to films that requires all rows to have a value 
-- for title that is at least 1 character long.

ALTER TABLE films
ADD CONSTRAINT title_length CHECK (length(title) >= 1);

-- Write a SQL statement to remove the constraint added in #7.

ALTER TABLE films
DROP CONSTRAINT title_length;

-- Add a constraint to the table films that ensures that 
-- all films have a year between 1900 and 2100.

ALTER TABLE films 
ADD CONSTRAINT valid_year CHECK (year BETWEEN 1900 AND 2100);

-- Add a constraint to films that requires all rows 
-- to have a value for director that is at least 3 characters long 
-- and contains at least one space character ().

ALTER TABLE films
ADD CONSTRAINT valid_director 
CHECK (length(director) >= 3 AND position(' ' in director) > 0);

-- List three ways to use the schema to restrict what values can be stored in a column.

-- 1. Defining a data type,
-- 2. Setting a NOT NULL constraint,
-- 3. Defining a CHECK constraint.


-- Is it possible to define a default value for a column 
-- that will be considered invalid by a constraint? 
-- Create a table that tests this.

CREATE TABLE test (num decimal(2,3) DEFAULT 0);
ALTER TABLE test ADD CONSTRAINT test_constraint CHECK (num BETWEEN 1 AND 15);
