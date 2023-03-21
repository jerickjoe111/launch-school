## Quick Review:

Connect to a database:
```ruby
db = PG.connect(dbname:'')
```
You can store the returning `Connection` object to a variable (here `db`)

Execute a query against a database:
```ruby
result = db.exec('SELECT * FROM table;')
```
This will return a `Result` object on which we will call different methods in order to access the data from that query:

## Review of useful commands

| Command                                     | What it does                                                                  |
|---------------------------------------------|-------------------------------------------------------------------------------|
| `PG.connect(dbname: "a_database")`            | Create a new PG::Connection object                                            |
| `connection.exec("SELECT * FROM table_name")` | execute a SQL query and return a PG::Result object                            |
| `result.values`                              | Returns an Array of Arrays containing values for each row in result|
| `result.fields`                               | Returns the names of columns as an Array of Strings                           |
| `result.ntuples`                              | Returns the number of rows in result|
| `result.each(&amp;block)`                     | Yields a Hash of column names and values to the block for each row in result|
| `result.each_row(&amp;block)`                 | Yields an Array of values to the block for each row in result|
| `result[index]`                               | Returns a Hash of values for row at index in result |
| `result.field_values(column)`                 | Returns an Array of values for column, one for each row in result  |
| `result.column_values(index)`                 | Returns an Array of values for column at index, one for each row in result |
