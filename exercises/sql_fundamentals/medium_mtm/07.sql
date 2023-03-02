-- Exercise 07

-- Assuming that everybody in our database has a bill coming due, and that all of them will pay on time, 
-- write a query to compute the total gross income we expect to receive.

SELECT sum(services.price) FROM services
JOIN customers_services ON customers_services.service_id = services.id;