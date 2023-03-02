-- Write an SQL query that returns a result 
-- table with the name of each device in our database together 
-- with the number of parts for that device.

SELECT devices.name, count(parts.id) FROM devices
LEFT JOIN parts
ON devices.id = parts.device_id
GROUP BY devices.name;