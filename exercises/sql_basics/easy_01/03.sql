-- Exercise 03


-- For this exercise, we'll add some data to our birds table. 
-- Add five records to this database so that our data looks like:

--  id |   name   | age | species
-- ----+----------+-----+---------
--   1 | Charlie  |   3 | Finch
--   2 | Allie    |   5 | Owl
--   3 | Jennifer |   3 | Magpie
--   4 | Jamie    |   4 | Owl
--   5 | Roy      |   8 | Crow
-- (5 rows)

INSERT INTO birds
(name, age, species)
VALUES
('Charlie', 3, 'Finch'),
('Allie', 5, 'Owl'),
('Jennifer', 3, 'Magpie'),
('Jamie', 4, 'Owl'),
('Roy', 8, 'Crow')
;