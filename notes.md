Model(Data) -> View(UI/FE -> produces HTML) -> Controller(Business Logic(Route Handlers live here))

UI/FE(React) --{JSON(https)}>> App/Api(HTTP API) --{SQL}>> DB(DBMS)

SQL(Queries(DML-CRUD), Commands)
## RDBMS

- PostgreSQL
- Oracle
- MySQL
- SQL server
- SQLite3

## Non-Relational DBMS
- MongoDB
- Cassandra
- Redis
- Memcache
- Neo4j ?

{} =/ [] Object Relational Mapper

API(JS <> Knex <> db driver)

JS -> SQL
[Rows] -> JS

```sql
SQL Statement:

-- list our employess
SELECT employeeid as ID, FirstName as First, LastName as Last
FROM Employees;

-- list our customers from Mexico
SELECT * from customers
WHERE country = 'Mexico'; /*{for strings and dates use single quotes}*/

-- list our customers from Mexico or that live in Paris, France
SELECT * from customers
WHERE country = 'Mexico' OR city = 'Paris'
ORDER BY country -- asc by default

-- list our customers from Mexico or that live in Paris, France
SELECT * from customers
WHERE country = 'Mexico' OR city = 'Paris'
ORDER BY country desc;

-- list our customers from Mexico or that live in Paris, France
SELECT * from customers
WHERE country = 'Mexico' OR city = 'Paris'
ORDER BY country desc, ContactName;

-- list our customers from Mexico or that live in Paris, France
SELECT * from customers
WHERE country = 'Mexico' OR city = 'Paris'
ORDER BY country desc, ContactName
LIMIT 5;

INSERT INTO Shippers (ShipperName, Phone) 
VALUES ('Vincent Shipping', '212-555-5555')

insert into Employees (lastname, firstname, birthdate)
VALUES ('Curtis', 'Sierra', '05-18-1991');

--update employees
SELECT * from employees
WHERE employeeid = 11;

UPDATE employees
SET notes = 'was not born on new year', photo = 'N/A'
WHERE employeeid = 11;

DELETE FROM Employees WHERE employeeid = 11;

```

## Using Knex
to update npm `npm install -g npm`

`npm i knex`
`npm i sqlite3`