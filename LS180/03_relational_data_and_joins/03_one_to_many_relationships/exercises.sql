-- Write a SQL statement to add the following call data to the database:

-- when	                duration	first_name	 last_name	number
-- 2016-01-18 14:47:00	632	      William	     Swift	    7204890809

INSERT INTO contacts (first_name, last_name, number) VALUES
('William', 'Morris', '7204890809');

INSERT INTO calls ("when", duration, contact_id) VALUES
('2016-01-18 14:47:00', 632, 6);

-- Write a SQL statement to retrieve the call times, duration, 
-- and first name for all calls not made to William Swift.

SELECT calls.when, calls.duration, contacts.first_name FROM calls
JOIN contacts ON contacts.id = calls.contact_id
WHERE calls.contact_id != (
  SELECT id FROM contacts 
  WHERE first_name = 'William' AND last_name = 'Swift'
  );

-- Write SQL statements to add the following call data to the database:

INSERT INTO contacts (first_name, last_name, number) VALUES 
('Merve', 'Elk', '6343511126'),
('Sawa', 'Fyodorov', '6125594874');

INSERT INTO calls ("when", duration, contact_id) VALUES 
('2016-01-17 11:52:00', 175, 26), 
('2016-01-18 21:22:00', 79, 27);

-- Add a constraint to contacts that prevents a duplicate value being added in the column number.

ALTER TABLE contacts
ADD CONSTRAINT unique_number UNIQUE (number);

UPDATE films SET director_id=1 WHERE director = 'John McTiernan';
UPDATE films SET director_id=2 WHERE director = 'Michael Curtiz';
UPDATE films SET director_id=3 WHERE director = 'Francis Ford Coppola';
UPDATE films SET director_id=4 WHERE director = 'Michael Anderson';
UPDATE films SET director_id=5 WHERE director = 'Tomas Alfredson';
UPDATE films SET director_id=6 WHERE director = 'Mike Nichols';