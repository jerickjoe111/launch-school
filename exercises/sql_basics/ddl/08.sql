-- Add a semi_major_axis column for the semi-major axis of each planet's orbit; 
-- the semi-major axis is the average distance from the planet's star 
-- as measured in astronomical units (1 AU is the average distance of the Earth from the Sun). 
-- Use a data type of numeric, and require that each planet have a value for the semi_major_axis.

ALTER TABLE planets
ADD COLUMN semi_major_axis decimal NOT NULL;