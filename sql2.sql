USE company1_db;

CREATE TABLE employees (
  emp_id INT PRIMARY KEY,
  emp_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  department VARCHAR(50) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  join_date DATE NOT NULL
);

INSERT INTO employees (emp_id, emp_name, email, department, salary, join_date) VALUES
(1, 'Arasu ', 'arasu@example.com', 'IT', 45000.50, '2025-10-15'),
(2, 'Sujith', 'sujith@example.com', 'HR', 52000.00, '2025-11-10'),
(3, 'Maduvanth', 'maduvanth@example.com', 'Finance', 60000.75, '2025-11-20'),
(4, 'Abishek', 'abishek@example.com', 'IT', 70000.00, '2025-09-25'),
(5, 'Vignesh', 'vicky@example.com', 'Sales', 48000.25, '2025-11-28');

UPDATE employees SET emp_name = UPPER(emp_name) WHERE emp_id = 1;


SELECT department, SUM(salary) AS total_salary FROM employees GROUP BY department;


SELECT * FROM employees WHERE join_date > NOW() - INTERVAL 30 DAY;


SELECT emp_name, salary, ROUND(salary, 2) AS rounded_salary FROM employees;


SELECT * FROM employees WHERE LENGTH(emp_name) > 5;


SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department HAVING AVG(salary) > 50000;


UPDATE employees SET salary = salary * 1.10;


ALTER TABLE employees ADD COLUMN bonus INT;


SELECT emp_name, salary, join_date, YEAR(join_date) AS join_year FROM employees ORDER BY join_date ASC;