## Ways to optimize how an application interacts with a database:

1. Making the SQL queries that the application uses less general and more specialized.

2. Pushing some aspects of the application logic (e.g. counting records) down to the database.

3. Reducing the number of queries that an application needs to make.

4. Analyzing and comparing the costs of running different SQL statements to identify which are the most efficient for the application to use.

## N + 1 queries:

It's where an application issues one query to retrieve data for a parent record, and then an additional query for each child record associated with that parent.

An n + 1 query generally occurs when you need to display a list of items (or child records associated with a parent), and also some details about each item in the list. The application needs to make 1 initial query to retrieve the list, and then n additional queries (one for each item in the list).