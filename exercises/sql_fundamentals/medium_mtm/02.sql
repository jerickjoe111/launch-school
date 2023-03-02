-- Exercise 02

-- Write a query to retrieve the customer data for every customer 
-- who currently subscribes to at least one service.

SELECT DISTINCT customers.* FROM customers
JOIN customers_services ON customers_services.customer_id = customers.id; 