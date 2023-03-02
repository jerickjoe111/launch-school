-- Exercise 10

-- Write the necessary SQL statements to delete 
-- the "Bulk Email" service and customer "Chen Ke-Hua" from the database.

DELETE FROM customers_services
WHERE customer_id = 4;

DELETE FROM customers
WHERE name = 'Chen Ke-Hua';

DELETE FROM customers_services
WHERE service_id = 7;

DELETE FROM services
WHERE id = 7;