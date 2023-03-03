-- Write a SQL query that shows all items that have had bids put on them. 
-- Use the logical operator IN for this exercise, as well as a subquery.

SELECT name AS "Bid on Items" FROM items WHERE id IN 
  (SELECT item_id FROM bids);