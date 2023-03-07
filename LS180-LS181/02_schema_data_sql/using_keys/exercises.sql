-- Write a SQL statement that makes a new sequence called "counter".

CREATE SEQUENCE counter;

-- Write a SQL statement to retrieve the next value from the sequence created in #1.

SELECT nextval('counter'); 

-- Write a SQL statement that removes a sequence called "counter".

DROP SEQUENCE counter;

-- What will the name of the sequence created by the following SQL statement be?

CREATE TABLE regions (id serial PRIMARY KEY, name text, area integer);

-- regions_id_seq

-- Write a SQL statement to add an auto-incrementing integer primary key column to the films table.

ALTER TABLE films
ADD COLUMN id serial PRIMARY KEY;

-- Write a SQL statement that modifies the table films to 
-- remove its primary key while preserving the id column and the values it contains.

ALTER TABLE films
DROP CONSTRAINT films_pkey;
