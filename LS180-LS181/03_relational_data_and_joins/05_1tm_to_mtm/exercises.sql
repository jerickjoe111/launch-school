-- Write the SQL statement needed to create a join table that will allow a film to have multiple directors, 
-- and directors to have multiple films. 
-- Include an id column in this table, and add foreign key constraints to the other columns.

CREATE TABLE directors_films (
  id serial PRIMARY KEY,
  director_id integer NOT NULL REFERENCES directors (id) ON DELETE CASCADE,
  film_id integer NOT NULL REFERENCES films (id) ON DELETE CASCADE,
  UNIQUE(director_id, film_id)
);

-- Write the SQL statements needed to insert data into the new 
-- join table to represent the existing one-to-many relationships.

INSERT INTO directors_films (director_id, film_id) VALUES
(1, 1), 
(2, 2), 
(3, 3), 
(4, 4), 
(5, 5), 
(6, 6), 
(7, 3), 
(8, 7),
(9, 8),
(10, 4);

-- Write a SQL statement to remove any unneeded columns from films.

ALTER TABLE films 
DROP COLUMN director_id;

-- Write a SQL statement that will return the following result:

--            title           |         name
-- ---------------------------+----------------------
--  12 Angry Men              | Sidney Lumet
--  1984                      | Michael Anderson
--  Casablanca                | Michael Curtiz
--  Die Hard                  | John McTiernan
--  Let the Right One In      | Michael Anderson
--  The Birdcage              | Mike Nichols
--  The Conversation          | Francis Ford Coppola
--  The Godfather             | Francis Ford Coppola
--  Tinker Tailor Soldier Spy | Tomas Alfredson
--  Wayne's World             | Penelope Spheeris
-- (10 rows)

SELECT films.title, directors.name FROM films
JOIN directors_films ON directors_films.film_id = films.id
JOIN directors ON directors.id = directors_films.director_id
ORDER BY films.title ASC;

-- Write SQL statements to insert data for the following films into the database:

-- Film	Year	Genre	Duration	Directors
-- Fargo	1996	comedy	98	Joel Coen
-- No Country for Old Men	2007	western	122	Joel Coen, Ethan Coen
-- Sin City	2005	crime	124	Frank Miller, Robert Rodriguez
-- Spy Kids	2001	scifi	88	Robert Rodriguez

INSERT INTO films (title, year, genre, duration) VALUES ('Fargo', 1996, 'comedy', 98);
INSERT INTO directors (name) VALUES ('Joel Coen');
INSERT INTO directors (name) VALUES ('Ethan Coen');
INSERT INTO directors_films (director_id, film_id) VALUES (9, 11);

INSERT INTO films (title, year, genre, duration) VALUES ('No Country for Old Men', 2007, 'western', 122);
INSERT INTO directors_films (director_id, film_id) VALUES (9, 12);
INSERT INTO directors_films (director_id, film_id) VALUES (10, 12);

INSERT INTO films (title, year, genre, duration) VALUES ('Sin City', 2005, 'crime', 124);
INSERT INTO directors (name) VALUES ('Frank Miller');
INSERT INTO directors (name) VALUES ('Robert Rodriguez');
INSERT INTO directors_films (director_id, film_id) VALUES (11, 13);
INSERT INTO directors_films (director_id, film_id) VALUES (12, 13);

INSERT INTO films (title, year, genre, duration) VALUES ('Spy Kids', 2001, 'scifi', 88) RETURNING id;
INSERT INTO directors_films (director_id, film_id) VALUES (12, 14);

-- Write a SQL statement that determines how many films each director in the database has directed. 
-- Sort the results by number of films (greatest first) and then name (in alphabetical order).

SELECT directors.name, count(directors_films.film_id) AS films FROM directors
JOIN directors_films ON directors_films.director_id = directors.id 
GROUP BY directors.name
ORDER BY films DESC, name ASC;