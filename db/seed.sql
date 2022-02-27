-- Creating seed data to build the app

-- Insert initial data into employees_db

INSERT INTO department(departmentName) VALUES
('Marketing'),
('Research and Development'),
('Accounting'),
('Human Resources'),
('Customer Relations');

INSERT INTO role (title, salary, departmentId) VALUES
('Marketing Manager', 95000, 1),
('Marketing Intern', 25000, 1),
('Marking Analyst', 50000, 1),
('Salesperson', 45000, 1),
('Sales Lead', 75000, 1),
('Senior Marketing Manager', 125000, 1),
('Intern Software Engineer', 35000, 2),
('Junior Software Engineer', 80000, 2),
('Midlevel Software Engineer', 115000, 2),
('Senior Software Engineer', 175000, 2),
('Junior Accountant', 75000, 3),
('Senior Accountant', 105000, 3),
('Human Resources Intern', 20000, 4),
('Human Resources Manager', 75000, 4),
('Human Resources Director', 95000, 4),
('Customer Service Representative', 20000, 5),
('Customer Service Manager', 45000, 5);

INSERT INTO employee (firstName, lastName, positionId, managerId) VALUES
('Jim Bob', 'Thorton', 3, NULL),
('Sally', 'Cute', 3, 1),
('Reggie', 'Hart', 2, 1),
('Rosie', 'Loves', 15, NULL), 
('Ryder', 'Goof', 13, 4);     


