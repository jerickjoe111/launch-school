-- Exercise 09

-- Current expected income level from big ticket services (>= $100)

SELECT sum(services.price) FROM services
JOIN customers_services ON service_id = services.id
WHERE services.price >= 100;

-- Hypothetical income 

SELECT sum(services.price) * (SELECT count(customers.id) FROM customers) AS sum FROM services
WHERE services.price >= 100;
