## Insert data into an existing table:

```sql
INSERT INTO table_name 
[(column_name, column_name,...)]
VALUES
(data_for_column, data_for_column,...),
(data_for_column, data_for_column,...)
...
;
```


## Retrieve data from a table:

```sql
SELECT column_name or * FROM table_name
[ WHERE expression ]
[ GROUP BY ]
[ HAVING  ]
[ ORDER BY column_name [order mode ASC or DESC]]
[ LIMIT integer ]
[ OFFSET integer ] -- Skips the first `integer` rows.
;
```

## Update data within a table in a specific row/s:

```sql
UPDATE table_name
SET column_name = new_data, other_column = new_data, etc.
WHERE expression;
```

## Update data in all rows:

```sql
UPDATE table_name
SET column_name = new_data;
```

## Delete data within a table in a specific row/s:

```sql
DELETE FROM table_name
WHERE expression;
```

## Delete data in all rows:

```sql
DELETE FROM table_name
```