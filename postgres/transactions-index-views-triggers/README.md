# PostgreSQL Practice — Transactions, Indexes, Views & Triggers

This folder covers advanced database features including NULL handling, performance optimization with indexes, view creation, trigger-based auditing, transactions with savepoints, and role-based access control.

---

## Queries Included

### Q1 - COALESCE for NULL Handling
**Question:** How do you replace NULL values with meaningful defaults in query results?

Uses COALESCE to display 'Unknown' for students with NULL nationality values.

**Concepts Used**
- COALESCE function
- NULL handling
- Default value replacement
- Data presentation

---

### Q2 - NULLIF Function
**Question:** How do you convert specific values (like 0) to NULL for data cleanup?

Cleans up GPA data by converting 0 values to NULL for better data integrity.

**Concepts Used**
- NULLIF function
- Conditional NULL assignment
- Data quality improvement
- Value filtering

---

### Q3 - Nested NULL Handling with COALESCE and NULLIF
**Question:** How do you combine multiple NULL handling techniques?

Chains COALESCE and NULLIF to handle both 0 values and missing data in GPA fields.

**Concepts Used**
- Nested functions
- COALESCE with NULLIF
- Type casting with ::TEXT
- Complex NULL logic

---

### Q4 - Temporary Tables
**Question:** How do you create temporary working tables for intermediate calculations?

Creates a temporary table for course statistics including enrollment counts and average grades, filtered by performance threshold.

**Concepts Used**
- CREATE TEMP TABLE
- Table scoping (session temporary)
- GROUP BY with HAVING clause
- Intermediate data storage

---

### Q5 - Simple INDEX Creation
**Question:** How do you optimize queries that filter by department?

Creates an index on the dept_id column to speed up lookups by department.

**Concepts Used**
- CREATE INDEX
- Single-column indexing
- Query performance optimization
- Index naming conventions

---

### Q6 - UNIQUE INDEX
**Question:** How do you enforce email uniqueness at the database level?

Creates a unique index on the email column that prevents duplicate emails and enables faster duplicate detection.

**Concepts Used**
- CREATE UNIQUE INDEX
- Constraint enforcement
- Data integrity
- Insert error prevention

---

### Q7 - Partial INDEX (Conditional Index)
**Question:** How do you create an index for only active professors?

Creates an index that only includes professors marked as active, reducing index size while optimizing active-only queries.

**Concepts Used**
- CREATE INDEX with WHERE clause
- Partial/filtered indexing
- Space optimization
- Conditional indexing

---

### Q8 - Views (Virtual Tables)
**Question:** How do you create a simplified, denormalized view of student data across multiple tables?

Creates a view combining student, department, and faculty information with descriptive names for easier queries.

**Concepts Used**
- CREATE VIEW
- Multiple JOINs in views
- Virtual table abstraction
- Simplified query interface
- LEFT JOIN usage

---

### Q9 - Triggers for Auditing
**Question:** How do you automatically track changes to critical data?

Creates an audit table and a BEFORE UPDATE trigger that logs enrollment grade changes with timestamp and user information.

**Concepts Used**
- CREATE TRIGGER
- BEFORE UPDATE trigger type
- Trigger functions (PLPGSQL)
- Audit trail creation
- OLD.column vs NEW.column

---

### Q10 - Querying Audit Logs
**Question:** How do you retrieve audit records to verify data modifications?

Queries the enrollment audit log to see what changes were made and by whom.

**Concepts Used**
- SELECT from audit tables
- Timestamp querying
- User tracking
- Audit verification

---

### Q11 - Triggers for Data Validation
**Question:** How do you enforce business rules automatically via triggers?

Creates a BEFORE INSERT trigger that ensures professor salaries meet minimum requirements, automatically correcting invalid values.

**Concepts Used**
- BEFORE INSERT trigger type
- Validation logic in triggers
- Automatic correction
- Data guardrails

---

### Q12 - Transactions: Multi-Statement Updates
**Question:** How do you ensure multiple operations complete together or fail together?

Uses BEGIN/COMMIT to atomically update professor salaries and log the changes, ensuring both succeed or both fail.

**Concepts Used**
- BEGIN transaction
- COMMIT
- Atomicity
- Audit logging in transactions
- Multi-statement consistency

---

### Q13 - ROLLBACK: Reverting Changes
**Question:** How do you cancel pending changes before committing?

Begins a transaction to delete enrollments for a student, then rolls back to keep the data intact.

**Concepts Used**
- ROLLBACK statement
- Transaction cancellation
- ACID properties
- Data protection

---

### Q14 - SAVEPOINT: Partial Rollback
**Question:** How do you partially undo changes while keeping other modifications?

Uses SAVEPOINT to update one faculty budget, then rolls back only that change while confirming another faculty update.

**Concepts Used**
- SAVEPOINT creation
- ROLLBACK TO SAVEPOINT
- Nested transactions
- Selective undo

---

### Q15 - Role-Based Access Control (Read-Only)
**Question:** How do you create read-only access for certain users?

Creates a role with only SELECT permissions and demonstrates that INSERT fails for that role.

**Concepts Used**
- CREATE ROLE
- GRANT SELECT
- SET ROLE / RESET ROLE
- Permission denial
- Read-only access

---

### Q16 - Role-Based Access Control (Advanced)
**Question:** How do you create users with specific permissions and revoke dangerous operations?

Creates roles with SELECT/INSERT/UPDATE permissions but removes DELETE, creating a safe read-write access level.

**Concepts Used**
- CREATE ROLE with password
- IN ROLE for role membership
- GRANT multiple permissions
- REVOKE specific permissions
- User login creation

---

### Q17 - Database Export with pg_dump
**Question:** How were `schema_only.sql`, `data_only.sql`, and `university.sql` generated?

These files are PostgreSQL dump outputs generated using the `pg_dump` command (from terminal, not PL/pgSQL). They represent different export scopes of the same database:

- `schema_only.sql`: structure only (tables, types, functions, procedures, triggers, views, indexes)
- `data_only.sql`: records only (`COPY` statements)
- `university.sql`: full dump (schema + data)

**Command Used**
- Full dump:
	`pg_dump -U postgres -d university_db > university.sql`
- Schema only:
	`pg_dump -U postgres -d university_db --schema-only > schema_only.sql`
- Data only:
	`pg_dump -U postgres -d university_db --data-only > data_only.sql`

**Concepts Used**
- PostgreSQL backup/export with `pg_dump`
- Schema-only vs data-only backup strategies
- Database portability and disaster recovery
- Versioned SQL snapshots

---

## Files

- lab_sol.sql
- schema_only.sql
- data_only.sql
- university.sql (complete database dump)
- README.md

---

## How to Run

1. Open your PostgreSQL client (psql, pgAdmin, or DBeaver).
2. Load the complete database using `university.sql` or build incrementally with `schema_only.sql` and `data_only.sql`.
3. For Q1-Q4: Execute SELECT and CREATE TABLE queries to see NULL handling and temporary tables.
4. For Q5-Q7: Execute CREATE INDEX commands, then run queries to observe performance impact.
5. For Q8: Execute CREATE VIEW, then query the view using SELECT.
6. For Q9-Q14: Execute trigger and transaction statements, observing audit logs and rollback behavior.
7. For Q15-Q16: Execute role creation and permission statements, testing access with different roles.
8. Copy code between the separator lines in `lab_sol.sql` for each query.

---

## Notes

- Indexes improve read performance but slow down writes; use strategically.
- Triggers automatically enforce business logic but can impact performance; monitor carefully.
- SAVEPOINT allows nested transactions for more granular control.
- Roles and permissions follow the principle of least privilege.
- Each query (Q1-Q16) is marked with separators in `lab_sol.sql` for easy reference.
- Test triggers and constraints thoroughly before production use.
- Audit tables should be backed up and archived for compliance.
