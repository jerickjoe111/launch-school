-- For this exercise, use a scalar subquery to determine 
-- the number of bids on each item. 
-- The entire query should return a table that has the 
-- name of each item along with the number of bids on an item.

SELECT name, (
  SELECT count(item_id) FROM bids
  WHERE items.id = bids.item_id
) 
FROM items;

-- With JOIN

SELECT items.name, count(bids.item_id) FROM items
LEFT JOIN bids ON bids.item_id = items.id
  GROUP BY items.name;