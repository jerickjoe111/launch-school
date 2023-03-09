## Cardinality


## Key

A key is a unique identifier for rows in a database table. As a value it is usually an integer, but it also can be a hexadecimal number, long strings of numbers and letters, etc., as long as it is unique within the database and can correctly identify a particular record.

There are two main types of keys: _natural_ and _surrogate_. 

- Natural keys are values already existing in the record that can uniquely identify it within the table; examples of this could be a person's full name, social number or email. To even more specifically identify rows, more than one of these natural keys can be used, becoming a _composite key_: for example, a person could be identified in a table by using his/her full name plus its telephone number. However, this way of identifying entities is suboptimal and prone to errors, as some natural keys may or may not be present in certain rows, or they might not be as unique as they seemed at first. In order to avoid these potential problems, surrogate keys are used.

- Surrogate keys are values specifically created to identify rows in a table; they are values contained in identifier columns, usually called `id`, whose implementation includes a way for the values to remain unique across all the table, for example, with an auto-incrementing integer (via `nextval()` SQL function) or a random hexadecimal generator, and a way to enforce that uniqueness by raising errors in case an existing key value is introduced. 

There are two kinds of surrogate keys in SQL tables, _primary_ and _foreign_: Primary keys are used to identify a unique record in a table, and foreign keys are values within a table that reference the primary keys of another table. Here lays one of the most powerful feats of the relational database model: the power to establish relationships between rows from different tables. This allows us to arrange the data across multiple tables and define links between those tables in a process called _normalization_, that help us reduce redundancy and data duplication, and improve the data integrity. Also, an _index_ is created (a self-balancing binary tree) for each primary key in the database.

Although it's not strictly necessary, it's a well established good practice to define an `id` primary key column for every table with integer or valid UUI (Universally Unique Identifier) values.

## Modality

## Sequence

A sequence is a relation (like a functional type of table within a database) that generates numbers according to the rules defined in the sequence creation, usually a part of the database _schema_ providing unique integer values for primary keys. When we create a column with a data type of `serial`, a sequence is implicitly created, and the default value for that column will become the value returned from the `nextval()` function for the sequence: this way, each time a new record is inserted into the table, a new value will be automatically generated, thus acting as a unique identifier for that row within the table. 

```sql
CREATE SEQUENCE sequence_name
  [START WITH initial_value]        -- specifies the value you want the sequence to start at
  [INCREMENT BY increment_value]    -- specifies what to increment each sequence value by to get the next one
  [MINVALUE minimum_value]          -- specifies a minimum value (if desired)
  [MAXVALUE maximum_value]          -- specifies a maximum value (if desired)
  [CYCLE/NOCYCLE];                  -- CYCLE will cause the sequence to restart if it reaches a limit
                                  -- NOCYCLE will cause an error to be thrown if the limit is reached
```

We can get the next value of any given sequence with the `nextval()` function:

```sql
SELECT nextval('sequence_name');
```

## SQL

SQL is a special purpose language used to interact with databases that follow the relational model. Developed at IBM during the 70s, it is a predominantly declarative language that can be thought of as a language comprised by three sub-languages, each one dedicated to particular aspects of database interaction:

-  **DDL** (_Data Definition Language_): it is the sub-language that allows its user to define or alter the _structure_ of a database, its _schema_; this is, to create or modify the rules by which the data will be stored: what columns the table will have, what data type will be stored in each column, how a column will link a table to another, etc. Examples of DDL usage would be the following statements: `CREATE TABLE`, `ALTER TABLE`, `ADD COLUMN`, etc.

- **DML** (_Data Manipulation Language_): it is the sub-language that allows its user to insert, retrieve, modify or delete the actual data that is contained by a database. Unlike with DDL, a DML operation won't alter the database's structure. Examples of DML usage would be: `SELECT`, `INSERT`, `UPDATE`, `DELETE`.

- **DCL** (_Data Control Language_): it is the sub-language used to control the access rules to the database of particular users, the different kinds of interactions a user can have. Examples of DCL keywords would be `GRANT` or `REVOKE`.


## `JOIN`

`JOIN` statements are used to link data from two different tables within a database; this is achieved by defining a first or left table, a second or right table, and the condition on which the connection between the rows of both will be established, usually comparing a primary key in one table and its foreign counterpart in the other table:

```sql
SELECT * FROM left_table
JOIN right_table ON left_table.primary_key = right_table.foreign_key;
```

Besides this information, we have also to provide the type of `JOIN` we want to perform: `INNER`, `LEFT`, `RIGHT`, `FULL` or `CROSS`:

- _Inner join_: Sometimes 'simple join', this is the default type of join, the kind that SQL will assume we want in case we just use `JOIN`. This join is used to select all matching rows from both tables, as long as the join condition defined in the SQL statement is satisfied.

- _Left join_: Sometimes 'left outer join', a left join will take all the rows from the first or left table and join them with the rows from the second or right table in the cases the join condition is satisfied. However, unlike an inner join, a left join will always include all rows from the left table, even if the rows don't have matching rows in the second or right table: in these cases, the corresponding rows will use `NULL` to represent the absence of a value from the right table.

- _Right join_: Sometimes 'right outer join', it works exactly as the left join but in the other direction: this time, it will be the rows from the right table what will be included in the join, even if there's no matching rows in the left table, and a `NULL` will be used to represent the missing value.

- _Full join_: Sometimes 'full outer join', it is the combination of the left join and the right join: this type of join will always contain all rows from both tables, but, if there's no match in any of the two tables, a `NULL` value will be used to represent the missing value.

- _Cross join_: Sometimes 'Cartesian join', it will include all the _possible_ combinations of the rows from both tables, resulting in the cross product of the sets that each table represent. For this reason, it is performed without an `ON` condition.

It is possible to join additional tables, by chaining different join clauses in the statement, as long as there is a logical relationship between them. For each additional table, SQL will join the next join table to the table produced by the preceding join, a transient table (a kind of provisional, _virtual_ table), until there are no more joins to make, and the appropriate columns are selected.

