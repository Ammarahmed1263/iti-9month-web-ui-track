--
-- PostgreSQL database dump
--

\restrict nlfMfY44LHOkH3TtjrYfMXf2DIMwOaUl5oAQSAF4XIzzV0LdjZq5hwUbRTYG1nA

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: archive; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA archive;


ALTER SCHEMA archive OWNER TO postgres;

--
-- Name: contact_info; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.contact_info AS (
	phone text,
	email text,
	city text
);


ALTER TYPE public.contact_info OWNER TO postgres;

--
-- Name: student_level; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.student_level AS ENUM (
    'Freshman',
    'Sophomore',
    'Junior',
    'Senior'
);


ALTER TYPE public.student_level OWNER TO postgres;

--
-- Name: check_salary(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.check_salary() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
	IF NEW.salary IS NULL OR NEW.salary < 5000 THEN
		NEW.salary := 5000;
	END IF;

	RETURN NEW;
END; $$;


ALTER FUNCTION public.check_salary() OWNER TO postgres;

--
-- Name: get_dept_student_count(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_dept_student_count(p_dept_id integer) RETURNS integer
    LANGUAGE sql
    AS $$
	SELECT COUNT(*) FROM students WHERE dept_id = p_dept_id; 
$$;


ALTER FUNCTION public.get_dept_student_count(p_dept_id integer) OWNER TO postgres;

--
-- Name: give_gpa_bonus(integer, numeric); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.give_gpa_bonus(p_dept_id integer, bonus_percent numeric) RETURNS TABLE(student_name text, old_gpa numeric, new_gpa numeric)
    LANGUAGE sql
    AS $$
	SELECT CONCAT(first_name, ' ', last_name), gpa,
	CAST(gpa + (gpa * (bonus_percent / 100.0)) AS NUMERIC(3,2))
	FROM students
	WHERE dept_id = p_dept_id;
$$;


ALTER FUNCTION public.give_gpa_bonus(p_dept_id integer, bonus_percent numeric) OWNER TO postgres;

--
-- Name: log_enrollment_audit(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.log_enrollment_audit() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
	IF OLD.grade IS DISTINCT FROM NEW.grade THEN
		INSERT INTO enrollment_audit (old_grade, new_grade, student_id, changed_at, changed_by)
		VALUES (OLD.grade, NEW.grade, OLD.student_id, NOW(), CURRENT_USER);
	END IF;

	RETURN NEW;
END; $$;


ALTER FUNCTION public.log_enrollment_audit() OWNER TO postgres;

--
-- Name: transfer_student(integer, integer); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.transfer_student(IN p_student_id integer, IN new_dept_id integer)
    LANGUAGE plpgsql
    AS $$
BEGIN
UPDATE students SET dept_id = new_dept_id
WHERE student_id = p_student_id; 

RAISE NOTICE 'student % transfered to department % ' , p_student_id , new_dept_id ; 
END;
$$;


ALTER PROCEDURE public.transfer_student(IN p_student_id integer, IN new_dept_id integer) OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: test; Type: TABLE; Schema: archive; Owner: postgres
--

CREATE TABLE archive.test (
    id integer
);


ALTER TABLE archive.test OWNER TO postgres;

--
-- Name: courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courses (
    course_id integer NOT NULL,
    course_code character varying(10) NOT NULL,
    course_name character varying(150) NOT NULL,
    dept_id integer,
    credit_hours integer,
    level integer,
    max_students integer DEFAULT 40,
    is_active boolean DEFAULT true,
    description text,
    CONSTRAINT courses_credit_hours_check CHECK (((credit_hours >= 1) AND (credit_hours <= 6))),
    CONSTRAINT courses_level_check CHECK ((level = ANY (ARRAY[1, 2, 3, 4])))
);


ALTER TABLE public.courses OWNER TO postgres;

--
-- Name: courses_course_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.courses_course_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.courses_course_id_seq OWNER TO postgres;

--
-- Name: courses_course_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.courses_course_id_seq OWNED BY public.courses.course_id;


--
-- Name: departments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.departments (
    dept_id integer NOT NULL,
    dept_name character varying(100) NOT NULL,
    faculty_id integer,
    head_name character varying(100),
    location character varying(100),
    phone character varying(20)
);


ALTER TABLE public.departments OWNER TO postgres;

--
-- Name: departments_dept_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.departments_dept_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.departments_dept_id_seq OWNER TO postgres;

--
-- Name: departments_dept_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.departments_dept_id_seq OWNED BY public.departments.dept_id;


--
-- Name: dept_summary; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dept_summary (
    dept_name character varying(100),
    student_count bigint,
    average_gpa numeric,
    total_scholarship numeric
);


ALTER TABLE public.dept_summary OWNER TO postgres;

--
-- Name: enrollment_audit; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.enrollment_audit (
    audit_id integer NOT NULL,
    old_grade numeric(4,2),
    new_grade numeric(4,2),
    student_id integer,
    changed_at timestamp with time zone DEFAULT now(),
    changed_by text
);


ALTER TABLE public.enrollment_audit OWNER TO postgres;

--
-- Name: enrollment_audit_audit_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.enrollment_audit_audit_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.enrollment_audit_audit_id_seq OWNER TO postgres;

--
-- Name: enrollment_audit_audit_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.enrollment_audit_audit_id_seq OWNED BY public.enrollment_audit.audit_id;


--
-- Name: enrollments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.enrollments (
    enrollment_id integer NOT NULL,
    student_id integer,
    course_id integer,
    semester character varying(20) NOT NULL,
    year integer NOT NULL,
    grade numeric(4,2),
    letter_grade character varying(2),
    enrolled_at timestamp with time zone DEFAULT now(),
    CONSTRAINT enrollments_grade_check CHECK (((grade >= (0)::numeric) AND (grade <= (100)::numeric)))
);


ALTER TABLE public.enrollments OWNER TO postgres;

--
-- Name: enrollments_copy; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.enrollments_copy (
    enrollment_id integer,
    student_id integer,
    course_id integer,
    semester character varying(20),
    year integer,
    grade numeric(4,2),
    letter_grade character varying(2),
    enrolled_at timestamp with time zone
);


ALTER TABLE public.enrollments_copy OWNER TO postgres;

--
-- Name: enrollments_enrollment_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.enrollments_enrollment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.enrollments_enrollment_id_seq OWNER TO postgres;

--
-- Name: enrollments_enrollment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.enrollments_enrollment_id_seq OWNED BY public.enrollments.enrollment_id;


--
-- Name: enrollments_structure; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.enrollments_structure (
    enrollment_id integer,
    student_id integer,
    course_id integer,
    semester character varying(20),
    year integer,
    grade numeric(4,2),
    letter_grade character varying(2),
    enrolled_at timestamp with time zone
);


ALTER TABLE public.enrollments_structure OWNER TO postgres;

--
-- Name: exam_results; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.exam_results (
    result_id integer NOT NULL,
    status character varying(20) DEFAULT 'pending'::character varying,
    score integer DEFAULT 20,
    exam_date date DEFAULT CURRENT_DATE,
    created_by character varying(50) DEFAULT CURRENT_USER
);


ALTER TABLE public.exam_results OWNER TO postgres;

--
-- Name: exam_results_result_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.exam_results_result_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.exam_results_result_id_seq OWNER TO postgres;

--
-- Name: exam_results_result_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.exam_results_result_id_seq OWNED BY public.exam_results.result_id;


--
-- Name: faculties; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.faculties (
    faculty_id integer NOT NULL,
    faculty_name character varying(100) NOT NULL,
    dean character varying(100),
    building character varying(50),
    budget numeric(15,2),
    established date
);


ALTER TABLE public.faculties OWNER TO postgres;

--
-- Name: faculties_faculty_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.faculties_faculty_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.faculties_faculty_id_seq OWNER TO postgres;

--
-- Name: faculties_faculty_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.faculties_faculty_id_seq OWNED BY public.faculties.faculty_id;


--
-- Name: high_gpa_students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.high_gpa_students (
    student_id integer,
    first_name character varying(50),
    last_name character varying(50),
    email character varying(150),
    phone character varying(20),
    birthdate date,
    gender character varying(10),
    nationality character varying(50),
    dept_id integer,
    enroll_date date,
    gpa numeric(3,2),
    is_active boolean,
    address text,
    metadata jsonb,
    created_at timestamp with time zone
);


ALTER TABLE public.high_gpa_students OWNER TO postgres;

--
-- Name: professors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.professors (
    prof_id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    email character varying(150) NOT NULL,
    title character varying(30),
    dept_id integer,
    hire_date date,
    salary numeric(10,2),
    is_active boolean DEFAULT true,
    manager_id integer,
    metadata jsonb,
    created_at timestamp with time zone DEFAULT now(),
    CONSTRAINT professors_title_check CHECK (((title)::text = ANY ((ARRAY['Lecturer'::character varying, 'Asst. Professor'::character varying, 'Associate Professor'::character varying, 'Professor'::character varying])::text[]))),
    CONSTRAINT salary_range CHECK (((salary >= (5000)::numeric) AND (salary <= (100000)::numeric)))
);


ALTER TABLE public.professors OWNER TO postgres;

--
-- Name: professors_prof_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.professors_prof_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.professors_prof_id_seq OWNER TO postgres;

--
-- Name: professors_prof_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.professors_prof_id_seq OWNED BY public.professors.prof_id;


--
-- Name: salary_log; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.salary_log (
    log_id integer NOT NULL,
    prof_id integer,
    old_salary numeric,
    new_salary numeric,
    changed_by text DEFAULT CURRENT_USER,
    changed_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.salary_log OWNER TO postgres;

--
-- Name: salary_log_log_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.salary_log_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.salary_log_log_id_seq OWNER TO postgres;

--
-- Name: salary_log_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.salary_log_log_id_seq OWNED BY public.salary_log.log_id;


--
-- Name: scholarships; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.scholarships (
    scholarship_id integer NOT NULL,
    student_id integer,
    amount numeric(10,2),
    type character varying(50),
    start_date date,
    end_date date,
    notes text
);


ALTER TABLE public.scholarships OWNER TO postgres;

--
-- Name: scholarships_scholarship_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.scholarships_scholarship_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.scholarships_scholarship_id_seq OWNER TO postgres;

--
-- Name: scholarships_scholarship_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.scholarships_scholarship_id_seq OWNED BY public.scholarships.scholarship_id;


--
-- Name: student_contacts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student_contacts (
    student_id integer,
    contact public.contact_info
);


ALTER TABLE public.student_contacts OWNER TO postgres;

--
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    student_id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    email character varying(150) NOT NULL,
    phone character varying(20),
    birthdate date,
    gender character varying(10),
    nationality character varying(50) DEFAULT 'Egyptian'::character varying,
    dept_id integer,
    enroll_date date DEFAULT CURRENT_DATE NOT NULL,
    gpa numeric(3,2),
    is_active boolean DEFAULT true,
    address text,
    metadata jsonb,
    created_at timestamp with time zone DEFAULT now(),
    level public.student_level,
    CONSTRAINT students_gender_check CHECK (((gender)::text = ANY ((ARRAY['Male'::character varying, 'Female'::character varying])::text[]))),
    CONSTRAINT students_gpa_check CHECK (((gpa >= 0.0) AND (gpa <= 4.0)))
);


ALTER TABLE public.students OWNER TO postgres;

--
-- Name: students_student_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.students_student_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.students_student_id_seq OWNER TO postgres;

--
-- Name: students_student_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.students_student_id_seq OWNED BY public.students.student_id;


--
-- Name: teaches; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teaches (
    teach_id integer NOT NULL,
    prof_id integer,
    course_id integer,
    semester character varying(20) NOT NULL,
    year integer NOT NULL,
    room character varying(20),
    schedule character varying(100)
);


ALTER TABLE public.teaches OWNER TO postgres;

--
-- Name: teaches_teach_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.teaches_teach_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.teaches_teach_id_seq OWNER TO postgres;

--
-- Name: teaches_teach_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.teaches_teach_id_seq OWNED BY public.teaches.teach_id;


--
-- Name: v_student_details; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.v_student_details AS
 SELECT s.student_id,
    concat(s.first_name, ' ', s.last_name) AS full_name,
    s.email,
    s.gpa,
    d.dept_name,
    f.faculty_name,
    s.dept_id
   FROM ((public.students s
     LEFT JOIN public.departments d ON ((s.dept_id = d.dept_id)))
     LEFT JOIN public.faculties f ON ((d.faculty_id = f.faculty_id)));


ALTER VIEW public.v_student_details OWNER TO postgres;

--
-- Name: courses course_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses ALTER COLUMN course_id SET DEFAULT nextval('public.courses_course_id_seq'::regclass);


--
-- Name: departments dept_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departments ALTER COLUMN dept_id SET DEFAULT nextval('public.departments_dept_id_seq'::regclass);


--
-- Name: enrollment_audit audit_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enrollment_audit ALTER COLUMN audit_id SET DEFAULT nextval('public.enrollment_audit_audit_id_seq'::regclass);


--
-- Name: enrollments enrollment_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enrollments ALTER COLUMN enrollment_id SET DEFAULT nextval('public.enrollments_enrollment_id_seq'::regclass);


--
-- Name: exam_results result_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exam_results ALTER COLUMN result_id SET DEFAULT nextval('public.exam_results_result_id_seq'::regclass);


--
-- Name: faculties faculty_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.faculties ALTER COLUMN faculty_id SET DEFAULT nextval('public.faculties_faculty_id_seq'::regclass);


--
-- Name: professors prof_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors ALTER COLUMN prof_id SET DEFAULT nextval('public.professors_prof_id_seq'::regclass);


--
-- Name: salary_log log_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salary_log ALTER COLUMN log_id SET DEFAULT nextval('public.salary_log_log_id_seq'::regclass);


--
-- Name: scholarships scholarship_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.scholarships ALTER COLUMN scholarship_id SET DEFAULT nextval('public.scholarships_scholarship_id_seq'::regclass);


--
-- Name: students student_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students ALTER COLUMN student_id SET DEFAULT nextval('public.students_student_id_seq'::regclass);


--
-- Name: teaches teach_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teaches ALTER COLUMN teach_id SET DEFAULT nextval('public.teaches_teach_id_seq'::regclass);


--
-- Data for Name: test; Type: TABLE DATA; Schema: archive; Owner: postgres
--

COPY archive.test (id) FROM stdin;
\.


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses (course_id, course_code, course_name, dept_id, credit_hours, level, max_students, is_active, description) FROM stdin;
1	CS101	Introduction to Programming	3	3	1	50	t	Python basics, variables, loops, functions
2	CS201	Data Structures	3	3	2	40	t	Arrays, linked lists, stacks, queues, trees
3	CS301	Database Systems	3	3	3	35	t	Relational databases, SQL, normalization
4	CS401	Software Engineering	3	3	4	30	t	SDLC, UML, design patterns, testing
5	CE101	Circuit Analysis	1	3	1	45	t	Kirchhoff laws, resistors, capacitors
6	CE201	Digital Logic	1	3	2	40	t	Boolean algebra, gates, flip-flops
7	CE301	Computer Architecture	1	3	3	35	t	CPU design, memory hierarchy, pipelines
8	IS201	Systems Analysis	4	3	2	40	t	Requirements, modeling, feasibility
9	IS301	IT Project Management	4	3	3	30	t	Planning, tracking, Agile, Scrum
10	BA101	Principles of Management	5	3	1	60	t	Management functions, leadership, motivation
11	BA201	Marketing Fundamentals	5	3	2	50	t	Market analysis, 4Ps, consumer behavior
12	ACC101	Financial Accounting	6	3	1	55	t	Journal entries, ledger, trial balance
13	ACC201	Cost Accounting	6	3	2	40	t	Job costing, process costing, variance
14	MATH101	Calculus I	7	4	1	70	t	Limits, derivatives, integrals
15	MATH201	Linear Algebra	7	3	2	55	t	Vectors, matrices, eigenvalues
16	PHY101	Physics I	8	3	1	65	t	Mechanics, kinematics, energy
17	PHY201	Electromagnetism	8	3	2	50	t	Electric fields, magnetic fields, waves
18	EL201	Electronics I	2	3	2	40	t	Diodes, BJTs, amplifier basics
19	EL301	Signal Processing	2	3	3	35	t	Fourier, Laplace, Z-transforms
20	ARAB101	Arabic Language	9	2	1	80	t	Grammar, writing, literature basics
\.


--
-- Data for Name: departments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.departments (dept_id, dept_name, faculty_id, head_name, location, phone) FROM stdin;
1	Computer Engineering	1	Dr. Sameh Adel	Cairo	0221001100
2	Electronics	1	Dr. Rania Fouad	Cairo	0221001101
3	Computer Science	2	Dr. Khaled Nour	Giza	0221002200
4	Information Systems	2	Dr. Dina Hassan	Giza	0221002201
5	Business Administration	3	Dr. Omar Saad	Alexandria	0221003300
6	Accounting	3	Dr. Sara Magdy	Alexandria	0221003301
7	Mathematics	4	Dr. Youssef Ali	Cairo	0221004400
8	Physics	4	Dr. Hana Mostafa	Cairo	0221004401
9	Arabic Literature	5	Dr. Faten Wagdy	Luxor	0221005500
10	History	5	Dr. Amr Galal	Luxor	0221005501
\.


--
-- Data for Name: dept_summary; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.dept_summary (dept_name, student_count, average_gpa, total_scholarship) FROM stdin;
Information Systems	3	2.82	0
Accounting	4	3.23	8000.00
Arabic Literature	0	\N	0
Business Administration	4	3.59	16000.00
Computer Science	6	3.38	12000.00
Computer Engineering	5	3.29	5000.00
Mathematics	3	3.02	0
Electronics	3	3.32	0
History	0	\N	0
Physics	2	2.65	0
\.


--
-- Data for Name: enrollment_audit; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.enrollment_audit (audit_id, old_grade, new_grade, student_id, changed_at, changed_by) FROM stdin;
1	92.00	60.00	1	2026-03-28 21:00:26.155087+02	postgres
2	60.00	70.00	1	2026-03-28 21:01:00.345397+02	postgres
\.


--
-- Data for Name: enrollments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.enrollments (enrollment_id, student_id, course_id, semester, year, grade, letter_grade, enrolled_at) FROM stdin;
2	1	2	Spring	2022	87.00	B+	2026-03-23 14:42:59.880732+02
4	1	14	Fall	2021	78.00	B	2026-03-23 14:42:59.880732+02
5	2	1	Fall	2022	88.00	B+	2026-03-23 14:42:59.880732+02
6	2	2	Spring	2023	91.00	A	2026-03-23 14:42:59.880732+02
7	2	14	Fall	2022	85.00	B+	2026-03-23 14:42:59.880732+02
8	3	5	Fall	2020	72.00	C+	2026-03-23 14:42:59.880732+02
9	3	6	Spring	2021	68.00	C	2026-03-23 14:42:59.880732+02
10	3	14	Fall	2020	81.00	B	2026-03-23 14:42:59.880732+02
11	3	16	Fall	2020	76.00	B-	2026-03-23 14:42:59.880732+02
12	4	8	Fall	2021	83.00	B	2026-03-23 14:42:59.880732+02
13	4	9	Spring	2022	79.00	B-	2026-03-23 14:42:59.880732+02
14	4	14	Fall	2021	90.00	A-	2026-03-23 14:42:59.880732+02
15	5	18	Fall	2022	86.00	B+	2026-03-23 14:42:59.880732+02
16	5	16	Fall	2022	80.00	B	2026-03-23 14:42:59.880732+02
17	5	17	Spring	2023	74.00	C+	2026-03-23 14:42:59.880732+02
18	6	10	Fall	2020	77.00	B-	2026-03-23 14:42:59.880732+02
19	6	11	Spring	2021	82.00	B	2026-03-23 14:42:59.880732+02
20	6	12	Fall	2020	88.00	B+	2026-03-23 14:42:59.880732+02
21	7	1	Fall	2021	65.00	C	2026-03-23 14:42:59.880732+02
22	7	2	Spring	2022	71.00	C+	2026-03-23 14:42:59.880732+02
23	7	14	Fall	2021	69.00	C	2026-03-23 14:42:59.880732+02
24	8	12	Fall	2022	96.00	A+	2026-03-23 14:42:59.880732+02
25	8	13	Spring	2023	93.00	A	2026-03-23 14:42:59.880732+02
26	9	14	Fall	2020	55.00	D+	2026-03-23 14:42:59.880732+02
27	9	15	Spring	2021	60.00	D+	2026-03-23 14:42:59.880732+02
28	10	16	Fall	2021	63.00	C-	2026-03-23 14:42:59.880732+02
29	10	17	Spring	2022	58.00	D+	2026-03-23 14:42:59.880732+02
30	11	1	Fall	2022	94.00	A	2026-03-23 14:42:59.880732+02
31	11	2	Spring	2023	89.00	B+	2026-03-23 14:42:59.880732+02
32	11	3	Fall	2023	91.00	A	2026-03-23 14:42:59.880732+02
33	12	5	Fall	2020	84.00	B	2026-03-23 14:42:59.880732+02
34	12	6	Spring	2021	79.00	B-	2026-03-23 14:42:59.880732+02
35	12	7	Fall	2021	77.00	B-	2026-03-23 14:42:59.880732+02
36	14	10	Fall	2022	97.00	A+	2026-03-23 14:42:59.880732+02
37	14	11	Spring	2023	94.00	A	2026-03-23 14:42:59.880732+02
38	15	18	Fall	2020	73.00	C+	2026-03-23 14:42:59.880732+02
39	15	19	Spring	2021	68.00	C	2026-03-23 14:42:59.880732+02
40	16	12	Fall	2021	89.00	B+	2026-03-23 14:42:59.880732+02
41	16	13	Spring	2022	85.00	B+	2026-03-23 14:42:59.880732+02
42	17	1	Fall	2022	78.00	B	2026-03-23 14:42:59.880732+02
43	17	2	Spring	2023	75.00	B-	2026-03-23 14:42:59.880732+02
44	19	5	Fall	2021	90.00	A-	2026-03-23 14:42:59.880732+02
45	19	6	Spring	2022	88.00	B+	2026-03-23 14:42:59.880732+02
46	19	7	Fall	2022	85.00	B+	2026-03-23 14:42:59.880732+02
47	20	16	Fall	2022	70.00	C+	2026-03-23 14:42:59.880732+02
48	20	17	Spring	2023	66.00	C	2026-03-23 14:42:59.880732+02
49	21	10	Fall	2020	80.00	B	2026-03-23 14:42:59.880732+02
50	21	11	Spring	2021	76.00	B-	2026-03-23 14:42:59.880732+02
51	24	1	Fall	2020	91.00	A	2026-03-23 14:42:59.880732+02
52	24	2	Spring	2021	93.00	A	2026-03-23 14:42:59.880732+02
53	24	3	Fall	2021	88.00	B+	2026-03-23 14:42:59.880732+02
54	28	10	Fall	2021	99.00	A+	2026-03-23 14:42:59.880732+02
55	28	11	Spring	2022	96.00	A+	2026-03-23 14:42:59.880732+02
56	30	1	Fall	2020	87.00	B+	2026-03-23 14:42:59.880732+02
57	30	2	Spring	2021	90.00	A-	2026-03-23 14:42:59.880732+02
58	30	3	Fall	2021	94.00	A	2026-03-23 14:42:59.880732+02
60	5	1	Fall	2023	\N	\N	2026-03-24 15:12:27.552298+02
3	1	3	Fall	2022	98.00	A+	2026-03-23 14:42:59.880732+02
1	1	1	Fall	2021	70.00	A	2026-03-23 14:42:59.880732+02
\.


--
-- Data for Name: enrollments_copy; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.enrollments_copy (enrollment_id, student_id, course_id, semester, year, grade, letter_grade, enrolled_at) FROM stdin;
1	1	1	Fall	2021	92.00	A	2026-03-23 14:42:59.880732+02
2	1	2	Spring	2022	87.00	B+	2026-03-23 14:42:59.880732+02
4	1	14	Fall	2021	78.00	B	2026-03-23 14:42:59.880732+02
5	2	1	Fall	2022	88.00	B+	2026-03-23 14:42:59.880732+02
6	2	2	Spring	2023	91.00	A	2026-03-23 14:42:59.880732+02
7	2	14	Fall	2022	85.00	B+	2026-03-23 14:42:59.880732+02
8	3	5	Fall	2020	72.00	C+	2026-03-23 14:42:59.880732+02
9	3	6	Spring	2021	68.00	C	2026-03-23 14:42:59.880732+02
10	3	14	Fall	2020	81.00	B	2026-03-23 14:42:59.880732+02
11	3	16	Fall	2020	76.00	B-	2026-03-23 14:42:59.880732+02
12	4	8	Fall	2021	83.00	B	2026-03-23 14:42:59.880732+02
13	4	9	Spring	2022	79.00	B-	2026-03-23 14:42:59.880732+02
14	4	14	Fall	2021	90.00	A-	2026-03-23 14:42:59.880732+02
15	5	18	Fall	2022	86.00	B+	2026-03-23 14:42:59.880732+02
16	5	16	Fall	2022	80.00	B	2026-03-23 14:42:59.880732+02
17	5	17	Spring	2023	74.00	C+	2026-03-23 14:42:59.880732+02
18	6	10	Fall	2020	77.00	B-	2026-03-23 14:42:59.880732+02
19	6	11	Spring	2021	82.00	B	2026-03-23 14:42:59.880732+02
20	6	12	Fall	2020	88.00	B+	2026-03-23 14:42:59.880732+02
21	7	1	Fall	2021	65.00	C	2026-03-23 14:42:59.880732+02
22	7	2	Spring	2022	71.00	C+	2026-03-23 14:42:59.880732+02
23	7	14	Fall	2021	69.00	C	2026-03-23 14:42:59.880732+02
24	8	12	Fall	2022	96.00	A+	2026-03-23 14:42:59.880732+02
25	8	13	Spring	2023	93.00	A	2026-03-23 14:42:59.880732+02
26	9	14	Fall	2020	55.00	D+	2026-03-23 14:42:59.880732+02
27	9	15	Spring	2021	60.00	D+	2026-03-23 14:42:59.880732+02
28	10	16	Fall	2021	63.00	C-	2026-03-23 14:42:59.880732+02
29	10	17	Spring	2022	58.00	D+	2026-03-23 14:42:59.880732+02
30	11	1	Fall	2022	94.00	A	2026-03-23 14:42:59.880732+02
31	11	2	Spring	2023	89.00	B+	2026-03-23 14:42:59.880732+02
32	11	3	Fall	2023	91.00	A	2026-03-23 14:42:59.880732+02
33	12	5	Fall	2020	84.00	B	2026-03-23 14:42:59.880732+02
34	12	6	Spring	2021	79.00	B-	2026-03-23 14:42:59.880732+02
35	12	7	Fall	2021	77.00	B-	2026-03-23 14:42:59.880732+02
36	14	10	Fall	2022	97.00	A+	2026-03-23 14:42:59.880732+02
37	14	11	Spring	2023	94.00	A	2026-03-23 14:42:59.880732+02
38	15	18	Fall	2020	73.00	C+	2026-03-23 14:42:59.880732+02
39	15	19	Spring	2021	68.00	C	2026-03-23 14:42:59.880732+02
40	16	12	Fall	2021	89.00	B+	2026-03-23 14:42:59.880732+02
41	16	13	Spring	2022	85.00	B+	2026-03-23 14:42:59.880732+02
42	17	1	Fall	2022	78.00	B	2026-03-23 14:42:59.880732+02
43	17	2	Spring	2023	75.00	B-	2026-03-23 14:42:59.880732+02
44	19	5	Fall	2021	90.00	A-	2026-03-23 14:42:59.880732+02
45	19	6	Spring	2022	88.00	B+	2026-03-23 14:42:59.880732+02
46	19	7	Fall	2022	85.00	B+	2026-03-23 14:42:59.880732+02
47	20	16	Fall	2022	70.00	C+	2026-03-23 14:42:59.880732+02
48	20	17	Spring	2023	66.00	C	2026-03-23 14:42:59.880732+02
49	21	10	Fall	2020	80.00	B	2026-03-23 14:42:59.880732+02
50	21	11	Spring	2021	76.00	B-	2026-03-23 14:42:59.880732+02
51	24	1	Fall	2020	91.00	A	2026-03-23 14:42:59.880732+02
52	24	2	Spring	2021	93.00	A	2026-03-23 14:42:59.880732+02
53	24	3	Fall	2021	88.00	B+	2026-03-23 14:42:59.880732+02
54	28	10	Fall	2021	99.00	A+	2026-03-23 14:42:59.880732+02
55	28	11	Spring	2022	96.00	A+	2026-03-23 14:42:59.880732+02
56	30	1	Fall	2020	87.00	B+	2026-03-23 14:42:59.880732+02
57	30	2	Spring	2021	90.00	A-	2026-03-23 14:42:59.880732+02
58	30	3	Fall	2021	94.00	A	2026-03-23 14:42:59.880732+02
3	1	3	Fall	2022	98.00	A+	2026-03-23 14:42:59.880732+02
\.


--
-- Data for Name: enrollments_structure; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.enrollments_structure (enrollment_id, student_id, course_id, semester, year, grade, letter_grade, enrolled_at) FROM stdin;
\.


--
-- Data for Name: exam_results; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.exam_results (result_id, status, score, exam_date, created_by) FROM stdin;
1	pending	20	2026-03-24	postgres
2	done	95	2026-03-24	admin
\.


--
-- Data for Name: faculties; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.faculties (faculty_id, faculty_name, dean, building, budget, established) FROM stdin;
2	Faculty of Computer Science	Dr. Mona Sherif	B	12000000.00	1990-01-15
3	Faculty of Business	Dr. Hisham Farouk	C	9500000.00	1965-03-20
4	Faculty of Science	Dr. Nadia Saleh	D	11000000.00	1950-06-10
5	Faculty of Arts	Dr. Layla Ibrahim	E	6000000.00	1948-10-05
6	Faculty of Law	Dr.Hany Aziz	G	8000000.00	\N
1	Faculty of Engineering	Dr. Tarek Mansour	A	15500000.00	1952-09-01
\.


--
-- Data for Name: high_gpa_students; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.high_gpa_students (student_id, first_name, last_name, email, phone, birthdate, gender, nationality, dept_id, enroll_date, gpa, is_active, address, metadata, created_at) FROM stdin;
2	Nour	Ibrahim	nour.ibrahim@student.edu	01002222222	2003-07-22	Female	Egyptian	3	2022-09-01	3.60	t	Giza, Dokki	\N	2026-03-23 14:42:59.880732+02
5	Khaled	Nasser	khaled.nasser@student.edu	01005555555	2003-05-30	Male	Egyptian	2	2022-09-01	3.50	t	Cairo, Heliopolis	\N	2026-03-23 14:42:59.880732+02
11	Amr	Sayed	amr.sayed@student.edu	01012222222	2003-02-14	Male	Egyptian	3	2022-09-01	3.70	t	Cairo, Helwan	\N	2026-03-23 14:42:59.880732+02
14	Rana	Wahba	rana.wahba@student.edu	01015555555	2003-03-19	Female	Saudi	5	2022-09-01	3.85	t	Giza, Dokki	\N	2026-03-23 14:42:59.880732+02
16	Yasmin	Helmy	yasmin.helmy@student.edu	01017777777	2002-09-06	Female	Egyptian	6	2021-09-01	3.55	t	Alexandria	\N	2026-03-23 14:42:59.880732+02
19	Ziad	Lotfy	ziad.lotfy@student.edu	01021111111	2002-11-28	Male	Lebanese	1	2021-09-01	3.65	t	Cairo, Zamalek	\N	2026-03-23 14:42:59.880732+02
24	Salma	Nabil	salma.nabil@student.edu	01026666666	2001-01-07	Female	Egyptian	3	2020-09-01	3.75	t	Giza, Dokki	\N	2026-03-23 14:42:59.880732+02
30	Farah	Essam	farah.essam@student.edu	01033333333	2001-03-28	Female	Syrian	3	2020-09-01	3.55	t	Cairo, Shubra	\N	2026-03-23 14:42:59.880732+02
1	Ahmed	Hassan	ahmed.hassan@student.edu	01001111111	2002-03-10	Male	Egyptian	1	2021-09-01	3.80	t	Cairo, Nasr City	{"laptop": true, "hobbies": ["chess", "reading", "coding"], "languages": ["Arabic", "English"], "extra_activities": "Student Union President"}	2026-03-23 14:42:59.880732+02
8	Layla	Mostafa	layla.mostafa@student.edu	01008888888	2003-04-25	Female	Egyptian	6	2022-09-01	3.90	t	Cairo, Zamalek	{"laptop": true, "hobbies": ["painting", "music"], "languages": ["Arabic", "English", "French"], "extra_activities": "Drama Club"}	2026-03-23 14:42:59.880732+02
28	Nadia	Selim	nadia.selim@student.edu	01031111111	2002-05-17	Female	Egyptian	5	2021-09-01	3.95	t	Giza, 6th October	{"laptop": true, "hobbies": ["reading", "volunteering"], "languages": ["Arabic", "English", "German"], "extra_activities": "Research Assistant"}	2026-03-23 14:42:59.880732+02
\.


--
-- Data for Name: professors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.professors (prof_id, first_name, last_name, email, title, dept_id, hire_date, salary, is_active, manager_id, metadata, created_at) FROM stdin;
2	Rania	Fouad	rania.fouad@uni.edu	Associate Professor	2	2008-03-15	23000.00	t	1	\N	2026-03-23 14:42:59.880732+02
4	Dina	Hassan	dina.hassan@uni.edu	Asst. Professor	4	2015-08-20	18000.00	t	3	\N	2026-03-23 14:42:59.880732+02
5	Omar	Saad	omar.saad@uni.edu	Professor	5	2001-02-01	32000.00	t	\N	\N	2026-03-23 14:42:59.880732+02
6	Sara	Magdy	sara.magdy@uni.edu	Associate Professor	6	2010-07-01	24000.00	t	5	\N	2026-03-23 14:42:59.880732+02
7	Youssef	Ali	youssef.ali@uni.edu	Professor	7	2000-09-01	29000.00	t	\N	\N	2026-03-23 14:42:59.880732+02
8	Hana	Mostafa	hana.mostafa@uni.edu	Lecturer	8	2019-01-15	14000.00	t	7	\N	2026-03-23 14:42:59.880732+02
9	Faten	Wagdy	faten.wagdy@uni.edu	Associate Professor	9	2007-04-01	22000.00	t	\N	\N	2026-03-23 14:42:59.880732+02
10	Amr	Galal	amr.galal@uni.edu	Asst. Professor	10	2016-09-01	17000.00	t	9	\N	2026-03-23 14:42:59.880732+02
13	Maha	Lotfy	maha.lotfy@uni.edu	Lecturer	5	2022-09-01	12000.00	t	5	\N	2026-03-23 14:42:59.880732+02
14	Tarek	Sobhi	tarek.sobhi@uni.edu	Associate Professor	2	2012-03-01	25000.00	t	2	\N	2026-03-23 14:42:59.880732+02
15	Eman	Farid	eman.farid@uni.edu	Lecturer	4	2020-08-01	13500.00	t	4	\N	2026-03-23 14:42:59.880732+02
3	Khaled	Nour	khaled.nour@uni.edu	Professor	3	2003-01-10	34500.00	t	\N	\N	2026-03-23 14:42:59.880732+02
11	Nour	Samy	nour.samy@uni.edu	Lecturer	3	2021-02-01	14950.00	t	3	\N	2026-03-23 14:42:59.880732+02
17	Test1	NullCase	null@gmail.com	\N	\N	\N	5000.00	t	\N	\N	2026-03-29 17:22:33.057889+02
12	Karim	Zaki	karim.zaki@uni.edu	Asst. Professor	1	2018-06-15	20900.00	t	1	\N	2026-03-23 14:42:59.880732+02
1	Sameh	Adel	sameh.adel@uni.edu	Professor	1	2005-09-01	31900.00	t	\N	\N	2026-03-23 14:42:59.880732+02
\.


--
-- Data for Name: salary_log; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.salary_log (log_id, prof_id, old_salary, new_salary, changed_by, changed_at) FROM stdin;
1	12	19000.000000000000	20900.00	postgres	2026-03-29 18:06:37.529998+02
2	1	29000.000000000000	31900.00	postgres	2026-03-29 18:06:37.529998+02
\.


--
-- Data for Name: scholarships; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.scholarships (scholarship_id, student_id, amount, type, start_date, end_date, notes) FROM stdin;
1	1	5000.00	Merit	2022-09-01	2023-08-31	Top student in CS
2	8	8000.00	Merit	2022-09-01	2023-08-31	Highest GPA in Accounting
3	14	6000.00	Need-Based	2022-09-01	2023-08-31	Financial support
4	28	10000.00	Merit	2022-09-01	2023-08-31	National honor student
5	24	4000.00	Merit	2021-09-01	2022-08-31	Excellence award
6	11	3000.00	Need-Based	2023-09-01	2024-08-31	Partial support
7	7	5000.00	International	2021-09-01	2022-08-31	International student support
\.


--
-- Data for Name: student_contacts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.student_contacts (student_id, contact) FROM stdin;
\.


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.students (student_id, first_name, last_name, email, phone, birthdate, gender, nationality, dept_id, enroll_date, gpa, is_active, address, metadata, created_at, level) FROM stdin;
2	Nour	Ibrahim	nour.ibrahim@student.edu	01002222222	2003-07-22	Female	Egyptian	1	2022-09-01	3.60	t	Giza, Dokki	\N	2026-03-23 14:42:59.880732+02	Senior
3	Omar	Farouk	omar.farouk@student.edu	01003333333	2001-11-05	Male	Egyptian	1	2020-09-01	2.90	t	Alexandria	\N	2026-03-23 14:42:59.880732+02	Sophomore
4	Sara	Magdy	sara.magdy@student.edu	01004444444	2002-01-18	Female	Egyptian	4	2021-09-01	3.20	t	Cairo, Maadi	\N	2026-03-23 14:42:59.880732+02	Junior
5	Khaled	Nasser	khaled.nasser@student.edu	01005555555	2003-05-30	Male	Egyptian	2	2022-09-01	3.50	t	Cairo, Heliopolis	\N	2026-03-23 14:42:59.880732+02	Senior
6	Mona	Sherif	mona.sherif@student.edu	01006666666	2001-09-14	Female	Egyptian	5	2020-09-01	3.10	t	Alexandria	\N	2026-03-23 14:42:59.880732+02	Junior
9	Hassan	Gamal	hassan.gamal@student.edu	01009999999	2001-08-17	Male	Egyptian	7	2020-09-01	3.40	f	Cairo, Shubra	\N	2026-03-23 14:42:59.880732+02	Junior
10	Dina	Kamal	dina.kamal@student.edu	01011111111	2002-06-08	Female	Egyptian	8	2021-09-01	2.50	t	Giza, Mohandessin	\N	2026-03-23 14:42:59.880732+02	Sophomore
11	Amr	Sayed	amr.sayed@student.edu	01012222222	2003-02-14	Male	Egyptian	3	2022-09-01	3.70	t	Cairo, Helwan	\N	2026-03-23 14:42:59.880732+02	Senior
12	Heba	Fawzy	heba.fawzy@student.edu	01013333333	2001-10-29	Female	Egyptian	1	2020-09-01	3.00	t	Alexandria	\N	2026-03-23 14:42:59.880732+02	Junior
13	Tarek	Mansour	tarek.mansour@student.edu	01014444444	2002-07-11	Male	Egyptian	4	2021-09-01	2.20	f	Cairo, Nasr City	\N	2026-03-23 14:42:59.880732+02	Freshman
14	Rana	Wahba	rana.wahba@student.edu	01015555555	2003-03-19	Female	Saudi	5	2022-09-01	3.85	t	Giza, Dokki	\N	2026-03-23 14:42:59.880732+02	Senior
15	Mahmoud	Saber	mahmoud.saber@student.edu	01016666666	2001-12-01	Male	Egyptian	2	2020-09-01	3.15	t	Cairo, Maadi	\N	2026-03-23 14:42:59.880732+02	Junior
16	Yasmin	Helmy	yasmin.helmy@student.edu	01017777777	2002-09-06	Female	Egyptian	6	2021-09-01	3.55	t	Alexandria	\N	2026-03-23 14:42:59.880732+02	Senior
17	Karim	Anwar	karim.anwar@student.edu	01018888888	2003-01-23	Male	Egyptian	3	2022-09-01	2.95	t	Cairo, Heliopolis	\N	2026-03-23 14:42:59.880732+02	Sophomore
18	Reem	Fathy	reem.fathy@student.edu	01019999999	2001-05-16	Female	Egyptian	7	2020-09-01	3.25	t	Giza, 6th October	\N	2026-03-23 14:42:59.880732+02	Junior
19	Ziad	Lotfy	ziad.lotfy@student.edu	01021111111	2002-11-28	Male	Lebanese	1	2021-09-01	3.65	t	Cairo, Zamalek	\N	2026-03-23 14:42:59.880732+02	Senior
20	Nada	Wagdy	nada.wagdy@student.edu	01022222222	2003-08-09	Female	Egyptian	8	2022-09-01	2.80	t	Cairo, Shubra	\N	2026-03-23 14:42:59.880732+02	Sophomore
21	Sherif	Badr	sherif.badr@student.edu	01023333333	2001-04-02	Male	Egyptian	5	2020-09-01	3.45	t	Giza, Mohandessin	\N	2026-03-23 14:42:59.880732+02	Junior
22	Mariam	Sobhi	mariam.sobhi@student.edu	01024444444	2002-02-20	Female	Egyptian	4	2021-09-01	3.05	t	Alexandria	\N	2026-03-23 14:42:59.880732+02	Junior
23	Fares	Zaki	fares.zaki@student.edu	01025555555	2003-06-15	Male	Egyptian	6	2022-09-01	2.60	t	Cairo, Nasr City	\N	2026-03-23 14:42:59.880732+02	Sophomore
24	Salma	Nabil	salma.nabil@student.edu	01026666666	2001-01-07	Female	Egyptian	3	2020-09-01	3.75	t	Giza, Dokki	\N	2026-03-23 14:42:59.880732+02	Senior
26	Hana	Samir	hana.samir@student.edu	01028888888	2003-04-01	Female	Egyptian	7	2022-09-01	2.40	f	Alexandria	\N	2026-03-23 14:42:59.880732+02	Freshman
27	Bassem	Ramzy	bassem.ramzy@student.edu	01029999999	2001-07-25	Male	Egyptian	1	2020-09-01	3.10	t	Cairo, Heliopolis	\N	2026-03-23 14:42:59.880732+02	Junior
29	Mostafa	Gamal	mostafa.gamal@student.edu	01032222222	2003-09-04	Male	Egyptian	6	2022-09-01	2.85	t	Cairo, Zamalek	\N	2026-03-23 14:42:59.880732+02	Sophomore
30	Farah	Essam	farah.essam@student.edu	01033333333	2001-03-28	Female	Syrian	3	2020-09-01	3.55	t	Cairo, Shubra	\N	2026-03-23 14:42:59.880732+02	Senior
1	Ahmed	Hassan	ahmed.hassan@student.edu	01001111111	2002-03-10	Male	Egyptian	1	2021-09-01	3.80	t	Cairo, Nasr City	{"laptop": true, "hobbies": ["chess", "reading", "coding"], "languages": ["Arabic", "English"], "extra_activities": "Student Union President"}	2026-03-23 14:42:59.880732+02	Senior
8	Layla	Mostafa	layla.mostafa@student.edu	01008888888	2003-04-25	Female	Egyptian	6	2022-09-01	3.90	t	Cairo, Zamalek	{"laptop": true, "hobbies": ["painting", "music"], "languages": ["Arabic", "English", "French"], "extra_activities": "Drama Club"}	2026-03-23 14:42:59.880732+02	Senior
7	Youssef	Ali	youssef.ali@student.edu	01007777777	2002-12-03	Male	Jordanian	3	2021-09-01	2.75	t	Giza, 6th October	{"laptop": false, "hobbies": ["sports", "gaming"], "languages": ["Arabic", "English"]}	2026-03-23 14:42:59.880732+02	Sophomore
28	Nadia	Selim	nadia.selim@student.edu	01031111111	2002-05-17	Female	Egyptian	5	2021-09-01	3.95	t	Giza, 6th October	{"laptop": true, "hobbies": ["reading", "volunteering"], "languages": ["Arabic", "English", "German"], "extra_activities": "Research Assistant"}	2026-03-23 14:42:59.880732+02	Senior
25	Adam	Youssef	adam.youssef@student.edu	01027777777	2002-10-13	Male	\N	2	2021-09-01	3.30	t	Cairo, Maadi	\N	2026-03-23 14:42:59.880732+02	Junior
99	Ammar	Ahmed	ammar@gmail.com	\N	\N	\N	Egyptian	2	2026-03-24	0.00	t	Cairo	\N	2026-03-24 15:58:52.878639+02	\N
35	Test	User	test@gmail.com	\N	\N	\N	Egyptian	\N	2026-03-29	\N	t	\N	\N	2026-03-29 19:48:12.565876+02	\N
37	Test	User	test2@gmail.com	\N	\N	\N	Egyptian	\N	2026-03-29	\N	t	\N	\N	2026-03-29 19:48:36.523528+02	\N
\.


--
-- Data for Name: teaches; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teaches (teach_id, prof_id, course_id, semester, year, room, schedule) FROM stdin;
1	3	1	Fall	2021	B-101	Sun/Tue 10:00-11:30
2	3	1	Fall	2022	B-101	Sun/Tue 10:00-11:30
3	3	2	Spring	2022	B-102	Mon/Wed 12:00-13:30
4	3	2	Spring	2023	B-102	Mon/Wed 12:00-13:30
5	11	3	Fall	2022	B-201	Tue/Thu 09:00-10:30
6	11	3	Fall	2023	B-201	Tue/Thu 09:00-10:30
7	4	8	Fall	2021	B-301	Wed/Sat 11:00-12:30
8	4	9	Spring	2022	B-302	Sun/Tue 14:00-15:30
9	1	5	Fall	2020	A-101	Mon/Wed 08:00-09:30
10	1	5	Fall	2021	A-101	Mon/Wed 08:00-09:30
11	12	6	Spring	2021	A-102	Tue/Thu 10:00-11:30
12	12	6	Spring	2022	A-102	Tue/Thu 10:00-11:30
13	1	7	Fall	2021	A-201	Sun/Tue 13:00-14:30
14	5	10	Fall	2020	C-101	Mon/Wed 09:00-10:30
15	5	10	Fall	2021	C-101	Mon/Wed 09:00-10:30
16	5	10	Fall	2022	C-101	Mon/Wed 09:00-10:30
17	13	11	Spring	2021	C-102	Sun/Tue 11:00-12:30
18	6	12	Fall	2020	C-201	Wed/Sat 10:00-11:30
19	6	12	Fall	2021	C-201	Wed/Sat 10:00-11:30
20	7	14	Fall	2020	D-101	Sun/Mon/Tue 09:00-10:00
21	7	14	Fall	2021	D-101	Sun/Mon/Tue 09:00-10:00
22	7	14	Fall	2022	D-101	Sun/Mon/Tue 09:00-10:00
23	7	15	Spring	2021	D-102	Mon/Wed 11:00-12:30
24	8	16	Fall	2020	D-201	Tue/Thu 08:00-09:30
25	8	16	Fall	2021	D-201	Tue/Thu 08:00-09:30
26	8	16	Fall	2022	D-201	Tue/Thu 08:00-09:30
27	14	18	Fall	2022	A-301	Wed/Sat 13:00-14:30
28	2	19	Spring	2021	A-302	Mon/Wed 15:00-16:30
\.


--
-- Name: courses_course_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_course_id_seq', 20, true);


--
-- Name: departments_dept_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.departments_dept_id_seq', 10, true);


--
-- Name: enrollment_audit_audit_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.enrollment_audit_audit_id_seq', 2, true);


--
-- Name: enrollments_enrollment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.enrollments_enrollment_id_seq', 60, true);


--
-- Name: exam_results_result_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.exam_results_result_id_seq', 2, true);


--
-- Name: faculties_faculty_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.faculties_faculty_id_seq', 6, true);


--
-- Name: professors_prof_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.professors_prof_id_seq', 17, true);


--
-- Name: salary_log_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.salary_log_log_id_seq', 2, true);


--
-- Name: scholarships_scholarship_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.scholarships_scholarship_id_seq', 7, true);


--
-- Name: students_student_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.students_student_id_seq', 37, true);


--
-- Name: teaches_teach_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teaches_teach_id_seq', 28, true);


--
-- Name: courses courses_course_code_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_course_code_key UNIQUE (course_code);


--
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (course_id);


--
-- Name: departments departments_dept_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departments
    ADD CONSTRAINT departments_dept_name_key UNIQUE (dept_name);


--
-- Name: departments departments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departments
    ADD CONSTRAINT departments_pkey PRIMARY KEY (dept_id);


--
-- Name: enrollment_audit enrollment_audit_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enrollment_audit
    ADD CONSTRAINT enrollment_audit_pkey PRIMARY KEY (audit_id);


--
-- Name: enrollments enrollments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollments_pkey PRIMARY KEY (enrollment_id);


--
-- Name: enrollments enrollments_student_id_course_id_semester_year_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollments_student_id_course_id_semester_year_key UNIQUE (student_id, course_id, semester, year);


--
-- Name: exam_results exam_results_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exam_results
    ADD CONSTRAINT exam_results_pkey PRIMARY KEY (result_id);


--
-- Name: faculties faculties_faculty_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.faculties
    ADD CONSTRAINT faculties_faculty_name_key UNIQUE (faculty_name);


--
-- Name: faculties faculties_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.faculties
    ADD CONSTRAINT faculties_pkey PRIMARY KEY (faculty_id);


--
-- Name: professors professors_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors
    ADD CONSTRAINT professors_email_key UNIQUE (email);


--
-- Name: professors professors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors
    ADD CONSTRAINT professors_pkey PRIMARY KEY (prof_id);


--
-- Name: salary_log salary_log_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salary_log
    ADD CONSTRAINT salary_log_pkey PRIMARY KEY (log_id);


--
-- Name: scholarships scholarships_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.scholarships
    ADD CONSTRAINT scholarships_pkey PRIMARY KEY (scholarship_id);


--
-- Name: students students_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_email_key UNIQUE (email);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (student_id);


--
-- Name: teaches teaches_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teaches
    ADD CONSTRAINT teaches_pkey PRIMARY KEY (teach_id);


--
-- Name: teaches teaches_prof_id_course_id_semester_year_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teaches
    ADD CONSTRAINT teaches_prof_id_course_id_semester_year_key UNIQUE (prof_id, course_id, semester, year);


--
-- Name: idx_active_professors_salary; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_active_professors_salary ON public.professors USING btree (salary) WHERE (is_active = true);


--
-- Name: idx_students_dept; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_students_dept ON public.students USING btree (dept_id);


--
-- Name: idx_students_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_students_email ON public.students USING btree (email);


--
-- Name: enrollments trigger_enrollment; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER trigger_enrollment BEFORE UPDATE ON public.enrollments FOR EACH ROW EXECUTE FUNCTION public.log_enrollment_audit();


--
-- Name: professors trigger_professor; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER trigger_professor BEFORE INSERT ON public.professors FOR EACH ROW EXECUTE FUNCTION public.check_salary();


--
-- Name: courses courses_dept_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_dept_id_fkey FOREIGN KEY (dept_id) REFERENCES public.departments(dept_id);


--
-- Name: departments departments_faculty_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departments
    ADD CONSTRAINT departments_faculty_id_fkey FOREIGN KEY (faculty_id) REFERENCES public.faculties(faculty_id);


--
-- Name: enrollments enrollments_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollments_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(course_id);


--
-- Name: enrollments enrollments_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollments_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(student_id) ON DELETE CASCADE;


--
-- Name: professors professors_dept_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors
    ADD CONSTRAINT professors_dept_id_fkey FOREIGN KEY (dept_id) REFERENCES public.departments(dept_id);


--
-- Name: professors professors_manager_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors
    ADD CONSTRAINT professors_manager_id_fkey FOREIGN KEY (manager_id) REFERENCES public.professors(prof_id);


--
-- Name: scholarships scholarships_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.scholarships
    ADD CONSTRAINT scholarships_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(student_id);


--
-- Name: student_contacts student_contacts_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_contacts
    ADD CONSTRAINT student_contacts_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(student_id);


--
-- Name: students students_dept_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_dept_id_fkey FOREIGN KEY (dept_id) REFERENCES public.departments(dept_id);


--
-- Name: teaches teaches_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teaches
    ADD CONSTRAINT teaches_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(course_id);


--
-- Name: teaches teaches_prof_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teaches
    ADD CONSTRAINT teaches_prof_id_fkey FOREIGN KEY (prof_id) REFERENCES public.professors(prof_id);


--
-- Name: TABLE courses; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.courses TO uni_readonly;


--
-- Name: TABLE departments; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.departments TO uni_readonly;


--
-- Name: TABLE dept_summary; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.dept_summary TO uni_readonly;


--
-- Name: TABLE enrollment_audit; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.enrollment_audit TO uni_readonly;


--
-- Name: TABLE enrollments; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.enrollments TO uni_readonly;


--
-- Name: TABLE enrollments_copy; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.enrollments_copy TO uni_readonly;


--
-- Name: TABLE enrollments_structure; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.enrollments_structure TO uni_readonly;


--
-- Name: TABLE exam_results; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.exam_results TO uni_readonly;


--
-- Name: TABLE faculties; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.faculties TO uni_readonly;


--
-- Name: TABLE high_gpa_students; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.high_gpa_students TO uni_readonly;


--
-- Name: TABLE professors; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.professors TO uni_readonly;


--
-- Name: TABLE salary_log; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.salary_log TO uni_readonly;


--
-- Name: TABLE scholarships; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.scholarships TO uni_readonly;


--
-- Name: TABLE student_contacts; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.student_contacts TO uni_readonly;


--
-- Name: TABLE students; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.students TO uni_readonly;


--
-- Name: TABLE teaches; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.teaches TO uni_readonly;


--
-- Name: TABLE v_student_details; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.v_student_details TO uni_readonly;


--
-- PostgreSQL database dump complete
--

\unrestrict nlfMfY44LHOkH3TtjrYfMXf2DIMwOaUl5oAQSAF4XIzzV0LdjZq5hwUbRTYG1nA

