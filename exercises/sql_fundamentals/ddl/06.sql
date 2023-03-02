-- Modify the stars table to remove the CHECK constraint on 
-- the spectral_type column, 
-- and then modify the spectral_type column so it becomes an enumerated type 
-- that restricts it to one of the following 7 values: 'O', 'B', 'A', 'F', 'G', 'K', and 'M'.

ALTER TABLE stars
DROP CONSTRAINT stars_spectral_type_check;

CREATE TYPE spectral_type_enum AS ENUM ('O', 'B', 'A', 'F', 'G', 'K', 'M');

ALTER TABLE stars
ALTER COLUMN spectral_type TYPE spectral_type_enum
  USING spectral_type::spectral_type_enum;