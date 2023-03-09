The count function has a variety of uses:

- COUNT(*) simply returns the number of rows
- COUNT(address) counts the number of non-null addresses in the result set.
- COUNT(DISTINCT address) counts the number of different addresses in the facilities table.
The basic idea of an aggregate function is that it takes in a column of data, performs some function upon it, and outputs a scalar (single) value. There are a bunch more aggregation functions, including MAX, MIN, SUM, and AVG. These all do pretty much what you'd expect from their names.

One aspect of aggregate functions that people often find confusing is in queries like the below:
```sql
select facid, count(*) from cd.facilities
```
Try it out, and you'll find that it doesn't work. This is because count(*) wants to collapse the facilities table into a single value - unfortunately, it can't do that, because there's a lot of different facids in cd.facilities - Postgres doesn't know which facid to pair the count with.

Instead, if you wanted a query that returns all the facids along with a count on each row, you can break the aggregation out into a subquery as below:

```sql
select facid, 
	(select count(*) from cd.facilities)
	from cd.facilities
```
When we have a subquery that returns a scalar value like this, Postgres knows to simply repeat the value for every row in cd.facilities.


aggregation functions are applied to a column of values, and convert them into an aggregated scalar value. This is useful, but we often find that we don't want just a single aggregated result: for example, instead of knowing the total amount of money the club has made this month, I might want to know how much money each different facility has made, or which times of day were most lucrative.

In order to support this kind of behaviour, SQL has the GROUP BY construct. What this does is **batch the data together into groups, and run the aggregation function separately for each group. When you specify a GROUP BY, the database produces an aggregated value for each distinct value in the supplied columns.** In this case, we're saying 'for each distinct value of recommendedby, get me the number of times that value appears'.

GROUP BY forms groups and each group can only contain a single value per column in the results. Grouped columns are automatically condensed into a single value, while ungrouped columns must either be aggregated into a single value or be functionally dependent on one of the grouped columns.

aggregation happens after the WHERE clause is evaluated: we thus use the WHERE to restrict the data we aggregate over,

there's actually an SQL keyword designed to help with the filtering of output from aggregate functions. This keyword is HAVING.

The behaviour of HAVING is easily confused with that of WHERE. The best way to think about it is that in the context of a query with an aggregate function, **WHERE is used to filter what data gets input into the aggregate function, while HAVING is used to filter the data once it is output from the function.** Try experimenting to explore this difference!

GROUP BY forms groups and each group can only contain a single value per column in the results. Grouped columns are automatically condensed into a single value, while ungrouped columns must either be aggregated into a single value or be functionally dependent on one of the grouped columns.

**GROUP BY must specify all columns when using an aggregate function such as COUNT. However, you can ignore this requirement if you apply GROUP BY to the table's primary key.**