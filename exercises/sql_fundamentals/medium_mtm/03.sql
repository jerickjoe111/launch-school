-- Exercise 03

Write a query to retrieve the customer data for every customer 
who does not currently subscribe to any services.

SELECT customers.* FROM customers
LEFT JOIN customers_services ON customer_id = customers.id
WHERE service_id IS NULL;

-- Further Exploration:

-- Can you write a query that displays all customers with 
-- no services and all services that currently don't have any customers? 

SELECT customers.*, services.* FROM customers
FULL JOIN customers_services ON customer_id = customers.id
FULL JOIN services ON service_id = services.id
WHERE service_id IS NULL OR customer_id IS NULL;