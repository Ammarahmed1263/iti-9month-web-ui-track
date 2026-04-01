--------------------------------------------------------------------Q1------------------------------------------------------------------
CREATE SCHEMA archive;
CREATE TABLE archive.test(id INT);
DROP SCHEMA archive CASCADE;
--------------------------------------------------------------------Q2------------------------------------------------------------------
SELECT * FROM students 
WHERE gender = 'Female' AND
is_active = TRUE AND
enroll_date > '2021-01-01';
--------------------------------------------------------------------Q3------------------------------------------------------------------
SELECT * FROM professors WHERE
(first_name LIKE 'S%' OR first_name LIKE 'K%')
AND is_active = TRUE;
--------------------------------------------------------------------Q4------------------------------------------------------------------
SELECT * FROM students WHERE phone IS NULL;
--------------------------------------------------------------------Q5------------------------------------------------------------------
(SELECT * FROM professors ORDER BY salary DESC LIMIT 5)
UNION ALL
(SELECT * FROM professors ORDER BY salary ASC LIMIT 5);
--------------------------------------------------------------------Q6------------------------------------------------------------------
SELECT * FROM courses 
WHERE course_name ILIKE '%Systems%' 
   OR course_name ILIKE '%Analysis%';
--------------------------------------------------------------------Q7------------------------------------------------------------------
SELECT * FROM students 
WHERE dept_id NOT IN (1, 3, 5) 
AND gpa > 3.0;
--------------------------------------------------------------------Q8------------------------------------------------------------------
SELECT d.dept_name, 
COUNT(s.student_id) AS student_count, 
AVG(s.gpa) AS average_gpa, 
MIN(s.gpa) AS min_gpa, 
MAX(s.gpa) AS max_gpa
FROM departments d
LEFT JOIN students s ON d.dept_id = s.dept_id
GROUP BY d.dept_name;
--------------------------------------------------------------------Q9------------------------------------------------------------------
SELECT f.faculty_name, SUM(p.salary) AS total_budget
FROM faculties f
JOIN departments d ON f.faculty_id = d.faculty_id
JOIN professors p ON d.dept_id = p.dept_id
GROUP BY f.faculty_name;
--------------------------------------------------------------------Q10-----------------------------------------------------------------
SELECT p.first_name AS professor, 
       m.first_name AS manager
FROM professors p
LEFT JOIN professors m ON p.manager_id = m.prof_id;
--------------------------------------------------------------------Q11-----------------------------------------------------------------
SELECT s.* FROM students s
JOIN departments d ON s.dept_id = d.dept_id 
WHERE d.location = 'Cairo';
--------------------------------------------------------------------Q12-----------------------------------------------------------------
UPDATE enrollments
SET grade = 98, letter_grade = 'A+'
WHERE student_id = 1
AND course_id = 3
AND semester = 'Fall'
AND year = 2022;
--------------------------------------------------------------------Q13-----------------------------------------------------------------
ALTER TABLE students ADD COLUMN phone_verified BOOLEAN DEFAULT FALSE;
--------------------------------------------------------------------Q14-----------------------------------------------------------------
ALTER TABLE professors ADD CONSTRAINT salary_range 
CHECK (salary BETWEEN 5000 AND 100000);
--------------------------------------------------------------------Q15-----------------------------------------------------------------
ALTER TABLE students RENAME COLUMN phone_verified TO is_phone_verified;
ALTER TABLE students DROP COLUMN is_phone_verified;