# PostgreSQL Practice — Database Basics

This folder covers fundamental PostgreSQL concepts including database creation, table design, basic filtering, and introductory SQL operations on a university database.

---

## Queries Included

### Q1 - Schema Management
**Question:** How do you create and manage database schemas?

Creates a temporary schema named `archive` with a test table, then demonstrates schema removal with cascade option.

**Concepts Used**
- `CREATE SCHEMA`
- `DROP SCHEMA CASCADE`
- Schema organization basics

---

### Q2 - Multiple Condition Filtering
**Question:** How do you find active female students enrolled after a specific date?

Filters students using AND conditions on gender, active status, and enrollment date.

**Concepts Used**
- WHERE clause with multiple conditions
- AND operator
- Date comparison

---

### Q3 - Pattern Matching (LIKE)
**Question:** How do you find professors whose names start with 'S' or 'K' and are active?

Uses LIKE pattern matching with OR conditions to search for names with specific prefixes.

**Concepts Used**
- LIKE operator with wildcards
- OR operator
- Boolean conditions

---

### Q4 - NULL Value Handling
**Question:** Which students have missing phone numbers?

Identifies records where a column contains NULL values using the IS NULL operator.

**Concepts Used**
- IS NULL comparison
- Handling missing data

---

### Q5 - Set Operations (UNION ALL)
**Question:** How do you combine top-paid and lowest-paid professors in one result?

Uses UNION ALL to combine two sorted result sets (top 5 highest and lowest salaries).

**Concepts Used**
- UNION ALL operator
- ORDER BY with LIMIT
- Set operations

---

### Q6 - Case-Insensitive Matching
**Question:** Find all courses with "Systems" or "Analysis" in their names (case-insensitive)?

Uses ILIKE for case-insensitive pattern matching on course names.

**Concepts Used**
- ILIKE operator (PostgreSQL specific)
- Pattern matching
- OR conditions

---

### Q7 - Exclusion & Range Filtering
**Question:** Find high-performing (GPA > 3.0) students NOT in departments 1, 3, or 5?

Combines NOT IN with comparison operators to exclude specific departments.

**Concepts Used**
- NOT IN operator
- Comparison operators (>)
- AND conditions

---

### Q8 - GROUP BY with Aggregates & LEFT JOIN
**Question:** What are the student counts and GPA statistics by department?

Groups students by department and calculates count, average, min, and max GPA. Uses LEFT JOIN to include departments with no students.

**Concepts Used**
- GROUP BY clause
- Aggregate functions (COUNT, AVG, MIN, MAX)
- LEFT JOIN
- Null handling in joins

---

### Q9 - Multiple JOINs with Aggregation
**Question:** What is the total salary budget for each faculty?

Chains multiple JOINs through faculties → departments → professors to calculate total salary per faculty.

**Concepts Used**
- Multiple JOIN operations
- GROUP BY with aggregates
- SUM function
- Table relationships

---

### Q10 - Self-Join (Hierarchical Data)
**Question:** Show each professor with their manager's name?

Joins the professors table to itself to match employees with their managers (hierarchical relationship).

**Concepts Used**
- Self-join
- LEFT JOIN for optional relationships
- Alias multiple tables
- Handling NULL values in hierarchical data

---

### Q11 - JOIN with WHERE Clause
**Question:** Which students study in departments located in Cairo?

Uses JOIN to connect students with departments, then filters by location.

**Concepts Used**
- INNER JOIN
- WHERE clause after join
- Multi-table filtering

---

### Q12 - UPDATE Records
**Question:** How do you update a student's grade for a specific course?

Updates multiple columns in the enrollments table with specific conditions.

**Concepts Used**
- UPDATE statement
- Multiple column updates
- WHERE conditions
- Data modification

---

### Q13 - ADD Column to Table
**Question:** How do you add a new column to an existing table with a default value?

Adds a phone_verified column to students table with a DEFAULT value.

**Concepts Used**
- ALTER TABLE ADD COLUMN
- Default values
- Schema modification

---

### Q14 - ADD Constraint
**Question:** How do you enforce salary range rules on the professors table?

Adds a CHECK constraint to ensure professor salaries stay within an acceptable range.

**Concepts Used**
- ALTER TABLE ADD CONSTRAINT
- CHECK constraints
- Data validation rules

---

### Q15 - Rename & Drop Columns
**Question:** How do you rename and remove columns from a table?

Demonstrates renaming a column then subsequent removal of that column.

**Concepts Used**
- ALTER TABLE RENAME COLUMN
- ALTER TABLE DROP COLUMN
- Schema modifications

---

## Files

- setup_university_db.sql
- university_sol.sql
- lab_university.docx
- README.md

---

## How to Run

1. Open your PostgreSQL client (psql, pgAdmin, or DBeaver).
2. Execute `setup_university_db.sql` to create the database and tables.
3. Review individual queries in `university_sol.sql` and execute them one by one.
4. Refer to `lab_university.docx` for the complete assignment details.
5. Modify and test queries to deepen your understanding.

---

## Notes

- Ensure PostgreSQL is installed and running before executing SQL files.
- Each query (Q1-Q15) is marked with separators in `university_sol.sql` for easy reference.
- Test queries individually before combining them into larger operations.
- Use comments to understand the purpose of each clause in complex queries.
