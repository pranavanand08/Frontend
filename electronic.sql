use electronic_shop ;

CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100) NOT NULL,
    customer_phone VARCHAR(20)
);

CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    product_price DECIMAL(10,2) NOT NULL
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    product_id INT NOT NULL,
    order_date DATE NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

INSERT INTO customers (customer_name, customer_phone) VALUES
('Arun Kumar', '9000000001'),
('Priya Sharma', '9000000002'),
('Rahul Mehta', '9000000003'),
('Sneha R', '9000000004'),
('Vikram Singh', '9000000005');

INSERT INTO products (product_name, product_price) VALUES
('Laptop', 55000.00),
('Mobile Phone', 18000.00),
('Headphones', 2500.00),
('Keyboard', 1200.00),
('Mouse', 800.00);

INSERT INTO orders (customer_id, product_id, order_date) VALUES
(1, 1, '2025-12-01'),
(1, 3, '2025-12-02'),
(2, 2, '2025-12-02'),
(3, 5, '2025-12-03'),
(4, 4, '2025-12-03');INSERT INTO customers (customer_name, customer_phone) VALUES
('Arun Kumar', '9000000001'),
('Priya Sharma', '9000000002'),
('Rahul Mehta', '9000000003'),
('Sneha R', '9000000004'),
('Vikram Singh', '9000000005');

INSERT INTO products (product_name, product_price) VALUES
('Laptop', 55000.00),
('Mobile Phone', 18000.00),
('Headphones', 2500.00),
('Keyboard', 1200.00),
('Mouse', 800.00);

INSERT INTO orders (customer_id, product_id, order_date) VALUES
(1, 1, '2025-12-01'),
(1, 3, '2025-12-02'),
(2, 2, '2025-12-02'),
(3, 5, '2025-12-03'),
(4, 4, '2025-12-03');
INSERT INTO customers (customer_name, customer_phone) VALUES
('Arun Kumar', '9000000001'),
('Priya Sharma', '9000000002'),
('Rahul Mehta', '9000000003'),
('Sneha R', '9000000004'),
('Vikram Singh', '9000000005');

INSERT INTO products (product_name, product_price) VALUES
('Laptop', 55000.00),
('Mobile Phone', 18000.00),
('Headphones', 2500.00),
('Keyboard', 1200.00),
('Mouse', 800.00);

INSERT INTO orders (customer_id, product_id, order_date) VALUES
(1, 1, '2025-12-01'),
(1, 3, '2025-12-02'),
(2, 2, '2025-12-02'),
(3, 5, '2025-12-03'),
(4, 4, '2025-12-03');


CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100) NOT NULL
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL,
    teacher VARCHAR(100) NOT NULL
);

CREATE TABLE student_courses (
    student_course_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

