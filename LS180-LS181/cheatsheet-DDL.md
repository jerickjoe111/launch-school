## Create table:

```sql
CREATE TABLE table_name (
  column_name data_type [constraints],
  column_name data_type [constraints]
  -- ...
);
```

## Data types:

| Column Data Type | Description |
| --- | --- |
| serial	| This data type is used to create identifier columns for a PostgreSQL database. These identifiers are integers, auto-incrementing, and cannot contain a null value. |
| char(N)	| This data type specifies that information stored in a column can contain strings of up to N characters in length. If a string less than length N is stored, then the remaining string length is filled with space characters. |
| varchar(N)	| This data type specifies that information stored in a column can contain strings of up to N characters in length. If a string less than length N is stored, then the remaining string length isn't used. |
| boolean	| This is a data type that can only contain two values "true" or "false". In PostgreSQL, boolean values are often displayed in a shorthand format, t or f |
| integer or INT| 	An integer is simply a "whole number." An example might be 1 or 50, -50, or 792197 depending on what storage type is used. |
| decimal(precision, scale)| 	The decimal type takes two arguments, one being the total number of digits in the entire number on both sides of the decimal point (the precision), the second is the number of the digits in the fractional part of the number to the right of the decimal point (the scale). |
| timestamp	| The timestamp type contains both a simple date and time in YYYY-MM-DD HH:MM:SS format. |
| date	| The date type contains a date but no time. |


## Rename a table:

```sql
ALTER TABLE table_name
  RENAME TO new_table_name;
```

## Rename a column:

```sql
ALTER TABLE table_name
  RENAME COLUMN column_name TO new_column_name;
```

## Change a column's data type:

```sql
ALTER TABLE table_name
  ALTER COLUMN column_name TYPE new_type;
```

## Convert a column's data type and convert the old values to the new type:

```sql
ALTER TABLE table_name
  ALTER COLUMN column_name TYPE new_type USING column_name::new_type;
```

## Adding a `NOT NULL` constraint (always a column constraint):

```sql
ALTER TABLE table_name
  ALTER COLUMN column_name
  SET NOT NULL;
```

## Adding any other constraint to a table:

```sql
ALTER TABLE table_name
  ADD [ CONSTRAINT constraint_name ] constraint clause;
```

## Adding a `UNIQUE` constraint to a table:

```sql
ALTER TABLE table_name
  ADD UNIQUE (column_name);
```

## Adding a `DEFAULT` value constraint to a column:

```sql
ALTER TABLE table_b
  ALTER COLUMN column_name SET DEFAULT default_value;
```

## Adding a custom `CHECK` constraint to a table:

```sql
ALTER TABLE table_name
  ADD CHECK (column_name and a boolean expression);
```

## Removing a constraint:

```sql
ALTER TABLE table_name
  DROP CONSTRAINT constraint_name;
```

## Removing a `NOT NULL` constraint from a column:

```sql
ALTER TABLE table_name
  ALTER COLUMN column_name
  DROP NOT NULL;
```

## Removing a `DEFAULT` clause from a column:

```sql
ALTER TABLE table_name
  ALTER COLUMN column_name
  DROP DEFAULT;
```

## Add a constraint as a table constraint
```sql
ALTER TABLE table_name
  ADD CONSTRAINT "table_column_name_fkey"
  FOREIGN KEY (column_name) REFERENCES other_column(id) ON DELETE CASCADE;
```

## Remove a foreign key constraint with the constraint name

```sql
ALTER TABLE table_name
  DROP CONSTRAINT "table_column_id_fkey";
```


## Adding a column:

```sql
ALTER TABLE table_name
  ADD COLUMN column_name data_type [constraints];
```

## Removing a column:

```sql
ALTER TABLE table_name
  DROP COLUMN column_name;
```

## Deleting a table

```sql
DROP TABLE table_name;
```
