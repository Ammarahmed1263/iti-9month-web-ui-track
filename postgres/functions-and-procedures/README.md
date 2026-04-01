# PostgreSQL Practice — Functions & Procedures

This folder covers advanced PostgreSQL programming including window functions, user-defined functions, stored procedures, and practical use cases for returning tabular data.

---

## Queries Included

### Q1 - RANK and DENSE_RANK Window Functions
**Question:** How do you rank professors by salary and show the difference between ranking methods?

Updates a professor's salary and then applies both RANK() and DENSE_RANK() window functions to demonstrate salary rankings across all professors.

**Concepts Used**
- Window functions: RANK() and DENSE_RANK()
- ORDER BY in window functions
- Salary-based ranking
- Difference between rank methods (gaps vs. no gaps)

---

### Q2 - LAG and LEAD Window Functions
**Question:** How do you compare each student's GPA with previous and next student enrollments?

Uses LAG() to access the previous student's GPA and LEAD() to access the next student's GPA in enrollment order.

**Concepts Used**
- LAG() window function (access previous row)
- LEAD() window function (access next row)
- ORDER BY for ordering context
- Comparative analysis
- NULL handling at boundaries

---

### Q3 - Running Total with SUM Window Function
**Question:** How do you calculate cumulative scholarship amounts over time?

Calculates running totals of scholarship amounts ordered by start date, showing how total funds accumulate.

**Concepts Used**
- SUM() window function
- ORDER BY with window function
- Running/cumulative totals
- Financial calculations
- Time-series analysis

---

### Q4 - NTILE Function for Quartile Classification
**Question:** How do you categorize students into performance groups (Top 25%, 50%, 75%, 100%)?

Divides students into 4 quartiles based on GPA and assigns descriptive categories to each quartile.

**Concepts Used**
- NTILE(n) window function
- CASE statement with window functions
- Quartile distribution
- Performance categorization
- ORDER BY in window functions

---

### Q5 - String Functions: LEFT and REGEXP_INSTR
**Question:** How do you extract parts of course codes and find digit positions?

Demonstrates extracting the first three characters of course codes and finding the position of the first digit using regular expressions.

**Concepts Used**
- LEFT() string function
- REGEXP_INSTR() for pattern matching
- Regular expressions
- String manipulation
- Pattern position detection

---

### Q6 - User-Defined Function (SQL Function)
**Question:** How do you create a reusable function to count students in a department?

Creates a SQL function that accepts a department ID and returns the count of students in that department.

**Concepts Used**
- CREATE FUNCTION SQL syntax
- RETURNS INTEGER
- LANGUAGE SQL
- Parameters
- Function invocation with SELECT

---

### Q7 - User-Defined Function Returning Table
**Question:** How do you create a function that returns multiple rows and columns of data?

Creates a function that accepts a department ID and bonus percentage, then returns a table showing old and new GPA with the bonus applied.

**Concepts Used**
- RETURNS TABLE syntax
- Multi-column return values
- CAST for type conversion
- Calculation with parameters
- Tabular output from functions

---

### Q8 - Stored Procedure (PLPGSQL)
**Question:** How do you create a procedure to transfer students between departments?

Creates a PLPGSQL procedure that updates a student's department and raises a notice message confirming the transfer.

**Concepts Used**
- CREATE PROCEDURE PLPGSQL
- UPDATE statements in procedures
- RAISE NOTICE for messaging
- Procedure invocation with CALL
- Control flow in procedures

---

## Files

- lab_sol.sql
- README.md

---

## How to Run

1. Open your PostgreSQL client (psql, pgAdmin, or DBeaver).
2. Ensure the university database is set up with all tables.
3. For Q1-Q5: Execute SELECT queries directly to see window function results.
4. For Q6-Q7: Execute CREATE FUNCTION first, then invoke with SELECT.
5. For Q8: Execute CREATE PROCEDURE first, then invoke with CALL.
6. Copy code between the separator lines in `lab_sol.sql` for each query.

---

## Notes

- Window functions are PostgreSQL specific and provide powerful analytical capabilities.
- LAG/LEAD return NULL at boundaries (first/last rows in ordering).
- PLPGSQL procedures require transaction control awareness.
- Functions and procedures are reusable database objects that reduce code duplication.
- Each query (Q1-Q8) is marked with separators in `lab_sol.sql` for easy reference.
- Test functions individually before using in production code.
