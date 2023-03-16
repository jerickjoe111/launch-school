SELECT first_name, last_name, job_title, salary FROM employees
JOIN jobs ON employees.job_id = jobs.job_id;

SELECT job_title, round(avg(salary), 2) FROM employees
JOIN jobs ON jobs.job_id = employees.job_id
GROUP BY job_title;

SELECT department_name, count(employee_id) as number_of_workers, round(avg(salary), 2) as average_salary FROM departments
JOIN employees ON departments.department_id = employees.department_id
GROUP BY department_name
HAVING count(employee_id) BETWEEN 1 AND 10;