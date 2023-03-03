-- In this exercise, we will build that filtering into the table that we will query. 
-- Write an SQL query that finds the largest number of bids from an individual bidder.

SELECT max(count) FROM (
  SELECT count(bidder_id) FROM bids
  GROUP BY bidder_id
 ) AS max;