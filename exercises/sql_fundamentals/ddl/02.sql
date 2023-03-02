-- Add a star_id column to the planets table; 
-- this column will be used to relate each planet in the planets table to 
-- its home star in the stars table. Make sure the column is defined 
-- in such a way that it is required and must have a value that is 
-- present as an id in the stars table.

ALTER TABLE planets
ADD COLUMN star_id integer NOT NULL REFERENCES stars (id);