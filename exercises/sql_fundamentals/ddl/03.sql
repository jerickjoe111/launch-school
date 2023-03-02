-- Modify the column so that it allows star names as long as 50 characters.

ALTER TABLE stars
ALTER COLUMN name TYPE varchar(50);