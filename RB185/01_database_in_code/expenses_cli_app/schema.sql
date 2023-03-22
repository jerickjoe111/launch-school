CREATE TABLE expenses (
  id serial PRIMARY KEY,
  amount decimal(10,2) NOT NULL CHECK (amount >= 0.00),
  memo varchar(255) NOT NULL,
  created_on date NOT NULL DEFAULT current_date
);