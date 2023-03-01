-- Alter the SQL query above so that we get a result table that looks like the following.

SELECT devices.name AS name, COUNT(parts.device_id)
FROM devices
JOIN parts ON devices.id = parts.device_id
GROUP BY devices.name
ORDER BY deviceS.name DESC;