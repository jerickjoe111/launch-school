-- Write an SQL query to display all devices along with all the parts that make them up. 
-- We only want to display the name of the devices. 
-- Its parts should only display the part_number.

SELECT devices.name, parts.part_number FROM devices
JOIN parts
ON devices.id = parts.device_id;