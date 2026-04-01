--------------------------------------------------------------------Q1------------------------------------------------------------------
SELECT student_id, COALESCE(nationality, 'Unknown') AS nationality FROM students;
--------------------------------------------------------------------Q2------------------------------------------------------------------
SELECT CONCAT(first_name, ' ', last_name) AS full_name,
gpa AS real_gpa,
NULLIF(gpa, 0) AS cleaned_gpa
FROM students;
--------------------------------------------------------------------Q3------------------------------------------------------------------
SELECT CONCAT(first_name, ' ', last_name),
COALESCE(NULLIF(gpa, 0)::TEXT, 'Not Evaluated') AS gpa
FROM students;

SELECT d.dept_name, COUNT(s.student_id),
COALESCE(NULLIF(AVG(s.gpa), 0), 0)::NUMERIC(3, 2)
FROM departments d LEFT JOIN students s ON d.dept_id = s.dept_id
GROUP BY d.dept_name;
--------------------------------------------------------------------Q4------------------------------------------------------------------
CREATE TEMP TABLE temp_course_stats AS
SELECT 
  c.course_code,
  c.course_name,
  COUNT(e.student_id) AS enrolled_count,
  AVG(e.grade)::NUMERIC(4, 2) AS avg_grade
FROM courses c
LEFT JOIN enrollments e
  ON c.course_id = e.course_id
GROUP BY c.course_code, c.course_name
HAVING AVG(e.grade) > 75;
--------------------------------------------------------------------Q5------------------------------------------------------------------
CREATE INDEX idx_students_dept ON students(dept_id);
--------------------------------------------------------------------Q6------------------------------------------------------------------
CREATE UNIQUE INDEX idx_students_email ON students(email);

INSERT INTO students (first_name, last_name, email) 
VALUES ('Nour', 'Ibrahim', 'nour.ibrahim@student.edu');
--------------------------------------------------------------------Q7------------------------------------------------------------------
CREATE INDEX idx_active_professors_salary ON professors(salary) WHERE is_active = TRUE;
--------------------------------------------------------------------Q8------------------------------------------------------------------
CREATE VIEW v_student_details AS
SELECT 
s.student_id,
CONCAT(s.first_name, ' ', s.last_name) AS full_name,
s.email,
s.gpa,
s.dept_id,
d.dept_name,
f.faculty_name
FROM students s
LEFT JOIN departments d 
ON s.dept_id = d.dept_id
LEFT JOIN faculties f 
ON d.faculty_id = f.faculty_id;

select * FROM v_student_details WHERE dept_id = 3;
--------------------------------------------------------------------Q9------------------------------------------------------------------
CREATE TABLE enrollment_audit(
	audit_id SERIAL PRIMARY KEY,
	old_grade NUMERIC(4, 2),
	new_grade NUMERIC(4, 2),
	student_id INTEGER,
	changed_at TIMESTAMPTZ DEFAULT NOW(),
	changed_by TEXT
);

CREATE OR REPLACE FUNCTION log_enrollment_audit()
RETURNS TRIGGER AS $$
BEGIN
	IF OLD.grade IS DISTINCT FROM NEW.grade THEN
		INSERT INTO enrollment_audit (old_grade, new_grade, student_id, changed_at, changed_by)
		VALUES (OLD.grade, NEW.grade, OLD.student_id, NOW(), CURRENT_USER);
	END IF;

	RETURN NEW;
END; $$
LANGUAGE PLPGSQL;


CREATE TRIGGER trigger_enrollment
BEFORE UPDATE ON enrollments
FOR EACH ROW 
EXECUTE FUNCTION log_enrollment_audit();
--------------------------------------------------------------------Q10-----------------------------------------------------------------
UPDATE enrollments SET grade = 70 WHERE enrollment_id = 1;
SELECT grade, enrollment_id FROM enrollments WHERE enrollment_id = 1;
SELECT * FROM enrollment_audit;
--------------------------------------------------------------------Q11-----------------------------------------------------------------
CREATE OR REPLACE FUNCTION check_salary()
RETURNS TRIGGER AS $$
BEGIN
	IF NEW.salary IS NULL OR NEW.salary < 5000 THEN
		NEW.salary := 5000;
	END IF;

	RETURN NEW;
END; $$
LANGUAGE PLPGSQL;

CREATE TRIGGER trigger_professor
BEFORE INSERT ON professors
FOR EACH ROW
EXECUTE FUNCTION check_salary();

INSERT INTO professors (first_name, last_name, salary, email)
VALUES ('Test1', 'NullCase', NULL, 'null@gmail.com');

SELECT * FROM professors WHERE first_name = 'Test1';
--------------------------------------------------------------------Q12-----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS salary_log ( 
  log_id    SERIAL PRIMARY KEY, 
  prof_id   INTEGER, 
  old_salary NUMERIC, 
  new_salary NUMERIC, 
  changed_by TEXT DEFAULT CURRENT_USER, 
  changed_at TIMESTAMPTZ DEFAULT NOW() 
); 

BEGIN;
    UPDATE professors
    SET salary = salary * 1.1 WHERE dept_id = 1;

    INSERT INTO salary_log (prof_id, old_salary, new_salary)
    SELECT prof_id, salary / 1.1, salary
    FROM professors WHERE dept_id = 1;
COMMIT;
--------------------------------------------------------------------Q13-----------------------------------------------------------------
BEGIN;
	DELETE FROM enrollments WHERE student_id = 1;
ROLLBACK;

SELECT * FROM enrollments WHERE student_id = 1;
--------------------------------------------------------------------Q14-----------------------------------------------------------------
BEGIN;
	UPDATE faculties SET budget = budget + 500000 WHERE faculty_id = 1;
	SAVEPOINT after_first_faculty;

	UPDATE faculties SET budget = budget + 500000 WHERE faculty_id = 2;
	ROLLBACK TO SAVEPOINT after_first_faculty;
COMMIT;
--------------------------------------------------------------------Q15-----------------------------------------------------------------
CREATE ROLE uni_readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO uni_readonly;

SET ROLE uni_readonly;

SELECT * FROM students;

INSERT INTO students (first_name, last_name, email) 
VALUES ('Test', 'User', 'test2@gmail.com');

RESET ROLE;
--------------------------------------------------------------------Q16-----------------------------------------------------------------
CREATE ROLE uni_readwrite;
CREATE ROLE student_portal LOGIN PASSWORD 'portal123' IN ROLE uni_readonly;

GRANT SELECT, INSERT, UPDATE, DELETE ON students TO uni_readwrite;

REVOKE DELETE ON students FROM uni_readwrite;
-- \dp students

REVOKE ALL PRIVILEGES ON students FROM student_portal;
REVOKE uni_readonly FROM student_portal;