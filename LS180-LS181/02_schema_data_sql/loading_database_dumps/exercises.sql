-- Write a SQL statement that returns all rows in the films table.

SELECT * FROM films;

-- Write a SQL statement that returns all rows 
-- in the films table with a title shorter than 12 letters.

SELECT * FROM films WHERE length(title) < 12;

-- Write the SQL statements needed to add two additional columns to the films table: 

-- director, which will hold a director's full name, 

-- and duration, which will hold the length of the film in minutes.

ALTER TABLE films
ADD COLUMN director varchar(255),
ADD COLUMN duration integer;

-- Write SQL statements to update the existing rows in the database with values for the new columns:

-- title	          director	            duration
-- Die Hard	        John McTiernan	      132
-- Casablanca	      Michael Curtiz	      102
-- The Conversation	Francis Ford Coppola	113

UPDATE films
SET director = 'John McTiernan', duration = 132
WHERE title = 'Die Hard';

UPDATE films
SET director = 'Michael Curtiz', duration = 102
WHERE title = 'Casablanca';

UPDATE films
SET director = 'Francis Ford Coppola', duration = 113
WHERE title = 'The Conversation';

-- Write SQL statements to insert the following data into the films table:

-- title	                    year	genre	    director	        duration
-- 1984	                      1956	scifi	    Michael Anderson	90
-- Tinker Tailor Soldier Spy	2011	espionage	Tomas Alfredson	  127
-- The Birdcage	              1996	comedy	  Mike Nichols	    118

INSERT INTO films VALUES
('1984', 1956, 'scifi', 'Michael Anderson', 90),
('Tinker Tailor Soldier Spy', 2011, 'espionage', 'Thomas Alfredson', 127),
('The Birdcage', 1996, 'comedy', 'Michael Nichols', 118);

-- Write a SQL statement that will return the title and age in years of each movie, 
-- with newest movies listed first:

SELECT title, extract('year' from current_date) - year AS age FROM films
ORDER BY 2023 - year;

-- Write a SQL statement that will return the title and duration of each movie 
-- longer than two hours, with the longest movies first.

SELECT title, duration FROM films
WHERE duration > 120 ORDER BY duration DESC;

-- Write a SQL statement that returns the title of the longest film.

SELECT title FROM films
ORDER BY DURATION DESC
LIMIT 1;

