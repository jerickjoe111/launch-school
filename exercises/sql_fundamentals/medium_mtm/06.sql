-- Exercise 06

SELECT services.description, count(customers_services.customer_id) FROM services
JOIN customers_services ON service_id = services.id
GROUP BY services.description
HAVING count(customers_services.customer_id) >= 3;
