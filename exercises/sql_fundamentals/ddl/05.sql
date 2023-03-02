-- The spectral_type column in the stars table is 
-- currently defined as a one-character string that contains 
-- one of the following 7 values: 'O', 'B', 'A', 'F', 'G', 'K', and 'M'. 
-- However, there is currently no enforcement on the values that may be entered. 
-- Add a constraint to the table stars that will enforce the requirement that 
-- a row must hold one of the 7 listed values above. 
-- Also, make sure that a value is required for this column.

ALTER TABLE stars
ADD CHECK (spectral_type IN ('O', 'B', 'A', 'F', 'G', 'K', 'M')),
ALTER COLUMN spectral_type SET NOT NULL;