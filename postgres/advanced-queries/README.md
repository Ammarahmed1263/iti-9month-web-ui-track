# PostgreSQL Practice — Advanced Queries

This folder explores advanced SQL techniques including INSERT/UPDATE with RETURNING clauses, MERGE operations, ON CONFLICT handling, JSON data types, custom types (ENUM), and materialized views.

---

## Queries Included

### Q1 - INSERT with RETURNING
**Question:** How do you insert new records and retrieve the generated ID immediately?

Inserts a new faculty record and returns the auto-generated faculty_id in a single operation.

**Concepts Used**
- INSERT statement
- RETURNING clause
- Auto-increment primary keys
- Single-operation insert-and-retrieve

---

### Q2 - UPDATE with RETURNING and String Functions
**Question:** How do you update salaries and display both old and new values for verification?

Updates professor salaries in a department by 15%, using RETURNING with CONCAT to show name and salary changes.

**Concepts Used**
- UPDATE statement
- RETURNING with multiple columns
- CONCAT function for string manipulation
- Type casting with ::NUMERIC
- Arithmetic operations
- Comparison queries

---

### Q3 - UPDATE with RETURNING and Filtering
**Question:** How do you deactivate low-performing old students and see their names?

Updates student status to inactive for those with GPA below 2.0 and enrollment before 2022, returning their names.

**Concepts Used**
- UPDATE with multiple WHERE conditions
- RETURNING with CONCAT
- Date filtering
- Comparative operators
- Status flag management

---

### Q4 - INSERT with ON CONFLICT DO NOTHING
**Question:** How do you prevent duplicate enrollments without causing errors?

Attempts to insert an enrollment record, but silently ignores if it conflicts with existing unique constraints.

**Concepts Used**
- INSERT statement
- ON CONFLICT clause
- DO NOTHING strategy
- Composite unique constraints
- Error prevention

---

### Q5 - UPDATE with Array Comparison
**Question:** How do you update records using multiple condition matching?

Updates specific enrollment grades using tuple matching with ANY operator for complex WHERE conditions.

**Concepts Used**
- UPDATE with ANY operator
- Tuple/array comparison
- Subquery with tuples
- Multi-column WHERE conditions

---

### Q6 - MERGE Statement
**Question:** How do you insert or update records based on whether they exist?

Uses MERGE to either insert a new student or update their address if they already exist.

**Concepts Used**
- MERGE INTO statement
- WHEN MATCHED / WHEN NOT MATCHED
- Conditional insert-or-update
- Source table aliasing
- Join conditions

---

### Q7 - SELECT INTO TABLE
**Question:** How do you create a new table populated with filtered data from existing records?

Creates a new table `high_gpa_students` and populates it with students having GPA >= 3.5.

**Concepts Used**
- SELECT INTO TABLE
- Table creation from query
- Data population in single step
- WHERE filtering

---

### Q8 - CREATE TABLE AS with Aggregation
**Question:** How do you create a summary table with aggregated department statistics?

Creates a materialized snapshot of department statistics including student counts, average GPA, and scholarship amounts.

**Concepts Used**
- CREATE TABLE AS statement
- GROUP BY aggregation
- LEFT JOIN for comprehensive reporting
- COALESCE for NULL handling
- SUM function

---

### Q9 - CREATE TABLE Structure Copy & Full Copy
**Question:** How do you duplicate table structure or copy entire tables?

Creates two tables from enrollments: one with structure only (no data) and one with all data included.

**Concepts Used**
- CREATE TABLE AS with WITH NO DATA
- CREATE TABLE AS with full data
- Table copying techniques
- Schema replication

---

### Q10 - CREATE TABLE with DEFAULT Values
**Question:** How do you set default values for new records?

Creates exam_results table with DEFAULT values for status, score, exam date, and user tracking; demonstrates inserting records with and without explicit values.

**Concepts Used**
- CREATE TABLE with DEFAULT clause
- SERIAL for auto-increment IDs
- CURRENT_DATE for automatic dates
- CURRENT_USER for automatic user tracking
- DEFAULT VALUES in INSERT

---

### Q11 - JSON/JSONB Data Type Operations
**Question:** How do you work with JSON data stored in database columns?

Extracts nested JSON hobbies, counts language arrays, and retrieves boolean values from metadata stored as JSONB.

**Concepts Used**
- JSONB data type
- JSON operators: -> (object), ->> (text), '>>>'
- Array operations: jsonb_array_length
- NULL handling with JSON
- Complex data queries

---

### Q12 - CREATE TYPE ENUM
**Question:** How do you create custom enumerated types and use conditional logic to populate them?

Creates a student_level ENUM type with 4 possible values, then uses CASE to assign levels based on GPA ranges.

**Concepts Used**
- CREATE TYPE AS ENUM
- ENUM constraints
- ALTER TABLE ADD COLUMN with custom type
- CASE statement for conditional assignments
- Type casting with ::student_level

---

### Q13 - CREATE TYPE Composite Type
**Question:** How do you define composite (structured) data types for complex information?

Creates a contact_info composite type containing phone, email, and city fields, then creates a table using this custom type.

**Concepts Used**
- CREATE TYPE AS (composite)
- Composite type definition
- Structured data modeling
- Table creation with custom types
- Complex data organization

---

## Files

- lab_sol.sql
- README.md

---

## How to Run

1. Open your PostgreSQL client (psql, pgAdmin, or DBeaver).
2. Ensure the university database is set up with all tables.
3. Execute each query individually from `lab_sol.sql` by copying the code between the separator lines.
4. Observe the results, particularly RETURNING clauses which display modified data.
5. For JSONB and custom type examples, ensure the source data contains the required fields.

---

## Notes

- RETURNING clauses are PostgreSQL specific and provide immediate feedback on modifications.
- MERGE is available in PostgreSQL 15+; adjust if using older versions.
- JSONB provides superior performance and indexing compared to JSON.
- Custom ENUM types are sealed and cannot accept values outside the defined set.
- Composite types are useful for grouping related fields but require proper documentation.
- Each query (Q1-Q13) is marked with separators in `lab_sol.sql` for easy reference.
