-- Modify the mass column in the planets table so that 
-- it allows fractional masses to any degree of precision required. 
-- In addition, make sure the mass is required and positive.
-- While we're at it, also make the designation column required.

ALTER TABLE planets
ALTER COLUMN mass TYPE decimal,
ALTER COLUMN mass SET NOT NULL,
ADD CHECK (mass > 0.0),
ALTER COLUMN designation SET NOT NULL;