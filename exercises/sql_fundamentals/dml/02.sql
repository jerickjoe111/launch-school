-- Add in two different devices. One should be named, "Accelerometer". 
-- The other should be named, "Gyroscope".

-- The first device should have 3 parts (this is grossly simplified). 
-- The second device should have 5 parts. 
-- The part numbers may be any number between 1 and 10000. 
-- There should also be 3 parts that don't belong to any device yet.

INSERT INTO devices (name) VALUES
('Accelerometer'), ('Gyroscope');

INSERT INTO parts (part_number, device_id) VALUES
(19, 1), (17, 1), (163, 1), (16, 2), (22, 2), (23, 2), (18, 2), (13, 2);

INSERT INTO parts (part_number) VALUES
(55), (432), (999);

