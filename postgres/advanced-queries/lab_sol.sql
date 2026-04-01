--------------------------------------------------------------------Q1------------------------------------------------------------------
INSERT INTO faculties (faculty_name, dean, building, budget) 
VALUES ('Faculty of Law', 'Dr.Hany Aziz', 'G', 8000000)
RETURNING faculty_id;
--------------------------------------------------------------------Q2------------------------------------------------------------------
UPDATE professors SET salary = salary * 1.15
WHERE dept_id = 3
RETURNING
CONCAT(first_name, ' ', last_name) AS name,
(salary / 1.15)::NUMERIC(10,2) AS old_salary,
salary AS new_salary;
--------------------------------------------------------------------Q3------------------------------------------------------------------
UPDATE students SET is_active = FALSE
WHERE gpa < 2.0 AND enroll_date < '2022-01-01'
RETURNING CONCAT(first_name, ' ', last_name);
--------------------------------------------------------------------Q4------------------------------------------------------------------
INSERT INTO enrollments (student_id, course_id, semester, year)
VALUES (5, 1, 'Fall', 2023)
ON CONFLICT (student_id, course_id, semester, year) DO NOTHING;
--------------------------------------------------------------------Q5------------------------------------------------------------------
UPDATE enrollments
SET grade = 98, letter_grade = 'A+'
WHERE (student_id, course_id, semester, year) = ANY (
    SELECT 1, 3, 'Fall', 2022
);
--------------------------------------------------------------------Q6------------------------------------------------------------------
MERGE INTO students s
USING (
    SELECT
        99 AS student_id,
        'Ammar' AS first_name,
        'Ahmed' AS last_name,
        'Ammar@gmail.com' AS email,
        'Cairo' AS address
) src
ON s.student_id = src.student_id
WHEN MATCHED THEN
UPDATE SET address = src.address
WHEN NOT MATCHED THEN
INSERT (student_id, first_name, last_name, email, address)
VALUES (src.student_id, src.first_name, src.last_name, src.email, src.address);
--------------------------------------------------------------------Q7------------------------------------------------------------------
SELECT * INTO TABLE high_gpa_students FROM students
WHERE gpa >= 3.5;
--------------------------------------------------------------------Q8------------------------------------------------------------------
CREATE TABLE dept_summary AS
SELECT
d.dept_name,
COUNT(s.student_id) AS student_count,
ROUND(AVG(s.gpa), 2) AS average_gpa,
COALESCE(SUM(sch.amount), 0) AS total_scholarship
FROM departments d
LEFT JOIN students s ON d.dept_id = s.dept_id
LEFT JOIN scholarships sch ON s.student_id = sch.student_id
GROUP BY d.dept_name;
--------------------------------------------------------------------Q9------------------------------------------------------------------
-- structure copy
CREATE TABLE enrollments_structure AS
TABLE enrollments
WITH NO DATA;

-- full copy
CREATE TABLE enrollments_copy AS
TABLE enrollments;
--------------------------------------------------------------------Q10-----------------------------------------------------------------
CREATE TABLE exam_results (
result_id SERIAL PRIMARY KEY,
status VARCHAR(20) DEFAULT 'pending',
score INTEGER DEFAULT 20,
exam_date DATE DEFAULT CURRENT_DATE,
created_by VARCHAR(50) DEFAULT CURRENT_USER
);

INSERT INTO exam_results DEFAULT VALUES;

INSERT INTO exam_results (status, score, created_by)
VALUES ('done', 95, 'admin');

SELECT * FROM exam_results;
--------------------------------------------------------------------Q11-----------------------------------------------------------------
SELECT
    CONCAT(first_name, ' ', last_name) AS student_name,
    metadata->'hobbies'->>0 AS first_hobby,
    jsonb_array_length(metadata->'languages') AS language_count,
    metadata->>'laptop' AS has_laptop
FROM students
WHERE metadata IS NOT NULL;
--------------------------------------------------------------------Q12-----------------------------------------------------------------
CREATE TYPE student_level AS ENUM ('Freshman', 'Sophomore', 'Junior', 'Senior');

ALTER TABLE students ADD COLUMN level student_level;

UPDATE students
SET level = CASE
    WHEN gpa >= 3.5 THEN 'Senior'::student_level
    WHEN gpa >= 3.0 THEN 'Junior'::student_level
    WHEN gpa >= 2.5 THEN 'Sophomore'::student_level
    ELSE 'Freshman'::student_level
END;
--------------------------------------------------------------------Q13-----------------------------------------------------------------
CREATE TYPE contact_info AS (
phone TEXT,
email TEXT,
city TEXT
);

CREATE TABLE student_contacts (
student_id INTEGER REFERENCES students(student_id),
contact contact_info
);
