-- Exercise 03

-- Does the following statement use the DDL or DML component of SQL?

CREATE TABLE things (
  id serial PRIMARY KEY,
  item text NOT NULL UNIQUE,
  material text NOT NULL
);

-- DDL