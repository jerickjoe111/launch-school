-- Modify the distance column in the stars table so 
-- that it allows fractional light years to any degree of precision required.

ALTER TABLE stars
ALTER COLUMN distance TYPE decimal;