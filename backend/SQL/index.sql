--Give everything back from table *
SELECT * FROM countries;

SELECT 
    country_name, 
    region_id
FROM countries;


--Arithmetic

SELECT * FROM sales;
SELECT amount / 10 FROM sales;

SELECT amount + 3 FROM sales;

SELECT amount - 5 FROM sales;

SELECT amount * 10 FROM sales;


--Logical

SELECT * FROM employees;

SELECT * FROM employees
WHERE NOT (job_id IS NULL);

SELECT 
    job_title,
    min_salary
FROM jobs
WHERE NOT (min_salary BETWEEN 5000 AND 8000);


SELECT * FROM jobs
WHERE job_title='Programmer' AND job_id='IT_PROG';


SELECT * FROM jobs
WHERE job_title='Sales Manager' OR job_title='President';

SELECT 'Hello' || 'World' AS "concatenated string";

SELECT first_name || ' ' || last_name AS "FULL NAME"
FROM employees;


--Comparison

SELECT * FROM employees
WHERE salary = 8000;

SELECT * FROM jobs
WHERE max_salary < 10000;

SELECT * FROM jobs
WHERE min_salary > 15000;


SELECT * FROM employees
WHERE last_name IN ('Smyth', 'Fay');

SELECT * FROM employees 
WHERE first_name LIKE '%D%';




------ Day 3 ----- Joins & Subqueries -----------

--Single
SELECT first_name, UPPER(last_name) FROM employees;

--Multi
SELECT MAX(salary) FROM employees;


SELECT job_id, MAX(salary)
FROM employees
GROUP BY job_id;

-- Count how many employees are there in each department?
SELECT department_id,
COUNT(employee_id)
FROM employees
GROUP BY department_id;


SELECT employee_id, department_id FROM employees;


-- Count how many employees are there in each job id?

SELECT job_id,
COUNT(job_id)
FROM employees
GROUP BY job_id;


SELECT last_name, first_name, job_id, salary
FROM employees
ORDER BY last_name ASC, first_name DESC;

-- Select locations ordering them by city.
    SELECT city, state_province
    FROM locations
    ORDER BY city ASC;

-- Select locations, ordering them by postal code.

 SELECT city, postal_code
 FROM locations
 ORDER BY postal_code ASC;


 --String Conversion Funcs

SELECT 'Hello ' || 'Dolly';
SELECT SUBSTRING('Hello Dolly!' FROM 1 FOR 5); --1 based index and inclusive
SELECT CHAR_LENGTH('Hello Dolly!');
SELECT POSITION('ll' IN 'Hello Dolly');

-- Number Funcs

SELECT ROUND(4.2);
SELECT ROUND(4.6);
SELECT ROUND(4.5);

SELECT TRUNC(4.2);
SELECT TRUNC(3.14159265358979323846);


SELECT ABS(-5);
SELECT ABS(5);

--Floor
SELECT FLOOR(3.14159265358979323846);

--Ceil
SELECT CEIL(3.14159265358979323846);


SELECT MOD(8, 3);
SELECT MOD(121, 10);


SELECT ROUND(453.141592, 4);
SELECT ROUND(453.141592, -1);


SELECT TRUNC(453.14159, 4);
SELECT TRUNC(453.141592, -2);


SELECT 
    EXTRACT(day FROM hire_date) AS "DAY",
    EXTRACT(month FROM hire_date) AS "MONTH",
    EXTRACT(year FROM hire_date) AS "YEAR"
FROM employees
WHERE employee_id = 200; 




-- if /Else 
Select
CASE job_id
when 'IT_PROG' THEN 'Information Technology Rep'



