-- Exercise 08

-- A new customer, 'John Doe', has signed up with our company. 
-- His payment token is 'EYODHLCN'. Initially, he has signed up for 
-- UNIX hosting, DNS, and Whois Registration. 

-- Create any SQL statement(s) needed to add this record to the database.

INSERT INTO customers (name, payment_token)
VALUES
('John Doe', 'EYODHLCN');

INSERT INTO customers_services (customer_id, service_id)
VALUES
(7, 1),
(7, 2),
(7, 3);