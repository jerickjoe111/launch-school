-- Exercise 05

-- Write a query to display a list of all customer names together 
-- with a comma-separated list of the services they use. 
-- Your output should look like this:

SELECT customers.name, string_agg(services.description, ', ') AS services FROM customers
LEFT JOIN customers_services ON customer_id = customers.id
LEFT JOIN services ON service_id = services.id
GROUP BY customers.name;
