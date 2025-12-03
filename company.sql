CREATE DATABASE company_db;
USE company_db;
CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  dept VARCHAR(50),
  salary INT,
  city VARCHAR(50)
);

INSERT INTO employees (id, name, dept, salary, city) VALUES
(1, 'Amit',   'IT',      60000, 'Chennai'),
(2, 'Bala',   'HR',      45000, 'Chennai'),
(3, 'Charan', 'IT',      80000, 'Mumbai'),
(4, 'Deepa',  'Sales',   52000, 'Delhi'),
(5, 'Esha',   'IT',      30000, 'Chennai'),
(6, 'Faruk',  'HR',      70000, 'Delhi'),
(7, 'Gopi',   'Sales',   90000, 'Mumbai');

SELECT dept, COUNT(*) AS total_employees FROM employees GROUP BY dept;

SELECT dept, AVG(salary) AS avg_salary FROM employees GROUP BY dept;

SELECT city, COUNT(*) AS total_employees FROM employees GROUP BY city;

SELECT dept,MIN(salary) AS min_salary,MAX(salary) AS max_salary FROM employees GROUP BY dept;

SELECT dept,SUM(salary) AS total_salary FROM employees GROUP BY dept;

SELECT dept,COUNT(*) AS total_employees FROM employees GROUP BY dept HAVING COUNT(*) > 2;

SELECT dept,AVG(salary) AS avg_salary FROM employees GROUP BY dept HAVING AVG(salary) > 50000;

SELECT city,COUNT(*) AS total_employees FROM employees GROUP BY city HAVING COUNT(*) > 1;

SELECT dept, MAX(salary) AS highest_salary FROM employees GROUP BY dept HAVING MAX(salary) > 70000;

SELECT dept,SUM(salary) AS total_salary FROM employees GROUP BY dept HAVING SUM(salary) > 150000;












