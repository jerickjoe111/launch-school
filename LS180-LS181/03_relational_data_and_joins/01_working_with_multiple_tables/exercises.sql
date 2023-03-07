-- Write a query that determines how many tickets have been sold.

SELECT count(id) FROM tickets;

-- Write a query that determines how many different customers purchased tickets to at least one event.

SELECT count(DISTINCT customer_id) FROM tickets;

-- Write a query that determines what percentage of the customers in the database have purchased a ticket to one or more of the events.

SELECT round( COUNT(DISTINCT tickets.customer_id)  / COUNT(DISTINCT customers.id)::decimal * 100, 2) AS percent
  FROM customers
LEFT JOIN tickets ON tickets.customer_id = customers.id;


-- Write a query that returns the name of each event and how many tickets were sold for it, in order from most popular to least popular.

SELECT events.name, count(tickets.event_id) AS popularity FROM events
JOIN tickets ON tickets.event_id = events.id
GROUP BY events.name ORDER BY popularity DESC;

-- Write a query that returns the user id, email address, and number of events 
-- for all customers that have purchased tickets to three events.

SELECT customers.id, customers.email, COUNT(DISTINCT tickets.event_id) FROM customers
JOIN tickets ON tickets.customer_id = customers.id
GROUP BY customers.id
HAVING COUNT(DISTINCT tickets.event_id) = 3;

-- Write a query to print out a report of all tickets purchased by the customer 
-- with the email address 'gennaro.rath@mcdermott.co'. 
-- The report should include the event name and starts_at and the seat's section name, row, and seat number.

SELECT events.name, events.starts_at, sections.name, seats.row, seats.number FROM tickets
JOIN seats ON seats.id = tickets.seat_id
JOIN customers ON customers.id = tickets.customer_id
JOIN sections ON sections.id = seats.section_id
JOIN events ON events.id = tickets.event_id
WHERE customers.email = 'gennaro.rath@mcdermott.co';