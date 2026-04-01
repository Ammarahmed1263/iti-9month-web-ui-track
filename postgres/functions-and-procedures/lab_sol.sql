--------------------------------------------------------------------Q1------------------------------------------------------------------
UPDATE professors SET salary = 29000.00 WHERE first_name = 'Sameh';

SELECT CONCAT(first_name, ' ', last_name),
salary,
RANK() OVER(ORDER BY salary DESC),
DENSE_RANK() OVER(ORDER BY salary DESC)
FROM professors;
--------------------------------------------------------------------Q2------------------------------------------------------------------
SELECT CONCAT(first_name, ' ', last_name),
enroll_date,
gpa AS curr_std_gpa,
LAG(gpa) OVER (ORDER BY enroll_date) AS pev_std_gpa,
LEAD(gpa) OVER (ORDER BY enroll_date) AS next_std_gpa
FROM students;
--------------------------------------------------------------------Q3------------------------------------------------------------------
SELECT
scholarship_id,
student_id,
amount,
start_date,
SUM(amount) OVER (ORDER BY start_date, scholarship_id) AS running_total
FROM scholarships;
--------------------------------------------------------------------Q4------------------------------------------------------------------
SELECT
CONCAT(first_name, ' ', last_name),
gpa,
CASE NTILE(4) OVER (ORDER BY gpa DESC)
	WHEN 1 THEN 'Top Performer'
	WHEN 2 THEN 'Good Performer'
	WHEN 3 THEN 'Fair Performer'
	ELSE 'Needs Improvement'
END AS gpa_category
FROM students WHERE gpa IS NOT NULL;
--------------------------------------------------------------------Q5------------------------------------------------------------------
SELECT LEFT(course_code, 3) AS first_three,
REGEXP_INSTR(course_code, '[0-9]') AS digit_index
FROM courses;
--------------------------------------------------------------------Q6------------------------------------------------------------------
CREATE OR REPLACE FUNCTION get_dept_student_count(p_dept_id INTEGER)
RETURNS INTEGER AS $$
	SELECT COUNT(*) FROM students WHERE dept_id = p_dept_id; 
$$ LANGUAGE SQL;

SELECT get_dept_student_count(1);
--------------------------------------------------------------------Q7------------------------------------------------------------------
CREATE OR REPLACE FUNCTION give_gpa_bonus(p_dept_id INTEGER, bonus_percent NUMERIC)
RETURNS TABLE(
	student_name TEXT,
	old_gpa NUMERIC(3,2),
	new_gpa NUMERIC(3,2)
) AS $$
	SELECT CONCAT(first_name, ' ', last_name), gpa,
	CAST(gpa + (gpa * (bonus_percent / 100.0)) AS NUMERIC(3,2))
	FROM students
	WHERE dept_id = p_dept_id;
$$ LANGUAGE SQL;

SELECT * FROM give_gpa_bonus(1, 50);
--------------------------------------------------------------------Q8------------------------------------------------------------------
CREATE OR REPLACE PROCEDURE transfer_student(p_student_id INTEGER, new_dept_id INTEGER)
LANGUAGE PLPGSQL
AS $$
BEGIN
UPDATE students SET dept_id = new_dept_id
WHERE student_id = p_student_id; 

RAISE NOTICE 'student % transfered to department % ' , p_student_id , new_dept_id ; 
END;
$$;

CALL transfer_student(2, 1);

SELECT student_id, dept_id FROM students;