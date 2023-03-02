-- create a postgresql database named "extrasolar", and then 
-- create two tables in the database as follows:

-- stars table

-- id: a unique serial number that auto-increments and serves as a primary key for this table.
-- name: the name of the star,e,g., "Alpha Centauri A". Allow room for 25 characters. Must be unique and non-null.
-- distance: the distance in light years from Earth. Define this as a whole number (e.g., 1, 2, 3, etc) that must be non-null and greater than 0.
-- spectral_type: the spectral type of the star: O, B, A, F, G, K, and M. Use a one character string.
-- companions: how many companion stars does the star have? A whole number will do. Must be non-null and non-negative.

-- planets table

-- id: a unique serial number that auto-increments and serves as a primary key for this table.
-- designation: a single alphabetic character that uniquely identifies the planet in its star system 
-- ('a', 'b', 'c', etc.)
-- mass: estimated mass in terms of Jupiter masses; use an integer for this value.

CREATE DATABASE extrasolar;

CREATE TABLE stars (
  id serial PRIMARY KEY,
  name varchar(25) UNIQUE NOT NULL,
  distance integer NOT NULL CHECK (distance > 0),
  spectral_type char(1),
  companions integer NOT NULL CHECK (companions >= 0)
);

CREATE TABLE planets (
  id serial PRIMARY KEY,
  designation char(1) UNIQUE,
  mass integer
);