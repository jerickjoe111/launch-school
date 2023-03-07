-- The books_categories table from this database was created with foreign keys that don't have the NOT NULL and ON DELETE CASCADE constraints. Go ahead and add them now.

ALTER TABLE books_categories
  ALTER COLUMN book_id SET NOT NULL;

ALTER TABLE books_categories
  ALTER COLUMN category_id SET NOT NULL;

ALTER TABLE books_categories
  DROP CONSTRAINT "books_categories_book_id_fkey",
  ADD CONSTRAINT "books_categories_book_id_fkey"
  FOREIGN KEY ("book_id")
  REFERENCES books(id)
  ON DELETE CASCADE;

ALTER TABLE books_categories
  DROP CONSTRAINT "books_categories_category_id_fkey",
  ADD CONSTRAINT "books_categories_category_id_fkey"
  FOREIGN KEY ("category_id")
  REFERENCES categories(id)
  ON DELETE CASCADE;

-- Write a SQL statement that will return the following result:

--  id |     author      |           categories
-- ----+-----------------+--------------------------------
--   1 | Charles Dickens | Fiction, Classics
--   2 | J. K. Rowling   | Fiction, Fantasy
--   3 | Walter Isaacson | Nonfiction, Biography, Physics
-- (3 rows)

SELECT books.id, books.author, string_agg(categories.name, ', ') AS categories FROM books
JOIN books_categories ON books_categories.book_id = books.id
JOIN categories ON categories.id = books_categories.category_id
GROUP BY books.id
ORDER BY id;

-- Write SQL statements to insert the following new books into the database. What do you need to do to ensure this data fits in the database?

-- Author	Title	Categories
-- Lynn Sherr	Sally Ride: America's First Woman in Space	Biography, Nonfiction, Space Exploration
-- Charlotte Brontë	Jane Eyre	Fiction, Classics
-- Meeru Dhalwala and Vikram Vij	Vij's: Elegant and Inspired Indian Cuisine	Cookbook, Nonfiction, South Asia

ALTER TABLE books ALTER COLUMN title TYPE text;

INSERT INTO books (title, author) VALUES ('Sally Ride: America''s First Woman in Space', 'Lynn Sherr');
INSERT INTO books_categories VALUES (4, 1);
INSERT INTO books_categories VALUES (4, 5);
INSERT INTO categories (name) VALUES ('Space Exploration');
INSERT INTO books_categories VALUES (4, 7);

INSERT INTO books (title, author) VALUES ('Jane Eyre', 'Charlotte Brontë');
INSERT INTO books_categories VALUES (5, 2);
INSERT INTO books_categories VALUES (5, 4);

INSERT INTO books (title, author) VALUES ('Vij''s: Elegant and Inspired Indian Cuisine', 'Meeru Dhalwala and Vikram Vij');
INSERT INTO categories (name) VALUES ('Cookbook');
INSERT INTO categories (name) VALUES ('South Asia');
INSERT INTO books_categories VALUES (6, 1);
INSERT INTO books_categories VALUES (6, 8);
INSERT INTO books_categories VALUES (6, 9);

-- Write a SQL statement to add a uniqueness constraint on the combination of columns 
-- book_id and category_id of the books_categories table. This constraint should be a table constraint; 
-- so, it should check for uniqueness on the combination of book_id and category_id across 
-- all rows of the books_categories table.

ALTER TABLE books_categories 
ADD UNIQUE (book_id, category_id);

-- Write a SQL statement that will return the following result:

--       name        | book_count |                                 book_titles
-- ------------------+------------+-----------------------------------------------------------------------------
-- Biography         |          2 | Einstein: His Life and Universe, Sally Ride: America's First Woman in Space
-- Classics          |          2 | A Tale of Two Cities, Jane Eyre
-- Cookbook          |          1 | Vij's: Elegant and Inspired Indian Cuisine
-- Fantasy           |          1 | Harry Potter
-- Fiction           |          3 | Jane Eyre, Harry Potter, A Tale of Two Cities
-- Nonfiction        |          3 | Sally Ride: America's First Woman in Space, Einstein: His Life and Universe, Vij's: Elegant and Inspired Indian Cuisine
-- Physics           |          1 | Einstein: His Life and Universe
-- South Asia        |          1 | Vij's: Elegant and Inspired Indian Cuisine
-- Space Exploration |          1 | Sally Ride: America's First Woman in Space

SELECT categories.name, count(books.id) AS book_count, string_agg(books.title, ', ') AS book_titles FROM categories
JOIN books_categories ON books_categories.category_id = categories.id
JOIN books ON books.id = books_categories.book_id
GROUP BY categories.name
ORDER BY categories.name;