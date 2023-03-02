-- Exercise 04

-- Using RIGHT OUTER JOIN, 
-- write a query to display a list of all services 
-- that are not currently in use. 

SELECT services.description FROM customers_services
RIGHT JOIN services ON service_id = services.id
WHERE customers_services.service_id IS NULL;
