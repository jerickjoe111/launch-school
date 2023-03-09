EXTRACT allows you to get individual components of a timestamp, like day, month, year, etc. We group by the output of this function to provide per-month values.the use of the EXTRACT function in the WHERE clause has the potential to cause severe issues with performance on larger tables. If the timestamp column has a regular index on it, Postgres will not understand that it can use the index to speed up the query and will instead have to scan through the whole table. You've got a couple of options here:

Consider creating an expression-based index on the timestamp column. With appropriately specified indexes Postgres can use indexes to speed up WHERE clauses containing function calls.
Alter the query to be a little more verbose, but use more standard comparisons, for example:

```sql
 select facid, extract(month from starttime) as month, sum(slots) as "Total Slots"
	from cd.bookings
	where
		starttime >= '2012-01-01'
		and starttime < '2013-01-01'
	group by facid, month
order by facid, month;
```